"use client";

import { useMessages, useTranslations } from "next-intl";
import { useState } from "react";
import TextType from "@/components/TextType";

export default function ServicesHero() {
  const t = useTranslations("services");
  const messages = useMessages();
  const titles = (messages as Record<string, Record<string, Array<{ line1: string; line2: string }>>>).services.titles;

  const [title] = useState(() => titles[Math.floor(Math.random() * titles.length)]);
  const line2Delay = (title.line1.length + 1) * 50;

  const longestTitle = titles.reduce((longest, t) => {
    const currentLen = t.line1.length + t.line2.length;
    const longestLen = longest.line1.length + longest.line2.length;
    return currentLen > longestLen ? t : longest;
  }, titles[0]);

  return (
    <section className="relative pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          {t("badge")}
        </span>

        <div className="relative mb-6 mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
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

        <p className="max-w-2xl text-base text-muted sm:text-lg">
          {t("description")}
        </p>
      </div>
    </section>
  );
}
