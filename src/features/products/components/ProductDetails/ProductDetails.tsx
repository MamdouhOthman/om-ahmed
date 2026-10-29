import Link from "next/link";
import styles from "@/features/products/styles/ProductDetails.module.css";
import { Image } from "@/components/ui/Image";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { getCategoryBySlug } from "@/features/categories/data/categories";
import { CartQuantityControl } from "@/features/cart/components/CartQuantityControl";
import type { Product } from "@/features/products/types";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

interface ProductDetailsProps {
  product: Product;
  locale: Locale;
  dictionary: Dictionary;
}

export function ProductDetails({ product, locale, dictionary }: ProductDetailsProps) {
  const text = product.translations[locale];
  const arrow = locale === "ar" ? "→" : "←";
  const category = getCategoryBySlug(product.categorySlug);

  return (
    <div className={styles.wrapper}>
      <Link href={localizedPath(locale, "/products")} className={styles.back}>
        <span className={styles.backArrow}>{arrow}</span>
        {dictionary.products.backToProducts}
      </Link>

      <div className={styles.layout}>
        <div className={styles.media}>
          <Image
            src={product.image}
            alt={text.name}
            aspectRatio="1 / 1"
            fit="contain"
            priority
          />
        </div>

        <div className={styles.infoCard}>
          {category && (
            <Link
              href={localizedPath(locale, `/products?category=${category.slug}`)}
              className={styles.category}
            >
              {category.translations[locale]}
            </Link>
          )}

          <h1 className={styles.name}>{text.name}</h1>
          <p className={styles.description}>{text.description}</p>

          <div className={styles.priceRow}>
            <span className={styles.priceBadge}>{text.price}</span>
          </div>

          <hr className={styles.divider} />

          <p className={styles.details}>{text.details}</p>

          <div className={styles.cardFooter}>
            <div className={styles.actions}>
              <a
                href={getWhatsAppLink(`${dictionary.products.orderMessage} ${text.name}`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">{dictionary.products.orderButton}</Button>
              </a>
              <div className={styles.quantityWrap}>
                <CartQuantityControl
                  slug={product.slug}
                  addLabel={dictionary.cart.addToCart}
                  increaseLabel={dictionary.cart.increase}
                  decreaseLabel={dictionary.cart.decrease}
                />
              </div>
            </div>

            <div className={styles.trustRow}>
              <span className={styles.trustChip}>{dictionary.hero.visualBadge}</span>
              <span className={styles.trustChip}>{dictionary.hero.deliveryBadge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
