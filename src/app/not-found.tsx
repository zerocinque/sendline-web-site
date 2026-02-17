import Link from "next/link";
import { IBM_Plex_Mono } from "next/font/google";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DotGrid from "@/components/DotGrid";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default async function RootNotFound() {
  const locale = await getLocale();
  const messages = await getMessages();
  const t = (messages.notFound as Record<string, string>);

  return (
    <html lang={locale}>
      <body className={ibmPlexMono.className}>
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
            <main>
              <section className="min-h-[80vh] flex items-center justify-center px-6">
                <div className="text-center max-w-xl">
                  <div className="mb-6">
                    <span className="text-xs tracking-[0.3em] text-primary font-semibold bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
                      {t.badge}
                    </span>
                  </div>

                  <h1 className="text-7xl sm:text-8xl font-bold text-foreground mb-2">
                    {t.title}
                  </h1>

                  <p className="text-lg sm:text-xl text-muted mb-2 font-mono">
                    {t.subtitle}
                  </p>

                  <p className="text-muted/70 mb-10 text-sm sm:text-base">
                    {t.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/"
                      className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm tracking-wide"
                    >
                      {t.home}
                    </Link>
                    <Link
                      href="/contact"
                      className="px-6 py-3 border border-primary/30 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors text-sm tracking-wide"
                    >
                      {t.contact}
                    </Link>
                  </div>
                </div>
              </section>
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
