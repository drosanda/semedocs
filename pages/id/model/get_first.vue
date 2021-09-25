<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
          <li class="unavailable">Metode Get First</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Get First</h1>
            <p>
              Metode <code>get_first</code> merupakan salah satu bagian dari <code>query builder</code> yang berguna untuk menarik hasil <u>tunggal</u> dari query builder yang telah disusun.
              Metode ini hanya akan mengembalikan nilai hasil tarikan <b>maksimal 1 baris data per query</b>.
            </p>

            <h2>Bentuk Umum</h2>
            <p>
              Metode <code>get_first</code> merupakan bagian dari properti <code>$db</code> dari kelas <code>SENE_Model</code>.
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
                  $this-&#x3E;db-&#x3E;get_first([string $result_type = &#x22;&#x22; [, bool $is_debug = 0]]): mixed
                </highlight-code>
              </div>
            </div>
            <h3>Parameter</h3>
            <p>
              Metode ini terdiri dari 2 parameter opsional.
            </p>
            <h4>$result_type</h4>
            <p>
              Nilai dari parameter <code>$result_type</code> untuk menentukan hasil keluaran dari metode get.
              Isi dengan <code>string &#x22;array&#x22;</code> untuk mengembalikan nilai hasil dengan tipe data <i>array</i>.
              Sementara isi nilai lainnya untuk mengembalikan nilai dengan tipe data <i>object</i>.
            </p>
            <h4>$is_debug</h4>
            <p>
              Parameter <code>$is_debug</code> merupakan sebuah penanda (<em>flag</em>) untuk mengaktifkan mode <i>debug</i>.
              Nilai dari parameter ini bisa diis dengan <code>int 1</code> untuk mengaktifkan mode debug dan menampilkan query yang akan diproses.
              Isi dengan nilai lainnya untuk tidak mengaktifkan mode debug.
              Pada mode debug, tidak akan ada proses eksekusi query ke sistem database.
            </p>

            <h2>Contoh Penggunaan</h2>
            <p>
              Berikut ini adalah contoh penggunaan pada file <code>blog_model.php</code>.
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
                    var $tbl = &#x27;blog&#x27;;
                    var $tbl_as = &#x27;b&#x27;;

                    public function __construct(){
                      parent::__construct();
                    }
                    public function getBySlug($slug){
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                      $this-&#x3E;db-&#x3E;where(&#x22;slug&#x22;, $this-&#x3E;db-&#x3E;esc($slug));
                      return $this-&#x3E;db-&#x3E;get_first();
                    }
                    ...
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Hasil Perintah SQL</h3>
            <p>
              Berikut ini adalah perintah SQL yang dihasilkan oleh metode yang ada pada contoh kelas <code>D_Blog_Model</code>.
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
                  -- result from executing D_Blog_Model::getBySlug('seme-framework-tutorial-1') --
                  SELECT * FROM `d_blog` b WHERE b.`slug` = 'seme-framework-tutorial-1' LIMIT 0, 1;
                </highlight-code>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/model/front/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Metode from
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/model/get/" class="btn">
            Metode get
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
      title: 'Metode Get First',
      description: 'Pelajari selengkapnya tentang Metode get_first dari SENE_Model di Seme Framework 4.0.0',
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
        "dateCreated": "2021-09-25T17:03:00+07:00",
        "datePublished": "2021-09-25T17:03:00+07:00",
        "dateModified": "2021-09-25T17:03:00+07:00",
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
