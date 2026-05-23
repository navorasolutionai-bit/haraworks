"use client";

import { useState } from "react";
import Reveal from "./shared/Reveal";

const DETAILS = [
  { label: "Email", value: "haraworks.kl@gmail.com", href: "mailto:haraworks.kl@gmail.com" },
  { label: "Phone", value: "+60 17-9656504", href: "tel:+60179656504" },
  { label: "Location", value: "Kuala Lumpur, Malaysia" },
  {
    label: "Instagram",
    value: "@haraworks.kl",
    href: "https://www.instagram.com/haraworks.kl/",
  },
];

const inputClass =
  "w-full rounded-lg border border-line bg-canvas px-4 py-3 text-base text-ink placeholder:text-muted focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Project enquiry${form.name ? ` — ${form.name}` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:haraworks.kl@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — intro + details */}
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Get in touch
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.875rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Request a free consultation.
            </h2>
            <p className="mt-4 max-w-[52ch] text-[1.0625rem] leading-[1.6] text-muted">
              Tell us about your space and what you have in mind. We&apos;ll
              reply with a free consultation and a no-obligation quotation.
            </p>

            <dl className="mt-10 space-y-5">
              {DETAILS.map((item) => (
                <div key={item.label}>
                  <dt className="text-sm font-semibold text-ink">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-base text-muted">
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-ultra border border-line bg-surface p-7 shadow-soft sm:p-9"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-ink"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-ink"
                    >
                      Phone <span className="text-muted">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+60 ..."
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about the space, location, and what you'd like to achieve."
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-btn bg-accent px-6 py-3 text-sm font-medium text-white shadow-soft transition-all duration-200 hover:scale-[1.02] hover:bg-accent-hover sm:w-auto"
                >
                  Send enquiry
                </button>
                <p className="text-xs text-muted">
                  This opens your email app, pre-filled and ready to send.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
