<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0 (bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/model">Model</NuxtLink></li>
        <li class="unavailable">update_as</li>
      </ul>
    </nav>
    <div class="columns">
      <div class="column">
        <div class="content">
          <h1 class="">Metode Update</h1>
					<p>Metode update digunakan untuk memperbarui nilai dari sebuah tabel yang ada di database.</p>

					<h2>Parameter</h2>
					<p>Metode update memiliki2 parameter wajib, yaitu <b>nama tabel</b> dan <b>pasangan kunci nilai</b> dalam array</p>
					<code v-highlight class="php">$this->db->update(string $table_name, array $data_update, [bool $is_debug=0]): bool</code>
          <h3>$table_name</h3>
          <p>Diisi dengan nama tabel yang akan diupdate.</p>
          <h3>$data_update</h3>
          <p>Berisikan <b>array</b> 1 dimensi yang didalamnya terdiri dari atas kunci dan nilainya. Kunci untuk nama kolom, sementara nilai berisikan nilai baru yang akan diedit.</p>
          <h3>$is_debug</h3>
          <p>Flag untuk mengaktifkan mode debug.</p>

          <h2>Contoh Penggunaan</h2>
          <p>Berikut ini adalah beberapa contoh penggunaan didalam model beserta pemanggilannya di controller.</p>

          <h3>Penggunaan pada Model</h3>
					<p>Berikut ini adalah contoh pengunaannya didalam sebuah model.</p>

          <pre><code v-highlight class="php">&#x3C;?php
class Blog_Model extends SENE_Model{
  var $tbl = &#x27;blog&#x27;;
  var $tbl_as = &#x27;b&#x27;;
  public function __construct(){
&#x9; parent::__construct();
  }
  public function update($id,$du){
    $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;,$id);
    $this-&#x3E;db-&#x3E;update($ths-&#x3E;tbl,$du);
  }
}</code></pre>

          <h3>Penggunaan di Conrtoller</h3>
          <p>Contoh penggunaan method update yang dipanggil di dalam Controller.</p>
          <pre><code v-highlight class="php">&#x3C;?php
class Blog extends Sene_Controller{
  public function __construct(){
    parent::__construct();
    $this-&#x3E;load(&#x27;blog_model&#x27;,&#x27;bm&#x27;);
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
}</code></pre>

        </div>
      </div>

        </div>

        <div class="columns">
          <div class="column">
            <b-button tag="router-link" to="/id/model/insert_batch" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Model::insert_batch
            </b-button>
          </div>
          <div class="column is-2">&nbsp;</div>
          <div class="column">
            <b-button tag="router-link" to="/id/model/delete" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Model::delete
            </b-button>
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
      name: 'Seme Framework Bahasa Indonesia',
      suffix: ' - Seme Framework v4',
      title: 'Model::update method',
      description: 'Pelajari selengkapnya tentang update method on SENE_Model class from Seme Framework.',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/tutorial/',
          text: 'Model',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/tutorial/introduction/',
          text: 'Select',
        },
      ],
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'id'
      },
      title: this.title+' - '+this.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
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
        "dateModified": "2021-06-11T01:04:00+07:00",
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
