import { useTranslations } from "next-intl";

const steps = [
  {
    key: "listen" as const,
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l.07.209a1 1 0 00.95.69h.22a1 1 0 01.592 1.81l-.178.129" />
      </svg>
    ),
  },
  {
    key: "proposal" as const,
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    key: "develop" as const,
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    key: "deploy" as const,
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
  },
];

export default function HowIWork() {
  const t = useTranslations("howIWork");

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="mb-4 inline-block font-mono text-xs tracking-widest text-primary">
          {t("badge")}
        </span>
        <h2 className="mb-16 text-3xl font-bold text-white sm:text-4xl">
          {t("title")}
        </h2>

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.key} className="group relative">
              {/* Connector line (hidden on last item and on mobile) */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-8 translate-x-full bg-border lg:block" />
              )}

              <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/30">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-2xl font-bold text-primary/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    {step.icon}
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {t(`${step.key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {t(`${step.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
