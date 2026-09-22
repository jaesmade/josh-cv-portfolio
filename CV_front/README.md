# Static CV / portfolio template

A React + TypeScript + Vite website inspired by the DIMFLIX reference: pixel fonts, an ivory/teal/clay palette, a framed portrait, and a floating navigation dock. A coordinated evergreen dark theme is included. No server, database, API keys, or remote font requests are required.

## Run

Use Node.js 22.12+ or 24 LTS.

```sh
npm install
npm run dev
npm run build
npm run preview
```

Upload the contents of `dist/` to any static host. Hash navigation (`#about`, `#portfolio`, `#resume`, `#contact`) works without server rewrite rules. Vite uses a relative base so the build also supports repository subpaths. Serve the site over HTTP; do not open index.html via file://.

## Personalize

- `src/data/portfolio.ts`: name, introduction, portrait, social links, education, skills, and projects. Current content preserves the original CV as an example.
- Replace `src/assets/me.png` or change the photo import in the data file.
- Set an optional `url` on a project to show its public link. Projects without URLs display as informational cards.
- `src/index.css`: theme colors, typography, responsive layout, and print styles.
- Color roles live in the root theme tokens (`--accent`, `--tone-warm`, `--tone-cool`, and `--tone-soft`). Spacing uses a 4px scale with shared page gutters and content widths; change these tokens to adjust the whole template.
- `index.html`: browser title, description, and favicon for your version.
- The résumé is generated from the same profile data. Use **Print / Save PDF** on the résumé page to export it through your browser.

Light/dark preference is stored locally when browser storage is available. Project filtering runs entirely in the browser. Contact opens the visitor’s email app.

## Assets and credit

Design inspiration: the supplied `dimflix.github.io-main` repository. The local `PressStart2P-Regular.woff` and `aldrichrusbydaymarius.woff` font files were copied from its `src/assets/fonts` directory. The portrait and CV content come from this project's original files. No reference-author biography, résumé, project claims, or API integrations are included. Preserve applicable font licenses when redistributing; the supplied reference did not include font license files.

## Checks

```sh
npm run build
npm run lint
```
