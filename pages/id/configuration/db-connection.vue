<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/configuration">Pengaturan</NuxtLink></li>
          <li class="unavailable">Koneksi Database</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Pengaturan Koneksi Database</h1>
            <p>
              Seme Framework memiliki kemampuan untuk membuka sambungan langsung terhadap aplikasi database seperti MySQL atau Maria DB melalui ekstensi MySQLi.
              Pengaturan koneksi database ada di dalam <code>app/config/development.php</code> pada array <code>$db</code>, yang terdiri atas 7 kunci pengaturan.
            </p>

            <h2>$db['host']</h2>
            <p>
              Alamat aplikasi database server yang digunakan untuk membuka koneksi ke aplikasi database. Dapat diisi dengan <code>localhost</code> atau <code>127.0.01</code> atau dengan alamat lainnya sesuai dengan pengaturan database.
            </p>

            <h2>$db['user']</h2>
            <p>
              Nama pengguna yang digunakan untuk membuka koneksi ke aplikasi database.
            </p>

            <h2>$db['pass']</h2>
            <p>
              Kata sandi atau <i>password</i> yang digunakan untuk membuka koneksi ke aplikasi database.
            </p>

            <h2>$db['name']</h2>
            <p>
              Nama database yang akan digunakan didalam aplikasi database server.
            </p>

            <h2>$db['port']</h2>
            <p>
              Aplikasi database menggunakan <i>PORT</i> tertentu pada TCP sebagai jalur komunikasi data. Nilai default dari array key ini adalah <code>$db[&#x27;port&#x27;] = &#x27;3306&#x27;;</code>.
            </p>

            <h2>$db['charset']</h2>
            <p>
              Set karakter atau pengkodean yang digunakan untuk koneksi database. Pengaturan ini sangat penting, terutama untuk penyimpan data <i>multibyte</i>, seperti untuk menyimpan tulisan arab atau jepang. Isi dari array key ini dapat berupa <code>latin1</code> atau <code>utf8</code> sesuai dengan kebutuhan setelan karakternya.
            </p>

            <h2>$db['engine']</h2>
            <p>
              <i>Database Engine</i>, pada versi 4 hanya menggunakan ekstensi <code>MySQLi</code>, jadi nilai dari array kunci ini hanya <code>$db[&#x27;engine&#x27;] = &#x27;mysqli&#x27;;</code>.
            </p>

            <hr>


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
          <nuxt-link to="/id/configuration/url/" class="btn">
            Pengaturan URL
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
        title: 'Pengaturan koneksi DB',
        description: 'Pelajari selengkapnya tentang pengaturan koneksi database untuk Seme Framework versi 4.0.0.',
        breadcrumbs: [
          {
            url: process.env.ORIGIN_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.ORIGIN_URL || 'http://localhost:3001')+'/id/',
            text: 'ID',
          },
          {
            url: (process.env.ORIGIN_URL || 'http://localhost:3001')+'/id/configuration/',
            text: 'Pengaturan',
          },
          {
            url: (process.env.ORIGIN_URL || 'http://localhost:3001')+'/id/configuration/db-connection/',
            text: 'Koneksi DB',
          }
        ]
      }
    },
    head() {
      return {
        htmlAttrs: {
          lang: 'id'
        },
        title: this.title+' - '+this.name,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.description
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: this.title
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
            "@id": (process.env.ORIGIN_URL || 'http://localhost:3001')+this.$route.path.replace(/\/+$/, '') + '/'
          },
          "headline": (this.headline || this.title),
          "image": [
            this.logo
          ],
          "dateCreated": "2020-06-11T10:12:00+07:00",
          "datePublished": "2020-06-11T10:12:00+07:00",
          "dateModified": "2021-06-11T01:04:00+07:00",
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
