"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode, SVGProps } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Close } from "@/components/ui/Icons";
import { PosterHeading } from "@/components/ui/PosterHeading";
import { Reveal } from "@/components/ui/Reveal";

// Swap to /assets/wolf-cheap.webp + /assets/wolf-pro.webp once generated.
const CHEAP_SRC = "/assets/tiger-bad.webp";
const PRO_SRC = "/assets/tiger-digitized.webp";

const svg: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const ICONS = {
  breaks: (
    <svg {...svg}>
      <path d="M8 40c6-4 8-10 12-14" />
      <path d="M28 22c4-4 6-10 12-14" />
      <path d="m21 19 6 6m0-6-6 6" />
      <path d="M14 10l3 3m17 22 3 3" opacity=".6" />
    </svg>
  ),
  density: (
    <svg {...svg}>
      <circle cx="18" cy="20" r="9" />
      <circle cx="29" cy="18" r="8" />
      <circle cx="24" cy="29" r="9" />
      <circle cx="14" cy="31" r="5" />
    </svg>
  ),
  messy: (
    <svg {...svg}>
      <path d="M6 16c4-4 7 3 11-1s6 4 10 0 7 3 11-1 5 2 4 2" />
      <path d="M6 25c3 3 8-5 12-1s5-3 9 1 8-3 10 0 3 1 5 0" />
      <path d="M8 34c4-3 6 4 10 0s7 3 11-2 6 4 11 1" />
    </svg>
  ),
  smooth: (
    <svg {...svg}>
      <path d="M6 16c6-4 12-4 18 0s12 4 18 0" />
      <path d="M6 24c6-4 12-4 18 0s12 4 18 0" />
      <path d="M6 32c6-4 12-4 18 0s12 4 18 0" />
    </svg>
  ),
  grid: (
    <svg {...svg}>
      <path d="M8 14h32M8 22h32M8 30h32M8 38h32" />
      <path d="M14 8v34M22 8v34M30 8v34M38 8v34" />
    </svg>
  ),
  shield: (
    <svg {...svg}>
      <path d="M24 6 39 11v11c0 10-6.5 17-15 20-8.5-3-15-10-15-20V11z" />
      <path d="m17 24 5 5 9-10" />
    </svg>
  ),
};

const SIDES = {
  cheap: {
    tag: "Cheap digitizing",
    verdict: "Looks fine on screen. Falls apart on the machine.",
    image: CHEAP_SRC,
    alt: "Cheaply digitized embroidery with loose threads and uneven fill",
    risk: 88,
    features: [
      { icon: ICONS.breaks, title: "Thread Breaks", text: "Bad pathing snaps thread and stops the run." },
      { icon: ICONS.density, title: "Bad Density", text: "Stacked layers turn patches stiff and bulletproof." },
      { icon: ICONS.messy, title: "Messy Stitches", text: "Wandering angles and loose jump threads." },
    ],
  },
  pro: {
    tag: "Professional digitizing",
    verdict: "Engineered stitch-by-stitch for your exact fabric and machine.",
    image: PRO_SRC,
    alt: "Professionally digitized embroidery with clean edges and even fill",
    risk: 8,
    features: [
      { icon: ICONS.smooth, title: "Smooth Stitches", text: "Consistent angles that catch the light." },
      { icon: ICONS.grid, title: "Perfect Density", text: "Balanced coverage — soft hand, zero gaps." },
      { icon: ICONS.shield, title: "Premium Results", text: "Runs clean at full speed, every time." },
    ],
  },
};

