<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/configuration">Pengaturan</NuxtLink></li>
          <li class="unavailable">Environment</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Pengaturan Environment</h1>
            <p>
              Seme Framework telah mendukung file konfigurasi berdasarkan environment.
            </p>

            <h2 class="">Prioritas</h2>
            <p>
              Seme Framework akan membaca konfigurasi dengan urutan ini:
            </p>
            <ol>
              <li><code>production.php</code></li>
              <li><code>staging.php</code></li>
              <li><code>development.php</code></li>
            </ol>

            <h2 class="">Tahap Production</h2>
            <p>
              Pada file <code>production.php</code>, Anda dapat menempatkan konfigurasi Anda untuk lingkungan <code>production</code>.
              Seperti koneksi database, url dasar, dll. Selain itu, Anda dapat menempatkan nilai konfigurasi tambahan apa pun hanya untuk fase <code>production</code>.
            </p>
            <p>
              Anda harus mengecualikan <code>app/config/production.php</code> dari git dengan menambahkannya di <code>.gitignore</code>.
              Jadi, Anda dapat <code>git pull</code> kapan saja di server produksi tanpa khawatir file konfigurasinya tertimpa.
              Namun, hati-hati konfigurasi <code>.gitignore</code> yang salah dapat menghapus beberapa file atau direktori.
            </p>

            <h2 class="">Fase Staging</h2>
            <p>
              Pada file <code>staging.php</code> file, Anda dapat menempatkan konfigurasi Anda untuk lingkungan <code>Staging</code>.
              Seperti koneksi database, url dasar, dll. Selain itu, Anda dapat menempatkan nilai konfigurasi tambahan apa pun hanya untuk fase <code>Staging</code>.
            </p>
            <p>
              Anda harus mengecualikan <code>app/config/staging.php</code> dari git dengan menambahkannya di <code>.gitignore</code>.
              Jadi, Anda dapat <code>git pull</code> kapan saja di server produksi tanpa khawatir file konfigurasinya tertimpa.
              Namun, hati-hati konfigurasi <code>.gitignore</code> yang salah dapat menghapus beberapa file atau direktori.
            </p>

            <h2 class="">Fase Development</h2>
            <p>
              Ini adalah fase konfigurasi default. Pada file pengembangan, Anda dapat meletakkan konfigurasi untuk lingkungan pengembangan.
               Seperti koneksi database, url dasar, dll. Selain itu, Anda dapat menambahkan nilai konfigurasi tambahan apa pun hanya untuk fase pengembangan.
            </p>

            <h3>Contoh, URL Dasar dengan port khusus pada Fase Development</h3>
            <p>Seme Framework dapat berjalan dengan port http default yang diganti misalkan <code>8080</code></p>
            <p>Untuk melakukannya, Anda harus mengedit nilai <code>$site</code> pada file <code>app/config/development.php</code>.</p>

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
                  $site = &#x22;http://localhost:8080/seme-framework/&#x22;;
                </highlight-code>
              </div>
            </div>

            <p>Tetapi jika menggunakan <code>$_SERVER[&#x27;HTTP_HOST&#x27;]</code> tidak perlu menambahkan port suffix setelahnya.</p>
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
                  $site = &#x22;http://&#x22;.$_SERVER[&#x27;HTTP_HOST&#x27;].&#x22;/seme-framework/&#x22;;
                </highlight-code>
              </div>
            </div>

          </div>

        </div>
      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/configuration/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Pengaturan
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/configuration/routes/" class="btn">
            Routes
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
        title: 'Pengaturan koneksi DB',
        description: 'Pelajari selengkapnya tentang pengaturan koneksi database untuk Seme Framework versi 4.0.0.',
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/',
            text: 'ID',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/configuration/',
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
          "dateCreated": "2021-07-25T19:12:00+07:00",
          "datePublished": "2021-07-25T19:12:00+07:00",
          "dateModified": "2021-07-25T19:12:00+07:00",
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
