import Link from "next/link";

const QUICK_LINKS = [
  { label: "Featured", href: "#featured" },
  { label: "Gallery", href: "#gallery" },
  { label: "Styles", href: "#styles" },
  { label: "About", href: "#about" },
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
    <footer className="bg-ink px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="text-base font-semibold tracking-tight text-[#f5f5f7]">
              haraworks
            </p>
            <p className="mt-3 max-w-[34ch] text-sm leading-[1.6] text-[rgba(245,245,247,0.45)]">
              Interior design &amp; renovation in Kuala Lumpur — crafting spaces
              for success across the Klang Valley.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer" className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[rgba(245,245,247,0.35)]">Explore</h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[rgba(245,245,247,0.55)] transition-colors hover:text-[#f5f5f7]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[rgba(245,245,247,0.35)]">Services</h3>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((label) => (
                <li key={label}>
                  <Link
                    href="#services"
                    className="text-sm text-[rgba(245,245,247,0.55)] transition-colors hover:text-[#f5f5f7]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[rgba(245,245,247,0.35)]">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-[rgba(245,245,247,0.55)]">
              <li>
                <a
                  href="mailto:haraworks.kl@gmail.com"
                  className="transition-colors hover:text-[#f5f5f7]"
                >
                  haraworks.kl@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+60179656504"
                  className="transition-colors hover:text-[#f5f5f7]"
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
                  className="transition-colors hover:text-[#f5f5f7]"
                >
                  @haraworks.kl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[rgba(255,255,255,0.08)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[rgba(245,245,247,0.35)]">
            © {year} haraworks. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-[rgba(245,245,247,0.35)] transition-colors hover:text-[#f5f5f7]"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-[rgba(245,245,247,0.35)] transition-colors hover:text-[#f5f5f7]"
            >
              Terms
            </Link>
            <Link
              href="#top"
              className="text-sm font-medium text-[#f5f5f7] underline-offset-4 hover:underline"
            >
              Back to top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
