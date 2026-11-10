"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useId, useRef } from "react";
import { anton } from "@/components/ui/fonts";

/** Slow drifting red/wine glow blobs (mesh-gradient module, palette-locked). */
export function AmbientMesh({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="absolute inset-0 fabric-texture opacity-20" />
      <div className="absolute -left-[10%] top-[10%] h-[55vmax] w-[55vmax] animate-drift rounded-full bg-wine/45 blur-[140px]" />
      <div className="absolute -right-[15%] bottom-[-20%] h-[50vmax] w-[50vmax] animate-drift rounded-full bg-brand/15 blur-[160px] [animation-delay:-8s]" />
      <div className="absolute left-[40%] top-[40%] h-[30vmax] w-[30vmax] animate-drift rounded-full bg-brand-deep/10 blur-[120px] [animation-delay:-15s]" />
    </div>
  );
}

/** Giant outlined Anton word that slides sideways as you scroll past (gradient-stroke module). */
export function GhostWord({ word, className = "", from = 8, to = -14 }: { word: string; className?: string; from?: number; to?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [`${from}%`, `${to}%`]);
  return (
    <div ref={ref} aria-hidden className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <motion.span
        style={{ x }}
        className={`${anton.className} block whitespace-nowrap uppercase leading-none text-transparent [-webkit-text-stroke:1.5px_rgb(243_30_57/0.22)] text-[clamp(7rem,24vw,22rem)]`}
      >
        {word}
      </motion.span>
    </div>
  );
}

/** Running-stitch line that sews itself across the page as you scroll (svg-draw module). */
export function StitchDivider({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const maskId = `stitch-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.95", "end 0.35"] });
  const d = "M0 60 C 150 10, 300 110, 450 60 S 750 10, 900 60 S 1150 110, 1200 60";
  return (
    <div ref={ref} aria-hidden className={className}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block h-16 w-full md:h-24">
      <defs>
        <mask id={maskId}>
          <motion.path d={d} fill="none" stroke="white" strokeWidth="8" style={{ pathLength: scrollYProgress }} />
        </mask>
      </defs>
      <path d={d} fill="none" stroke="var(--line)" strokeWidth="1" />
      <path
        d={d}
        fill="none"
        stroke="var(--red)"
        strokeWidth="2.5"
        strokeDasharray="14 10"
        strokeLinecap="round"
        mask={`url(#${maskId})`}
      />
    </svg>
    </div>
  );
}
