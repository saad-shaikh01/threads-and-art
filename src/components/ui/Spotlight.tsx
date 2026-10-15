"use client";

import type { ElementType, PointerEvent, ReactNode } from "react";

interface SpotlightProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/** Sets --mx/--my on pointer move so the `spotlight` utility can follow the cursor. */
export function Spotlight({ children, className = "", as: Tag = "div" }: SpotlightProps) {
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const box = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - box.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - box.top}px`);
  };
  return (
    <Tag className={`spotlight ${className}`} onPointerMove={onMove}>
      {children}
    </Tag>
  );
}
