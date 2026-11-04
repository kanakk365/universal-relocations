"use client";

import { motion, useInView, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { useRef, type ReactNode } from "react";

import { MarkStroke } from "./icons";

export const EASE = [0.16, 1, 0.3, 1] as const;
const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const;

/** Scroll entrance: rise out of a light blur, once. Visible without JS. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number; className?: string } & Omit<
  HTMLMotionProps<"div">,
  "children"
>) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      data-reveal
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={VIEWPORT}
      transition={{ duration: reduce ? 0.3 : 1.1, ease: EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** An emphasised word on a light ground: an orange stroke draws in under it. */
export function Mark({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const on = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  return (
    <span ref={ref} className="mark" data-on={on ? "true" : "false"}>
      {children}
      <MarkStroke />
    </span>
  );
}
