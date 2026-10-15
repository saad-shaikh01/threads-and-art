import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionTopProps {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  /** Right-aligned slot: a CTA, carousel arrows, etc. */
  aside?: ReactNode;
}

/** Eyebrow + two-tone h2 + short intro, used at the top of most sections. */
export function SectionTop({ eyebrow, title, intro, aside }: SectionTopProps) {
  return (
    <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-x-14 gap-y-4 md:flex-nowrap md:items-center">
      <div className="w-full md:w-auto">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className="heading-2">{title}</h2>
      </div>
      {intro && <p className="max-w-xs text-sm text-muted md:ml-auto">{intro}</p>}
      {aside}
    </Reveal>
  );
}
