<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">Metode getKey</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode getKey</h1>
            <p>Metode getKey digunakan untuk memanggil variabel yang disimpan didalam <code>$_SESSION[$saltkey]</code>.</p>
            <p>Metode biasanya ini digunakan untuk mengambil data yang tersimpan setelah proses login berhasil.</p>

            <h2>Parameter</h2>
            <p>Tidak ada parameter untuk metode ini.</p>

            <h2>Pengunaan dasar</h2>
            <p>Berikut ini adalah penggunaan dasar dari metode getKey</p>
            <code v-highlight class="php">SENE_Controller::getKey(): mixed</code>

            <h2>Contoh Penggunaan</h2>
            <p>Berikut ini adalah contoh penggunaannya untuk memeriksa user sudah login atau belum.</p>
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
                  class Login extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;setTheme(&#x27;front&#x27;);
                      $this-&#x3E;load(&#x27;front/b_user_model&#x27;,&#x27;bum&#x27;);
                    }
                    public function index(){
                      //ambil data dari session yang ada sekarang
                      //dengan memanggil metode getKey()
                      $data = $this-&#x3E;getKey();
                      //isi dari getkey() adalah object,
                      //maka pengambilan datanya dengan -&#x3E; (notasi panah)
                      //di dalam getkey ini telah di tambahkan object user
                      //dan object user ini berisikan id apabila sudah login
                      //jadi untuk pengecekannya bisa menggunakan kode dibawah ini
                      if(isset($data-&#x3E;user-&#x3E;id)){
                        //sudah login
                        $this-&#x3E;status = 303;
                        $this-&#x3E;message = &#x27;Sudah login, silakan refresh halaman&#x27;;
                        $this-&#x3E;__json_out($data);
                        die();
                      }
                      .
                      .
                      .
                    }
                  }
                </highlight-code>
              </div>
            </div>


            <div class="message is-info">
              <div class="message-body">
                <p><b>Tips</b></p>
                <p>Baik <code>setKey()</code> maupun <code>getKey()</code> membutuhkan pengaturan <code>$saltkey</code> untuk berfungsi dengan baik.</p>
                <p>Pelajari tentang pengaturan <code>$saltkey</code> di halaman <NuxtLink to="/id/configuration/session.">Pengaturan Session</NuxtLink>.</p>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/controller/constructor/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Constructor Kelas
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/controller/input/" class="btn">
            Properti input
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
        title: 'Metode getKey dari SENE_Controller',
        description: 'Metode getKey dari kelas SENE_Controller dalam SEME Framework versi 4.0.0 digunakan untuk memanggil variabel yang tersimpan didalam $_SESSION.',
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
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/controller/',
            text: 'Controller',
          }
        ]
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
          "dateModified": "2021-06-25T09:21:40+07:00",
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
