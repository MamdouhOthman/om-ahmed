import type { Locale } from "@/i18n/config";

export type CategorySlug =
  | "poultry"
  | "red-meat"
  | "frozen"
  | "sauces"
  | "spices"
  | "nuts";

export interface Category {
  slug: CategorySlug;
  translations: Record<Locale, string>;
}

export const CATEGORIES: Category[] = [
  {
    slug: "poultry",
    translations: { ar: "دواجن", en: "Poultry" },
  },
  {
    slug: "red-meat",
    translations: { ar: "لحوم حمراء", en: "Red Meat" },
  },
  {
    slug: "frozen",
    translations: { ar: "مجمدات", en: "Frozen" },
  },
  {
    slug: "sauces",
    translations: { ar: "صوصات", en: "Sauces" },
  },
  {
    slug: "spices",
    translations: { ar: "توابل", en: "Spices" },
  },
  {
    slug: "nuts",
    translations: { ar: "مكسرات", en: "Nuts" },
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((category) => category.slug === slug);
}

export function isCategorySlug(value: string): value is CategorySlug {
  return CATEGORIES.some((category) => category.slug === value);
}
