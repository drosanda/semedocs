<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/view/">View</NuxtLink></li>
          <li class="unavailable">Variabel</li>
          <li class="unavailable">base_url</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Variabel <code>{{base_url}}</code></h1>
            <p>
              Variabel <code>{{base_url}}</code> digunakan untuk menggantikan nilai tersebut dengan nilai yang ada pada <NuxtLink to="/id/configuration/">Pengaturan Seme Framework</NuxtLink> dalam nilai variabel <code>$site</code>.
            </p>

            <h2 class="">Contoh Pengaturan</h2>
            <p>
              Nilai dari BASE URL diambil dari pengaturan Seme Framework, berikut ini adalah contoh pengaturan dari file development.php.
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
                  ...
                  $site = &#x27;http://localhost/seme_framework/&#x27;;
                  ...
                </highlight-code>
              </div>
            </div>

            <h2 class="">Cara Kerja</h2>
            <p>
              Kode <code>{{base_url}}</code> hanya akan diproses ketika digunakan dalam file <code>theme.json</code> dan <code>script.json</code>.
            </p>

            <h2 class="">Fallback</h2>
            <p>
              Apabila pengaturan gagal diambil, maka nilai akan digantikan dengan string kosong.
            </p>

          </div>
        </div>

      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/view/variable" class="btn">
            <i class="fa fa-chevron-left"></i>
            Variabel
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/view/cdn_url" class="btn">
            cdn_url
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
      base_url: '{{base_url}}',
      cdn_url: '{{cdn_url}}',
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'Variabel {{base_url}}',
      description: 'Pelajari selengkapnya tentang penggunaan Variabel {{base_url}} pada theme.json atau script json di Seme Framework 4.',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/view',
          text: 'View'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/view/variable',
          text: 'Variabel'
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
        "dateCreated": "2021-07-19T20:31:00+07:00",
        "datePublished": "2021-07-19T20:32:00+07:00",
        "dateModified": "2021-07-19T23:38:31+07:00",
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
