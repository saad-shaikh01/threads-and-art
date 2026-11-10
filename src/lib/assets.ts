import { existsSync } from "node:fs";
import path from "node:path";

/**
 * An image slot that may point at an asset that has not been generated yet.
 * `src` is the planned file (see docs/ASSET_PROMPTS.md); `fallback` is an
 * existing image used until that file is dropped into /public.
 */
export interface Img {
  src: string;
  alt: string;
  fallback?: string;
}

const cache = new Map<string, boolean>();
const exists = (src: string) => {
  if (!cache.has(src)) cache.set(src, existsSync(path.join(process.cwd(), "public", src)));
  return cache.get(src)!;
};

/**
 * Server-only. Deep-walks a data object and swaps every planned image whose
 * file is missing for its fallback, so pages never render broken images.
 */
export function resolveAssets<T>(value: T): T {
  if (Array.isArray(value)) return value.map(resolveAssets) as T;
  if (value && typeof value === "object") {
    const o = value as Record<string, unknown>;
    if (typeof o.src === "string" && typeof o.fallback === "string") {
      return { ...o, src: exists(o.src) ? o.src : o.fallback } as T;
    }
    return Object.fromEntries(Object.entries(o).map(([k, v]) => [k, resolveAssets(v)])) as T;
  }
  return value;
}
