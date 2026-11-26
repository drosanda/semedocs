# Project rules

Read and follow [`AGENTS.md`](../AGENTS.md) at the repository root. It is the single source of truth for commands, structure and conventions.

Key points:
- Nuxt 4 / Vue 3 docs site (sources in `app/`, static files in `public/`); use Yarn (`yarn dev`, `yarn build`). No test or lint scripts, so verify by loading pages in the dev server.
- Code samples use `<MacWindowCodeSnippet lang="php">`, not raw `<pre><code>`.
- New doc pages need a sidebar entry in `app/data/nav/` and the correct layout (`definePageMeta({ layout: 'v4-0' })`).
- Commit messages use prefixes like `FIX:`, `REFACTOR:`, `CHORE:`.
- Valid HTML only: no block elements inside `<p>`, no raw `<?php` in templates (use `&#x3C;?php`). No AMP or PWA.
- Never commit `.env`; don't bump Nuxt/Vue majors unprompted.
