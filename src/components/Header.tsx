"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import CardNav, { type CardNavItem } from "./CardNav";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  const locale = pathname.split("/")[1] || "it";

  const navItems: CardNavItem[] = [
    {
      label: t("projects"),
      bgColor: "#1a1a2e",
      textColor: "#ffffff",
      links: [
        {
          label: t("projects"),
          href: `/${locale}#projects`,
          ariaLabel: t("projects"),
        }, {
          label: t("method"),
          href: `/${locale}#method`,
          ariaLabel: t("method"),
        }, {
          label: t("faq"),
          href: `/${locale}#faq`,
          ariaLabel: t("faq"),
        },
      ],
    },
    {
      label: t("services"),
      bgColor: "#16213e",
      textColor: "#ffffff",
      links: [
        {
          label: t("services"),
          href: `/${locale}/services`,
          ariaLabel: t("services"),
        }, {
          label: t("stack"),
          href: `/${locale}/services#stack`,
          ariaLabel: t("stack"),
        },
      ],
    },
    {
      label: t("contact"),
      bgColor: "#0f3460",
      textColor: "#ffffff",
      links: [
        {
          label: t("contact"),
          href: `/${locale}/contact`,
          ariaLabel: t("contact"),
        },
        {
          label: t("whoami"),
          href: `/${locale}#whoami`,
          ariaLabel: t("whoami"),
        },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-0">
      <CardNav
        logo="/Triangle_gradient_white_gray_TBG.svg"
        logoAlt="SendLine logo"
        logoHref={`/${locale}`}
        items={navItems}
        menuColor="#ffffff"
        buttonBgColor="#6d28d9"
        buttonTextColor="#ffffff"
        ctaHref={`/${locale}/contact`}
        extraContent={<LanguageSwitcher />}
        className="backdrop-blur-xs"
      />
    </header>
  );
}
