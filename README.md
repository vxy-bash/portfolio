# Portfolio

My personal website, built with React, TypeScript and Vite. It has project cards, a skills section and a language switch.

[View the website](https://vxy-bash.github.io/portfolio/)

## Development

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

`npm run build` writes the site to `dist/`. `npm run preview` serves that build locally; `npm run lint` runs ESLint.

Content lives in `src/data/portfolioData.ts`, page layout in `src/App.tsx`, and reusable UI in `src/components/`.

Pushes to `main` build and publish the site through GitHub Actions. The Vite base path is `/portfolio/` for GitHub Pages.
