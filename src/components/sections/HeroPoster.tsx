"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Bolt } from "@/components/ui/Icons";
import { PosterHeading } from "@/components/ui/PosterHeading";
import { formats } from "@/lib/content";

const EASE = [0.2, 0.7, 0.3, 1] as const;

function Callout({
  x,
  y,
  side,
  label,
  value,
  delay,
}: {
  x: string;
  y: string;
  side: "left" | "right";
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="absolute hidden xl:block"
      style={{ left: x, top: y }}
    >
      <span className="absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ivory bg-brand animate-pulse-ring" />
      <span
        className={`absolute top-0 h-px w-16 bg-ivory/50 ${side === "left" ? "right-1.5" : "left-1.5"}`}
      />
      <div
        className={`absolute -top-3.5 whitespace-nowrap rounded-md border border-line/70 bg-bg/80 px-2.5 py-1 font-mono backdrop-blur-sm ${
          side === "left" ? "right-[4.75rem] text-right" : "left-[4.75rem]"
        }`}
      >
        <div className="text-[9px] uppercase tracking-widest text-muted">{label}</div>
        <div className="text-[11px] font-semibold text-ivory">{value}</div>
      </div>
    </motion.div>
  );
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

export default function HeroPoster() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const tigerX = useTransform(sx, (v) => v * -18);
  const tigerY = useTransform(sy, (v) => v * -12);
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
    <section
      id="hero"
      className="relative isolate flex min-h-[calc(100svh-var(--header-h))] w-full flex-col overflow-hidden border-b border-line bg-bg"
    >
      {/* ── Backdrop ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/assets/hero-poster-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 fabric-texture opacity-25" />
        <div className="absolute right-[8%] top-[18%] h-[70vh] w-[70vh] rounded-full bg-brand/20 blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-wine/40 blur-[140px]" />
        {/* editorial frame lines */}
        <div className="section-x absolute inset-0 flex justify-between">
          <span className="h-full w-px bg-line/40" />
          <span className="hidden h-full w-px bg-line/25 md:block" />
          <span className="h-full w-px bg-line/40" />
        </div>
      </div>

      {/* ── Top meta row ── */}
      <div className="section-x relative z-10 flex items-center justify-between pt-6 font-mono lg:pt-8 text-[10px] uppercase tracking-[0.2em] text-muted sm:text-[11px]">
        <Rise delay={0.05}>
          <span className="text-brand">Est. 2017</span> — Embroidery Digitizing Studio
        </Rise>
        <Rise delay={0.1} className="hidden items-center gap-2 lg:flex">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Digitizers online · <span className="text-ivory">4–6h turnaround</span>
        </Rise>
      </div>

      {/* ── Giant wordmark (sits behind the tiger) ── */}
      <motion.div style={{ x: wordX }} className="section-x relative z-[2] mt-4 sm:mt-6">
        <PosterHeading
          as="h1"
          size="hero"
          word="Stitch"
          script="Perfect."
          srText="embroidery digitizing for commercial machines"
        />
      </motion.div>

      {/* ── Tiger ── */}
      <motion.div
        style={{ x: tigerX, y: tigerY }}
        className="relative z-[3] mx-auto -mt-6 aspect-[1400/1424] w-[86%] max-w-md md:max-w-lg lg:absolute lg:bottom-[9%] lg:right-[3%] lg:mt-0 lg:w-[min(40vw,calc(100svh-var(--header-h)-8rem))] lg:max-w-none xl:bottom-[7%] xl:w-[min(45vw,calc(100svh-var(--header-h)-6rem))]"
      >
        {/* stitch-path ring */}
        <svg
          aria-hidden
          viewBox="0 0 100 100"
          className="absolute inset-[-8%] animate-[spin_80s_linear_infinite] text-brand/40"
        >
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1.2 1.8" />
          <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="0.12" opacity="0.5" />
        </svg>

        {/* ghost "artwork" layer visible before stitching sweeps in */}
        <Image
          src="/assets/tiger-digitized.webp"
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 1024px) 86vw, 50vw"
          className="object-contain opacity-20 grayscale"
        />

        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.8, delay: 0.5, ease: [0.65, 0, 0.35, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/tiger-digitized.webp"
            alt="Hand-digitized embroidered tiger patch"
            fill
            priority
            sizes="(max-width: 1024px) 86vw, 50vw"
            className="object-contain drop-shadow-[0_30px_50px_rgb(0_0_0/0.55)]"
          />
        </motion.div>

        {/* needle scan line */}
        <motion.span
          aria-hidden
          initial={{ top: "0%", opacity: 0 }}
          animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.8, delay: 0.5, ease: [0.65, 0, 0.35, 1] }}
          className="absolute inset-x-[-6%] h-[2px] bg-brand shadow-[0_0_24px_4px_rgb(243_30_57/0.7)]"
        />

        <Callout x="37%" y="39%" side="left" label="Eye detail" value="Satin · 0.35mm" delay={2.3} />
        <Callout x="66%" y="16%" side="right" label="Fur fill" value="Tatami · 0.40mm" delay={2.45} />
        <Callout x="20%" y="68%" side="left" label="Total" value="14,820 stitches" delay={2.6} />
      </motion.div>

      {/* ── Vertical side label ── */}
      <div className="absolute left-[calc(var(--gutter-x)/2)] top-1/2 z-[4] hidden -translate-x-1/2 -translate-y-1/2 rotate-180 font-mono text-[10px] uppercase tracking-[0.35em] text-muted [writing-mode:vertical-rl] xl:block">
        50,000+ designs · 400+ shops
      </div>

      {/* ── Bottom row: copy + cards ── */}
      <div className="section-x relative z-[4] mt-8 flex flex-1 items-end justify-between gap-8 pb-20 lg:mt-12 lg:pb-24">
        <div className="max-w-md lg:max-w-104 xl:max-w-120">
          <Rise delay={0.35}>
            <p className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] leading-tight text-ivory">
              Crafted for the Machine. <em className="text-brand">Digitized by Hand.</em>
            </p>
          </Rise>
          <Rise delay={0.45}>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Production-grade embroidery digitizing for commercial multi-head machines —
              flat artwork in, flawless stitch-ready files out.
            </p>
          </Rise>
          <Rise delay={0.55} className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="#sample" className="btn btn-primary">
              Get Free Sample <ArrowUpRight className="size-4" />
            </Link>
            <Link href="#services" className="btn btn-ghost">
              View Services
            </Link>
          </Rise>
          <Rise delay={0.65}>
            <p className="mt-4 flex items-center gap-1.5 text-xs text-muted">
              <Bolt className="size-3.5 text-brand" />
              Free first design up to 10,000 stitches · No card required
            </p>
          </Rise>
        </div>
      </div>

      {/* ── Format ticker ── */}
      <div className="absolute inset-x-0 bottom-0 z-[5] border-t border-line/60 bg-bg/85 backdrop-blur-md">
        <div className="section-x flex items-center gap-4 overflow-hidden py-3">
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-brand">
            Machine-ready
          </span>
          {/* Clip the marquee so chips never slide over the label. */}
          <div className="min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
            <div className="flex w-max animate-marquee gap-4 whitespace-nowrap">
              {[...formats, ...formats].map((ext, i) => (
                <span
                  key={`${ext}-${i}`}
                  className="rounded-md border border-line/60 bg-panel/60 px-3 py-1 font-mono text-[11px] text-muted"
                >
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
