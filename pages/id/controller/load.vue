<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller/">Controller</NuxtLink></li>
          <li class="unavailable">Load</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Load</h1>
            <p>
              Metode <code>load</code> digunakan untuk memanggil model kedalam controller menjadi sebuah properti didalam controller tersebut.
              Nama dari propertinya juga bisa diatur melalui parameter alias dalam metode ini.
            </p>

            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini adalah bentuk umum metode <code>load</code> dari kelas <NuxtLink to="/id/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink>.
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
                  $this-&#x3E;load(string $model_location[, string $alias])
                </highlight-code>
              </div>
            </div>

            <h3>Parameter</h3>
            <p>
              Metode load terdiri dari 2 parameter yaitu <code>model_location</code> dan <code>$alias</code>.
            </p>

            <h4>$model_location</h4>
            <p>
              Lokasi file model selalu relatif ke direktori <code>app/model</code>.
              Jadi, jika ingin memanggil model <code>api/hello_model</code> maka lokasinya ada di <code>app/model/api/hello_model.php</code>.
              Dan, didalam controller akan ada properti baru bernama <code>hello_model</code> yang sama dengan nama file model namun tanpa akhiran <code>.php</code>.
            </p>

            <h3>$model_alias</h3>
            <p>
              Model alias digunakan untuk merubah nama properti yang dibuat secara otomatis melalui metode <code>load</code> yang ada didalam controller.
              Jadi, jika ingin menyederhanakan properti <code>hello_model</code> menjadi <code>h</code> saja, cukup tambahkan parameter ke-2 didalam methode load.
            </p>

            <h2>Contoh Penggunaan</h2>
            <p>Berikut ini adalah contoh lengkap penggunaan metode <code>load</code> dalam sebuah kelas controller.</p>
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
                      $this-&#x3E;load(&#x27;api/hello_model&#x27;,&#x27;h&#x27;);
                    }
                    public function index(){
                      //menjalankan metode get dari hello_model
                      print_r($this-&#x3E;h-&#x3E;get());
                      die();
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <div class="message is-info">
              <div class="message-body">
                <p><b>Perhatian</b></p>
                <p>Pastikan untuk selalu memakai alias yang unik untuk setiap pemanggilan model.</p>
                <p>Apabila ada alias yang sama, maka bisa menyebabkan akan mendapatkan hasil yang tidak diinginkan.</p>
              </div>
            </div>

            <div class="message is-success">
              <div class="message-body">
                <p><b>Tips</b></p>
                <p>Jika bingung menentukan alias, gunakan alias dengan awalan nama kelasnya masing-masing.</p>
                <p>Dan, apabila ada yang sama, berikan akhiran nomor pada akhir aliasnya.</p>
                <p>Contoh, <code>app/model/api/hello_detail_model2.php</code> dan aliasnya akan lebih baik jika dinamakan <code>hdm2</code>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/controller/lib" class="btn">
            <i class="fa fa-chevron-left"></i>
            Metode lib
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/controller/loadcss" class="btn">
            Metode loadCss
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
      title: 'Metode Load',
      description: 'Pelajari tentang metode load dari kelas SENE_Controller untuk Seme Framework 4',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/controller',
          text: 'Controller',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/controller/load',
          text: 'Load',
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
        "dateCreated": "2021-08-08T10:51:15+07:00",
        "datePublished": "2021-08-08T10:51:15+07:00",
        "dateModified": "2021-08-08T10:51:15+07:00",
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
