import Image from "next/image";
import Section from "./shared/Section";
import Reveal from "./shared/Reveal";

export default function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            The studio
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.875rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-ink">
            We design rooms people don&apos;t want to leave.
          </h2>
          <div className="mt-6 space-y-4 text-[1.0625rem] leading-[1.65] text-muted">
            <p className="max-w-[60ch]">
              haraworks started as a small practice with one habit: spend more
              time understanding how a space will be lived in than drawing how it
              looks. That order matters. The good rooms come from the answers,
              not the mood board.
            </p>
            <p className="max-w-[60ch]">
              We work in close, slow collaboration — a handful of projects at a
              time so each one gets real attention. The result tends to be quiet
              rather than loud, and it holds up after the furniture is in and the
              photographer has gone home.
            </p>
          </div>

          {/* TODO: replace with real founder / studio attribution */}
          <p className="mt-8 text-sm text-muted">
            <span className="text-ink">[Founder Name]</span>, Principal Designer
          </p>
        </Reveal>

        {/* Image */}
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-ultra shadow-soft">
            {/* TODO: replace with a behind-the-scenes or studio portrait */}
            <Image
              src="https://picsum.photos/seed/haraworks-studio/1000/1250"
              alt="Inside the haraworks studio during a project review"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
