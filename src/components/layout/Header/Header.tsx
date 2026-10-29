import Link from "next/link";
import styles from "@/components/layout/styles/Header.module.css";
import { CartButton } from "@/components/layout/CartButton";
import { HeaderSearch } from "@/components/layout/HeaderSearch";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MobileNav } from "@/components/layout/MobileNav";
import { LogoMark } from "@/components/ui/icons";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

interface HeaderProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function Header({ locale, dictionary }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          href={localizedPath(locale, "/")}
          className={styles.logo}
          aria-label={dictionary.siteName}
        >
          <LogoMark />
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <Link href={localizedPath(locale, "/")} className={styles.navLink}>
            {dictionary.nav.home}
          </Link>
          <Link href={localizedPath(locale, "/products")} className={styles.navLink}>
            {dictionary.nav.products}
          </Link>
        </nav>

        <HeaderSearch locale={locale} dictionary={dictionary} />

        <div className={styles.actions}>
          <CartButton locale={locale} label={dictionary.cart.viewCart} />
          <LanguageSwitcher locale={locale} label={dictionary.languageSwitcher.label} />
          <MobileNav locale={locale} dictionary={dictionary} />
        </div>
      </div>
    </header>
  );
}
