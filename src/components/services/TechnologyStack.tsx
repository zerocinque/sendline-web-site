"use client";

import { useState, useEffect } from "react";
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
    { name: "Vue.js", icon: <SiVuedotjs /> },
  ],
  backend: [
    { name: ".Net Core", icon: <SiDotnet /> },
    { name: "Node.js / express", icon: <SiNodedotjs /> },
    { name: "Python / FastAPI", icon: <SiPython /> },
    { name: "PostgreSQL / MySQL / SQL Server", icon: <SiPostgresql /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "MongoDB / Qdrant", icon: <SiMongodb /> },
  ],
  devops: [
    { name: "Cloudflare", icon: <SiCloudflare /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "CI/CD Pipelines", icon: <SiGithubactions /> },
    { name: "Server On-Premise", icon: <FaServer /> },
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openIfHash = () => {
      if (window.location.hash === "#stack") {
        setOpen(true);
      }
    };
    openIfHash();
    window.addEventListener("hashchange", openIfHash);
    return () => window.removeEventListener("hashchange", openIfHash);
  }, []);

  return (
    <section id="stack" className="bg-surface/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <button
          onClick={() => setOpen(!open)}
          className="group flex w-full items-center justify-between text-left"
        >
          <div>
            <h2 className="mb-2 text-3xl font-bold text-white">
              {t("techStack.title")}
            </h2>
            <p className="text-muted">{t("techStack.subtitle")}</p>
          </div>
          <svg
            className={`h-6 w-6 shrink-0 text-muted transition-transform duration-300 group-hover:text-primary ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div
          className={`grid transition-all duration-500 ease-in-out ${open ? "mt-16 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
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
        </div>
      </div>
    </section>
  );
}
