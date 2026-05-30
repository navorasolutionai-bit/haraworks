"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import Reveal from "./shared/Reveal";

/*
 * BrandStatement — full-width black panel, single bold white statement.
 * The one high-contrast dark section on the page. On desktop it becomes a
 * sticky "scrubbing" moment: the lines scrub in as you scroll. On mobile or
 * with reduced motion, it falls back to a normal reveal stagger.
 */

const EYEBROW = "Haraworks · Kuala Lumpur";

const HEADLINE_LINES = [
  "One studio. End to end —",
  "from the first sketch",
  "to the final handover.",
];

const PARAGRAPH =
  "Design, materials, contractors, and quality checks — all managed in-house. One point of contact, a clear timeline, and a fixed budget from day one.";

const STATS = [
  { value: "8 wks", label: "Avg. project duration" },
  { value: "15+", label: "Projects completed" },
  { value: "100%", label: "In-house management" },
];

/** Tracks whether the viewport is at/above the given min-width breakpoint. */
function useMinWidth(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const onChange = () => setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

function StatsRow() {
  return (
    <dl className="mt-14 flex flex-wrap gap-x-14 gap-y-8 border-t border-[rgba(255,255,255,0.1)] pt-10">
      {STATS.map((stat) => (
        <div key={stat.label}>
          <dt className="font-display text-[2rem] font-bold tracking-[-0.03em] text-[#f5f5f7]">
            {stat.value}
          </dt>
          <dd className="mt-1 text-sm text-[rgba(245,245,247,0.45)]">
            {stat.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** A single headline line whose opacity/position is driven by scroll progress. */
function ScrubLine({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: React.ReactNode;
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [28, 0]);
  return (
    <motion.span style={{ opacity, y }} className="block">
      {children}
    </motion.span>
  );
}

function CinematicStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const eyebrowOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const tailOpacity = useTransform(scrollYProgress, [0.62, 0.8], [0, 1]);
  const tailY = useTransform(scrollYProgress, [0.62, 0.8], [28, 0]);

  return (
    <section
      ref={ref}
      aria-label="Brand statement"
      className="relative min-h-[200vh] w-full bg-ink"
    >
      <div className="sticky top-0 flex min-h-screen items-center px-6 py-24 sm:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <motion.p
            style={{ opacity: eyebrowOpacity }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(245,245,247,0.4)]"
          >
            {EYEBROW}
          </motion.p>
          <h2 className="mt-8 max-w-4xl font-display text-[clamp(2.25rem,5.5vw,5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-[#f5f5f7]">
            <ScrubLine progress={scrollYProgress} range={[0.08, 0.3]}>
              {HEADLINE_LINES[0]}
            </ScrubLine>
            <ScrubLine progress={scrollYProgress} range={[0.26, 0.48]}>
              {HEADLINE_LINES[1]}
            </ScrubLine>
            <ScrubLine progress={scrollYProgress} range={[0.44, 0.66]}>
              {HEADLINE_LINES[2]}
            </ScrubLine>
          </h2>
          <motion.div style={{ opacity: tailOpacity, y: tailY }}>
            <p className="mt-8 max-w-[54ch] text-[1.0625rem] leading-[1.65] text-[rgba(245,245,247,0.55)]">
              {PARAGRAPH}
            </p>
            <StatsRow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StaticStatement() {
  return (
    <section
      aria-label="Brand statement"
      className="w-full bg-ink px-6 py-24 sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(245,245,247,0.4)]">
            {EYEBROW}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-8 max-w-4xl font-display text-[clamp(2.25rem,5.5vw,5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-[#f5f5f7]">
            One studio. End to end —
            <br className="hidden sm:block" /> from the first sketch
            <br className="hidden sm:block" /> to the final handover.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-[54ch] text-[1.0625rem] leading-[1.65] text-[rgba(245,245,247,0.55)]">
            {PARAGRAPH}
          </p>
        </Reveal>
        <Reveal delay={0.24} className="w-full">
          <StatsRow />
        </Reveal>
      </div>
    </section>
  );
}

export default function FeaturedTimeline() {
  const reduce = useReducedMotion();
  const isDesktop = useMinWidth("(min-width: 768px)");
  const cinematic = isDesktop && !reduce;

  return cinematic ? <CinematicStatement /> : <StaticStatement />;
}
