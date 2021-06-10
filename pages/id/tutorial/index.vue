<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Tutorial</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Tutorial</h1>
            <p>Tutorial ini dimaksudkan untuk memperkenalkan Anda pada Kerangka Seme dan prinsip dasar arsitektur MVC. Ini akan menunjukkan kepada Anda bagaimana aplikasi Kerangka Seme dasar dibangun selangkah demi selangkah.</p>
            <p>
              Tujuan dari tutorial ini adalah bagaimana menggunakan kerangka kerja dengan contoh kehidupan nyata. Sehingga developer dapat mengimplementasikan semua fitur yang ada pada Seme Framework seperti:
            </p>
            <ul>
              <li>Dasar-dasar Model-View-Controller (MVC)</li>
              <li>Dasar-dasar Routing basics</li>
              <li>Form validation</li>
              <li>Performing basic database queries using Query Builder</li>
              <li>Theming</li>
              <li>Admin</li>
              <li>Libraries</li>
              <li>and APIs</li>
            </ul>
            <p>Seluruhtutorial dibagi menjadi beberapa halaman. Masing-masing menjelaskan sebagian kecil dari fungsionalitas Seme Framework. Anda akan membuka halaman-halaman berikut:</p>
            <ul>
              <li><NuxtLink to="/id/tutorial/introduction/">Pendahuluan</NuxtLink>, yang memberi Anda gambaran umum tentang apa yang diharapkan.</li>
              <li><NuxtLink to="/id/tutorial/get-data/">Tema dan tata letak</NuxtLink>, yang akan mengajarkan Anda dasar-dasar membuat tampilan menggunakan Seme Framework.</li>
              <li><NuxtLink to="/id/tutorial/basic-api/">Building API</NuxtLink>, ni akan memperkenalkan lebih banyak tentang database, controller, dan model.</li>
            </ul>
            <p>Nikmati pengalaman eksplorasi dengan menggunakan Seme Framework.</p>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/configuration/production/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Fase Production
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/tutorial/introduction/" class="btn">
            Perkenalan
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
      name: 'Seme Framework v4.0.0',
      suffix: ' - Dokumentasi Seme Framework v4.0.0',
      title: 'Tutorial penggunaan',
      description: 'Pelajari selengkapnya tentang penggunaan Seme Framework di dunia nyata.',
      breadcrumbs: [
        {
          url: process.env.ORIGIN_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.ORIGIN_URL || 'http://localhost:3001')+'/id/',
          text: 'id',
        },
        {
          url: (process.env.ORIGIN_URL || 'http://localhost:3001')+'/id/tutorial/',
          text: 'tutorial',
        }
      ]
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'id'
      },
      title: this.title+' - '+this.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
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
          "@id": (process.env.ORIGIN_URL || 'http://localhost:3001')+this.$route.path.replace(/\/+$/, '') + '/'
        },
        "headline": (this.headline || this.title),
        "image": [
          this.logo
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
