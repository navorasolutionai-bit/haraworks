import Image from "next/image";
import Section from "./shared/Section";
import Reveal from "./shared/Reveal";

/* TODO: replace these placeholder projects with real case studies + photography */
const PROJECTS = [
  {
    seed: "haraworks-lantern",
    title: "Lantern House",
    client: "Private residence",
    scope: "Full interior architecture & furnishing",
    meta: "Hillside home · 2024",
  },
  {
    seed: "haraworks-atlas",
    title: "Atlas Studio",
    client: "Creative agency",
    scope: "Workplace design for 40 people",
    meta: "Commercial fit-out · 2023",
  },
  {
    seed: "haraworks-reed",
    title: "The Reed Apartment",
    client: "City apartment",
    scope: "Renovation & space planning",
    meta: "Residential · 2023",
  },
  {
    seed: "haraworks-greenhouse",
    title: "Greenhouse Café",
    client: "Independent café",
    scope: "Concept, materials & build direction",
    meta: "Hospitality · 2022",
  },
];

export default function Portfolio() {
  return (
    <Section id="work">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Selected work
        </p>
        <h2 className="mt-4 font-display text-[clamp(1.875rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-ink">
          A few of the spaces we&apos;ve shaped.
        </h2>
      </Reveal>

      <div className="mt-16 flex flex-col gap-20 sm:gap-24 lg:gap-28">
        {PROJECTS.map((project, i) => {
          const imageRight = i % 2 === 1;
          return (
            <Reveal key={project.seed}>
              <article className="group grid items-center gap-8 lg:grid-cols-5 lg:gap-12">
                {/* Image — 60% on desktop */}
                <div
                  className={`lg:col-span-3 ${
                    imageRight ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-card shadow-soft transition-shadow duration-300 group-hover:shadow-lift">
                    <Image
                      src={`https://picsum.photos/seed/${project.seed}/1200/800`}
                      alt={`${project.title} — ${project.scope}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                {/* Text — 40% on desktop */}
                <div
                  className={`lg:col-span-2 ${
                    imageRight ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <h3 className="font-display text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base text-ink">{project.client}</p>
                  <p className="mt-1 text-base text-muted">{project.scope}</p>
                  <p className="mt-5 text-sm uppercase tracking-[0.12em] text-muted">
                    {project.meta}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
