<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/configuration/">Pengaturan</NuxtLink></li>
          <li class="">Rute</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Pengaturan Rute</h1>
            <p>
              Biasanya ada hubungan satu-ke-satu antara string URL dan kelas/metode pada Controller yang sesuai. Segmen dalam URI biasanya mengikuti pola ini:
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
                  example.com/class/method/id/
                </highlight-code>
              </div>
            </div>

            <p>Namun, dalam beberapa kasus, Anda mungkin ingin memetakan kembali hubungan ini sehingga kelas/fungsi yang berbeda dapat dipanggil alih-alih yang terkait dengan URL.</p>

            <p>Misalnya, katakanlah Anda ingin URL Anda memiliki prototipe ini:</p>
            <ul>
              <li>example.com/product/1/</li>
              <li>example.com/product/2/</li>
              <li>example.com/product/3/</li>
              <li>example.com/product/4/</li>
            </ul>

            <p>
              Biasanya segmen kedua dari URL dicadangkan untuk nama fungsi, tetapi dalam contoh di atas, ia diisi dengan ID produk.
              Untuk mengatasinya, Seme Framework memungkinkan Anda untuk memetakan ulang URL tersebut terhadap metode atau kelas Controller yang diinginkan.
            </p>
            <hr>
            <h2>Menyetel Perutean URI khusus</h2>
            <p>
              Aturan perutean ditentukan di <code>app/config/</code> Anda. Anda dapat mengatur perutean ini diterapkan ke dalam produksi, staging, atau pengembangan tergantung pada kebutuhan Anda.
            </p>
            <p>
              Pada setiap file konfigurasi, Seme Framework telah membuat bagian komentar untuk menulis ulang URI di bagian perutean.
            </p>
            <p>
              Pada setiap file yang dikonfigurasi, Seme Framework telah membuat bagian komentar untuk menulis ulang URI di bagian perutean.
            </p>
            <hr>
            <h2>Wildcards</h2>
            <p>Rute wildcard tipikal mungkin terlihat seperti ini:</p>
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
                  $routes['product/:num'] = "katalog/detail";
                </highlight-code>
              </div>
            </div>

            <p>
              Dalam sebuah rute, <code>kunci array</code> berisi URI yang akan dicocokkan.
              Sedangkan pada <code>nilai array</code> berisi tujuan yang harus dirutekan ulang.
              Dalam contoh di atas, jika kata literal "produk" ditemukan di segmen pertama URL dan nomor ditemukan di segmen kedua.
              Maka kelas "katalog" dan metode "detail" akan digunakan.
            </p>

            <p>Anda dapat mencocokkan nilai literal atau Anda dapat menggunakan dua jenis wildcard:</p>
            <ul>
              <li><code>(:num)</code> akan cocok dengan segmen yang hanya berisi angka.</li>
              <li><code>(:any)</code> akan cocok dengan segmen yang berisi karakter apa pun.</li>
            </ul>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Catatan</b></p>
                <p>Rute akan berjalan sesuai urutan yang ditentukan. Rute yang lebih tinggi akan selalu didahulukan dari yang lebih rendah.</p>
              </div>
            </div>

            <h3>Contoh</h3>
            <p>Berikut adalah beberapa URI - Konfigurasi pemetaan ulang rute pengontrol.</p>
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
                  $routes['produk'] = "products";
                </highlight-code>
              </div>
            </div>

            <p>
              URL yang berisi kata "produk" di segmen pertama akan dipetakan ulang ke kelas "products".
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
                  $routes['produk/ojan'] = "products/detail/15";
                </highlight-code>
              </div>
            </div>


            <p>URL yang berisi segmen produk/ojan akan dipetakan kembali ke kelas "produk" dan metode "detail". ID akan disetel ke "15".</p>

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
                  $routes['product/(:any)'] = "katalog/pencarian_produk";
                </highlight-code>
              </div>
            </div>

            <p>URL dengan "produk" sebagai segmen pertama, dan apa pun di segmen kedua akan dipetakan ulang ke kelas "katalog" dan metode "pencarian_produk".</p>

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
                  $routes['produk/(:num)'] = "katalog/detail/$1";
                </highlight-code>
              </div>
            </div>

            <p>URL dengan "produk" sebagai segmen pertama, dan nomor di segmen kedua akan dipetakan ulang ke kelas "katalog" dan metode "detail" meneruskan kecocokan sebagai variabel ke fungsi.</p>

            <div class="message is-danger">
              <div class="message-body">
                <p><b>Penting</b></p>
                <p>Jangan gunakan garis miring di depan/di belakang.</p>
              </div>
            </div>

            <hr>
            <h3>Rute Cadangan</h3>
            <p>Ada dua rute yang cadangan yang sudah dipakai:</p>
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
                  $routes['home'] = 'home';
                </highlight-code>
              </div>
            </div>

            <br>

            <p>
              Rute ini menunjukkan kelas controller mana yang harus dimuat jika URI tidak berisi data, yang akan terjadi ketika orang memuat URL <code>root</code> Anda.
              Dalam contoh di atas, kelas "selamat datang" akan dimuat.
              Anda dianjurkan untuk selalu memiliki rute default jika tidak, halaman 404 akan muncul secara default.
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
                  $routes['notfound'] = 'notfound';
                </highlight-code>
              </div>
            </div>

            <br>
            <p>
              Rute ini menunjukkan kelas pengontrol mana yang harus dimuat jika pengontrol yang diminta tidak ditemukan.
              Secara default akan dijalankan <code>app/controller/notfound.php</code>.
              Anda dapat mengubahnya jika perlu.
            </p>

            <div class="message is-danger">
              <div class="message-body">
                <p><b>Penting</b></p>
                <p>Code Rute cadangan harus berada pada sebelum rute wildcard.</p>
              </div>
            </div>

            <p>
              Rute cadangan lainnya adalah rute <code>rahasia admin</code>, pelajari selengkapnya tentang <NuxtLink to="/id/uri_routing/admin/">rute untuk admin</NuxtLink>.
            </p>
            
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/configuration/environment/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Environment
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/configuration/session/" class="btn">
            Session
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'v4.0.0',
  data (){
    return {
      name: 'Seme Framework v4.0.0',
      suffix: ' - Seme Framework 4',
      title: 'Pengaturan Rute',
      description: 'Pelajari pengaturan rute dan pemetaan ulang rute di Seme Framework 4.',
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
          text: 'URI Routing',
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
        "dateCreated": "2021-07-30T23:11:00+07:00",
        "datePublished": "2021-07-30T23:12:00+07:00",
        "dateModified": "2021-07-30T23:36:00+07:00",
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
