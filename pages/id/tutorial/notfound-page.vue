<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial/">Tutorial</NuxtLink></li>
          <li class="unavailable">Halaman Notfound</li>
        </ul>
      </nav>
      <div>
        <div class="column">
          <div class="content">
            <h1 class="">Halaman Notfound</h1>
            <p>
              Halaman not found merupakan halaman yang di desain untuk menangani <code>fallback</code> ketika URL yang diminta tidak ada atau tidak ditemukan dalam <code>app/controller</code>.
              Pada tutorial kali ini kita akan membuat Halaman notfound dengan menggunakan tampilan materializeCSS.
              Jadi, pastikan untuk menyelesaikan tutorial <NuxtLink to="/id/tutorial/introduction/#part2">Pengenalan bagian 2</NuxtLink> sebelum melanjutkan tutorial ini.
              Sehingga pengaturan view, view component, beserta temanya sudah disetel dan berjalan dengan baik.
            </p>

            <amp-img layout="responsive" width="1656" height="594" :src="notfoundex" alt="Notfound page example"></amp-img>

            <h2>Membuat layout</h2>
            <p>
              Pertama-tama kita akan membuat layout khusus untuk <code>notfound</code>.
              Biasanya, halaman notfound ini memiliki struktur HTML yang berbeda dengan halaman lainnya, sehingga harus memiliki layout khusus.
              Buat file baru di <code>app/view/front/layout/error_404.php</code> untuk layout notfound.
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
  &#x3C;?php $this-&#x3E;getThemeElement(&#x27;layout/partials/head&#x27;, $__forward) ?&#x3E;
  &#x3C;body style=&#x22;background-color: khaki;&#x22;&#x3E;

    &#x3C;div class=&#x22;container&#x22;&#x3E;
      &#x3C;div class=&#x22;row&#x22;&#x3E;
        &#x3C;div class=&#x22;col-md-12&#x22;&#x3E;
          &#x3C;h1&#x3E;&#x3C;small style=&#x22;color: rgba(0,0,0,0.5);&#x22;&#x3E;Error 404&#x3C;/small&#x3E; Notfound&#x3C;/h1&#x3E;
          &#x3C;p&#x3E;Oops, looks like this page doesn&#x27;t exist&#x3C;/p&#x3E;
          &#x3C;hr&#x3E;
          &#x3C;h5&#x3E;Back to &#x3C;a href=&#x22;&#x3C;?=base_url()?&#x3E;&#x22;&#x3E;Homepage&#x3C;/a&#x3E;&#x3C;/h5&#x3E;
        &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;!-- jQuery, Bootstrap.js, jQuery plugins and Custom JS code --&#x3E;
    &#x3C;?php $this-&#x3E;getJsFooter(); ?&#x3E;

    &#x3C;!-- Load and execute javascript code used only in this page --&#x3E;
    &#x3C;script&#x3E;
      $(document).ready(function(e){
        &#x3C;?php $this-&#x3E;getJsReady(); ?&#x3E;
      });
      &#x3C;?php $this-&#x3E;getJsContent(); ?&#x3E;
    &#x3C;/script&#x3E;
  &#x3C;/body&#x3E;
&#x3C;/html&#x3E;
                </highlight-code>
              </div>
            </div>

            <h2>Menyesuaikan Controller Notfound</h2>
            <p>
              Setelah layoutnya selesai, tinggal penyesuaian di <code>app/controller/notfound.php</code>.
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
&#x3C;?php
/**
 * Controller class for throw 404 response code
 *
 * @package SemeFramework
 * @since SemeFramework 1.0
 *
 * @codeCoverageIgnore
 */
class NotFound extends \SENE_Controller
{
    public function __construct()
    {
        parent::__construct();
    }
    public function index()
    {
        $data = array();
        header(&#x22;HTTP/1.0 404 Not Found&#x22;);
        $this-&#x3E;setTheme(&#x27;front&#x27;);
        $this-&#x3E;setTitle(&#x27;Notfound - Error 404&#x27;);
        $this-&#x3E;loadLayout(&#x22;error_404&#x22;,$data);
        $this-&#x3E;render();
    }
}
                </highlight-code>
              </div>
            </div>


            <h2>Mencoba halaman notfound</h2>
            <p>
              Untuk mencoba halaman notfound, cukup ketikan sembarang URL setelah base_url-nya. Lihat contoh dibawah ini:
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
                  http://localhost/seme_framework/asdasdasad
                </highlight-code>
              </div>
            </div>

            <hr>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/tutorial/introduction/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Tutorial: Introduction
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/tutorial/navigation/" class="btn">
            Tutorial: Navigation
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
      name: 'Seme Framework 4 Tutorial',
      suffix: ' - Seme Framework 4 Tutorial',
      title: 'Halaman Notfound',
      description: 'Pelajari tutorial pembuatan halaman 404 notfound untuk Seme Framework 4',
      notfoundex: require('~/assets/img/tutorial/notfound/notfound-page-example.png'),
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/tutorial',
          text: 'Tutorial',
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
        '@type': "WebPage",
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
        "dateCreated": "2021-07-25T11:11:11+07:00",
        "datePublished": "2021-07-25T11:11:11+07:00",
        "dateModified": "2025-01-15T20:40:11+07:00",
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
