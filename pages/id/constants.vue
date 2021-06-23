<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Konstanta</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1>Konstanta</h1>
            <p>Seme Framework memiliki beberapa konstanta yang akan membantu pada saat pembuatan kode aplikasi.</p>
            <p>Berikut ini adalah tabel konstantanya:</p>
            <table>
              <thead>
                <tr>
                  <th>Konstanta</th>
                  <th>NIlai</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SEMEROOT</td>
                  <td>Menunjuk pada direktori <i>root</i> Seme Framework yang digunakan.</td>
                </tr>
                <tr>
                  <td>SEMELIB</td>
                  <td>Mengarah ke direktori <code>kero/lib</code> yang ada di dalam Seme Framework.</td>
                </tr>
                <tr>
                  <td>SEME_VERSION (versi 4.x)</td>
                  <td>Melihat versi Seme Framework yang dgunakan.</td>
                </tr>
                <tr>
                  <td>SENE_VERSION (versi 3.x)</td>
                  <td>Melihat versi Seme Framework yang dgunakan.</td>
                </tr>
                <tr>
                  <td>SEME_START</td>
                  <td>Bernilai dengan format <i>microtime</i> pada saat skrip pertama kali dieksekusi.</td>
                </tr>
                <tr>
                  <td>DS</td>
                  <td>Berisi nilai directory separator. Contoh di Windows \ sementara di Mac atau linux /.</td>
                </tr>
              </tbody>
            </table>


          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/uri_routing/admin/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Uri Routing: Admin
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/globals/" class="btn">
            Globals
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
      title: 'Konstanta',
      description: 'Pelajari selengkapnya tentang Konstanta yang ada pada Seme Framework versi 4.0.0.',
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
