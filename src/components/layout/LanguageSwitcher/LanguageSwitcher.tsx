"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/components/layout/styles/LanguageSwitcher.module.css";
import { GlobeIcon } from "@/components/ui/icons";
import { isLocale, localizedPath, locales, type Locale } from "@/i18n/config";

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
}

function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split("/");
  const maybeLocale = segments[1] ?? "";

  if (isLocale(maybeLocale)) {
    const rest = segments.slice(2).join("/");
    return rest ? `/${rest}` : "/";
  }

  return pathname;
}

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const targetLocale = locales.find((candidate) => candidate !== locale) ?? locale;
  const basePath = stripLocalePrefix(pathname);
  const href = localizedPath(targetLocale, basePath);

  return (
    <Link href={href} className={styles.link} hrefLang={targetLocale}>
      <GlobeIcon />
      {label}
    </Link>
  );
}
