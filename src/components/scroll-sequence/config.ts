/**
 * All knobs for the scroll-driven frame sequence live here. Nothing in the
 * rendering/animation code should ever hardcode a frame count, path, or fit
 * mode — change the workflow (resolution, frame count, folder) by editing
 * only this file.
 */

/** Total number of frames in the sequence (frames/0001.webp ... 0480.webp). */
export const TOTAL_FRAMES = 480;

/** Folder (relative to /public) where numbered frames live. */
export const FRAME_PATH = "/frames";

/** File extension of each frame image, matching the exported sequence. */
export const IMAGE_FORMAT = "webp";

/** Zero-padding width used in frame filenames (4 -> "0001"). */
export const FRAME_NUMBER_PADDING = 4;

/**
 * How long the section stays pinned while scrolling, in viewport heights.
 * 3 means the section's scroll track is 300vh tall, so the user scrolls
 * through 3 full screens' worth of movement while the frames play.
 */
export const SCROLL_DURATION = 3;

/** How a frame image is fit inside the canvas. */
export type CanvasFitMode = "cover" | "contain";

/** "cover" fills the canvas and crops; "contain" letterboxes to show the full frame. */
export const CANVAS_FIT_MODE: CanvasFitMode = "cover";

/** Preload concurrency — how many frame images load in parallel. */
export const PRELOAD_CONCURRENCY = 6;

/**
 * Builds the public URL for a given 0-based frame index, e.g.
 * getFrameUrl(0) -> "/frames/0001.webp".
 */
export function getFrameUrl(frameIndex: number): string {
  const frameNumber = frameIndex + 1;
  const padded = String(frameNumber).padStart(FRAME_NUMBER_PADDING, "0");
  return `${FRAME_PATH}/${padded}.${IMAGE_FORMAT}`;
}
