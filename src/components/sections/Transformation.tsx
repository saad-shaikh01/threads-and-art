"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useProgressEffect } from "@/hooks/useProgressEffect";

const STAGES = [
  {
    code: "01",
    tag: "INPUT",
    title: "Original Artwork",
    description:
      "We inspect your raw PNG, JPEG, AI, or PDF artwork — identifying micro-lettering, gradient transitions, and fabric constraints before plotting a single stitch.",
    image: "/assets/tf-artwork.jpg",
    specs: ["PNG / JPG / AI / PDF", "4.0mm Min Lettering", "Pantone Thread Match"],
  },
  {
    code: "02",
    tag: "PATHING",
    title: "Stitch Paths & Underlay",
    description:
      "Edge-run, center-walk, and double-zigzag underlays are mapped by hand to anchor fabric to backing — preventing puckering and drift at high machine speeds.",
    image: "/assets/tf-pathing.jpg",
    specs: ["Edge-Run + Tatami Lattice", "+0.25mm Pull Comp", "Shortest-Path Trims"],
  },
  {
    code: "03",
    tag: "SIMULATION",
    title: "Digitized Preview",
    description:
      "Every stitch angle is tuned so light reflects uniformly across curves and corners. Lock-stitches and tie-ins are verified to survive industrial wash cycles.",
    image: "/assets/tf-preview.jpg",
    specs: ["0.38–0.42mm Density", "Double Lock-Stitch", "14,820 Stitches"],
  },
  {
    code: "04",
    tag: "PRODUCTION",
    title: "Finished Embroidery",
    description:
      "Delivered in your exact machine format with a production worksheet detailing thread sequence, needle stops, and hoop sizing. Ready for 1,000+ SPM.",
    image: "/assets/tf-finished.jpg",
    specs: ["1,000+ SPM Tested", "Zero-Break Pathing", "4–6 Hour Turnaround"],
  },
];

const SCROLL_DURATION = 3;

export default function Transformation() {
  const trackRef = useRef<HTMLElement>(null);
  const { progressRef } = useScrollProgress({ containerRef: trackRef });

  const [active, setActive] = useState(0);
  const [barWidth, setBarWidth] = useState("0%");

  useProgressEffect(progressRef, (p) => {
    const stageIndex = Math.min(STAGES.length - 1, Math.floor(p * STAGES.length));
    setActive(stageIndex);
    setBarWidth(`${Math.min(100, p * 100)}%`);
  });

  const handleTabClick = useCallback(
    (index: number) => {
      setActive(index);
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollableRange = rect.height - window.innerHeight;
      const targetProgress = (index + 0.5) / STAGES.length;
      const targetScroll = el.offsetTop + targetProgress * scrollableRange;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    },
    [],
  );

  const current = STAGES[active];

  return (
    <section
      ref={trackRef}
      id="transformation"
      style={{ height: `${(SCROLL_DURATION + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden border-b border-line bg-deep">
        <div className="pointer-events-none absolute inset-0 fabric-texture opacity-15" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-brand/8 blur-[160px]"
        />

        {/* ── Background image layer ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority={active === 0}
            />
            <div className="absolute inset-0 bg-bg/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg/80 via-transparent to-bg/50" />
          </motion.div>
        </AnimatePresence>

        {/* ── Content overlay ── */}
        <div className="relative z-10 flex h-full flex-col">
          {/* Top header */}
          <div className="section-x flex items-end justify-between gap-4 pt-8 md:pt-12">
            <div>
              <p className="eyebrow mb-2">The Transformation</p>
              <h2 className="heading-display text-[clamp(1.6rem,1rem+2.4vw,3rem)] max-w-lg">
                From flat artwork to{" "}
                <em className="text-accent">dimensional thread.</em>
              </h2>
            </div>
            <span className="hidden font-mono text-xs text-muted sm:block">
              SCROLL TO EXPLORE
            </span>
          </div>

          {/* Main content area */}
          <div className="section-x flex flex-1 items-center">
            <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
              {/* Left: stage info */}
              <div className="lg:col-span-5 xl:col-span-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45, ease: [0.2, 0.7, 0.3, 1] }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[clamp(3rem,7vw,5rem)] font-bold leading-none text-brand/20">
                        {current.code}
                      </span>
                      <span className="rounded-md bg-wine/50 px-2.5 py-1 text-[11px] font-mono text-ivory backdrop-blur-sm">
                        {current.tag}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-2xl text-ivory sm:text-3xl lg:text-4xl">
                      {current.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                      {current.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {current.specs.map((spec) => (
                        <span
                          key={spec}
                          className="rounded-full border border-line/60 bg-bg/50 px-3 py-1.5 text-[11px] font-mono text-ivory/80 backdrop-blur-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right: showcase image card */}
              <div className="lg:col-span-7 xl:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.96, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.98, x: -20 }}
                    transition={{ duration: 0.5, ease: [0.2, 0.7, 0.3, 1] }}
                    className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line/40 shadow-2xl shadow-black/40"
                  >
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 55vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 right-4 rounded-lg border border-line/40 bg-bg/60 px-3 py-1.5 font-mono text-[11px] text-ivory backdrop-blur-sm sm:bottom-5 sm:right-5">
                      {current.code} / 04
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Bottom: tabs + progress bar */}
          <div className="section-x pb-6 md:pb-8">
            {/* Tab buttons */}
            <div className="flex gap-1 sm:gap-2">
              {STAGES.map((stg, i) => (
                <button
                  key={stg.code}
                  type="button"
                  onClick={() => handleTabClick(i)}
                  className={`group relative flex-1 rounded-t-lg py-3 text-center transition-colors sm:py-4 ${
                    active === i
                      ? "bg-panel/80 text-ivory backdrop-blur-sm"
                      : "text-muted hover:text-ivory"
                  }`}
                >
                  <span className="block font-mono text-[10px] tracking-widest text-brand">
                    {stg.code}
                  </span>
                  <span className="mt-0.5 block text-[11px] font-medium sm:text-xs">
                    {stg.tag}
                  </span>
                  {active === i && (
                    <motion.span
                      layoutId="tf-active-tab"
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-brand"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Overall progress bar */}
            <div className="mt-2 h-px w-full bg-line/40">
              <div
                className="h-full bg-brand transition-[width] duration-200 ease-out"
                style={{ width: barWidth }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
