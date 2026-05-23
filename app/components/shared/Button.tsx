import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn px-6 py-3 text-sm font-medium tracking-tight transition-all duration-200 ease-out will-change-transform hover:scale-[1.05] active:scale-100 focus-visible:outline-2 min-h-[44px]";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-soft hover:bg-accent-hover hover:shadow-lift",
  ghost:
    "bg-surface text-ink border border-line hover:border-accent/40 hover:text-accent",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
