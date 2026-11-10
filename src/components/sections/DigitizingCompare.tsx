"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Close } from "@/components/ui/Icons";
import { PosterHeading } from "@/components/ui/PosterHeading";
import { Reveal } from "@/components/ui/Reveal";

const BAD_SRC = "/assets/tiger-bad.webp";
const GOOD_SRC = "/assets/tiger-digitized.webp";

// x/y are fractions of the tiger image; each point is compared bad-vs-good.
const POINTS = [
  {
    x: 0.375,
    y: 0.395,
    bad: { title: "Lost Details", text: "Small elements blur into thread mush." },
    good: { title: "Readable Details", text: "Eyes and fine lines stay crisp at any size." },
  },
  {
    x: 0.42,
    y: 0.2,
    bad: { title: "Gaps in Fills", text: "Fabric shows through thin, uneven coverage." },
    good: { title: "Clean Fills", text: "Consistent tatami density, zero gaps." },
  },
  {
    x: 0.48,
    y: 0.66,
    bad: { title: "Thread Buildup", text: "Stacked stitches, hard spots, needle breaks." },
    good: { title: "Smooth Stitches", text: "Planned layering with no wasted thread." },
  },
  {
    x: 0.983,
    y: 0.5,
    bad: { title: "Jagged Edges", text: "Rough outlines and poor shape control." },
    good: { title: "Clean Edges", text: "Pull-compensated borders that sit sharp." },
  },
];

const ZOOM = 9;

