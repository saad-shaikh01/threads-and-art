"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { ArrowUpRight } from "@/components/ui/Icons";
import { PosterHeading } from "@/components/ui/PosterHeading";
import { Reveal } from "@/components/ui/Reveal";
import { accountPages, links } from "@/lib/content";
import { AmbientMesh } from "./Ambient";

/** Text set on a spinning circle around a centre mark (circular-text module). */
export function CircularBadge({ text = "Free sample · 4–6h turnaround · Free revisions · ", className = "" }: { text?: string; className?: string }) {
  return (
    <div aria-hidden className={`relative grid size-36 place-items-center md:size-44 ${className}`}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 animate-spin-slow">
        <defs>
          <path id="cta-circle" d="M100 100 m-78 0 a78 78 0 1 1 156 0 a78 78 0 1 1 -156 0" />
        </defs>
        <text className="fill-ivory font-mono text-[13px] uppercase tracking-[0.32em]">
          <textPath href="#cta-circle">{text}</textPath>
        </text>
      </svg>
      <span className="grid size-16 place-items-center rounded-full bg-brand text-white shadow-[0_0_40px_rgb(243_30_57/0.5)] md:size-20">
        <ArrowUpRight className="size-6" />
      </span>
    </div>
  );
}

const THREADS = ["var(--red)", "var(--ivory)", "var(--red-deep)", "#f6c56b"];

/** CTA link that throws a burst of thread-coloured particles on hover/click (particle-button module). */
export function BurstButton({ href, children, className = "btn btn-primary" }: { href: string; children: ReactNode; className?: string }) {
  const [bursts, setBursts] = useState<number[]>([]);
  const fire = () => {
    const id = Date.now();
    setBursts((b) => [...b.slice(-2), id]);
    setTimeout(() => setBursts((b) => b.filter((x) => x !== id)), 900);
  };
  return (
    <a href={href} onPointerEnter={fire} onClick={fire} className={`relative ${className}`}>
      {children}
      <AnimatePresence>
        {bursts.map((id) => (
          <span key={id} aria-hidden className="pointer-events-none absolute left-1/2 top-1/2">
            {Array.from({ length: 16 }, (_, i) => {
              const a = (i / 16) * Math.PI * 2;
              const r = 60 + (i % 3) * 22;
              return (
                <motion.span
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{ x: Math.cos(a) * r, y: Math.sin(a) * r, opacity: 0, scale: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.2, 0.7, 0.3, 1] }}
                  className="absolute h-1 w-3 rounded-full"
                  style={{ background: THREADS[i % THREADS.length], rotate: `${(a * 180) / Math.PI}deg` }}
                />
              );
            })}
          </span>
        ))}
      </AnimatePresence>
    </a>
  );
}

/** Closing call-to-action used at the bottom of every inner page. */
export function CinematicCta({
  word = "Ready?",
  script = "Let's stitch.",
  text = "Send one design and judge the file on your own machine. Your first design is just $10 — with free minor revisions.",
  primary = { label: "Order Now", href: accountPages.order },
  secondary = { label: "Get a free sample", href: links.sampleMail },
  id,
}: {
  id?: string;
  word?: string;
  script?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section id={id} className="relative isolate overflow-hidden py-24 md:py-36">
      <AmbientMesh />
      <div className="section-x grid items-center gap-12 lg:grid-cols-[1fr_auto]">
        <div>
          <PosterHeading word={word} script={script} />
          <Reveal delay={0.2}>
            <p className="mt-14 max-w-lg text-base leading-relaxed text-muted">{text}</p>
          </Reveal>
          <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
            <BurstButton href={primary.href}>
              {primary.label} <ArrowUpRight className="size-4" />
            </BurstButton>
            <a href={secondary.href} className="btn btn-ghost">
              {secondary.label}
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.4} className="justify-self-start lg:justify-self-end">
          <a href={primary.href} aria-label={primary.label}>
            <CircularBadge />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
