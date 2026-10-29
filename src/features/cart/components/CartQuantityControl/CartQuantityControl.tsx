"use client";

import styles from "@/features/cart/styles/CartQuantityControl.module.css";
import { CartIcon, MinusIcon, PlusIcon } from "@/components/ui/icons";
import { useCart } from "@/features/cart/context/CartContext";

interface CartQuantityControlProps {
  slug: string;
  addLabel: string;
  increaseLabel: string;
  decreaseLabel: string;
}

export function CartQuantityControl({
  slug,
  addLabel,
  increaseLabel,
  decreaseLabel,
}: CartQuantityControlProps) {
  const { items, addItem, updateQuantity } = useCart();
  const quantity = items.find((item) => item.slug === slug)?.quantity ?? 0;

  if (quantity === 0) {
    return (
      <button type="button" className={styles.addButton} onClick={() => addItem(slug)}>
        <CartIcon />
        {addLabel}
      </button>
    );
  }

  return (
    <div className={styles.stepper}>
      <button
        type="button"
        className={styles.stepperButton}
        onClick={() => updateQuantity(slug, quantity - 1)}
        aria-label={decreaseLabel}
      >
        <MinusIcon />
      </button>
      <span className={styles.stepperValue}>{quantity}</span>
      <button
        type="button"
        className={styles.stepperButton}
        onClick={() => updateQuantity(slug, quantity + 1)}
        aria-label={increaseLabel}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
