#!/usr/bin/env node
/**
 * Generates a synthetic frame sequence into /public/frames so the
 * ScrollSequenceSection component can be exercised end-to-end before the
 * real rendered video is converted into frames.
 *
 * Output count/format/padding are read from the component's own config.ts
 * (via the constants re-declared below) — when you swap these placeholders
 * for real frames, keep TOTAL_FRAMES / IMAGE_FORMAT / FRAME_NUMBER_PADDING
 * in src/components/scroll-sequence/config.ts in sync with what you export.
 *
 * Usage: npm run frames:placeholder
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const TOTAL_FRAMES = 480;
const IMAGE_FORMAT = "webp";
const FRAME_NUMBER_PADDING = 4;
const WIDTH = 960;
const HEIGHT = 540;
const CONCURRENCY = 16;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "..", "public", "frames");

function frameSvg(index, total) {
  const t = total > 1 ? index / (total - 1) : 0;
  const hueA = Math.round(220 + t * 100);
  const hueB = Math.round(280 + t * 80);
  const cx = WIDTH * (0.1 + 0.8 * t);
  const cy = HEIGHT * (0.5 + 0.25 * Math.sin(t * Math.PI * 4));
  const r = WIDTH * (0.05 + 0.025 * Math.sin(t * Math.PI * 6));
  const label = `${String(index + 1).padStart(FRAME_NUMBER_PADDING, "0")} / ${total}`;

  return `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="hsl(${hueA}, 45%, 8%)" />
      <stop offset="1" stop-color="hsl(${hueB}, 55%, 14%)" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)" />
  <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="hsl(${hueB}, 80%, 65%)" opacity="0.9" />
  <text x="24" y="${HEIGHT - 24}" font-family="monospace" font-size="20" fill="rgba(255,255,255,0.35)">${label}</text>
</svg>`;
}

async function renderFrame(index) {
  const svg = frameSvg(index, TOTAL_FRAMES);
  const filename = `${String(index + 1).padStart(FRAME_NUMBER_PADDING, "0")}.${IMAGE_FORMAT}`;
  await sharp(Buffer.from(svg)).webp({ quality: 70 }).toFile(path.join(OUTPUT_DIR, filename));
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const indices = Array.from({ length: TOTAL_FRAMES }, (_, i) => i);
  let cursor = 0;

  async function worker() {
    while (cursor < indices.length) {
      const index = indices[cursor];
      cursor += 1;
      await renderFrame(index);
    }
  }

  const workers = Array.from({ length: Math.min(CONCURRENCY, indices.length) }, () => worker());
  await Promise.all(workers);

  console.log(`Generated ${TOTAL_FRAMES} placeholder frames in ${OUTPUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
