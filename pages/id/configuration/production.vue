<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/configuration">Pengaturan</NuxtLink></li>
          <li class="unavailable">Production</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Fase Production</h1>
            <p>Fase production adalah tahapan dimana aplikasi dipakai secara nyata, tidak untuk diubah-ubah lagi atau dicoba-coba lagi. Ketika terjadi error atau bug di tahap production sudah menjadi kesalahan yang fatal.</p>
            <p>
              Dengan menggunakan Seme Framework memungkinkan untuk fase production ini memiliki pengaturannya tersendiri dan mungkin saja berbeda dengan pengaturan untuk yaitu fase <i>development</i> dan fase <i>staging</i>.
            </p>
            <p>
              Pengaturan khusus untuk fase <i>production</i> ini ada di <code>app/config/production.php</code>.
            </p>
            <div class="message is-success">
  <div class="message-body">
              <p><b>Tips</b></p>
              <p>Jika ingin melakukan auto deploy dengan git, pastikan <code>app/config/staging.php</code> dan <code>app/config/production.php</code> sudah dikecualikan di dalam file <code>.gitignore</code>.</p>
            </div></div>
            <div class="message is-warning">
  <div class="message-body">
              <p><b>Perhatian</b></p>
              <p>Hati-hati dalam penggunaan <code>.gitignore</code> karena dapat menyebabkan file tidak terindeks ke dalam repositori.</p>
              <p>Pastikan untuk selalu melakukan pengecekan ganda untuk penggunaan .gitignore di dalam repositori.</p>
            </div></div>
          </div>
        </div>

      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/configuration/staging/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Fase Staging
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
    data() {
      return {
        name: 'Seme Framework Bahasa Indonesia',
        suffix: ' - Seme Framework v4',
        title: 'Pengaturan untuk Fase Production',
        description: 'Pelajari selengkapnya tentang Pengaturan Seme Framework untuk Fase Production'
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
