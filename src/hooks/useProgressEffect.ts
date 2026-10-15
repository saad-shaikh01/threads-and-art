"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Calls `onProgress` from one rAF loop whenever the scroll-progress ref
 * changes. Lets scroll scenes mutate DOM/CSS vars directly without
 * re-rendering React on every scrolled pixel.
 */
export function useProgressEffect(
  progressRef: RefObject<number>,
  onProgress: (progress: number) => void,
) {
  const callback = useRef(onProgress);
  useEffect(() => {
    callback.current = onProgress;
  });

  useEffect(() => {
    let raf = 0;
    let last = -1;
    const loop = () => {
      const p = progressRef.current ?? 0;
      if (p !== last) {
        last = p;
        callback.current(p);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [progressRef]);
}
