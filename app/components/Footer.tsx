import Link from "next/link";

const QUICK_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  "Residential Design",
  "Commercial Spaces",
  "Sustainable Design",
  "Design Consultation",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="text-base font-semibold tracking-tight text-ink">
              hara<span className="text-accent">works</span>
            </p>
            <p className="mt-3 max-w-[34ch] text-sm leading-[1.6] text-muted">
              An interior design studio shaping calm, durable spaces for homes
              and workplaces.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer" className="md:col-span-2">
            <h3 className="text-sm font-semibold text-ink">Explore</h3>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-ink">Services</h3>
            <ul className="mt-4 space-y-3">
              {SERVICE_LINKS.map((label) => (
                <li key={label}>
                  <Link
                    href="#services"
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-ink">Contact</h3>
            {/* TODO: replace with real contact details and profiles */}
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a
                  href="mailto:hello@haraworks.com"
                  className="transition-colors hover:text-ink"
                >
                  hello@haraworks.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+13128471928"
                  className="transition-colors hover:text-ink"
                >
                  +1 (312) 847-1928
                </a>
              </li>
              <li className="flex gap-4 pt-1">
                <a
                  href="https://instagram.com"
                  className="transition-colors hover:text-ink"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  className="transition-colors hover:text-ink"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {year} haraworks. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
