# Seme Framework Documentation

Seme Framework documentation using NuxtJS 2. Published at [https://seme.framework.web.id](https://seme.framework.web.id).

## Requirements
- Node.js (the `upgrade/node26` branch was built with Node 26)
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
yarn start      # serve the production build
yarn generate   # static export
```

## Environment variables
All are optional; defaults point to `http://localhost:$PORT`.

| Variable | Purpose |
| --- | --- |
| `PORT` | Dev/prod server port (default `3001`) |
| `BASE_URL` | AMP origin |
| `ORIGIN_URL` | Sitemap hostname |
| `CDN_URL` | Base URL for icons and share images |
| `GOOGLE_ANALYTICS_ID` | Google Analytics tracking ID |

## Project structure
- `pages/<version>/` – documentation pages per Seme version (`3.0`–`4.0`); `pages/id/` is the Indonesian version.
- `layouts/` – one tiny file per layout name that pages reference (`layout: 'v4.0'`); each just renders `<DocLayout name="...">`.
- `components/DocLayout.vue` – the shared page shell (sidebar, footer, head/meta). Per-layout settings live in `data/layouts.js`.
- `data/nav/` – sidebar menus as data; `data/versions.js` holds the release number and the shared "Versions" menu. To add a page to a sidebar, edit the matching file in `data/nav/`.
- `components/MacWindowCodeSnippet.vue` – code block with the Mac window frame. Use it for every code sample:
  ```vue
  <MacWindowCodeSnippet lang="php">
    parent::__construct();
  </MacWindowCodeSnippet>
  ```

## License
This source code under MIT license.
