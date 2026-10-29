"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import styles from "@/components/layout/styles/MobileNav.module.css";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

interface MobileNavProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function MobileNav({ locale, dictionary }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? dictionary.nav.closeMenu : dictionary.nav.menu}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {isOpen && (
        <nav id={panelId} className={styles.panel} aria-label="Mobile navigation">
          <Link
            href={localizedPath(locale, "/")}
            className={styles.link}
            onClick={() => setIsOpen(false)}
          >
            {dictionary.nav.home}
          </Link>
          <Link
            href={localizedPath(locale, "/products")}
            className={styles.link}
            onClick={() => setIsOpen(false)}
          >
            {dictionary.nav.products}
          </Link>
        </nav>
      )}
    </div>
  );
}
