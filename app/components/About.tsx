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
              Haraworks is an interior design and renovation studio based in
              Kuala Lumpur, with more than ten years of experience across
              residential, commercial, and retail spaces throughout the Klang
              Valley and beyond.
            </p>
            <p className="max-w-[60ch]">
              Our approach blends contemporary design with practical solutions —
              every project reflects the client&apos;s vision while respecting
              structure, timeline, and budget. We also collaborate with partners
              like Creativ5 Design Studio to bring each space to life.
            </p>
          </div>

          {/* Design styles we work in */}
          <div className="mt-8">
            <p className="text-sm font-semibold text-ink">Styles we work in</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {[
                "Contemporary",
                "Korean Minimalist",
                "Industrial-Vintage",
                "Classic-Modern",
                "Arabian & Eastern",
                "Bespoke Custom",
              ].map((style) => (
                <li
                  key={style}
                  className="rounded-full border border-line bg-canvas px-3 py-1.5 text-sm text-muted"
                >
                  {style}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-sm text-muted">
            <span className="text-ink">Haraworks</span> · Kuala Lumpur, Malaysia
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
