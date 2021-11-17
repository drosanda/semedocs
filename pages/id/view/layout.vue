<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/view">View</NuxtLink></li>
          <li class="unavailable">Layout</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Layout</h1>
            <p>
              Layout merupakan sebuah view yang ada didalam sebuah <NuxtLink to="/id/view/theme/" >Tema Tampilan</NuxtLink>.
              Layout ini akan berisikan kode yang menjadi bungkus dari tata letak tampilan web, seperti 1 kolom, 2 kolom, maupun 3 kolom tergantung dari kebutuhan.
            </p>

            <h2>Persyaratan Layout</h2>
            <p>Seme Framework hanya  file Layout dengan kondisi sebagai berikut:</p>
            <ol>
              <li>Lokasi file tata letak berada di bawah direktori halaman di dalam direktori tema.</li>
              <li>Nama file layout hanya berisi <b>huruf kecil</b>, tidak ada <b>spasi</b>, hanya boleh berisi <b>underscore</b> dan diakhiri dengan ekstensi <code>.php</code>.</li>
              <li>File Layout hanya dapat dipanggil oleh metode <NuxtLink to="/id/controller/loadlayout">loadLayout</NuxtLink> di dalam Controller.</li>
            </ol>

            <h2 id="contoh_view_layout">Contoh Source Code View Layout</h2>
            <p>Berikut ini adalah contoh umum untuk source code view layout yang terdiri 1 kolom dengan menggunakan <a href="https://getbootstrap.com/docs/3.3/css/#grid" target="_blank">Bootstrap 3</a>:</p>
            <div id="view_layout_example" class="macwindow">
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
                <highlight-code lang="html">
                  &#x3C;!DOCTYPE html&#x3E;
                  &#x3C;html lang=&#x22;en&#x22;&#x3E;
                  &#x3C;head&#x3E;
                    &#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/html/head&#x22;,$__forward); ?&#x3E;
                  &#x3C;/head&#x3E;
                  &#x3C;body&#x3E;
                    &#x3C;?php $this-&#x3E;getThemeElement(&#x27;page/html/topbar&#x27;,$__forward); ?&#x3E;
                    &#x3C;div class=&#x22;container&#x22;&#x3E;
                      &#x3C;div class=&#x22;row&#x22;&#x3E;
                        &#x3C;div class=&#x22;col-md-12&#x22;&#x3E;
                          &#x3C;?php $this-&#x3E;getThemeContent(); ?&#x3E;
                        &#x3C;/div&#x3E;
                      &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;?php $this-&#x3E;getThemeElement(&#x27;page/html/footer&#x27;,$__forward); ?&#x3E;

                    &#x3C;?php $this-&#x3E;getJsFooter(); ?&#x3E;
                    &#x3C;script&#x3E;
                      &#x3C;?php $this-&#x3E;getJsContent(); ?&#x3E;
                      $(document).ready(function(e){
                      &#x3C;?php $this-&#x3E;getJsReady(); ?&#x3E;
                      });
                    &#x3C;/script&#x3E;
                  &#x3C;/body&#x3E;
                  &#x3C;/html&#x3E;
                </highlight-code>
              </div>
            </div>

          </div>
        </div>

      </div>



      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/view" class="btn">
          <i class="fa fa-chevron-left"></i>
            View
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/view/theme/" class="btn">
            Tema Tampilan
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
      suffix: ' - Seme Framework 4',
      title: 'View layout',
      description: 'Pelajari selengkapnya tentang layout di Seme Framework versi 4',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/view',
          text: 'View',
        }
      ]
    }
  },
  head() {
    return {
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
        "dateModified": "2021-11-18T06:07:00+07:00",
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
