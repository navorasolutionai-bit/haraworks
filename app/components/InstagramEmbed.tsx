"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

const SCRIPT_SRC = "https://www.instagram.com/embed.js";
let scriptPromise: Promise<void> | null = null;

/** Loads Instagram's embed.js exactly once and resolves when ready. */
function ensureEmbedScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.instgrm) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`,
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      if (window.instgrm) resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });

  return scriptPromise;
}

type InstagramEmbedProps = {
  url: string;
  /** Optional eyebrow/label shown above the embed */
  label?: string;
  title?: string;
  caption?: string;
  className?: string;
};

export default function InstagramEmbed({
  url,
  label,
  title,
  caption,
  className = "",
}: InstagramEmbedProps) {
  const ref = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    let active = true;
    ensureEmbedScript().then(() => {
      if (active && window.instgrm) {
        window.instgrm.Embeds.process();
      }
    });
    return () => {
      active = false;
    };
  }, [url]);

  return (
    <div className={`w-full ${className}`}>
      {(label || title || caption) && (
        <div className="mb-3">
          {label && (
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
              {label}
            </p>
          )}
          {title && (
            <h3 className="mt-1 font-display text-lg font-semibold tracking-tight text-ink">
              {title}
            </h3>
          )}
          {caption && <p className="mt-1 text-sm text-muted">{caption}</p>}
        </div>
      )}

      <div className="overflow-hidden rounded-card border border-line bg-surface shadow-soft">
        <blockquote
          ref={ref}
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: 0,
            margin: 0,
            padding: 0,
            width: "100%",
            minWidth: "100%",
          }}
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[280px] items-center justify-center p-6 text-sm font-medium text-accent"
          >
            View this post on Instagram
          </a>
        </blockquote>
      </div>
    </div>
  );
}
