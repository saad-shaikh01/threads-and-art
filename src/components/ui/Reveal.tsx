"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "article" | "li" | "p" | "header";
}

/** Fade + rise into view once. Respects reduced-motion via <Providers>. */
export function Reveal({ children, className, delay = 0, y = 22, as = "div" }: RevealProps) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, delay, ease: [0.2, 0.7, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
