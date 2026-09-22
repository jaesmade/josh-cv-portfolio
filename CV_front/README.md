# Static CV / portfolio template

A React + TypeScript + Vite website inspired by the DIMFLIX reference: pixel fonts, an ivory/teal/clay palette, a project gallery, and a floating navigation dock. A coordinated evergreen dark theme is included. No server, database, API keys, or remote font requests are required.

## Run

Use Node.js 22.12+ or 24 LTS.

```sh
npm install
npm run dev
npm run build
npm run preview
```

Upload the contents of `dist/` to any static host. Hash navigation (`#about`, `#portfolio`, `#contact`) works without server rewrite rules. Old `#resume` links open About, where visitors can download the résumé. Vite uses a relative base so the build also supports repository subpaths. Serve the site over HTTP; do not open index.html via file://.

## Personalize

- `src/data/portfolio.ts`: name, introduction, About-page portrait, social links, skills, and projects. Current content preserves the original CV as an example.
- Replace `src/assets/me.png` or change the photo import in the data file to update the About-page portrait.
- Projects use an image gallery like the DIMFLIX portfolio: hover or focus a tile to see its summary, or tap it to toggle details. Set an optional `repository: { url, stars, forks }` in `src/data/portfolio.ts` to show a GitHub action and stat badges. Add only real links and counts. The gallery works entirely from local data and does not call GitHub.
- Project image placeholders live in `public/projects/`. Add your system screenshots there, then update each project's `image` and `imageAlt` in `src/data/portfolio.ts` (for example, `image: "projects/skilldis.webp"`). Paths are relative to `public/`, without a leading slash. Tiles display at a 16:10 ratio; use that ratio or expect some cropping. Missing files show a neutral fallback.
- `src/index.css`: theme colors, typography, responsive layout, and print styles.
- Color roles live in the root theme tokens (`--accent`, `--tone-warm`, `--tone-cool`, and `--tone-soft`). Spacing uses a 4px scale with responsive page gutters; change these tokens to adjust the whole template.
- `index.html`: browser title, description, and favicon for your version.
- `public/Josh-Andrew-Esmade-Resume.pdf` is the downloadable résumé linked from About. Edit `scripts/build_resume.py`, then run `python scripts/build_resume.py` to regenerate it. Update the download filename in `src/App.tsx` if you rename the PDF.

Light/dark preference is stored locally when browser storage is available. Project filtering runs entirely in the browser. Contact opens the visitor’s email app.

## Assets and credit

Design inspiration: the supplied `dimflix.github.io-main` repository. The local `PressStart2P-Regular.woff` and `aldrichrusbydaymarius.woff` font files were copied from its `src/assets/fonts` directory. The portrait and CV content come from this project's original files. No reference-author biography, résumé, project claims, or API integrations are included. Preserve applicable font licenses when redistributing; the supplied reference did not include font license files.

## Checks

```sh
npm run build
npm run lint
```
