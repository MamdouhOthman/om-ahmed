import Link from "next/link";
import type { ReactNode } from "react";
import styles from "@/components/ui/styles/Card.module.css";
import { Image } from "@/components/ui/Image";

interface CardImage {
  src: string;
  alt: string;
  aspectRatio?: string;
}

interface CardProps {
  image?: CardImage;
  /** Small label rendered above the title, e.g. a category tag. */
  eyebrow?: string;
  title?: string;
  description?: string;
  /**
   * Extra content rendered below the description, outside the link area —
   * safe for interactive elements like a price tag or an "Add to cart"
   * button, since it isn't nested inside the card's anchor.
   */
  footer?: ReactNode;
  /** Overrides title/description with fully custom body content. */
  children?: ReactNode;
  /** If provided, the image/title/description area becomes a link. */
  href?: string;
  className?: string;
}

export function Card({
  image,
  eyebrow,
  title,
  description,
  footer,
  children,
  href,
  className,
}: CardProps) {
  const linkContent = (
    <>
      {image && (
        <div className={styles.media}>
          <Image src={image.src} alt={image.alt} aspectRatio={image.aspectRatio} />
        </div>
      )}
      <div className={styles.body}>
        {children ?? (
          <>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            {title && <h3 className={styles.title}>{title}</h3>}
            {description && <p className={styles.description}>{description}</p>}
          </>
        )}
      </div>
    </>
  );

  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      {href ? (
        <Link href={href} className={styles.linkArea}>
          {linkContent}
        </Link>
      ) : (
        <div className={styles.linkArea}>{linkContent}</div>
      )}
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}
