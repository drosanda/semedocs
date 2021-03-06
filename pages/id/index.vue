<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class="unavailable">4.0.0 (Bahasa)</li>
        </ul>
      </nav>

      <div class="">
        <div class="column">
          <div class="content">
            <h1 class="is-size-1">Seme Framework <span>versi 4.0.0</span></h1>
            <h2 style="margin: 0.5em 0; padding: 0; line-height: 1;">Dokumentasi dalam Bahasa Indonesia</h2>
            <div class="badges">
              <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/version-4.0.0-ed6f75' alt="version"></amp-img>
              <amp-img layout="fixed" width="90px" height="20px" src='https://travis-ci.org/drosanda/seme-framework.svg?branch=master' alt="build status"></amp-img>
              <amp-img layout="fixed" width="53px" height="20px" src='https://img.shields.io/badge/lang-id-e9bd2e' alt="version"></amp-img>
              <amp-img layout="fixed" width="113px" height="20px" src="https://codecov.io/gh/drosanda/seme-framework/branch/master/graph/badge.svg?token=3WRW0SNO41" alt="code coverage"></amp-img>
            </div>

            <p>Ini adalah dokumentasi resmi untuk Seme Framework, PHP MVC Framework untuk membuat aplikasi berbasis web yang cepat. Cocok untuk membuat aplikasi yang kecil sampai menengah.</p>
            <p>Pada versi pertama Seme Framework digunakan untuk membangun API (Middleware) untuk Aplikasi lain seperti aplikasi berbasis android, iOS, dll.</p>
            <p>Sekarang ini Seme Framework sudah dapat digunakan untuk membuat aplikasi berbasis web seutuhnya.</p>

            <amp-img
              alt="Seme Framework code example"
              :src="semecarbon"
              layout="responsive"
              height="1480"
              width="1308"
            >
            </amp-img>

            <div class="buttons is-centered">
              <nuxt-link class="btn" to="/id/downloads/">
                Download
              </nuxt-link>
              <nuxt-link class="btn" to="/id/tutorial/">
                Mulai percobaan
              </nuxt-link>
              <nuxt-link class="btn" to="/error/">
                <i>Troubleshoot</i>
              </nuxt-link>
            </div>

            <h2>Kenapa harus Seme Framework?</h2>
            <p>Seme Framework cocok untuk programmer PHP yang mengerti cara koding secara <code>Manual</code>.</p>
            <p>Tidak seperti framework jaman now yang serba otomatis, Seme Framework masih mempertahankan cara tradisional dalam hal membuat aplikasi berbasis web secara mendasar.</p>
            <p><i>Kenapa harus membutuhkan banyak library, sementara hanya ingin membuat aplikasi sederhana?</i> Seme Framework merupakan PHP MVC dengan kode minimalis hadir sebagai solusi untuk pertanyaan tersebut.</p>

            <h2>Fitur Utama</h2>
            <p>Berikut ini adalah 3 poin fitur utama Seme Framework:</p>
            <hr>
            <div class="columns">
              <div class="column"><i>Kecil tapi tidak terlalu kecil</i>. Seme Framework tumbuh dalam industri UKM yang membutuhkan berbagai kebutuhan yang dapat menekan harga hosting (server).</div>
              <div class="column"><i>Tidak terlalu serius</i>. Seme Framework membebaskan programmer untuk bermain dan bereksplorasi secara bebas dengan menggunakan logika yang ada. Seme Framework gratis dan hampir tidak ada batasan dalam pengembangannya.</div>
              <div class="column"><i>Ramah Admin</i>. Seme Framework sangat ramah dalam pembuatan halaman khusus untuk admin, karena memiliki rute khusus tanpa harus merubah kode MVC-nya.</div>
              <div class="column"><i>Tampilan Tematik</i>. Seme Framework memiliki fitur yang dapat mengisi langsung kedalam layout tampilan. Programmer bebas untuk mengatur gaya maupun tema tanpa merubah tema yang ada.</div>
            </div>
            <hr>

            <h2>Sekilas tentang MVC</h2>
            <p><b>MVC</b> atau <b>Model View Controller</b> merupakan suatu metode pembangunan perangkat lunak yang memisahkan logika aplikasi menjadi beberapa bagian yang dasarkan pada fungsi suatu bagian tertentu.</p>
            <h3>Apa itu Model?</h3>
            <p><b>Model</b> merupakan bagian kode khusus yang berfungsi untuk melakukan komunikasi dari kode yang kita bangun terhadap database. Adapun isi dari model ini biasanya, untuk menarik data, menyimpan data, dan menghapus data dari database.</p>
            <h3>Apa itu View?</h3>
            <p><b>View</b> merupakan kumpulan kode yang khusus digunakan untuk mengeluarkan tampilan. Biasanya pada view ini berisi HTML, JavaScript, CSS, dan sedikit PHP yang hanya digunakan untuk mengeluarkan datanya saja.</p>
            <h3>Apa itu Controller?</h3>
            <p><b>Controller</b> merupakan kode yang berisi sebagai jembatan dari <b>Model &amp; View</b>. Pada bagian ini biasanya berisikan kode PHP beserta logika didalamnya. Controller juga bisa diartikan sebagai identitas dari <i>HTTP Request</i> untuk sebuah halaman web.
            <br>
            <p>Dengan pemecahan kode berdasarkan metode MVC, diharapkan pembangunan aplikasi dapat lebih jelas dan sederhana sehingga lebih mudah untuk dikembangkan dan dikelola dari sisi kode maupun sisi alur proses.</p>
            <hr>
            <amp-img layout="responsive" width="837px" height="458px" src="https://nyingspot.b-cdn.net/wp-content/uploads/2016/11/konsep-mvc-nyingspot.com_.png"></amp-img>
            <hr>

            <h2>Lisensi</h2>
            <p>Seme Framework menggunakan lisensi MIT versi 2.0.</p>

            <hr>

            <h2>Pertanyaan dan Jawaban</h2>
            <p>Jika bingung, ada bug, atau <i>request</i> fitur jang sungkan untuk menghubungi saya melalui <a href="https://instagram.com/drosanda/" target="_blank">instagram</a>, <a href="https://facebook.com/drs11/" target="_blank">facebook</a>, atau buat isu permasalahan baru melalui <a href="https://github.com/drosanda/semedocs/issues" target="_blank">github</a>.</p>
            <hr>
          </div>
        </div>
      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/version/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Versions
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link class="btn" to="/id/requirements/">
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
        title: 'Dokumentasi Bahasa Indonesia',
        description: 'Pelajari Seme Framework melaui Dokumentasi Seme Framework 4 dalam Bahasa Indonesia.',
        semecarbon: require('~/static/carbon.png'),
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001') + '/id/',
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
          "dateCreated": "2020-06-11T10:12:00+07:00",
          "datePublished": "2020-06-11T10:12:00+07:00",
          "dateModified": "2021-06-25T17:01:00+07:00",
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
