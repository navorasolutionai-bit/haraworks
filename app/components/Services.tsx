import Image from "next/image";
import Section from "./shared/Section";
import Reveal from "./shared/Reveal";

const SERVICES = [
  {
    title: "Residential Design",
    description:
      "Homes designed end to end — layout, light, materials, and the furniture that ties them together.",
  },
  {
    title: "Commercial Spaces",
    description:
      "Offices, studios, and shops planned around how teams and customers actually move through a day.",
  },
  {
    title: "Sustainable Design",
    description:
      "Material choices and detailing that favour longevity, repair, and lower-impact sourcing.",
  },
  {
    title: "Design Consultation",
    description:
      "A focused session to set direction, resolve a difficult room, or pressure-test plans you already have.",
  },
];

export default function Services() {
  return (
    <Section id="services" className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — service list */}
        <div>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              What we do
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.875rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Four ways to work together.
            </h2>
          </Reveal>

          <div className="mt-10">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.1}>
                <div className="border-t border-line py-7">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-[48ch] text-base leading-[1.6] text-muted">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right — feature image */}
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-ultra shadow-soft">
            {/* TODO: replace with a representative project image or composition */}
            <Image
              src="https://picsum.photos/seed/haraworks-services/1000/1250"
              alt="Detail of a designed interior showing material and lighting choices"
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
