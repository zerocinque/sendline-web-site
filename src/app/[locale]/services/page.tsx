"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function ServiceCard({
  title,
  description,
  features,
  icon,
}: {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-8 transition-colors hover:border-primary/30">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-muted">{description}</p>
      <ul className="space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted">
            <CheckIcon />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

const techStack = {
  frontend: [
    { name: "React / Next.js", icon: "⚛" },
    { name: "TailwindCSS", icon: "🎨" },
    { name: "TypeScript", icon: "📘" },
  ],
  backend: [
    { name: "Node.js / Express", icon: "🟢" },
    { name: "Python / FastAPI", icon: "🐍" },
    { name: "PostgreSQL / Redis", icon: "🗄" },
  ],
  devops: [
    { name: "AWS Services", icon: "☁" },
    { name: "Docker & K8s", icon: "🐳" },
    { name: "CI/CD Pipelines", icon: "🔄" },
  ],
  iot: [
    { name: "Raspberry Pi / Arduino", icon: "🔧" },
    { name: "MQTT Brokers", icon: "📡" },
    { name: "LoRaWAN", icon: "📶" },
  ],
};

export default function ServicesPage() {
  const t = useTranslations("services");

  const services = [
    {
      key: "whiteLabel",
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      key: "ai",
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      key: "bi",
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      key: "iot",
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
        </svg>
      ),
    },
  ];

  const stackCategories = [
    { key: "frontend" as const, label: t("techStack.frontend") },
    { key: "backend" as const, label: t("techStack.backend") },
    { key: "devops" as const, label: t("techStack.devops") },
    { key: "iot" as const, label: t("techStack.iot") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="mb-6 inline-block font-mono text-xs tracking-widest text-primary">
            {t("badge")}
          </span>
          <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            {t("title1")}{" "}
            <span className="text-primary">{t("title2")}</span>.
            <br />
            {t("title3")}
          </h1>
          <p className="max-w-2xl text-base text-muted sm:text-lg">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-2 text-3xl font-bold text-white">{t("coreTitle")}</h2>
          <p className="mb-16 text-muted">{t("coreSubtitle")}</p>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard
                key={service.key}
                title={t(`${service.key}.title`)}
                description={t(`${service.key}.description`)}
                features={t(`${service.key}.features`).split(",")}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
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

      {/* Technology Stack */}
      <section className="bg-surface/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-2 text-3xl font-bold text-white">
            {t("techStack.title")}
          </h2>
          <p className="mb-16 text-muted">{t("techStack.subtitle")}</p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stackCategories.map((cat) => (
              <div key={cat.key}>
                <h4 className="mb-6 font-mono text-xs tracking-widest text-primary">
                  {cat.label}
                </h4>
                <ul className="space-y-4">
                  {techStack[cat.key].map((tech) => (
                    <li
                      key={tech.name}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-surface-light text-base">
                        {tech.icon}
                      </span>
                      {tech.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
    </>
  );
}
