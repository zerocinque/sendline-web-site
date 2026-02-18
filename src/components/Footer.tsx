import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Image src="/Triangle_gradient_white_gray_TBG.svg" alt="SendLine logo" width={20} height={16} />
              <span className="text-lg font-bold tracking-wider text-white">
                SendLine
              </span>
            </div>
            <p className="max-w-sm text-sm text-muted">{t("description")}</p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#projects"
                  className="text-sm text-foreground transition-colors hover:text-primary"
                >
                  {nav("projects")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-foreground transition-colors hover:text-primary"
                >
                  {nav("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-foreground transition-colors hover:text-primary"
                >
                  {nav("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
              {t("connect")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/zerocinque"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground transition-colors hover:text-primary"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/luigi-bottasso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground transition-colors hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; 2026 Bottasso Luigi di Luigi Bottasso. {t("rights")}
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-muted transition-colors hover:text-foreground"
            >
              {t("privacy")}
            </Link>
            <Link
              href="#"
              className="text-xs text-muted transition-colors hover:text-foreground"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
