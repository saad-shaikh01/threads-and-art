"use client";

import Lenis from "lenis";

/**
 * A page can only sensibly have one smooth-scroll driver. This module keeps a
 * single shared Lenis instance (plus its own requestAnimationFrame loop) and
 * ref-counts consumers, so multiple scroll-driven sections on the same page
 * — now, or once this component is dropped into a larger site — share one
 * Lenis instead of fighting over the scroll container.
 */

let instance: Lenis | null = null;
let refCount = 0;
let rafId: number | null = null;

function tick(time: number) {
  instance?.raf(time);
  rafId = requestAnimationFrame(tick);
}

/** Acquire a reference to the shared Lenis instance, creating it on first use. */
export function acquireLenis(): Lenis {
  if (!instance) {
    // `anchors` lets in-page #links glide through Lenis (offset = sticky header).
    instance = new Lenis({
      autoRaf: false,
      anchors: { offset: -(window.innerWidth >= 768 ? 94 : 76) },
    });
    rafId = requestAnimationFrame(tick);
  }
  refCount += 1;
  return instance;
}

/** Release a reference. The instance is destroyed once nothing else needs it. */
export function releaseLenis(): void {
  refCount = Math.max(0, refCount - 1);
  if (refCount === 0 && instance) {
    if (rafId !== null) cancelAnimationFrame(rafId);
    rafId = null;
    instance.destroy();
    instance = null;
  }
}
