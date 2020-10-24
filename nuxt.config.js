export default {
  modules: [
    'nuxt-buefy',
    '@nuxtjs/amp',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    ['nuxt-highlightjs', {
      style: 'foundation'
    }]
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
      ogHost: 'https://seme.framework.web.id',
      ogImage: {
        path: '/carbon.png',
        width: '1480px',
        height: '1038px',
        type: 'image/png'
      },
      theme_color: '#fb898f'
    }
  },
  css: [
    '~/css/style.css'
  ],
  plugins: [
    { src: '~plugins/fb.js', mode: 'client' },
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  target: 'server',
  mode: 'universal',
  server: {
    port: 3001
  },
  build: {
    analyze: false,
    maxChunkSize: 300000
  },
  sitemap:
    {
      hostname: 'https://seme.framework.web.id',
      gzip: false
    }

}
