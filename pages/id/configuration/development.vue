<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/configuration">Pengaturan</NuxtLink></li>
          <li class="unavailable">Development</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Fase Development</h1>
            <p>Fase development adalah tahapan dimana aplikasi dibangun di komputer masing-masing. Biasanya pengaturan fase development ini sangat bervariasi. Ada yang standar ada juga yang sudah tidak standar, tergantung dari pembangunan aplikasi.</p>
            <p>
              Dengan menggunakan Seme Framework memungkinkan untuk memiliki 3 jenis lingkungan pengembangan, yaitu fase <i>development</i>, fase <i>staging</i>, dan fase <i>production</i>. Pada fase development pengaturan disimpan di <code>app/config/development.php</code>.
            </p>
            <p>
              Pengaturan lingkungan yang terpisah untuk fase development memungkinkan  seperti koneksi database, base url, dan pengaturan tambahan lainnya bisa berbeda dari lingkungan <i>staging</i> maupun <i>production</i>.
            </p>
          </div>
        </div>
      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/configuration/db-connection/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Koneksi DB
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/configuration/staging/" class="btn">
            Fase Staging
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
        name: 'Seme Framework v4.0.0',
        suffix: ' - Dokumentasi Seme Framework v4.0.0',
        title: 'Pengaturan untuk Fase Development',
        description: 'Pelajari selengkapnya tentang Pengaturan Seme Framework untuk Fase Development'
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
