import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "@/components/ui/styles/Button.module.css";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  const variantClass = variant === "primary" ? styles.primary : styles.secondary;
  const classes = [styles.button, variantClass, className].filter(Boolean).join(" ");

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
