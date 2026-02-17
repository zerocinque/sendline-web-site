"use client";

import {
  SiPython,
  SiDotnet,
  SiReact,
  SiDocker,
  SiNextdotjs,
  SiPrisma,
  SiGithub,
  SiMqtt,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGrafana,
  SiN8N,
  SiRedis,
  SiNodedotjs,
  SiSqlite,
  SiQlik,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import LogoLoop from "../LogoLoop";

const techLogos = [
  { node: <SiPython />, title: "Python" },
  { node: <SiDotnet />, title: "DotNet" },
  { node: <SiReact />, title: "React" },
  { node: <SiDocker />, title: "Docker" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiPrisma />, title: "Prisma" },
  { node: <SiGithub />, title: "GitHub" },
  { node: <SiMqtt />, title: "MQTT" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiPostgresql />, title: "Postgresql" },
  { node: <SiMongodb />, title: "Mongodb" },
  { node: <SiGraphql />, title: "Graphql" },
  { node: <SiGrafana />, title: "Grafana" },
  { node: <SiN8N />, title: "n8n" },
  { node: <SiRedis />, title: "Redis" },
  { node: <SiNodedotjs />, title: "Nodejs" },
  { node: <SiSqlite />, title: "SQLite" },
  { node: <DiMsqlServer />, title: "MSSQL Server" },
  { node: <SiQlik />, title: "Qlik" },
];

export default function TechLogos() {
  return (
    <section className="border-y border-border bg-surface/50 py-6">
      <LogoLoop
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={24}
        gap={48}
        pauseOnHover
        fadeOut
        scaleOnHover
      />
    </section>
  );
}
