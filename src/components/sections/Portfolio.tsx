"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Close } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { links, portfolio } from "@/lib/content";

export function Portfolio() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

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
      className="section-x section-y grid gap-8 border-b border-line bg-[linear-gradient(130deg,#171c1b,#111515)] lg:grid-cols-[1fr_2.7fr] lg:gap-12"
    >
      <Reveal>
        <p className="eyebrow mb-4">Our work</p>
        <h2 className="heading-2">
          Real designs.
          <br />
          <em className="text-accent">Real results.</em>
        </h2>
        <p className="my-6 max-w-[15rem] text-sm text-muted">
          A closer look at embroidery samples from our existing portfolio.
        </p>
        <a href={links.portfolio} className="btn btn-outline btn-sm">
          Explore Full Portfolio <ArrowUpRight className="size-3.5" />
        </a>
      </Reveal>

      <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3">
        {portfolio.map((p, i) => (
          <Reveal
            key={p.image}
            delay={i * 0.1}
            className={i === portfolio.length - 1 ? "max-lg:col-span-2" : ""}
          >
            <button
              type="button"
              onClick={() => open(i)}
              aria-label={`Open: ${p.alt}`}
              className="surface-card group relative block h-56 w-full overflow-hidden text-left md:h-72 lg:h-72"
            >
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(min-width:1024px) 28vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-linear-to-t from-black/80 to-transparent px-4 pb-4 pt-12 text-[11px] text-white">
                View the details
                <ArrowUpRight className="size-4 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

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
                <img src={current.image} alt={current.alt} className="mx-auto max-h-[70vh] w-auto max-w-full" />
                <p className="mt-3 text-center text-xs text-muted">{current.caption}</p>
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
