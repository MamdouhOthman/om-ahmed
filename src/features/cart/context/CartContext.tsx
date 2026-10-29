"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface CartItem {
  slug: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (slug: string, quantity?: number) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
  totalCount: number;
}

const STORAGE_KEY = "om-ahmed-cart";

const CartContext = createContext<CartContextValue | undefined>(undefined);

function readStoredItems(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (entry): entry is CartItem =>
        typeof entry === "object" &&
        entry !== null &&
        typeof (entry as CartItem).slug === "string" &&
        typeof (entry as CartItem).quantity === "number",
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Deliberately deferred to after mount: localStorage isn't available
    // during SSR, so reading it here (rather than in the initializer) keeps
    // the first client render matching the server-rendered markup.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(readStoredItems());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage unavailable (private browsing, quota, etc.) — fail silently.
    }
  }, [items, isHydrated]);

  const value = useMemo<CartContextValue>(() => {
    function addItem(slug: string, quantity = 1) {
      setItems((prev) => {
        const existing = prev.find((item) => item.slug === slug);
        if (existing) {
          return prev.map((item) =>
            item.slug === slug ? { ...item, quantity: item.quantity + quantity } : item,
          );
        }
        return [...prev, { slug, quantity }];
      });
    }

    function removeItem(slug: string) {
      setItems((prev) => prev.filter((item) => item.slug !== slug));
    }

    function updateQuantity(slug: string, quantity: number) {
      if (quantity <= 0) {
        removeItem(slug);
        return;
      }
      setItems((prev) =>
        prev.map((item) => (item.slug === slug ? { ...item, quantity } : item)),
      );
    }

    function clear() {
      setItems([]);
    }

    return {
      items,
      addItem,
      removeItem,
      updateQuantity,
      clear,
      totalCount: items.reduce((sum, item) => sum + item.quantity, 0),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
