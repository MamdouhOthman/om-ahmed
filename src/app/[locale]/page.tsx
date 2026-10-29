import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Hero } from "@/features/home/components/Hero";
import { TrustStats } from "@/features/home/components/TrustStats";
import { ProductList } from "@/features/products/components/ProductList";
import { PRODUCTS } from "@/features/products/data/products";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

async function HomeContent({ params }: HomePageProps) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale: Locale = rawLocale;
  const dictionary = await getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dictionary={dictionary} />
      <ProductList products={PRODUCTS} locale={locale} dictionary={dictionary} />
      <TrustStats dictionary={dictionary} />
    </>
  );
}

export default function Home({ params }: HomePageProps) {
  return (
    <Suspense fallback={null}>
      <HomeContent params={params} />
    </Suspense>
  );
}
