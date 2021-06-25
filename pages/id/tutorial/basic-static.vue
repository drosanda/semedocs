<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial/">Tutorial</NuxtLink></li>
          <li class="unavailable">Dasar-dasar Perutean</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Pembuatan dan Perpindahan antar halaman statis</h1>
            <p>
              Setelah mempelajari <NuxtLink to="/id/tutorial/basic-routing/">perutean</NuxtLink>, kita akan belajar membuat halaman statis dan berpindah antar halaman tersebut
            </p>
            <p>
              Sebelum memulai tutorial ini, pastikan sudah <NuxtLink to="/id/downloads/">menginstall dan menjalankan</NuxtLink> Seme Framework.
            </p>
            <p>
              Diasumsikan Seme Framework berjalan menggunakan <code>XAMPP</code> dan diinstall di <code>D:/XAMPP/htdocs/seme_framework</code>.
            </p>
            <p>
              Kemudian buka aplikasi Atom IDE, VsCode atau notepad++. Setelah itu pilih <code>file / Open Directory</code> dan arahkan ke tempat folder atau direktori instalasi Seme Framework.
            </p>

            <h2>Membuat contoh halaman dasar</h2>
            <p>
              Setelah membuka Direktori Seme Framework, buat file baru di dalam <code>app/controller/produk.php</code> untuk membuat Controller.
            </p>
            <p>
              Kemudian, tuliskan kode ini didalam file <code>produk.php</code> dan simpan.
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
                  <?php
                  class Produk extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      echo 'Nanti halaman produk akan tampil disini';
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Setelah itu buka Browser, kemudian buka alamat <code>localhost/seme_framework/produk/</code> dan tekan enter untuk membuka halaman tersebut. Apabila, muncul tulisan seperti yang ada dicontroller berarti anda telah berhasil halaman baru.
            </p>

            <h3>Merubah isi Controller <code>Home</code></h3>
            <p>
              Untuk merubah controller home, cukup buka <code>app/controller/home.php</code> kemudian ubah isi file tersebut menjadi.
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
                  class Home extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      echo &#x27;Halaman utama&#x27;;
                      echo &#x27;&#x3C;br&#x3E;&#x27;;
                      echo &#x27;Menuju ke halaman &#x3C;a href=&#x22;&#x27;.base_url().&#x27;produk&#x22;&#x3E;produk&#x3C;/a&#x3E;&#x27;;
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Setelah itu buka Browser, kemudian buka alamat <code>localhost/seme_framework/</code> dan tekan enter untuk membuka halaman tersebut. Apabila, muncul tulisan seperti yang ada di controller home berarti anda telah berhasil merubah controller Home.
            </p>

            <h3>Merubah isi Controller <code>Produk</code></h3>
            <p>
              Untuk merubah controller produk, cukup buka <code>app/controller/produk.php</code> kemudian ubah isi file tersebut menjadi.
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
                  <?php
                  class Produk extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      echo &#x27;Halaman Produk&#x27;;
                      echo &#x27;&#x3C;br&#x3E;&#x27;;
                      echo &#x27;Produk a&#x27;;
                      echo &#x27;Produk b&#x27;;
                      echo &#x27;Kembali ke &#x3C;a href=&#x22;&#x27;.base_url().&#x27;&#x3E;Halaman Utama&#x3C;/a&#x3E;&#x27;;
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Setelah itu buka Browser, kemudian buka alamat <code>localhost/seme_framework/produk/</code> dan tekan enter untuk membuka halaman tersebut. Apabila, muncul tulisan seperti yang ada di controller home berarti anda telah berhasil merubah controller Home.
            </p>

            <h2>Membuat contoh halaman lanjutan</h2>
            <p>
              Setelah membuka direktori Seme Framework, buat file baru di dalam <code>app/controller/produk/home.php</code> untuk membuat Controller.
            </p>
            <p>
              Kemudian, tuliskan kode ini didalam file <code>produk/home.php</code> dan simpan.
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
                  <?php
                  class Home extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      echo 'Nanti halaman produk akan tampil disini';
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Setelah itu buka Browser, kemudian buka alamat <code>localhost/seme_framework/produk/</code> dan tekan enter untuk membuka halaman tersebut. Apabila, muncul tulisan seperti yang ada dicontroller berarti anda telah berhasil halaman baru.
            </p>

            <h3>Merubah isi Controller <code>Home</code></h3>
            <p>
              Untuk merubah controller home, cukup buka <code>app/controller/home.php</code> kemudian ubah isi file tersebut menjadi.
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
                  class Home extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      echo &#x27;Halaman utama&#x27;;
                      echo &#x27;&#x3C;br&#x3E;&#x27;;
                      echo &#x27;Menuju ke halaman &#x3C;a href=&#x22;&#x27;.base_url().&#x27;produk&#x22;&#x3E;produk&#x3C;/a&#x3E;&#x27;;
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Setelah itu buka Browser, kemudian buka alamat <code>localhost/seme_framework/</code> dan tekan enter untuk membuka halaman tersebut. Apabila, muncul tulisan seperti yang ada di controller home berarti anda telah berhasil merubah controller Home.
            </p>

            <h3>Merubah isi Controller <code>Produk</code></h3>
            <p>
              Untuk merubah controller produk, cukup buka <code>app/controller/produk/home.php</code> kemudian ubah isi file tersebut menjadi.
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
                  <?php
                  class Home extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      echo &#x27;Halaman Produk&#x27;;
                      echo &#x27;&#x3C;br&#x3E;&#x27;;
                      echo &#x27;Produk a&#x27;;
                      echo &#x27;Produk b&#x27;;
                      echo &#x27;Kembali ke &#x3C;a href=&#x22;&#x27;.base_url().&#x27;&#x3E;Halaman Utama&#x3C;/a&#x3E;&#x27;;
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Setelah itu buka Browser, kemudian buka alamat <code>localhost/seme_framework/produk/</code> dan tekan enter untuk membuka halaman tersebut. Apabila, muncul tulisan seperti yang ada di controller home berarti anda telah berhasil merubah controller Home.
            </p>

            <h2>Kesimpulan</h2>
            <p>
              Dari dua contoh diatas, dapat disimpulkan bahwa Seme Framework secara otomatis dapat menentukan pemetaan Alamat URL secara otomatis.
            </p>

          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/tutorial/basic-routing/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Basic Routing
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/tutorial/" class="btn">
            Tutorial
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
      fr: require('~/assets/img/first-run.png'),
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4 Bahasa Indonesia',
      title: 'Pembuatan Halaman Statis',
      description: 'Mari kita pahami dan pelajari bagaimana cara Pembuatan Halaman Statis dan perpindahan halamanya dengan Seme Framework',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/',
          text: 'ID',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/tutorial/',
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
        "dateCreated": "2020-06-25T12:23:01+07:00",
        "datePublished": "2020-06-25T13:33:42+07:00",
        "dateModified": "2021-06-25T13:34:39+07:00",
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
