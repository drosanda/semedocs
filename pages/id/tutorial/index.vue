<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Tutorial</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Tutorial</h1>
            <p>Tutorial ini dimaksudkan untuk memperkenalkan Anda pada Kerangka Seme dan prinsip dasar arsitektur MVC. Ini akan menunjukkan kepada Anda bagaimana aplikasi Kerangka Seme dasar dibangun selangkah demi selangkah.</p>
            <p>
              Tujuan dari tutorial ini adalah bagaimana menggunakan kerangka kerja dengan contoh kehidupan nyata. Sehingga developer dapat mengimplementasikan semua fitur yang ada pada Seme Framework seperti:
            </p>
            <ul>
              <li>Dasar-dasar Model-View-Controller (MVC)</li>
              <li>Dasar-dasar Routing basics</li>
              <li>Form validation</li>
              <li>Performing basic database queries using Query Builder</li>
              <li>Theming</li>
              <li>Admin</li>
              <li>Libraries</li>
              <li>and APIs</li>
            </ul>
            <p>TSeluruh tutorial dibagi menjadi beberapa halaman. Masing-masing menjelaskan sebagian kecil dari fungsionalitas Seme Framework. Anda akan membuka halaman-halaman berikut:</p>
            <ul>
              <li><NuxtLink to="/id/tutorial/introduction">Pendahuluan</NuxtLink>, yang memberi Anda gambaran umum tentang apa yang diharapkan.</li>
              <li><NuxtLink to="/id/tutorial/introduction">Tema dan tata letak</NuxtLink>, yang akan mengajarkan Anda dasar-dasar membuat tampilan menggunakan Seme Framework.</li>
              <li><NuxtLink to="/id/tutorial/basic-api">Building API</NuxtLink>, ni akan memperkenalkan lebih banyak tentang database, controller, dan model.</li>
            </ul>
            <p>Nikmati pengalaman eksplorasi dengan menggunakan Seme Framework.</p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/configuration/production/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Fase Prodctuin
            </b-button>
            <b-button tag="router-link" to="/id/tutorial/introduction" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Tutorial: Pendahuluan
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
      name: 'Seme Framework v4.0.0',
      suffix: ' - Dokumentasi Seme Framework v4.0.0',
      title: 'Tutorials',
      description: 'Pelajari selengkapnya tentang some real world tutorial of melalui dokumentasi Seme Framework versi 4.0.0.'
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
