import Link from "next/link";

const QUICK_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  "Residential Design",
  "Commercial & Office Design",
  "Retail & Flagship Stores",
  "Project Management",
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
              Interior design &amp; renovation in Kuala Lumpur — crafting spaces
              for success across the Klang Valley.
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
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a
                  href="mailto:haraworks.kl@gmail.com"
                  className="transition-colors hover:text-ink"
                >
                  haraworks.kl@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+60179656504"
                  className="transition-colors hover:text-ink"
                >
                  +60 17-9656504
                </a>
              </li>
              <li>Kuala Lumpur, Malaysia</li>
              <li className="pt-1">
                <a
                  href="https://www.instagram.com/haraworks.kl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ink"
                >
                  Instagram @haraworks.kl
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
