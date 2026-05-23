import Image from "next/image";
import Button from "./shared/Button";

/*
 * Hero text is intentionally static (no entrance animation on page load),
 * per the design spec.
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 sm:px-6">
      {/* Warm radial mesh background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 75% 15%, rgba(146,102,59,0.10), transparent 70%), radial-gradient(45% 40% at 10% 90%, rgba(146,102,59,0.06), transparent 70%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 pb-20 pt-32 sm:pt-36 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-44">
        {/* Text */}
        <div className="lg:col-span-6 lg:pr-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Interior design &amp; renovation
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-ink">
            Considered interiors,
            <br className="hidden sm:block" /> built to live in.
          </h1>
          <p className="mt-6 max-w-[60ch] text-[1.0625rem] leading-[1.65] text-muted">
            Haraworks is a Kuala Lumpur studio designing and renovating homes,
            offices, and retail spaces — blending contemporary design with
            practical solutions, on time and on budget.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#work">Explore the work</Button>
            <Button href="#contact" variant="ghost">
              Book a consultation
            </Button>
          </div>

          {/* Real practice stats */}
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { value: "10+", label: "Years experience" },
              { value: "15+", label: "Projects completed" },
              { value: "6+", label: "Design styles" },
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
            Based in <span className="text-ink">Kuala Lumpur</span> · Serving the
            Klang Valley &amp; Malaysia
          </p>
        </div>

        {/* Visual */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-ultra shadow-lift sm:aspect-[5/4] lg:aspect-[4/5]">
            {/* TODO: replace picsum placeholder with real hero photography */}
            <Image
              src="https://picsum.photos/seed/haraworks-hero/1200/1500"
              alt="A naturally lit living room with layered textures and warm wood tones"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
