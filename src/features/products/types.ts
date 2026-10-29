import type { Locale } from "@/i18n/config";
import type { CategorySlug } from "@/features/categories/data/categories";

export interface ProductTranslation {
  name: string;
  description: string;
  details: string;
  price: string;
}

export interface Product {
  slug: string;
  image: string;
  categorySlug: CategorySlug;
  translations: Record<Locale, ProductTranslation>;
}
