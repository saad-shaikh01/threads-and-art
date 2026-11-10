"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Close } from "@/components/ui/Icons";
import { Spotlight } from "@/components/ui/Spotlight";
import type { PortfolioItem } from "@/lib/pages/portfolio";

const EASE = [0.2, 0.7, 0.3, 1] as const;

/** Filterable bento grid of work with a keyboard-friendly lightbox. */
export function PortfolioGallery({ items, categories }: { items: readonly PortfolioItem[]; categories: readonly string[] }) {
  const [filter, setFilter] = useState<string>("All");
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const shown = filter === "All" ? items : items.filter((i) => i.category === filter);
  const count = (c: string) => (c === "All" ? items.length : items.filter((i) => i.category === c).length);

  const show = (i: number) => {
    setOpen(i);
    dialog.current?.showModal();
  };
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + shown.length) % shown.length)), [shown.length]);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setOpen(null);
    el.addEventListener("keydown", onKey);
    el.addEventListener("close", onClose);
    return () => {
      el.removeEventListener("keydown", onKey);
      el.removeEventListener("close", onClose);
    };
  }, [step]);

  const current = open === null ? null : shown[open];

  return (
    <>
      {/* Filter chips */}
      <div role="tablist" aria-label="Filter work" className="no-scrollbar -mx-[var(--gutter-x)] flex gap-2 overflow-x-auto px-[var(--gutter-x)] pb-2">
        {["All", ...categories].map((c) => {
          const active = filter === c;
          return (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(c)}
              className={`relative shrink-0 rounded-full border px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                active ? "border-brand text-ivory" : "border-line text-muted hover:border-muted hover:text-ivory"
              }`}
            >
              {active && <motion.span layoutId="pf-chip" className="absolute inset-0 -z-10 rounded-full bg-brand/20" transition={{ duration: 0.4, ease: EASE }} />}
              {c} <span className="ml-1 text-brand">{String(count(c)).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>

      {/* Bento grid */}
      <motion.ul layout className="mt-10 grid grid-flow-dense auto-rows-[15rem] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[17rem] lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {shown.map((it, i) => (
            <motion.li
              layout
              key={it.src}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.5, ease: EASE }}
              className={i % 6 === 0 ? "sm:col-span-2 sm:row-span-2" : i % 6 === 4 ? "sm:col-span-2" : ""}
            >
              <Spotlight className="group relative h-full overflow-hidden rounded-[1.25rem] border border-line bg-panel">
                <button type="button" onClick={() => show(i)} aria-label={`View ${it.title}`} className="absolute inset-0 z-10" />
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="(min-width:1024px) 50vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute left-4 top-4 rounded-full border border-line/70 bg-bg/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ivory backdrop-blur-sm">
                  {it.category}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-xl text-ivory">{it.title}</p>
                  <p className="mt-1 translate-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {it.technique}
                  </p>
                </div>
                <span className="absolute right-4 top-4 grid size-9 scale-75 place-items-center rounded-full bg-brand text-ivory opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                  <ArrowUpRight className="size-4" />
                </span>
              </Spotlight>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {/* Lightbox */}
      <dialog
        ref={dialog}
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
        aria-label="Portfolio viewer"
        className="m-auto w-[min(1100px,94vw)] rounded-[1.25rem] border border-line bg-bg p-0 text-ivory backdrop:bg-black/85 backdrop:backdrop-blur-sm"
      >
        <div className="relative grid gap-0 md:grid-cols-[1fr_18rem]">
          <AnimatePresence mode="wait">
            {current && (
              <motion.div
                key={current.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative aspect-[16/10] bg-deep"
              >
                <Image src={current.src} alt={current.alt} fill sizes="(min-width:768px) 800px, 94vw" className="object-contain" />
              </motion.div>
            )}
          </AnimatePresence>
          {current && (
            <div className="flex flex-col gap-4 border-t border-line p-6 md:border-l md:border-t-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">
                {String((open ?? 0) + 1).padStart(2, "0")} / {String(shown.length).padStart(2, "0")} · {current.category}
              </p>
              <p className="font-display text-2xl leading-tight">{current.title}</p>
              <p className="text-sm text-muted">{current.technique}</p>
              <Link href={current.service} className="btn btn-outline btn-sm mt-auto w-fit">
                See this service <ArrowUpRight className="size-3.5" />
              </Link>
              <div className="flex gap-2">
                {([-1, 1] as const).map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => step(d)}
                    aria-label={d < 0 ? "Previous piece" : "Next piece"}
                    className="grid size-11 place-items-center rounded-full border border-line hover:border-brand"
                  >
                    {d < 0 ? <ArrowLeft className="size-4" /> : <ArrowRight className="size-4" />}
                  </button>
                ))}
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label="Close viewer"
            className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full border border-line bg-bg/80 hover:border-brand"
          >
            <Close className="size-4" />
          </button>
        </div>
      </dialog>
    </>
  );
}
