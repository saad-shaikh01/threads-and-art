"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { anton } from "@/components/ui/fonts";
import { testimonials } from "@/lib/content";

const wrap = (min: number, max: number, v: number) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

/** Infinite band whose speed and direction react to scroll velocity (kinetic-marquee module). */
export function KineticMarquee({ children, baseVelocity = -2 }: { children: ReactNode; baseVelocity?: number }) {
  const base = useMotionValue(0);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [0, 1000], [0, 4], { clamp: false });
  const dir = useRef(1);
  const x = useTransform(base, (v) => `${wrap(-25, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    base.set(base.get() + dir.current * baseVelocity * (delta / 1000) * (1 + Math.abs(f)));
  });

  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div style={{ x }} className="flex shrink-0 flex-nowrap">
        {[0, 1, 2, 3].map((k) => (
          <div key={k} aria-hidden={k > 0} className="flex shrink-0">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/** Two counter-moving bands: a giant outlined word row and the customer quotes. */
export function TestimonialBand({ words = ["Clean files", "On time", "Zero thread breaks", "Perfect patches"] }: { words?: readonly string[] }) {
  return (
    <section className="relative overflow-hidden border-b border-line py-16 md:py-24" aria-label="Customer feedback">
      <KineticMarquee baseVelocity={-1.5}>
        {words.map((w) => (
          <span key={w} className={`${anton.className} flex items-center gap-8 pr-8 text-[clamp(3.5rem,9vw,8rem)] uppercase leading-none`}>
            <span className="text-transparent [-webkit-text-stroke:1.5px_rgb(240_237_228/0.35)]">{w}</span>
            <span className="text-brand">✶</span>
          </span>
        ))}
      </KineticMarquee>
      <div className="mt-10">
        <KineticMarquee baseVelocity={1.2}>
          {testimonials.map((t) => (
            <figure key={t.author} className="mr-5 w-[min(80vw,28rem)] shrink-0 whitespace-normal rounded-[1.25rem] border border-line bg-panel p-6">
              <span aria-hidden className="font-display text-4xl leading-none text-brand">“</span>
              <blockquote className="text-[0.95rem] leading-relaxed text-ivory/90">{t.quote}</blockquote>
              <figcaption className="mt-4 border-t border-line pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                ★★★★★ · {t.author}
              </figcaption>
            </figure>
          ))}
        </KineticMarquee>
      </div>
    </section>
  );
}
