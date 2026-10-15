/**
 * Loads every frame image into an in-memory cache ahead of playback.
 *
 * Designed for hundreds of frames: frame 0 is fetched first (so there's
 * something to paint immediately), the rest load with bounded concurrency
 * so the browser isn't asked to open hundreds of connections at once, and a
 * failed frame never blocks the others — it's simply skipped, and
 * useFrameSequence's fallback logic covers the gap.
 */

export interface PreloadFramesOptions {
  totalFrames: number;
  /** Maps a 0-based frame index to its image URL. */
  getUrl: (index: number) => string;
  /** Max number of images loading in parallel. */
  concurrency?: number;
  /** Called after each frame resolves (loaded or failed), with the running total. */
  onProgress?: (loaded: number, total: number) => void;
  signal?: AbortSignal;
}

export interface PreloadFramesResult {
  /** Mutable cache, filled in as frames load. Safe to read at any time. */
  cache: Map<number, HTMLImageElement>;
  /** Resolves once every frame has been requested (successfully or not). */
  promise: Promise<void>;
}

export function preloadFrames(options: PreloadFramesOptions): PreloadFramesResult {
  const { totalFrames, getUrl, concurrency = 6, onProgress, signal } = options;
  const cache = new Map<number, HTMLImageElement>();
  let loaded = 0;

  const loadOne = (index: number): Promise<void> =>
    new Promise((resolve) => {
      if (signal?.aborted) {
        resolve();
        return;
      }

      const img = new Image();
      img.decoding = "async";

      const settle = () => {
        loaded += 1;
        onProgress?.(loaded, totalFrames);
        resolve();
      };

      img.onload = () => {
        cache.set(index, img);
        settle();
      };
      // A missing/broken frame shouldn't halt the sequence — just skip it.
      img.onerror = settle;

      img.src = getUrl(index);
    });

  async function run(): Promise<void> {
    if (totalFrames <= 0) return;

    // Prioritize the first frame so the canvas has something to draw
    // immediately, before the rest of the sequence finishes loading.
    await loadOne(0);

    const remaining = Array.from({ length: totalFrames - 1 }, (_, i) => i + 1);
    let cursor = 0;

    async function worker() {
      while (cursor < remaining.length) {
        if (signal?.aborted) return;
        const index = remaining[cursor];
        cursor += 1;
        await loadOne(index);
      }
    }

    const workerCount = Math.min(concurrency, remaining.length);
    await Promise.all(Array.from({ length: workerCount }, () => worker()));
  }

  return { cache, promise: run() };
}
