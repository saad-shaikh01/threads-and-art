"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { anton } from "@/components/ui/fonts";
import { PosterHeading } from "@/components/ui/PosterHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { Eyebrow } from "./ScrambleText";

export interface StackItem {
  kicker: string;
  title: string;
  text: string;
  specs?: readonly string[];
  image: { src: string; alt: string };
}

interface StickyStackProps {
  eyebrow: string;
  word: string;
  script: string;
  intro: string;
  items: readonly StackItem[];
}

function Card({ item, i, active, onActive }: { item: StackItem; i: number; active: boolean; onActive: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const centered = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (centered) onActive(i);
  }, [centered, i, onActive]);

  return (
    <div ref={ref} className="flex lg:min-h-[72svh] lg:items-center">
      <Spotlight
        className={`surface-card w-full overflow-hidden p-6 transition-opacity duration-500 md:p-8 ${active ? "lg:opacity-100" : "lg:opacity-35"}`}
      >
        {/* Mobile image */}
        <div className="relative -mx-6 -mt-6 mb-6 aspect-[16/10] overflow-hidden border-b border-line md:-mx-8 md:-mt-8 lg:hidden">
          <Image src={item.image.src} alt={item.image.alt} fill sizes="100vw" className="object-cover" />
        </div>
        <div className="flex items-start justify-between gap-6">
          <p className="eyebrow">{item.kicker}</p>
          <span className={`${anton.className} text-5xl leading-none text-transparent [-webkit-text-stroke:1px_var(--red)]`}>
            0{i + 1}
          </span>
        </div>
        <h3 className="heading-display mt-4 text-[clamp(1.6rem,1.2rem+1.4vw,2.4rem)] text-ivory">{item.title}</h3>
        <p className="mt-4 text-[0.95rem] leading-[1.8] text-muted">{item.text}</p>
        {item.specs && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {item.specs.map((s) => (
              <li key={s} className="rounded-md border border-brand/30 bg-brand/[0.07] px-3 py-1.5 font-mono text-[11px] text-ivory">
                {s}
              </li>
            ))}
          </ul>
        )}
      </Spotlight>
    </div>
  );
}

/** Media pins on the left while technical cards scroll past it (sticky-stack module). */
export function StickyStack({ eyebrow, word, script, intro, items }: StickyStackProps) {
  const [active, setActive] = useState(0);
  const item = items[active];

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

      <div className="section-x mt-16 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
        {/* Pinned media */}
        <div className="hidden lg:block">
          <div className="sticky top-[calc(var(--header-h)+2rem)] h-[calc(100svh-var(--header-h)-4rem)]">
            <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-line bg-deep">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.2, 0.7, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image src={item.image.src} alt={item.image.alt} fill sizes="50vw" className="object-cover" />
                </motion.div>
              </AnimatePresence>
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand">{item.kicker}</p>
                  <p className="heading-display mt-2 text-2xl text-ivory">{item.title}</p>
                </div>
                <p className={`${anton.className} text-6xl leading-none text-ivory/90`}>
                  0{active + 1}
                  <span className="text-2xl text-muted">/0{items.length}</span>
                </p>
              </div>
              <div className="absolute inset-x-7 top-7 flex gap-1.5">
                {items.map((_, i) => (
                  <span key={i} className="h-0.5 flex-1 overflow-hidden rounded-full bg-ivory/15">
                    <span className={`block h-full bg-brand transition-transform duration-700 ${i <= active ? "scale-x-100" : "scale-x-0"} origin-left`} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling cards */}
        <div className="space-y-6 lg:space-y-0">
          {items.map((it, i) => (
            <Card key={it.title} item={it} i={i} active={active === i} onActive={setActive} />
          ))}
        </div>
      </div>
    </section>
  );
}
