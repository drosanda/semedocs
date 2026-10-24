import { latest } from './versions'
import v4Nav from './nav/v4'
import idNav from './nav/id'
import legacyNav from './nav/legacy'
import { main, issues, v30, v33 } from './nav/site'

const DESC = 'Deployable and lightweight PHP MVC framework that is suitable for small and medium web app'
const MADE_EN = 'Made with Love in Bandung, Indonesia by Daeng Rosanda, S.Kom.'
const MADE_ID = 'Dibuat sepenuh cinta di Bandung, Indonesia oleh Daeng Rosanda, S.Kom.'

// One entry per layout name used by pages (`layout: '...'`).
//   suffix:    appended to the page title as "<title> - <suffix>" (omit for none)
//   badge:     { version, lang } for the sidebar badges (omit to hide them)
//   search:    show the Google CSE search box
//   analytics: render the AMP analytics tag
//   footer:    { copyright, updated, links } where links toggles Privacy/Terms
export default {
  default: {
    title: 'Seme Framework Documentation',
    description: DESC,
    badge: { version: latest, lang: 'en' },
    search: true,
    analytics: true,
    nav: main,
    footer: { copyright: `Copyright © 2014-2022. ${MADE_EN}`, updated: 'Last updated on March 8, 2022', links: true }
  },
  'v4.0': {
    title: 'Seme Framework v4.0.0 Documentation',
    description: 'Learn more about Seme Framework version 4.0.0 trough this documentation',
    suffix: 'Seme Framework',
    badge: { version: '4.0.0', lang: 'en' },
    search: true,
    analytics: true,
    nav: v4Nav('/4.0'),
    footer: { copyright: `Copyright © 2014-2024. ${MADE_EN}`, updated: 'Last updated on Jan 12, 2024', links: true }
  },
  id: {
    title: 'Seme Framework 4 Bahasa Indonesia',
    description: 'Dokumentasi Seme Framework 4 Bahasa Indonesia',
    suffix: 'Seme Framework',
    badge: { version: '4.0.0', lang: 'id' },
    search: true,
    analytics: true,
    nav: idNav('/id'),
    footer: { copyright: `Copyright © 2014-2024. ${MADE_ID}`, updated: 'Terakhir Diperbarui 12 Juni 2024', links: true }
  },
  issue: {
    title: 'Seme Framework Troubleshooting',
    description: 'Learn more about Seme Framework Troubleshooting trough this documentation',
    suffix: 'Seme Framework',
    analytics: true,
    nav: issues,
    footer: { copyright: `Copyright © 2014-2021. ${MADE_EN}`, updated: 'Last updated on June 10, 2021', links: true }
  },
  'v3.0': {
    title: 'Seme Framework v3.0.0 Documentation',
    description: 'Learn more about Seme Framework version 3.0.0 trough this documentation',
    suffix: 'Seme Framework',
    badge: { version: '4.0.0', lang: 'id' },
    analytics: true,
    nav: v30,
    footer: { copyright: `Copyright © 2014-2021. ${MADE_ID}`, updated: 'Diperbarui tanggal 1 Juni 2021' }
  },
  'v3.1': {
    title: 'Seme Framework Documentation v3.1.5',
    description: DESC,
    suffix: 'SemeDocs',
    badge: { version: '3.1.5', lang: 'en' },
    analytics: true,
    nav: legacyNav('/3.1', 'Version 3.1.5'),
    footer: { copyright: `Seme Framework v3.1.5 © 2014-2022. ${MADE_EN}`, updated: 'Last updated on March 8, 2022' }
  },
  'v3.2': {
    title: 'Seme Framework Documentation v3.2.5',
    description: DESC,
    suffix: 'SemeDocs',
    badge: { version: '3.2.1', lang: 'en' },
    analytics: true,
    nav: legacyNav('/3.2', 'Version 3.2.X'),
    footer: { copyright: `Seme Framework v3.2.5 © 2014-2022. ${MADE_EN}`, updated: 'Last updated on March 8, 2022' }
  },
  'v3.3': {
    title: 'Seme Framework Documentation v3.3.0',
    description: DESC,
    suffix: 'Seme Framework',
    badge: { version: '3.3.0', lang: 'en' },
    nav: v33,
    footer: { copyright: `Copyright © 2014-2021. ${MADE_EN}`, updated: 'Last updated on 30 May 2021' }
  }
}
