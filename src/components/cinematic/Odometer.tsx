"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { anton } from "@/components/ui/fonts";

const EASE = [0.2, 0.7, 0.3, 1] as const;

function Digit({ d, delay, go }: { d: number; delay: number; go: boolean }) {
  return (
    <span className="relative inline-block h-[1.5em] overflow-hidden leading-[1.5em]">
      {/* Sized to the final digit so narrow glyphs like "1" don't leave a gap. */}
      <span className="invisible">{d}</span>
      <motion.span
        className="absolute inset-x-0 top-0 flex flex-col items-center"
        initial={{ y: "0%" }}
        animate={{ y: go ? `-${d * 10}%` : "0%" }}
        transition={{ duration: 1.8, delay, ease: EASE }}
      >
        {Array.from({ length: 10 }, (_, n) => (
          <span key={n} className="block h-[1.5em] leading-[1.5em]">
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

/** Digit wheels that roll to the target value (odometer module). Non-digits render as-is. */
export function Odometer({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const go = useInView(ref, { once: true, amount: 0.6 });
  const chars = [...value];
  const digitIndex = chars.map((_, i) => chars.slice(0, i).filter((c) => /\d/.test(c)).length);
  return (
    <span ref={ref} className={`inline-flex items-end leading-none tabular-nums ${className}`}>
      <span className="sr-only">{value}</span>
      <span aria-hidden className="inline-flex items-end">
        {chars.map((ch, i) =>
          /\d/.test(ch) ? (
            <Digit key={i} d={Number(ch)} delay={digitIndex[i] * 0.09} go={go} />
          ) : (
            <span key={i} className="leading-[1.5em]">
              {ch}
            </span>
          ),
        )}
      </span>
    </span>
  );
}

export interface Stat {
  value: string;
  label: string;
}

/** Full-width strip of rolling stats. */
export function StatStrip({ stats }: { stats: readonly Stat[] }) {
  return (
    <section className="relative border-b border-line bg-deep">
      <div className="section-x grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`group relative flex flex-col gap-3 border-line py-10 md:py-14 ${i % 2 === 1 ? "border-l pl-6 md:pl-10" : "pr-6"} ${
              i > 1 ? "border-t lg:border-t-0" : ""
            } ${i > 0 ? "lg:border-l lg:pl-10" : ""}`}
          >
            <Odometer value={s.value} className={`${anton.className} text-[clamp(2.8rem,6vw,5rem)] text-ivory`} />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
              <span className="text-brand">0{i + 1}</span> — {s.label}
            </span>
            <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
