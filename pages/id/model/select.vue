<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model/">Model</NuxtLink></li>
          <li class="unavailable">Metode Select</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Select</h1>
            <p>Metode select merupakan metode untuk melaksanakan perintah <code>SELECT</code> dari SQL (<em>Structure Query Language</em>) melalui SENE_Model.</p>
            <p>Metode ini merupakan salah satu pembangun query SQL <b>Query Builder</b> untuk memilih nama kolom yang akan ditarik datanya dari tabel.</p>

            <h2>Parameter</h2>
            <p>Metode select memiliki satu parameter wajib yaitu <b>$column_name</b>.</p>

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
                  $this->db->select(string $column_name): dbObject
                </highlight-code>
              </div>
            </div>

            <h3>$column_name</h3>
            <p><b>$column_name</b> dapat berisi nama kolom dari tabel yang dipilih melalui metode <code>from</code> maupun metode <code>join</code>.</p>

            <h2>Contoh penggunaan</h2>
            <p>Berikut ini adalah contoh penggunaan dari metode Select.</p>

            <h3>Penggunaan Dasar</h3>
            <p>
              Untuk contoh penggunaan dasar metode ini, akan di sajikan dalam bentuk potongan kode.
              Yang pertama kode pada SENE_Model, dan yang kedua kode pada SENE_Controller.
            </p>

            <p>
              Ini adalah potongan kode untuk SENE_Model. Diasumsikan nama filenya adalah blog_model.php.
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
                      parent::__construct();
                    }
                    public function getList(){
                      $this-&#x3E;db-&#x3E;select(&#x22;*&#x22;);
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                      return $this-&#x3E;db-&#x3E;get();
                    }
                    public function getById($id){
                      $this-&#x3E;db-&#x3E;select(&#x22;id&#x22;);
                      $this-&#x3E;db-&#x3E;select(&#x22;title&#x22;);
                      $this-&#x3E;db-&#x3E;select(&#x22;content&#x22;);
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                      $this-&#x3E;db-&#x3E;where_as(&#x22;id&#x22;,$id);
                      return $this-&#x3E;db-&#x3E;get_first();
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <p>
              Sementara untuk potongan kode pada SENE_Controller-nya seperti ini. Diasumsikan nama filenya adalah blog.php
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
                  class Blog extends Sene_Controller{
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;load(&#x27;blog_model&#x27;,&#x27;bm&#x27;); #class scope model
                    }
                    public function index(){
                      $blogs = $this-&#x3E;bm-&#x3E;getList();
                      $this-&#x3E;debug($blogs);
                    }
                    public function detail($id){
                      $blog = $this-&#x3E;bm-&#x3E;getById($id);
                      $this-&#x3E;debug($blog);
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/id/model/select_as/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  Metode select_as
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/id/model/update_as/" class="btn">
                  Metode update_as
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
      title: 'Metode Select',
      description: 'Pelajari selengkapnya tentang metode select dari kelas SENE_Model di Seme Framework.',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/model/',
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
        "dateCreated": "2020-06-11T10:12:00+07:00",
        "datePublished": "2020-06-11T10:12:00+07:00",
        "dateModified": "2021-07-10T18:36:00+07:00",
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
