<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
          <li class="unavailable">Insert</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Insert</h1>
            <p>
              Insert merupakan sebuah metode dari properti <code>$db</code> yang ada didalam kelas <code>SENE_Model</code> untuk digunakan sebagai <strong>Query Builder</strong>.
              Kegunaan dari metode ini adalah untuk menambahkan data pada sebuah tabel.
            </p>

            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini adalah bentuk umum dari metode <code>insert</code> dari properti <code>$db</code> yang ada di dalam kelas <code>SENE_Model</code>.
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
                  $this-&#x3E;db-&#x3E;insert(string $table_name, array $data_insert [, bool $mass_insert=0 [, bool $is_debug=0]]): $this-&#x3E;db
                </highlight-code>
              </div>
            </div>

            <h3>Parameter</h3>
            <p>Metode insert memiliki 2 parameter wajib yaitu <b>$table_name</b> and <b>$values</b>.</p>

            <h4>$table_name</h4>
            <p>
              Nilai dari <code>$table_name</code> merujuk pada nama tabel yang akan ditambahkan datanya.
            </p>

            <h4>$data_insert</h4>
            <p>
              Nilai <code>$data_insert</code> bertipe data <code>array</code> yang mana kunci array-nya merujuk pada nama kolom dari tabel terpilih.
              Dan nilai array-nya berisi data yang akan dimasukan ke dalam tabel.
              Setiap isi nilai ini dapat diisi fungsi bawaan dari MySQL, seperti:
              <ul>
                <li><code>NOW()</code></li>
                <li><code>NULL</code></li>
              </ul>
            </p>

            <h4>$mass_insert</h4>
            <p>
              Nilai <code>$mass_insert</code> dapat berisi nilai 1 dan 0. Apabila nilai sama dengan 1 (satu), digunakan untuk menginsert data lebih dari satu baris dalam satu kali pemanggilan metode.
              Supaya metode ini dapat berjalan dengan baik, nilai dari <code>$data_insert</code> harus bertipe data <code>array of array</code>.
              Dimana array pertama berisikan sequence atau urutan baris, dengan key otomatis.
              Sementara untuk isinya dari setiap baris urutan array berisikan gabungan kunci dan nilai array seperti pada insert data pada umumnya.
            </p>

            <h4>$is_debug</h4>
            <p>
              Nilai <code>$is_debug</code> dapat berisi nilai 1 dan 0. Apabila nilai sama dengan 1 (satu), proses akan terhenti dan akan menampilkan query yang digunakan oleh metode ini.
              Meskipun query ditampilkan, tidak ada proses yang tereksekusi ketika nilai <code>$is_debug</code> sama dengan 1.
            </p>

            <h2>Contoh Penggunaan</h2>
            <p>
              Berikut ini adalah contoh penggunaan metode <code>insert</code> pada sebuah model.
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
                  class Blog_Model extends SENE_Model{
                    var $tbl = &#x27;blog&#x27;;
                    var $tbl_as = &#x27;b&#x27;;
                    public function __construct(){
                      &#x9; parent::__construct();
                    }
                    public function insert($di){
                      $this-&#x3E;db-&#x3E;insert($ths-&#x3E;tbl,$di);
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <p>Sementara, contoh kode pada kelas controllernya</p>
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
                  class Blog extends SENE_Controller{
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;load(&#x27;blog_model&#x27;,&#x27;bm&#x27;); #class scope model
                    }
                    public function index(){
                      $di = array();
                      $di[&#x27;id&#x27;] = 1;
                      $di[&#x27;title&#x27;] = &#x22;This is new title of this blog!&#x22;;
                      $di[&#x27;content&#x27;] = &#x22;This is new title of this blog!&#x22;;
                      $res = $this-&#x3E;bm-&#x3E;insert($di); //call the method on the model
                      if($res){
                        echo &#x27;Success&#x27;;
                      }else{
                        echo &#x27;failed&#x27;;
                      }
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Contoh Penggunaan untuk insert massal</h3>
            <p>
              Berikut ini adalah contoh insert data secara massal dengan menggunakan metode insert.
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
                  class Blog_Model extends SENE_Model{
                    var $tbl = &#x27;blog&#x27;;
                    var $tbl_as = &#x27;b&#x27;;
                    public function __construct(){
                      &#x9; parent::__construct();
                    }
                    public function insert($di){
                      $dis = array();
                      $dis[] = array(
                      &#x27;id&#x27; =&#x3E; &#x27;null&#x27;,
                      &#x27;nama&#x27; =&#x3E; &#x27;Daeng&#x27;
                      );
                      $dis[] = array(
                      &#x27;id&#x27; =&#x3E; &#x27;null&#x27;,
                      &#x27;nama&#x27; =&#x3E; &#x27;Andi&#x27;
                      );
                      $dis[] = array(
                      &#x27;id&#x27; =&#x3E; &#x27;null&#x27;,
                      &#x27;nama&#x27; =&#x3E; &#x27;Reza&#x27;
                      );
                      $dis[] = array(
                      &#x27;id&#x27; =&#x3E; &#x27;null&#x27;,
                      &#x27;nama&#x27; =&#x3E; &#x27;Loan&#x27;
                      );
                      $this-&#x3E;db-&#x3E;insert($ths-&#x3E;tbl, $dis, 1);
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h2>Fungsi dan Nilai Bawaan MySQL / MariaDB</h2>
            <p>
              Seme Framework mendukung fungsi dan nilai bawaan dari sistem database, seperti:
            </p>
            <ul>
              <li><code>NOW()</code></li>
              <li><code>NULL</code></li>
            </ul>

            <h3>Contoh Penggunaan</h3>
            <p>Berikut ini contoh penggunaan fungsi dan nilai bawaan dari sistem database</p>
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
                  //data input
                  $di = array();
                  ...
                  $di[&#x27;id&#x27;] = &#x27;NULL&#x27;;
                  $di[&#x27;cdate&#x27;] = &#x27;NOW()&#x27;;
                  ..
                  $res = $this-&#x3E;aakm-&#x3E;set($di);
                  ...
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p>Lihat kode lengkapnya dalam <NuxtLink to="/id/tutorial/basic-api/">Tutorial: Basic API</NuxtLink>.</p>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/id/model/insert_multi/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  insert_multi
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/id/model/join_composite/" class="btn">
                  join_composite
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
      title: 'Metode Insert',
      description: 'Pelajari selengkapnya tentang metode insert dari properti $db di SENE_Model pada Seme Framework 4',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/model',
          text: 'Model',
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
        "dateCreated": "2021-08-11T19:52:38+07:00",
        "datePublished": "2021-08-11T19:52:38+07:00",
        "dateModified": "2021-07-25T13:58:00+07:00",
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
