"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type PointerEvent } from "react";
import { anton } from "@/components/ui/fonts";

export interface FormatChip {
  ext: string;
  machine: string;
}

/** Machine embroidery formats and the brands that use them. */
export const machineFormats: FormatChip[] = [
  { ext: "DST", machine: "Tajima · most commercial" },
  { ext: "PES", machine: "Brother · Baby Lock" },
  { ext: "EXP", machine: "Melco · Bernina" },
  { ext: "JEF", machine: "Janome · Elna" },
  { ext: "HUS", machine: "Husqvarna Viking" },
  { ext: "VP3", machine: "Husqvarna · Pfaff" },
  { ext: "XXX", machine: "Singer · Compucon" },
  { ext: "PXF", machine: "Pulse" },
  { ext: "EMB", machine: "Wilcom" },
  { ext: "SEW", machine: "Janome (older)" },
];

function Chip({ chip, i }: { chip: FormatChip; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 180, damping: 14 });
  const y = useSpring(my, { stiffness: 180, damping: 14 });

  const onMove = (e: PointerEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: i * 0.04 }}
      className="p-1.5"
    >
      <motion.div
        style={{ x, y }}
        className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-2xl border border-line bg-panel p-4 transition-colors duration-300 hover:border-brand hover:bg-wine/40 md:p-5"
      >
        <span className="font-mono text-[10px] text-brand">.{chip.ext.toLowerCase()}</span>
        <span className={`${anton.className} text-[clamp(2rem,4vw,3.4rem)] leading-none text-ivory transition-transform duration-300 group-hover:scale-110`}>
          {chip.ext}
        </span>
        <span className="text-[11px] leading-snug text-muted group-hover:text-ivory/80">{chip.machine}</span>
      </motion.div>
    </motion.div>
  );
}

/** Grid of format tiles that lean toward the cursor (magnetic-grid module). */
export function MagneticGrid({ items = machineFormats }: { items?: readonly FormatChip[] }) {
  return (
    <div className="-m-1.5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
      {items.map((c, i) => (
        <Chip key={c.ext} chip={c} i={i} />
      ))}
    </div>
  );
}
