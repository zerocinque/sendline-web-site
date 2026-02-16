import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 md:py-32 lg:grid-cols-12 lg:py-40">
        <div className="lg:col-span-8">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            {t("badge")}
          </span>

          <h1 className="mb-6 mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {t("title1")}
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              {t("title2")}
            </span>
            <br />
            {t("title3")}
          </h1>

          <p className="mb-10 max-w-2xl border-l-2 border-primary/50 pl-6 font-mono text-base leading-relaxed text-muted sm:text-lg">
            {t("description")}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 font-mono text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              {t("viewPortfolio")}
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
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-8 py-4 font-mono text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {t("contactUs")}
            </Link>
          </div>
        </div>

        {/* Decorative Terminal Graphic */}
        <div className="hidden lg:col-span-4 lg:block">
          <div className="relative rounded-lg border border-gray-800 bg-surface p-6 shadow-2xl">
            <div className="mb-4 flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-2 font-mono text-xs text-gray-400">
              <p>&gt; init sendline_core</p>
              <p className="text-green-500">✔ Core systems loaded...</p>
              <p>&gt; loading modules:</p>
              <p className="pl-4 text-primary">- ai_automation.py</p>
              <p className="pl-4 text-primary">- iot_protocol_mqtt.js</p>
              <p className="pl-4 text-primary">- white_label_engine.cs</p>
              <p>
                &gt; status:{" "}
                <span className="font-bold text-white">READY</span>
                <span className="animate-pulse">_</span>
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary to-purple-600 opacity-20 blur-xl" />
          </div>
        </div>
      </div>

      {/* Decorative grid lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
}
