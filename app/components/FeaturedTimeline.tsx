import Section from "./shared/Section";
import Reveal from "./shared/Reveal";
import InstagramEmbed from "./InstagramEmbed";
import { IT_OFFICE_TIMELINE } from "@/lib/instagram-posts";

const WEEK_LABELS = ["Week 1", "Week 3", "Week 8"];

const STATS = [
  { value: "8 weeks", label: "Start to handover" },
  { value: "Cyberjaya", label: "Tamarind Square" },
  { value: "2023", label: "May – July" },
];

export default function FeaturedTimeline() {
  return (
    <Section id="featured" className="bg-surface">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Featured transformation
        </p>
        <h2 className="mt-4 font-display text-[clamp(1.875rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-ink">
          IT Office — an 8-week renovation.
        </h2>
        <p className="mt-4 text-[1.0625rem] leading-[1.6] text-muted">
          Follow the build from bare site to finished workspace at Tamarind
          Square, Cyberjaya — captured week by week.
        </p>
      </Reveal>

      {/* Stats */}
      <Reveal delay={0.05}>
        <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-canvas px-6 py-6">
              <dt className="font-display text-2xl font-bold tracking-tight text-ink">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* Timeline progress indicator */}
      <Reveal delay={0.1}>
        <div className="mt-14 flex items-center justify-between gap-2" aria-hidden="true">
          {WEEK_LABELS.map((week, i) => (
            <div key={week} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <span className="mt-2 whitespace-nowrap text-xs font-medium uppercase tracking-[0.12em] text-muted">
                  {week}
                </span>
              </div>
              {i < WEEK_LABELS.length - 1 && (
                <span className="mx-2 -mt-6 h-0.5 flex-1 rounded-full bg-accent-soft" />
              )}
            </div>
          ))}
        </div>
      </Reveal>

      {/* Week embeds */}
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {IT_OFFICE_TIMELINE.map((post, i) => (
          <Reveal key={post.id} delay={i * 0.1}>
            <InstagramEmbed
              url={post.url}
              label={WEEK_LABELS[i]}
              title={post.title.replace("IT Office — ", "")}
              caption={`${post.date} · ${post.stats ?? ""}`}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
