"use client";

import { useTranslations } from "next-intl";
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiDotnet,
  SiPython,
  SiPostgresql,
  SiCloudflare,
  SiDocker,
  SiGithubactions,
  SiMqtt,
  SiVuedotjs,
  SiNodedotjs,
  SiRedis,
  SiMongodb,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { IoRadio } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";

const techStack = {
  frontend: [
    { name: "React / Next.js", icon: <SiReact /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Vuejs", icon: <SiVuedotjs /> },
  ],
  backend: [
    { name: ".Net Core Framework", icon: <SiDotnet /> },
    { name: "Nodejs / express", icon: <SiNodedotjs /> },
    { name: "Python / FastAPI", icon: <SiPython /> },
    { name: "PostgreSQL / MySQL / SQL server", icon: <SiPostgresql /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "MongoDB / Qdrant", icon: <SiMongodb /> },
  ],
  devops: [
    { name: "Cloudflare", icon: <SiCloudflare /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "CI/CD Pipelines", icon: <SiGithubactions /> },
    { name: "Servers on prem", icon: <FaServer /> },
  ],
  iot: [
    { name: "MQTT Brokers", icon: <SiMqtt /> },
    { name: "LoRaWAN", icon: <IoRadio /> },
    { name: "Monitoring", icon: <MdDashboardCustomize /> },
  ],
};

const stackCategories = ["frontend", "backend", "devops", "iot"] as const;

export default function TechnologyStack() {
  const t = useTranslations("services");

  return (
    <section className="bg-surface/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-2 text-3xl font-bold text-white">
          {t("techStack.title")}
        </h2>
        <p className="mb-16 text-muted">{t("techStack.subtitle")}</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stackCategories.map((key) => (
            <div key={key}>
              <h4 className="mb-6 font-mono text-xs tracking-widest text-primary">
                {t(`techStack.${key}`)}
              </h4>
              <ul className="space-y-4">
                {techStack[key].map((tech) => (
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
  );
}
