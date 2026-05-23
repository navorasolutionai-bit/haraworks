import Section from "./shared/Section";
import Reveal from "./shared/Reveal";
import InstagramEmbed from "./InstagramEmbed";

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
              structure, timeline, and budget. We also work alongside design
              partners like Creativ5 Design Studio and Nadim Design to bring each
              space to life.
            </p>
          </div>

          {/* Credentials */}
          <dl className="mt-8 grid max-w-md grid-cols-3 gap-6">
            {[
              { value: "10+", label: "Years experience" },
              { value: "15+", label: "Projects completed" },
              { value: "2", label: "Design partners" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-bold tracking-tight text-ink">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm leading-snug text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-sm text-muted">
            <span className="text-ink">Haraworks</span> · Kuala Lumpur, Malaysia
          </p>
        </Reveal>

        {/* Live post from the studio */}
        <Reveal delay={0.1}>
          <div className="mx-auto w-full max-w-md lg:ml-auto">
            <InstagramEmbed
              url="https://www.instagram.com/p/CzYritjRWde/"
              label="From the studio"
              title="Crafting spaces for success"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
