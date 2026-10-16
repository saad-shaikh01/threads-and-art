"use client";

import { Reveal } from "@/components/ui/Reveal";
import { reasons } from "@/lib/content";
import type { ReactNode } from "react";

const iconPaths: Record<string, ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  loop: (
    <path d="M12 12c-2-2.7-3.6-4-5.5-4a4 4 0 0 0 0 8c1.9 0 3.5-1.3 5.5-4Zm0 0c2 2.7 3.6 4 5.5 4a4 4 0 0 0 0-8c-1.9 0-3.5 1.3-5.5 4Z" />
  ),
  layers: (
    <path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17.5 12 22l9-4.5" />
  ),
  badge: (
    <>
      <circle cx="12" cy="10" r="6" />
      <path d="m9 15-1.5 6L12 19l4.5 2L15 15" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

function Pin() {
  return (
    <svg
      viewBox="0 0 20 28"
      className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2"
      width="20"
      height="28"
      aria-hidden
    >
      <circle cx="10" cy="8" r="7" fill="var(--red)" stroke="var(--red-deep)" strokeWidth="1" />
      <ellipse cx="8" cy="6" rx="2" ry="1.5" fill="rgba(255,255,255,0.25)" />
      <rect x="9" y="15" width="2" height="9" rx="1" fill="#888" />
    </svg>
  );
}

function NoteCard({
  num,
  title,
  icon,
  rotate,
  dark,
  delay,
  className = "",
}: (typeof reasons)[number] & { delay: number; className?: string }) {
  return (
    <Reveal delay={delay} className={className}>
      <div style={{ transform: `rotate(${rotate}deg)` }}>
        <div
          className="relative rounded-sm px-4 py-7 text-center shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.55)] md:px-5 md:py-9"
          style={{
            background: dark ? "var(--wine)" : "#e8dfd0",
            color: dark ? "var(--ivory)" : "#1a1f1e",
          }}
        >
          <Pin />

          <span
            className="absolute right-3 top-2.5 font-mono text-[10px]"
            style={{ opacity: dark ? 0.3 : 0.25 }}
          >
            {num}
          </span>

          <div
            className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full md:h-12 md:w-12"
            style={{
              background: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.07)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 md:h-6 md:w-6"
              aria-hidden
            >
              {iconPaths[icon]}
            </svg>
          </div>

          <p className="font-display text-sm font-bold leading-tight md:text-base lg:text-lg">
            {title}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className="section-x section-y border-b border-line">
      <Reveal className="mb-10 text-center md:mb-14">
        <p className="eyebrow mb-4">Why Choose Us</p>
        <h2 className="heading-2">
          5 Reasons to work
          <br />
          <em className="text-accent">with us.</em>
        </h2>
      </Reveal>

      <div
        className="relative mx-auto max-w-2xl overflow-hidden rounded-xl p-4 md:p-8 lg:p-12"
        style={{ background: "var(--panel-deep)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative grid grid-cols-4 gap-3 md:gap-5">
          {reasons.map((r, i) => (
            <NoteCard
              key={r.num}
              {...r}
              delay={i * 0.1}
              className={i === 2 ? "col-start-2 col-span-2" : "col-span-2"}
            />
          ))}
        </div>
      </div>

      <Reveal
        delay={0.4}
        className="mt-10 text-center font-display text-xl leading-snug text-ivory md:mt-14 md:text-2xl"
      >
        Precision in the file.
        <br />
        <em className="text-accent">Confidence on the machine.</em>
      </Reveal>
    </section>
  );
}
