import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

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
    locale === "it"
      ? "Contatti - Parliamo del tuo progetto"
      : "Contact - Let's talk about your project";
  const description =
    locale === "it"
      ? "Contattami per una consulenza gratuita. Sviluppo software su misura, automazione AI e monitoraggio IoT per la tua azienda."
      : "Contact me for a free consultation. Custom software development, AI automation, and IoT monitoring for your business.";

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/contact`,
      languages: {
        it: `${BASE_URL}/it/contact`,
        en: `${BASE_URL}/en/contact`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/contact`,
    },
  };
}

export default function ContactPage() {
  return <ContactForm />;
}
