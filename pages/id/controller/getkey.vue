<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">getKey method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">getKey method</h1>
            <p><code>SENE_Controller::getKey</code> digunakan untuk memanggil variabel yang disimpan didalam $_SESSION.</p>
            <p>Metode biasanya ini digunakan untuk mengambil data yang tersimpan setelah proses login berhasil.</p>

            <h2>Parameter</h2>
            <p>Tidak ada parameter untuk metode ini.</p>

            <h2>Pengunaan dasar</h2>
            <p>Berikut ini adalah penggunaan dasar dari metode getKey</p>
            <code v-highlight class="php">$this-&#x3E;getKey()</code>
            <p>&nbsp;</p>
            <b-message type="is-info">
              <p><b>Perhatian</b></p>
              <p>Pastikan pengaturan <code>$saltkey</code> telah diubah dan bersifat unik antara 1 projek dengan projek lainnya.</p>
            </b-message>

            <b-message type="is-success">
              <p><b>Tips</b></p>
              <p>Jika bingung menentukan <code>$saltkey</code>, gunakan nama singkat proyek dan akhiri dengan tahun.</p>
            </b-message>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/controller/constructor" type="is-link" icon-pack="fa" icon-left="chevron-left" class="">
              Constructor
            </b-button>
            <b-button tag="router-link" to="/id/controller/input" type="is-link" icon-pack="fa" icon-right="chevron-right" class="">
              Input
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
    data() {
      return {
        name: 'Seme Framework v4.0.0',
        suffix: ' - Dokumentasi Seme Framework v4.0.0',
        title: 'Metode getKey dari SENE_Controller',
        description: 'Metode getKey dari kelas SENE_Controller dalam SEME Framework versi 4.0.0 digunakan untuk memanggil variabel yang tersimpan didalam $_SESSION.'
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
    }
  }
</script>
