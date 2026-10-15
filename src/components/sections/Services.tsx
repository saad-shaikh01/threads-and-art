"use client";

import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  specs: string[];
  reliefLabel: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "logo",
    tag: "01 / DIGITIZING",
    title: "Logo Digitizing",
    subtitle: "Left-Chest, Full-Back & Corporate Apparel",
    image: "/assets/logo.jpg",
    description:
      "Crisp satin lettering down to 4mm, balanced push-pull compensation, and clean directional fills engineered for polos, hoodies, and workwear.",
    specs: ["0.40mm Satin Density", "Edge-Run + Zigzag Underlay", "Zero Thread-Break Routing"],
    reliefLabel: "Flat Twill & Satin Relief (1.2mm)",
  },
  {
    id: "puff",
    tag: "02 / DIMENSION",
    title: "3D Puff Digitizing",
    subtitle: "High-Loft Raised Foam Embroidery",
    image: "/assets/puff.jpg",
    description:
      "Perforated satin capping and tapered end-caps designed specifically to slice and seal 2mm–3mm EVA puff foam cleanly without exposed foam edges.",
    specs: ["2.5mm–3.0mm EVA Foam Loft", "Perforated Needle-Cut Caps", "High-Tension Satin Capping"],
    reliefLabel: "Extruded 3D EVA Foam Loft (3.0mm)",
  },
  {
    id: "cap",
    tag: "03 / HEADWEAR",
    title: "Cap & Hat Digitizing",
    subtitle: "270° Curved Crown & Structured Front Panels",
    image: "/assets/cap.jpg",
    description:
      "Engineered from the bottom-up and center-out so structured 6-panel caps and Richardson 112 truckers stitch flat without center-seam flagging.",
    specs: ["Center-Out Stitch Sequence", "Crown Seam Guard Underlay", "270° Cap Frame Ready"],
    reliefLabel: "Curved 270° Crown Geometry",
  },
  {
    id: "patch",
    tag: "04 / PATCHES",
    title: "Patch Digitizing",
    subtitle: "Custom Embroidered & Merrowed Badges",
    image: "/assets/patch.jpg",
    description:
      "Heavy-duty twill fill, satin or simulated merrow borders, and precise die-cut / laser-cut placement lines for uniform emblems and tactical patches.",
    specs: ["3.5mm Merrow Border Ring", "Placement + Tack-Down Stops", "Iron-On / Velcro Ready"],
    reliefLabel: "Braided Merrow Border Crest",
  },
];

