# Om Ahmed

Website for Om Ahmed's frozen meat & poultry business.

## Stack

- [Next.js](https://nextjs.org) (App Router, latest stable)
- TypeScript (strict mode)
- CSS Modules for styling (no Tailwind)
- ESLint (`eslint-config-next`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/                 Routes only (layout, pages, route segments)
  components/
    layout/            Shared layout chrome (Header, Footer)
      components/      One folder per component (Component.tsx + index.ts)
      styles/          All .module.css files for this group, flat
    ui/                Reusable, generic UI primitives (Button, Card, ...)
      components/
      styles/
  features/
    <feature>/
      components/      Components scoped to this feature
      styles/          All .module.css files for this feature, flat
      data/            Static data for this feature (if any)
  lib/                 Shared constants, utilities
```

Each component is a folder with `Component.tsx` + a barrel `index.ts`
export; its `.module.css` lives in the group's shared `styles/` folder,
imported by absolute path, e.g.:

```
features/home/
  components/
    Hero/
      Hero.tsx         imports "@/features/home/styles/Hero.module.css"
      index.ts
    TrustStats/
      TrustStats.tsx   imports "@/features/home/styles/TrustStats.module.css"
      index.ts
  styles/
    Hero.module.css
    TrustStats.module.css
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint
