"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import { RichText } from "@/components/page/RichText";
import { ArrowUpRight, Bolt } from "@/components/ui/Icons";
import { PosterHeading, type PosterSize } from "@/components/ui/PosterHeading";
import { formats } from "@/lib/content";

const EASE = [0.2, 0.7, 0.3, 1] as const;

export interface HeroCallout {
  /** Position of the pin inside the image box, e.g. "40%". */
  x: string;
  y: string;
  side: "left" | "right";
  label: string;
  value: string;
}

export interface CinematicHeroProps {
  index?: string;
  eyebrow: string;
  word: string;
  script: string;
  posterSize?: PosterSize;
  /** Real page title, rendered as the visible <h1>. */
  title: string;
  lead: string;
  offers?: readonly string[];
  image: { src: string; alt: string };
  callouts?: readonly HeroCallout[];
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  note?: string;
  /** Ticker chips at the bottom; defaults to machine embroidery formats. */
  ticker?: readonly string[];
  tickerLabel?: string;
}

function Rise({ children, delay, className }: { children: ReactNode; delay: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Callout({ x, y, side, label, value, delay }: HeroCallout & { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="absolute z-10 hidden xl:block"
      style={{ left: x, top: y }}
    >
      <span className="absolute size-2.5 -translate-x-1/2 -translate-y-1/2 animate-pulse-ring rounded-full border-2 border-ivory bg-brand" />
      <span className={`absolute top-0 h-px w-14 bg-ivory/50 ${side === "left" ? "right-1.5" : "left-1.5"}`} />
      <div
        className={`absolute -top-3.5 whitespace-nowrap rounded-md border border-line/70 bg-bg/85 px-2.5 py-1 font-mono backdrop-blur-sm ${
          side === "left" ? "right-[4.25rem] text-right" : "left-[4.25rem]"
        }`}
      >
        <div className="text-[9px] uppercase tracking-widest text-muted">{label}</div>
        <div className="text-[11px] font-semibold text-ivory">{value}</div>
      </div>
    </motion.div>
  );
}

/**
 * Inner-page version of the home HeroPoster: giant poster word, stitched-in
 * image with needle scan + callouts, real <h1>, offers, CTAs and format ticker.
 */
export function CinematicHero({
  index,
  eyebrow,
  word,
  script,
  posterSize = "hero",
  title,
  lead,
  offers = [],
  image,
  callouts = [],
  primary,
  secondary,
  note = "Free first design up to 10,000 stitches · No card required",
  ticker = formats,
  tickerLabel = "Machine-ready",
}: CinematicHeroProps) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const imgX = useTransform(sx, (v) => v * -16);
  const imgY = useTransform(sy, (v) => v * -10);
  const wordX = useTransform(sx, (v) => v * 10);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <section className="relative isolate flex min-h-[calc(100svh-var(--header-h))] w-full flex-col overflow-hidden border-b border-line bg-bg pb-24">
      {/* Backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Image src="/assets/hero-poster-bg.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-[0.08]" />
        <div className="absolute inset-0 fabric-texture opacity-25" />
        <div className="absolute right-[6%] top-[22%] h-[65vh] w-[65vh] rounded-full bg-brand/20 blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-wine/40 blur-[140px]" />
        <div className="section-x absolute inset-0 flex justify-between">
          <span className="h-full w-px bg-line/40" />
          <span className="hidden h-full w-px bg-line/25 md:block" />
          <span className="h-full w-px bg-line/40" />
        </div>
      </div>

      {/* Meta row */}
      <div className="section-x relative z-10 flex items-center justify-between pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:text-[11px] lg:pt-8">
        <Rise delay={0.05}>
          {index && <span className="text-brand">{index} / </span>}
          {eyebrow}
        </Rise>
        <Rise delay={0.1} className="hidden items-center gap-2 lg:flex">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
          Digitizers online · <span className="text-ivory">4–6h turnaround</span>
        </Rise>
      </div>

      {/* Poster word (decorative; the real h1 is below) */}
      <motion.div style={{ x: wordX }} className="section-x pointer-events-none relative z-[4] mt-4 sm:mt-6" aria-hidden>
        <PosterHeading as="div" size={posterSize} word={word} script={script} />
      </motion.div>

      <div className="section-x relative z-[3] mt-12 grid items-end gap-12 lg:mt-0 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
        {/* Copy */}
        <div className="order-2 max-w-xl lg:order-1 lg:mt-[clamp(4rem,7vw,7rem)] lg:pb-4">
          <Rise delay={0.3}>
            <h1 className="font-display text-[clamp(1.7rem,1.2rem+1.6vw,2.6rem)] leading-tight text-ivory">{title}</h1>
          </Rise>
          <Rise delay={0.4}>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{lead}</p>
          </Rise>
          {offers.length > 0 && (
            <Rise delay={0.5}>
              <ul className="mt-6 space-y-2">
                {offers.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm leading-relaxed text-ivory/85">
                    <span className="mt-[0.5rem] size-1.5 shrink-0 rounded-full bg-brand" />
                    <span>
                      <RichText text={o} />
                    </span>
                  </li>
                ))}
              </ul>
            </Rise>
          )}
          <Rise delay={0.6} className="mt-7 flex flex-wrap items-center gap-3">
            <a href={primary.href} className="btn btn-primary">
              {primary.label} <ArrowUpRight className="size-4" />
            </a>
            {secondary && (
              <a href={secondary.href} className="btn btn-ghost">
                {secondary.label}
              </a>
            )}
          </Rise>
          <Rise delay={0.7}>
            <p className="mt-4 flex items-center gap-1.5 text-xs text-muted">
              <Bolt className="size-3.5 text-brand" />
              {note}
            </p>
          </Rise>
        </div>

        {/* Image */}
        <motion.div
          style={{ x: imgX, y: imgY }}
          className="relative order-1 mx-auto w-full max-w-2xl lg:order-2 lg:-mt-[clamp(6rem,13vw,13rem)]"
        >
          <svg aria-hidden viewBox="0 0 100 100" className="absolute -inset-[6%] animate-[spin_90s_linear_infinite] text-brand/35">
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.22" strokeDasharray="1.2 1.8" />
            <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="0.1" opacity="0.5" />
          </svg>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line bg-deep shadow-[0_40px_80px_rgb(0_0_0/0.55)]">
            <Image src={image.src} alt="" aria-hidden fill sizes="(max-width:1024px) 92vw, 52vw" className="object-cover opacity-25 grayscale" />
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 1.8, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
              className="absolute inset-0"
            >
              <Image src={image.src} alt={image.alt} fill priority sizes="(max-width:1024px) 92vw, 52vw" className="object-cover" />
            </motion.div>
            <motion.span
              aria-hidden
              initial={{ top: "0%", opacity: 0 }}
              animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
              className="absolute inset-x-0 h-[2px] bg-brand shadow-[0_0_24px_4px_rgb(243_30_57/0.7)]"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
          </div>
          {callouts.map((c, i) => (
            <Callout key={c.label} {...c} delay={2.2 + i * 0.15} />
          ))}
        </motion.div>
      </div>

      {/* Format ticker */}
      <div className="absolute inset-x-0 bottom-0 z-[5] border-t border-line/60 bg-bg/85 backdrop-blur-md">
        <div className="section-x flex items-center gap-4 overflow-hidden py-3">
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-brand">{tickerLabel}</span>
          <div className="min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
          <div className="flex w-max animate-marquee gap-4 whitespace-nowrap">
            {(() => {
              // Pad short lists so one half always overflows, then double for a seamless loop.
              const half = Array.from({ length: Math.ceil(12 / ticker.length) }, () => ticker).flat();
              return [...half, ...half];
            })().map((ext, i) => (
              <span key={`${ext}-${i}`} className="rounded-md border border-line/60 bg-panel/60 px-3 py-1 font-mono text-[11px] text-muted">
                .{ext}
              </span>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
