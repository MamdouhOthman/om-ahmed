interface LogoMarkProps {
  size?: number;
}

/**
 * Brand mark: a bold frost flake (frozen) with a single leaf (fresh &
 * natural) — the two things this business sells on. Solid flat shapes
 * only, so it stays crisp and legible at small sizes.
 */
export function LogoMark({ size = 32 }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="var(--foreground)" />

      <g fill="#ffffff">
        <rect x="14.6" y="7" width="2.8" height="18" rx="1.4" />
        <rect
          x="14.6"
          y="7"
          width="2.8"
          height="18"
          rx="1.4"
          transform="rotate(60 16 16)"
        />
        <rect
          x="14.6"
          y="7"
          width="2.8"
          height="18"
          rx="1.4"
          transform="rotate(120 16 16)"
        />
      </g>

      <path
        d="M16 6c1.9.2 3.3 1.7 3.3 3.5 0 .5-.4.9-.9.9-1.9-.1-3.3-1.6-3.4-3.5a.9.9 0 0 1 1-.9Z"
        fill="var(--accent)"
      />
    </svg>
  );
}
