import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
  type Ref,
  type TextareaHTMLAttributes,
} from "react";
import styles from "@/components/ui/styles/Input.module.css";

type InputType =
  | "text"
  | "search"
  | "email"
  | "tel"
  | "url"
  | "password"
  | "number";

interface SharedProps {
  /** Visible label above the field. */
  label?: string;
  /** Helper copy shown below the field when there's no error. */
  helperText?: string;
  /** Error copy shown below the field; also flags the field as invalid. */
  errorText?: string;
  /** Icon rendered at the start of the field (e.g. a search icon). */
  leadingIcon?: ReactNode;
  /** Icon or control rendered at the end of the field (e.g. a clear button). */
  trailingIcon?: ReactNode;
  /** Wrapper className, applied to the outer field container. */
  wrapperClassName?: string;
}

interface SingleLineProps
  extends SharedProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  as?: "input";
  type?: InputType;
}

interface MultiLineProps
  extends SharedProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  as: "textarea";
}

export type InputProps = SingleLineProps | MultiLineProps;

/**
 * A reusable, accessible form field. Covers plain text, search (with a
 * leading icon slot), email, tel/phone numbers, url, password, number, and
 * multiline text via `as="textarea"`. Pass `leadingIcon` / `trailingIcon`
 * for icons or inline controls (e.g. a "clear" button in a search field).
 */
export const Input = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(function Input(
  {
    label,
    helperText,
    errorText,
    leadingIcon,
    trailingIcon,
    wrapperClassName,
    id,
    className,
    ...rest
  },
  ref,
) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const helperId = `${fieldId}-helper`;
  const hasError = Boolean(errorText);

  const controlClasses = [
    styles.control,
    leadingIcon ? styles.hasLeadingIcon : "",
    trailingIcon ? styles.hasTrailingIcon : "",
    hasError ? styles.invalid : "",
  ]
    .filter(Boolean)
    .join(" ");

  const fieldClasses = [styles.field, wrapperClassName].filter(Boolean).join(" ");
  const elementClasses = [styles.element, className].filter(Boolean).join(" ");

  return (
    <div className={fieldClasses}>
      {label && (
        <label htmlFor={fieldId} className={styles.label}>
          {label}
        </label>
      )}

      <div className={controlClasses}>
        {leadingIcon && (
          <span className={styles.icon} aria-hidden="true">
            {leadingIcon}
          </span>
        )}

        {rest.as === "textarea" ? (
          <textarea
            id={fieldId}
            ref={ref as Ref<HTMLTextAreaElement>}
            className={elementClasses}
            aria-invalid={hasError}
            aria-describedby={helperText || errorText ? helperId : undefined}
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={fieldId}
            ref={ref as Ref<HTMLInputElement>}
            type={(rest as SingleLineProps).type ?? "text"}
            className={elementClasses}
            aria-invalid={hasError}
            aria-describedby={helperText || errorText ? helperId : undefined}
            {...(rest as Omit<SingleLineProps, "as" | "type">)}
          />
        )}

        {trailingIcon && <span className={styles.trailing}>{trailingIcon}</span>}
      </div>

      {(helperText || errorText) && (
        <p id={helperId} className={hasError ? styles.errorText : styles.helperText}>
          {errorText || helperText}
        </p>
      )}
    </div>
  );
});
