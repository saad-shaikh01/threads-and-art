"use client";

import Image from "next/image";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Check, Close } from "@/components/ui/Icons";
import { PosterHeading } from "@/components/ui/PosterHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "./ScrambleText";

interface Side {
  src: string;
  alt: string;
  label: string;
}

export interface ComparePoint {
  bad: string;
  good: string;
  text: string;
}

interface BeforeAfterProps {
  eyebrow: string;
  word: string;
  script: string;
  intro: string;
  before: Side;
  after: Side;
  points: readonly ComparePoint[];
}

/** Drag-to-wipe comparison with an intro sweep and a findings list (cursor-reveal module). */
export function BeforeAfter({ eyebrow, word, script, intro, before, after, points }: BeforeAfterProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [pos, setPos] = useState(50);

  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(92, 50, { duration: 1.8, ease: [0.65, 0, 0.35, 1], onUpdate: setPos });
    return () => c.stop();
  }, [inView, reduce]);

  return (
    <section className="relative isolate overflow-hidden border-b border-line section-y">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 fabric-texture opacity-20" />
        <div className="absolute right-[10%] top-1/2 h-[60vh] w-[60vh] -translate-y-1/2 rounded-full bg-brand/10 blur-[160px]" />
      </div>

      <div className="section-x grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <PosterHeading word={word} script={script} size="compact" />
          <Reveal delay={0.15}>
            <p className="mt-12 max-w-md text-sm leading-relaxed text-muted sm:text-base">{intro}</p>
          </Reveal>
          <ol className="mt-8 space-y-3">
            {points.map((p, i) => (
              <Reveal as="li" key={p.good} delay={0.1 + i * 0.06} className="surface-card flex gap-4 p-4">
                <span className="font-mono text-[11px] text-brand">0{i + 1}</span>
                <span className="min-w-0">
                  <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="inline-flex items-center gap-1.5 text-muted line-through decoration-brand/60">
                      <Close className="size-3" strokeWidth={2.5} /> {p.bad}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-ivory">
                      <Check className="size-3 text-brand" strokeWidth={2.5} /> {p.good}
                    </span>
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted">{p.text}</span>
                </span>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal y={40}>
          <div
            ref={stageRef}
            className="relative mx-auto aspect-square w-full max-w-2xl select-none overflow-hidden rounded-[2rem] border border-line bg-deep shadow-2xl shadow-black/50"
          >
            <Image src={after.src} alt={after.alt} fill sizes="(max-width:1024px) 92vw, 48vw" className="object-cover" />
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <Image src={before.src} alt={before.alt} fill sizes="(max-width:1024px) 92vw, 48vw" className="object-cover grayscale-[35%]" />
            </div>

            <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-line bg-bg/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted backdrop-blur-sm">
              {before.label}
            </span>
            <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-brand px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
              {after.label}
            </span>

            <div
              className="pointer-events-none absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-ivory to-transparent"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ivory/40 bg-bg/90 font-display text-sm italic text-ivory shadow-xl backdrop-blur">
                vs
              </span>
            </div>

            <input
              type="range"
              min={4}
              max={96}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label={`Compare ${before.label} with ${after.label}`}
              className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>
          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted">← Drag to compare →</p>
        </Reveal>
      </div>
    </section>
  );
}
