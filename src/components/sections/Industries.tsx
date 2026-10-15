import { Reveal } from "@/components/ui/Reveal";
import { SectionTop } from "@/components/ui/SectionHeading";
import { Spotlight } from "@/components/ui/Spotlight";
import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section id="industries" className="section-x section-y border-b border-line">
      <SectionTop
        eyebrow="Industries we serve"
        title={
          <>
            Your production.
            <br />
            <em className="text-accent">Our expertise.</em>
          </>
        }
        intro="Made for the people who turn great artwork into products people wear."
      />

      <div className="grid grid-cols-2 gap-3 md:gap-[1.125rem] lg:grid-cols-4">
        {industries.map((item, i) => (
          <Reveal key={item.title} as="article" delay={i * 0.08} className="h-full">
            <Spotlight className="group flex h-full min-h-44 flex-col justify-between overflow-hidden rounded-md border border-line bg-[linear-gradient(150deg,#222a26,#171b1a)] p-4 transition-colors duration-300 hover:border-brand/70 md:min-h-52 md:p-6">
              <span className="font-display text-sm text-brand">0{i + 1}</span>
              <div>
                <h3 className="mb-1.5 mt-8 text-sm font-normal md:text-base">{item.title}</h3>
                <p className="text-xs text-muted">{item.text}</p>
                <span className="mt-4 block h-px w-8 bg-brand transition-all duration-500 group-hover:w-full" />
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