/** Circular magnifier showing the image around (x, y) at ZOOM×. */
function Lens({ src, x, y, tone, className = "" }: { src: string; x: number; y: number; tone: "bad" | "good"; className?: string }) {
  const pos = (p: number) => `${Math.min(100, Math.max(0, ((ZOOM * p - 0.5) / (ZOOM - 1)) * 100))}%`;
  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-full border-2 bg-deep ${
        tone === "good" ? "border-brand shadow-[0_0_30px_rgb(243_30_57/0.35)]" : "border-line"
      } ${className}`}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: `${ZOOM * 100}%`,
        backgroundPosition: `${pos(x)} ${pos(y)}`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <span
        className={`absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full p-0.5 ${
          tone === "good" ? "bg-brand text-white" : "bg-line text-muted"
        }`}
      >
        {tone === "good" ? <Check className="size-2.5" strokeWidth={3} /> : <Close className="size-2.5" strokeWidth={3} />}
      </span>
    </span>
  );
}

function Item({
  i,
  tone,
  active,
  onActivate,
}: {
  i: number;
  tone: "bad" | "good";
  active: boolean;
  onActivate: (i: number) => void;
}) {
  const p = POINTS[i];
  const copy = p[tone];
  const right = tone === "good";
  return (
    <button
      type="button"
      onMouseEnter={() => onActivate(i)}
      onFocus={() => onActivate(i)}
      onClick={() => onActivate(i)}
      className={`group flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition-all duration-300 ${
        right ? "lg:flex-row-reverse lg:text-right" : ""
      } ${
        active
          ? right
            ? "border-brand/60 bg-brand/[0.07]"
            : "border-line bg-panel/80"
          : "border-transparent opacity-60 hover:opacity-100"
      }`}
    >
      <Lens
        src={right ? GOOD_SRC : BAD_SRC}
        x={p.x}
        y={p.y}
        tone={tone}
        className={`size-20 transition-transform duration-300 xl:size-24 ${active ? "scale-105" : ""}`}
      />
      <span className="min-w-0">
        <span className="block font-mono text-[10px] tracking-widest text-muted">
          0{i + 1}
        </span>
        <span className={`block text-sm font-semibold uppercase tracking-wide ${right ? "text-ivory" : "text-muted"}`}>
          {copy.title}
        </span>
        <span className="mt-0.5 block text-xs leading-relaxed text-muted">{copy.text}</span>
      </span>
    </button>
  );
}

export function DigitizingCompare() {
  const stageRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [active, setActive] = useState(0);
  const [touched, setTouched] = useState(false);

  // Auto-tour the comparison points until the visitor takes over.
  useEffect(() => {
    if (touched) return;
    const t = setInterval(() => setActive((a) => (a + 1) % POINTS.length), 2800);
    return () => clearInterval(t);
  }, [touched]);

  const activate = (i: number) => {
    setTouched(true);
    setActive(i);
  };

  const moveTo = (clientX: number) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(95, Math.max(5, ((clientX - r.left) / r.width) * 100)));
  };
  const onDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    setDragging(true);
    setTouched(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };
  const onMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (draggingRef.current) moveTo(e.clientX);
  };
  const onUp = () => {
    draggingRef.current = false;
    setDragging(false);
  };

  const ease = dragging ? "" : "duration-500 ease-out";

  return (
    <section id="difference" className="relative isolate overflow-hidden border-b border-line bg-bg section-y">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 fabric-texture opacity-20" />
        <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[160px]" />
      </div>

      {/* ── Header ── */}
      <div className="section-x flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Reveal>
            <p className="eyebrow mb-4">Digitizing makes the difference</p>
          </Reveal>
          <PosterHeading word="Same Art." script="Different result." />
        </div>
        <Reveal delay={0.2} className="max-w-sm lg:pb-4">
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            Two files from the exact same artwork. One was auto-traced, one was
            digitized by hand. Drag the needle and watch what changes on the machine.
          </p>
        </Reveal>
      </div>

      {/* ── Compare board ── */}
      <div className="section-x mt-16 grid items-center gap-10 lg:mt-20 lg:grid-cols-[1fr_minmax(0,1.35fr)_1fr] lg:gap-8">
        {/* Bad column (desktop) */}
        <div className="hidden lg:block">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-full bg-line text-muted">
              <Close className="size-4" strokeWidth={2.4} />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Auto-traced</span>
          </div>
          <div className="space-y-2">
            {POINTS.map((_, i) => (
              <Item key={i} i={i} tone="bad" active={active === i} onActivate={activate} />
            ))}
          </div>
        </div>

        {/* Stage */}
        <Reveal y={40}>
          <div
            ref={stageRef}
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerCancel={onUp}
            className="relative mx-auto aspect-square w-full max-w-xl cursor-ew-resize touch-none select-none overflow-hidden rounded-[2rem] border border-line bg-deep shadow-2xl shadow-black/50"
          >
            <div aria-hidden className="absolute inset-0 fabric-texture opacity-40" />
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(84_26_36/0.45),transparent_70%)]" />

            <div className="absolute inset-[7%]">
              <Image src={GOOD_SRC} alt="Hand-digitized tiger with clean fills and crisp edges" fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-contain" />
              <div
                className={`absolute inset-0 transition-[clip-path] ${ease}`}
                style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              >
                <Image src={BAD_SRC} alt="Auto-traced tiger with gaps, buildup and jagged edges" fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-contain" />
              </div>

              {/* inspection pins */}
              {POINTS.map((p, i) => {
                const onBad = p.x * 100 < pos;
                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={`${onBad ? p.bad.title : p.good.title}`}
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => activate(i)}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${p.x * 100}%`, top: `${p.y * 100}%` }}
                  >
                    <span
                      className={`grid place-items-center rounded-full border-2 font-mono text-[9px] font-bold transition-all duration-300 ${
                        active === i ? "size-8 animate-pulse-ring" : "size-6"
                      } ${onBad ? "border-ivory/70 bg-bg/80 text-ivory" : "border-ivory bg-brand text-white"}`}
                    >
                      0{i + 1}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* side tags */}
            <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-line bg-bg/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted backdrop-blur-sm">
              Bad
            </span>
            <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-brand px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
              Good
            </span>

            {/* needle divider */}
            <div
              className={`pointer-events-none absolute inset-y-0 z-20 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-ivory to-transparent transition-[left] ${ease}`}
              style={{ left: `${pos}%` }}
            >
              <span className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ivory/40 bg-bg/90 font-display text-sm italic text-ivory shadow-xl backdrop-blur">
                vs
              </span>
            </div>
          </div>
          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            ← Drag to compare →
          </p>
        </Reveal>

        {/* Good column (desktop) */}
        <div className="hidden lg:block">
          <div className="mb-5 flex items-center justify-end gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-ivory">Threads &amp; Arts</span>
            <span className="grid size-8 place-items-center rounded-full bg-brand text-white">
              <Check className="size-4" strokeWidth={2.4} />
            </span>
          </div>
          <div className="space-y-2">
            {POINTS.map((_, i) => (
              <Item key={i} i={i} tone="good" active={active === i} onActivate={activate} />
            ))}
          </div>
        </div>

        {/* Mobile / tablet: paired rows */}
        <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
          {POINTS.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => activate(i)}
              className={`flex items-center gap-3 rounded-2xl border p-3 text-left transition-colors ${
                active === i ? "border-brand/60 bg-brand/[0.06]" : "border-line bg-panel/50"
              }`}
            >
              <Lens src={BAD_SRC} x={p.x} y={p.y} tone="bad" className="size-16" />
              <Lens src={GOOD_SRC} x={p.x} y={p.y} tone="good" className="-ml-6 size-16" />
              <span className="min-w-0">
                <span className="block text-[11px] uppercase tracking-wide text-muted line-through decoration-brand/70">
                  {p.bad.title}
                </span>
                <span className="block text-sm font-semibold uppercase tracking-wide text-ivory">
                  {p.good.title}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Closer ── */}
      <Reveal className="section-x mt-20 flex flex-col items-center text-center">
        <div className="flex w-full items-center gap-6">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-brand/60" />
          <p className="font-display text-[clamp(1.6rem,3.2vw,2.8rem)] italic text-ivory">
            Can you spot all the differences?
          </p>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-brand/60" />
        </div>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Your machine can. Bad files cost thread breaks, re-hoops and rejected orders —
          send us one design and see the difference on your own fabric.
        </p>
        <motion.div whileHover={{ y: -2 }} className="mt-7">
          <Link href="#sample" className="btn btn-primary">
            Test us with a free sample <ArrowUpRight className="size-4" />
          </Link>
        </motion.div>
      </Reveal>
    </section>
  );
}
