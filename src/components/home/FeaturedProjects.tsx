import { useTranslations } from "next-intl";

export default function FeaturedProjects() {
  const t = useTranslations("projects");

  const projects = [
    {
      key: "factory",
      gradient: "from-blue-600/20 to-cyan-600/10",
    },
    {
      key: "supplychain",
      gradient: "from-purple-600/20 to-blue-600/10",
    },
    {
      key: "crm",
      gradient: "from-emerald-600/20 to-blue-600/10",
    },
    {
      key: "stealth",
      gradient: "from-slate-600/20 to-slate-800/10",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="mb-4 inline-block font-mono text-xs tracking-widest text-primary">
              {t("badge")}
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t("title")}
            </h2>
          </div>
          <button className="hidden text-sm text-muted transition-colors hover:text-primary sm:inline-flex items-center gap-2">
            {t("viewAll")}
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

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const tags = t(`items.${project.key}.tags`).split(",");
            return (
              <div
                key={project.key}
                className="group overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-primary/30"
              >
                <div
                  className={`flex h-48 items-center justify-center bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/5 backdrop-blur">
                    <svg
                      className="h-8 w-8 text-white/40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {t(`items.${project.key}.title`)}
                  </h3>
                  <p className="mb-4 text-sm text-muted">
                    {t(`items.${project.key}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-surface-light px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
