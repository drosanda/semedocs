# Seme Framework Documentation

Seme Framework documentation using Nuxt 4 (Vue 3). Published at [https://seme.framework.web.id](https://seme.framework.web.id).

## Requirements
- Node.js 22.22+, 24.15+ or 26+
- Yarn

## Getting started
```bash
yarn install
cp .env.example .env   # then adjust the values
yarn dev               # http://localhost:3001
```

Other commands:
```bash
yarn build      # production build
yarn start      # serve the production build (node .output/server/index.mjs)
yarn generate   # static export
```

## Environment variables
All are optional; defaults point to `http://localhost:$PORT`.

| Variable | Purpose |
| --- | --- |
| `PORT` | Dev/prod server port (default `3001`) |
| `BASE_URL` | Base URL used for canonical/og:url and JSON-LD |
| `ORIGIN_URL` | Sitemap hostname |
| `CDN_URL` | Base URL for icons and share images |
| `GOOGLE_ANALYTICS_ID` | Google Analytics 4 measurement ID (`G-XXXXXXX`); tracking is off when empty |

## Project structure
- All sources are in `app/` (Nuxt 4 layout) and static files in `public/`.
- `app/pages/<version>/` – documentation pages per Seme version (`3.0`–`4.0`); `app/pages/id/` is the Indonesian version.
- `app/layouts/` – one tiny file per layout that pages reference with `definePageMeta({ layout: 'v4-0' })`; each just renders `<DocLayout name="...">`.
- `app/components/DocLayout.vue` – the shared page shell (sidebar, footer, head/meta). Per-layout settings live in `app/data/layouts.js`.
- `app/data/nav/` – sidebar menus as data; `app/data/versions.js` holds the release number and the shared "Versions" menu. To add a page to a sidebar, edit the matching file in `app/data/nav/`.
- `app/components/MacWindowCodeSnippet.vue` – code block with the Mac window frame. Use it for every code sample:
  ```vue
  <MacWindowCodeSnippet lang="php">
    parent::__construct();
  </MacWindowCodeSnippet>
  ```

## License
This source code under MIT license.
