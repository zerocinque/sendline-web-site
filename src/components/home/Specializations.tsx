import { useTranslations } from "next-intl";

const icons = {
  ai: (
    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  erp: (
    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  iot: (
    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
    </svg>
  ),
};

export default function Specializations() {
  const t = useTranslations("specializations");

  const items = [
    { key: "ai" as const, icon: icons.ai },
    { key: "erp" as const, icon: icons.erp },
    { key: "iot" as const, icon: icons.iot },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="mb-4 inline-block font-mono text-xs tracking-widest text-primary">
          {t("badge")}
        </span>
        <h2 className="mb-16 text-3xl font-bold text-white sm:text-4xl">
          {t("title")}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.key}
              className="group rounded-xl border border-border bg-surface p-8 transition-colors hover:border-primary/30"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                {item.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                {t(`${item.key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {t(`${item.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
