"use client";

import { useState } from "react";
import { Check, Close } from "@/components/ui/Icons";
import { PosterHeading } from "@/components/ui/PosterHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "./ScrambleText";

export interface FlipItem {
  cheap: { title: string; text: string };
  pro: { title: string; text: string };
}

function FlipCard({ item, i }: { item: FlipItem; i: number }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={`${item.cheap.title}: tap to see how we fix it`}
      className="group relative h-80 w-full text-left perspective-[1400px]"
    >
      <span
        className={`relative block h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] transform-3d group-hover:rotate-y-180 ${flipped ? "rotate-y-180" : ""}`}
      >
        {/* Front: the cheap file */}
        <span className="absolute inset-0 flex flex-col rounded-[1.5rem] border border-line bg-panel p-7 backface-hidden">
          <span className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Cheap file · 0{i + 1}</span>
            <span className="grid size-8 place-items-center rounded-full bg-line text-muted">
              <Close className="size-4" strokeWidth={2.4} />
            </span>
          </span>
          <span className="heading-display mt-auto block text-[1.7rem] leading-tight text-ivory/80">{item.cheap.title}</span>
          <span className="mt-3 block text-sm leading-relaxed text-muted">{item.cheap.text}</span>
          <span className="mt-5 block font-mono text-[10px] uppercase tracking-[0.25em] text-brand">Hover / tap to fix →</span>
        </span>
        {/* Back: our file */}
        <span className="absolute inset-0 flex rotate-y-180 flex-col rounded-[1.5rem] border border-brand/60 bg-[linear-gradient(160deg,rgb(84_26_36/0.9),var(--panel-deep))] p-7 backface-hidden">
          <span className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ivory">Threads &amp; Arts</span>
            <span className="grid size-8 place-items-center rounded-full bg-brand text-white">
              <Check className="size-4" strokeWidth={2.4} />
            </span>
          </span>
          <span className="heading-display mt-auto block text-[1.7rem] leading-tight text-ivory">{item.pro.title}</span>
          <span className="mt-3 block text-sm leading-relaxed text-ivory/75">{item.pro.text}</span>
        </span>
      </span>
    </button>
  );
}

/** "Cheap file vs. our file" cards that flip to reveal the fix (flip-cards module). */
export function FlipCards({ eyebrow, word, script, intro, items }: { eyebrow: string; word: string; script: string; intro: string; items: readonly FlipItem[] }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line section-y">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-1/3 h-[50vh] w-[50vh] rounded-full bg-wine/40 blur-[150px]" />
      </div>
      <div className="section-x flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <PosterHeading word={word} script={script} size="compact" />
        </div>
        <Reveal delay={0.2} className="max-w-sm lg:pb-4">
          <p className="text-sm leading-relaxed text-muted sm:text-base">{intro}</p>
        </Reveal>
      </div>
      <div className="section-x mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.cheap.title} delay={i * 0.08}>
            <FlipCard item={it} i={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
