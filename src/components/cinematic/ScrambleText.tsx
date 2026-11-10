"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/+";

/** Text that decodes from random glyphs when it scrolls into view (text-scramble module). */
export function ScrambleText({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf = 0;
    let frame = 0;
    const start = performance.now() + delay * 1000;
    const tick = (now: number) => {
      if (now >= start) {
        frame += 1;
        const shown = Math.floor(frame / 2);
        setOut(
          [...text]
            .map((c, i) => (i < shown || c === " " ? c : CHARS[Math.floor(Math.random() * CHARS.length)]))
            .join(""),
        );
        if (shown >= text.length) return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, text, delay]);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>{out}</span>
    </span>
  );
}

/** Section eyebrow that decodes in. */
export function Eyebrow({ children, className = "" }: { children: string; className?: string }) {
  return (
    <p className={`eyebrow mb-4 ${className}`}>
      <ScrambleText text={children} />
    </p>
  );
}
