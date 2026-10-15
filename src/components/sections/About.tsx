"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/lib/content";

function Counter({ value, plus, format }: { value: number; plus: boolean; format: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const fmt = (n: number) => (format ? Math.round(n).toLocaleString("en-US") : String(Math.round(n))) + (plus ? "+" : "");

  useEffect(() => {
    const el = ref.current;
    if (!inView || !el) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (n) => {
        el.textContent = fmt(n);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value]);

  return (
    <strong ref={ref} className="block font-display text-3xl font-normal tabular-nums md:text-4xl">
      {fmt(value)}
    </strong>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="section-x section-y grid gap-8 border-b border-line md:gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24"
    >
      <Reveal>
        <p className="eyebrow mb-4">Why Threads &amp; Arts</p>
        <h2 className="heading-2">
          Craft meets
          <br />
          <em className="text-accent">production.</em>
        </h2>
        <p className="mt-6 max-w-[21rem] text-sm text-muted">
          For the businesses behind every embroidered uniform, cap and collection. A dependable
          digitizing partner, from one design to the next.
        </p>
      </Reveal>

      <div className="grid grid-cols-3 content-center gap-3 md:gap-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.12} className="border-l border-line pl-3 md:pl-6">
            <Counter value={s.value} plus={s.plus} format={s.format} />
            <span className="text-[10px] text-muted md:text-xs">{s.label}</span>
          </Reveal>
        ))}
        <Reveal
          delay={0.3}
          className="col-span-3 mt-2 border-t border-line pt-6 font-display text-xl leading-snug text-ivory md:text-2xl"
        >
          Precision in the file.
          <br />
          <em className="text-accent">Confidence on the machine.</em>
        </Reveal>
      </div>
    </section>
  );
}
