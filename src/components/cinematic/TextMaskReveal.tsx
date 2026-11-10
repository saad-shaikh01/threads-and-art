"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { Eyebrow } from "./ScrambleText";

const ACCENT = /^\*(.+)\*([^*]*)$/;

function Word({ word, progress, range, still }: { word: string; progress: MotionValue<number>; range: [number, number]; still: boolean }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const m = word.match(ACCENT);
  const body = m ? (
    <>
      <em className="font-display italic text-brand">{m[1]}</em>
      {m[2]}
    </>
  ) : (
    word
  );
  return (
    <motion.span style={still ? undefined : { opacity }} className="mr-[0.25em] inline-block">
      {body}
    </motion.span>
  );
}

/**
 * Big statement that fills in word-by-word as it scrolls through the viewport
 * (text-mask module). Wrap single words in *asterisks* to paint them red.
 */
export function TextMaskReveal({ text, eyebrow, note }: { text: string; eyebrow?: string; note?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const still = !!useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  const n = words.length;

  return (
    <section className="section-x relative overflow-hidden border-b border-line py-24 md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 fabric-texture opacity-15" />
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <p className="sr-only">{text.replace(/\*/g, "")}</p>
      <p
        ref={ref}
        aria-hidden
        className="heading-display max-w-6xl text-[clamp(2rem,1.1rem+3.8vw,4.8rem)] leading-[1.06] text-ivory"
      >
        {words.map((w, i) => (
          <Word key={i} word={w} progress={scrollYProgress} range={[i / n, (i + 1) / n]} still={still} />
        ))}
      </p>
      {note && <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted md:ml-auto md:text-right">{note}</p>}
    </section>
  );
}
