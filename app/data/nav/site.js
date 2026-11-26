import { versions } from '../versions'

const home = { to: '/', text: 'Seme Framework' }
const deployment = { to: '/deployment', text: 'Deployment' }
const issue = { to: '/issue', text: 'Issue' }

// Sidebar for the landing page and other site-level pages.
export const main = [
  home,
  { to: '/credits', text: 'Credits' },
  { to: '/version', text: 'Versions', children: versions },
  {
    to: '/issue',
    text: 'Issue',
    children: [
      { to: '/issue/notice', text: 'Notice' },
      { to: '/issue/troubleshooting', text: 'Troubleshooting' }
    ]
  },
  {
    to: '/deployment',
    text: 'Deployment',
    children: [{ to: '/deployment/hosting-cpanel', text: 'Hosting with CPANEL' }]
  }
]

// Sidebar for the issue / troubleshooting pages.
export const issues = [
  home,
  { to: '/credits/', text: 'Credits' },
  { href: '#', text: 'Version', children: versions },
  {
    to: '/issue',
    text: 'Issue',
    children: [
      { to: '/issue/notice', text: 'Error Notice' },
      { to: '/issue/troubleshooting', text: 'Troubleshooting' }
    ]
  }
]

// Sidebar for 3.0 and 3.3, which only have a landing page.
export const v30 = [home, { to: '/credits', text: 'Credits' }, { to: '/version', text: 'Versions', children: versions }, issue, deployment]
export const v33 = [home, { to: '/credits', text: 'Credits' }, { to: '/3.3', text: 'Version 3.3.x' }, issue, deployment]
