import Section from "./shared/Section";
import Reveal from "./shared/Reveal";

/*
 * Real clients and collaborators (factual — not fabricated quotes).
 * Add named client testimonials here later if you collect them.
 */
const CLIENTS = [
  {
    name: "3TD Solutions Sdn Bhd",
    project: "Commercial · Cyberjaya",
    note: "Complete interior design and renovation for a professional business space at Tamarind Square.",
  },
  {
    name: "Fathiya Hijab",
    project: "Retail flagship · Cyberjaya",
    note: "An industrial-vintage flagship store designed to showcase the collection and guide customer flow.",
  },
  {
    name: "Creativ5 Design Studio",
    project: "Design collaboration",
    note: "A design partner on co-branded residential and retail projects across the Klang Valley.",
  },
  {
    name: "Nadim Design",
    project: "Design partnership",
    note: "A design partner on residential work in Malacca, including the Vista Kirana homes.",
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
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
          Clients &amp; collaborations
        </p>
        <h2 className="mt-4 font-display text-[clamp(1.875rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-ink">
          Trusted on detail, timing, and budget.
        </h2>
        <p className="mt-4 text-[1.0625rem] leading-[1.6] text-muted">
          Clients tell us the same things — attention to detail, clear
          communication, and delivery on time. Here are a few we&apos;ve worked
          with.
        </p>
      </Reveal>

      <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0 lg:grid-cols-4">
        {CLIENTS.map((item, i) => (
          <Reveal
            key={item.name}
            delay={i * 0.1}
            className="min-w-[82%] snap-center sm:min-w-[60%] md:min-w-0"
          >
            <figure className="flex h-full flex-col justify-between rounded-card border border-line bg-canvas p-7 shadow-soft">
              <p className="text-[1.0625rem] leading-[1.6] text-ink">
                {item.note}
              </p>
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
