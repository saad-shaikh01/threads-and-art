"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "@/components/ui/Icons";
import { formats } from "@/lib/content";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  useEffect(() => {
    const onPointer = (e: PointerEvent) => {
      setOffsetY(((e.clientY / window.innerHeight) - 0.5) * 12);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => window.removeEventListener("pointermove", onPointer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden border-b border-line"
    >
      {/* ── Layer 0: Full-bleed background image ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <Image
          src="/assets/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-bg/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg" />
      </motion.div>

      {/* ── Layer 1: Ambient glows + fabric texture ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] fabric-texture opacity-30" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-5%] z-[1] h-[520px] w-[520px] rounded-full bg-brand/12 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10%] left-[-8%] z-[1] h-[440px] w-[440px] rounded-full bg-wine/30 blur-[140px]"
      />

      {/* ── Layer 2: Floating side images (parallax) ── */}
      <motion.div
        className="pointer-events-none absolute left-[-6%] top-[15%] z-[2] w-[38%] max-w-[480px] md:left-[-3%] md:top-[12%]"
        style={{ x: leftX, y: offsetY * 0.5 }}
      >
        <div className="relative aspect-[8/11] overflow-hidden rounded-2xl border border-line/40 shadow-2xl shadow-black/50">
          <Image
            src="/assets/hero-left.webp"
            alt="Embroidered 3D puff crest patch"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 40vw, 30vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/60 via-transparent to-transparent" />
        </div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute right-[-6%] top-[18%] z-[2] w-[34%] max-w-[440px] md:right-[-2%] md:top-[10%]"
        style={{ x: rightX, y: offsetY * -0.4 }}
      >
        <div className="relative aspect-[8/11] overflow-hidden rounded-2xl border border-line/40 shadow-2xl shadow-black/50">
          <Image
            src="/assets/hero-right.webp"
            alt="Embroidery hoop with needle stitching"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 36vw, 28vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-bg/60 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* ── Layer 3: Main content — brand name + hook ── */}
      <motion.div
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center"
        style={{ y: textY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/80 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-muted backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
          <span>EST. 2017</span>
          <span className="text-line">|</span>
          <span className="text-ivory font-semibold">4–6H TURNAROUND</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.7, 0.3, 1] }}
          className="font-display font-normal leading-[0.92] tracking-[-0.04em]"
        >
          <span className="block text-[clamp(3.2rem,10vw,9rem)] text-ivory">
            Threads
          </span>
          <span className="block text-[clamp(3.2rem,10vw,9rem)] text-brand italic">
            &amp; Arts
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-5 max-w-xl text-base text-muted sm:text-lg md:text-xl leading-relaxed"
        >
          Crafted for the Machine.{" "}
          <em className="text-ivory font-display not-italic">Digitized by Hand.</em>
          <br className="hidden sm:block" />
          Production-grade embroidery digitizing for commercial multi-head machines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link href="#sample" className="btn btn-primary">
            Get Free Sample <ArrowUpRight className="size-4" />
          </Link>
          <Link href="#services" className="btn btn-ghost">
            View Services
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex items-center gap-6 divide-x divide-line text-center sm:gap-10"
        >
          {[
            { val: "50,000+", label: "Designs Delivered" },
            { val: "400+", label: "Active Shops" },
            { val: "100%", label: "Unlimited Revisions" },
          ].map((s) => (
            <div key={s.label} className="pl-6 first:pl-0 sm:pl-10">
              <div className="font-mono text-lg font-semibold text-ivory sm:text-2xl">{s.val}</div>
              <div className="text-[10px] text-muted sm:text-xs">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Layer 4: Foreground embroidery strip ── */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3] h-[140px] sm:h-[180px] md:h-[220px]"
        style={{ y: fgY }}
      >
        <Image
          src="/assets/hero-foreground.webp"
          alt=""
          fill
          className="object-cover object-top opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
      </motion.div>

      {/* ── Layer 5: Format ticker bar at bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-line/60 bg-bg/80 backdrop-blur-md">
        <div className="section-x flex items-center gap-4 py-3 overflow-hidden">
          <span className="shrink-0 text-[10px] font-mono uppercase tracking-widest text-brand">
            MACHINE-READY
          </span>
          <div className="flex animate-marquee gap-4 whitespace-nowrap">
            {[...formats, ...formats].map((ext, i) => (
              <span
                key={`${ext}-${i}`}
                className="rounded-md border border-line/60 bg-panel/60 px-3 py-1 text-[11px] font-mono text-muted"
              >
                .{ext}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
