<template>
  <div class="section">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul class="breadcrumbs">
        <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
        <li class=""><NuxtLink to="/3.2.1">3.2.x</NuxtLink></li>
        <li class="unavailable">Database</li>
      </ul>
    </nav>
    <div class="columns">
      <div class="column">
        <div class="content">
          <h1 class="">Database Reference</h1>
          <p>
            Seme Framework comes with a full-featured and very fast abstracted database class that supports both traditional structures and Query Builder patterns.
            The database class instantiated as a <code>$db</code> property on <code>SENE_Model</code> class.
          </p>

          <ul>
            <li><NuxtLink to="/3.2.1/database/quick-start">Quick Start <i class="fa fa-window-restore"></i></NuxtLink></li>
            <li><NuxtLink to="/3.2.1/database/query-builder">Query Builder <i class="fa fa-window-restore"></i></NuxtLink></li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</div>
</template>
<script>
export default {
  layout: 'v3.2',
  data (){
    return {
      name: 'Seme Framework v3.2.5',
      suffix: ' - Seme Framework 3.2.5',
      title: 'Database Reference',
      description: 'Learn more about database Reference on Seme Framework 3.2.5.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2.1',
          text: '3.2.x'
        }
      ]
    }
  },
  head() {
    return {
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
    this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
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
        "dateCreated": "2021-08-04T22:03:01+07:00",
        "datePublished": "2021-08-04T22:03:02+07:00",
        "dateModified": "2021-08-04T21:58:32+07:00",
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
