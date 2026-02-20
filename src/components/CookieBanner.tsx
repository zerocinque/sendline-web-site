"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CookieBanner() {
  const t = useTranslations("cookieBanner");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function handleChoice(choice: "accepted" | "rejected") {
    localStorage.setItem("cookie-consent", choice);
    setVisible(false);
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: choice }));
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-500">
      <div className="mx-auto max-w-4xl px-4 pb-4">
        <div className="rounded-xl border border-white/10 bg-[#0D0A14]/90 p-5 shadow-2xl backdrop-blur-xl">
          <p className="mb-4 text-sm leading-relaxed text-gray-300">
            {t.rich("message", {
              privacyLink: (chunks) => (
                <Link
                  href="/privacy"
                  className="underline underline-offset-2 text-white hover:text-[#5227FF] transition-colors"
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleChoice("accepted")}
              className="rounded-lg bg-[#5227FF] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#6B3FFF]"
            >
              {t("accept")}
            </button>
            <button
              onClick={() => handleChoice("rejected")}
              className="rounded-lg border border-white/20 px-5 py-2 text-sm font-semibold text-gray-300 transition-colors hover:bg-white/10"
            >
              {t("reject")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
