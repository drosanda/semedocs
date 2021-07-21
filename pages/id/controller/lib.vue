<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">Metode Lib</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Lib</h1>
            <p>
              Metode lib dari kelas SENE_Controller digunakan untuk memanggil kelas pustaka (<em>library</em>) supaya dapat menjadi bagian dari kelas controller yang memanggilnya.
            </p>
            <p>
              Secara teknis, metode lib akan otomatis menginstansiasi kelas pustaka sehingga menjadi <b>properti</b> dari kelas yang memanggilnya.
            </p>
            <p>
              Terus apa nama propertinya kalau dibuat otomatis? Nama propertinya akan sama dengan nama filenya tapi tanpa akhiran <code>.php</code>.
            </p>
            <p>Untuk penjelasan lengkapnya mari kita lihat contoh kode.</p>

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
                      ...
                      // memanggil library Seme_Email
                      $this-&#x3E;lib(&#x27;seme_email&#x27;);
                      //cukup dengan 1 baris saja,
                      // Seme Framework akan membuatkan properti baru
                      // pada kelas ini yaitu $seme_email
                      // untuk pemanggilanya bisa lihat kode dibawah ini
                      $this-&#x3E;seme_email-&#x3E;from(&#x27;daeng@example.com&#x27;);
                      ....
                    }
                    ...

                    public function coba2(){
                      ...
                      // memanggil library Seme_Email
                      $this-&#x3E;lib(&#x27;seme_log&#x27;);
                      //cukup dengan 1 baris saja,
                      // Seme Framework akan membuatkan properti baru
                      // pada kelas ini yaitu $seme_log
                      // untuk pemanggilanya bisa lihat kode dibawah ini
                      $this-&#x3E;log-&#x3E;write(&#x27;haloo&#x27;);
                      ....
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <div class="message is-warning">
              <div class="message-body">
                <p>This <b>lib</b> method only affected for single file class library.</p>
                <p>For using 3rd party library like from <code>composer</code> you can read it from <NuxtLink to="/id/library/3rd-party">3rd library section</NuxtLink>.</p>
              </div>
            </div>

            <h2>Bentuk Umum</h2>
            <p>
              Metode lib memiliki bentuk umum sebagai berikut.
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
                  $this-&#x3E;lib(string $filename_location[, string $alias[, string $embeeding_type=&#x22;lib&#x22;]])
                </highlight-code>
              </div>
            </div>

            <h2>Parameter</h2>
            <p>Metode lib terdiri dari 3 parameter yaitu <code>$filename_location</code>, <code>$alias</code> dan <code>$embeeding_type</code>.</p>

            <h3>$filename_location</h3>
            <p>Lokasi dan nama file library yang akan digunakan <b>tanpa akhiran</b><code>.php</code>.</p>
            <p>Library yang digunakan oleh Seme Framework baik direktori maupun filenya harus selalu relatif terhadap direktori <code>kero/lib</code>.</p>
            <p>Jadi pastikan library sudah ada didalam direktori  <code>kero/lib</code> tersebut.</p>

            <h4>Contoh</h4>
            <p>Berikut ini adalah contoh pemanggilan library secara langsung</p>
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
                  class Order extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;lib(&#x27;conumtext&#x27;);
                    }
                    ...
                    public function submit(){
                      //executing the seme_email object
                      $this-&#x3E;lib(&#x27;conumtext&#x27;);
                      $token = $this-&#x3E;conumtext-&#x3E;genRand($type = &#x27;str&#x27;, $min = 7, $max = 15);
                      ....
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <div class="message is-info">
              <div class="message-body">
                <p>Saat memuat pustaka dari sub direktori, awalan jalur tidak akan digunakan sebagai nama model objek.</p>
                <p>Jadi, berhati-hatilah dalam memilih perpustakaan kelas penamaan atau alias.</p>
                <p>Jika perlu, Anda dapat menduplikasi kelas perpustakaan untuk menghindari konflik dengan sufiks tambahan dengan angka.</p>
                <p>contoh <code>kero/lib/seme_email2.php</code> lalu nama kelas <code>Seme_Email2</code>.</p>
              </div>
            </div>

            <h3>$alias</h3>
            <p>Tujuan alias untuk menyingkat nama model yang kita buat menjadi SENE_Controller.</p>
             <p>Alias dapat berisi alfanumerik dan garis bawah apa pun.</p>
             <p>Ini contohnya:</p>
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
                  $this-&#x3E;lib('seme_email','eml');
                </highlight-code>
              </div>
            </div>

            <p>Dengan contoh ini, seme_email akan menjadi bagian dari kelas SENE_Controller sebagai objek <code>eml</code></p>
             <p>Ini contoh lengkapnya:</p>
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
                      $this-&#x3E;lib(&#x27;seme_email&#x27;,&#x27;eml&#x27;);
                    }
                    public function index(){
                      //executing the hello_model object
                      $this-&#x3E;eml-&#x3E;from(&#x27;daeng@example.com&#x27;)
                      ....
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <div class="message is-success">
              <div class="message-body">
                <p><b>Tips</b></p>
                <p>Jika bingung cara mengisi nama alias, bisa diambil dari huruf depan setiap nama kelas.</p>
                <p>contoh, <code>kero/lib/seme_email.php</code> lalu aliasnya menjadi <code>se</code>.</p>
              </div>
            </div>

            <h3>$embeeding_type</h3>
            <p>Tujuan embeeding_type adalah untuk mengaktifkan objek autoinstantiate atau tidak.</p>
             <p>Jika nilainya sama dengan <code>lib</code>, library akan dibuat instance-nya dengan nama yang sama dengan nama file library.</p>
             <p>Jika tidak, perpustakaan hanya akan disertakan tanpa membuat instance.</p>
            <p>Berikut adalah contohnya:</p>
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
                  $this-&#x3E;lib('seme_email','eml','inc');
                </highlight-code>
              </div>
            </div>
            <p>Dengan contoh ini, seme_email akan menjadi bagian dari kelas SENE_Controller sebagai objek <code>eml</code></p>
            <p>Here is the full example:</p>
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
                      $this-&#x3E;lib(&#x27;seme_email&#x27;,&#x27;eml&#x27;,&#x27;inc&#x27;);
                    }
                    public function index(){
                      //executing the hello_model object
                      $eml = new Seme_Email();
                      $eml-&#x3E;from(&#x27;daeng@example.com&#x27;);
                      ....
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <div class="message is-info">
              <div class="message-body">
                <p>Jika nilai <code>$embeeding_type</code> tidak sama dengan <code>lib</code>, parameter kedua akan diabaikan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/controller/input/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Properti Input
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/controller/load/" class="btn">
            Metode Load
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
      title: 'Metode lib',
      description: 'Pelajari selengkapnya tentang metode lib dari kelas SENE_Controller di Seme Framework versi 4.0.0',
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
        "dateCreated": "2020-06-28T08:12:00+07:00",
        "datePublished": "2020-06-28T08:12:00+07:00",
        "dateModified": "2021-06-28T08:23:00+07:00",
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
