import styles from "@/features/products/styles/ProductList.module.css";
import { Card } from "@/components/ui/Card";
import { getCategoryBySlug } from "@/features/categories/data/categories";
import { CartQuantityControl } from "@/features/cart/components/CartQuantityControl";
import type { Product } from "@/features/products/types";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

interface ProductListProps {
  products: Product[];
  locale: Locale;
  dictionary: Dictionary;
  emptyMessage?: string;
}

export function ProductList({
  products,
  locale,
  dictionary,
  emptyMessage,
}: ProductListProps) {
  if (products.length === 0) {
    return (
      <p className={styles.empty}>{emptyMessage ?? dictionary.products.emptyCategory}</p>
    );
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => {
        const text = product.translations[locale];
        const category = getCategoryBySlug(product.categorySlug);

        return (
          <Card
            key={product.slug}
            href={localizedPath(locale, `/products/${product.slug}`)}
            eyebrow={category?.translations[locale]}
            title={text.name}
            description={text.description}
            image={{ src: product.image, alt: text.name }}
            footer={
              <>
                <span className={styles.price}>{text.price}</span>
                <CartQuantityControl
                  slug={product.slug}
                  addLabel={dictionary.cart.addToCart}
                  increaseLabel={dictionary.cart.increase}
                  decreaseLabel={dictionary.cart.decrease}
                />
              </>
            }
          />
        );
      })}
    </div>
  );
}
