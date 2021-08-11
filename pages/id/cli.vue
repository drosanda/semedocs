<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Command Line Interface (CLI)</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1 class="">Command Line Interface</h1>
            <p>Seme Framework sekarang mendukung command line interface (CLI) untuk mengeksekusi framework melalui CLI.</p>

            <h2>Penggunaan Dasar (Windows)</h2>
            <p>
              Pastikan Anda berada di direktori yang sama dengan direktori tempat Seme Framework di Install.
              Asumsikan Seme Framework di install di <code>D:/xampp/htdocs/seme_framework</code>.
              Maka, anda harus pindah dulu ke drive D dengan mengetikan perintah <code>D:</code>.
              Kemudian dilanjutkan dengan perintah <code>cd /xampp/htdocs/seme_framework</code>.
              Barulah, setelah itu bisa mengeksekusi CLI. Lihat contoh perintah dibawah ini untuk lebih memahami.
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
                  php index.php [controller | [directory in controller [controller]]] [method] [param1] [param2]...[paramN]
                </highlight-code>
              </div>
            </div>
            <p>Untuk mac dan linux ada sedikit perbedaan dalam perpindahan direktori, namun untuk proses ekeskusinya sama.</p>

            <h2>Persyaratan</h2>
            <p>
              Untuk menggunakan perintah CLI ini dengan baik, maka PHP-CLI sudah harus terinstal di komputer.
              Sementara untuk pengguna Windows dengan menggunakan XAMPP, bisa dengan mendaftarkannya dulu PHP-CLI kedalam Windows Environment.
              Namun, untuk varian linux dan mac bisa dengan menggunakan absolute path.
            </p>

            <h2>Contoh (linux)</h2>
            <p>
              Berikut ini adalah contoh untuk mengeksekusi Cron Job terhadap Seme Framework dengan CLI.
            </p>

            <h3>CronJob</h3>
            <p>Dalam contoh cronjob ini, diasumsikan ada Controller didalam direktori <code>api_cron</code> dengan nama kelas <code>produk</code> dan memiliki metode <code>update_stok()</code></p>
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
                  0 4 * * * /usr/bin/php /var/www/html/index.php api_cron produk update_stok
                </highlight-code>
              </div>
            </div>
            <p>Anda dapat menyesuaikan <code>/usr/bin/php</code> tergantung pada sistem Anda.</p>

          </div>
        </div>
      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/library/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Library
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/core/" class="btn">
            Core
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
      title: 'Command Line Interface (CLI)',
      description: 'Pelajari selengkapnya tentang how to use Command Line Interface (CLI) on melalui dokumentasi Seme Framework versi 4.0.0.',
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
        "dateModified": "2021-06-25T17:11:31+07:00",
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
