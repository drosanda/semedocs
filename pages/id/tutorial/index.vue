<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Tutorial</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Tutorial</h1>
            <p>
              Tutorial ini dimaksudkan untuk memperkenalkan Anda pada Seme Framework.
              Tutorial ini terbagi kedalam 2 bagian, yaitu konsep dasar teori dan penggunaan secara praktis.
              Nikmati pengalaman baru anda saat menjelajahi tutorial ini.
            </p>
            <h2>Tutorial Teori</h2>
            <p>
              Berikut ini adalah daftar materi untuk pengenalan konsep dasar Seme Framework secara teori:
            </p>
            <ul>
              <li><NuxtLink to="/id/tutorial/basic-php/">Belajar Singkat PHP</NuxtLink></li>
              <li><NuxtLink to="/id/tutorial/basic-mvc/">Dasar Model-View-Controller (MVC)</NuxtLink></li>
              <li><NuxtLink to="/id/tutorial/basic-routing/">Dasar Perutean</NuxtLink></li>
              <li><NuxtLink to="/id/tutorial/basic-static/">Pembuatan dan Perpindahan antar halaman statis</NuxtLink></li>
              <li><NuxtLink to="/id/tutorial/basic-form/">Penggunaan Form HTML dan Prosesnya</NuxtLink></li>
            </ul>
            <h2>Tutorial Praktek</h2>
            <p>
              Berikut ini adalah daftar tutorial praktek Seme Framework. Diharapkan dengan mempelajari tutorial daftar tutorial dibawah ini, anda telah memahami teori yang dibutuhkan untuk menggunakan Seme Framework.
            </p>
            <ul>
              <li><NuxtLink to="/id/tutorial/introduction/">Pendahuluan</NuxtLink>, yang memberi Anda gambaran umum tentang apa yang diharapkan.</li>
              <li><NuxtLink to="/id/tutorial/notfound-page/">Halaman Notfound</NuxtLink>, pelajari tentang cara pembuatan halaman notfound.</li>
              <li><NuxtLink to="/id/tutorial/navigation/">Navigation Bar</NuxtLink>, pelajari tentang cara pembuatan view component Navigation Bar.</li>
              <li><NuxtLink to="/id/tutorial/get-data/">Mendapatkan Data</NuxtLink>, pelajari cara mendapatkan data dari database melalui MVC di Seme Framework.</li>
              <li><NuxtLink to="/id/tutorial/basic-api/">Building API</NuxtLink>, pelajari lebih banyak tentang database, controller, dan model.</li>
            </ul>

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
          <nuxt-link to="/id/tutorial/basic-php/" class="btn">
            Belajar Singkat PHP
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
      suffix: ' - Seme Framework 4',
      title: 'Tutorial penggunaan',
      description: 'Pelajari selengkapnya tentang penggunaan Seme Framework di dunia nyata.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id',
          text: 'ID',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/tutorial',
          text: 'Tutorial',
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
    this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
    const items = this.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': "WebPage",
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
        "dateCreated": "2021-08-11T19:52:38+07:00",
        "datePublished": "2021-08-11T19:52:38+07:00",
        "dateModified": "2021-06-28T08:24:09+07:00",
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
