import Link from "next/link";
import styles from "@/features/categories/styles/CategoryFilter.module.css";
import { CATEGORIES } from "@/features/categories/data/categories";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

interface CategoryFilterProps {
  locale: Locale;
  dictionary: Dictionary;
  activeSlug?: string;
}

export function CategoryFilter({ locale, dictionary, activeSlug }: CategoryFilterProps) {
  return (
    <nav className={styles.filter} aria-label={dictionary.products.filterLabel}>
      <Link
        href={localizedPath(locale, "/products")}
        className={`${styles.chip} ${!activeSlug ? styles.active : ""}`}
      >
        {dictionary.products.allCategories}
      </Link>
      {CATEGORIES.map((category) => (
        <Link
          key={category.slug}
          href={localizedPath(locale, `/products?category=${category.slug}`)}
          className={`${styles.chip} ${
            activeSlug === category.slug ? styles.active : ""
          }`}
        >
          {category.translations[locale]}
        </Link>
      ))}
    </nav>
  );
}
