"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const faqKeys = [
  "cost",
  "timeline",
  "remote",
  "changes",
  "examples",
  "satisfaction",
] as const;

export default function FAQ() {
  const t = useTranslations("faq");
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq"className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <span className="mb-4 inline-block font-mono text-xs tracking-widest text-primary">
          {t("badge")}
        </span>
        <h2 className="mb-16 text-3xl font-bold text-white sm:text-4xl">
          {t("title")}
        </h2>

        <div className="space-y-3">
          {faqKeys.map((key, i) => (
            <div
              key={key}
              className="rounded-xl border border-border bg-surface transition-colors hover:border-primary/30"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 text-sm font-semibold text-white sm:text-base">
                  {t(`${key}.question`)}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-200 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                    {t(`${key}.answer`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
