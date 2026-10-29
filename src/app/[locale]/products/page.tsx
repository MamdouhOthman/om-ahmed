import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CategoryFilter } from "@/features/categories/components/CategoryFilter";
import { ProductList } from "@/features/products/components/ProductList";
import { filterProducts } from "@/features/products/data/products";
import { isCategorySlug } from "@/features/categories/data/categories";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

interface ProductsPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string; q?: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: ProductsPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ar";
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.products.pageTitle,
    description: dictionary.products.pageDescription,
  };
}

async function ProductsPageContent({ params, searchParams }: ProductsPageProps) {
  const [{ locale: rawLocale }, { category, q }] = await Promise.all([
    params,
    searchParams,
  ]);

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale: Locale = rawLocale;
  const dictionary = await getDictionary(locale);
  const activeSlug = category && isCategorySlug(category) ? category : undefined;
  const products = filterProducts({ categorySlug: activeSlug, query: q, locale });
  const emptyMessage = q?.trim() ? dictionary.products.noResults : undefined;

  return (
    <>
      <CategoryFilter locale={locale} dictionary={dictionary} activeSlug={activeSlug} />
      <ProductList
        products={products}
        locale={locale}
        dictionary={dictionary}
        emptyMessage={emptyMessage}
      />
    </>
  );
}

export default function ProductsPage({ params, searchParams }: ProductsPageProps) {
  return (
    <Suspense fallback={null}>
      <ProductsPageContent params={params} searchParams={searchParams} />
    </Suspense>
  );
}
