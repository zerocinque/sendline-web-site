"use client";

import { useMessages, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import TextType from "@/components/TextType";

export default function HeroSection() {
  const t = useTranslations("hero");
  const messages = useMessages();
  const titles = (messages as Record<string, Record<string, Array<{ line1: string; line2: string }>>>).hero.titles;

  const [title] = useState(() => titles[Math.floor(Math.random() * titles.length)]);
  const line2Delay = (title.line1.length + 1) * 50;

  // Use the longest title for the invisible placeholder to always reserve enough space
  const longestTitle = titles.reduce((longest, t) => {
    const currentLen = t.line1.length + t.line2.length;
    const longestLen = longest.line1.length + longest.line2.length;
    return currentLen > longestLen ? t : longest;
  }, titles[0]);

  return (
    <section className="relative min-h-screen overflow-hidden pt-10">
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-8">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            {t("badge")}
          </span>

          <div className="relative mb-6 mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {/* Invisible placeholder to reserve space */}
            <span className="invisible" aria-hidden="true">
              {longestTitle.line1}
              <br />
              {longestTitle.line2}
            </span>
            {/* Typed text overlaid on top */}
            <span className="absolute inset-0" suppressHydrationWarning>
              <TextType
                text={title.line1}
                as="span"
                typingSpeed={50}
                loop={false}
                showCursor={false}
                cursorCharacter="_"
              />
              <br />
              <TextType
                text={title.line2}
                as="span"
                className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
                typingSpeed={50}
                initialDelay={line2Delay}
                loop={false}
                cursorCharacter="_"
                cursorClassName="animate-pulse text-primary"
              />
            </span>
          </div>

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
