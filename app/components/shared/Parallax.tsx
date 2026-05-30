"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

type ParallaxProps = {
  children: ReactNode;
  /** Total vertical travel in px across the scroll range. Positive = drifts down. */
  distance?: number;
  className?: string;
};

/**
 * Translates its children on the Y axis as the element scrolls through the
 * viewport, for subtle depth. Falls back to a plain div when the user prefers
 * reduced motion (Framer JS transforms are not covered by the global CSS guard).
 */
export default function Parallax({
  children,
  distance = 60,
  className,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