function Card({ side }: { side: keyof typeof SIDES }) {
  const d = SIDES[side];
  const pro = side === "pro";
  return (
    <motion.article
      initial={{ opacity: 0, y: 40, rotate: pro ? 2 : -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: pro ? 1 : -1 }}
      whileHover={{ rotate: 0, y: -6 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.3, 1] }}
      className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border ${
        pro
          ? "border-brand/50 bg-raised shadow-[0_30px_80px_-20px_rgb(243_30_57/0.35)]"
          : "border-line bg-panel shadow-2xl shadow-black/40"
      }`}
    >
      {/* header */}
      <div className="flex items-center justify-between gap-4 px-6 pt-6">
        <div className="flex items-center gap-3">
          <span
            className={`grid size-10 place-items-center rounded-full ${
              pro ? "bg-brand text-white" : "border border-line bg-bg text-muted"
            }`}
          >
            {pro ? <Check className="size-5" strokeWidth={2.6} /> : <Close className="size-5" strokeWidth={2.6} />}
          </span>
          <span className={`font-mono text-xs uppercase tracking-[0.22em] ${pro ? "text-ivory" : "text-muted"}`}>
            {d.tag}
          </span>
        </div>
        {pro && (
          <span className="rounded-full border border-brand/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-brand">
            Threads &amp; Arts
          </span>
        )}
      </div>

      {/* image on fabric */}
      <div className="relative mx-6 mt-5 aspect-[4/3] overflow-hidden rounded-2xl border border-line/60 bg-deep">
        <div aria-hidden className="absolute inset-0 fabric-texture opacity-50" />
        <div
          aria-hidden
          className={`absolute inset-0 ${
            pro
              ? "bg-[radial-gradient(circle_at_center,rgb(84_26_36/0.55),transparent_70%)]"
              : "bg-[radial-gradient(circle_at_center,rgb(48_54_53/0.6),transparent_70%)]"
          }`}
        />
        <div
          className={`absolute inset-[8%] transition-transform duration-500 ${
            pro ? "group-hover:scale-105" : "group-hover:animate-[jitter_0.35s_steps(2)_infinite]"
          }`}
        >
          <Image
            src={d.image}
            alt={d.alt}
            fill
            sizes="(max-width: 1024px) 90vw, 40vw"
            className={`object-contain ${pro ? "drop-shadow-[0_20px_30px_rgb(0_0_0/0.5)]" : "saturate-50"}`}
          />
        </div>
        {pro && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[120%]"
          />
        )}
      </div>

      <p className={`px-6 pt-5 font-display text-lg leading-snug ${pro ? "text-ivory" : "text-muted"}`}>
        {d.verdict}
      </p>

      {/* features */}
      <ul className="grid grid-cols-3 gap-3 px-6 pt-6">
        {d.features.map((f) => (
          <li key={f.title} className="flex flex-col items-center text-center">
            <span
              className={`grid size-14 place-items-center rounded-2xl border transition-colors ${
                pro
                  ? "border-brand/30 bg-brand/10 text-brand group-hover:border-brand"
                  : "border-line bg-bg/60 text-muted"
              }`}
            >
              <span className="size-8">{f.icon}</span>
            </span>
            <span
              className={`mt-3 text-[11px] font-bold uppercase leading-tight tracking-wider ${
                pro ? "text-ivory" : "text-muted"
              }`}
            >
              {f.title}
            </span>
            <span className="mt-1 hidden text-[11px] leading-snug text-muted sm:block">{f.text}</span>
          </li>
        ))}
      </ul>

      {/* risk meter */}
      <div className="mt-auto px-6 pb-6 pt-7">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted">
          <span>Production risk</span>
          <span className={pro ? "text-ivory" : "text-brand"}>{pro ? "Low" : "High"}</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-bg">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${d.risk}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.2, 0.7, 0.3, 1] }}
            className={`h-full rounded-full ${pro ? "bg-ivory/70" : "bg-gradient-to-r from-wine to-brand"}`}
          />
        </div>
      </div>
    </motion.article>
  );
}

function Medallion({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10 grid size-16 place-items-center rounded-full border border-ivory/30 bg-bg font-display text-xl italic text-ivory shadow-[0_0_0_8px_var(--bg),0_10px_40px_rgb(0_0_0/0.6)]">
      {children}
    </div>
  );
}

export function CheapVsPro() {
  return (
    <section id="cheap-vs-pro" className="relative isolate overflow-hidden border-b border-line bg-deep section-y">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 fabric-texture opacity-15" />
        <div className="absolute -right-40 top-1/3 h-[480px] w-[480px] rounded-full bg-brand/10 blur-[150px]" />
      </div>

      {/* header */}
      <div className="section-x flex flex-col items-center text-center">
        <Reveal>
          <p className="eyebrow mb-4">The difference between cheap &amp; professional</p>
        </Reveal>
        <PosterHeading word="Cheap" script="costs more." />
        <Reveal delay={0.2}>
          <p className="mt-12 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            A $5 file can cost you a ruined jacket, a broken needle and a lost client. Here&apos;s
            what you actually pay for with professional embroidery digitizing.
          </p>
        </Reveal>
      </div>

      {/* cards */}
      <div className="section-x relative mt-14 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-14">
        <Card side="cheap" />
        <div className="-my-11 flex justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:my-0 lg:-translate-x-1/2 lg:-translate-y-1/2">
          <Medallion>vs</Medallion>
        </div>
        <Card side="pro" />
      </div>

      {/* closer */}
      <Reveal className="section-x mt-14">
        <div className="flex flex-col items-stretch gap-4 rounded-3xl border border-line bg-panel/70 p-3 backdrop-blur-sm md:flex-row md:items-center">
          <div className="flex flex-1 items-center gap-5 rounded-2xl bg-bg p-5">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand text-white">
              <svg {...svg} className="size-7">
                <path d="M42 6 20 28M42 6 28 42l-8-14-14-8z" />
              </svg>
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand">Send us your artwork</p>
              <p className="mt-1 text-sm text-ivory sm:text-base">
                Get clean, machine-ready embroidery files in 4–6 hours.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-5 px-3 md:px-6">
            <div className="flex items-center gap-3">
              <span className="size-9 text-ivory">
                <svg {...svg}>
                  <circle cx="24" cy="18" r="11" />
                  <path d="m17 27-4 15 11-5 11 5-4-15" />
                  <path d="m19 18 3.5 3.5L29 15" />
                </svg>
              </span>
              <p className="font-display text-base leading-tight text-ivory">
                Better files.
                <br />
                <em className="text-brand">Better results.</em>
              </p>
            </div>
            <Link href="#sample" className="btn btn-primary">
              Free sample <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
