import type { ReactNode } from "react";
import { PosterHeading } from "@/components/ui/PosterHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "./ScrambleText";

/** Section header in the cinematic style: decoding eyebrow + poster heading + intro + optional action. */
export function PosterTop({
  eyebrow,
  word,
  script,
  intro,
  aside,
  className = "mb-14",
}: {
  eyebrow: string;
  word: string;
  script: string;
  intro?: ReactNode;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-end justify-between gap-x-14 gap-y-8 ${className}`}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <PosterHeading word={word} script={script} size="compact" />
      </div>
      {(intro || aside) && (
        <Reveal delay={0.15} className="flex max-w-sm flex-col items-start gap-5 lg:pb-4">
          {intro && <p className="text-sm leading-relaxed text-muted">{intro}</p>}
          {aside}
        </Reveal>
      )}
    </div>
  );
}
