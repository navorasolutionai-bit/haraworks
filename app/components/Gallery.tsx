"use client";

import { useMemo, useState } from "react";
import Section from "./shared/Section";
import Reveal from "./shared/Reveal";
import InstagramEmbed from "./InstagramEmbed";
import {
  POSTS,
  FILTER_CATEGORIES,
  type FilterCategory,
} from "@/lib/instagram-posts";

export default function Gallery() {
  const [active, setActive] = useState<FilterCategory>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POSTS.filter((post) => {
      const matchesCategory =
        active === "All"
          ? true
          : active === "Collaborations"
            ? Boolean(post.collab)
            : post.category === active;

      const matchesQuery =
        q === "" ||
        [post.title, post.location, post.style, post.collab, post.category]
          .filter(Boolean)
          .some((field) => field!.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    }).sort((a, b) => b.sortDate.localeCompare(a.sortDate));
  }, [active, query]);

  return (
    <Section id="gallery">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Portfolio gallery
        </p>
        <h2 className="mt-4 font-display text-[clamp(1.875rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-ink">
          Straight from our Instagram.
        </h2>
        <p className="mt-4 text-[1.0625rem] leading-[1.6] text-muted">
          Every project, embedded live — videos play and carousels swipe right
          here. Filter by type or search for a project.
        </p>
      </Reveal>

      {/* Controls */}
      <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {FILTER_CATEGORIES.map((category) => {
            const isActive = active === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={isActive}
                className={`min-h-[40px] rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "border-accent bg-accent text-white"
                    : "border-line bg-surface text-muted hover:border-accent/40 hover:text-ink"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <label className="relative lg:w-72">
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects…"
            className="w-full rounded-lg border border-line bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </label>
      </div>

      {/* Masonry grid */}
      {filtered.length > 0 ? (
        <div className="mt-10 gap-6 [column-fill:_balance] sm:columns-2 lg:columns-3">
          {filtered.map((post) => (
            <div key={post.id} className="mb-6 break-inside-avoid">
              <InstagramEmbed url={post.url} />
              <div className="mt-3 px-1">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-base font-semibold tracking-tight text-ink">
                    {post.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                    {post.type}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {post.category}
                  {post.location ? ` · ${post.location}` : ""} · {post.date}
                </p>
                {post.collab && (
                  <p className="mt-1 text-sm text-muted">
                    With{" "}
                    <span className="text-ink">{post.collab}</span>
                  </p>
                )}
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  View on Instagram →
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-12 text-center text-muted">
          No projects match that search.
        </p>
      )}
    </Section>
  );
}
