"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1] || "it";
  const otherLocale = currentLocale === "it" ? "en" : "it";

  const switchLocale = () => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-white"
    >
      <span className={currentLocale === "it" ? "text-white" : ""}>IT</span>
      <span className="text-border">/</span>
      <span className={currentLocale === "en" ? "text-white" : ""}>EN</span>
    </button>
  );
}
