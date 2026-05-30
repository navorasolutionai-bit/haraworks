import Reveal from "./shared/Reveal";

export default function CTA() {
  return (
    <section className="bg-canvas px-6 py-20 sm:px-8 sm:py-24 lg:py-32">
      <Reveal className="mx-auto w-full max-w-5xl">
        <div className="overflow-hidden rounded-ultra bg-ink px-8 py-16 text-center sm:px-14 sm:py-20">
          <h2 className="mx-auto max-w-[18ch] font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.025em] text-[#f5f5f7]">
            Have a space in mind?
          </h2>
          <p className="mx-auto mt-5 max-w-[48ch] text-[1.0625rem] leading-[1.6] text-[rgba(245,245,247,0.55)]">
            Tell us about your project and we&apos;ll get back to you with a free
            consultation and a no-obligation quotation.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-[44px] items-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:scale-[1.04] hover:opacity-90"
            >
              Request a free consultation
            </a>
            <a
              href="tel:+60179656504"
              className="text-sm font-medium text-[rgba(245,245,247,0.55)] underline-offset-4 transition-colors hover:text-[#f5f5f7] hover:underline"
            >
              Or call +60 17-9656504
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
