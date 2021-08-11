<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
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
            <div class="message is-danger">
              <div class="message-body">
                <p><b>Pehatian</b></p>
                <p>Mulai dari Seme Framework versi 3.0.0, isi dari nilai <code>$site</code> harus diberi akhiran garis miring &#x22;/&#x22;.</p>
              </div>
            </div>
            <p>
              Contoh pengisian <code>$site</code> dalam potongan kode:
            </p>
            <div class="macwindow">
              <div class="titlebar">
                <div class="buttons">
                  <div class="close">
                    <a class="closebutton" href="#"><span><strong>x</strong></span></a>
                    <!-- close button link -->
                  </div>
                  <div class="minimize">
                    <a class="minimizebutton" href="#"><span><strong>&ndash;</strong></span></a>
                    <!-- minimize button link -->
                  </div>
                  <div class="zoom">
                    <a class="zoombutton" href="#"><span><strong>+</strong></span></a>
                    <!-- zoom button link -->
                  </div>
                </div>
              </div>
              <div class="maccontent">
                <highlight-code lang="php">
                  $site = &#x22;http://localhost/seme-framework/&#x22;;
                  $site = &#x22;https://www.example.com/&#x22;;
                  $site = &#x22;http://localhost:8080/&#x22;;
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Pengaturan Base URL dengan Port Custom</b></p>
                <p>Jika menggunakan nilai <code>$_SERVER[&#x27;HTTP_HOST&#x27;]</code> pada <code>$site</code> tidak perlu untuk menambahkan akhiran &#x22;:PORT&#x22; pada setiap pengaturannya.</p>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Mendapatkan nilai base URL (<code>$site</code>)</b></p>
                <p>Untuk mendapatkan nilai dari base URL dapat menggunakan fungsi global <NuxtLink to="/id/globals/#fungsi_base_url">base_url()</NuxtLink> yang membalikan base URL sebagai string.</p>
              </div>
            </div>

            <h2>URL Rahasia Admin</h2>
            <p>Konfigurasi url dasar khusus untuk admin yang mengarah ke <code>app/controller/admin/*</code>.</p>
            <p>Nilai defaultnya adalah <code>$admin_secret_url = &#x27;admin&#x27;;</code>.</p>
            <p>Ini akan relatif terhadap nilai <code>$site</code>.</p>
            <p>
              Contoh dalam kode:
            </p>
            <div class="macwindow">
              <div class="titlebar">
                <div class="buttons">
                  <div class="close">
                    <a class="closebutton" href="#"><span><strong>x</strong></span></a>
                    <!-- close button link -->
                  </div>
                  <div class="minimize">
                    <a class="minimizebutton" href="#"><span><strong>&ndash;</strong></span></a>
                    <!-- minimize button link -->
                  </div>
                  <div class="zoom">
                    <a class="zoombutton" href="#"><span><strong>+</strong></span></a>
                    <!-- zoom button link -->
                  </div>
                </div>
              </div>
              <div class="maccontent">
                <highlight-code lang="php">
                  $admin_secret_url = &#x22;admin&#x22;;
                  $admin_secret_url = &#x22;boss&#x22;;
                  $admin_secret_url = &#x22;manajer&#x22;;
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Mengakses nilai URL admin rahasia (<code>$admin_secret_url</code>)</b></p>
                <p>Fungsi global <NuxtLink to="/id/globals/functions/">base_url_admin()</NuxtLink> adalah untuk mengembalikan nilai <code>$site.$admin_secret_url</code>.</p>
              </div>
            </div>

            <h2>UMetode Perutean URL</h2>
            <p>
              Metode perutean url ada pada <code>$method</code>, sama seperti versi 3.xx nilainya terdiri dari <code>REQUEST_URI</code>,<code>PATH_INFO</code>, dan <code>ORIG_PATH_INFO</code>.
            </p>

            <h3>REQUEST_URI</h3>
            <p>
              Nilai REQUEST_URI cocok untuk NGINX, Apache di server penerapan, LiteSpeed, dll.
            </p>

            <h3>PATH_INFO</h3>
            <p>
              Nilai PATH_INFO cocok untuk lingkungan pengembangan XAMPP.
            </p>

            <h3>ORIG_PATH_INFO</h3>
            <p>
              Nilai ORIG_PATH_INFO adalah untuk konfigurasi server lain.
            </p>

            <h2>CDN URL</h2>
            <p>URL dasar khusus untuk URL Jaringan Pengiriman Konten.</p>
            <p>Nilai defaultnya adalah <code>$cdn_url = &#x27;&#x27;;</code></p>
            <p>
              Contoh:
            </p>
            <div class="macwindow">
              <div class="titlebar">
                <div class="buttons">
                  <div class="close">
                    <a class="closebutton" href="#"><span><strong>x</strong></span></a>
                    <!-- close button link -->
                  </div>
                  <div class="minimize">
                    <a class="minimizebutton" href="#"><span><strong>&ndash;</strong></span></a>
                    <!-- minimize button link -->
                  </div>
                  <div class="zoom">
                    <a class="zoombutton" href="#"><span><strong>+</strong></span></a>
                    <!-- zoom button link -->
                  </div>
                </div>
              </div>
              <div class="maccontent">
                <highlight-code lang="php">
                  $cdn_url = &#x22;http://cdn.cenah.co.id/seme-framework/&#x22;;
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Mengakses nilai URL CDN (<code>$cdn_url</code>)</b></p>
                <p>Bentuk metode <NuxtLink to="/id/controller/cdn_url/">$this-&#x3E;cdn_url()</NuxtLink> kelas <NuxtLink to="/id/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink> adalah untuk mengembalikan nilai <code>$cdn_url</code > nilai.</p>
              </div>
            </div>

            <hr>


          </div>

        </div>
      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/configuration/session/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Session
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/configuration/" class="btn">
            Pengaturan
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
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'URL',
      description: 'Pelajari selengkapnya tentang Pengaturan Rute URL dalam dokumentasi Seme Framework versi 4.0.0.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id',
          text: 'ID',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/configuration',
          text: 'Pengaturan',
        }
      ]
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'id'
      },
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
  },
  jsonld() {
    this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
    const items = this.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        "@type": "WebPage",
        '@id': item.url,
        name: item.text,
      },
    }));
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items,
      },
      {
        "@type": "NewsArticle",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path.replace(/\/+$/, '') + '/'
        },
        "headline": (this.headline || this.title),
        "image": [
          (process.env.CDN_URL || 'http://localhost:3001')+'/logo.png'
        ],
        "dateCreated": "2021-08-11T19:52:38+07:00",
        "datePublished": "2021-08-11T19:52:38+07:00",
        "dateModified": "2021-06-25T09:19:03+07:00",
        "author": {
          "@type": "Person",
          "gender": "Male",
          "name": "Daeng Rosanda, S.Kom",
          "alternateName": "Daeng Rosanda",
          "jobTitle": "Founder",
          "worksFor": {
            "@type": "Organization",
            "name": "Cipta Esensi Merenah",
            "email": "hi@cenah.co.id"
          }
        },
        "publisher": {
          "@type": "Organization",
          "name": "Cipta Esensi Merenah",
          "description": "Cipta Esensi Merenah (Cenah) is software house company focused on developing web-based application from Bandung, Indonesia.",
          "logo": {
            "@type": "ImageObject",
            "name": "logo Cipta Esensi Merenah",
            "url": "https://cdn.cenah.co.id/_nuxt/img/logo-wide.5420183.png",
            "width": "256px",
            "height": "62px"
          }
        },
        "description": this.description
      }
    ];
  }
}
</script>
