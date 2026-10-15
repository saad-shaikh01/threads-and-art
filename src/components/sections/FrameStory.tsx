"use client";

import { useRef, type RefObject } from "react";
import { ScrollSequenceSection } from "@/components/scroll-sequence";
import { useProgressEffect } from "@/hooks/useProgressEffect";

const captions = [
  { n: "01", title: "Every thread,", accent: "placed with intent.", text: "Satin, fill and run stitches — each one planned before it is ever sewn." },
  { n: "02", title: "Detail you can", accent: "almost touch.", text: "Density, direction and underlay tuned so fine lines stay crisp on the garment." },
  { n: "03", title: "Ready for the", accent: "machine.", text: "A clean, production-ready file — the same craft, design after design." },
] as const;

const fade = (p: number, start: number, end: number) => {
  const edge = 0.06;
  if (p < start - edge || p > end + edge) return 0;
  if (p < start) return (p - (start - edge)) / edge;
  if (p > end) return 1 - (p - end) / edge;
  return 1;
};

function Overlay({ progressRef }: { progressRef: RefObject<number> }) {
  const root = useRef<HTMLDivElement>(null);

  useProgressEffect(progressRef, (p) => {
    const el = root.current;
    if (!el) return;
    el.querySelectorAll<HTMLElement>("[data-caption]").forEach((node, i) => {
      const a = i / captions.length;
      const b = (i + 1) / captions.length;
      const o = fade(p, a + (i === 0 ? -1 : 0.02), b - (i === captions.length - 1 ? -1 : 0.02));
      node.style.opacity = String(o);
      node.style.transform = `translateY(${(1 - o) * 18}px)`;
    });
    el.style.setProperty("--p", `${p * 100}%`);
    // Fade the heading card in at the very start / out at the very end.
    const intro = el.querySelector<HTMLElement>("[data-intro]");
    if (intro) intro.style.opacity = String(1 - Math.min(1, p / 0.08));
  });

  return (
    <div ref={root} className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#111515cc_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-bg via-bg/70 to-transparent" />

      <p
        data-intro
        className="eyebrow absolute left-[6%] top-[calc(var(--header-h)+1.5rem)] md:left-[7%]"
      >
        The finished piece
      </p>

      <div className="section-x absolute inset-x-0 bottom-10 md:bottom-14">
        <div className="relative h-44 max-w-xl md:h-48">
          {captions.map((c) => (
            <div key={c.n} data-caption className="absolute inset-0 opacity-0">
              <span className="font-mono text-xs text-brand">{c.n} / 03</span>
              <h2 className="heading-display mt-2 text-[clamp(1.9rem,1.2rem+2.6vw,3.25rem)]">
                {c.title} <em className="text-accent">{c.accent}</em>
              </h2>
              <p className="mt-3 max-w-sm text-sm text-ivory/75">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 h-0.5 w-full max-w-xs bg-line">
          <div className="h-full w-(--p,0%) bg-brand" />
        </div>
      </div>
    </div>
  );
}

export function FrameStory() {
  return (
    <ScrollSequenceSection
      scrollDuration={2.5}
      overlay={(progressRef) => <Overlay progressRef={progressRef} />}
    />
  );
}
