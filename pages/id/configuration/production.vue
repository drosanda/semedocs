<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/configuration">Pengaturan</NuxtLink></li>
          <li class="unavailable">Production</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Fase Production</h1>
            <p>Fase production adalah tahapan dimana aplikasi dipakai secara nyata, tidak untuk diubah-ubah lagi atau dicoba-coba lagi. Ketika terjadi error atau bug di tahap production sudah menjadi kesalahan yang fatal.</p>
            <p>
              Dengan menggunakan Seme Framework memungkinkan untuk fase production ini memiliki pengaturannya tersendiri dan mungkin saja berbeda dengan pengaturan untuk yaitu fase <i>development</i> dan fase <i>staging</i>.
            </p>
            <p>
              Pengaturan khusus untuk fase <i>production</i> ini ada di <code>app/config/production.php</code>.
            </p>
            <div class="message is-success">
  <div class="message-body">
              <p><b>Tips</b></p>
              <p>Jika ingin melakukan auto deploy dengan git, pastikan <code>app/config/staging.php</code> dan <code>app/config/production.php</code> sudah dikecualikan di dalam file <code>.gitignore</code>.</p>
            </div></div>
            <div class="message is-warning">
  <div class="message-body">
              <p><b>Perhatian</b></p>
              <p>Hati-hati dalam penggunaan <code>.gitignore</code> karena dapat menyebabkan file tidak terindeks ke dalam repositori.</p>
              <p>Pastikan untuk selalu melakukan pengecekan ganda untuk penggunaan .gitignore di dalam repositori.</p>
            </div></div>
          </div>
        </div>

      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/configuration/staging/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Fase Staging
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/tutorial/" class="btn">
            Tutorial
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
    data() {
      return {
        name: 'Seme Framework 4',
        suffix: ' - Seme Framework 4',
        title: 'Pengaturan untuk Fase Production',
        description: 'Pelajari selengkapnya tentang Pengaturan Seme Framework untuk Fase Production',
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/',
            text: 'ID',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/configuration/',
            text: 'Pengaturan',
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
          "dateModified": "2021-06-23T01:04:00+07:00",
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
