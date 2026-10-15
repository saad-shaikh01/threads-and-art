"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import { SectionTop } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/content";

export function Services() {
  const track = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const sync = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 1);
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const scrollBy = (dir: -1 | 1) => {
    const el = track.current;
    el?.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="services" className="section-x section-y border-b border-line">
      <SectionTop
        eyebrow="Our services"
        title={
          <>
            Every detail.
            <br />
            Every stitch. <em className="text-accent">Considered.</em>
          </>
        }
        intro="From your first logo to your next production run, get files crafted for the way you work."
        aside={
          <div className="ml-auto flex gap-2.5 md:ml-0">
            {([-1, 1] as const).map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => scrollBy(dir)}
                aria-label={dir < 0 ? "Previous services" : "Next services"}
                className="grid size-10 place-items-center rounded-full border border-[#59615b] transition-colors hover:border-brand hover:bg-brand/10 max-md:size-9"
              >
                {dir < 0 ? <ArrowLeft className="size-4" /> : <ArrowRight className="size-4" />}
              </button>
            ))}
          </div>
        }
      />

      <div
        ref={track}
        onScroll={sync}
        className="no-scrollbar -mx-1 grid snap-x snap-mandatory auto-cols-[78%] grid-flow-col gap-4 overflow-x-auto px-1 pb-1 sm:auto-cols-[calc((100%-1rem)/2)] lg:auto-cols-[calc((100%-3.375rem)/4)] lg:gap-[1.125rem]"
      >
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08} className="snap-start">
            <a
              href={s.href}
              className="surface-card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgb(243_30_57/0.35)]"
            >
              <div className="relative h-60 overflow-hidden lg:h-56">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 78vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-panel/70 via-transparent to-transparent" />
              </div>
              <div className="relative flex-1 p-5">
                <span className="text-[9px] tracking-[0.15em] text-[#939d94]">{s.tag}</span>
                <h3 className="mb-2 mt-2 text-base font-medium">{s.title}</h3>
                <p className="max-w-40 text-xs text-muted">{s.text}</p>
                <span className="absolute bottom-5 right-4 grid size-8 place-items-center rounded-full border border-line text-brand transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 h-px bg-line lg:hidden" aria-hidden>
        <div
          className="h-full w-1/3 bg-brand transition-transform duration-150"
          style={{ transform: `translateX(${progress * 200}%)` }}
        />
      </div>
    </section>
  );
}
