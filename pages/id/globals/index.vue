<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Fungsi dan Variabel Global</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Fungsi dan Variabel Global</h1>
            <p>
              Ada beberapa variabel dan fungsi yang ada sudah tersedia secara global pada Seme Framework. Fungsi atau variabel ini akan mempermudah pada saat pengkodean aplikasi.
            </p>

            <h2 id="fungsi_base_url">Fungsi base_url()</h2>
            <p>Fungsi global <code>base_url()</code> digunakan untuk mengeluarkan nilai URL dasar yang telah di setel pada <NuxtLink to="/id/configuration/url/">pengaturan URL Seme Framework</NuxtLink>.</p>

            <h3>Parameter</h3>
            <p>Fungsi ini membutuhkan satu parameter opsional yaitu $url_component.</p>

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
                  base_url(string $url_component): string
                </highlight-code>
              </div>
            </div>

            <h3>Contoh Penggunaan</h3>
            <p>Berikut ini cara penggunaan dasar untuk fungsi base_url(), diasumsikan nilai dari <code>$site</code> adalah <code>http://www.example.com/</code>.</p>

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
                  base_url(&#x27;user/profile/123&#x27;);
                </highlight-code>
              </div>
            </div>

            <p>
              Akan mengembalikan nilai berupa string, <code>http://www.example.com/user/profile/123</code>.
            </p>

            <h2>Fungsi base_url_admin()</h2>
            <p>Fungsi global <code>base_url_admin()</code> digunakan untuk mengeluarkan nilai URL dasar <b>khusus</b> untuk admin yang telah di setel pada <NuxtLink to="/id/configuration/url/">pengaturan URL Seme Framework</NuxtLink>.</p>

            <h3>Parameter</h3>
            <p>Fungsi ini membutuhkan satu parameter opsional yaitu $url_component.</p>

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
                  base_url_admin(string $url_component): string
                </highlight-code>
              </div>
            </div>

            <h3>Contoh Penggunaan</h3>
            <p>
              Berikut ini cara penggunaan dasar untuk fungsi base_url_admin(), diasumsikan nilai dari <code>$site</code> adalah <code>http://www.example.com/</code> dan nilai dari <code>$admin_secret_url</code> adalah <code>mastermind</code>.
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
                  base_url_admin(&#x27;user/profile/123&#x27;);
                </highlight-code>
              </div>
            </div>
          </p>
          <p>
            Akan mengembalikan nilai berupa string, <code>http://www.example.com/mastermind/user/profile/123</code>.
          </p>

          <h2 id="fungsi_dd">Fungsi dd(mixed $data)</h2>
          <p>Fungsi global sama seperti <code>SENE_Controller::debug()</code> yang akan meng-<code>echo</code>-kan nilai dari suatu variabel yang dilewatkan kedalam fungsi ini sehingga mudah dibaca oleh developer.</p>
          <p>Fungsi global ini hanya tersedia untuk Seme Framework versi 4.x.</p>
          <h3>Parameter</h3>
          <p>Fungsi ini membutuhkan satu parameter wajib yaitu $data.</p>

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
                dd(mixed $data): void
              </highlight-code>
            </div>
          </div>

          <h2>SENE_Controller::debug()</h2>
          <p>Fungsi global sama seperti <code>dd()</code> yang akan meng-<code>echo</code>-kan nilai dari suatu variabel yang dilewatkan kedalam fungsi ini sehingga mudah dibaca oleh developer.</p>
          <h3>Parameter</h3>
          <p>Fungsi ini membutuhkan satu parameter wajib yaitu $data.</p>

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
                SENE_Controller::debug(mixed $data): void
              </highlight-code>
            </div>
          </div>

          <h2>$__forward</h2>
          <p>Variabel <code>$__forward</code> ini digunakan untuk melanjutkan data yang dilewatkan dari dalam View (komponen tema) ke View (komponen tema) lainnya.</p>

          <h3>Contoh Penggunaan</h3>
          <p>Asumsikan kita memiliki struktur direktori seperti ini</p>

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
                -app
                |---view
                |------front
                |---------page
                |---------col-1.php
                |-----------html
                |--------------header.php
                |--------------navbar.php
                |--------------foter.php
              </highlight-code>
            </div>
          </div>

          <p>Pada col-1.php kita akan memanggil <code>html/header.php</code> dan dari sana akan memanggil  <code>html/navbar.php</code>.</p>

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
                Ilustrasi
                header.php &#x3C;----- navbar.php
              </highlight-code>
            </div>
          </div>

          <p>Supaya semua isi variabel yang dilewatkan kedalam <code>html/header.php</code> bisa dilewatkan kedalam <code>html/header.php</code> maka diperlukan <code>$__forward</code>.</p>
          <p>Setelah itu dari sisi kode-nya.</p>

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
                $this-&#x3E;getThemeElement(&#x27;page/html/navbar&#x27;,$__forward);
                ?&#x3E;
              </highlight-code>
            </div>
          </div>

        </div>
      </div>

    </div>

    <div class="nav-bottom">
      <div class="nav-bottom-left">
        <nuxt-link to="/id/constants" class="btn">
          <i class="fa fa-chevron-left"></i>
          Konstanta
        </nuxt-link>
      </div>
      <div class="nav-bottom-right">
        <nuxt-link to="/id/model" class="btn">
          Model
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
      title: 'Fungsi dan Variabel Global',
      description: 'Pelajari selengkapnya tentang Fungsi dan Variabel Global Seme Framework versi 4.0.x',
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
        "dateModified": "2021-06-25T18:57:00+07:00",
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
