import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CartView } from "@/features/cart/components/CartView";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

interface CartPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: CartPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ar";
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.cart.title,
  };
}

async function CartPageContent({ params }: CartPageProps) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale: Locale = rawLocale;
  const dictionary = await getDictionary(locale);

  return <CartView locale={locale} dictionary={dictionary} />;
}

export default function CartPage({ params }: CartPageProps) {
  return (
    <Suspense fallback={null}>
      <CartPageContent params={params} />
    </Suspense>
  );
}
