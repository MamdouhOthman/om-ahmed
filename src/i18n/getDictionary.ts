import "server-only";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  ar: () => import("@/i18n/dictionaries/ar").then((module) => module.default),
  en: () => import("@/i18n/dictionaries/en").then((module) => module.default),
};

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
