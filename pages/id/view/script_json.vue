<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/view/">View</NuxtLink></li>
          <li class="unavailable">script json</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">File <code>script.json</code></h1>
            <p>
              File script.json berisikan kode untuk script tags yang akan digunakan untuk memanggil javascript pada tampilan tema.
              File ini dibutuhkan untuk membuat tema view di Seme Framework 4.
            </p>

            <h2>Lokasi</h2>
            <p>
              Lokasi file ini ada di dalam direktori tema.
            </p>
            <div class="macwindow">
              <div class="titlebar">
                <div class="buttons">
                  <div class="close">
                    <a class="closebutton" href="#"><span><strong>x</strong></span></a>
                    <!-- close button link -->
                  </div>
                  <div class="minimize">
                    <a class="minimizebutton" href="#"><span><strong>&ndash;</strong></span></a>
                    <!-- minimize button link -->
                  </div>
                  <div class="zoom">
                    <a class="zoombutton" href="#"><span><strong>+</strong></span></a>
                    <!-- zoom button link -->
                  </div>
                </div>
              </div>
              <div class="maccontent">
                <highlight-code lang="php">
                  app/
                  └── view/
                   └── [THEME_NAME]/
                    ├──  ...
                    ├──  script.json
                    └──  ...
                </highlight-code>
              </div>
            </div>

            <h2 class="">Cara kerja</h2>
            <p>
              File script.json diproses oleh <NuxtLink to="/id/controller/constructor/">metode constructor dari kelas SENE_Controller</NuxtLink> dan dioutputkan oleh <NuxtLink to="/id/controller/getjsfooter/">metode getJsFooter() dari SENE_Controller</NuxtLink>.
            </p>

            <h5>Cara Penggunaan dengan JSON String</h5>
            <p>
              Berikut ini adalah cara penggunaan file script.json dengan json string.
            </p>
            <div class="macwindow">
              <div class="titlebar">
                <div class="buttons">
                  <div class="close">
                    <a class="closebutton" href="#"><span><strong>x</strong></span></a>
                    <!-- close button link -->
                  </div>
                  <div class="minimize">
                    <a class="minimizebutton" href="#"><span><strong>&ndash;</strong></span></a>
                    <!-- minimize button link -->
                  </div>
                  <div class="zoom">
                    <a class="zoombutton" href="#"><span><strong>+</strong></span></a>
                    <!-- zoom button link -->
                  </div>
                </div>
              </div>
              <div class="maccontent">
                <highlight-code lang="javascript">
                  [
                    &#x22;&#x3C;script src=\&#x22;{{base_url}}skin/front/js/nprogress.js\&#x22;&#x3E;&#x3C;/script&#x3E;&#x22;,
                    &#x22;&#x3C;script src=\&#x22;{{base_url}}skin/front/js/moment.min.js\&#x22;&#x3E;&#x3C;/script&#x3E;&#x22;,
                    &#x22;&#x3C;script src=\&#x22;{{base_url}}skin/front/js/moment-with-locales.min.js\&#x22;&#x3E;&#x3C;/script&#x3E;&#x22;
                  ]
                </highlight-code>
              </div>
            </div>

            <h5>Cara penggunaan dengan JSON Object</h5>
            <p>
              Berikut ini adalah cara penggunaan dengan menggunakan JSON Object.
            </p>
            <p>
              Cara ini baru tersedia mulai dari versi Seme Framework 4.0.2.
            </p>
            <div class="macwindow">
              <div class="titlebar">
                <div class="buttons">
                  <div class="close">
                    <a class="closebutton" href="#"><span><strong>x</strong></span></a>
                    <!-- close button link -->
                  </div>
                  <div class="minimize">
                    <a class="minimizebutton" href="#"><span><strong>&ndash;</strong></span></a>
                    <!-- minimize button link -->
                  </div>
                  <div class="zoom">
                    <a class="zoombutton" href="#"><span><strong>+</strong></span></a>
                    <!-- zoom button link -->
                  </div>
                </div>
              </div>
              <div class="maccontent">
                <highlight-code lang="javascript">
                  {
                    &#x22;script&#x22;:
                    [
                      {
                        &#x22;src&#x22;: &#x22;https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js&#x22;
                      },
                      {
                        &#x22;src&#x22;: &#x22;&#x7B;&#x7B;base_url&#x7D;&#x7D;skin/v2/css/jquery.min.js&#x22;
                      },
                      {
                        &#x22;src&#x22;: &#x22;&#x7B;&#x7B;cdn_url&#x7D;&#x7D;assets/js/jquery.moneyFormat.min.js&#x22;
                      }
                    ]
                  }
                </highlight-code>
              </div>
            </div>

            <h2>Penggunaan kode <code>{{cdn_url}}</code> dan <code>{{base_url}}</code></h2>
            <p>
              File script.json mendukung penggunaan kode <code>{{cdn_url}}</code> dan <code>{{base_url}}</code> untuk menggantikan base_url dan url untuk CDN (cdn_url).
            </p>

          </div>
        </div>

      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/view/cdn_url/" class="btn">
            <i class="fa fa-chevron-left"></i>
            cdn_url
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/view/theme_json/" class="btn">
            theme.json
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'v4.0.0',
  data (){
    return {
      base_url: '{{base_url}}',
      cdn_url: '{{cdn_url}}',
      name: 'Seme Framework v4.0.0',
      suffix: ' - Seme Framework 4',
      title: 'File script.json',
      description: 'Pelajari cara penggunaan file script.json dalam tema view Seme Framework 4.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/',
          text: '4.0.0'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/controller/',
          text: 'View'
        }
      ],
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
        "dateCreated": "2021-07-21T18:01:00+07:00",
        "datePublished": "2021-07-21T18:02:00+07:00",
        "dateModified": "2021-07-21T19:06:24+07:00",
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
