<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Command Line Interface (CLI)</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1 class="">Command Line Interface</h1>
            <p>Seme Framework now supporting command line interface (CLI) for executing the framework through the CLI.</p>
            <h2>Basic Usage</h2>
            <p>Please make sure you are in same directory with root framework directory</p>
            <pre>php index.php [controller | [directory in controller [controller]]] [method] [param1] [param2]...[paramN]</pre>
            <h2>Example</h2>
            <p>In the example we will introduce how Seme Framework can be integrated with Cron Job<p>
            <h3>CronJob</h3>
            <p>If you want integrating with cron job executed every 4am and want to executed method fix in class home inside api_cron directory.</p>
            <pre>0 4 * * * /usr/bin/php /var/www/html/index.php api_cron home fix</pre>
            <p>You can adjusted the <i>/usr/bin/php</i> depends on your system.</p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/library" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Library
            </b-button>
            <b-button tag="router-link" to="/3.3.0" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Version: 3.3.0
            </b-button>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/library/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Library
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/3.3.0" class="btn">
            Version: 3.3.0
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'id',
  data (){
    return {
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4 Bahasa Indonesia',
      title: 'Command Line Interface (CLI)',
      description: 'Pelajari selengkapnya tentang how to use Command Line Interface (CLI) on melalui dokumentasi Seme Framework versi 4.0.0.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/',
          text: 'ID',
        }
      ]
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'id'
      },
      title: this.title+this.suffix,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.name+': '+this.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        }
      ]
    }
  },
  jsonld() {
    const items = this.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        "@type": "WebPage",
        '@id': item.url,
        name: item.text,
      },
    }));
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items,
      },
      {
        "@type": "NewsArticle",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path.replace(/\/+$/, '') + '/'
        },
        "headline": (this.headline || this.title),
        "image": [
          (process.env.CDN_URL || 'http://localhost:3001')+'/logo.png'
        ],
        "dateCreated": "2020-06-11T10:12:00+07:00",
        "datePublished": "2020-06-11T10:12:00+07:00",
        "dateModified": "2021-06-11T01:04:00+07:00",
        "author": {
          "@type": "Person",
          "gender": "Male",
          "name": "Daeng Rosanda, S.Kom",
          "alternateName": "Daeng Rosanda",
          "jobTitle": "Founder",
          "worksFor": {
            "@type": "Organization",
            "name": "Cipta Esensi Merenah",
            "email": "hi@cenah.co.id"
          }
        },
        "publisher": {
          "@type": "Organization",
          "name": "Cipta Esensi Merenah",
          "description": "Cipta Esensi Merenah (Cenah) is software house company focused on developing web-based application from Bandung, Indonesia.",
          "logo": {
            "@type": "ImageObject",
            "name": "logo Cipta Esensi Merenah",
            "url": "https://cdn.cenah.co.id/_nuxt/img/logo-wide.5420183.png",
            "width": "256px",
            "height": "62px"
          }
        },
        "description": this.description
      }
    ];
  }
}
</script>
