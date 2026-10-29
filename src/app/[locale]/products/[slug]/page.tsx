import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/features/products/components/ProductDetails";
import { PRODUCTS, getProductBySlug } from "@/features/products/data/products";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

interface ProductPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    PRODUCTS.map((product) => ({ locale, slug: product.slug })),
  );
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ar";
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Not found" };
  }

  const text = product.translations[locale];

  return {
    title: text.name,
    description: text.description,
  };
}

async function ProductPageContent({ params }: ProductPageProps) {
  const { locale: rawLocale, slug } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale: Locale = rawLocale;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return <ProductDetails product={product} locale={locale} dictionary={dictionary} />;
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense fallback={null}>
      <ProductPageContent params={params} />
    </Suspense>
  );
}
