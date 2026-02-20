import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/home/HeroSection";
import TechLogos from "@/components/home/TechLogos";
import AboutSection from "@/components/home/AboutSection";
import HowIWork from "@/components/home/HowIWork";
import Specializations from "@/components/home/Specializations";
import FeaturedProjects from "@/components/home/FeaturedProjects";
// import Stats from "@/components/home/Stats";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "sendline.it"}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });

  const title =
    locale === "it"
      ? "SendLine - Software su misura, Automazione AI e IoT"
      : "SendLine - Custom Software, AI Automation & IoT";
  const description = t("description");

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        it: `${BASE_URL}/it`,
        en: `${BASE_URL}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}`,
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });

  const faqItems = ["cost", "timeline", "remote", "changes", "examples", "satisfaction"];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((key) => ({
      "@type": "Question",
      name: t(`${key}.question`),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(`${key}.answer`),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <TechLogos />
      <Specializations />
      <AboutSection />
      <HowIWork />
      <FeaturedProjects />
      {/* <Stats /> */}
      <FAQ />
      <CTASection />
    </>
  );
}
