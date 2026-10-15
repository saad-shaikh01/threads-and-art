"use client";

import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface StageSpec {
  id: number;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
}

const STAGES: StageSpec[] = [
  {
    id: 0,
    code: "01 / INPUT",
    title: "Original Artwork",
    subtitle: "Raster, Sketch, or Flat Vector Intake",
    description:
      "We inspect your client's raw PNG, JPEG, AI, or PDF artwork—identifying micro-lettering, gradient transitions, and garment fabric constraints before plotting a single stitch.",
    metrics: [
      { label: "Source Formats", value: "PNG / JPG / AI / PDF" },
      { label: "Min Lettering Check", value: "4.0mm Height Verified" },
      { label: "Color Separation", value: "Pantone / Madeira Thread Match" },
    ],
  },
  {
    id: 1,
    code: "02 / PATHING",
    title: "Stitch Paths & Underlay",
    subtitle: "Manual Bezier Nodes & Structural Underlay",
    description:
      "Edge-run, center-walk, and double-zigzag underlays are mapped manually to anchor the fabric to the backing, preventing puckering and registration drift at high machine speeds.",
    metrics: [
      { label: "Underlay Architecture", value: "Edge-Run + Tatami Lattice" },
      { label: "Pull Compensation", value: "+0.25mm to +0.40mm" },
      { label: "Trim Optimization", value: "Shortest-Path Routing" },
    ],
  },
  {
    id: 2,
    code: "03 / SIMULATION",
    title: "Digitized Stitch Preview",
    subtitle: "Directional Satin Angles & Density Calibration",
    description:
      "Every stitch angle is tuned so light reflects uniformly across curves and corners. Lock-stitches and tie-ins are verified to prevent unraveling during industrial wash cycles.",
    metrics: [
      { label: "Satin Density", value: "0.38mm – 0.42mm" },
      { label: "Tie-Off Security", value: "Double Lock-Stitch" },
      { label: "Total Stitch Count", value: "14,820 Stitches" },
    ],
  },
  {
    id: 3,
    code: "04 / PRODUCTION",
    title: "Finished Embroidery",
    subtitle: "100% Machine-Ready Commercial Output",
    description:
      "Delivered in your exact machine format (DST, PES, EMB, EXP, and more) with a complete production worksheet detailing thread sequence, needle stops, and hoop sizing.",
    metrics: [
      { label: "Machine Speed Rating", value: "1,000+ SPM Tested" },
      { label: "Thread Breaks", value: "Zero-Break Pathing" },
      { label: "Turnaround Window", value: "4–6 Hours Standard" },
    ],
  },
];

interface ExplodedStackProps {
  activeStage: number;
  explosion: number;
}

