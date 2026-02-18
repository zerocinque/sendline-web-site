"use client";

import { useTranslations } from "next-intl";

export default function ServicesHero() {
  const t = useTranslations("services");

  return (
    <section className="relative pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          {t("badge")}
        </span>
        <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          <span className="whitespace-nowrap">{t("title1")}{" "}<span className="text-primary">{t("title2")}</span>.</span>
          <br />
          <span className="whitespace-nowrap"><span className="text-primary">{t("title3")}</span>{" "}{t("title4")}.</span>
        </h1>
        <p className="max-w-2xl text-base text-muted sm:text-lg">
          {t("description")}
        </p>
      </div>
    </section>
  );
}
