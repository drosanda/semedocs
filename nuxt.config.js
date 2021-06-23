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
    '@nuxtjs/dotenv',
    '@nuxtjs/amp',
    '@nuxtjs/sitemap'
  ],
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Deployable and lightweight PHP MVC framework that suitable for small and medium web app' },
      { hid: 'robots1', name: 'robots', content: 'INDEX,FOLLOW'},
      { hid: 'fbid', property: 'fb:app_id', content: '918859565356038'},
      { hid: 'theme-color', property: 'theme-color', content: '#fb898f'},
      { hid: 'og:title', name: 'og:description', content: 'Seme Framework Documentation'},
      { hid: 'og:description', name: 'og:description', content: 'Deployable and lightweight PHP MVC framework that suitable for small and medium web app'},
      { hid: 'og:image', name: 'og:image', content: (process.env.CDN_URL || 'http://localhost:3001')+'/fbshare.png'}
    ],
    link: [
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: (process.env.CDN_URL || 'http://localhost:3001')+'/favicon.ico'},
      { rel: 'shortcut icon', type: 'image/x-icon', href: (process.env.CDN_URL || 'http://localhost:3001')+'/favicon.ico'}
    ]
  },
  pwa: {
    meta: {
      ogHost: process.env.ORIGIN_URL || 'http://localhost:3001',
      ogImage: {
        path: (process.env.CDN_URL || 'http://localhost:3001')+'/carbon.png',
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
    buildPath: process.env.CDN_URL || 'http://localhost:3001',
    analyze: false,
    maxChunkSize: 300000,
    extend(config, ctx) {
      config.node = {
        fs: 'empty'
      },
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    autoTracking: {
      screenview: true
    }
  },
  amp: {
    origin: process.env.BASE_URL || 'http://localhost:3001',
    mode: 'only', //could use `only` or `false` as well,
    css: '~/css/app.amp.css'
  },
  sitemap: {
    hostname: process.env.ORIGIN_URL || 'http://localhost:3001',
    gzip: false
  }
}
