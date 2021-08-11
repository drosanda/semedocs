<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/configuration">Pengaturan</NuxtLink></li>
          <li class="unavailable">Development</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Fase Development</h1>
            <p>Fase development adalah tahapan dimana aplikasi dibangun di komputer masing-masing. Biasanya pengaturan fase development ini sangat bervariasi. Ada yang standar ada juga yang sudah tidak standar, tergantung dari pembangunan aplikasi.</p>
            <p>
              Dengan menggunakan Seme Framework memungkinkan untuk memiliki 3 jenis lingkungan pengembangan, yaitu fase <i>development</i>, fase <i>staging</i>, dan fase <i>production</i>. Pada fase development pengaturan disimpan di <code>app/config/development.php</code>.
            </p>
            <p>
              Pengaturan lingkungan yang terpisah untuk fase development memungkinkan  seperti koneksi database, base url, dan pengaturan tambahan lainnya bisa berbeda dari lingkungan <i>staging</i> maupun <i>production</i>.
            </p>
          </div>
        </div>
      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/configuration/db-connection/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Koneksi DB
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/configuration/staging/" class="btn">
            Fase Staging
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
        title: 'Pengaturan untuk Fase Development',
        description: 'Pelajari selengkapnya tentang Pengaturan Seme Framework untuk Fase Development',
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
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/configuration',
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
    jsonld() { this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
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
          "dateCreated": "2021-08-11T19:52:38+07:00",
          "datePublished": "2021-08-11T19:52:38+07:00",
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
