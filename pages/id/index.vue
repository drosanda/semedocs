<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class="unavailable">Home</li>
        </ul>
      </nav>

      <div class="">
        <div class="column">
          <div class="content">
            <h1 class="is-size-1">Selamat datang di dokumentasi resmi Seme Framework</h1>
            <p>Ini adalah dokumentasi resmi untuk Seme Framework, PHP MVC Framework untuk membuat aplikasi berbasis web yang cepat. Cocok untuk membuat aplikasi yang kecil sampai menengah.</p>
            <p>Pada versi pertama Seme Framework digunakan untuk membangun API (Middleware) untuk Aplikasi lain seperti aplikasi berbasis android, iOS, dll.</p>
            <p>Sekarang ini Seme Framework sudah dapat digunakan untuk membuat aplikasi berbasis web seutuhnya.</p>

            <figure class="image">
              <img src="~/static/carbon.png" />
            </figure>

            <div class="buttons">
              <b-button tag="router-link" to="/4.0.0/downloads/" type="is-link">
                Download
              </b-button>
              <b-button tag="router-link" to="/4.0.0/tutorial/" type="is-link">
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
            <p>Seme Framework licensed under MIT version 2.0.</p>
            <h2>Question and Answer</h2>
            <p>Feel free to ask me on my <a href="https://instagram.com/drosanda/" target="_blank">instagram</a>, <a href="https://facebook.com/drs11/" target="_blank">facebook</a>, or open an issue on <a href="https://github.com/drosanda/semedocs/issues" target="_blank">github</a>.</p>
          </div>
        </div>
      </div>


      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/credits/" type="is-link" icon-pack="fa" icon-right="chevron-right">
              Credits
            </b-button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    layout: 'default',
    data (){
      return {
        title: 'Welcome to Seme Framework Documentation',
        suffix: ' - The Lightweight and Deployable PHP MVC Framework',
        description: 'Seme Framework is lightweight and deployable PHP MVC Framework that you can learn more through this documentation.'
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
