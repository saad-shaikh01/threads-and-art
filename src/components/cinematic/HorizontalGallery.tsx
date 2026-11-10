"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { anton } from "@/components/ui/fonts";
import { PosterHeading } from "@/components/ui/PosterHeading";
import { Eyebrow } from "./ScrambleText";

export interface GalleryItem {
  title: string;
  text: string;
  image: { src: string; alt: string };
}

/**
 * Vertical scroll drives a horizontal reel on desktop (horizontal-scroll module).
 * Below lg it falls back to a native swipe carousel.
 */
export function HorizontalGallery({ eyebrow, word, script, items }: { eyebrow: string; word: string; script: string; items: readonly GalleryItem[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);

  useEffect(() => {
    const measure = () => {
      const t = trackRef.current;
      if (!t) return;
      setDist(window.innerWidth >= 1024 ? Math.max(0, t.scrollWidth - window.innerWidth) : 0);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const pinned = dist > 0;

  return (
    <section
      ref={sectionRef}
      className="relative border-b border-line bg-deep"
      style={pinned ? { height: `calc(100svh + ${dist}px)` } : undefined}
    >
      <div className={pinned ? "sticky top-0 flex h-svh flex-col justify-center overflow-hidden" : "section-y"}>
        <div className="section-x flex items-end justify-between gap-8">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <PosterHeading word={word} script={script} size="compact" />
          </div>
          <div className="hidden w-48 lg:block">
            <div className="h-px w-full bg-line">
              <motion.div style={{ width: bar }} className="h-px bg-brand" />
            </div>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Scroll to explore →</p>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          style={pinned ? { x } : undefined}
          className={`mt-14 flex gap-5 ${pinned ? "w-max pl-[max(var(--gutter-x),calc((100vw-var(--content-max))/2))] pr-[8vw]" : "no-scrollbar snap-x snap-mandatory overflow-x-auto px-[var(--gutter-x)] pb-2"}`}
        >
          {items.map((it, i) => (
            <article
              key={it.title}
              className="group relative aspect-[4/5] w-[78vw] shrink-0 snap-start overflow-hidden rounded-[1.5rem] border border-line bg-panel sm:w-[46vw] lg:w-[min(28vw,26rem)]"
            >
              <Image
                src={it.image.src}
                alt={it.image.alt}
                fill
                sizes="(min-width:1024px) 28vw, 78vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
              <span className={`${anton.className} absolute right-5 top-4 text-5xl leading-none text-transparent [-webkit-text-stroke:1px_rgb(240_237_228/0.5)]`}>
                0{i + 1}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="heading-display text-2xl text-ivory">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{it.text}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
