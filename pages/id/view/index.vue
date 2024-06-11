<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class="unavailable">View</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">View</h1>
            <p>
              Dengan konsep MVC pada Seme Framework, semua kode view ini harus dipisah dari Controller maupun model untuk membuat penyusunan kode menjadi rapi.
              View atau tampilan digunakan oleh Seme Framework untuk menampilkan sebuah tampilan yang berasal dari HTML.
              Biasanya file untuk tampilan yang berisi HTML ini disimpan di dalam direktori <code>app/view/</code> dengan akhiran file <code>.php</code>.
            </p>

            <h2>Struktur File dan Direktori untuk View</h2>
            <p>
              Sebelum melanjutkan ke pembahasan selanjutnya, alangkah lebih baik kita mempelari contoh struktur file direktori untuk vew.
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
                  &#160;├── front/
                  &#160;|&#160;├── home/
                  &#160;|&#160;│ ├── home.php
                  &#160;|&#160;│ ├── home_modal.php
                  &#160;|&#160;│ └── home_bottom.php
                  &#160;|&#160;├── theme.json
                  &#160;|&#160;├── script.json
                  &#160;|&#160;└── page/
                  &#160;|&#160;&#160;├── col-1.php
                  &#160;|&#160;&#160;└── html/
                  &#160;|&#160;&#160;&#160;&#160;└── head.php
                  &#160;├── template.php ( tanpa tema)
                  &#160;└── login.php ( tanpa tema)
                </highlight-code>
              </div>
            </div>


  					<h2>Cara Memanggil File View</h2>
  					<p>
              Seme Framework telah menyediakan metode untuk memanggil file view <b>secara manual</b> (tanpa tema) yakni dengan metode <NuxtLink to="/id/controller/view">View <i class="fa fa-window-restore"></i></NuxtLink> dari kelas <code>SENE_Controller</code>.
              Untuk selengkapnya mari kita lihat contoh 1.
            </p>

  					<h3>Contoh 1</h3>
            <p>
              Sebelum memulai contoh, pastikan bahwa Seme Framework telah di <NuxtLink to="/id/downloads">instal <i class="fa fa-window-restore"></i></NuxtLink> sesuai dengan panduan.
              Pertama-tama buat file baru di <code>app/view/template.php</code>.
              Kemudian isikan <i>source code</i> seperti ini pada file tersebut:
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
                  &#x3C;html&#x3E;
                    &#x3C;head&#x3E;
                      &#x3C;title&#x3E;Seme Framework Template&#x3C;/title&#x3E;
                    &#x3C;/head&#x3E;
                    &#x3C;body&#x3E;
                      &#x3C;h1&#x3E;Yi-ha this is your first view!&#x3C;/h1&#x3E;
                    &#x3C;/body&#x3E;
                  &#x3C;/html&#x3E;
                </highlight-code>
              </div>
            </div>

            <p>Kemudian, setelah itu edit controller Home yang ada di <code>app/controller/home.php</code> dan ganti isiinya menjadi seperti <i>source code</i> seperti ini:</p>
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
                  class Home extends SENE_Controller{
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      $this-&#x3E;view(&#x27;template&#x27;);
                    }
                  }
                </highlight-code>
              </div>
            </div>
  					<p>Jika telah selesai, cobalah buka alamat <code>http://localhost/seme_framework/</code> apakah akan muncul seperti HTML yang sudah disetel sebelumnya?</p>

            <hr>
  					<h2>Mengirim Data ke View</h2>
            <p>
              Seme Framework memiliki kemampuan untuk mengirim data yang telah dipanggil atau dibuat di controller kedalam view.
              Tapi, hanya mengizinkan satu <code>variabel</code> saja yang dapat dilemparkan kedalam view.
              Oleh karena itu, kita harus membuat variabel tersebut bertipe data <code>array</code> supaya dapat menampung banyak nilai.
              Pada view, <code>kunci array</code> dari array yang dilemparkan dari controller, akan menjadi variabel baru.
              Untuk selengkapnya mari kita lihat contoh 2.
            </p>

  					<h3>Contoh 2</h3>
            <p>
              Sebelum memulai contoh, pastikan bahwa Seme Framework telah di <NuxtLink to="/id/downloads">instal <i class="fa fa-window-restore"></i></NuxtLink> sesuai dengan panduan.
              Pertama-tama buat file view didalam direktori <code>app/view/template2.php</code>.
              Kemudian tambahkan <i>source code</i> seperti ini:
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
                  &#x3C;html&#x3E;
                    &#x3C;head&#x3E;
                      &#x3C;title&#x3E;Seme Framework Template 2&#x3C;/title&#x3E;
                    &#x3C;/head&#x3E;
                    &#x3C;body&#x3E;
                      &#x3C;h1&#x3E;Halo &#x3C;?=$nama?&#x3E;! Gimana kabar? Sehat?&#x3C;/h1&#x3E;
                    &#x3C;/body&#x3E;
                  &#x3C;/html&#x3E;
                </highlight-code>
              </div>
            </div>

            <p>
              Kemudian, setelah itu edit controller Home yang ada di <code>app/controller/home.php</code> dan ganti isiinya menjadi seperti <i>source code</i> seperti ini:
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
                  &#x3C;?php
                  class Home extends SENE_Controller{
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      $data = array();
                      $data['nama'] = 'James';
                      $this-&#x3E;view(&#x27;template2&#x27;, $data);
                    }
                  }
                </highlight-code>
              </div>
            </div>
  					<p>
              Jika telah selesai, cobalah buka alamat <code>http://localhost/seme_framework/</code> apakah akan muncul seperti HTML yang sudah disetel sebelumnya?
            </p>
            <hr>
            <p>
              Demikian pembahasan tentang konsep View pada Seme Framework, mari kita pelajari selengkapnya tentang:
              <ul>
                <li><NuxtLink to="/id/view/theme">Tema <i class="fa fa-window-restore"></i></NuxtLink></li>
                <li><NuxtLink to="/id/tutorial/introduction/#part2">Tutorial Pembuatan Tema <i class="fa fa-window-restore"></i></NuxtLink></li>
              </ul>
            </p>

          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/model/where" class="btn">
          <i class="fa fa-chevron-left"></i>
            Model Where
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/view/variable" class="btn">
            Variabel
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
      title: 'View',
      description: 'Pelajari selengkapnya konsep dan penggunaan View di Seme Framework versi 4.',
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
        "dateCreated": "2021-08-15T16:59:00+07:00",
        "datePublished": "2021-08-15T16:59:00+07:00",
        "dateModified": "2021-08-15T16:59:00+07:00",
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
