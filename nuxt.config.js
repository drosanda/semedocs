export default {
  modules: [
    'nuxt-buefy',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Deployable and lightweight PHP MVC framework that suitable for small and medium web app' },
      { hid: 'robots1', name: 'robots', content: 'INDEX,FOLLOW'},
      { hid: 'fbid', property: 'fb:app_id', content: '626835541386275'},
      { hid: 'theme-color', property: 'theme-color', content: '#fb898f'},
      { hid: 'og:title', name: 'og:description', content: 'Seme Framework Documentation'},
      { hid: 'og:description', name: 'og:description', content: 'Deployable and lightweight PHP MVC framework that suitable for small and medium web app'}
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css.map' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/FontAwesome.otf' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  pwa: {
    meta: {
      ogHost: 'https://seme.nyingspot.com',
      ogImage: {
        path: '/carbon.png',
        width: '1480px',
        height: '1038px',
        type: 'image/png'
      }
    },
    manifest: {
      publicPath: '/'
    }
  },
  css: [
    '~/css/style.css'
  ],
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  target: 'static',
  mode: 'spa',
  build: {
    analyze: false,
    maxChunkSize: 300000
  },
  sitemap:
    {
      hostname: 'https://seme.nyingspot.com',
      gzip: false
    }

}
