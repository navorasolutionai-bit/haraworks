import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** removes the default horizontal max-width container */
  bleed?: boolean;
};

export default function Section({
  id,
  children,
  className = "",
  bleed = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-4 py-20 sm:px-6 sm:py-24 lg:py-32 ${className}`}
    >
      {bleed ? (
        children
      ) : (
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      )}
    </section>
  );
}
