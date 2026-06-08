# RGRM Design System – Demo

A small demo website that uses the RGRM design system:

- [`@rgrmdesign/rgrm-ds-react`](https://www.npmjs.com/package/@rgrmdesign/rgrm-ds-react) – the React components (`Heading`, `Paragraph`, `Section`).
- [`@rgrmdesign/rgrm-ds-tokens`](https://www.npmjs.com/package/@rgrmdesign/rgrm-ds-tokens) – the design tokens as CSS custom properties.

> Note: there is no standalone `@rgrmdesign/rgrm-ds` package on npm (yet). The
> components are shipped via `@rgrmdesign/rgrm-ds-react` (which automatically
> loads its styles from `@rgrmdesign/rgrm-ds-css`).

## Stack

- [pnpm](https://pnpm.io) as the package manager
- [Node 24](https://nodejs.org) (see `.nvmrc`)
- [Vite](https://vite.dev) + React + TypeScript
- [GitHub Pages](https://pages.github.com) for hosting

## Running locally

```bash
nvm use            # uses Node 24 from .nvmrc
pnpm install
pnpm dev           # starts the dev server at http://localhost:5173
```

Other scripts:

```bash
pnpm build         # type-check + production build to dist/
pnpm preview       # serve the production build locally
```

## Themes

The tokens provide three themes. The `base` theme lives on `:root`; the others
are enabled via the `data-theme` attribute:

```html
<html data-theme="dark">  <!-- or: brand -->
```

In the demo, the button bar at the top switches between `base`, `dark` and
`brand`.

## Deploying to GitHub Pages

1. Push this repo to GitHub (branch `main`).
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` automatically builds and publishes via
   `.github/workflows/deploy.yml`.

The Vite build uses a relative `base` (`./`), so the site works on a GitHub
Pages project URL (`https://<user>.github.io/<repo>/`) without having to
hardcode the repo name.
