<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
          <li class="unavailable">Metode Last ID</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Last ID</h1>
            <p>
              Metode <code>last_id</code> digunakan untuk mengambil ID atau <code>PRIMARY KEY</code> terakhir data yang ditambahkan tabel dalam database, dengan catatan PRIMARY KEY sudah disetel sebagai <code>AUTO_INCREMENT</code>.
              Metode ini mengembalikan nilai berupa angka (integer) positif.
            </p>

            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini adalah bentuk umum dari metode <code>last_id</code> dari properti <code>$db</code> yang ada di dalam kelas <code>SENE_Model</code>.
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
                  $this-&#x3E;db-&#x3E;lastId(): integer
                </highlight-code>
              </div>
            </div>

            <h3>Parameters</h3>
            <p>Metode ini tidak membutuhkan parameter apapun.</p>

            <h2>Contoh</h2>
            <p>
              Pada contoh ini, kita akan mencoba menambahkan data baru dan akan menambahkan data baru lainnya dari hasil metode <code>last_id</code>.
            </p>

            <h3>Contoh Kelas Model 1</h3>
            <p>Berikut ini adalah contoh penggunaan dalam bentuk kode untuk metode <code>last_id</code>.</p>
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
                  class D_Order_Model extends SENE_Model{
                    var $table = &#x27;d_order&#x27;;
                    var $table_alias = &#x27;dor&#x27;;

                    public function __construct(){
                      &#x9; parent::__construct();
                    }
                    ...
                    public function set($di){
                      $this-&#x3E;db-&#x3E;insert($ths-&#x3E;table,$di);
                      return $this-&#x3E;db-&#x3E;lastId();
                    }
                    ...
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Contoh Kelas Model 2</h3>
            <p>Contoh model ke-2 untuk penunjang contoh model ke-1.</p>
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
                  class D_Order_Detail_Model extends SENE_Model{
                    var $table = &#x27;d_order_detail&#x27;;
                    var $table_alias = &#x27;dod&#x27;;

                    public function __construct(){
                      parent::__construct();
                    }
                    ...
                    public function set($dis){
                      return $this-&#x3E;db-&#x3E;insert_multi($ths-&#x3E;table,$dis);
                    }
                    ...
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Contoh Kelas Controller</h3>
            <p>
              Pada kelas controller ini, kita akan memasukan nilai dari hasil metode <code>last_id</code> ke model lainnya.
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
                  class Penjualan extends SENE_Controller{
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;load(&#x27;d_order_model&#x27;,&#x27;dom&#x27;);
                      $this-&#x3E;load(&#x27;d_order_detail_model&#x27;,&#x27;dodm&#x27;);
                    }
                    ...
                    public function submit(){
                      $di = array();
                      $di[&#x27;buyer_name&#x27;] = &#x22;Aldy Iqbal&#x22;;
                      $di[&#x27;grand_total&#x27;] = &#x22;100&#x22;;
                      $di[&#x27;date_create&#x27;] = &#x22;NOW()&#x22;;
                      $last_id = $this-&#x3E;dom-&#x3E;set($di);
                      if($last_id){
                        $dis = array();
                        $di = array();
                        $di[&#x27;d_order_id&#x27;] = $last_id;
                        $di[&#x27;product_name&#x27;] = &#x22;Hand Sanitizer&#x22;;
                        $di[&#x27;price&#x27;] = &#x22;25&#x22;;
                        $di[&#x27;qty&#x27;] = &#x22;2&#x22;;
                        $dis[] = $di;
                        $di = array();
                        $di[&#x27;d_order_id&#x27;] = $last_id;
                        $di[&#x27;product_name&#x27;] = &#x22;Candy&#x22;;
                        $di[&#x27;price&#x27;] = &#x22;10&#x22;;
                        $di[&#x27;qty&#x27;] = &#x22;5&#x22;;
                        $dis[] = $di;
                        $res = $this-&#x3E;dodm-&#x3E;setMass($dis);
                        if($res){
                          echo &#x27;Success&#x27;;
                        }else{
                          echo &#x27;failed, ideally we have to rollback the first insert, but in this example has no rollback method&#x27;;
                        }
                      }else{
                        echo &#x27;failed&#x27;;
                      }
                    }
                    ...
                  }
                </highlight-code>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/model/query/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Metode Join
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/model/limit/" class="btn">
            Metode Limit
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
      title: 'Metode Last ID',
      description: 'Pelajari selengkapnya tentang metode last_id dari properti $db di kelas SENE_Model untuk Seme Framework 4.',
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
        "dateCreated": "2021-08-01T23:27:00+07:00",
        "datePublished": "2021-08-01T23:27:00+07:00",
        "dateModified": "2021-08-01T23:27:00+07:00",
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
