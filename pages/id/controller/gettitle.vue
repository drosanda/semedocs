<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller/">Controller</NuxtLink></li>
          <li class="unavailable">Metode getTitle</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode getTitle</h1>
            <p>
              Metode getTitle digunakan untuk mengambil judul halaman berdasarkan metode <NuxtLink to="/id/controller/settitle/">setTitle</NuxtLink>.
            </p>

            <h2>Bentuk Umum</h2>
            <p>Berikut ini adalah bentuk umum metode <code>getTitle</code> dari kelas <NuxtLink to="/id/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink></p>
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
                  $this-&#x3E;getTitle(): string
                </highlight-code>
              </div>
            </div>

            <h3>Parameter</h3>
            <p>
              Metode ini tidak memiliki parameter.
            </p>

            <h2>Contoh Penggunaan</h2>
            <p>
              Biasanya metode ini hanya dipanggil didalam file layout atau didalam view component.
              Berikut ini adalah contoh penggunaanya pada file layout <code>col-1.php</code>.
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
                <highlight-code lang="html">
                  &#x3C;!DOCTYPE html&#x3E;
                  &#x3C;html&#x3E;
                  &#x3C;head&#x3E;
                    &#x3C;title&#x3E;&#x3C;?=$this-&#x3E;getTitle()?&#x3E;&#x3C;/title&#x3E;
                  &#x3C;/head&#x3E;
                  &#x3C;body&#x3E;
                    ...
                  &#x3C;/body&#x3E;
                  &#x3C;/html&#x3E;
                </highlight-code>
              </div>
            </div>

            <p>
              Sementara, untuk struktur file dan direktorinya.
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
                  ├── controller/
                  |&#160;└── home.php
                  └── view/
                  &#160;└── front/
                  &#160;&#160;└── page/
                  &#160;&#160;&#160;└── col-1.php
                </highlight-code>
              </div>
            </div>

            <p>
              Ini adalah contoh kode untuk penggunaan di controllernya.
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
                      $this-&#x3E;setTheme(&#x27;front&#x27;);
                    }
                    public function index()
                    {
                      ...
                      $this-&#x3E;setTitle(&#x27;Hello World!&#x27;,$data);
                      $this-&#x3E;loadLayout(&#x27;col-1&#x27;,$data);
                      $this-&#x3E;render();
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <p>
              Sementara untuk judulnya sekarang berisi <code>Hello World!</code>.
            </p>
            <amp-img layout="responsive" width="674" height="158" :src="btiex" alt="Browser title example"></amp-img>

            <br>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/id/controller/getkey/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  Metode getKey
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/id/controller/input/" class="btn">
                  Properti Input
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
      name: 'Seme Framework v4.0.0',
      suffix: ' - Seme Framework 4',
      title: 'Metode getTitle',
      description: 'Pelajari selengkapnya tentang metode getTitle dari SENE_Controller di Seme Framework 4.',
      btiex: require('~/assets/img/controller/browser-title-example.png'),
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/',
          text: 'id'
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
        "dateCreated": "2021-07-25T13:10:00+07:00",
        "datePublished": "2021-07-25T13:10:00+07:00",
        "dateModified": "2021-07-25T13:10:00+07:00",
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
