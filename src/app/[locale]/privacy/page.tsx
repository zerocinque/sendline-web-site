import type { Metadata } from "next";
import { useTranslations } from "next-intl";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "sendline.it"}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "it" ? "Informativa sulla Privacy" : "Privacy Policy";
  const description =
    locale === "it"
      ? "Informativa sulla privacy di SendLine ai sensi del GDPR. Come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali."
      : "SendLine privacy policy under GDPR. How we collect, use, and protect your personal data.";

  return {
    title,
    description,
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}/privacy`,
      languages: {
        it: `${BASE_URL}/it/privacy`,
        en: `${BASE_URL}/en/privacy`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/privacy`,
    },
  };
}

export default function PrivacyPage() {
  const t = useTranslations("privacy");

  return (
    <section className="relative min-h-screen pt-32 pb-24">
      <div className="relative mx-auto max-w-3xl px-6">
        <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mb-12 text-sm text-muted">
          {t("lastUpdated")}
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-gray-300">
          {/* 1. Titolare */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">
              {t("controller.title")}
            </h2>
            <p className="whitespace-pre-line">{t("controller.content")}</p>
          </div>

          {/* 2. Dati raccolti */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">
              {t("dataCollected.title")}
            </h2>
            <p>{t("dataCollected.content")}</p>
          </div>

          {/* 3. Finalità */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">
              {t("purposes.title")}
            </h2>
            <p className="whitespace-pre-line">{t("purposes.content")}</p>
          </div>

          {/* 4. Base giuridica */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">
              {t("legalBasis.title")}
            </h2>
            <p className="whitespace-pre-line">{t("legalBasis.content")}</p>
          </div>

          {/* 5. Conservazione */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">
              {t("retention.title")}
            </h2>
            <p>{t("retention.content")}</p>
          </div>

          {/* 6. Condivisione */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">
              {t("sharing.title")}
            </h2>
            <p className="whitespace-pre-line">{t("sharing.content")}</p>
          </div>

          {/* 7. Diritti */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">
              {t("rights.title")}
            </h2>
            <p className="whitespace-pre-line">{t("rights.content")}</p>
          </div>

          {/* 8. Cookie */}
          <div id="cookies">
            <h2 className="mb-3 text-lg font-semibold text-white">
              {t("cookies.title")}
            </h2>
            <p className="whitespace-pre-line">{t("cookies.content")}</p>
          </div>

          {/* 9. Modifiche */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">
              {t("changes.title")}
            </h2>
            <p>{t("changes.content")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
