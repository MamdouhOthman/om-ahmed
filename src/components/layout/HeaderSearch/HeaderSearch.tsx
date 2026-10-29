"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import styles from "@/components/layout/styles/HeaderSearch.module.css";
import { Input } from "@/components/ui/Input";
import { Image } from "@/components/ui/Image";
import { SearchIcon } from "@/components/ui/icons";
import { filterProducts } from "@/features/products/data/products";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

const MAX_RESULTS = 5;

interface HeaderSearchProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function HeaderSearch({ locale, dictionary }: HeaderSearchProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  const results = useMemo(() => {
    if (!query.trim()) {
      return [];
    }
    return filterProducts({ query, locale }).slice(0, MAX_RESULTS);
  }, [query, locale]);

  const showDropdown = isOpen && query.trim().length > 0;

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <form
        action={localizedPath(locale, "/products")}
        method="get"
        role="search"
        className={styles.form}
        autoComplete="off"
      >
        <Input
          type="search"
          name="q"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setIsOpen(false);
            }
          }}
          wrapperClassName={styles.field}
          placeholder={dictionary.search.placeholder}
          leadingIcon={<SearchIcon />}
          aria-label={dictionary.search.label}
          role="combobox"
          aria-expanded={showDropdown}
          aria-controls={listboxId}
          aria-autocomplete="list"
        />
      </form>

      {showDropdown && (
        <ul id={listboxId} role="listbox" className={styles.dropdown}>
          {results.length > 0 ? (
            results.map((product) => {
              const text = product.translations[locale];
              return (
                <li key={product.slug} role="option" aria-selected="false">
                  <Link
                    href={localizedPath(locale, `/products/${product.slug}`)}
                    className={styles.result}
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src={product.image}
                      alt={text.name}
                      width={44}
                      height={44}
                      className={styles.resultImage}
                    />
                    <span className={styles.resultText}>
                      <span className={styles.resultName}>{text.name}</span>
                      <span className={styles.resultPrice}>{text.price}</span>
                    </span>
                  </Link>
                </li>
              );
            })
          ) : (
            <li className={styles.noResults}>{dictionary.products.noResults}</li>
          )}
        </ul>
      )}
    </div>
  );
}
