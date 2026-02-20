import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { routing } from "@/i18n/routing";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DotGrid from "@/components/DotGrid";
import ConditionalAnalytics from "@/components/ConditionalAnalytics";
import CookieBanner from "@/components/CookieBanner";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "sendline.it"}`;

const siteConfig = {
  it: {
    title: "SendLine - Software su misura, Automazione AI e IoT",
    description:
      "Sviluppo software su misura per PMI e startup: integrazione gestionale, automazione ordini, monitoraggio IoT. Soluzioni concrete senza i costi di un reparto IT interno.",
  },
  en: {
    title: "SendLine - Custom Software, AI Automation & IoT",
    description:
      "Custom software development for SMBs and startups: ERP integration, order automation, IoT monitoring. Concrete solutions without the cost of an internal IT department.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = locale as keyof typeof siteConfig;
  const config = siteConfig[lang] ?? siteConfig.it;
  const alternateLocale = lang === "it" ? "en" : "it";

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: config.title,
      template: "%s | SendLine",
    },
    description: config.description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        it: `${BASE_URL}/it`,
        en: `${BASE_URL}/en`,
        "x-default": `${BASE_URL}/it`,
      },
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: `${BASE_URL}/${locale}`,
      siteName: "SendLine",
      locale: lang === "it" ? "it_IT" : "en_US",
      alternateLocale: lang === "it" ? "en_US" : "it_IT",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "SendLine - Software su misura, Automazione AI e IoT",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [`${BASE_URL}/og-image.png`],
    },
    authors: [{ name: "Luigi Bottasso", url: BASE_URL }],
    creator: "Luigi Bottasso",
    publisher: "SendLine",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "it" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SendLine",
    url: BASE_URL,
    logo: `${BASE_URL}/og-image.png`,
    image: `${BASE_URL}/og-image.png`,
    description:
      locale === "it"
        ? "Sviluppo software su misura, automazione AI e monitoraggio IoT per PMI e startup."
        : "Custom software development, AI automation, and IoT monitoring for SMBs and startups.",
    founder: {
      "@type": "Person",
      name: "Luigi Bottasso",
      jobTitle: "IT Consultant & Full-Stack Developer",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Rabaiot n.4",
      addressLocality: "Lagnasco",
      addressRegion: "CN",
      postalCode: "12030",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.6167,
      longitude: 7.5667,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+39-329-158-0729",
      email: "luigi@sendline.it",
      contactType: "customer service",
      availableLanguage: ["Italian", "English"],
    },
    sameAs: [
      "https://github.com/zerocinque",
      "https://www.linkedin.com/in/luigi-bottasso/",
    ],
    areaServed: {
      "@type": "Country",
      name: "Italy",
    },
    priceRange: "$$",
    knowsAbout: [
      "Custom Software Development",
      "AI Automation",
      "IoT Monitoring",
      "ERP Integration",
      "White Label Development",
      "Business Intelligence",
    ],
  };

  return (
    <html lang={locale}>
      <body className={ibmPlexMono.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <ConditionalAnalytics />
        <div className="fixed inset-0 z-0">
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#271E37"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <NextIntlClientProvider messages={messages}>
          <div className="relative z-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
