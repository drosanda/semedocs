<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
          <li class="unavailable">Insert Multi</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Insert Multi</h1>
            <p>
              Metode <code>insert_multi</code> berguna untuk menyisipkan beberapa baris data ke dalam suatu tabel.
            </p>

            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini adalah bentuk umum metode <code>insert_multi</code> dari properti <code>$db</code> di kelas <NuxtLink to="/id/model/#SENE_Model">SENE_Model <i class="fa fa-window-restore"></i></NuxtLink>.
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
                  $this-&#x3E;db-&#x3E;insert_multi(string $table_name, array $data_inserts [, bool $is_debug = 0]): boolean
                </highlight-code>
              </div>
            </div>
            <h3>Parameters</h3>
            <p>
              Metode ini memiliki 2 parameter wajib dan 1 parameter opsional.
            </p>
            <h4>$table_name</h4>
            <p>
              Parameter <code>$table_name</code> dapat berisi nama tabel yang akan disisipkan datanya.
            </p>
            <h4>$data_inserts</h4>
            <p>
              Nilai <code>$data_inserts</code> dapat berisi array 2 dimensi.
              Array dimensi pertama merepresentasikan jumlah baris data. Setiap baris data berisi array dengan konsep <code>key value pair</code>.
              Setiap <code>array key</code> akan mengacu pada nama kolom, sementara <code>array value</code> akan berisi nilai yang akan disimpan.
              Setiap isi nilai ini dapat diisi fungsi bawaan dari MySQL, seperti:
              <ul>
                <li><code>NOW()</code></li>
                <li><code>NULL</code></li>
              </ul>
            </p>

            <h2>Contoh</h2>
            <p>
              Contoh ini akan menunjukkan implementasi metode <code>insert_multi</code> pada kelas model dan kemudian bagaimana mengeksekusi metode tersebut pada kelas controller.
            </p>

            <h3>Contoh Kelas Model</h3>
            <p>
              Berikut adalah contoh kode sumber untuk kelas <code>Blog_Model</code>.
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
                    var $table = &#x27;blog&#x27;;
                    var $table_alias = &#x27;b&#x27;;

                    public function __construct(){
                      parent::__construct();
                    }
                    ...
                    public function inserts($dis){
                      $this-&#x3E;db-&#x3E;insert_multi($ths-&#x3E;table,$dis);
                    }
                    ...
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Contoh Kelas Controller</h3>
            <p>
              Berikut adalah source code untuk contoh kelas controller yang menggunakan metode <code>insert_multi</code>.
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
                  class Blog extends SENE_Controller{
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;load(&#x27;blog_model&#x27;,&#x27;bm&#x27;); #class scope model
                    }
                    public function index(){
                      $id = 1;
                      $di = array();

                      $dis = array();
                      $dis[&#x27;id&#x27;] = 1;
                      $dis[&#x27;title&#x27;] = &#x22;This is new title of this blog!&#x22;;
                      $dis[&#x27;content&#x27;] = &#x22;This is new title of this blog!&#x22;;
                      $dis[&#x27;date_publish&#x27;] = &#x22;NULL&#x22;;
                      $di[]=$dis;

                      $dis = array();
                      $dis[&#x27;id&#x27;] = 2;
                      $dis[&#x27;title&#x27;] = &#x22;Test multiple insert&#x22;;
                      $dis[&#x27;content&#x27;] = &#x22;This is new test for multiple insert&#x22;;
                      $dis[&#x27;date_publish&#x27;] = &#x22;NOW()&#x22;;
                      $di[]=$dis;

                      $res = $this-&#x3E;bm-&#x3E;inserts($id,$dis); //call the method on the model
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
              Berikut ini adalah perintah SQL yang dihasilkan oleh metode yang ada pada contoh kelas <code>Blog</code> ketika mengeksekusi metode <code>insert_multi</code>.
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
                  INSERT INTO blog (id,title,content,date_publish)
                  VALUES
                    (1,&#x22;This is new title of this blog!&#x22;,&#x22;This is new title of this blog!&#x22;,NULL),
                    (2,&#x22;Test multiple insert&#x22;,&#x22;This is new test for multiple insert&#x22;,NOW())
                  ;
                </highlight-code>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/id/model/insert_batch/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  Metode Insert Batch
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/id/model/insert/" class="btn">
                  Metode insert
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
      title: 'Metode Insert Multi',
      description: 'Pelajari selengkapnya tentang metode insert_multi dari properti $db di kelas SENE_Model untuk Seme Framework 4.',
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
        "dateCreated": "2021-08-01T10:04:00+07:00",
        "datePublished": "2021-08-01T10:04:00+07:00",
        "dateModified": "2021-08-01T10:04:00+07:00",
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
