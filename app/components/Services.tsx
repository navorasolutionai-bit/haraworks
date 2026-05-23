import Section from "./shared/Section";
import Reveal from "./shared/Reveal";
import Button from "./shared/Button";

const SERVICES = [
  {
    title: "Residential Design",
    description:
      "Homes and kitchens designed and renovated end to end — layout, light, storage, and finishes.",
  },
  {
    title: "Commercial & Office Design",
    description:
      "Workplaces planned for productivity, with the construction and steel works to match.",
  },
  {
    title: "Retail & Flagship Stores",
    description:
      "Retail spaces designed to showcase products and guide customers through a considered flow.",
  },
  {
    title: "Interior Styling",
    description:
      "Colour schemes, furniture selection, and finishing touches that bring a design to life.",
  },
  {
    title: "Project Management",
    description:
      "End-to-end oversight — timelines, budgets, contractor coordination, and quality inspections.",
  },
  {
    title: "Consultation & Quotation",
    description:
      "A free initial consultation and no-obligation quotation to set direction for your project.",
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
              Six ways to work together.
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

        {/* Right — value panel */}
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex h-full flex-col justify-between rounded-ultra bg-accent-soft p-8 sm:p-10">
            <div>
              <p className="font-display text-2xl font-semibold leading-snug tracking-tight text-ink">
                One studio, end to end — from the first sketch to the final
                handover.
              </p>
              <p className="mt-4 text-base leading-[1.6] text-muted">
                Every project is managed in-house: design, materials,
                contractors, and quality checks. You get one point of contact and
                a clear timeline and budget from day one.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {[
                "Free initial consultation",
                "No-obligation quotation",
                "On time, on budget",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-base text-ink">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="#contact">Request a quotation</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
