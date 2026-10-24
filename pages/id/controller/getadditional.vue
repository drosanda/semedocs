<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">getAdditional</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode getAdditional</h1>
            <p>
              Metode <code>getAdditional</code> digunakan untuk mengambil nilai array yang telah disetel dari <NuxtLink to="/id/view/theme_json/">theme.json <i class="fa fa-window-restore"></i></NuxtLink> untuk ditampilkan didalam tag HTML <code>head</code>.
              Metode ini biasanya dipanggil didalam sebuah file <NuxtLink to="/id/view/theme/#requirement_layout">layout <i class="fa fa-window-restore"></i></NuxtLink> atau didalam komponen layout-nya.
            </p>

            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini bentuk umum penggunaan metode <code>getAdditional</code> dari kelas <NuxtLink to="/id/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink>.
            </p>
            <MacWindowCodeSnippet lang="php">
                  $this-&#x3E;getAdditional(): void
                </MacWindowCodeSnippet>

            <h3>Parameter</h3>
            <p>
              Metode ini tidak membutuhkan parameter apapun.
            </p>

            <h2>Contoh</h2>
            <p>
              Berikut ini adalah contoh penggunaan untuk metode <code>getAdditionalAfter</code> yang diimplementasikan pada file layout <code>col-1.php</code>.
            </p>
            <MacWindowCodeSnippet lang="html">
                  &#x3C;!DOCTYPE html&#x3E;
                  &#x3C;html&#x3E;
                  &#x3C;head&#x3E;
                    ...
                    &#x3C;?php $this-&#x3E;getAdditional(); ?&#x3E;
                    ...
                  &#x3C;/head&#x3E;
                  &#x3C;body&#x3E;
                    ...
                  &#x3C;/body&#x3E;
                  &#x3C;/html&#x3E;
                </MacWindowCodeSnippet>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/id/controller/constructor/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  __construct
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/id/controller/getadditionalafter/" class="btn">
                  getAdditionalAfter
                  <i class="fa fa-chevron-right"></i>
                </nuxt-link>
              </div>
            </div>

          </div>
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
      title: 'Metode getAdditional',
      description: 'Pelajari selengkapnya tentang metode getAdditional dari SENE_Controller di Seme Framework versi 4.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id',
          text: 'ID'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/controller',
          text: 'Controller'
        }
      ],
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
        "dateCreated": "2021-08-15T16:57:00+07:00",
        "datePublished": "2021-08-15T16:57:00+07:00",
        "dateModified": "2022-03-08T20:56:00+07:00",
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
