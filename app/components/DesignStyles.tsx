import Section from "./shared/Section";
import Reveal from "./shared/Reveal";
import { byId } from "@/lib/instagram-posts";

const STYLES: {
  name: string;
  description: string;
  examples: string[]; // post ids
}[] = [
  {
    name: "Contemporary",
    description:
      "Modern, clean lines with current detailing — functional spaces that still feel warm.",
    examples: ["DOKxIdkD3py", "C44elt0PF-5"],
  },
  {
    name: "Korean Minimalist",
    description:
      "Essential elements, smart storage, and premium finishes with plenty of breathing room.",
    examples: ["DI8LC4oPXNm"],
  },
  {
    name: "Industrial-Vintage Fusion",
    description:
      "Raw materials and vintage character paired with modern, retail-ready functionality.",
    examples: ["C60mZN7Pzj3", "C44elt0PF-5"],
  },
  {
    name: "Classic-Modern Fusion",
    description:
      "Timeless elegance executed with a modern hand — monochrome palettes, warm accents.",
    examples: ["DP_O0MsAUex", "DRQxG1bgapM"],
  },
  {
    name: "Arabian & Eastern",
    description:
      "Sophisticated Eastern aesthetics with warm, cultural elements and inviting comfort.",
    examples: ["DOKxIdkD3py"],
  },
  {
    name: "Bespoke Custom",
    description:
      "Tailored solutions for specific needs — design built around how you actually live or work.",
    examples: ["DI8K6nYvfok", "C3I8ZSxSRuP"],
  },
];

export default function DesignStyles() {
  return (
    <Section id="styles" className="bg-surface">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Design styles
        </p>
        <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
          Six aesthetics, one studio.
        </h2>
        <p className="mt-4 text-[1.0625rem] leading-[1.6] text-muted">
          We adapt to the brief, not the other way around. Tap an example to see
          it on Instagram.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {STYLES.map((style, i) => (
          <Reveal key={style.name} delay={(i % 2) * 0.08}>
            <div className="flex h-full flex-col rounded-card border border-line bg-white p-7 shadow-soft transition-shadow duration-200 hover:shadow-lift">
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                {style.name}
              </h3>
              <p className="mt-2 text-base leading-[1.6] text-muted">
                {style.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {style.examples.map((id) => {
                  const post = byId(id);
                  if (!post) return null;
                  return (
                    <li key={id}>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full border border-[rgba(0,0,0,0.15)] bg-white px-3 py-1.5 text-sm text-muted transition-colors hover:border-ink hover:text-ink"
                      >
                        {post.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-10 text-sm text-muted">
          See every project in the{" "}
          <a
            href="#gallery"
            className="font-medium text-ink underline-offset-4 hover:underline"
          >
            portfolio gallery
          </a>
          .
        </p>
      </Reveal>
    </Section>
  );
}
