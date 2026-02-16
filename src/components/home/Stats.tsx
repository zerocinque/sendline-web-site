import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations("stats");

  const stats = [
    { value: "50+", label: t("projects") },
    { value: "99%", label: t("uptime") },
    { value: "10M+", label: t("datapoints") },
    { value: "5yrs", label: t("experience") },
  ];

  return (
    <section className="border-y border-border bg-surface/50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-2 text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
