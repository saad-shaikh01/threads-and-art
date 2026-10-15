import { Badge, Bolt, Infinity, Layers } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { formats, promises } from "@/lib/content";

const icons = { bolt: Bolt, infinity: Infinity, layers: Layers, badge: Badge } as const;

export function PromiseBar() {
  return (
    <>
      <div className="section-x grid grid-cols-2 gap-x-5 gap-y-6 border-b border-line py-7 lg:grid-cols-4 lg:gap-6">
        {promises.map((p, i) => {
          const Icon = icons[p.icon];
          return (
            <Reveal key={p.title} delay={i * 0.08} className="group flex items-center gap-3 lg:gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line text-brand transition-colors group-hover:border-brand group-hover:bg-brand/10 lg:size-12">
                <Icon className="size-5 lg:size-6" />
              </span>
              <p className="text-xs font-medium text-ivory lg:text-sm">
                {p.title}
                <small className="block text-[10px] font-normal text-muted lg:text-xs">{p.note}</small>
              </p>
            </Reveal>
          );
        })}
      </div>

      {/* Supported machine formats — endless marquee */}
      <div className="overflow-hidden border-b border-line bg-deep py-4" aria-label="Supported file formats">
        <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
          {[0, 1].map((dup) => (
            <ul key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {formats.map((f) => (
                <li key={f} className="flex items-center font-mono text-xs tracking-[0.25em] text-muted">
                  <span className="px-8">.{f}</span>
                  <span className="size-1 rounded-full bg-brand" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
