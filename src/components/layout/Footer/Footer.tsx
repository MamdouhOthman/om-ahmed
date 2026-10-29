import styles from "@/components/layout/styles/Footer.module.css";
import { MAPS_URL } from "@/lib/constants";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

const BUILD_YEAR = new Date().getFullYear();

interface FooterProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function Footer({ dictionary }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.address}>{dictionary.footer.address}</p>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapsLink}
        >
          {dictionary.footer.mapsLink}
        </a>
        <p className={styles.copyright}>
          &copy; {BUILD_YEAR} {dictionary.siteName}. {dictionary.footer.rights}.
        </p>
      </div>
    </footer>
  );
}
