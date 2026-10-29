export const locales = ["ar", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const localeDirection: Record<Locale, "rtl" | "ltr"> = {
  ar: "rtl",
  en: "ltr",
};

/**
 * Builds a path prefixed with the locale, except for the default locale
 * (Arabic), which is served unprefixed at the root.
 */
export function localizedPath(locale: Locale, path: string): string {
  const normalized = path === "/" ? "" : path;
  if (locale === defaultLocale) {
    return normalized === "" ? "/" : normalized;
  }
  return `/${locale}${normalized}`;
}
