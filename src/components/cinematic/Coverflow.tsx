"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "@/components/ui/Icons";
import { PosterHeading } from "@/components/ui/PosterHeading";
import { Eyebrow } from "./ScrambleText";

export interface CoverItem {
  src: string;
  alt: string;
  caption: string;
}

const AUTOPLAY_MS = 3800;

/**
 * Centre-focused 3D carousel with angled neighbours (coverflow module).
 * Loops infinitely and auto-advances; pauses on hover, focus, drag or off-screen.
 */
export function Coverflow({
  eyebrow,
  word,
  script,
  items,
  id,
  aside,
}: {
  eyebrow: string;
  word: string;
  script: string;
  items: readonly CoverItem[];
  id?: string;
  /** Extra action shown next to the arrows, e.g. a "Full portfolio" link. */
  aside?: ReactNode;
}) {
  const n = items.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { amount: 0.3 });
  const reduce = useReducedMotion();

  const go = useCallback((d: number) => setActive((a) => (((a + d) % n) + n) % n), [n]);

  useEffect(() => {
    if (paused || !inView || reduce || n < 2) return;
    const t = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(t);
  }, [paused, inView, reduce, n, go, active]);

  const onDown = (e: PointerEvent) => {
    startX.current = e.clientX;
  };
  const onUp = (e: PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    startX.current = null;
  };

  return (
    <section id={id} className="relative isolate scroll-mt-24 overflow-hidden border-b border-line section-y">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[60%] h-[50vh] w-[80vw] -translate-x-1/2 rounded-full bg-brand/10 blur-[160px]" />
      </div>
      <div className="section-x flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <PosterHeading word={word} script={script} size="compact" />
        </div>
        <div className="flex items-center gap-2">
          {aside}
          <button type="button" onClick={() => go(-1)} aria-label="Previous" className="grid size-12 place-items-center rounded-full border border-line text-ivory transition-colors hover:border-brand">
            <ArrowLeft className="size-4" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next" className="grid size-12 place-items-center rounded-full border border-line text-ivory transition-colors hover:border-brand">
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <div
        ref={stageRef}
        className="relative mt-16 h-[min(62vw,30rem)] touch-pan-y select-none perspective-[1600px]"
        onPointerDown={onDown}
        onPointerUp={onUp}
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(-1);
          if (e.key === "ArrowRight") go(1);
        }}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={`${word} carousel`}
      >
        {items.map((it, i) => {
          // Shortest circular distance from the active slide, so the reel wraps forever.
          let o = (((i - active) % n) + n) % n;
          if (o > n / 2) o -= n;
          const abs = Math.abs(o);
          if (abs > 3) return null;
          return (
            <motion.figure
              key={it.src + i}
              onClick={() => setActive(i)}
              initial={false}
              animate={{
                x: `${-50 + o * 58}%`,
                rotateY: o === 0 ? 0 : o > 0 ? -38 : 38,
                scale: 1 - abs * 0.14,
                opacity: abs > 2 ? 0 : 1 - abs * 0.25,
              }}
              transition={
                abs === 3
                  ? // Slot 3 is hidden: jump there instantly so wrapping slides never fly across the stage.
                    { duration: 0.25, x: { duration: 0 }, rotateY: { duration: 0 }, scale: { duration: 0 } }
                  : { duration: 0.7, ease: [0.2, 0.7, 0.3, 1] }
              }
              style={{ zIndex: 10 - abs }}
              aria-hidden={o !== 0}
              className="absolute left-1/2 top-0 h-full w-[min(70vw,38rem)] cursor-pointer"
            >
              <div className={`relative h-full overflow-hidden rounded-[1.5rem] border bg-panel ${o === 0 ? "border-brand/60 shadow-[0_30px_80px_rgb(0_0_0/0.6)]" : "border-line"}`}>
                <Image src={it.src} alt={it.alt} fill sizes="(min-width:768px) 38rem, 70vw" className="object-cover" draggable={false} />
                {o !== 0 && <div aria-hidden className="absolute inset-0 bg-bg/40" />}
              </div>
              <figcaption className={`mt-4 text-center font-mono text-[11px] uppercase tracking-[0.25em] transition-opacity ${o === 0 ? "text-ivory opacity-100" : "opacity-0"}`}>
                {it.caption}
              </figcaption>
            </motion.figure>
          );
        })}
      </div>

      <div className="section-x mt-14 flex items-center justify-center gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
          {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </span>
        <div className="flex gap-1.5">
          {items.map((it, i) => (
            <button
              key={it.src + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-brand" : "w-3 bg-line hover:bg-muted"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
