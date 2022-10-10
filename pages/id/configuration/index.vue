<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Pengaturan</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Pengaturan</h1>
            <p>
              Pada versi 4.x.x, konfigurasi telah digabungkan menjadi file tunggal untuk penerapan yang mudah. Konfigurasi dasar tidak berbeda secara signifikan dengan versi 3.x.x, seperti database, controller, base url, dll. Kemudian konfigurasi tambahan juga telah ditambahkan, untuk menjaga konfigurasi khusus penerapan.
            </p>
            <h2 class="">Lokasi file pengaturan</h2>
            <p>
              Lokasi file untuk pengaturan seme framework ada di <code>app/config/</code>. Secara default, hanya ada file <code>development.php</code> didalamnya.
            </p>
            <h3 class="">Prioritas File Pengaturan Environment</h3>
            <p>
              Seme Framework akan membaca konfigurasi dengan urutan ini:
            </p>
            <ol>
              <li><code>production.php</code></li>
              <li><code>staging.php</code></li>
              <li><code>development.php</code></li>
            </ol>
            <p>
              Isi dari setiap file dapat berbeda satu sama lain tergantung pada kebutuhan Anda.
              Pelajari selengkapnya tentang <NuxtLink to="/id/configuration/environment/">pengaturan environment</NuxtLink>.
            </p>
            <div class="message is-info">
              <div class="message-body">
                <p>
                  Secara default Seme Framework hanya menyertakan <code>development.php</code> untuk tahap pengembangan.
                  Anda dapat membuat file baru dengan nama <code>staging.php</code> atau bahkan <code>production.php</code> di server <i>production</i>.
                </p>
              </div>
            </div>
            <hr>
            <h2>Pengaturan Dasar</h2>
            <p>
              Berikut ini adalah daftar link untuk pengaturan dasar Seme Framework.
            </p>
            <ul>
              <li><NuxtLink to="/id/configuration/url/">Pengaturan URL</NuxtLink></li>
              <li><NuxtLink to="/id/configuration/db-connection/">Koneksi Database</NuxtLink></li>
            </ul>
            <h3>Session</h3>
            <p>
              Seme Framework telah ada pengaturan untuk kunci session key untuk menyekat sesi dari aplikasi yang lain.
              Pengaturan kunci session ini bersifat wajib meskipun nilai kunci session dapat diisi dengan nilai acak atau nilai tertentu selama tidak berbenturan dengan kunci session yang lain.
              Contoh <code>$saltkey = &#x27;s3mEFr4&#x27;;</code>.
            </p>

            <h3>Timezone (zona waktu)</h3>
            <p>
              Pengaturan zona waktu sangan penting untuk beberapa kebutuhan aplikasi tertentu.
              Nilai default dari zona waktu di Seme Framework adalah <code>$timezone = &#x27;Asia/Jakarta&#x27;;</code>.
              Untuk referensi nilai zona waktu dapa dilihat di <a href="https://www.php.net/manual/en/timezones.php">Daftar zona waktu</a> di website resmi PHP.
            </p>

            <h3>Pengaturan tambahan</h3>
            <p>
              Framework Seme sekarang mendukung nilai konfigurasi tambahan yang dapat diimplementasikan per pengaturan.
              Adapun untuk nilai pengaturan tambahan ada di array <code>$semevar</code>.
              Silakan diisi dengan kombinasi kunci dan nilai (name value pair), yang mana nilai dari variabel ini dapat berupa <code>string</code>, <code>array</code>, <code>object</code>, dan <code>number</code> tergantung dari kebutuhan.
            </p>
            <hr>

            <h2>Kode Sumber (<em>Source Codes</em>)</h2>
            <p>Berikut ini adalah kode sumber default untuk pengaturan Seme Framework pada tahap <code>development.php</code>.</p>

            <ExamplesConfiguration/>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Properti $config</b></p>
                <p>Baca selengkapnya tentang properti $config di halaman <NuxtLink to="/id/controller/config">Controller/Config</NuxtLink>.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/downloads/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Download dan Install
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
    data (){
      return {
        name: 'Seme Framework 4',
        suffix: ' - Seme Framework 4',
        title: 'Pengaturan',
        description: 'Pelajari selengkapnya tentang pengaturan melalui dokumentasi Seme Framework versi 4.0.0.',
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/id',
            text: 'ID',
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
    jsonld() { this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
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
          "dateModified": "2022-01-10T19:21:00+07:00",
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
