"use client";

import { motion } from "framer-motion";
import { anton } from "./fonts";

const EASE = [0.2, 0.7, 0.3, 1] as const;

const SIZES = {
  hero: {
    word: "text-[clamp(5.5rem,min(23vw,34vh),23rem)]",
    script: "text-[clamp(2.6rem,min(9vw,13vh),9rem)]",
  },
  section: {
    word: "text-[clamp(4rem,min(15vw,24vh),13rem)]",
    script: "text-[clamp(2rem,min(6vw,10vh),6rem)]",
  },
  compact: {
    word: "text-[clamp(3.2rem,min(10vw,17vh),8.5rem)]",
    script: "text-[clamp(1.6rem,min(4.2vw,7vh),4rem)]",
  },
};

export type PosterSize = keyof typeof SIZES;

interface PosterHeadingProps {
  word: string;
  script: string;
  srText?: string;
  as?: "h1" | "h2" | "h3" | "div";
  size?: PosterSize;
  className?: string;
}

/** Giant Anton word with a red italic script phrase stitched across its lower-left. */
export function PosterHeading({
  word,
  script,
  srText,
  as = "h2",
  size = "section",
  className = "",
}: PosterHeadingProps) {
  const Tag = motion[as];
  const s = SIZES[size];
  return (
    <Tag
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay: 0.1, ease: EASE }}
      className={`${anton.className} relative inline-block select-none uppercase leading-[0.82] tracking-[-0.01em] ${className}`}
    >
      <span
        className={`block bg-gradient-to-b from-ivory via-ivory to-ivory/30 bg-clip-text text-transparent ${s.word}`}
      >
        {word}
      </span>
      <motion.span
        initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
        whileInView={{ opacity: 1, rotate: -6, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
        className={`absolute -bottom-[0.18em] left-[0.4em] whitespace-nowrap font-display normal-case italic tracking-[-0.03em] text-brand [text-shadow:0_8px_40px_rgb(17_21_21/0.9)] ${s.script}`}
      >
        {script}
      </motion.span>
      {srText && <span className="sr-only"> {srText}</span>}
    </Tag>
  );
}
