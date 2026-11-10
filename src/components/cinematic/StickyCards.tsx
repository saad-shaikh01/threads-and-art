"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { anton } from "@/components/ui/fonts";
import { PosterHeading } from "@/components/ui/PosterHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "./ScrambleText";

export interface StepItem {
  title: string;
  text: string;
  meta: string;
}

const TONES = [
  "bg-panel",
  "bg-[linear-gradient(150deg,rgb(84_26_36/0.85),var(--panel-deep))]",
  "bg-raised",
  "bg-[linear-gradient(150deg,rgb(243_30_57/0.22),var(--panel-deep))]",
];

function StepCard({ s, i, n, progress }: { s: StepItem; i: number; n: number; progress: MotionValue<number> }) {
  const scale = useTransform(progress, [i / n, 1], [1, 1 - (n - 1 - i) * 0.045]);
  return (
    <div
      className="sticky flex h-[44svh] min-h-[18rem] items-start last:h-auto"
      style={{ top: `calc(var(--header-h) + 2rem + ${i * 1.6}rem)` }}
    >
      <motion.article
        style={{ scale }}
        className={`relative w-full origin-top overflow-hidden rounded-[1.75rem] border border-line p-7 shadow-[0_-20px_60px_rgb(0_0_0/0.45)] md:p-12 ${TONES[i % TONES.length]}`}
      >
        <div aria-hidden className="absolute inset-0 fabric-texture opacity-30" />
        <div className="relative grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-12">
          <span className={`${anton.className} text-[clamp(4.5rem,10vw,8rem)] leading-none text-brand`}>0{i + 1}</span>
          <div>
            <h3 className="heading-display text-[clamp(1.6rem,1.2rem+1.6vw,2.6rem)] text-ivory">{s.title}</h3>
            <p className="mt-3 max-w-xl text-[0.95rem] leading-[1.8] text-muted">{s.text}</p>
          </div>
          <span className="w-fit rounded-full border border-ivory/20 bg-bg/50 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-ivory">
            {s.meta}
          </span>
        </div>
        <svg aria-hidden viewBox="0 0 400 20" className="relative mt-8 h-3 w-full text-brand/50" preserveAspectRatio="none">
          <path d="M0 10 Q 50 0 100 10 T 200 10 T 300 10 T 400 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 6" />
        </svg>
      </motion.article>
    </div>
  );
}

/** Process steps that pin and stack on top of each other (sticky-cards module). */
export function StickyCards({ eyebrow, word, script, intro, steps }: { eyebrow: string; word: string; script: string; intro: string; steps: readonly StepItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <section className="relative border-b border-line section-y">
      <div className="section-x flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <PosterHeading word={word} script={script} size="compact" />
        </div>
        <Reveal delay={0.2} className="max-w-sm lg:pb-4">
          <p className="text-sm leading-relaxed text-muted sm:text-base">{intro}</p>
        </Reveal>
      </div>
      <div ref={ref} className="section-x mt-16">
        {steps.map((s, i) => (
          <StepCard key={s.title} s={s} i={i} n={steps.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
