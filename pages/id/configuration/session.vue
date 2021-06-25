<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/configuration">Pengaturan</NuxtLink></li>
          <li class="unavailable">Pengaturan Session</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Pengaturan Session</h1>
            <p>
              Konfigurasi kunci sesi memerlukan untuk mengisolasi sesi yang digunakan oleh aplikasi lain.
              Nilai ini bersifat wajib, nilai pengisiannya bisa acak atau nilai yang diinginkan asalkan memiliki nilai unik.
            </p>
            <p>
              Contoh <code>$saltkey = &#x27;s3mEFr4&#x27;;</code>.
            </p>
            <p>
              Pengaturan nilai <code>$saltkey</code> ini ada didalam setiap file pengaturan. Lihat potongan contoh kode pengaturan dibawah ini
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
                  .
                  .
                  .
                  /****************************/
                  /* == Session Configuration == */
                  /* @var string */
                  /****************************/
                  $saltkey = &#x27;s3mEFr4&#x27;;
                  .
                  .
                  .
                </highlight-code>
              </div>
            </div>
            <p>Kunci sesi ini akan ditambahkan ke <code>$_SESSION</code> secara otomatis. Pelajari tentang <code>$_SESSION</code> di <a href="https://www.php.net/manual/en/reserved.variables.session" target="_blank">situs PHP dalam bahasa inggris <i class="fa fa-external-link"></i></a>.</p>
            <p>Untuk informasi lebih lanjut bagaimana menggunakan sesi menggunakan Seme Framework, silakan baca <NuxtLink to="/id/controller/session/">cara menggunakan Session di Controller</NuxtLink>.</p>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Perhatian</b></p>
                <p>Pastikan pengaturan <code>$saltkey</code> telah diubah dan bersifat unik antara 1 projek dengan projek lainnya.</p>
              </div>
            </div>

            <div class="message is-success">
              <div class="message-body">
                <p><b>Tips</b></p>
                <p>Jika bingung menentukan <code>$saltkey</code>, gunakan nama singkat proyek dan akhiri dengan tahun.</p>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/configuration/db-connection/" class="btn">
            <i class="fa fa-chevron-left"></i>
            DB connection
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/configuration/url/" class="btn">
            URL
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
      suffix: ' - Seme Framework 4 Bahasa Indonesia',
      title: 'Pengaturan Sesi',
      description: 'Pelajari selengkapnya tentang Pengaturan Sesi (Session Configuration) di Seme Framework versi 4.0.0.',
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
        "dateCreated": "2020-06-11T10:12:00+07:00",
        "datePublished": "2020-06-11T10:12:00+07:00",
        "dateModified": "2021-06-25T08:48:08+07:00",
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