function ExplodedLayerStack3D({ activeStage, explosion }: ExplodedStackProps) {
  const stackRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (stackRef.current) {
      stackRef.current.rotation.y = Math.sin(t * 0.35) * 0.35 + 0.55;
      stackRef.current.rotation.x = 0.48;
    }
  });

  const spacing = 0.25 + (explosion / 100) * 0.65;

  return (
    <group ref={stackRef}>
      {[0, 1, 2, 3].map((idx) => {
        const yPos = (idx - 1.5) * spacing;
        const isSelected = activeStage === idx;
        return (
          <group key={idx} position={[0, yPos, 0]}>
            {/* Base Plane */}
            <mesh>
              <boxGeometry args={[2.5, 0.06, 1.75]} />
              <meshStandardMaterial
                color={isSelected ? "#222a26" : "#191d1d"}
                emissive={isSelected ? "#541a24" : "#000000"}
                emissiveIntensity={isSelected ? 0.55 : 0}
                metalness={0.5}
                roughness={0.35}
              />
            </mesh>

            {/* Layer Specific 3D Geometry */}
            {idx === 0 && (
              <mesh position={[0, 0.045, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.35, 0.65, 32]} />
                <meshBasicMaterial color="#afb2ac" side={THREE.DoubleSide} />
              </mesh>
            )}

            {idx === 1 && (
              <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.52, 0.03, 12, 36]} />
                <meshBasicMaterial color="#f31e39" wireframe />
              </mesh>
            )}

            {idx === 2 && (
              <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <torusKnotGeometry args={[0.42, 0.08, 64, 12, 2, 3]} />
                <meshStandardMaterial color="#f0ede4" wireframe />
              </mesh>
            )}

            {idx === 3 && (
              <mesh position={[0, 0.09, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.52, 0.14, 24, 64]} />
                <meshStandardMaterial
                  color="#f31e39"
                  emissive="#541a24"
                  emissiveIntensity={0.4}
                  roughness={0.25}
                />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
}

export default function Transformation() {
  const [activeStage, setActiveStage] = useState<number>(3);
  const [explosion, setExplosion] = useState<number>(75);
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

  const current = STAGES[activeStage];

  return (
    <section
      ref={sectionRef}
      id="transformation"
      className="relative w-full bg-[#171b1a] text-[#f0ede4] py-20 md:py-28 border-b border-[#303635]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#f31e39] mb-2">
              01 / STITCH ARCHITECTURE TRANSFORMATION
            </div>
            <h2
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#f0ede4]"
            >
              From Flat Artwork to Dimensional Thread
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#afb2ac]">
            Inspect how our digitizers deconstruct raw artwork into four engineered layers of underlay, directional pathing, and high-lustre embroidery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Columns: 3D Exploded Isometric Layer Stack */}
          <div className="lg:col-span-7 rounded-2xl border border-[#303635] bg-[#191d1d] p-4 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#303635]">
              <div className="text-xs font-mono text-[#afb2ac]">
                ACTIVE LAYER:{" "}
                <span className="text-[#f31e39] font-semibold">
                  {current.code} — {current.title.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <label
                  htmlFor="explosion-range"
                  className="text-xs font-mono text-[#afb2ac]"
                >
                  3D LAYER SEPARATION: {explosion}%
                </label>
                <input
                  id="explosion-range"
                  type="range"
                  min={15}
                  max={100}
                  value={explosion}
                  onChange={(e) => setExplosion(Number(e.target.value))}
                  className="w-28 sm:w-36 accent-[#f31e39] cursor-pointer"
                />
              </div>
            </div>

            <div className="relative h-[320px] sm:h-[380px] w-full rounded-xl bg-[#111515] border border-[#303635] overflow-hidden">
              {isVisible && (
                <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.2, 4.6], fov: 40 }}>
                  <ambientLight intensity={0.75} />
                  <directionalLight position={[5, 6, 4]} intensity={1.3} color="#f0ede4" />
                  <pointLight position={[-4, 2, 3]} intensity={1.0} color="#f31e39" />
                  <ExplodedLayerStack3D activeStage={activeStage} explosion={explosion} />
                </Canvas>
              )}
            </div>

            {/* 4-Stage Quick Selector Pills */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {STAGES.map((stg) => (
                <button
                  key={stg.id}
                  type="button"
                  onClick={() => setActiveStage(stg.id)}
                  className={`rounded-xl p-3 text-left transition-all border ${
                    activeStage === stg.id
                      ? "bg-[#222a26] border-[#f31e39] shadow-[0_0_20px_rgba(243,30,57,0.2)]"
                      : "bg-[#111515] border-[#303635] hover:border-[#afb2ac]"
                  }`}
                >
                  <div className="text-[11px] font-mono text-[#f31e39]">
                    {stg.code}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#f0ede4] mt-1 truncate">
                    {stg.title}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right 5 Columns: Selected Stage Telemetry & Specification Card */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl border border-[#303635] bg-[#191d1d] p-6 sm:p-8">
              <div className="inline-block rounded bg-[#541a24] px-2.5 py-1 text-xs font-mono text-[#f0ede4]">
                {current.code}
              </div>
              <h3
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                className="text-2xl sm:text-3xl text-[#f0ede4] mt-3"
              >
                {current.title}
              </h3>
              <p className="text-xs font-mono uppercase tracking-wider text-[#f31e39] mt-1">
                {current.subtitle}
              </p>
              <p className="text-sm sm:text-base text-[#afb2ac] leading-relaxed mt-4">
                {current.description}
              </p>

              <div className="mt-6 pt-6 border-t border-[#303635] space-y-3">
                {current.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center justify-between rounded-lg bg-[#111515] px-4 py-3 border border-[#303635]/70"
                  >
                    <span className="text-xs font-mono text-[#afb2ac]">
                      {m.label}
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-semibold text-[#f0ede4]">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
