"use client";

import Link from "next/link";
import { useState, type MouseEvent } from "react";
import styles from "@/features/cart/styles/CartView.module.css";
import { Button } from "@/components/ui/Button";
import { Image } from "@/components/ui/Image";
import { Input } from "@/components/ui/Input";
import { CartIcon } from "@/components/ui/icons";
import { useCart } from "@/features/cart/context/CartContext";
import { getProductBySlug } from "@/features/products/data/products";
import type { Product } from "@/features/products/types";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

interface CartViewProps {
  locale: Locale;
  dictionary: Dictionary;
}

interface CartLine {
  product: Product;
  quantity: number;
}

interface FormErrors {
  name?: string;
  phone?: string;
  address?: string;
}

export function CartView({ locale, dictionary }: CartViewProps) {
  const { items, removeItem, updateQuantity, clear } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const lines: CartLine[] = items.reduce<CartLine[]>((acc, item) => {
    const product = getProductBySlug(item.slug);
    if (product) {
      acc.push({ product, quantity: item.quantity });
    }
    return acc;
  }, []);

  if (lines.length === 0) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon} aria-hidden="true">
            <CartIcon />
          </span>
          <h1 className={styles.emptyTitle}>{dictionary.cart.title}</h1>
          <p className={styles.emptyText}>{dictionary.cart.empty}</p>
          <Link href={localizedPath(locale, "/products")}>
            <Button variant="primary">{dictionary.cart.browseProducts}</Button>
          </Link>
        </div>
      </div>
    );
  }

  function buildWhatsAppMessage(): string {
    const details = [
      `${dictionary.cart.form.name}: ${name.trim()}`,
      `${dictionary.cart.form.phone}: ${phone.trim()}`,
      `${dictionary.cart.form.address}: ${address.trim()}`,
      ...(notes.trim() ? [`${dictionary.cart.form.notes}: ${notes.trim()}`] : []),
    ];

    return [
      dictionary.cart.whatsappIntro,
      ...lines.map(
        ({ product, quantity }) => `${quantity} × ${product.translations[locale].name}`,
      ),
      "",
      ...details,
    ].join("\n");
  }

  function handleCheckout(event: MouseEvent<HTMLAnchorElement>) {
    const nextErrors: FormErrors = {};
    if (!name.trim()) nextErrors.name = dictionary.cart.form.requiredError;
    if (!phone.trim()) nextErrors.phone = dictionary.cart.form.requiredError;
    if (!address.trim()) nextErrors.address = dictionary.cart.form.requiredError;

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{dictionary.cart.title}</h1>

      <ul className={styles.list}>
        {lines.map(({ product, quantity }) => {
          const text = product.translations[locale];
          return (
            <li key={product.slug} className={styles.item}>
              <div className={styles.itemMain}>
                <Image
                  src={product.image}
                  alt={text.name}
                  width={64}
                  height={64}
                  className={styles.itemImage}
                />
                <div className={styles.itemInfo}>
                  <Link
                    href={localizedPath(locale, `/products/${product.slug}`)}
                    className={styles.itemName}
                  >
                    {text.name}
                  </Link>
                  <span className={styles.itemPrice}>{text.price}</span>
                </div>
              </div>

              <div className={styles.itemControls}>
                <div className={styles.quantity}>
                  <button
                    type="button"
                    className={styles.quantityButton}
                    onClick={() => updateQuantity(product.slug, quantity - 1)}
                    aria-label={dictionary.cart.decrease}
                  >
                    −
                  </button>
                  <span className={styles.quantityValue}>{quantity}</span>
                  <button
                    type="button"
                    className={styles.quantityButton}
                    onClick={() => updateQuantity(product.slug, quantity + 1)}
                    aria-label={dictionary.cart.increase}
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className={styles.remove}
                  onClick={() => removeItem(product.slug)}
                  aria-label={dictionary.cart.remove}
                >
                  ×
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.formSection}>
        <h2 className={styles.formTitle}>{dictionary.cart.form.title}</h2>
        <div className={styles.formGrid}>
          <Input
            label={dictionary.cart.form.name}
            placeholder={dictionary.cart.form.namePlaceholder}
            value={name}
            onChange={(event) => setName(event.target.value)}
            errorText={errors.name}
          />
          <Input
            type="tel"
            label={dictionary.cart.form.phone}
            placeholder={dictionary.cart.form.phonePlaceholder}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            errorText={errors.phone}
          />
          <Input
            as="textarea"
            rows={2}
            label={dictionary.cart.form.address}
            placeholder={dictionary.cart.form.addressPlaceholder}
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            errorText={errors.address}
            wrapperClassName={styles.formFull}
          />
          <Input
            as="textarea"
            rows={2}
            label={dictionary.cart.form.notes}
            placeholder={dictionary.cart.form.notesPlaceholder}
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            wrapperClassName={styles.formFull}
          />
        </div>
      </div>

      <div className={styles.actions}>
        <Button type="button" variant="secondary" onClick={clear}>
          {dictionary.cart.clear}
        </Button>
        <a
          href={getWhatsAppLink(buildWhatsAppMessage())}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCheckout}
        >
          <Button variant="primary">{dictionary.cart.checkoutWhatsApp}</Button>
        </a>
      </div>
    </div>
  );
}
