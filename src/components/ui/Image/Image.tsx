import NextImage from "next/image";
import type { CSSProperties } from "react";
import styles from "@/components/ui/styles/Image.module.css";

type ImageFit = "cover" | "contain";

interface BaseProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

interface FillImageProps extends BaseProps {
  /** CSS aspect-ratio, e.g. "4 / 3" or "1 / 1". Defaults to "4 / 3". */
  aspectRatio?: string;
  fit?: ImageFit;
  width?: never;
  height?: never;
}

interface FixedImageProps extends BaseProps {
  width: number;
  height: number;
  fit?: ImageFit;
  aspectRatio?: never;
}

export type ImageProps = FillImageProps | FixedImageProps;

/**
 * Wrapper around next/image with a required `alt` for accessibility.
 * Pass `width`/`height` for a fixed-size image, or omit them to fill
 * a container sized by `aspectRatio` (useful inside cards/grids).
 */
export function Image(props: ImageProps) {
  const { src, alt, className, priority, sizes, fit = "cover" } = props;

  if ("width" in props && props.width !== undefined) {
    return (
      <NextImage
        src={src}
        alt={alt}
        width={props.width}
        height={props.height}
        className={[styles.fixedImage, className].filter(Boolean).join(" ")}
        style={{ "--image-fit": fit } as CSSProperties}
        priority={priority}
        sizes={sizes}
      />
    );
  }

  const aspectRatio = "aspectRatio" in props ? props.aspectRatio ?? "4 / 3" : "4 / 3";

  return (
    <div className={styles.wrapper} style={{ aspectRatio }}>
      <NextImage
        src={src}
        alt={alt}
        fill
        className={[styles.fillImage, className].filter(Boolean).join(" ")}
        style={{ "--image-fit": fit } as CSSProperties}
        priority={priority}
        sizes={sizes ?? "(min-width: 768px) 33vw, 100vw"}
      />
    </div>
  );
}
