"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Bolt } from "@/components/ui/Icons";
import { formats } from "@/lib/content";

const STATS = [
  { val: "50,000+", label: "Designs Delivered" },
  { val: "400+", label: "Active Shops" },
  { val: "100%", label: "Unlimited Revisions" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const compareRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const [pos, setPos] = useState(38);
  const [isDragging, setIsDragging] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  // Reveal sweep on mount, then it's yours to drag.
  useEffect(() => {
    const t = setTimeout(() => setPos(56), 500);
    return () => clearTimeout(t);
  }, []);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = compareRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(88, Math.max(12, pct)));
  }, []);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };
  const endDrag = () => {
    draggingRef.current = false;
    setIsDragging(false);
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden border-b border-line"
    >
      {/* ── Layer 0: Ambient background ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src="/assets/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-bg/80" />
      </motion.div>
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] fabric-texture opacity-20" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-5%] z-[1] h-[520px] w-[520px] rounded-full bg-brand/12 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10%] left-[-8%] z-[1] h-[440px] w-[440px] rounded-full bg-wine/30 blur-[140px]"
      />

      {/* ── Layer 1: Main content ── */}
      <div className="section-x relative z-10 flex min-h-screen flex-col justify-center pb-24 pt-[calc(var(--header-h)+2rem)] md:pb-28">
        <div className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Right (on desktop) — copy */}
          <div className="order-2 lg:col-span-6 lg:order-2 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center gap-2.5 rounded-full border border-line bg-panel/80 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-muted backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
              <span>EST. 2017</span>
              <span className="text-line">|</span>
              <span className="text-ivory font-semibold">4–6H TURNAROUND</span>
              <span className="text-line">|</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                DIGITIZERS ONLINE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.7, 0.3, 1] }}
              className="mt-6 font-display font-normal leading-[1.03] tracking-[-0.03em] text-[clamp(2.4rem,5vw,4.2rem)]"
            >
              <span className="block text-ivory">Crafted for the Machine.</span>
              <span className="block text-brand italic">Digitized by Hand.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
            >
              Production-grade embroidery digitizing for commercial multi-head
              machines. Threads &amp; Arts transforms flat artwork into
              flawless, machine-ready files.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <Link href="#sample" className="btn btn-primary">
                Get Free Sample <ArrowUpRight className="size-4" />
              </Link>
              <Link href="#services" className="btn btn-ghost">
                View Services
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-4 flex items-center gap-1.5 text-xs text-muted"
            >
              <Bolt className="size-3.5 text-brand" />
              Free first design up to 10,000 stitches &middot; No card required
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-10 flex items-center gap-6 divide-x divide-line sm:gap-10"
            >
              {STATS.map((s) => (
                <div key={s.label} className="pl-6 first:pl-0 sm:pl-10">
                  <div className="font-mono text-lg font-semibold text-ivory sm:text-2xl">
                    {s.val}
                  </div>
                  <div className="text-[10px] text-muted sm:text-xs">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Left (on desktop) — interactive before/after showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.2, 0.7, 0.3, 1] }}
            className="order-1 lg:col-span-6 lg:order-1 xl:col-span-6"
          >
            {/* "slide to discover" label */}
            <div className="mb-3 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted">
              <ArrowLeft className="size-3.5" />
              Slide to discover
              <ArrowRight className="size-3.5" />
            </div>

            <div
              ref={compareRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              onPointerLeave={endDrag}
              className="group relative aspect-[6/5] w-full touch-none select-none overflow-hidden rounded-2xl border border-line/50 bg-panel shadow-2xl shadow-black/50 cursor-ew-resize sm:aspect-[5/4]"
            >
              {/* After — finished embroidery (base layer) */}
              <Image
                src="/assets/tf-finished.jpg"
                alt="Finished dimensional embroidery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
                priority
              />

              {/* Before — original flat artwork (clipped layer) */}
              <div
                className={`absolute inset-0 ${isDragging ? "" : "transition-[clip-path] duration-700 ease-out"}`}
                style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              >
                <Image
                  src="/assets/tf-artwork.jpg"
                  alt="Original flat artwork"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>

              {/* Divider + handle */}
              <div
                className={`absolute inset-y-0 z-20 w-px bg-brand/80 ${isDragging ? "" : "transition-[left] duration-700 ease-out"}`}
                style={{ left: `${pos}%` }}
              >
                <div className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-0.5 rounded-full border border-line bg-panel/90 text-ivory shadow-lg backdrop-blur-sm">
                  <ArrowLeft className="size-3" />
                  <ArrowRight className="size-3" />
                </div>
              </div>

              {/* Corner tags */}
              <div className="pointer-events-none absolute left-3 top-3 z-10 rounded-md border border-line/50 bg-bg/70 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wide text-muted backdrop-blur-sm sm:left-4 sm:top-4">
                AI · EPS · PNG · PDF <span className="text-ivory">Input</span>
              </div>
              <div className="pointer-events-none absolute right-3 top-3 z-10 rounded-md border border-line/50 bg-bg/70 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wide text-muted backdrop-blur-sm sm:right-4 sm:top-4">
                Stitch-Ready <span className="text-ivory">Output</span>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center justify-between bg-gradient-to-t from-bg/90 to-transparent px-4 pb-3 pt-10 text-[10px] font-mono uppercase tracking-widest text-muted sm:px-5">
                <span>Original Artwork</span>
                <span className="text-ivory">Embroidery Digitizing</span>
              </div>
            </div>

            {/* Machine-ready format chips */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="shrink-0 text-[10px] font-mono uppercase tracking-widest text-brand">
                Machine-Ready
              </span>
              {formats.slice(0, 6).map((ext) => (
                <span
                  key={ext}
                  className="rounded-md border border-line/60 bg-panel/60 px-2.5 py-1 text-[11px] font-mono text-muted"
                >
                  .{ext}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
