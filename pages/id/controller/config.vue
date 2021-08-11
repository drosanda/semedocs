<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">Config</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Properti Config</h1>
            <p>
              Properti <code>$config</code> merupakan sebuah properti yang berisi nilai-nilai dari file pengaturan yang dipakai.
              Setiap <em>variable</em> yang ada didalam file konfigurasi akan diubah menjadi object ketika dipanggil oleh properti ini.
            </p>

            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini adalah bentuk umum properti <code>$config</code> dari kelas <NuxtLink to="/id/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink>.
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
                  $this-&#x3E;config-&#x3E;{$object_config_name};
                </highlight-code>
              </div>
            </div>

            <h4>$object_config_name</h4>
            <p>
              Nilai dari <code>$object_config_name</code> dapat berupa string, object, atau array tergantung ada apa saja didalam file konfigurasi.
            </p>

            <h2>Contoh</h2>
            <p>Berikut ini adalah cara untuk memanggil pengaturan <em>host</em> database.</p>

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
                  ...
                  //print the database connection host
                  echo $this-&#x3E;config-&#x3E;db[&#x27;host&#x27;];
                  ...
                </highlight-code>
              </div>
            </div>

            <h3>Nilai Pengaturan yang Digunakan</h3>
            <p>
              Seme Framework mengizinkan 3 pengaturan yang berbeda yaitu development.php, staging.php, dan production.php.
              Apabila kita ingin mengetahui pengaturan mana yang sedang digunakan, dapat dilakukan dengan cara memanggil properti <code>$config</code> ini.
              Mari kita lihat contoh potongan kode dibawah ini, yang ada didalam sebuah kelas controller.
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
                  ...
                  echo $this-&#x3E;config-&#x3E;environment;
                  // akan menampilkan:
                  // - development, atau
                  // - staging, atau
                  // - production
                  ...
                </highlight-code>
              </div>
            </div>

            <h3>Properti Semevar</h3>
            <p>
              Properti <code>$this-&#x3E;config-&#x3E;semevar</code> merupakan sebuah object dari variabel <code>$semevar</code> yang ada didalam file pengaturan Seme Framework.
              Properti ini digunakan untuk mengambil nilai-nilai <em>hardcode</em> untuk kebutuhan pembangunan aplikasi.
            </p>
            <p>
              Pada contoh kali ini, kita akan mengetahui cara mengambil nilai <code>$semevar</code> dari file pengaturan kedalam properti <code>$this-&#x3E;config</code> didalam sebuah file controller.
              Berikut ini adalah contoh isi array <code>$semevar</code> yang ada didalam file pengaturan Seme Framework</code>.
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
                  ...
                  $semevar[&#x27;site_name&#x27;] = &#x27;Cipta Esensi Merenah&#x27;;
                  $semevar[&#x27;site_version&#x27;] = &#x27;1.0.0&#x27;;
                  ...
                </highlight-code>
              </div>
            </div>
            <p>
              Berikut ini adalah cara pengambilannya didalam sebuah controller dengan menggunakan properti <code>$config</code> dan properti <code>$semevar</code>.
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
                  ...
                  echo $this-&#x3E;config-&#x3E;semevar-&#x3E;site_name.' v'.$this-&#x3E;config-&#x3E;semevar-&#x3E;site_version;
                  ...
                </highlight-code>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/id/controller/cdn_url/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  Metode cdn_url
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/id/controller/constructor/" class="btn">
                  Metode Constructor
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
      title: 'Properti Config',
      description: 'Pelajari tentang properti $config dari kelas SENE_Controller untuk Seme Framework 4',
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
        "dateCreated": "2021-08-11T18:44:00+07:00",
        "datePublished": "2021-08-11T18:44:00+07:00",
        "dateModified": "2021-08-11T18:44:00+07:00",
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
