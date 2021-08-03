<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/library">Library</NuxtLink></li>
          <li class="unavailable">Seme_Log</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Seme Log</h1>
            <p>Seme Log adalah library untuk mencatat beberapa teks atau hasil ke dalam file log. Seme log akan membuat dan meletakkan file baru <code>seme.log</code> di proyek root atau di <code>app/cache/seme.log</code> tergantung akses direktori pada skrip Anda.</p>
            <hr>
            <h2>Cara Pengunaan</h2>
            <p>Pertama kita harus memuat perpustakaan dengan menggunakan perpustakaan yang dimuat:</p>
            <p><code>$this-&#x3E;lib('seme_log');</code></p>
            <p>Anda dapat menempatkan pemuat perpustakaan di <u>konstruktor kelas controller</u> atau pada setiap <u>metode di kelas controller</u>.</p>

            <h2>Penggunaan Dasar</h2>
             <p>Seme Log hanya memiliki satu metode yang disebut <b>write</b> untuk menulis log ke dalam file log. Ini contohnya:</p>

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
                  Class Product extends SEME_Controller{
                    public function __construct(){
                      $this-&#x3E;lib('seme_log');
                    }
                    public function index(){
                      $this-&#x3E;seme_log-&#x3E;write("Produk::index called");
                    }
                  }</highlight-code>
                </div>
              </div>
              <p>Dan inilah hasilnya jika kita membuka file <code>seme.log</code></p>

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
                    2019-08-06 10:22:22 - Produk::index called
                    2019-08-06 10:22:25 - Produk::index called
                  </highlight-code>
                </div>
              </div>
              <h3>Hasil Lanjutan</h3>
              <p>Jika Anda menggunakan Sistem Operasi *nix, Anda dapat menjalankan perintah <code>tail -f seme.log</code> untuk menampilkan log yang berjalan.</p>

              <div class="nav-bottom">
                <div class="nav-bottom-left">
                  <nuxt-link to="/id/library/seme_email/" class="btn">
                    <i class="fa fa-chevron-left"></i>
                    Seme_Email
                  </nuxt-link>
                </div>
                <div class="nav-bottom-right">
                  <nuxt-link to="/id/library/wideimage/" class="btn">
                    WideImage
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
        name: 'Seme Framework 4',
        suffix: ' - Seme Framework 4',
        title: 'Perpustakaan Seme Log',
        description: 'Pelajari selengkapnya tentang Perpustakaan (library) Seme_Log di Seme Framework versi 4.0.0',
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
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/library/',
            text: 'Library',
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
          "dateModified": "2021-06-25T17:13:00+07:00",
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
