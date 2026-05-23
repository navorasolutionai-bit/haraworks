import Section from "./shared/Section";
import Reveal from "./shared/Reveal";

/* TODO: replace with real client quotes, names, and project types */
const TESTIMONIALS = [
  {
    quote:
      "They redrew our flat three times until it actually worked for two kids and a dog — not just for a photo.",
    name: "Marlene Aoki",
    project: "Residential Renovation",
  },
  {
    quote:
      "Our team noticed the difference the first week back. The space finally matches the way we actually work.",
    name: "Devin Osei",
    project: "Workplace Design",
  },
  {
    quote:
      "Calm, organised, and honest about budget the whole way through. That combination is rarer than it should be.",
    name: "Priya Raman",
    project: "Café Concept",
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
  return (
    <span
      aria-hidden="true"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent"
    >
      {initials}
    </span>
  );
}

export default function Testimonials() {
  return (
    <Section className="bg-surface">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          In their words
        </p>
        <h2 className="mt-4 font-display text-[clamp(1.875rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-ink">
          What it&apos;s like to work with us.
        </h2>
      </Reveal>

      <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
        {TESTIMONIALS.map((item, i) => (
          <Reveal
            key={item.name}
            delay={i * 0.1}
            className="min-w-[82%] snap-center sm:min-w-[60%] md:min-w-0"
          >
            <figure className="flex h-full flex-col justify-between rounded-card border border-line bg-canvas p-7 shadow-soft">
              <blockquote className="text-[1.0625rem] leading-[1.6] text-ink">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <Avatar name={item.name} />
                <span className="leading-tight">
                  <span className="block text-sm font-semibold text-ink">
                    {item.name}
                  </span>
                  <span className="block text-sm text-muted">
                    {item.project}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
