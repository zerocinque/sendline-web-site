"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useState } from "react";

export default function CTASection() {
  const t = useTranslations("cta");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const recaptchaToken = await new Promise<string>((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, { action: "contact" })
            .then(resolve)
            .catch(reject);
        });
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          recaptchaToken,
          privacyAccepted: true,
        }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

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
          onSubmit={handleSubmit}
        >
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-mono text-xs text-muted">
                {t("nameLabel")}
              </label>
              <input
                type="text"
                name="name"
                required
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
                name="email"
                required
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
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
              name="message"
              required
              placeholder={t("messagePlaceholder")}
              className="h-32 w-full rounded border border-border bg-background p-3 font-mono text-white placeholder-gray-700 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-primary"
              />
              <span className="text-xs text-muted leading-relaxed">
                {t.rich("privacy", {
                  privacyLink: (chunks) => (
                    <a
                      href={`/${locale}/privacy`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline hover:text-primary-hover"
                    >
                      {chunks}
                    </a>
                  ),
                })}
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-full items-center justify-center gap-2 rounded bg-primary py-4 font-mono text-white transition-colors hover:bg-primary-hover disabled:opacity-50"
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
            {status === "loading" ? t("sending") : t("button")}
          </button>

          {status === "success" && (
            <p className="mt-4 text-center font-mono text-sm text-green-400">
              {t("success")}
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-center font-mono text-sm text-red-400">
              {t("error")}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
