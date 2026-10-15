"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { preloadFrames } from "@/lib/preloadFrames";
import { getFrameUrl, TOTAL_FRAMES } from "@/components/scroll-sequence/config";

export interface UseFrameSequenceResult {
  /** Number of frames resolved so far (loaded or failed) — for an optional loading indicator. */
  loadedCount: number;
  /** Total frames being tracked. */
  totalFrames: number;
  /** True once every frame has been requested. */
  isReady: boolean;
  /**
   * Resolves the best available image for a given 0..1 scroll progress.
   * Falls back to the nearest earlier loaded frame so playback never
   * flickers to blank while the rest of the sequence is still preloading.
   */
  getFrameForProgress: (progress: number) => HTMLImageElement | null;
}

/**
 * Owns preloading + caching for a frame sequence and exposes a single
 * lookup function that maps scroll progress to an image. The cache itself
 * is a plain mutable Map held in a ref — frames flow in without ever
 * triggering a React re-render; only `loadedCount` is React state, and
 * purely for an optional "x / y frames loaded" indicator.
 */
export function useFrameSequence(totalFrames: number = TOTAL_FRAMES): UseFrameSequenceResult {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const cacheRef = useRef<Map<number, HTMLImageElement>>(new Map());

  useEffect(() => {
    const controller = new AbortController();
    setLoadedCount(0);
    setIsReady(false);

    const { cache, promise } = preloadFrames({
      totalFrames,
      getUrl: getFrameUrl,
      signal: controller.signal,
      onProgress: (loaded) => setLoadedCount(loaded),
    });
    cacheRef.current = cache;

    promise.then(() => {
      if (!controller.signal.aborted) setIsReady(true);
    });

    return () => controller.abort();
  }, [totalFrames]);

  const getFrameForProgress = useMemo(() => {
    return (progress: number): HTMLImageElement | null => {
      const cache = cacheRef.current;
      const targetIndex = Math.min(
        totalFrames - 1,
        Math.max(0, Math.round(progress * (totalFrames - 1)))
      );

      // Walk backwards from the target frame to the nearest loaded one.
      for (let i = targetIndex; i >= 0; i -= 1) {
        const img = cache.get(i);
        if (img) return img;
      }
      return null;
    };
  }, [totalFrames]);

  return { loadedCount, totalFrames, isReady, getFrameForProgress };
}
