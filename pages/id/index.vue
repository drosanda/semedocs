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
            <h1 class="is-size-1">Seme Framework versi 4.0.0</h1>
            <h2 style="margin: 0.5em 0; padding: 0; line-height: 1;">Dokumentasi dalam Bahasa Indonesia</h2>
            <div class="badges">
              <img src='https://img.shields.io/badge/version-4.0.0-ed6f75' alt="version">
              <img src='https://travis-ci.org/drosanda/seme-framework.svg?branch=master' alt="build status">
              <img src='https://img.shields.io/badge/lang-id-e9bd2e' alt="version">
            </div>

            <p>Ini adalah dokumentasi resmi untuk Seme Framework, PHP MVC Framework untuk membuat aplikasi berbasis web yang cepat. Cocok untuk membuat aplikasi yang kecil sampai menengah.</p>
            <p>Pada versi pertama Seme Framework digunakan untuk membangun API (Middleware) untuk Aplikasi lain seperti aplikasi berbasis android, iOS, dll.</p>
            <p>Sekarang ini Seme Framework sudah dapat digunakan untuk membuat aplikasi berbasis web seutuhnya.</p>

            <figure class="image">
              <img src="~/static/carbon.png" />
            </figure>

            <div class="buttons is-centered">
              <b-button tag="router-link" to="/id/downloads/" type="is-link">
                Download
              </b-button>
              <b-button tag="router-link" to="/id/tutorial/" type="is-link">
                Mulai percobaan
              </b-button>
              <b-button tag="router-link" to="/error/" type="is-link">
                <i>Troubleshoot</i>
              </b-button>
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
            <h2>Lisensi</h2>
            <p>Seme Framework menggunakan lisensi MIT versi 2.0.</p>

            <h2>Pertanyaan dan Jawaban</h2>
            <p>Jika bingung, ada bug, atau <i>request</i> fitur jang sungkan untuk menghubungi saya melalui <a href="https://instagram.com/drosanda/" target="_blank">instagram</a>, <a href="https://facebook.com/drs11/" target="_blank">facebook</a>, atau buat isu permasalahan baru melalui <a href="https://github.com/drosanda/semedocs/issues" target="_blank">github</a>.</p>
            <hr>
          </div>
        </div>
      </div>


      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/requirements/" type="is-link" icon-pack="fa" icon-right="chevron-right">
              Persyaratan
            </b-button>
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
        title: 'Dokumentasi Resmi Bahasa Indonesia',
        suffix: ' - Seme Framework versi 4.0.0',
        description: 'Seme Framework adalah Framework dengan konsep MVC untuk PHP yang ringan untuk dikembangkan.'
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
            content: this.title
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: this.description
          }
        ]
      }
    }
  }
</script>
