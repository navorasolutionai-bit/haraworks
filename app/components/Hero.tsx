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
            Interior design studio
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-ink">
            Considered interiors,
            <br className="hidden sm:block" /> built to live in.
          </h1>
          <p className="mt-6 max-w-[60ch] text-[1.0625rem] leading-[1.65] text-muted">
            haraworks is a studio designing calm, durable spaces for homes and
            workplaces — each one shaped around the people who use it, down to
            the last detail.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#work">Explore the work</Button>
            <Button href="#contact" variant="ghost">
              Book a consultation
            </Button>
          </div>

          {/* TODO: replace with real practice details */}
          <p className="mt-10 text-sm text-muted">
            Based in <span className="text-ink">[Your City]</span> · Residential
            &amp; commercial projects worldwide
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
