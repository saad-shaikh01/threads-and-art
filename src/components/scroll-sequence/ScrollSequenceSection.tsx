"use client";

import { useRef } from "react";
import { FrameCanvas } from "./FrameCanvas";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useFrameSequence } from "@/hooks/useFrameSequence";
import { CANVAS_FIT_MODE, SCROLL_DURATION, TOTAL_FRAMES, type CanvasFitMode } from "./config";

export interface ScrollSequenceSectionProps {
  /** Number of frames in the sequence. Must match the files in FRAME_PATH. */
  totalFrames?: number;
  /** Pinned scroll range, in viewport heights (3 = 300vh of scroll). */
  scrollDuration?: number;
  /** "cover" fills and crops; "contain" letterboxes to show the full frame. */
  fitMode?: CanvasFitMode;
  className?: string;
}

/**
 * A single pinned, fullscreen, scroll-driven frame-sequence section.
 *
 * Structure is the standard scroll-pin pattern: an outer track element is
 * made tall (`(scrollDuration + 1) * 100vh`) to create a scrollable range,
 * and an inner `position: sticky` element holds the canvas, staying pinned
 * at the top of the viewport for the whole range before the page continues.
 * Scroll progress through that range is the *only* input to which frame is
 * drawn — there is no autoplay and no self-running timeline.
 *
 * This component only renders a black canvas; it intentionally has no
 * text, navigation, or other UI so it can be dropped into any page.
 */
export function ScrollSequenceSection({
  totalFrames = TOTAL_FRAMES,
  scrollDuration = SCROLL_DURATION,
  fitMode = CANVAS_FIT_MODE,
  className,
}: ScrollSequenceSectionProps) {
  const trackRef = useRef<HTMLElement | null>(null);
  const { progressRef } = useScrollProgress({ containerRef: trackRef });
  const { getFrameForProgress } = useFrameSequence(totalFrames);

  return (
    <section
      ref={trackRef}
      className={className}
      style={{ height: `${(scrollDuration + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <FrameCanvas
          progressRef={progressRef}
          getFrameForProgress={getFrameForProgress}
          fitMode={fitMode}
        />
      </div>
    </section>
  );
}
