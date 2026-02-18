"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative min-h-screen pt-32 pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/3 top-20 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left column - Info */}
          <div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              {t("title1")}
              <br />
              <span className="text-primary">{t("title2")}</span>
            </h1>
            <p className="mb-12 max-w-md text-base text-muted sm:text-lg">
              {t("description")}
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-surface">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs tracking-widest text-muted">
                    {t("directChannel")}
                  </p>
                  <a
                    href="mailto:luigi@sendline.it"
                    className="text-lg font-medium text-white transition-colors hover:text-primary"
                  >
                    {t("email")}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-surface">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs tracking-widest text-muted">
                    {t("phone")}
                  </p>
                  <a
                    href={`tel:${t("phoneValue")}`}
                    className="text-lg font-medium text-white transition-colors hover:text-primary"
                  >
                    {t("phoneValue")}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-surface">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs tracking-widest text-muted">
                    {t("location")}
                  </p>
                  <p className="text-lg font-medium text-white">
                    {t("locationValue1")}
                  </p>                  
                  <p className="text-lg font-medium text-white">
                    {t("locationValue2")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <p className="mb-4 font-mono text-xs tracking-widest text-muted">
                {t("networkUplinks")}
              </p>
              <div className="flex gap-4">
                {[
                  {
                    href: "https://github.com/zerocinque",
                    label: "GitHub",
                    icon: (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    href: "https://www.linkedin.com/in/luigi-bottasso/",
                    label: "LinkedIn",
                    icon: (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-primary/30 hover:text-white"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <h2 className="mb-8 font-mono text-lg font-bold tracking-wider text-white">
                <span className="text-primary">{'//'}</span> {t("form.title").replace("// ", "")}
              </h2>

              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder={t("form.name")}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border-b border-border bg-transparent px-0 py-3 text-sm text-white placeholder-muted outline-none transition-colors focus:border-primary"
                  />
                  <input
                    type="email"
                    placeholder={t("form.email")}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border-b border-border bg-transparent px-0 py-3 text-sm text-white placeholder-muted outline-none transition-colors focus:border-primary"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full appearance-none border-b border-border bg-transparent px-0 py-3 text-sm text-muted outline-none transition-colors focus:border-primary [&:has(option:checked:not([value='']))]:text-white"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right center",
                    }}
                  >
                    <option value="" className="bg-surface">
                      {t("form.projectType")}
                    </option>
                    <option value="whiteLabel" className="bg-surface text-white">
                      {t("form.projectTypes.whiteLabel")}
                    </option>
                    <option value="ai" className="bg-surface text-white">
                      {t("form.projectTypes.ai")}
                    </option>
                    <option value="iot" className="bg-surface text-white">
                      {t("form.projectTypes.iot")}
                    </option>
                    <option value="bi" className="bg-surface text-white">
                      {t("form.projectTypes.bi")}
                    </option>
                    <option value="other" className="bg-surface text-white">
                      {t("form.projectTypes.other")}
                    </option>
                  </select>

                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full appearance-none border-b border-border bg-transparent px-0 py-3 text-sm text-muted outline-none transition-colors focus:border-primary [&:has(option:checked:not([value='']))]:text-white"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right center",
                    }}
                  >
                    <option value="" className="bg-surface">
                      {t("form.budget")}
                    </option>
                    <option value="small" className="bg-surface text-white">
                      {t("form.budgets.small")}
                    </option>
                    <option value="medium" className="bg-surface text-white">
                      {t("form.budgets.medium")}
                    </option>
                    <option value="large" className="bg-surface text-white">
                      {t("form.budgets.large")}
                    </option>
                    <option value="enterprise" className="bg-surface text-white">
                      {t("form.budgets.enterprise")}
                    </option>
                  </select>
                </div>

                <textarea
                  placeholder={t("form.message")}
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none border-b border-border bg-transparent px-0 py-3 text-sm text-white placeholder-muted outline-none transition-colors focus:border-primary"
                />
              </div>

              <div className="mt-8 flex items-center justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 font-mono text-sm font-medium text-white transition-colors hover:bg-primary-hover"
                >
                  {t("form.submit")} ▶
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
