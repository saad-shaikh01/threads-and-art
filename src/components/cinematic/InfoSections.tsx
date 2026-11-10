import type { ReactNode } from "react";
import { Check } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { MagneticGrid } from "./MagneticGrid";
import { PosterTop } from "./PosterTop";

/** What a customer should send with an order. */
export const sendChecklist = [
  { title: "Your artwork", text: "Any file works: JPG, PNG, PDF, AI, EPS or even a phone photo. Higher resolution helps." },
  { title: "Finished size", text: 'Width or height in inches, e.g. 3.5" wide for a left chest or 2.25" high on a cap.' },
  { title: "Garment & placement", text: "Cap, polo, jacket back, towel, patch… and where it goes. Fabric changes the file." },
  { title: "Machine format", text: "DST, PES, EXP, JEF or whatever your machine runs. Not sure? Tell us the machine brand." },
  { title: "Thread colors", text: "Pantone, hex or thread brand codes if you have them. Otherwise we match your artwork." },
];

export function SendChecklist({ id, aside }: { id?: string; aside?: ReactNode }) {
  return (
    <section id={id} className="section-x section-y scroll-mt-24 border-b border-line">
      <PosterTop
        eyebrow="Before you order"
        word="Checklist"
        script="What to send."
        intro="Five details get you a perfect file on the first try. Missing one? Send what you have and we'll ask."
        aside={aside}
      />
      <ol className="grid gap-4 md:grid-cols-5">
        {sendChecklist.map((c, i) => (
          <Reveal as="li" key={c.title} delay={i * 0.07} className="h-full">
            <Spotlight className="group relative flex h-full flex-col rounded-[1.25rem] border border-line bg-panel p-6 transition-colors hover:border-brand/70">
              <span className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-brand">0{i + 1}</span>
                <span className="grid size-7 place-items-center rounded-full border border-line text-muted transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-ivory">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
              </span>
              <p className="mt-10 font-display text-xl text-ivory">{c.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
            </Spotlight>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export function FormatsSection({ word = "Formats", script = "Your machine.", intro }: { word?: string; script?: string; intro?: string }) {
  return (
    <section className="section-x section-y border-b border-line">
      <PosterTop
        eyebrow="Machine-ready files"
        word={word}
        script={script}
        intro={intro ?? "Every file is exported in the format your machine reads. Need more than one format? Just ask."}
      />
      <MagneticGrid />
    </section>
  );
}
