<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
          <li class="unavailable">Update AS</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Update AS</h1>
            <p>
              Metode <code>update_as</code> seperti <NuxtLink to="/id/model/update/">metode update <i class="fa fa-window-restore"></i></NuxtLink > tetapi dengan array key value tida di <b>escaped</b>.
              Metode ini cocok untuk memperbarui kolom ke kolom dalam tabel atau cocok untuk operasi <code>UPDATE</code> SQL lanjutan lainnya.
              Metode ini tersedia dari SEME Framework versi 4.0.2.
            </p>

            <div class="message is-warning">
              <div class="message-body">
                <p><b>Perhatian</b></p>
                 <p>
                   Metode <i>escape</i> (<code>$this-&#x3E;db-&#x3E;esc(&#x27;VALUE&#x27;)</code>) mungkin diperlukan untuk mencegah <a href ="https://en.wikipedia.org/wiki/SQL_injection" target="_blank">SQL Injection<i class="fa fa-external-link"></i></a>.
                 </p>
              </div>
            </div>

            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini adalah bentuk umum metode <code>update_as</code> dari properti <code>$db</code> di kelas <NuxtLink to="/id/model/#SENE_Model">SENE_Model <i class="fa fa-window-restore"></i></NuxtLink>.
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
                  $this-&#x3E;db-&#x3E;update_as(string $table_name, array $data_update [, bool $is_debug=0]): bool
                </highlight-code>
              </div>
            </div>

            <h3>Parameter</h3>
            <p>
              Metode ini memiliki2 parameter wajib dan 1 parameter opsional.
            </p>

            <h4>$table_name</h4>
            <p>
              Parameter <code>$table_name</code> dapat berisi nama tabel yang akan diupdate.
            </p>

            <h4>$data_update</h4>
            <p>
              Nilai <code>$data_update</code> bertipe data <code>array</code> yang mana kunci array-nya merujuk pada nama kolom dari tabel terpilih.
              Dan nilai array-nya berisi data yang akan dimasukan ke dalam tabel.
              Setiap isi nilai ini dapat diisi fungsi bawaan dari MySQL, seperti:
              <ul>
                <li><code>NOW()</code></li>
                <li><code>NULL</code></li>
              </ul>
            </p>

            <h4>$is_debug</h4>
            <p>
              Nilai <code>$is_debug</code> dapat berisi nilai 1 dan 0. Apabila nilai sama dengan 1 (satu), proses akan terhenti dan akan menampilkan query yang digunakan oleh metode ini.
              Meskipun query ditampilkan, tidak ada proses yang tereksekusi ketika nilai <code>$is_debug</code> sama dengan 1.
            </p>

            <h2>Contoh Penggunaan</h2>
            <p>
              Berikut ini adalah contoh penggunaan metode <code>update_as</code> pada sebuah model.
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
                  class Blog_Model extends SENE_Model{
                    public $table = &#x27;blog&#x27;;
                    public $table_alias = &#x27;b&#x27;;

                    public function __construct(){
                      parent::__construct();
                    }

                    public function update($id,$du){
                      $du[&#x27;revision_counter&#x27;] = &#x27;&#x60;revision_counter&#x60;+1&#x27;;
                      $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;, $id);
                      $this-&#x3E;db-&#x3E;update_as($ths-&#x3E;table,$du);
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Contoh pada Kelas Controller</h3>
            <p>Kemudian contoh penggunaannya ketika didalam kelas Controller.</p>
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
                  class Blog extends SENE_Controller{
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;load(&#x27;blog_model&#x27;,&#x27;bm&#x27;); #class scope model
                    }
                    public function index(){
                      $id = 1;
                      $du = array();
                      $du[&#x27;title&#x27;] = &#x22;This is new title of this blog!&#x22;;
                      $res = $this-&#x3E;bm-&#x3E;update($id,$du); //call the method on the model
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

            <h3>Hasil Perintah SQL</h3>
            <p>
              Berikut ini adalah perintah SQL yang dihasilkan oleh metode yang ada pada contoh kelas <code>D_Order_Model</code>.
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
                <highlight-code lang="sql">
                  UPDATE
                    `d_order`
                  SET
                    title = "This is new title of this blog!",
                    revision_count = `revision_count`+1
                  WHERE
                    `id` = 1;
                </highlight-code>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/id/model/update_as/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  Metode update_as
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/id/model/where_as/" class="btn">
                  Metode where_as
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
      title: 'Metode Update AS',
      description: 'Pelajari metode update_as dari properti $db di kelas SENE_Model untuk Seme Framework 4.',
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
        "dateCreated": "2021-08-02T10:48:59+07:00",
        "datePublished": "2021-08-02T10:48:59+07:00",
        "dateModified": "2021-08-02T10:48:59+07:00",
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
