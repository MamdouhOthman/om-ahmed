import Link from "next/link";
import styles from "@/features/home/styles/Hero.module.css";
import { Button } from "@/components/ui/Button";
import { Image } from "@/components/ui/Image";
import { PRODUCTS } from "@/features/products/data/products";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface HeroProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function Hero({ locale, dictionary }: HeroProps) {
  const { hero } = dictionary;
  const [mainProduct, secondProduct, thirdProduct] = PRODUCTS;

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.badge}>{hero.badge}</span>

          <h1 id="hero-heading" className={styles.title}>
            <span className={styles.highlight}>{hero.titleHighlight}</span>{" "}
            {hero.titleAfter}
          </h1>

          <p className={styles.subtitle}>{hero.subtitle}</p>

          <div className={styles.actions}>
            <Link href={localizedPath(locale, "/products")}>
              <Button variant="primary">{hero.browseButton}</Button>
            </Link>
            <a
              href={getWhatsAppLink(hero.whatsappGenericMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">{hero.whatsappButton}</Button>
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <span className={styles.blobOne} aria-hidden="true" />
          <span className={styles.blobTwo} aria-hidden="true" />

          <div className={styles.collage}>
            {mainProduct && (
              <div className={styles.mainTile}>
                <Image
                  src={mainProduct.image}
                  alt={mainProduct.translations[locale].name}
                  aspectRatio="1 / 1"
                  priority
                />
              </div>
            )}

            {secondProduct && (
              <div className={styles.secondTile}>
                <Image
                  src={secondProduct.image}
                  alt={secondProduct.translations[locale].name}
                  aspectRatio="1 / 1"
                />
              </div>
            )}

            {thirdProduct && (
              <div className={styles.thirdTile}>
                <Image
                  src={thirdProduct.image}
                  alt={thirdProduct.translations[locale].name}
                  aspectRatio="1 / 1"
                />
              </div>
            )}

            <span className={styles.deliveryBadge}>{hero.deliveryBadge}</span>
            <span className={styles.visualBadge}>{hero.visualBadge}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
