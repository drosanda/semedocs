<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller/">Controller</NuxtLink></li>
          <li class="unavailable">Metode loadLayout</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode loadLayout</h1>
            <p>Metode loadLayout digunakan untuk memanggil view layout dalam suatu tema.</p>

            <h2>Bentuk Umum</h2>
            <p>Berikut ini adaah bentuk umum metode <code>loadLayout</code> dari kelas SENE_Controller.</p>
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
                  $this-&#x3E;loadLayout(string $layout [, $data=array()]): controllerObject
                </highlight-code>
              </div>
            </div>

            <h3>Parameter</h3>
            <p>
              loadLayout memiliki 1 parameter wajib yaitu <b>$layout</b>.
            </p>

            <h4>$layout</h4>
            <p>
              Nilai dari $layout dapat berisi string dari layout yang ingin digunakan.
            </p>

            <h5>Syarat File Layout</h5>
            <p>
              Supaya file layout dapat dipanggil dengan baik, file layout harus berada didalam direktori <code>page</code> yang relatif terhadap tema tampilan yang digunakan.
              Untuk lebih lengkapnya lihat contoh ilustrasi susunan file dan direktori tema.
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
                  - app/
                  |- view/
                  |-- NAMA_TEMA/
                  |--- page/
                  |---- [nama_layout].php
                </highlight-code>
              </div>
            </div>

            <h4>$data</h4>
            <p>
              Nilai dari parameter <code>$data</code> dapat berisi <code>array of array</code> untuk dilemparkan ke dalam view component dari controller.
              <code>Kunci array</code> dari isi parameter ini akan dipecah menjadi variabel biasa ketika dipanggil pada view.
            </p>

            <h2>Contoh Penggunaan</h2>
            <p>Berikut ini adalah contoh penggunaan dari metode loadLayout.</p>
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
                  &#x3C;?php
                  class Blog extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;setTheme(&#x27;front&#x27;);
                    }
                    public function index(){
                      $data = array();
                      $data['contoh'] = 'ini contoh';
                      $this-&#x3E;setTitle(&#x27;Blog home&#x27;);
                      $this-&#x3E;putThemeContent(&#x22;blog/home&#x22;,$data);
                      $this-&#x3E;putJsContent(&#x27;blog/home_bottom&#x27;,$data);
                      $this-&#x3E;loadLayout(&#x27;col-1&#x27;,$data);
                      $this-&#x3E;render();
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Dalam potongan kode contoh tersebut, tema yang digunakan bernama <code>front</code> dan layout yang digunakan <code>col-1</code>.
              Kedua direktori dan file ini harus sudah ada baik secara struktur file maupun direktori.
              Untuk lebih lengkapnya lihat ilustrasi
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
                    ├──  home/
                    | ├──  slider.php
                    | └──  three_values.php
                    └──  page
                      └──  col-1.php
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p>
                  <b>Info</b>
                </p>
                <p>
                  Metode <NuxtLink to="/id/controller/putthemecontent/">putThemeContent <i class="fa fa-window-restore"></i></NuxtLink>, <NuxtLink to="/id/controller/putjscontent/">putJsContent <i class="fa fa-window-restore"></i></NuxtLink> dan <NuxtLink to="/id/controller/loadlayout/">loadLayout <i class="fa fa-window-restore"></i></NuxtLink> memiliki kemampuan untuk mem-buffer view, sehingga view ditampung terlebih dahulu sebelum ditampilkan ke browser melalui metode <NuxtLink to="/id/controller/render/">render <i class="fa fa-window-restore"></i></NuxtLink>.
                </p>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/id/controller/loadcss/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  loadCss
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/id/controller/putjscontent/" class="btn">
                  putJsContent
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
  data() {
    return {
      name: 'Seme Framework v4.0.0',
      suffix: ' - Seme Framework 4',
      title: 'Metode loadLayout',
      description: 'Pelajari selengkapnya tentang metode loadLayout dari kelas SENE_Controller di Seme Framework 4',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/',
          text: 'ID'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/controller/',
          text: 'Controller'
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
        "dateCreated": "2021-07-23T08:15:00+07:00",
        "datePublished": "2021-07-23T09:16:00+07:00",
        "dateModified": "2021-07-23T09:17:00+07:00",
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
