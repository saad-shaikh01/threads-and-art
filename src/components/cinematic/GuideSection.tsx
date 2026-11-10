"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { PosterHeading } from "@/components/ui/PosterHeading";
import { Eyebrow } from "./ScrambleText";

/**
 * Long-form reading section: sticky table of contents that tracks the current
 * heading, plus a stitch-style reading-progress rail.
 */
export function GuideSection({
  toc,
  children,
  eyebrow = "The expert guide",
  word = "Guide",
  script = "In detail.",
  aside,
}: {
  toc: readonly { id: string; label: string }[];
  children: ReactNode;
  eyebrow?: string;
  word?: string;
  script?: string;
  aside?: ReactNode;
}) {
  const articleRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(toc[0]?.id);
  const { scrollYProgress } = useScroll({ target: articleRef, offset: ["start 0.3", "end 0.7"] });

  useEffect(() => {
    const els = toc.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setCurrent(hit.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [toc]);

  return (
    <section id="details" className="relative scroll-mt-24 border-b border-line section-y">
      <div className="section-x">
        <Eyebrow>{eyebrow}</Eyebrow>
        <PosterHeading word={word} script={script} size="compact" />
      </div>
      <div className="section-x mt-16 grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)_260px] lg:gap-14">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-[calc(var(--header-h)+2rem)] flex gap-4">
            <div className="relative w-px shrink-0 bg-line">
              <motion.span style={{ scaleY: scrollYProgress }} className="absolute inset-0 origin-top bg-brand" />
            </div>
            <ul className="space-y-1 text-[13px]">
              {toc.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className={`block py-1.5 transition-colors ${current === t.id ? "text-ivory" : "text-muted hover:text-brand"}`}
                  >
                    {current === t.id && <span className="mr-2 text-brand">—</span>}
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <article ref={articleRef} className="max-w-3xl">
          {children}
        </article>
        {aside && <div className="hidden lg:block">{aside}</div>}
      </div>
    </section>
  );
}
