"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTop } from "@/components/ui/SectionHeading";
import { steps } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="section-x section-y border-b border-line">
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

      <div className="relative mt-14 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-9">
        {/* The "thread" that stitches the steps together (draws on view) */}
        <motion.div
          aria-hidden
          className="absolute left-0 right-0 top-[22px] hidden origin-left border-t border-dashed border-wine lg:block"
          style={{ borderColor: "#782331" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        {steps.map((s, i) => (
          <Reveal key={s.title} as="article" delay={i * 0.12} className="group relative">
            <span className="grid size-11 place-items-center rounded-full border border-brand bg-bg font-display text-lg text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_0_0_6px_rgb(243_30_57/0.15)]">
              0{i + 1}
            </span>
            <h3 className="mb-2 mt-5 text-base font-medium lg:mt-6">{s.title}</h3>
            <p className="max-w-52 text-sm text-muted">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
