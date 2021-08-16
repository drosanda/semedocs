<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">putJsFooter</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode putJsFooter</h1>
            <p>
              Metode <code>putJsFooter</code> digunakan untuk memanggil <NuxtLink to="/id/view/theme#spesifik_js">View Spesifik untuk Javascript <i class="fa fa-window-restore"></i></NuxtLink> ketika ada dalam sebuah tema.
            </p>

            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini bentuk umum penggunaan metode <code>putJsFooter</code> dari kelas <NuxtLink to="/id/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink>.
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
                  $this-&#x3E;putJsFooter(string $content_location[, array $data]): $this
                </highlight-code>
              </div>
            </div>

            <h3>Parameters</h3>
            <p>
              Metode ini membutuhkan 1 parameter wajib dan 1 parameter opsional.
            </p>

            <h4>$content_location</h4>
            <p>
              Nilai dari <code>$content_location</code> dapat berupa sebuah string yang merujuk pada lokasi file dibawah terhadap direktori <code>app/view/THEME/</code>.
              Nilai ini juga dapat berisi juga awalan untuk sub direktori sebelum lokasi file.
            </p>

            <h4>$data</h4>
            <p>
              Nilai dari <code>$data</code> dapat berupa <code>array</code> yang berisi 1 atau lebih pasang <em>array key value</em>.
            </p>

            <h2>Contoh</h2>
            <p>
              Berikut ini adalah contoh untuk metode <code>putJsFooter</code> pada sebuah kelas controller.
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
                  class Home extends SENE_Controller
                  {
                    public function __construct()
                    {
                      parent::__construct();
                      $this-&#x3E;setTheme(&#x27;home&#x27;);
                    }
                    public function index()
                    {
                      $data = array();
                      $this-&#x3E;putThemeContent(&#x27;home/home&#x27;,$data);
                      $this-&#x3E;putJsFooter(&#x27;home/home_bottom&#x27;,$data);
                      $this-&#x3E;loadLayout(&#x27;col-1&#x27;,$data);
                      $this-&#x3E;render();
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <h3>Struktur File dan Directory</h3>
            <p>
              Jadi tema <code>front</code>, kemudian layout <code>col-1</code> layout serta <code>home_bottom.php</code> harus ada didalam struktur direktori.
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
                   └── front/
                    ├── home/
                    | ├── home.php
                    | └── home_bottom.php
                    ├── page/
                    | └── col-1.php
                    └── ...
                </highlight-code>
              </div>
            </div>

            <h3>Contoh home_bottom.php</h3>
            <p>
              Berikut ini adalah contoh source code untuk file <code>home_bottom.php</code> yang berisi javascript.
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
                  alert(&#x27;Hi, this is from home_bottom&#x27;);
                </highlight-code>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/id/controller/putjscontent" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  putJsContent
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/id/controller/putjsready" class="btn">
                  putJsReady
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
  layout: 'v4.0',
  data() {
    return {
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'Metode putJsFooter',
      description: 'Pelajari tentang metode putJsFooter dari kelas SENE_Controller untuk Seme Framework versi 4',
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
        "dateCreated": "2021-08-16T08:38:00+07:00",
        "datePublished": "2021-08-16T08:38:00+07:00",
        "dateModified": "2021-08-16T08:38:00+07:00",
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
