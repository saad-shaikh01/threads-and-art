"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Badge, Bolt, Infinity, Layers } from "@/components/ui/Icons";
import { promises } from "@/lib/content";

const icons = { bolt: Bolt, infinity: Infinity, layers: Layers, badge: Badge } as const;

export function PromiseBar() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-panel">
      <div className="absolute inset-0 fabric-texture opacity-20" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-75 w-75 rounded-full bg-brand/6 blur-[100px]"
      />

      <div className="section-x relative z-10 py-6 md:py-0">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => {
            const Icon = icons[p.icon];
            const isLast = i === promises.length - 1;
            return (
              <Reveal
                key={p.title}
                delay={i * 0.08}
                className={`group flex items-center gap-4 py-5 md:py-7 lg:justify-center ${
                  !isLast ? "border-b border-line/50 lg:border-b-0 lg:border-r" : ""
                } ${i === 1 ? "border-b border-line/50 lg:border-b-0" : ""}`}
              >
                <span className="relative grid size-12 shrink-0 place-items-center rounded-xl border border-line bg-deep text-brand transition-all duration-300 group-hover:border-brand group-hover:shadow-[0_0_20px_rgba(243,30,57,0.15)] lg:size-14">
                  <Icon className="size-5 lg:size-6" />
                  <span className="absolute -right-1 -top-1 size-2.5 rounded-full bg-brand opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ivory lg:text-base">
                    {p.title}
                  </p>
                  <p className="text-[11px] text-muted lg:text-xs">
                    {p.note}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
