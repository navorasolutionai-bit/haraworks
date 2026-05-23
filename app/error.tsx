"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error to your monitoring service here.
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-ink">
        Something went sideways.
      </h1>
      <p className="mt-3 max-w-[42ch] text-base text-muted">
        That page hit an unexpected snag. You can try again, or head back home.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-[44px] items-center rounded-btn bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.05] hover:bg-accent-hover"
        >
          Try again
        </button>
        <Link
          href="/"
          className="text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