function ServiceReliefMesh3D({ serviceId }: { serviceId: string }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.45;
      meshRef.current.rotation.x = Math.sin(t * 0.6) * 0.25 + 0.35;
    }
  });

  return (
    <group ref={meshRef}>
      {serviceId === "logo" && (
        <group>
          <mesh>
            <torusGeometry args={[1.1, 0.14, 24, 72]} />
            <meshStandardMaterial color="#f31e39" roughness={0.3} metalness={0.2} />
          </mesh>
          <mesh>
            <torusKnotGeometry args={[0.55, 0.1, 80, 16]} />
            <meshStandardMaterial color="#f0ede4" roughness={0.25} metalness={0.2} />
          </mesh>
        </group>
      )}

      {serviceId === "puff" && (
        <group>
          {/* Underlying EVA Foam Core */}
          <mesh position={[0, 0, -0.08]}>
            <torusGeometry args={[0.95, 0.32, 32, 72]} />
            <meshStandardMaterial color="#222a26" roughness={0.7} />
          </mesh>
          {/* High-Loft Extruded Satin Capping */}
          <mesh position={[0, 0, 0.08]}>
            <torusGeometry args={[0.95, 0.36, 36, 72]} />
            <meshStandardMaterial
              color="#f31e39"
              emissive="#541a24"
              emissiveIntensity={0.45}
              roughness={0.22}
              metalness={0.25}
            />
          </mesh>
        </group>
      )}

      {serviceId === "cap" && (
        <group>
          {/* Curved Cap Crown Surface */}
          <mesh rotation={[0.4, 0, 0]}>
            <sphereGeometry args={[1.35, 36, 24, 0, Math.PI * 2, 0, Math.PI * 0.42]} />
            <meshStandardMaterial color="#191d1d" side={THREE.DoubleSide} roughness={0.8} />
          </mesh>
          {/* Center-Out Arch Embroidery on Crown */}
          <mesh position={[0, 0.85, 0.45]} rotation={[0.6, 0, 0]}>
            <torusGeometry args={[0.62, 0.12, 20, 48]} />
            <meshStandardMaterial color="#f31e39" roughness={0.25} />
          </mesh>
        </group>
      )}

      {serviceId === "patch" && (
        <group>
          {/* Heavy Twill Patch Base */}
          <mesh>
            <cylinderGeometry args={[1.25, 1.25, 0.12, 6]} rotation={[Math.PI / 2, 0, 0]} />
            <meshStandardMaterial color="#171b1a" roughness={0.85} />
          </mesh>
          {/* Thick Merrowed Border Ring */}
          <mesh>
            <torusGeometry args={[1.22, 0.18, 24, 6]} />
            <meshStandardMaterial color="#f31e39" roughness={0.28} />
          </mesh>
          {/* Inner Emblem */}
          <mesh position={[0, 0, 0.08]}>
            <torusGeometry args={[0.55, 0.1, 20, 48]} />
            <meshStandardMaterial color="#f0ede4" roughness={0.3} />
          </mesh>
        </group>
      )}
    </group>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES[1]);
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full bg-[#111515] text-[#f0ede4] py-20 md:py-28 border-b border-[#303635]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
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
            Select any specialty below to inspect its 3D stitch elevation, underlay construction, and production parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 Columns: Responsive 2x2 3D Tilt Service Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((srv) => {
              const active = selectedService.id === srv.id;
              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setSelectedService(srv)}
                  className={`group text-left rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                    active
                      ? "bg-[#222a26] border-[#f31e39] shadow-[0_12px_35px_rgba(243,30,57,0.18)] -translate-y-1"
                      : "bg-[#191d1d] border-[#303635] hover:border-[#afb2ac] hover:-translate-y-0.5"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#f31e39]">{srv.tag}</span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] ${
                          active
                            ? "bg-[#f31e39] text-[#f0ede4]"
                            : "bg-[#171b1a] text-[#afb2ac]"
                        }`}
                      >
                        {active ? "ACTIVE IN 3D" : "INSPECT 3D"}
                      </span>
                    </div>

                    <h3
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                      className="text-xl sm:text-2xl text-[#f0ede4] mt-3"
                    >
                      {srv.title}
                    </h3>
                    <p className="text-xs font-mono text-[#afb2ac] mt-1">
                      {srv.subtitle}
                    </p>
                    <p className="text-sm text-[#afb2ac] leading-relaxed mt-3">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#303635]/80 space-y-1.5">
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
                </button>
              );
            })}
          </div>

          {/* Right 5 Columns: Live 3D Surface Relief Inspector */}
          <div className="lg:col-span-5 rounded-2xl border border-[#303635] bg-[#191d1d] p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#303635] pb-3 mb-4">
                <span className="text-xs font-mono text-[#f31e39] uppercase">
                  3D SURFACE RELIEF BENCH
                </span>
                <span className="text-xs font-mono text-[#f0ede4]">
                  {selectedService.reliefLabel}
                </span>
              </div>

              <div className="relative h-[300px] sm:h-[340px] w-full rounded-xl bg-[#111515] border border-[#303635] overflow-hidden">
                {isVisible && (
                  <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.2], fov: 42 }}>
                    <ambientLight intensity={0.75} />
                    <directionalLight position={[4, 5, 4]} intensity={1.4} color="#f0ede4" />
                    <pointLight position={[-3, -2, 3]} intensity={1.1} color="#f31e39" />
                    <ServiceReliefMesh3D serviceId={selectedService.id} />
                  </Canvas>
                )}
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-[#171b1a] border border-[#303635] p-4">
              <div className="text-xs font-mono text-[#afb2ac]">
                SELECTED SERVICE SPECIFICATION
              </div>
              <div className="text-lg font-medium text-[#f0ede4] mt-1">
                {selectedService.title} — {selectedService.subtitle}
              </div>
              <a
                href="#sample-cta"
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[#f31e39] hover:bg-[#d5142c] text-[#f0ede4] font-mono text-xs uppercase tracking-wider py-3 transition-colors"
              >
                Request {selectedService.title} Sample
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
