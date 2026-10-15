"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type CSSProperties, type PointerEvent } from "react";
import { ArrowUpRight, Play } from "@/components/ui/Icons";

const THREAD_PATH =
  "M690 -30 C600 120 860 110 770 300 S600 450 850 530 S1170 580 1200 700";

const enter = (delay: number): CSSProperties => ({ animationDelay: `${delay}s` });

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Gentle pointer depth — fine pointers only, ≤10px of travel.
  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const box = ref.current.getBoundingClientRect();
    const x = (e.clientX - box.left) / box.width - 0.5;
    const y = (e.clientY - box.top) / box.height - 0.5;
    const s = ref.current.style;
    s.setProperty("--depth-x", `${x * 10}px`);
    s.setProperty("--depth-y", `${y * 8}px`);
    s.setProperty("--thread-x", `${x * 4}px`);
    s.setProperty("--thread-y", `${y * 3}px`);
  };
  const onLeave = () => {
    ["--depth-x", "--depth-y", "--thread-x", "--thread-y"].forEach((p) =>
      ref.current?.style.removeProperty(p),
    );
  };

  return (
    <section
      ref={ref}
      id="home"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="section-x relative flex min-h-[46rem] items-start overflow-hidden pb-24 pt-14 md:min-h-[44rem] md:items-center md:py-20 2xl:min-h-[52rem]"
    >
      {/* Tiger artwork */}
      <div className="absolute inset-0">
        <div className="absolute -inset-2.5 translate-x-(--depth-x,0px) translate-y-(--depth-y,0px) scale-[1.025] transition-transform duration-500 ease-out max-md:top-auto max-md:h-[75%]">
          <Image
            src="/assets/hero.png"
            alt="Illustrative crimson and ivory tiger embroidery"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[65%_bottom] md:object-right"
          />
        </div>
        {/* Legibility + blend gradients (same stops as the original draft) */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#111515_3%,#111515ee_25%,#11151577_48%,transparent_73%)] max-md:bg-[linear-gradient(180deg,#111515_0%,#111515dd_20%,#111515b0_45%,transparent_70%,#111515_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#111515,transparent_30%)]" />
      </div>

      {/* The thread: draws itself, with a needle riding the tip */}
      <svg
        className="pointer-events-none absolute inset-0 size-full translate-x-(--thread-x,0px) translate-y-(--thread-y,0px) opacity-40 transition-transform duration-700 ease-out md:opacity-70"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMaxYMid slice"
        aria-hidden
      >
        <path
          d={THREAD_PATH}
          pathLength={1600}
          fill="none"
          stroke="var(--red)"
          strokeWidth={1.4}
          strokeDasharray={1600}
          strokeDashoffset={1600}
          className="animate-draw"
        />
        <circle r={5} fill="var(--red)" opacity={0}>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.02;0.96;1" dur="5s" begin="0.7s" fill="freeze" />
          <animateMotion
            dur="5s"
            begin="0.7s"
            fill="freeze"
            path={THREAD_PATH}
            calcMode="spline"
            keyTimes="0;1"
            keySplines="0.25 0.1 0.25 1"
          />
        </circle>
      </svg>

      <div className="relative z-10 w-full max-w-[38rem]">
        <p className="eyebrow mb-5 animate-hero-in" style={enter(0.1)}>
          From artwork to perfect stitches
        </p>
        <h1
          className="heading-display mb-6 max-w-[37rem] animate-hero-in text-[clamp(2.75rem,1.6rem+4.4vw,4.5rem)]"
          style={enter(0.2)}
        >
          Precision Digitizing for{" "}
          <em className="text-accent underline decoration-brand decoration-dashed decoration-2 underline-offset-[0.2em]">
            Real-World
            <br />
            Production.
          </em>
        </h1>
        <p className="max-w-md animate-hero-in text-[0.95rem] leading-relaxed text-ivory/80" style={enter(0.35)}>
          Professional embroidery digitizing and vector artwork for embroidery shops, apparel
          decorators and promotional product companies.
        </p>

        <div className="mt-8 flex animate-hero-in flex-wrap items-center gap-x-6 gap-y-4" style={enter(0.5)}>
          <Link href="#sample" className="btn btn-primary">
            Get Your Free Sample <ArrowUpRight className="size-4" />
          </Link>
          <Link href="#transformation" className="group flex items-center gap-3 text-xs">
            <span className="grid size-10 place-items-center rounded-full border border-brand transition-colors group-hover:bg-brand/15">
              <Play className="size-3 text-brand" />
            </span>
            Explore the process
          </Link>
        </div>

        <p className="mt-9 flex animate-hero-in items-center gap-2 text-[11px] text-muted" style={enter(0.65)}>
          <span className="size-1.5 animate-pulse-ring rounded-full bg-brand" />
          Serving embroidery professionals since 2017
        </p>
      </div>

      {/* Floating spec chip */}
      <div
        className="absolute bottom-24 right-[7%] z-10 hidden animate-float rounded-xl border border-white/10 bg-bg/60 px-5 py-4 backdrop-blur-md lg:block"
        aria-hidden
      >
        <p className="text-[10px] tracking-[0.2em] text-muted">TURNAROUND</p>
        <p className="font-display text-3xl leading-none">
          4–6 <span className="text-base text-brand">hours</span>
        </p>
      </div>

      <div className="absolute bottom-6 left-[6%] right-[6%] z-10 flex items-end justify-between text-[9px] tracking-[0.2em] text-ivory/70 md:left-auto md:right-[7%] md:block md:text-right">
        <p className="text-inherit">THE ART IS IN THE DETAILS</p>
        <p className="text-[8px] text-[#8e9890]">01 / THREAD &amp; TEXTURE</p>
      </div>
    </section>
  );
}
