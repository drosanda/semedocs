<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class="unavailable">4.0.3 (Bahasa)</li>
        </ul>
      </nav>

      <div class="">
        <div class="column">
          <div class="content">
            <h1 class="is-size-1"><span> Seme Framework 4 </span></h1>
            <h2 style="margin: 0.5em 0; padding: 0; line-height: 1;">Web Framework untuk Veteran</h2>
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
                  class Product extends SENE_Controller
                  {
                    public $user_login=0;

                    public function __construct()
                    {
                      parent::__construct();
                      $session = $this-&#x3E;getKey();
                      if(isset($session-&#x3E;user-&#x3E;id)) $this-&#x3E;user_login = 1;

                      $this-&#x3E;load(&#x27;front/c_product_model&#x27;,&#x27;cpm&#x27;);
                    }

                    public function index()
                    {
                      $data = array();
                      $page = (int) $this-&#x3E;input-&#x3E;post(&#x27;page&#x27;);
                      $pagesize = (int) $this-&#x3E;input-&#x3E;post(&#x27;pagesize&#x27;);
                      $data[&#x27;cpm&#x27;] = $this-&#x3E;cpm-&#x3E;get($page,$pagesize);

                      $this-&#x3E;loadCss($this-&#x3E;cdn_url(&#x27;skin/front/css/datatables.min.css&#x27;));
                      $this-&#x3E;putJsFooter($this-&#x3E;cdn_url(&#x27;skin/front/js/datatables.min.js&#x27;));

                      $this-&#x3E;setTitle(&#x27;Catalog Product&#x27;.$this-&#x3E;config-&#x3E;semevar-&#x3E;site_suffix);

                      $this-&#x3E;putThemeContent(&#x27;produk/home&#x27;,$data);
                      $this-&#x3E;putThemeContent(&#x27;produk/home_modal&#x27;,$data);
                      $this-&#x3E;putJsReady(&#x27;produk/home_bottom&#x27;,$data);
                      $this-&#x3E;loadLayout(&#x27;col&#x27;,$data);
                      $this-&#x3E;render();
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <p id="intro">
              Seme Framework merupakan kumpulan kode yang dibuat menggunakan PHP untuk pembuatan aplikasi berbasis web skala kecil sampai dengan skala menengah tanpa harus <em>ngoding</em> dari nol.
              Framework ini <code>cukup ringan</code> untuk digunakan, baik ketika proses pembuatan (<code>development phase</code>) maupun sampai aplikasi tersebut jadi digunakan (<code>production phase</code>).
              Seme Framework masih mempertahankan cara tradisional (<code>manual</code>), yang cocok untuk programmer yang baru mulai belajar maupun <code>programmer veteran</code>.
            </p>

            <h2>Daftar Isi</h2>
            <ul>
              <li>
                <NuxtLink to="#">Seme Framework</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#intro">Tentang Seme Framework</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#indikator">Indikator</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#alasan">Alasan Penggunaan Seme Framework</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#cara_kerja">Cara Kerja Seme Framework</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#qna">Pertanyaan &amp; Jawaban</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#cara_baca">Cara Pembacaan Dokumentasi Ini</NuxtLink>
              </li>
            </ul>

            <h2 id="indikator">Indikator</h2>
            <p>
              Berikut ini beberapa indikator proses pengembangan Seme Framework:
            </p>
            <div class="badges">
              <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/version-4.0.3-ed6f75' alt="version"></amp-img>
              <amp-img layout="fixed" width="90px" height="20px" src='https://travis-ci.com/drosanda/seme-framework.svg?branch=master' alt="build status"></amp-img>
              <amp-img layout="fixed" width="53px" height="20px" src='https://img.shields.io/badge/lang-id-e9bd2e' alt="version"></amp-img>
              <amp-img layout="fixed" width="113px" height="20px" src="https://codecov.io/gh/drosanda/seme-framework/branch/master/graph/badge.svg?token=3WRW0SNO41" alt="code coverage"></amp-img>
            </div>

            <h2 id="alasan">Kenapa harus Seme Framework?</h2>
            <p>
              Berikut ini adalah beberapa alasan kenapa harus menggunakan Seme Framework:
            </p>
            <ol>
              <li>
                Seme Framework dibuat dengan bahasa pemrograman PHP, tidak perlu inisialiasi tipe data, dan masih satu rumpun dengan <b>bahasa pemrograman C</b>. Baca selengkapnya tentang <NuxtLink to="/id/tutorial/basic-php">Dasar PHP <i class="fa fa-window-restore"></i></NuxtLink>.
              </li>
              <li>
                Seme Framework sangatlah ringan karena hanya dibuat kode dasar untuk kelas abstraknya dan diuji setiap pengembangannya dengan <code>CacheGrind</code> dari extensi XDEBUG di PHP.
              </li>
              <li>
                Seme Framework menggunakan konsep <b>Model View Controller (MVC)</b>, sehingga pembuatan kode bisa lebih terstruktur. Baca selengkapnya tentang <NuxtLink to="/id/tutorial/basic-mvc">MVC <i class="fa fa-window-restore"></i></NuxtLink>.
              </li>
              <li>
                Seme Framework memiliki <b>perutean otomatis</b>, sehingga pembuatan halaman dapat dibuat dengan cepat langsung dengan rute URL-nya. Baca selengkapnya tentang <NuxtLink to="/id/uri_routing">Perutean URI <i class="fa fa-window-restore"></i></NuxtLink>.
              </li>
              <li>
                Seme Framework mendukung pembuatan <b>tema tampilan</b> dimana tampilan yang sama bisa digunakan kembali tanpa harus melakukan pengkodean ulang. Baca selengkapnya tentang <NuxtLink to="/id/view/theme">Tema Tampilan <i class="fa fa-window-restore"></i></NuxtLink>.
              </li>
              <li>
                Seme Framework memiliki kelas <b>database query builder</b> untuk penyusunan SQL sehingga tidak perlu lagi khawatir ada salah penyusunan kode SQL ketika akan berinteraksi dengan database. Baca selengkapnya tentang <NuxtLink to="/id/model">Kelas Model <i class="fa fa-window-restore"></i></NuxtLink>.
              </li>
              <li>
                Seme Framework juga bisa <b>diintegrasikan</b> / dihubungkan dengan modul atau <code>library</code> tambahan yang sama-sama menggunakan bahasa pemrograman PHP. Baca selengkapnya tentang <NuxtLink to="/id/library">Library <i class="fa fa-window-restore"></i></NuxtLink>.
              </li>
              <li>
                Seme Framework memiliki beberapa panduan tutorial dan dokumentasi untuk penggunaannya. Baca selengkapnya tentang <NuxtLink to="/id/tutorial">Tutorial <i class="fa fa-window-restore"></i></NuxtLink>.
              </li>
            </ol>


            <h2 id="link_cepat">Link Cepat</h2>
            <p>
              Berikut ini adalah daftar link cepat Seme Framework:
            </p>
            <div class="buttons is-centered">
              <nuxt-link class="btn" to="/id/downloads">
                Cara Download &amp; Install
              </nuxt-link>
              <nuxt-link class="btn" to="/id/tutorial">
                Mulai percobaan
              </nuxt-link>
              <nuxt-link class="btn" to="/issue">
                <i>Issue (b. inggris)</i>
              </nuxt-link>
            </div>

            <h2 id="cara_kerja">Cara Kerja Seme Framework</h2>
            <p>
              Seme Framework berfungsi sebagai Kerangka Aplikasi Web untuk kode sumber Anda yang menjembatani antara Peramban Web (<em>Browser</em>) dengan Sistem Basis Data (<em>Database System</em>).
              Seme Framework telah menyediakan fungsi dan metode yang siap digunakan untuk pembuatan aplikasi berbasis web.
              Kemudian komunikasi antara Seme Framework dengan Database System, telah dipermudah dengan <b>Query Builder</b> sehingga untuk kode <code>SQL</code> yang sederhan tidak perlu dihafalkan.
              Tugas programmer cukup meneruskan atau menurunkan kode yang telah ada sehingga sebuah aplikasi dapat dibuat sesuai dengan kebutuhan serta dapat digunakan melalui web browser.
            </p>
            <amp-img
            alt="How seme framework work?"
            :src="hsfwork"
            layout="responsive"
            height="826"
            width="1222"
            >
          </amp-img>

            <h2 id="lisensi">Lisensi</h2>
            <p>Seme Framework menggunakan lisensi MIT versi 2.0.</p>

            <hr>

            <h2 id="qna">Pertanyaan dan Jawaban</h2>
            <p>
              Jika bingung, ada bug, atau <i>request</i> fitur jang sungkan untuk menghubungi saya melalui <a href="https://instagram.com/drosanda/" target="_blank">instagram <i class="fa fa-external-link"></i></a>, <a href="https://facebook.com/drs11/" target="_blank">facebook <i class="fa fa-external-link"></i></a>,
              atau buat isu permasalahan baru melalui <a href="https://github.com/drosanda/semedocs/issues" target="_blank">github <i class="fa fa-external-link"></i></a>.
            </p>
            <hr>

            <h2 id="cara_baca">Panduan Cara Baca Dokumentasi Seme Framework</h2>
            <p>
              Berikut ini adalah beberapa panduan untuk cara pembacaan dokumentasi Seme Framework
            </p>

            <h3 id="cara_baca_link">Link Halaman</h3>
            <p>
              Pada dokumentasi Seme Framework ada beberapa link yang digunakan untuk menghubungkan antar halaman.
              Baik halaman yang ada pada dokumentasi Seme Framework maupun yang diluarnya.
              Setiap link pada dokumentasi ini diberi garis bawah untuk menandakan bahwa tulisan tersebut bisa diklik dan halaman akan dialihkan kepada link yang akan dituju.
            </p>

            <h4 id="cara_baca_link_icon">Simbol / Ikon</h4>
            <p>
              Pada dokumentasi ini, ada link yang dibubuhi dengan simbol atau ikon.
              <ul>
                <li>
                  Link dengan simbol / ikon <code><i class="fa fa-chevron-right"></i></code> menandakan halaman yang dituju adalah halaman selanjutnya.
                </li>
                <li>
                  Link dengan simbol / ikon <code><i class="fa fa-chevron-left"></i></code> menandakan halaman yang dituju adalah halaman sebelumnya.
                </li>
                <li>
                  Link dengan simbol / ikon <code><i class="fa fa-external-link"></i></code> menandakan halaman yang dituju ada diluar dokumentasi Seme Framework.
                </li>
                <li>
                  Link dengan simbol / ikon <code><i class="fa fa-window-restore"></i></code> menandakan halaman yang dituju akan dibuka pada tab baru.
                </li>
                <li>
                  Link dengan simbol / ikon <code><i class="fa fa-window-maximize"></i></code> menandakan halaman yang dituju ada pada halaman yang sama.
                </li>
              </ul>
            </p>


            <h3 id="cara_baca_path">Jalur Sistem File</h3>
            <p>
              Pada beberapa dokumentasi Seme Framework, akan disinggung terkait jalur sistem file atau <code><em>system file path</em></code>.
              <em>System file path</em> atau sering disingkat <code><em>path</em></code> saja, merupakan notasi untuk menyebutkan lokasi <b>file</b> atau <b>direktori</b> / <b>folder</b> pada sebuah sistem operasi komputer.
              Notasi path ini bisa berbeda tergantung sistem operasi yang digunakan.</p>
              <p>
                Untuk Microsoft Windows, path dimulai dari Drive, kemudian titik dua :, kemudian diikuti nama file atau direktori yang dipisahkan dengan garis miring terbalik (<code>\</code>).
                Sementara path untuk sistem operasi *nix, dimulai dari garis miring kemudian diikuti nama file atau direktori yang dipisahkan dengan garis miring biasa (<code>/</code>).
                <ol>
                  <li>
                    Contoh Windows: <code>D:\XAMPP\htdocs\index.php</code>.
                  </li>
                  <li>
                    Contoh *Nix: <code>/Applications/XAMPP/htdocs/index.php</code>.
                  </li>
                </ol>
              </p>

              <p>
                Pada dokumentasi ini, yang dipakai adalah konsep *NIX / urutan ke-2.
              </p>
              <hr>

            </div>
          </div>
        </div>


        <div class="nav-bottom">
          <div class="nav-bottom-left">
            <nuxt-link to="/version" class="btn">
              <i class="fa fa-chevron-left"></i>
              Versions
            </nuxt-link>
          </div>
          <div class="nav-bottom-right">
            <nuxt-link class="btn" to="/id/requirements">
              Persyaratan
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
        name: 'Seme Framework 4',
        suffix: ' - Seme Framework 4',
        title: 'Web Framework untuk Programmer Veteran',
        description: 'Seme Framework merupakan web framework yang ringan untuk Programmer Veteran dalam pembuatan aplikasi web skala kecil dan menengah.',
        semecarbon: require('~/static/carbon.png'),
        hsfwork: require('~/static/how-seme-framework-work.png'),
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001') + '/id',
            text: 'ID',
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
          "dateCreated": "2021-07-21T23:21:00+07:00",
          "datePublished": "2021-07-21T23:21:00+07:00",
          "dateModified": "2021-11-16T08:48:00+07:00",
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
