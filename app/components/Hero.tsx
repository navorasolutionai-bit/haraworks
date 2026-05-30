import Button from "./shared/Button";

/*
 * Hero — white dominant, Apple-style. Large black headline, clean CTAs.
 * Instagram embed moved to Gallery section where it belongs.
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-canvas px-6 sm:px-8">
      {/* Subtle grid texture — very faint, Apple-style */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-start pb-24 pt-36 sm:pt-44 lg:pb-32 lg:pt-52">
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Interior design &amp; renovation · Kuala Lumpur
        </p>

        {/* Main headline */}
        <h1 className="mt-6 max-w-4xl font-display text-[clamp(3rem,7.5vw,6.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
          Spaces that feel
          <br />
          exactly right.
        </h1>

        <p className="mt-8 max-w-[52ch] text-[1.125rem] leading-[1.65] text-muted">
          Haraworks is a Kuala Lumpur studio designing and renovating homes,
          offices, and retail spaces — contemporary design with practical
          solutions, on time and on budget.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href="#gallery">View our work</Button>
          <Button href="#contact" variant="ghost">
            Book a consultation
          </Button>
        </div>

        {/* Stats row */}
        <dl className="mt-16 flex flex-wrap items-center gap-x-12 gap-y-6 border-t border-line pt-10">
          {[
            { value: "10+", label: "Years experience" },
            { value: "15+", label: "Projects completed" },
            { value: "6+", label: "Design styles" },
            { value: "KL", label: "Based in Kuala Lumpur" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-[2rem] font-bold tracking-[-0.03em] text-ink">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm leading-snug text-muted">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
