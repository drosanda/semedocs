<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Download</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1 class="">Downloads</h1>
            <p>Anda dapat menemukan sumber unduhan apa pun yang terkait dengan Seme Framework. Anda bisa mendapatkan Seme Framework dengan mengunduhnya melalui github:</p>
            <ul>
              <li><a href="https://github.com/drosanda/seme-framework" target="_blank">Seme Framework di Github <i class="fa fa-external-link"></i></a></li>
            </ul>

            <h2 class="">Install</h2>
            <p>Kloning repositori dengan git atau unduh arsip ZIP dan kemudian ekstrak ke direktori yang Anda inginkan.</p>
            <h3>Instal dari arsip ke XAMPP (Contoh)</h3>
            <p>Setelah mengunduh arsip dan kemudian ekstrak ke:</p>

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
                  # di Mac
                  /Application/XAMPP/htdocs/seme_framework

                  # di linux
                  /opt/lampp/htdocs/seme_framework

                  # di windows
                  D:\xampp\htdocs\seme_framework
                </highlight-code>
              </div>
            </div>

            <h3>Instal menggunakan GIT CLONE di Windows</h3>
            <p>Kami berasumsi Anda telah menginstal XAMPP di drive D.</p>
            <p>Bukalah <code>cmd</code> atau <code>cmder</code> dan kemudian jalankan perintah berikut:</p>

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
                  # Pergi ke drive D dengan perintah
                  D:

                  # Pindah ke direktori htdocs
                  cd xampp/htdocs

                  # lihat isi direktori htdocs
                  dir

                  # periksa apakah direktori seme_framework telah ada?

                  # JIka ada bisa dipindahkan saja seperti ini
                  mv seme_framework seme_old

                  # atau bisa dihapus juga dengan perintah seperti ini
                  rm -fr seme_framework

                  # baru jalankan git clone
                  git clone https://github.com/drosanda/seme-framework.git seme_framework
                </highlight-code>
              </div>
            </div>

            <h3>Instal menggunakan Mac dengan XAMPP</h3>
            <p>Bukalah <code>cmd</code> or <code>terminal</code> dan kemudian jalankan perintah berikut:</p>

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
                  # Pindah ke direktori htdocs
                  cd /Applications/XAMPP/htdocs/

                  # lihat isi direktori htdocs
                  ls

                  # periksa apakah direktori seme_framework telah ada?

                  # JIka ada bisa dipindahkan saja seperti ini
                  mv seme_framework seme_old

                  # atau bisa dihapus juga dengan perintah seperti ini
                  rm -fr seme_framework

                  # baru jalankan git clone
                  git clone https://github.com/drosanda/seme-framework.git seme_framework
                </highlight-code>
              </div>
            </div>

            <h2>Test</h2>
            <p>
              Sebelum menjalankan framework, pastikan apache pada XAMPP <b>sudah dijalankan</b>. Dan kemudian buka alamat melalui browser.
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
                  http://localhost/seme_framework/
                </highlight-code>
              </div>
            </div>
            <p>
              Jika tidak muncul error, berarti anda sudah selesai menginstall Seme Framework.
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
        suffix: ' - Seme Framework 4',
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
