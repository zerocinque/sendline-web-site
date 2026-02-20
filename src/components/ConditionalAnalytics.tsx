"use client";

import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function ConditionalAnalytics() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    setConsent(localStorage.getItem("cookie-consent") === "accepted");

    function onConsentChange(e: Event) {
      const detail = (e as CustomEvent<string>).detail;
      setConsent(detail === "accepted");
    }

    window.addEventListener("cookie-consent-change", onConsentChange);
    return () => window.removeEventListener("cookie-consent-change", onConsentChange);
  }, []);

  if (!consent) return null;

  return <Analytics />;
}
