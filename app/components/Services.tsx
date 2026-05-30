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
    <Section id="services" className="bg-canvas">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left — service list */}
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              What we do
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
              Six ways to work together.
            </h2>
          </Reveal>

          <div className="mt-12">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.08}>
                <div className="group border-t border-line py-7 transition-colors duration-200 hover:border-ink">
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

        {/* Right — value panel (black card) */}
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex h-full flex-col justify-between rounded-ultra bg-ink p-8 sm:p-10">
            <div>
              <p className="font-display text-2xl font-bold leading-snug tracking-[-0.02em] text-[#f5f5f7]">
                One studio, end to end — from the first sketch to the final
                handover.
              </p>
              <p className="mt-5 text-base leading-[1.65] text-[rgba(245,245,247,0.55)]">
                Every project is managed in-house: design, materials,
                contractors, and quality checks. One point of contact, a clear
                timeline, and a fixed budget from day one.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {[
                "Free initial consultation",
                "No-obligation quotation",
                "On time, on budget",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-base text-[#f5f5f7]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[rgba(255,255,255,0.25)]">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center rounded-full border border-[rgba(255,255,255,0.25)] px-6 py-3 text-sm font-medium text-[#f5f5f7] transition-all duration-200 hover:border-white hover:bg-white hover:text-ink"
              >
                Request a quotation
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
