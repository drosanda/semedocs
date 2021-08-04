<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller/">Controller</NuxtLink></li>
          <li class="unavailable">Metode putThemeContent</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode putThemeContent</h1>
            <p>
              Metode putThemeContent digunakan untuk memanggil file <code>view component</code> dari sebuah tema.
              Untuk memanggil view component yang lain, metode ini bisa digunakan berkali-kali.
            </p>

            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini adalah bentuk umum metode <code>putThemeContent</code> dari kelas <NuxtLink to="/id/controller/#SENE_Controller" target="_blank">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink>.
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
                  $thi-&#x3E;putThemeContent(string $content_location[, array $data=array()]): controllerObject
                </highlight-code>
              </div>
            </div>
            <h3>Parameter</h3>
            <p>
              Metode ini memiliki 1 paremeter wajib yaitu $content_location.
            </p>
            <h4>$content_location</h4>
            <p>
              Nilai dari parameter <code>$content_location</code> merupakan sebuah string yang merujuk pada lokasi file view component didalam tema terpilih.
              Isi dari nilai ini tidak perlu diberi akhiran <code>.php</code>.
            </p>

            <h4>$data</h4>
            <p>
              Nilai dari parameter <code>$data</code> dapat berisi <code>array of array</code> untuk dilemparkan ke dalam view component dari controller.
              <code>Kunci array</code> dari isi parameter ini akan dipecah menjadi variabel biasa ketika dipanggil pada view.
            </p>

            <h2>Contoh</h2>
            <p>
              Berikut ini adalah contoh penggunaan metode putThemeContent.
            </p>

            <h3>Strukur File dan Direktori</h3>
            <p>
              Sebelum memahami penggunaan kode, pahami terlebih dahulu ilustrasi struktur file dan direktorinya.
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

            <h3>Contoh Controller</h3>
            <p>
              Berikut ini adalah contoh kode penggunaan metode <code>putThemeContent</code> pada controller home.
              Pada controller, ada variabel <code>$data</code> yang akan dikirim ke view.
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
                      $this-&#x3E;setTheme(&#x27;homepage&#x27;);
                    }
                    public function index()
                    {
                      $data = array();
                      $data['contoh'] = 'ini contoh';
                      $this-&#x3E;putThemeContent(&#x27;home/slider&#x27;,$data);
                      $this-&#x3E;putThemeContent(&#x27;home/three_values&#x27;,$data);
                      $this-&#x3E;loadLayout(&#x27;col-1&#x27;,$data);
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Contoh View Compoent</h3>
            <p>
              Berikut ini adalah contoh isi dari  file <code>home/slider.php</code>.
              Dari contoh ini kita akan melihat bagaimana isi dari parameter <code>$data</code> array key-nya akan dipecah menajdi variabel biasa.
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
                  &#x3C;div&#x3E;
                    &#x3C;h1&#x3E;This is parsed example &#x3C;?=$contoh?&#x3E;&#x3C;/h1&#x3E;
                  &#x3C;/div&#x3E;
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
                <nuxt-link to="/id/controller/putjsready/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  putJsReady
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/id/controller/render/" class="btn">
                  render
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
      name: 'Seme Framework vid',
      suffix: ' - Seme Framework 4',
      title: 'Metode putThemeContent',
      description: 'Pelajari cara penggunaan metode putThemeContent dari kelas SENE_Controller di Seme Framework 4.',
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
        "dateCreated": "2021-07-31T15:17:00+07:00",
        "datePublished": "2021-07-31T15:17:00+07:00",
        "dateModified": "2021-07-31T15:17:00+07:00",
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
