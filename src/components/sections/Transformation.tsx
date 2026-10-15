"use client";

import { useRef, useState } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useProgressEffect } from "@/hooks/useProgressEffect";
import { ArrowDown } from "@/components/ui/Icons";
import { stages } from "@/lib/content";

const clamp = (x: number) => Math.min(1, Math.max(0, x));

/**
 * Pinned scroll scene: the TA monogram morphs artwork → stitch paths →
 * digitized preview → finished embroidery. Scroll progress writes CSS
 * variables straight onto the section (see `.tf-*` in globals.css), so React
 * only re-renders when the active stage changes.
 */
export function Transformation() {
  const trackRef = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState(0);
  const { progressRef } = useScrollProgress({ containerRef: trackRef });

  useProgressEffect(progressRef, (p) => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase(3);
      return;
    }
    setPhase(Math.min(3, Math.floor(p * 4)));
    const s = el.style;
    s.setProperty("--original-opacity", String(1 - clamp((p - 0.18) / 0.1)));
    s.setProperty("--paths-opacity", String(clamp((p - 0.17) / 0.08) * (1 - clamp((p - 0.48) / 0.12))));
    s.setProperty("--outline-offset", String(1400 * (1 - clamp((p - 0.2) / 0.22))));
    s.setProperty("--path-offset", String(1400 * (1 - clamp((p - 0.25) / 0.24))));
    s.setProperty("--digitized-opacity", String(clamp((p - 0.48) / 0.13) * (1 - clamp((p - 0.73) / 0.12))));
    s.setProperty("--finished-opacity", String(clamp((p - 0.73) / 0.16)));
    s.setProperty("--fabric-opacity", String(clamp((p - 0.68) / 0.18)));
    s.setProperty("--progress", `${p * 100}%`);
  });

  return (
    <section
      ref={trackRef}
      id="transformation"
      aria-label="Artwork to finished stitch demonstration"
      className="relative h-[240vh] border-b border-line bg-[radial-gradient(ellipse_at_75%_50%,#2a302a80,transparent_65%),#121716] motion-reduce:h-auto max-md:h-[230vh]"
    >
      <div className="section-x sticky top-(--header-h) grid min-h-[calc(100svh-var(--header-h))] items-center gap-3 py-8 motion-reduce:static motion-reduce:min-h-0 motion-reduce:py-16 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:py-14">
        <div>
          <p className="eyebrow mb-4">The transformation</p>
          <h2 className="heading-2 text-[clamp(1.8rem,1.2rem+2.2vw,2.75rem)]">
            One design.
            <br />
            <em className="text-accent">
              A thousand
              <br className="max-md:hidden" /> considered stitches.
            </em>
          </h2>
          <p className="mt-4 max-w-xs text-sm text-muted max-md:mt-2 max-md:text-xs">
            Your artwork becomes a carefully planned stitch file, then embroidery you can see and feel.
          </p>

          <ol className="mt-5 grid grid-cols-4 gap-2 md:mt-8 md:grid-cols-1 md:gap-5">
            {stages.map((s, i) => (
              <li
                key={s.title}
                className={`flex flex-col gap-2 transition-opacity duration-300 motion-reduce:opacity-100 md:flex-row md:items-center md:gap-4 ${
                  i === phase ? "opacity-100" : "opacity-35"
                }`}
              >
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-full border text-[11px] transition-colors ${
                    i === phase ? "border-brand text-brand" : "border-[#59615b]"
                  }`}
                >
                  0{i + 1}
                </span>
                <div className="text-[10px] leading-snug md:text-sm">
                  {s.title}
                  <small className="hidden text-xs text-muted md:block">{s.note}</small>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 hidden items-center gap-2 text-[9px] tracking-[0.2em] text-muted motion-reduce:hidden md:flex">
            SCROLL TO FOLLOW THE THREAD <ArrowDown className="size-3 animate-float" />
          </p>
        </div>

        <div className="min-w-0">
          <svg
            viewBox="0 0 600 450"
            role="img"
            aria-label="Illustrative TA monogram transitioning from artwork to embroidery"
            className="mx-auto block w-full max-md:max-h-[35svh] lg:drop-shadow-[0_30px_60px_rgb(0_0_0/0.5)]"
          >
            <defs>
              <pattern id="stitch-texture" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)">
                <path d="M0 1H5" stroke="#fff3dc" strokeWidth="1.4" />
                <path d="M0 3H5" stroke="#78202d" strokeWidth="1" />
              </pattern>
              <pattern id="fabric" width="6" height="6" patternUnits="userSpaceOnUse">
                <path d="M0 0H6M0 0V6" stroke="#383d37" strokeWidth=".5" />
              </pattern>
              <filter id="thread-shadow">
                <feDropShadow dx="1" dy="3" stdDeviation="1.5" floodColor="#000" floodOpacity=".9" />
              </filter>
              <g id="monogram">
                <path d="M139 118H329L315 155H260L211 326H164L213 155H128Z" />
                <path
                  d="M328 127H366L420 326H373L362 278H303L277 326H232ZM324 242H354L343 184Z"
                  fillRule="evenodd"
                />
              </g>
            </defs>

            <rect className="tf-fabric" x="40" y="40" width="520" height="370" rx="18" fill="#202722" />
            <rect className="tf-fabric" x="40" y="40" width="520" height="370" rx="18" fill="url(#fabric)" />

            <g className="tf-original">
              <use href="#monogram" fill="#ef233d" />
            </g>

            <g className="tf-paths" fill="none" stroke="#f23b4d" strokeWidth="1.5">
              <use href="#monogram" />
              <path
                className="tf-stitch"
                d="M135 140H310M145 146H306M194 318L242 159M203 318L249 159M286 309L336 162L376 307M295 270H358M300 259H356M296 294L348 171L384 316"
              />
              <path
                className="tf-stitch"
                d="M110 345H443M110 105V345M443 105V345"
                stroke="#69716b"
                strokeDasharray="4 5"
              />
            </g>

            <g className="tf-digitized">
              <use href="#monogram" fill="#ef233d" stroke="#f9c2b3" strokeWidth=".7" />
              <use href="#monogram" fill="url(#stitch-texture)" opacity=".65" />
            </g>

            <g className="tf-finished" filter="url(#thread-shadow)">
              <use href="#monogram" fill="#e3213c" stroke="#f24959" strokeWidth="3" />
              <use href="#monogram" fill="url(#stitch-texture)" />
              <path
                d="M135 345C200 379 387 375 444 339"
                fill="none"
                stroke="#c9bb9b"
                strokeWidth="3"
                strokeDasharray="2 3"
              />
            </g>

            <text x="300" y="387" textAnchor="middle" fill="#c2c6bd" fontSize="9" letterSpacing="3">
              THREADS &amp; ARTS / ILLUSTRATIVE DESIGN
            </text>
          </svg>

          <div className="mt-3 flex items-center justify-between text-[8px] tracking-[0.15em] text-muted md:px-[7%] md:text-[9px]">
            <span>
              0{phase + 1} / {stages[phase].label}
            </span>
            <div className="h-0.5 w-[35%] bg-line">
              <i className="block h-full w-(--progress,0%) bg-brand" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
