"use client";

import { useEffect, useRef, type RefObject } from "react";
import { acquireLenis, releaseLenis } from "@/lib/lenis";

export interface UseScrollProgressOptions<T extends HTMLElement> {
  /**
   * Ref to the OUTER scroll-track element (the tall element that defines the
   * pinned scroll range) — not the inner sticky element. Progress is derived
   * from how far this element has scrolled through the viewport.
   */
  containerRef: RefObject<T | null>;
}

export interface ScrollProgressHandle {
  /**
   * Current scroll progress in [0, 1], updated every Lenis scroll tick.
   * This lives in a ref (not React state) on purpose: consumers like a
   * canvas render loop read it every animation frame, and doing that
   * through state would re-render the React tree on every scroll pixel.
   */
  progressRef: RefObject<number>;
}

/**
 * Derives a 0 -> 1 scroll progress value from how far `containerRef` has
 * scrolled through the viewport, driven by the shared Lenis instance.
 * Scrolling up decreases progress exactly as scrolling down increased it —
 * progress is recomputed from absolute scroll position every tick, never
 * accumulated, so it is perfectly reversible by construction.
 */
export function useScrollProgress<T extends HTMLElement>({
  containerRef,
}: UseScrollProgressOptions<T>): ScrollProgressHandle {
  const progressRef = useRef(0);

  useEffect(() => {
    const lenis = acquireLenis();

    const computeProgress = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollableRange = rect.height - window.innerHeight;

      if (scrollableRange <= 0) {
        // Element is shorter than the viewport — there's no pinned range,
        // so progress is just "have we reached it yet".
        progressRef.current = rect.top <= 0 ? 1 : 0;
        return;
      }

      const scrolled = -rect.top;
      progressRef.current = Math.min(1, Math.max(0, scrolled / scrollableRange));
    };

    computeProgress();
    lenis.on("scroll", computeProgress);
    window.addEventListener("resize", computeProgress);

    return () => {
      lenis.off("scroll", computeProgress);
      window.removeEventListener("resize", computeProgress);
      releaseLenis();
    };
  }, [containerRef]);

  return { progressRef };
}
