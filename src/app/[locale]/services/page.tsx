import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ServicesHero from "@/components/services/ServicesHero";
import CoreCapabilities from "@/components/services/CoreCapabilities";
// import CaseStudy from "@/components/services/CaseStudy";
import TechnologyStack from "@/components/services/TechnologyStack";
import ServicesCTA from "@/components/services/ServicesCTA";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "sendline.it"}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  const title =
    locale === "it"
      ? "Servizi - Software su misura, AI, IoT e Integrazioni"
      : "Services - Custom Software, AI, IoT & Integrations";
  const description = t("description");

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/services`,
      languages: {
        it: `${BASE_URL}/it/services`,
        en: `${BASE_URL}/en/services`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/services`,
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  const serviceKeys = ["whiteLabel", "ai", "bi", "iot"] as const;
  const servicesJsonLd = serviceKeys.map((key) => ({
    "@type": "Service",
    name: t(`${key}.title`),
    description: t(`${key}.description`),
    provider: {
      "@type": "ProfessionalService",
      name: "SendLine",
      url: BASE_URL,
    },
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: servicesJsonLd.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: service,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesHero />
      <CoreCapabilities />
      {/* <CaseStudy /> */}
      <TechnologyStack />
      <ServicesCTA />
    </>
  );
}
