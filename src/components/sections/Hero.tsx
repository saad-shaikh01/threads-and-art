"use client";

import React, { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";

const MACHINE_FORMATS = [
  { ext: "DST", brand: "Tajima / Commercial Multi-Head", density: "0.40mm Auto-Trim" },
  { ext: "PES", brand: "Brother / Baby Lock", density: "Underlay Stabilized" },
  { ext: "EMB", brand: "Wilcom Native Object File", density: "Full Vector + Stitch" },
  { ext: "EXP", brand: "Melco / Bernina Industrial", density: "Zero Jump-Break" },
  { ext: "JEF", brand: "Janome Commercial Series", density: "Pull-Comp Tuned" },
  { ext: "VP3", brand: "Husqvarna Viking / Pfaff", density: "High-Sheen Satin" },
  { ext: "HUS", brand: "Husqvarna Standard", density: "Lock-Stitch Verified" },
  { ext: "PXF", brand: "Pulse Tajima Native", density: "3D Puff Ready" },
  { ext: "XXX", brand: "Singer / Compucon", density: "Balanced Tension" },
  { ext: "SEW", brand: "Janome Legacy / Custom", density: "Clean Pathing" },
];

type StitchPreset = "satin" | "puff" | "tatami";

interface HoopSceneProps {
  preset: StitchPreset;
  pointer: { x: number; y: number };
}

function EmbroideryHoop3D({ preset, pointer }: HoopSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const needleRef = useRef<THREE.Group>(null);
  const stitchGroupRef = useRef<THREE.Group>(null);

  const threadElevation = preset === "puff" ? 0.24 : preset === "satin" ? 0.12 : 0.06;
  const tubeRadius = preset === "puff" ? 0.048 : preset === "satin" ? 0.032 : 0.022;

  const { crimsonCurves, ivoryCurves } = useMemo(() => {
    const cCurves: THREE.CatmullRomCurve3[] = [];
    const iCurves: THREE.CatmullRomCurve3[] = [];

    // Outer satin ring stitches
    const count = 48;
    for (let i = 0; i < count; i++) {
      const a1 = (i / count) * Math.PI * 2;
      const a2 = ((i + 0.5) / count) * Math.PI * 2;
      const rInner = 1.05;
      const rOuter = 1.48;
      cCurves.push(
        new THREE.CatmullRomCurve3([
          new THREE.Vector3(Math.cos(a1) * rInner, Math.sin(a1) * rInner, 0.02),
          new THREE.Vector3(
            Math.cos((a1 + a2) * 0.5) * ((rInner + rOuter) * 0.5),
            Math.sin((a1 + a2) * 0.5) * ((rInner + rOuter) * 0.5),
            threadElevation
          ),
          new THREE.Vector3(Math.cos(a2) * rOuter, Math.sin(a2) * rOuter, 0.02),
        ])
      );
    }

    // Inner geometric star / crest stitches in warm ivory
    const innerSpokes = 24;
    for (let i = 0; i < innerSpokes; i++) {
      const angle = (i / innerSpokes) * Math.PI * 2;
      const nextAngle = ((i + 3) / innerSpokes) * Math.PI * 2;
      iCurves.push(
        new THREE.CatmullRomCurve3([
          new THREE.Vector3(Math.cos(angle) * 0.28, Math.sin(angle) * 0.28, 0.03),
          new THREE.Vector3(
            Math.cos((angle + nextAngle) * 0.5) * 0.62,
            Math.sin((angle + nextAngle) * 0.5) * 0.62,
            threadElevation * 0.95
          ),
          new THREE.Vector3(Math.cos(nextAngle) * 0.92, Math.sin(nextAngle) * 0.92, 0.03),
        ])
      );
    }

    return { crimsonCurves: cCurves, ivoryCurves: iCurves };
  }, [threadElevation]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      const targetRotY = pointer.x * 0.42 + Math.sin(t * 0.5) * 0.12;
      const targetRotX = -0.35 + pointer.y * 0.28 + Math.cos(t * 0.4) * 0.06;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.06);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.06);
    }
    if (needleRef.current) {
      const orbitAngle = t * 1.8;
      needleRef.current.position.x = Math.cos(orbitAngle) * 1.25;
      needleRef.current.position.y = Math.sin(orbitAngle) * 1.25;
      needleRef.current.position.z = 0.35 + Math.abs(Math.sin(t * 14)) * 0.22;
    }
    if (stitchGroupRef.current) {
      stitchGroupRef.current.rotation.z = t * 0.08;
    }
  });

  return (
    <group ref={groupRef} rotation={[-0.35, -0.25, 0]}>
      {/* Outer Brushed Anodized Hoop Ring */}
      <mesh>
        <torusGeometry args={[2.15, 0.11, 28, 96]} />
        <meshStandardMaterial color="#222a26" metalness={0.78} roughness={0.28} />
      </mesh>

      {/* Inner Hoop Rim */}
      <mesh>
        <torusGeometry args={[1.96, 0.06, 24, 96]} />
        <meshStandardMaterial color="#303635" metalness={0.65} roughness={0.35} />
      </mesh>

      {/* Metallic Tension Bracket & Screw at Top */}
      <group position={[0, 2.25, 0]}>
        <mesh position={[-0.14, 0, 0]}>
          <boxGeometry args={[0.12, 0.28, 0.18]} />
          <meshStandardMaterial color="#afb2ac" metalness={0.85} roughness={0.2} />
        </mesh>
        <mesh position={[0.14, 0, 0]}>
          <boxGeometry args={[0.12, 0.28, 0.18]} />
          <meshStandardMaterial color="#afb2ac" metalness={0.85} roughness={0.2} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.045, 0.045, 0.56, 16]} />
          <meshStandardMaterial color="#f0ede4" metalness={0.9} roughness={0.15} />
        </mesh>
      </group>

      {/* Taut Dark Twill Fabric Base */}
      <mesh position={[0, 0, -0.02]}>
        <cylinderGeometry args={[1.92, 1.92, 0.04, 64]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#171b1a" roughness={0.92} metalness={0.05} />
      </mesh>

      {/* Subtle Stabilizer Grid Ring */}
      <mesh position={[0, 0, 0.01]}>
        <ringGeometry args={[0.25, 1.85, 48, 4]} />
        <meshBasicMaterial color="#303635" wireframe transparent opacity={0.28} />
      </mesh>

      {/* 3D Embroidered Thread Geometry */}
      <group ref={stitchGroupRef}>
        {crimsonCurves.map((curve, idx) => (
          <mesh key={`c-${idx}`}>
            <tubeGeometry args={[curve, 12, tubeRadius, 8, false]} />
            <meshStandardMaterial
              color="#f31e39"
              emissive="#541a24"
              emissiveIntensity={0.35}
              roughness={0.28}
              metalness={0.18}
            />
          </mesh>
        ))}

        {ivoryCurves.map((curve, idx) => (
          <mesh key={`i-${idx}`}>
            <tubeGeometry args={[curve, 12, tubeRadius * 0.85, 8, false]} />
            <meshStandardMaterial
              color="#f0ede4"
              roughness={0.32}
              metalness={0.15}
            />
          </mesh>
        ))}

        {/* Center Crest Medallion */}
        <mesh position={[0, 0, threadElevation * 0.8]}>
          <torusGeometry args={[0.28, tubeRadius * 1.1, 16, 48]} />
          <meshStandardMaterial color="#f31e39" roughness={0.25} metalness={0.25} />
        </mesh>
      </group>

      {/* Active Industrial Needle & Presser Foot Assembly */}
      <group ref={needleRef} position={[1.25, 0, 0.45]}>
        <mesh position={[0, 0, 0.35]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.07, 0.09, 0.45, 20]} />
          <meshStandardMaterial color="#222a26" metalness={0.85} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.08]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.012, 0.003, 0.42, 12]} />
          <meshStandardMaterial color="#f0ede4" metalness={0.95} roughness={0.1} />
        </mesh>
        {/* Presser Foot Ring */}
        <mesh position={[0, 0, -0.1]}>
          <torusGeometry args={[0.11, 0.018, 12, 24]} />
          <meshStandardMaterial color="#f31e39" emissive="#f31e39" emissiveIntensity={0.6} />
        </mesh>
      </group>
    </group>
  );
}

