<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">getThemeElement</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode getThemeElement</h1>
            <p>
              Metode <code>getThemeElement</code> digunakan untuk menaggil html elemen atau komponen html yang sudah kita buat sebelumnya kedalam suatu file yang ada didalam <em>view</em>.
            </p>

            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini bentuk umum penggunaan metode <code>getThemeElement</code> dari kelas <NuxtLink to="/id/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink>.
            </p>
            <MacWindowCodeSnippet lang="php">
              getThemeElement(string $view_location [,array $__forward=array() [, int $cacheable=0]]): $this
            </MacWindowCodeSnippet>

            <h3>Parameter</h3>
            <p>
              Metode ini terdiri 2 parameter wajib dan 1 parameter opsional.
            </p>

            <h4>$view_location</h4>
            <p>
              Lokasi file html berekstensi php yang sudah kita definisikan. File ini relatif terhadap tema yang di definisikan pada controller.
            </p>

            <h4>$__forward</h4>
            <p>
              Variable global yang sudah terdefinisi dan bisa diteruskan ke html view yang akan dipanggil.
            </p>

            <h4>$cacheable</h4>
            <p>
              Parameter opsional untuk menentukan bahwa komponen html yang dipanggil sudah dalam kondisi ter<em>cache</em>.
            </p>
            
            <h2>Contoh Penggunaan</h2>
            <p>
              Metode ini dapat digunakan di dalam layout file seperti didalam file <code>page/col-1.php</code>.
            </p>
            <MacWindowCodeSnippet lang="php">
              &#x3C;!DOCTYPE html&#x3E;
              &#x3C;html&#x3E;
              &#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/html/head&#x22;,$__forward); ?&#x3E;
              &#x3C;body&#x3E;
                ...
              &#x3C;/body&#x3E;
              &#x3C;/html&#x3E;
            </MacWindowCodeSnippet>

            <p>
              Ini adalah struktur <em>file</em> dan direktori untuk <code>page/html/head</code>.
            </p>
            <MacWindowCodeSnippet lang="shell">
seme-framework/
&#x251C;&#x2500;&#x2500; app/ &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0;# Application directory
&#x2502; &#xA0; &#x2514;&#x2500;&#x2500; view/ &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; # View files
&#x2502; &#xA0; &#xA0; &#xA0; &#x2514;&#x2500;&#x2500; front/ &#xA0; &#xA0; &#xA0; &#xA0; &#xA0;# Front-end views, based on loaded theme
&#x2502; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#x2514;&#x2500;&#x2500; page/ &#xA0; &#xA0; &#xA0; # Page-specific views
&#x2502; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#x251C;&#x2500;&#x2500; col-1.php
&#x2502; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#x2514;&#x2500;&#x2500; html/
&#x2502; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#x2514;&#x2500;&#x2500; head.php
            </MacWindowCodeSnippet>
            <p>
              Kemudian ini adalah contoh kode dari <code>page/html/head.php</code>
            </p>
            
            <MacWindowCodeSnippet lang="php">
&#x3C;head&#x3E;
  &#x3C;!-- Basic page needs --&#x3E;
  &#x3C;meta charset=&#x22;utf-8&#x22;&#x3E;
  &#x3C;!-- Mobile specific metas  --&#x3E;
  &#x3C;meta name=&#x22;viewport&#x22; content=&#x22;width=device-width, initial-scale=1&#x22;&#x3E;

  &#x3C;!--[if IE]&#x3E;
    &#x3C;meta http-equiv=&#x22;X-UA-Compatible&#x22; content=&#x22;IE=edge&#x22;&#x3E;
  &#x3C;![endif]--&#x3E;
  &#x3C;meta http-equiv=&#x22;x-ua-compatible&#x22; content=&#x22;ie=edge&#x22;&#x3E;
  &#x3C;title&#x3E;&#x3C;?php echo $this-&#x3E;getTitle(); ?&#x3E;&#x3C;/title&#x3E;
  &#x3C;meta name=&#x22;language&#x22; content=&#x22;id&#x22; /&#x3E;
  &#x3C;meta name=&#x22;description&#x22; content=&#x22;&#x3C;?php echo $this-&#x3E;getDescription(); ?&#x3E;&#x22;/&#x3E;
  &#x3C;meta name=&#x22;keyword&#x22; content=&#x22;&#x3C;?php echo $this-&#x3E;getKeyword(); ?&#x3E;&#x22;/&#x3E;
  &#x3C;meta name=&#x22;author&#x22; content=&#x22;&#x3C;?php echo $this-&#x3E;getAuthor(); ?&#x3E;&#x22;&#x3E;
  &#x3C;link rel=&#x22;icon&#x22; href=&#x22;&#x3C;?php echo $this-&#x3E;getIcon(); ?&#x3E;&#x22; type=&#x22;image/x-icon&#x22; /&#x3E;
  &#x3C;link rel=&#x22;shortcut icon&#x22; href=&#x22;&#x3C;?php echo $this-&#x3E;getShortcutIcon(); ?&#x3E;&#x22; type=&#x22;image/x-icon&#x22; /&#x3E;
  &#x3C;meta name=&#x22;robots&#x22; content=&#x22;&#x3C;?php echo $this-&#x3E;getRobots(); ?&#x3E;&#x22; /&#x3E;

  &#x3C;?php $this-&#x3E;getAdditionalBefore(); ?&#x3E;
  &#x3C;?php $this-&#x3E;getAdditional(); ?&#x3E;
  &#x3C;?php $this-&#x3E;getAdditionalAfter(); ?&#x3E;
&#x3C;/head&#x3E;
            </MacWindowCodeSnippet>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/id/controller/getshortcuticon/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  getShortcutIcon
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/id/controller/gettitle/" class="btn">
                  getTitle
                  <i class="fa fa-chevron-right"></i>
                </nuxt-link>
              </div>
            </div>

          </div>
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
      title: 'Metode getThemeElement',
      description: 'Pelajari selengkapnya tentang metode getThemeElement dari SENE_Controller di Seme Framework versi 4.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id',
          text: 'ID'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/controller',
          text: 'Controller'
        }
      ],
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
  jsonld() {
    this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
    const items = this.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
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
        "dateCreated": "2025-06-06T16:57:00+07:00",
        "datePublished": "2025-06-06T16:57:00+07:00",
        "dateModified": "2025-06-06T20:56:00+07:00",
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
