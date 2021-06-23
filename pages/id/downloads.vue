<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Download</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1 class="">Download</h1>
            <p>Anda dapat menemukan sumber unduhan apa pun yang terkait dengan Seme Framework. Anda bisa mendapatkan Seme Framework dengan mendownloadnya melalui github:</p>
            <ul>
              <li><a href="https://github.com/drosanda/seme-framework" target="_blank">Seme Framework di Github</a></li>
            </ul>

            <h2 class="">Install</h2>
            <p><i>Clone</i> repositori Seme Framework dengan menggunakan git atau download langsung file ZIP-nya. Kemudian ekstrak ke lokasi yang diinginkan.</p>
            <h3>Contoh cara instal menggunakan XAMPP</h3>
            <p>Setelah mendownload file ZIP-nya, kemudian ekstrak ke:</p>
            <ul>
               <li><code>/opt/lampp/htdocs/seme_framework</code> di Linux, atau</li>
              <li><code>D:\xampp\htdocs\seme_framework</code> di Windows</li>
            </ul>
            <p>
              Dan kemudian jalankan XAMPP dan buka <code>http://locahost/seme_framework/</code>.
              ika tidak ada muncul error, lanjutkan ke halaman pengaturan.
            </p>

            <h3>Install menggunakan GIT CLONE di Windows</h3>
            <p>Asumsikan XAMPP diinstall pada drive D.</p>
            <p>Buka <code>cmd</code> atau <code>cmder</code> lalu jalankan perintah berikut ini:</p>
            <ul>
              <li>Buka drive D dengan perintah <code>d:</code>.</li>
              <li>Pindah ke direktori htdocs dengan cara <code>cd xampp/htdocs</code>.</li>
              <li>Kemudian tampilkan isi dari htdocs dengan perintah <code>ls</code> atau <code>dir</code>. Periksa jika direktori seme_framework telah ada atau belum.</li>
              <li>Jika telah ada direktori seme_framework, maka hapus direktori tersebut dengan perintah <code>rm -fr seme_framework</code> atau pindahkan direktori tersebut dengan perintah <code>mv seme_framework sf_old</code>.</li>
              <li>Kemudian lakukan <code>git clone</code> lagi dari repositori Seme Framework di github, dan disimpan ke direktori seme_framework dengan perintah
                <pre><code v-highlight class="shell"># git clone https://github.com/drosanda/seme-framework.git seme_framework</code></pre>
              </li>
            </ul>
            <p>
              Dan kemudian jalankan XAMPP dan buka <code>http://locahost/seme_framework/</code> melalui Chrome atau Firefox.
              Jika tidak ada kesalahan, maka Anda dapat melanjutkan ke halaman konfigurasi.
            </p>

            <h3>Instal menggunakan Mac dengan XAMPP</h3>
            <p>Buka <code>cmd</code> atau <code>terminal</code> kemudian jalankan perintah berikut ini:</p>
            <ul>
              <li>Pindah ke direktori htdocs dengan cara <code>cd /Applications/XAMPP/htdocs</code>.</li>
              <li>Kemudian tampilkan isi dari htdocs dengan perintah <code>ls</code> Periksa jika direktori seme_framework telah ada atau belum.</li>
              <li>Jika telah ada direktori seme_framework, maka hapus direktori tersebut dengan perintah <code>rm -fr seme_framework</code> atau pindahkan direktori tersebut dengan perintah <code>mv seme_framework sf_old</code>.</li>
              <li>Kemudian lakukan <code>git clone</code> lagi dari repositori Seme Framework di github, dan disimpan ke direktori seme_framework dengan perintah <code>git clone https://github.com/drosanda/seme-framework.git seme_framework</code>.</li>
            </ul>
            <h2>Menjalankan Seme Framework</h2>
            <p>
              Setelah menjalankan XAMPP, Anda dapat membuka <code>http://locahost/seme_framework/</code> melaui chrome atau firefox.
              Jika tidak muncul error, lanjutkan ke halaman konfigurasi.
            </p>

            <amp-img layout="responsive" width="660" height="294" :src="fr" alt="Seme Framework di Localhost menggunakan XAMPP"></amp-img>

            <h2>Mencoba Contoh yang telah berjalan</h2>
            <p>Berikut adalah daftar contoh kerja yang menggunakan Kerangka Seme. Anda dapat mengkloning atau mengunduh dengan mengklik tautan berikut:</p>
            <ul>
              <li><a href="https://github.com/drosanda/seme_adminhtml" target="_blank">Admin HTML template</a></li>
              <li><a href="https://github.com/drosanda/address-id-api" target="_blank">API Address Provider (ID)</a></li>
              <li><a href="https://github.com/drosanda/bank-id-api" target="_blank">API Address Provider (ID)</a></li>
              <li><a href="https://github.com/drosanda/seme_landing" target="_blank">Landing Page</a></li>
              <li><a href="https://github.com/drosanda/semesid" target="_blank">Sistem Informasi Desa</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/requirements/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Persyaratan
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
    data() {
      return {
        fr: require('~/assets/img/first-run.png'),
        name: 'Seme Framework 4',
        suffix: ' - Seme Framework 4 Bahasa Indonesia',
        title: 'Download dan Instal',
        description: 'Pelajari selengkapnya tentang cara download dan instal Seme Framework versi 4.0.0',
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/',
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
            "@id": (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path.replace(/\/+$/, '') + '/'
          },
          "headline": (this.headline || this.title),
          "image": [
            (process.env.CDN_URL || 'http://localhost:3001')+'/logo.png'
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
