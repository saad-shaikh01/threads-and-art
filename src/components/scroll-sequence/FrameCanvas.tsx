"use client";

import { useEffect, useRef, type RefObject } from "react";
import type { CanvasFitMode } from "./config";

export interface FrameCanvasProps {
  /** Current scroll progress in [0, 1], read every animation frame. */
  progressRef: RefObject<number>;
  /** Resolves the image to draw for a given progress value. */
  getFrameForProgress: (progress: number) => HTMLImageElement | null;
  fitMode: CanvasFitMode;
}

interface CanvasSize {
  width: number;
  height: number;
  dpr: number;
}

/**
 * Pure rendering surface for the frame sequence. Everything here runs
 * outside React's render cycle on purpose: a single requestAnimationFrame
 * loop reads `progressRef` and repaints the canvas, but only when the
 * resolved frame actually changes — this component renders its JSX once
 * and never again, no matter how fast the user scrolls.
 */
export function FrameCanvas({ progressRef, getFrameForProgress, fitMode }: FrameCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lastDrawnImageRef = useRef<HTMLImageElement | null>(null);
  const sizeRef = useRef<CanvasSize>({ width: 0, height: 0, dpr: 1 });

  // Keep the canvas's backing store in sync with its displayed size and the
  // device pixel ratio, so frames render crisply without stretching.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      sizeRef.current = { width, height, dpr };
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      // Size changed — force the next tick to repaint even if the frame index didn't.
      lastDrawnImageRef.current = null;
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  // The render loop itself.
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d") ?? null;
    if (!canvas || !ctx) return;

    let rafId: number;

    const draw = () => {
      const progress = progressRef.current ?? 0;
      const image = getFrameForProgress(progress);

      if (image && image !== lastDrawnImageRef.current) {
        paintImage(ctx, image, sizeRef.current, fitMode);
        lastDrawnImageRef.current = image;
      }

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, [progressRef, getFrameForProgress, fitMode]);

  return <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" />;
}

/** Draws `image` into the canvas, centered, scaled per `fitMode`, preserving aspect ratio. */
function paintImage(
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  size: CanvasSize,
  fitMode: CanvasFitMode
) {
  const canvasWidth = size.width * size.dpr;
  const canvasHeight = size.height * size.dpr;
  if (canvasWidth <= 0 || canvasHeight <= 0) return;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  const scaleX = canvasWidth / image.naturalWidth;
  const scaleY = canvasHeight / image.naturalHeight;
  const scale = fitMode === "cover" ? Math.max(scaleX, scaleY) : Math.min(scaleX, scaleY);

  const drawWidth = image.naturalWidth * scale;
  const drawHeight = image.naturalHeight * scale;
  const offsetX = (canvasWidth - drawWidth) / 2;
  const offsetY = (canvasHeight - drawHeight) / 2;

  ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
}
