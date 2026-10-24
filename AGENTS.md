# AGENTS.md

Guidance for AI coding agents working in this repository. This is the canonical
file; tool-specific files (`CLAUDE.md`, `.github/copilot-instructions.md`,
`.clinerules/`) point back here.

## Project
Seme Framework documentation site, built with **Nuxt 4** (Vue 3, Vite, Nitro) and Yarn. Requires Node 22.22+, 24.15+ or 26+.
Published at https://seme.framework.web.id. See `readme.md` for setup and env vars.

## Commands
```bash
yarn install
cp .env.example .env   # first time only
yarn dev               # dev server on http://localhost:3001
yarn build             # production build
yarn start             # serve production build (node .output/server/index.mjs)
yarn generate          # static export
```
There is no test or lint script. Verify changes by running `yarn dev` (or `yarn build`) and loading the affected pages.

## Structure
Sources live in `app/` (Nuxt 4 layout); static files are in `public/`.

- `app/pages/<version>/` - docs per Seme version (`3.0`-`4.0`); `app/pages/id/` is the Indonesian docs; `app/pages/issue/` for issues.
- `app/layouts/*.vue` - tiny wrappers that render `<DocLayout name="..."><slot /></DocLayout>`. Pages select one with `definePageMeta({ layout: 'v4-0' })` in a `<script setup>` block. Layout file names use dashes (`v4-0`), while keys in `data/layouts.js` keep the dot (`v4.0`).
- `app/components/DocLayout.vue` - shared page shell (sidebar, footer, head/meta). Per-layout settings are in `app/data/layouts.js`.
- `app/data/nav/*.js` - sidebar menus as data; `app/data/versions.js` holds the release number and shared "Versions" menu.
- `app/components/MacWindowCodeSnippet.vue` / `HighlightCode.vue` - code block with Mac window frame / highlight.js renderer.
- `app/plugins/legacy-head.ts` - makes the pages' Options-API `head()` and `jsonld()` work (translated to `useHead`). New pages can keep using them.
- `nuxt.config.ts` - modules (`@nuxtjs/sitemap`, `nuxt-gtag`) and env wiring. `process.env.BASE_URL` etc. are inlined at build time via `vite.define`.
- `public/sw.js` - self-unregistering service worker that removes the old PWA worker from visitors' browsers. Keep it.

## Conventions
- **New doc page:** add the `.vue` file under the right `pages/<version>/` folder, set the matching `layout`, and add a sidebar entry in the matching `app/data/nav/` file. Otherwise the page is unreachable from the menu.
- **Code samples:** always use `<MacWindowCodeSnippet lang="php">...</MacWindowCodeSnippet>`, never raw `<pre><code>`.
- **New layout:** add a one-line file in `app/layouts/` and its settings in `app/data/layouts.js`; do not duplicate the shell.
- **HTML must be valid:** Vue 3 and browsers are strict. Don't put `<ul>`, `<ol>`, `<div>`, `<pre>` or another `<p>` inside a `<p>`; don't write raw `<?php` in a template (use `&#x3C;?php`). Both cause build errors or hydration mismatches.
- **Images and assets:** put them in `public/` and reference by URL (`/img/...`), not `require()`. Use plain `<img>`, not `<amp-img>`.
- **Install behind a corporate proxy:** use `NODE_OPTIONS=--use-system-ca yarn install` if a self-signed certificate error breaks it.
- Keep versions consistent: docs for one Seme version must not link to or describe another version's behaviour unless explicitly comparing.
- Follow `.editorconfig` (indentation, line endings).
- `@nuxt/content` and the markdown directory were removed; do not reintroduce them. Content lives in `.vue` pages.

## Don'ts
- Don't commit `.env` or secrets; update `.env.example` when adding a variable (and document it in `readme.md`).
- Don't edit `.nuxt/`, `node_modules/` or `yarn.lock` by hand.
- Don't upgrade Nuxt/Vue major versions as a side effect of another task.
- Don't reintroduce AMP or the PWA modules; both were dropped on purpose.
- Don't add dependencies without a clear need.

## Git
- Commit messages use an uppercase type prefix, e.g. `FIX: ...`, `REFACTOR: ...`, `CHORE: ...`.
- Default branch is `master`; work on feature branches.
