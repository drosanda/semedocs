<template>
  <div class="section">
    <div class="row container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/uri-routing">URI Routing</NuxtLink></li>
          <li class="unavailable">Admin URI Routing</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Perutean URI (<em>URI Routing</em>) untuk admin</h1>
            <p>Seme Framework memiliki fitur default untuk mengganti semua rute di bawah <b>app/controller/admin</b>. Fitur ini hadir ketika pengguna membutuhkan keamanan ekstra untuk mengamankan halaman admin. Tidak hanya re-route, Seme Framework memiliki fungsi base_url lain untuk kompabilitas routing antar halaman admin. Fungsinya adalah <b>base_url_admin()</b>.</p>
            <h2>Kondisi</h2>
            <p>Untuk menggunakan fitur ini, Seme Framework memiliki beberapa syarat yang harus dipenuhi seperti:</p>
            <ol>
              <li><code>$site_url</code> harus diisi dengan benar pada setiap konfigurasi file, mis. <code>app/config/development.php</code>.</li>
              <li><code>$admin_secret_url</code> pada bagian perutean admin di setiap konfigurasi file disetel. Nilai default <b>admin</b>.</li>
              <li>Hanya bekerja pada pengontrol di bawah folder <code>app/controller/admin</code>.</li>
              <li>Jika ada folder pengontrol yang cocok dengan nilai <code>$admin_secret_url</code>, pengontrol di bawah yang cocok akan diabaikan.</li>
              <li>Gunakan <code>base_url_admin</code> masing-masing sebagai ganti <code>base_url()</code>.</li>
            </ol>
          </div>
        </div>

      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/uri_routing/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Uri Routing
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/constants/" class="btn">
            Konstanta
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
      title: 'Perutean URI untuk Admin',
      description: 'Pelajari selengkapnya tentang the URI Routing of melalui dokumentasi Seme Framework versi 4.0.0.',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/uri_routing',
          text: 'Perutean URI',
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
        "dateModified": "2021-06-25T09:20:10+07:00",
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
