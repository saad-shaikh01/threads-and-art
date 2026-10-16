"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@/components/ui/Icons";
import { SectionTop } from "@/components/ui/SectionHeading";
import { steps } from "@/lib/content";

const ICONS = [
  <path key="upload" d="M12 16V4m0 0-4 4m4-4 4 4M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />,
  <path key="pen" d="m16.5 3.5 4 4L7 21H3v-4L16.5 3.5ZM12.5 7.5l4 4" />,
  <path key="eye" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z" />,
  <path key="play" d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM10 8l6 4-6 4V8Z" />,
];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-b border-line"
    >
      <div className="pointer-events-none absolute inset-0 fabric-texture opacity-15" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand/6 blur-[160px]"
      />

      <div className="section-x section-y relative z-10">
        <SectionTop
          eyebrow="How it works"
          title={
            <>
              From your artwork
              <br />
              to the <em className="text-accent">final stitch.</em>
            </>
          }
          intro="A simple process. A production-ready result."
          aside={
            <Link href="#sample" className="btn btn-outline btn-sm">
              Start Your Free Sample <ArrowUpRight className="size-3.5" />
            </Link>
          }
        />

        {/* Staircase cards */}
        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-6 sm:gap-8">
          {steps.map((s, i) => {
            const isEven = i % 2 === 0;

            return (
              <div
                key={s.title}
                className={`relative ${
                  isEven
                    ? "ml-auto mr-0 sm:mr-[4%] md:mr-[8%]"
                    : "ml-0 mr-auto sm:ml-[4%] md:ml-[8%]"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: [0.2, 0.7, 0.3, 1],
                  }}
                >
                  <div
                    className={`relative flex items-stretch ${
                      isEven ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* ── Colored number tab ── */}
                    <div
                      className={`relative z-0 flex w-20 shrink-0 items-center justify-center sm:w-24 md:w-28 ${
                        isEven ? "rounded-l-[28px]" : "rounded-r-[28px]"
                      } ${
                        i % 4 === 0
                          ? "bg-brand shadow-[0_8px_30px_rgba(243,30,57,0.3)]"
                          : i % 4 === 1
                          ? "bg-wine shadow-[0_8px_30px_rgba(84,26,36,0.4)]"
                          : i % 4 === 2
                          ? "bg-brand-deep shadow-[0_8px_30px_rgba(213,20,44,0.3)]"
                          : "bg-wine shadow-[0_8px_30px_rgba(84,26,36,0.4)]"
                      }`}
                      style={{ minHeight: 120 }}
                    >
                      <span className="font-display text-4xl font-bold text-ivory/90 sm:text-5xl">
                        0{i + 1}
                      </span>
                    </div>

                    {/* ── Content card ── */}
                    <div
                      className={`relative z-10 flex flex-1 items-center gap-4 rounded-[28px] border border-line/40 bg-panel px-6 py-7 shadow-[0_12px_40px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.2)] sm:gap-6 sm:px-8 sm:py-8 md:px-10 ${
                        isEven ? "-ml-4" : "-mr-4"
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-7 shrink-0 text-muted/50 sm:size-8"
                        aria-hidden
                      >
                        {ICONS[i]}
                      </svg>

                      <div className="flex-1">
                        <h3 className="text-base font-semibold uppercase tracking-wide text-ivory sm:text-lg">
                          {s.title}
                        </h3>
                        <div className="my-2.5 h-px w-12 bg-brand/40 sm:w-16" />
                        <p className="text-xs leading-relaxed text-muted sm:text-sm">
                          {s.text}
                        </p>
                        <div className="mt-3 flex gap-1.5">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <span
                              key={j}
                              className={`size-1.5 rounded-full ${
                                j < 2 ? "bg-brand" : j < 4 ? "bg-brand/30" : "bg-line"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
