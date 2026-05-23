"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const EASE_OUT_QUART = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  /** vertical offset in px the element travels in */
  y?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "className">;

export default function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE_OUT_QUART }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