export default function Hero() {
  const [preset, setPreset] = useState<StitchPreset>("satin");
  const [activeFormat, setActiveFormat] = useState(MACHINE_FORMATS[0]);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
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

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setPointer({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      onPointerMove={handlePointerMove}
      className="relative min-h-screen w-full overflow-hidden bg-[#111515] text-[#f0ede4] pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col justify-between border-b border-[#303635]"
    >
      {/* Ambient Radial Wine & Brand Red Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-[#f31e39]/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-10 h-[360px] w-[360px] rounded-full bg-[#541a24]/25 blur-[110px]"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Brand Value Proposition & Controls */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center gap-2.5 rounded-full border border-[#303635] bg-[#191d1d]/90 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-[#afb2ac]"
            >
              <span className="h-2 w-2 rounded-full bg-[#f31e39] animate-pulse" />
              <span>EST. 2017 • EMBROIDERY DIGITIZING STUDIO</span>
              <span className="text-[#303635]">|</span>
              <span className="text-[#f0ede4] font-semibold">4–6H TURNAROUND</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal tracking-tight leading-[1.06] text-[#f0ede4]"
            >
              Crafted for the Machine.{" "}
              <span className="block mt-1 text-[#f31e39] italic">
                Digitized by Hand.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl text-base sm:text-lg text-[#afb2ac] leading-relaxed"
            >
              Production-grade embroidery digitizing and vector artwork engineered for commercial multi-head machines. Every satin column, underlay path, and lock stitch is plotted by hand to eliminate thread breaks and run clean at 1,000+ SPM.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href="#sample-cta"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#f31e39] hover:bg-[#d5142c] text-[#f0ede4] font-medium px-7 py-4 text-sm sm:text-base transition-all shadow-[0_0_30px_rgba(243,30,57,0.35)] hover:shadow-[0_0_40px_rgba(243,30,57,0.55)]"
              >
                <span>Get a Free Estimate</span>
                <span className="font-mono text-xs bg-[#541a24] px-2 py-0.5 rounded text-[#f0ede4]">
                  4–6h Delivery
                </span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#303635] bg-[#191d1d] hover:bg-[#222a26] text-[#f0ede4] font-medium px-7 py-4 text-sm sm:text-base transition-colors"
              >
                <span>View Our Services</span>
              </a>
            </motion.div>

            {/* Studio Track Record Metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 border-t border-[#303635]/80 max-w-xl">
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#f0ede4] font-mono">
                  50,000+
                </div>
                <div className="text-xs text-[#afb2ac] mt-0.5">
                  Designs Delivered
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#f31e39] font-mono">
                  400+
                </div>
                <div className="text-xs text-[#afb2ac] mt-0.5">
                  Active Client Shops
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#f0ede4] font-mono">
                  100%
                </div>
                <div className="text-xs text-[#afb2ac] mt-0.5">
                  Unlimited Revisions
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Embroidery Hoop Stage */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-[#303635] bg-gradient-to-b from-[#191d1d] to-[#171b1a] p-3 sm:p-4 shadow-2xl">
              {/* Top Telemetry Bar */}
              <div className="flex items-center justify-between border-b border-[#303635] pb-3 mb-2 text-xs font-mono text-[#afb2ac]">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#f31e39]" />
                  <span>3D HOOP SIMULATOR</span>
                </div>
                <span className="text-[#f0ede4]">
                  {preset === "puff"
                    ? "2.5MM EVA FOAM LOFT"
                    : preset === "satin"
                    ? "0.40MM SATIN COLUMN"
                    : "TATAMI STEP FILL"}
                </span>
              </div>

              {/* 3D WebGL Canvas */}
              <div className="relative h-[320px] sm:h-[380px] md:h-[420px] w-full rounded-xl bg-[#111515] overflow-hidden border border-[#303635]/60">
                {isVisible && (
                  <Canvas
                    dpr={[1, 1.5]}
                    camera={{ position: [0, 0, 5.2], fov: 42 }}
                  >
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[4, 6, 5]} intensity={1.4} color="#f0ede4" />
                    <pointLight position={[-4, -3, 3]} intensity={1.1} color="#f31e39" />
                    <EmbroideryHoop3D preset={preset} pointer={pointer} />
                  </Canvas>
                )}

                {/* Live Telemetry Overlay */}
                <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg bg-[#191d1d]/90 border border-[#303635] px-3 py-2 text-[11px] font-mono">
                  <span className="text-[#afb2ac]">
                    STITCHES: <strong className="text-[#f0ede4]">14,820</strong>
                  </span>
                  <span className="text-[#afb2ac]">
                    TRIMS: <strong className="text-[#f31e39]">0 BREAKS</strong>
                  </span>
                  <span className="hidden sm:inline text-[#afb2ac]">
                    PULL COMP: <strong className="text-[#f0ede4]">0.25mm</strong>
                  </span>
                </div>
              </div>

              {/* Interactive 3D Stitch Profile Switcher */}
              <div className="mt-3 grid grid-cols-3 gap-2">
                {(
                  [
                    { id: "satin", label: "Satin Column" },
                    { id: "puff", label: "3D Puff Foam" },
                    { id: "tatami", label: "Tatami Fill" },
                  ] as const
                ).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPreset(item.id)}
                    className={`rounded-lg py-2 px-2.5 text-xs font-mono uppercase tracking-wider transition-all border ${
                      preset === item.id
                        ? "bg-[#f31e39] text-[#f0ede4] border-[#f31e39] shadow-[0_0_15px_rgba(243,30,57,0.3)]"
                        : "bg-[#222a26]/60 text-[#afb2ac] border-[#303635] hover:text-[#f0ede4]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Machine Format Compatibility Bar */}
        <div className="mt-12 md:mt-16 rounded-xl border border-[#303635] bg-[#191d1d]/80 p-4 sm:p-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#f31e39]">
                MACHINE-READY FORMATS
              </span>
              <span className="hidden sm:inline text-xs text-[#303635]">•</span>
              <span className="text-xs font-mono text-[#afb2ac]">
                .{activeFormat.ext} — {activeFormat.brand} ({activeFormat.density})
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {MACHINE_FORMATS.map((fmt) => (
                <button
                  key={fmt.ext}
                  type="button"
                  onClick={() => setActiveFormat(fmt)}
                  className={`rounded-md px-3 py-1.5 text-xs font-mono transition-all border ${
                    activeFormat.ext === fmt.ext
                      ? "bg-[#f31e39] text-[#f0ede4] border-[#f31e39]"
                      : "bg-[#171b1a] text-[#afb2ac] border-[#303635] hover:border-[#afb2ac]"
                  }`}
                >
                  .{fmt.ext}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
