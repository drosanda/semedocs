require('dotenv').config()

export default {
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/amp',
    '@nuxtjs/sitemap'
  ],
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Deployable and lightweight PHP MVC framework that suitable for small and medium web app' },
      { hid: 'robots1', name: 'robots', content: 'INDEX,FOLLOW'},
      { hid: 'fbid', property: 'fb:app_id', content: '626835541386275'},
      { hid: 'theme-color', property: 'theme-color', content: '#fb898f'},
      { hid: 'og:title', name: 'og:description', content: 'Seme Framework Documentation'},
      { hid: 'og:description', name: 'og:description', content: 'Deployable and lightweight PHP MVC framework that suitable for small and medium web app'}
    ],
    link: [
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  pwa: {
    meta: {
      ogHost: process.env.ORIGIN_URL || 'http://localhost:3000',
      ogImage: {
        path: '~/static/carbon.png',
        width: '1480px',
        height: '1038px',
        type: 'image/png'
      },
      theme_color: '#fb898f'
    }
  },
  css: [

  ],
  plugins: [
    { src: '@/plugins/hl' },
    { src: '@/plugins/jsonld' }
  ],

  ssr: true,
  target: 'server',

  server: {
    port: 3001
  },
  build: {
    analyze: false,
    maxChunkSize: 300000
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    autoTracking: {
      screenview: true
    }
  },
  amp: {
    origin: process.env.ORIGIN_URL || 'http://localhost:3000',
    mode: 'only', //could use `only` or `false` as well,
    css: '~/css/app.amp.css'
  },
  sitemap: {
    hostname: process.env.ORIGIN_URL || 'http://localhost:3000',
    gzip: false
  }
}
