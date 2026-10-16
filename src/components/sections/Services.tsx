"use client";

import React, { useState } from "react";

interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  specs: string[];
  reliefLabel: string;
  meshTag: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "logo",
    tag: "01 / DIGITIZING",
    title: "Logo Digitizing",
    subtitle: "Left-Chest, Full-Back & Corporate Apparel",
    image: "/assets/3d/service-logo-lion.jpg",
    description:
      "Crisp satin lettering down to 4mm, balanced push-pull compensation, and clean directional fills engineered for polos, hoodies, and workwear.",
    specs: ["0.40mm Satin Density", "Edge-Run + Zigzag Underlay", "Zero Thread-Break Routing"],
    reliefLabel: "Vector-to-Satin Lion Crest (1.2mm)",
    meshTag: "LOGO SATIN MEDALLION",
  },
  {
    id: "puff",
    tag: "02 / DIMENSION",
    title: "3D Puff Digitizing",
    subtitle: "High-Loft Raised Foam Embroidery",
    image: "/assets/3d/service-puff-macro.jpg",
    description:
      "Perforated satin capping and tapered end-caps designed specifically to slice and seal 2mm–3mm EVA puff foam cleanly without exposed foam edges.",
    specs: ["2.5mm–3.0mm EVA Foam Loft", "Perforated Needle-Cut Caps", "High-Tension Satin Capping"],
    reliefLabel: "Extruded 3D EVA Foam Loft (3.0mm)",
    meshTag: "3D PUFF FOAM",
  },
  {
    id: "cap",
    tag: "03 / HEADWEAR",
    title: "Cap & Hat Digitizing",
    subtitle: "270° Curved Crown & Structured Panels",
    image: "/assets/3d/service-cap-crown.jpg",
    description:
      "Engineered from the bottom-up and center-out so structured 6-panel caps and Richardson 112 truckers stitch flat without center-seam flagging.",
    specs: ["Center-Out Stitch Sequence", "Crown Seam Guard Underlay", "270° Cap Frame Ready"],
    reliefLabel: "Curved 270° Crown Geometry",
    meshTag: "270° CURVED CAP CROWN",
  },
  {
    id: "patch",
    tag: "04 / PATCHES",
    title: "Patch Digitizing",
    subtitle: "Custom Embroidered & Merrowed Badges",
    image: "/assets/3d/service-patch-wings.jpg",
    description:
      "Heavy-duty twill fill, satin or simulated merrow borders, and precise die-cut / laser-cut placement lines for uniform emblems and tactical patches.",
    specs: ["3.5mm Merrow Border Ring", "Placement + Tack-Down Stops", "Iron-On / Velcro Ready"],
    reliefLabel: "Braided Merrow Border Crest",
    meshTag: "MERROW PATCH CREST",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES[1]);
  const [xrayGrid, setXrayGrid] = useState(false);
  const [loupe, setLoupe] = useState({ x: 50, y: 50, active: false });

  return (
    <section
      id="services"
      className="relative w-full bg-[#111515] text-[#f0ede4] py-20 md:py-28 border-b border-[#303635]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#f31e39] mb-2">
              02 / SPECIALIZED DIGITIZING SERVICES
            </div>
            <h2
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#f0ede4]"
            >
              Engineered for Every Garment & Surface
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#afb2ac]">
            Select any specialty card to inspect its 3D studio render, macro thread sheen, and stitch engineering in the live workbench.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 Columns: 2x2 Visual 3D Studio Asset Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((srv) => {
              const active = selectedService.id === srv.id;
              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setSelectedService(srv)}
                  className={`group text-left rounded-2xl overflow-hidden transition-all duration-300 border flex flex-col justify-between ${
                    active
                      ? "bg-[#222a26] border-[#f31e39] shadow-[0_14px_40px_rgba(243,30,57,0.24)] -translate-y-1"
                      : "bg-[#191d1d] border-[#303635] hover:border-[#afb2ac] hover:-translate-y-0.5"
                  }`}
                >
                  {/* Card 3D Thumbnail Banner */}
                  <div className="relative h-36 w-full overflow-hidden bg-[#111515] border-b border-[#303635]">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#191d1d] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                      <span className="rounded bg-[#111515]/85 border border-[#303635] px-2 py-0.5 text-[#f31e39]">
                        {srv.tag}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                          active
                            ? "bg-[#f31e39] text-[#f0ede4]"
                            : "bg-[#111515]/85 text-[#afb2ac]"
                        }`}
                      >
                        {active ? "ACTIVE IN 3D" : "INSPECT 3D"}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                        className="text-xl sm:text-2xl text-[#f0ede4]"
                      >
                        {srv.title}
                      </h3>
                      <p className="text-xs font-mono text-[#f31e39] mt-0.5">
                        {srv.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-[#afb2ac] leading-relaxed mt-2.5">
                        {srv.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#303635]/80 space-y-1">
                      {srv.specs.map((spec) => (
                        <div
                          key={spec}
                          className="flex items-center gap-2 text-xs font-mono text-[#f0ede4]"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#f31e39]" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right 5 Columns: 3D Macro Thread Loupe & Surface Relief Workbench */}
          <div className="lg:col-span-5 rounded-2xl border border-[#303635] bg-[#191d1d] p-5 sm:p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between border-b border-[#303635] pb-3 mb-4 font-mono text-xs">
                <span className="text-[#f31e39]">3D MACRO LOUPE WORKBENCH</span>
                <span className="text-[#f0ede4]">{selectedService.reliefLabel}</span>
              </div>

              <div
                onPointerMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  setLoupe({
                    x: ((e.clientX - r.left) / r.width) * 100,
                    y: ((e.clientY - r.top) / r.height) * 100,
                    active: true,
                  });
                }}
                onPointerLeave={() => setLoupe((prev) => ({ ...prev, active: false }))}
                className="relative h-[320px] sm:h-[360px] w-full rounded-xl bg-[#111515] border border-[#303635] overflow-hidden cursor-crosshair"
              >
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  style={{
                    transformOrigin: `${loupe.x}% ${loupe.y}%`,
                    transform: loupe.active ? "scale(1.65)" : "scale(1.04)",
                  }}
                  className="h-full w-full object-cover object-center transition-transform duration-200 ease-out"
                />

                {/* Optional Stitch Vector X-Ray Grid Overlay */}
                {xrayGrid && (
                  <div
                    aria-hidden="true"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(243,30,57,0.28) 1px, transparent 1px), linear-gradient(to bottom, rgba(243,30,57,0.28) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                    className="pointer-events-none absolute inset-0"
                  />
                )}

                <div className="pointer-events-none absolute top-3 left-3 rounded bg-[#111515]/85 border border-[#303635] px-2.5 py-1 font-mono text-[11px] text-[#afb2ac]">
                  HOVER TO MAGNIFY 3D THREADS •{" "}
                  <span className="text-[#f0ede4]">{selectedService.meshTag}</span>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-[#171b1a] border border-[#303635] p-4">
              <div className="text-xs font-mono text-[#afb2ac]">
                ACTIVE SPECIALTY CONFIGURATION
              </div>
              <div className="text-lg font-medium text-[#f0ede4] mt-1">
                {selectedService.title} — {selectedService.subtitle}
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
                <a
                  href="#sample-cta"
                  className="flex-1 text-center rounded-lg bg-[#f31e39] hover:bg-[#d5142c] py-3 px-4 font-mono text-xs uppercase tracking-wider text-[#f0ede4] transition-colors"
                >
                  Request {selectedService.title} Sample
                </a>
                <button
                  type="button"
                  onClick={() => setXrayGrid((v) => !v)}
                  className="rounded-lg border border-[#303635] bg-[#191d1d] hover:bg-[#222a26] py-3 px-4 font-mono text-xs uppercase text-[#afb2ac] hover:text-[#f0ede4] transition-colors"
                >
                  Toggle Stitch Grid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
