import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">
        We couldn&apos;t find that page.
      </h1>
      <p className="mt-3 max-w-[42ch] text-base text-muted">
        The link may be old or the page may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-[44px] items-center rounded-btn bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.05] hover:bg-accent-hover"
      >
        Back home
      </Link>
    </div>
  );
}
