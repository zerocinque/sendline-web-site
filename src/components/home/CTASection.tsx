"use client";

import { useTranslations } from "next-intl";

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="relative overflow-hidden bg-surface py-24" id="contact">
      {/* Glow effect */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 font-mono text-sm text-primary">{t("badge")}</h2>
        <h3 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          {t("title")}
        </h3>
        <p className="mb-10 text-lg text-muted">{t("description")}</p>

        <form
          className="rounded-lg border border-border bg-black/50 p-8 text-left backdrop-blur-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-mono text-xs text-muted">
                {t("nameLabel")}
              </label>
              <input
                type="text"
                placeholder={t("namePlaceholder")}
                className="w-full rounded border border-border bg-background p-3 font-mono text-white placeholder-gray-700 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-2 block font-mono text-xs text-muted">
                {t("emailLabel")}
              </label>
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="w-full rounded border border-border bg-background p-3 font-mono text-white placeholder-gray-700 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="mb-2 block font-mono text-xs text-muted">
              {t("messageLabel")}
            </label>
            <textarea
              placeholder={t("messagePlaceholder")}
              className="h-32 w-full rounded border border-border bg-background p-3 font-mono text-white placeholder-gray-700 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded bg-primary py-4 font-mono text-white transition-colors hover:bg-primary-hover"
          >
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
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            {t("button")}
          </button>
        </form>
      </div>
    </section>
  );
}
