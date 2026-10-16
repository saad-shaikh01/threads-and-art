"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Close } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { links, portfolio } from "@/lib/content";

export function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const checkBounds = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkBounds();
    el.addEventListener("scroll", checkBounds, { passive: true });
    window.addEventListener("resize", checkBounds);
    return () => {
      el.removeEventListener("scroll", checkBounds);
      window.removeEventListener("resize", checkBounds);
    };
  }, [checkBounds]);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const distance = card ? card.offsetWidth + 16 : el.clientWidth * 0.6;
    el.scrollBy({ left: dir * distance, behavior: "smooth" });
  };

  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const close = useCallback(() => dialog.current?.close(), []);
  const step = useCallback(
    (dir: number) =>
      setIndex((i) => (i === null ? i : (i + dir + portfolio.length) % portfolio.length)),
    [],
  );

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setIndex(null);
    el.addEventListener("keydown", onKey);
    el.addEventListener("close", onClose);
    return () => {
      el.removeEventListener("keydown", onKey);
      el.removeEventListener("close", onClose);
    };
  }, [step]);

  const current = index === null ? null : portfolio[index];

  return (
    <section
      id="portfolio"
      className="section-y border-b border-line bg-[linear-gradient(130deg,#171c1b,#111515)]"
    >
      {/* Header row with arrows */}
      <div className="section-x flex items-end justify-between gap-4 pb-8 md:pb-10">
        <Reveal>
          <p className="eyebrow mb-3">Our work</p>
          <h2 className="heading-2">
            Real designs.{" "}
            <em className="text-accent">Real results.</em>
          </h2>
          <p className="mt-3 max-w-xs text-sm text-muted">
            A closer look at embroidery samples from our portfolio.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex items-center gap-3 shrink-0">
          <a
            href={links.portfolio}
            className="btn btn-outline btn-sm hidden sm:inline-flex"
          >
            Full Portfolio <ArrowUpRight className="size-3.5" />
          </a>
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Previous slide"
            disabled={!canPrev}
            className="grid size-10 place-items-center rounded-full border border-line transition-colors hover:border-brand disabled:opacity-30 disabled:hover:border-line md:size-11"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Next slide"
            disabled={!canNext}
            className="grid size-10 place-items-center rounded-full border border-line transition-colors hover:border-brand disabled:opacity-30 disabled:hover:border-line md:size-11"
          >
            <ArrowRight className="size-4" />
          </button>
        </Reveal>
      </div>

      {/* Slider track */}
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pl-[max(var(--gutter-x),calc((100vw-var(--content-max))/2))] pr-4 md:gap-5"
      >
        {portfolio.map((p, i) => (
          <div
            key={p.image}
            data-card
            className="w-70 shrink-0 snap-start sm:w-80 md:w-90 lg:w-95"
          >
            <button
              type="button"
              onClick={() => open(i)}
              aria-label={`View: ${p.alt}`}
              className="surface-card spotlight group relative block h-85 w-full overflow-hidden text-left sm:h-95 md:h-105"
            >
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(min-width:1024px) 380px, (min-width:640px) 320px, 280px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-linear-to-t from-black/80 via-black/40 to-transparent px-4 pb-4 pt-16 text-[11px] text-ivory/90">
                <span className="font-mono">{p.caption}</span>
                <ArrowUpRight className="size-4 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>
        ))}

        {/* CTA card at the end */}
        <div
          data-card
          className="flex w-70 shrink-0 snap-start items-center justify-center sm:w-80 md:w-90 lg:w-95"
        >
          <a
            href={links.portfolio}
            className="surface-card flex h-85 w-full flex-col items-center justify-center gap-4 text-center sm:h-95 md:h-105"
          >
            <span className="grid size-14 place-items-center rounded-full border border-brand text-brand">
              <ArrowUpRight className="size-6" />
            </span>
            <span className="text-sm font-medium text-ivory">
              Explore Full Portfolio
            </span>
            <span className="text-xs text-muted">
              View all our work
            </span>
          </a>
        </div>
      </div>

      {/* Lightbox dialog */}
      <dialog
        ref={dialog}
        onClick={(e) => e.target === dialog.current && close()}
        className="m-auto w-[min(850px,92vw)] border border-line bg-bg p-0 backdrop:bg-black/85 backdrop:backdrop-blur-sm"
      >
        <div className="relative px-5 pb-4 pt-12">
          <button
            type="button"
            onClick={close}
            aria-label="Close image"
            className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-line hover:border-brand"
          >
            <Close className="size-4" />
          </button>
          <AnimatePresence mode="wait">
            {current && (
              <motion.div
                key={current.image}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={current.image}
                  alt={current.alt}
                  className="mx-auto max-h-[70vh] w-auto max-w-full"
                />
                <p className="mt-3 text-center text-xs text-muted">
                  {current.caption}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="mt-3 flex justify-center gap-3">
            {([-1, 1] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => step(d)}
                aria-label={d < 0 ? "Previous image" : "Next image"}
                className="grid size-9 place-items-center rounded-full border border-line hover:border-brand"
              >
                {d < 0 ? <ArrowLeft className="size-4" /> : <ArrowRight className="size-4" />}
              </button>
            ))}
          </div>
        </div>
      </dialog>
    </section>
  );
}
