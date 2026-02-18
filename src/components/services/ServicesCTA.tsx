"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ServicesCTA() {
  const t = useTranslations("services");

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          {t("cta.title")}
        </h2>
        <p className="mb-10 text-muted">{t("cta.description")}</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
          >
            {t("cta.scheduleBtn")}
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            {t("cta.portfolioBtn")}
          </Link>
        </div>
      </div>
    </section>
  );
}
