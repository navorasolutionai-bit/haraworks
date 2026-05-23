import Button from "./shared/Button";
import Reveal from "./shared/Reveal";

export default function CTA() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
      <Reveal className="mx-auto w-full max-w-5xl">
        <div className="overflow-hidden rounded-ultra bg-accent-soft px-6 py-16 text-center sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-[18ch] font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-tight text-ink">
            Have a space in mind?
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-[1.0625rem] leading-[1.6] text-muted">
            Tell us about your project and we&apos;ll get back to you with a free
            consultation and a no-obligation quotation.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#contact">Request a free consultation</Button>
            <a
              href="tel:+60179656504"
              className="text-sm font-medium text-accent underline-offset-4 transition-colors hover:text-accent-hover hover:underline"
            >
              Or call +60 17-9656504
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
