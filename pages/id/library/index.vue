<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Library</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Perpustakaan (Library)</h1>
            <p>Library adalah file kumpulan file yang dapat Anda gunakan di dalam Seme Framework. Anda dapat menemukan perpustakaan kami di <code>kero/lib/</code>. Seme Framework memiliki 3 metode untuk memuat pustaka.</p>
            <ol>
              <li>membuat instance objek perpustakaan secara otomatis,</li>
              <li>membuat instance objek perpustakaan dengan menggunakan nama yang berbeda</li>
              <li>hanya menyertakan file library, sehingga Anda dapat membuat instance dengan menggunakan nama kelasnya.</li>
            </ol>
            <hr>
            <h2>Memuat Perpustakaan</h2>
            <p>Anda dapat memuat pustaka dari pengontrol dengan menggunakan metode lib. Metode lib memiliki 3 parameter yang diperlukan:</p>
            <ul>
              <li>Lokasi file library relatif terhadap <code>kero/lib/</code>.</li>
              <li>Nama objek, nama default adalah nama kelas dengan format <strong>huruf kecil (<em>lowercase</em>)</strong>.</li>
              <li>Metode sertakan. anda dapat menggunakan nilai inc jika Anda hanya <code>require_once</code> hanya lib Anda. Jika tidak, perpustakaan akan membuat instance secara otomatis.</li>
            </ul>
            <p>Contoh memuat perpustakaan json di kelas <code>app/controller/home.php</code>:</p>

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
                <highlight-code lang="php">&#x3C;?php
Class Home extends SENE_Controller {
  $this->lib('sene_json_engine','sene_json');
  public function __construct(){
    parent::__construct();
  }
  public function index(){
    $data = array();
    $data["status"]  = 200;
    $data["message"] = 'Hello we just use json right here, Yi-Ha!';
    $data["result"]  = array();
    $this->sene_json->out($data);
  }
}
          </highlight-code>
        </div>
        </div>
         <p>Setelah itu Anda dapat membuka base_url Anda di browser dan melihat apa yang Anda dapatkan.</p>
         <h2>Daftar Perpustakaan</h2>
         <p>Berikut adalah daftar library yang saat ini ada di Seme Framework:</p>
          <ul>
            <li><NuxtLink to="/id/library/seme_log/">Seme Log - Logger</NuxtLink></li>
            <li><NuxtLink to="/id/library/seme_email/">Seme Email - Email Sender</NuxtLink></li>
            <li><NuxtLink to="/id/library/wideimage/">WideImage - Manipulasi File Image</NuxtLink></li>
          </ul>
        </div>
      </div>

    </div>

    <div class="nav-bottom">
      <div class="nav-bottom-left">
        <nuxt-link to="/id/controller/" class="btn">
        <i class="fa fa-chevron-left"></i>
          Controller
        </nuxt-link>
      </div>
      <div class="nav-bottom-right">
        <nuxt-link to="/id/cli/" class="btn">
          CLI
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
      suffix: ' - Seme Framework 4 Bahasa Indonesia',
      title: 'Perpustakaan',
      description: 'Pelajari selengkapnya tentang Perpustakaan (library) di Seme Framework versi 4.0.0',
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
        "dateModified": "2021-06-23T01:04:00+07:00",
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
