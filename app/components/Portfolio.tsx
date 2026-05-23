import Image from "next/image";
import Section from "./shared/Section";
import Reveal from "./shared/Reveal";

/*
 * Real Haraworks projects.
 * NOTE: images use picsum placeholders — swap each `seed` URL for real
 * project photography (available on Instagram @haraworks.kl).
 */
const PROJECTS = [
  {
    seed: "haraworks-it-office",
    title: "IT Office Renovation",
    client: "Professional business services",
    scope: "Contemporary office with industrial steel works",
    meta: "Commercial · Tamarind Square, Cyberjaya · 8 weeks",
  },
  {
    seed: "haraworks-fathiya",
    title: "Fathiya Hijab Flagship Store",
    client: "Fathiya Hijab",
    scope: "Industrial-vintage retail flagship & showcase layout",
    meta: "Retail · Tamarind Square, Cyberjaya",
  },
  {
    seed: "haraworks-korean-kitchen",
    title: "Korean Minimalist Kitchen",
    client: "Private residence",
    scope: "Clean lines, smart storage, premium finishes",
    meta: "Residential · Brickfields, Kuala Lumpur",
  },
  {
    seed: "haraworks-sahara",
    title: "Contemporary Sahara Interior",
    client: "Private residence",
    scope: "Warm, soothing interior with contemporary Eastern accents",
    meta: "Residential · Taman Bukit Maluri, Kepong",
  },
  {
    seed: "haraworks-english-grace",
    title: "English Grace Modern",
    client: "Private residence",
    scope: "Monochrome palette with warm beige, classic-modern fusion",
    meta: "Residential · Vista Kirana, Malacca",
  },
  {
    seed: "haraworks-3td",
    title: "Interior Renovation — 3TD Solutions",
    client: "3TD Solutions Sdn Bhd",
    scope: "Complete interior design & renovation for a business space",
    meta: "Commercial · Tamarind Square, Cyberjaya",
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
