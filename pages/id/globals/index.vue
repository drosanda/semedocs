<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Fungsi dan Variabel Global</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Fungsi dan Variabel Global</h1>
            <p>Ada beberapa variabel dan fungsi yang ada sudah tersedia secara global pada Seme Framework.</p>
            <p>Fungsi atau variabel ini akan mempermudah pada saat pengkodean aplikasi.</p>

            <h2>base_url()</h2>
            <p>Fungsi global <code>base_url()</code> digunakan untuk mengeluarkan nilai URL dasar yang telah di setel pada <NuxtLink to="/id/configuration/url/">pengaturan URL Seme Framework</NuxtLink>.</p>
            <h3>Parameter</h3>
            <p>Fungsi ini membutuhkan satu parameter opsional yaitu $url_component.</p>
            <code v-highlight class="php">base_url(string $url_component): string</code>
            <h3>Contoh Penggunaan</h3>
            <p>Berikut ini cara penggunaan dasar untuk fungsi base_url(), diasumsikan nilai dari <code>$site</code> adalah <code>http://www.example.com/</code>.</p>
            <pre><code v-highlight class="php">base_url(&#x27;user/profile/123&#x27;);</code></pre>
            <p>Akan mengembalikan nilai berupa string, <code>http://www.example.com/user/profile/123</code>.

            <h2>base_url_admin()</h2>
            <p>Fungsi global <code>base_url_admin()</code> digunakan untuk mengeluarkan nilai URL dasar <b>khusus</b> untuk admin yang telah di setel pada <NuxtLink to="/id/configuration/url/">pengaturan URL Seme Framework</NuxtLink>.</p>
            <h3>Parameter</h3>
            <p>Fungsi ini membutuhkan satu parameter opsional yaitu $url_component.</p>
            <code v-highlight class="php">base_url_admin(string $url_component): string</code>

            <h3>Contoh Penggunaan</h3>
            <p>Berikut ini cara penggunaan dasar untuk fungsi base_url_admin(), diasumsikan nilai dari <code>$site</code> adalah <code>http://www.example.com/</code> dan nilai dari <code>$admin_secret_url</code> adalah <code>mastermind</code>.</p>
            <pre><code v-highlight class="php">base_url_admin(&#x27;user/profile/123&#x27;);</code></pre>
            <p>Akan mengembalikan nilai berupa string, <code>http://www.example.com/mastermind/user/profile/123</code>.

            <h2>dd(mixed $data)</h2>
            <p>Fungsi global sama seperti <code>SENE_Controller::debug()</code> yang akan meng-<code>echo</code>-kan nilai dari suatu variabel yang dilewatkan kedalam fungsi ini sehingga mudah dibaca oleh developer.</p>
            <p>Fungsi global ini hanya tersedia untuk Seme Framework versi 4.x.</p>
            <h3>Parameter</h3>
            <p>Fungsi ini membutuhkan satu parameter wajib yaitu $data.</p>
            <code v-highlight class="php">dd(mixed $data): void</code>

            <h2>SENE_Controller::debug()</h2>
            <p>Fungsi global sama seperti <code>dd()</code> yang akan meng-<code>echo</code>-kan nilai dari suatu variabel yang dilewatkan kedalam fungsi ini sehingga mudah dibaca oleh developer.</p>
            <h3>Parameter</h3>
            <p>Fungsi ini membutuhkan satu parameter wajib yaitu $data.</p>
            <code v-highlight class="php">SENE_Controller::debug(mixed $data): void</code>

            <h2>$__forward</h2>
            <p>Variabel <code>$__forward</code> ini digunakan untuk melanjutkan data yang dilewatkan dari dalam View (komponen tema) ke View (komponen tema) lainnya.</p>
            <h3>Contoh Penggunaan</h3>
            <p>Asumsikan kita memiliki struktur direktori seperti ini</p>
            <pre>-app
|---view
|------front
|---------page
|---------col-1.php
|-----------html
|--------------header.php
|--------------navbar.php
|--------------foter.php</pre>

            <p>Pada col-1.php kita akan memanggil <code>html/header.php</code> dan dari sana akan memanggil  <code>html/navbar.php</code>.</p>
            <pre>Ilustrasi
header.php <----- navbar.php</pre>
            <p>Supaya semua isi variabel yang dilewatkan kedalam <code>html/header.php</code> bisa dilewatkan kedalam <code>html/header.php</code> maka diperlukan <code>$__forward</code>.</p>
            <p>Setelah itu dari sisi kode-nya.</p>
            <pre>header.php
<code v-highlight class="php"><?php $this->getThemeElement('page/html/navbar',$__forward);?></code></pre>

          </div>
        </div>

      </div>


      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/constants" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Konstanta
            </b-button>
            <b-button tag="router-link" to="/id/model" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Model
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
      name: 'Seme Framework Bahasa Indonesia',
      suffix: ' - Seme Framework v4',
      title: 'Fungsi dan Variabel Global',
      description: 'Pelajari selengkapnya tentang Fungsi dan Variabel Global Seme Framework versi 4.x'
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
