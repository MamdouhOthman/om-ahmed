import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/features/cart/context/CartContext";
import { SITE_URL } from "@/lib/constants";
import { isLocale, localeDirection, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ar";
  const dictionary = await getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dictionary.siteName,
      template: `%s | ${dictionary.siteName}`,
    },
    description: dictionary.siteDescription,
    openGraph: {
      title: dictionary.siteName,
      description: dictionary.siteDescription,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.siteName,
      description: dictionary.siteDescription,
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale;
  const dictionary = await getDictionary(locale);

  return (
    <html
      lang={locale}
      dir={localeDirection[locale]}
      className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSansArabic.variable}`}
    >
      <body suppressHydrationWarning>
        <CartProvider>
          <Header locale={locale} dictionary={dictionary} />
          <main>{children}</main>
          <Footer locale={locale} dictionary={dictionary} />
        </CartProvider>
      </body>
    </html>
  );
}
