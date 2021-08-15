<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/view">View</NuxtLink></li>
          <li class="unavailable">Tema</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Tema Tampilan</h1>
            <p>
              Seme Framework support theme creation by separating the view into 2 different view parts, the reusable view component(s) and specific view component(s).
              Seme Framework telah menyediakan fitur untuk pembuatan tema tampilan untuk mempermudah dalam penyusunan tampilan HTML.
              Penyusunan tampilan HTML ini akan dipecah berdasarkan jumlah penggunaannya, seperti sering digunakan berulang kali (<em>reusable</em>) atau hanya digunakan 1 kali saja untuk tampilan tertentu (<em>specific</em>).
            </p>

            <h2 class="">Komponen <em>Reusable</em></h2>
            <p>
              Komponen <em>Reusable</em> adalah komponen yang sering digunakan berulangkali ketika menampilkan sebuah website.
              Contoh dari komponen yang sering digunakan didalam tampilan adalah bagian tag <code>head</code>, navigation bar, side menu, footer, dan komponen lainnya.
            </p>

            <h2 class="">Komponen Spesifik</h2>
            <p>
              Komponen spesifik merupakan tampilan yang hanya digunakan untuk halaman itu saja, hampir tidak pernah digunakan dihalaman lain.
              Pada Seme Framework, komponen spesifik biasanya disimpan pada folder sesuai dengan nama kelas Controller dan method-nya.
              Contoh kelas Controller <code>Produk</code> Method <code>detail</code>, maka file viewnya adalah <code>produk/detail/home.php</code>.
            </p>

            <h3 class="">View Spesifik untuk JavaScript</h3>
            <p>
              Pada seme framework, setiap file JavaScript yang spesifik akan disimpan didalam file tampilan berkahiran <code>_bottom.php</code>.
              Contoh untuk kelas Controller <code>Produk</code> Method <code>detail</code>, maka file view khusus untuk javascriptnya adalah <code>produk/detail/home_bottom.php</code>.
            </p>

            <h3 class="">View Spesifik untuk Modal</h3>
            <p>
              <b>Modal</b> merupakan sebuah tampilan yang ada pada lapisan terdepan dan menutup tampilan yang ada, yang bertujuan untuk memberikan informasi tambahan terhadap pengguna.
              Dalam Seme Framework, penggunaan modal ini akan dipecah juga, karena <code>home.php</code> hanya akan dipergunakan untuk tampilan yang langsung tampil saja.
              Untuk itu setiap tampilan <b>Modal</b> akan disimpan didalam file tampilan berkahiran <code>_modal.php</code>.
              Contoh untuk kelas Controller <code>Produk</code> Method <code>detail</code>, maka file view khusus untuk <b>Modal</b>-nya adalah <code>produk/detail/home_modal.php</code>.
            </p>

            <h2 class="">Cara Kerja</h2>
            <p>
              Tema tampilan pada Seme Fraework berada didalam direktori <code>app/view</code>.
              Sementara untuk komponen <em>reusable</em> disimpan didalam <code>app/view/theme_name/page/html</code>.
              Kemudian untuk komponen <em>spesifik</em> disimpan didalam <code>app/view/theme_name/nama_controller/nama_method/home.php</code>.
            </p>

            <h3 id="requirement">Syarat Dasar Tema Tampilan</h3>
            <p>
              Seme Framework membutuhkan sebuah direktori untuk mengumpulan tema tampilan.
              Kemudian, sebuah tema tampilan dikatakan valid jika memiliki file <NuxtLink to="/id/view/script_json">script.json</NuxtLink>, <NuxtLink to="/id/view/theme_json">theme.json</NuxtLink> dan sebuah direktori <code>page</code> yang berisi file layout.
              Untuk lebih jelasnya bisa dilihat pada ilustrasi struktur file dan direktori dibawah ini.
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
                app/
                └── view/
                &#160;└── [THEME_NAME]/
                &#160;&#160;├── theme.json
                &#160;&#160;├── script.json
                &#160;&#160;└── page/
                &#160;&#160;&#160;└── col-1.php
              </highlight-code>
            </div>
            </div>

            <h4>Syarat Direktori Tema</h4>
            <p>
              Direktori Tema merupakan sebuah direktori yang ada didalam <code>app/view</code> dan nama dari direktori tersebut akan mewwakili nama tema.
              Syarat dari direktori ini adalah hanya memiliki <b>huruf kecil</b> kemudian bisa diikuti oleh <b>angka</b> dan atau <b>underscore</b>.
            </p>

            <h4 id="requirement_layout">Syarat File Layout</h4>
            <p>
              File <code>layout</code> merupakan sebuah file yang berisikan layout atau tata letak dari html.
              File layout ini merupakan file utama untuk menyimpan komponen <em>reusable</em>.
              Letak dari file layout ini <b>harus</b> didalam <code>app/view/theme_name/page/</code>.
              Kemudian barulah layout tersebut bisa dipanggil dengan menggunakan metode <NuxtLink to="/id/controller/loadlayout/">loadLayout()</NuxtLink>.
            </p>

            <h5>Contoh <em>Source Code</em> File Layout</h5>
            <p>
              Berikut ini adalah contoh <em>source code</em> untuk file layout <code>col-1.php</code>.
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
                <highlight-code lang="html">
                  &#x3C;!DOCTYPE html&#x3E;
                  &#x3C;html&#x3E;
                  &#x20;&#x3C;head&#x3E;
                  &#x20;&#x20;&#x3C;title&#x3E;&#x3C;?=$this-&#x3E;getTitle()?&#x3E;&#x3C;/title&#x3E;

                  &#x20;&#x20;&#x3C;!-- CSS link from theme.json --&#x3E;
                  &#x20;&#x20;&#x3C;?php $this-&#x3E;getAdditional(); ?&#x3E;
                  &#x20;&#x3C;/head&#x3E;
                  &#x20;&#x3C;body&#x3E;
                  &#x20;&#x20;&#x3C;?php $this-&#x3E;getThemeContent() ?&#x3E;

                  &#x20;&#x20;&#x3C;!-- from script.json --&#x3E;
                  &#x20;&#x20;&#x3C;?php $this-&#x3E;getJsFooter(); ?&#x3E;

                  &#x20;&#x20;&#x3C;!-- Load and execute javascript --&#x3E;
                  &#x20;&#x20;&#x3C;script&#x3E;
                  &#x20;&#x20;&#x20;//javascript loaded from putJsReady()
                  &#x20;&#x20;&#x20;&#x3C;?php $this-&#x3E;getJsReady(); ?&#x3E;

                  &#x20;&#x20;&#x20;//javascript loaded from putJsContent()
                  &#x20;&#x20;&#x20;&#x3C;?php $this-&#x3E;getJsContent(); ?&#x3E;
                  &#x20;&#x3C;/script&#x3E;
                  &#x3C;/body&#x3E;
                  &#x3C;/html&#x3E;
                </highlight-code>
              </div>
            </div>

            <h4>Syarat theme.json</h4>
            <p>
              File theme.json ini adalah salah satu syarat untuk pembuatan tema tampilan di Seme Framework.
              File ini akan menyimpan semua tag yang nantinya akan ada didalam tag HTML <code>head</code>.
              File ini diproses oleh metode <NuxtLink to="/id/controller/constructor/">Konstruktor kelas SENE_Controller</NuxtLink> dan di<em>outputkan</em> oleh metode <NuxtLink to="/id/controller/getadditional/">getAdditional()</NuxtLink>.
            </p>

            <h5>Contoh <em>Source Code</em> theme.json</h5>
            <p>
              Berikut ini adalah contoh <em>source code</em> untuk file <code>theme.json</code> untuk Seme Framework minimal versi 4.0.2.
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
                <highlight-code lang="javascript">
                  {
                    &#x22;link&#x22;:
                    [
                      {
                        &#x22;rel&#x22;: &#x22;stylesheet&#x22;,
                        &#x22;href&#x22;: &#x22;https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css&#x22;
                      },
                      {
                        &#x22;rel&#x22;: &#x22;stylesheet&#x22;,
                        &#x22;href&#x22;: &#x22;&#x7B;&#x7B;cdn_url&#x7D;&#x7D;assets/css/jquery.gritter.css&#x22;
                      },
                      {
                        &#x22;rel&#x22;: &#x22;stylesheet&#x22;,
                        &#x22;href&#x22;: &#x22;&#x7B;&#x7B;base_url&#x7D;&#x7D;skin/v2/css/app.css&#x22;
                      }
                    ]
                  }
                </highlight-code>
              </div>
            </div>
            <div class="message is-success">
              <div class="message-body">
                <p><b>Pelajari selengkapnya</b></p>
                <p>
                   Penggunaan kode <code>{{base_url}}</code> dan <code>{{cdn_url}}</code> untuk <NuxtLink to="/id/view/theme_json">theme.json</NuxtLink>.
                </p>
              </div>
            </div>

            <h4>Syarat script.json</h4>
            <p>
              File script.json ini adalah salah satu syarat untuk pembuatan tema tampilan di Seme Framework.
              File ini akan menyimpan semua tag <code>script</code> yang nantinya akan disimpan pada <a href="https://stackoverflow.com/questions/30653081/why-scripts-at-the-end-of-body-tag#answer-30653102" target="_blank">bagian akhir halaman HTML <i class="fa fa-external-link"></i></a> sebelum tutup tag <code>body</code>.
              File ini diproses oleh metode <NuxtLink to="/id/controller/constructor/">Konstruktor kelas SENE_Controller</NuxtLink> dan di<em>outputkan</em> oleh metode <NuxtLink to="/id/controller/getjsfooter/">getJsFooter()</NuxtLink>.
            </p>

            <h5>Contoh <em>Source Code</em> script.json</h5>
            <p>
              Berikut ini adalah contoh <em>source code</em> untuk file <code>script.json</code> untuk Seme Framework minimal versi 4.0.2.
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
                <highlight-code lang="javascript">
                  {
                    &#x22;script&#x22;:
                    [
                      {
                        &#x22;src&#x22;: &#x22;https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js&#x22;
                      },
                      {
                        &#x22;src&#x22;: &#x22;&#x7B;&#x7B;base_url&#x7D;&#x7D;skin/v2/css/jquery.min.js&#x22;
                      },
                      {
                        &#x22;src&#x22;: &#x22;&#x7B;&#x7B;cdn_url&#x7D;&#x7D;assets/js/jquery.moneyFormat.min.js&#x22;
                      }
                    ]
                  }
                </highlight-code>
              </div>
            </div>
            <div class="message is-success">
              <div class="message-body">
                <p><b>Pelajari selengkapnya</b></p>
                <p>
                   Penggunaan kode <code>{{base_url}}</code> dan <code>{{cdn_url}}</code> untuk <NuxtLink to="/id/view/script_json">script.json</NuxtLink>.
                </p>
              </div>
            </div>


          </div>
        </div>

      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/view/theme_json/" class="btn">
            <i class="fa fa-chevron-left"></i>
            theme.json
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/view/" class="btn">
            View
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
      base_url: '{{base_url}}',
      cdn_url: '{{cdn_url}}',
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'Tema Tampilan',
      description: 'Pelajari selengkapnya tentang pembuatan tema tampilan beserta syarat tema tampilan untuk Seme Framework versi 4',
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
        "dateCreated": "2021-08-15T16:46:00+07:00",
        "datePublished": "2021-08-15T16:46:00+07:00",
        "dateModified": "2021-08-15T16:46:00+07:00",
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
