"use client";

import Link from "next/link";
import styles from "@/components/layout/styles/CartButton.module.css";
import { CartIcon } from "@/components/ui/icons";
import { useCart } from "@/features/cart/context/CartContext";
import { localizedPath, type Locale } from "@/i18n/config";

interface CartButtonProps {
  locale: Locale;
  label: string;
}

export function CartButton({ locale, label }: CartButtonProps) {
  const { totalCount } = useCart();

  return (
    <Link href={localizedPath(locale, "/cart")} className={styles.button} aria-label={label}>
      <CartIcon />
      {totalCount > 0 && <span className={styles.badge}>{totalCount}</span>}
    </Link>
  );
}
