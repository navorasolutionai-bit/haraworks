"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { label: "Work", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Styles", href: "#styles" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

function Wordmark() {
  return (
    <Link
      href="#top"
      aria-label="haraworks home"
      className="text-base font-semibold tracking-tight text-ink"
    >
      hara<span className="text-accent">works</span>
    </Link>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
        <nav
          aria-label="Primary"
          className={`flex w-full max-w-3xl items-center justify-between gap-4 rounded-full px-5 py-3 transition-all duration-300 ${
            scrolled
              ? "bg-canvas/80 shadow-soft backdrop-blur-md"
              : "bg-canvas/60 backdrop-blur-sm"
          }`}
        >
          <Wordmark />

          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link
              href="#contact"
              className="inline-flex min-h-[40px] items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.05] hover:bg-accent-hover"
            >
              Start a project
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/5 md:hidden"
          >
            <span className="sr-only">Open menu</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-canvas md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <div className="flex items-center justify-between px-6 pt-7">
              <Wordmark />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/5"
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav aria-label="Mobile" className="flex flex-col gap-2 px-6 pt-12">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 + i * 0.08, ease: EASE }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-4xl font-semibold tracking-tight text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 + LINKS.length * 0.08, ease: EASE }}
                className="pt-8"
              >
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-btn bg-accent px-6 py-3 text-base font-medium text-white"
                >
                  Start a project
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
