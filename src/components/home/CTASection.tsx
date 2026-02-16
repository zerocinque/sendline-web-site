"use client";

import { useTranslations } from "next-intl";

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mb-10 text-muted">{t("description")}</p>
        <form
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder={t("placeholder")}
            className="flex-1 rounded-md border border-border bg-surface px-4 py-3 text-sm text-white placeholder-muted outline-none transition-colors focus:border-primary"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-white transition-colors hover:bg-primary-hover"
          >
            {t("button")}
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
