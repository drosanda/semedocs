<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/configuration">Pengaturan</NuxtLink></li>
          <li class="unavailable">Staging</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Fase Staging</h1>
            <p>Fase staging adalah tahapan dimana aplikasi belum naik ke tahap production, tapi sudah di <i>upload</i> dengan lingkungan yang sama dengan lingkungan production.</p>
            <p>
              Dengan menggunakan Seme Framework memungkinkan untuk memiliki 3 jenis lingkungan pengembangan, yaitu fase <i>development</i>, fase <i>staging</i>, dan fase <i>production</i>. Pada fase staging pengaturan disimpan di <code>app/config/staging.php</code>.
            </p>
            <p>
              Pengaturan lingkungan yang terpisah untuk fase staging memungkinkan untuk memiliki pengaturan yang berbeda dari fase development seperti koneksi database, base url, dan pengaturan tambahan lainnya.
            </p>
            <b-message class="is-success">
              <p><b>Tips</b></p>
              <p>Jika ingin melakukan auto deploy dengan git, pastikan <code>app/config/staging.php</code> dan <code>app/config/production.php</code> sudah dikecualikan di dalam file <code>.gitignore</code>.</p>
            </b-message>
            <b-message class="is-warning">
              <p><b>Perhatian</b></p>
              <p>Hati-hati dalam penggunaan <code>.gitignore</code> karena dapat menyebabkan file tidak terindeks ke dalam repositori.</p>
              <p>Pastikan untuk selalu melakukan pengecekan ganda untuk penggunaan .gitignore di dalam repositori.</p>
            </b-message>


          </div>
        </div>

      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/configuration/development/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Fase Development
            </b-button>
            <b-button tag="router-link" to="/id/configuration/production" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Fase Production
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
        title: 'Pengaturan Fase Staging',
        description: 'Pelajari selengkapnya tentang Pengaturan Seme Framework untuk Fase Staging'
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
