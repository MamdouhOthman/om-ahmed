/** Brand mark SVG markup shared by icon.tsx, favicon.ico/route.tsx and opengraph-image.tsx — kept here since those run through `next/og`'s ImageResponse (Satori), which can't import the DOM-based LogoMark component. */
export function OgLogoMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <g fill="#ffffff">
        <rect x="14.6" y="7" width="2.8" height="18" rx="1.4" />
        <rect x="14.6" y="7" width="2.8" height="18" rx="1.4" transform="rotate(60 16 16)" />
        <rect x="14.6" y="7" width="2.8" height="18" rx="1.4" transform="rotate(120 16 16)" />
      </g>
      <path
        d="M16 6c1.9.2 3.3 1.7 3.3 3.5 0 .5-.4.9-.9.9-1.9-.1-3.3-1.6-3.4-3.5a.9.9 0 0 1 1-.9Z"
        fill="#198754"
      />
    </svg>
  );
}
