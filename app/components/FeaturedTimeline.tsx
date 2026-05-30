/*
 * BrandStatement — full-width black panel, single bold white statement.
 * The one high-contrast dark section on the page.
 */
export default function FeaturedTimeline() {
  return (
    <section
      aria-label="Brand statement"
      className="w-full bg-ink px-6 py-24 sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(245,245,247,0.4)]">
          Haraworks · Kuala Lumpur
        </p>
        <h2 className="mt-8 max-w-4xl font-display text-[clamp(2.25rem,5.5vw,5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-[#f5f5f7]">
          One studio. End to end —
          <br className="hidden sm:block" /> from the first sketch
          <br className="hidden sm:block" /> to the final handover.
        </h2>
        <p className="mt-8 max-w-[54ch] text-[1.0625rem] leading-[1.65] text-[rgba(245,245,247,0.55)]">
          Design, materials, contractors, and quality checks — all managed
          in-house. One point of contact, a clear timeline, and a fixed budget
          from day one.
        </p>

        {/* Stats row — white on black */}
        <dl className="mt-14 flex flex-wrap gap-x-14 gap-y-8 border-t border-[rgba(255,255,255,0.1)] pt-10">
          {[
            { value: "8 wks", label: "Avg. project duration" },
            { value: "15+", label: "Projects completed" },
            { value: "100%", label: "In-house management" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-[2rem] font-bold tracking-[-0.03em] text-[#f5f5f7]">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-[rgba(245,245,247,0.45)]">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
