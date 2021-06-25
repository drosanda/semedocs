<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">Constructor Kelas Controller</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Constructor Kelas Controller</h1>
            <p>
              Metode Constructor dibutuhkan oleh kelas SENE_Controller maupun turunannya, yang digunakan untuk memanggil kelas <i>parent</i>-nya.
            </p>
            <p>
              Metode ini penting dan tidak untuk dilewatkan dalam penggunaan kelas Controller di Seme Framework.
              Biasanya metode ini ditempatkan setelah deklarasi properti, dan ada pada urutan pertama sebelum metode lainnya.
            </p>

            <div class="message is-danger">
              <div class="message-body">
                <p><b>Perhatian</b></p>
                <p>Jika constructor kelas lupa digunakan atau tidak digunakan, mungkin akan menimbulkan hasil yang tidak diharapkan.</p>
              </div>
            </div>

            <h2>Penggunaan Dasar</h2>
            <p>Berikut ini adalah contoh penggunaan dasar metode Constructor dalam bentuk kode</p>

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
                  parent::__construct();
                </highlight-code>
              </div>
            </div>

            <p>Kemudian, ini adalah contoh utuhnya:</p>
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
                  &#x3C;?php
                  class Blog extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      echo 'Hi, I am run properly!';
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Tips</b></p>
                <p>Apabila menurunkan kelas untuk <NuxtLink to="/id/core/controller/">Core Controller</NuxtLink>, pastikan juga untuk mendeklarasikan metode Constructor.</p>
              </div>
            </div>

          </div>
        </div>



      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/controller/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Controller
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/controller/getKey/" class="btn">
            Controller: getKey
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
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4 Bahasa Indonesia',
      title: 'Constructor Kelas Controller',
      description: 'Pelajari selengkapnya tentang __construct Method dari SENE_Controller di Seme Framework versi 4.0.0',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/controller/',
          text: 'Controller',
        }
      ],
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
      '@type': "WebPage",
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
      "dateModified": "2021-06-25T09:23:00+07:00",
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
