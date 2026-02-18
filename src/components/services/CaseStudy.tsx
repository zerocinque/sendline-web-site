"use client";

import { useTranslations } from "next-intl";

export default function CaseStudy() {
  const t = useTranslations("services");

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-light">
          <div className="flex flex-col items-center justify-center px-8 py-20 text-center">
            <span className="mb-4 font-mono text-xs tracking-widest text-primary">
              {t("caseStudy.badge")}
            </span>
            <h3 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              {t("caseStudy.title")}
            </h3>
            <button className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary-hover">
              {t("caseStudy.link")}
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
