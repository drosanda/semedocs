// Nuxt 4 configuration. `.env` is loaded by Nuxt itself.
const port = process.env.PORT || '3001'
const local = `http://localhost:${port}`
const baseUrl = process.env.BASE_URL || local
const originUrl = process.env.ORIGIN_URL || local
const cdnUrl = process.env.CDN_URL || local
const gaId = process.env.GOOGLE_ANALYTICS_ID || ''
const description = 'Deployable and lightweight PHP MVC framework that is suitable for small and medium web app'

export default defineNuxtConfig({
  compatibilityDate: '2026-11-26',
  devtools: { enabled: false },
  ssr: true,

  modules: ['@nuxtjs/sitemap', 'nuxt-gtag'],

  css: ['~/assets/css/main.css', 'highlight.js/styles/obsidian.css'],

  devServer: { port: Number(port) },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { key: 'description', name: 'description', content: description },
        { key: 'robots1', name: 'robots', content: 'INDEX,FOLLOW' },
        { key: 'fbid', property: 'fb:app_id', content: '918859565356038' },
        { key: 'theme-color', name: 'theme-color', content: '#fb898f' },
        { key: 'og:title', name: 'og:title', content: 'Seme Framework Documentation' },
        { key: 'og:description', name: 'og:description', content: description },
        { key: 'og:image', name: 'og:image', content: `${cdnUrl}/fbshare.png` }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
        { rel: 'icon', type: 'image/x-icon', href: `${cdnUrl}/favicon.ico` },
        { rel: 'shortcut icon', type: 'image/x-icon', href: `${cdnUrl}/favicon.ico` }
      ],
      script: [
        // Google AdSense auto ads (replaces <amp-auto-ads>)
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5281151685218961',
          async: true,
          crossorigin: 'anonymous'
        }
      ]
    }
  },

  // The pages read `process.env.*` directly (like Nuxt 2's `env` option did),
  // so inline those values at build time for both server and client.
  vite: {
    define: {
      'process.env.PORT': JSON.stringify(port),
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL || ''),
      'process.env.ORIGIN_URL': JSON.stringify(process.env.ORIGIN_URL || ''),
      'process.env.CDN_URL': JSON.stringify(process.env.CDN_URL || ''),
      'process.env.GOOGLE_ANALYTICS_ID': JSON.stringify(gaId)
    }
  },

  // Code samples live inside slots; keep their line breaks and indentation.
  vue: {
    compilerOptions: { whitespace: 'preserve' }
  },

  site: {
    url: originUrl,
    name: 'Seme Framework Documentation'
  },

  gtag: {
    id: gaId,
    enabled: Boolean(gaId)
  }
})
