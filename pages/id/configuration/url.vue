<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/configuration">Pengaturan</NuxtLink></li>
          <li class="unavailable">URL</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Pengaturan URL</h1>
            <p>Pengaturan URL atau <i>Uniform Resource Locator</i> ada dalam Seme Framework karena berhubungan dengan bagaimana cara Seme Framework akan dibuka atau dijalankan.</p>

            <h2>Base URL</h2>
            <p>
              Pengaturan Base URL diperlukan untuk menentukan URL dasar dari sebuah Web yang dibangun diatas Seme Framework. Base URL ini akan jadi acuan untuk setiap URL yang akan ditempatkan dalam respon yang dihasilkan.
            </p>
            <p>
              Pengaturan base URL ini ada di <code>app/config/development.php</code> dibagian variabel <code>$site</code>.
            </p>
            <b-message class="is-danger">
              <p><b>Pehatian</b></p>
              <p>Mulai dari Seme Framework versi 3.0.0, isi dari nilai <code>$site</code> harus diberi akhiran garis miring &#x22;/&#x22;.</p>
            </b-message>
            <p>
              Contoh penggunaan:
            </p>
            <pre>$site = &#x22;http://localhost/seme-framework/&#x22;;</pre>
            <pre>$site = &#x22;https://www.example.com/&#x22;;</pre>
            <pre>$site = &#x22;http://localhost:8080/&#x22;;</pre>

            <b-message class="is-info">
              <p><b>Pengaturan Base URL dengan Port Custom</b></p>
              <p>Jika menggunakan nilai <code>$_SERVER[&#x27;HTTP_HOST&#x27;]</code> pada <code>$site</code> tidak perlu untuk menambahkan akhiran &#x22;:PORT&#x22; pada setiap pengaturannya.</p>
            </b-message>

            <b-message class="is-info">
              <p><b>Mendapatkan nilai base URL (<code>$site</code>)</b></p>
              <p>Untuk mendapatkan nilai dari base URL dapat menggunakan fungsi global <NuxtLink to="/id/globals/functions/">base_url()</NuxtLink> yang membalikan base URL sebagai string.</p>
            </b-message>

            <h2>Admin Secret URL</h2>
            <p>The special base url configuration for admin that point to  <code>app/controller/admin/*</code>.</p>
            <p>The default value is <code>$admin_secret_url = &#x27;admin&#x27;;</code>.</p>
            <p>This is will relative to <code>$site</code> value.</p>
            <p>
              Example:
            </p>
            <pre>$admin_secret_url = &#x22;admin&#x22;;</pre>
            <pre>$admin_secret_url = &#x22;boss&#x22;;</pre>
            <pre>$admin_secret_url = &#x22;manajer&#x22;;</pre>

            <b-message class="is-info">
              <p><b>Accessing the secret admin URL (<code>$admin_secret_url</code>) value</b></p>
              <p>The <NuxtLink to="/id/globals/functions/">base_url_admin()</NuxtLink> global function is for returning value of <code>$site.$admin_secret_url</code>.</p>
            </b-message>

            <h2>URL Routing Method</h2>
            <p>
              The url routing method existed on <code>$method</code>, same as version 3.x.x the value consists of <code>REQUEST_URI</code>,<code>PATH_INFO</code>, and <code>ORIG_PATH_INFO</code>.
            </p>

            <h3>REQUEST_URI</h3>
            <p>
              The REQUEST_URI value suitable for NGINX, Apache on deployment server, LiteSpeed, etc.
            </p>

            <h3>PATH_INFO</h3>
            <p>
              The PATH_INFO value suitable for XAMPP development environtment.
            </p>

            <h3>ORIG_PATH_INFO</h3>
            <p>
              The ORIG_PATH_INFO value is for another server configuration.
            </p>

            <h2>CDN URL</h2>
            <p>The special base url for Content Delivery Network url.</p>
            <p>The default value is <code>$cdn_url = &#x27;&#x27;;</code></p>
            <p>
              Example:
            </p>
            <pre>$cdn_url = &#x22;http://cdn.cenah.co.id/seme-framework/&#x22;;</pre>

            <b-message class="is-info">
              <p><b>Accessing the CDN URL (<code>$cdn_url</code>) value</b></p>
              <p>The <NuxtLink to="/id/globals/functions/">$this->cdn_url()</NuxtLink> method form <code>SENE_Controller</code> class is for returning value of <code>$cdn_url</code> value.</p>
            </b-message>

            <hr>


          </div>

        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/downloads/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Download dan Instal
            </b-button>
            <b-button tag="router-link" to="/id/configuration/db-connection/" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Koneksi DB
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
        title: 'URL Configuration',
        description: 'Pelajari selengkapnya tentang URL Configuration of melalui dokumentasi Seme Framework versi 4.0.0.'
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
