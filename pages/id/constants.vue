<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Konstanta</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1>Konstanta</h1>
            <p>Seme Framework memiliki beberapa konstanta yang akan membantu pada saat pembuatan kode aplikasi.</p>
            <p>Berikut ini adalah tabel konstantanya:</p>
            <table>
              <thead>
                <tr>
                  <th>Konstanta</th>
                  <th>NIlai</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SEMEROOT</td>
                  <td>Menunjuk pada direktori <i>root</i> Seme Framework yang digunakan.</td>
                </tr>
                <tr>
                  <td>SEMELIB</td>
                  <td>Mengarah ke direktori <code>kero/lib</code> yang ada di dalam Seme Framework.</td>
                </tr>
                <tr>
                  <td>SEME_VERSION (versi 4.x)</td>
                  <td>Melihat versi Seme Framework yang dgunakan.</td>
                </tr>
                <tr>
                  <td>SENE_VERSION (versi 3.x)</td>
                  <td>Melihat versi Seme Framework yang dgunakan.</td>
                </tr>
                <tr>
                  <td>SEME_START</td>
                  <td>Bernilai dengan format <i>microtime</i> pada saat skrip pertama kali dieksekusi.</td>
                </tr>
                <tr>
                  <td>DS</td>
                  <td>Berisi nilai directory separator. Contoh di Windows \ sementara di Mac atau linux /.</td>
                </tr>
              </tbody>
            </table>


          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/uri_routing/admin/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Uri Routing: Admin
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/globals/" class="btn">
            Globals
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
      name: 'Seme Framework v4.0.0',
      suffix: ' - Dokumentasi Seme Framework v4.0.0',
      title: 'Konstanta',
      description: 'Pelajari selengkapnya tentang Konstanta yang ada pada Seme Framework versi 4.0.0.'
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
