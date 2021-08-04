<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model/">Model</NuxtLink></li>
          <li class="unavailable">Metode Esc</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Esc</h1>
            <p>
              Metode <code>esc</code> digunakan untuk melakukan proses <a href="https://en.wikipedia.org/wiki/Escape_character" target="_blank">escape character <i class="fa fa-external-link"></i></a> pada nilai yang akan dilewatkan kedalam kode <code>SQL</code> dan akan menjalankan perintah PHP MySQLi::<a href="https://www.php.net/manual/en/mysqli.real-escape-string.php" target="_blank">real_escape_string <i class="fa fa-external-link"></i></a>.
            </p>

            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini adalah bentuk umum metode <code>esc</code> dari properti <code>$db</code> di kelas <NuxtLink to="/id/model/#SENE_Model">SENE_Model <i class="fa fa-window-restore"></i></NuxtLink>.
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
                  $this-&#x3E;db-&#x3E;esc(mixed $val): mixed
                </highlight-code>
              </div>
            </div>

            <h3>Parameter</h3>
            <p>
              Metode esc terdiri dari 1 parameter wajib yaitu <b>$val</b>.
            </p>

            <h4>$val</h4>
            <p>
              Dapat berisi <code>int</code> ataupun <code>string</code> yang akan di <code>escape</code>.
            </p>

            <h2>Contoh penggunaan</h2>
            <p>
              Berikut ini adalah contoh penggunaan metode esc pada file <code>d_order_model.php</code>.
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
                  class D_Order_Model extends SENE_Model{
                    var $tbl = &#x27;d_order&#x27;;
                    var $tbl_as = &#x27;dor&#x27;;
                    var $tbl2 = &#x27;d_order_detail&#x27;;
                    var $tbl2_as = &#x27;dod&#x27;;

                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                    }
                    public function getByKode($kode){
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                      $this-&#x3E;db-&#x3E;join($this-&#x3E;tbl2, $this-&#x3E;tbl2_as, &#x27;id&#x27;, $this-&#x3E;tbl_as, &#x27;d_order_id&#x27;, &#x27;&#x27;);
                      $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.kode&#x22;, $this-&#x3E;db-&#x3E;esc($kode));
                      return $this-&#x3E;db-&#x3E;get();
                    }
                    ...
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
                  -- result from executing D_Order_Model::getByKode('KN210803001') --
                  SELECT * FROM `d_order` WHERE `kode` = "KN210803001";
                </highlight-code>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/model/delete/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Metode Delete
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/model/exec/" class="btn">
            Metode Exec
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
      title: 'Metode Esc',
      description: 'Pelajari selengkapnya tentang metode esc dari properti $db di kelas SENE_Model untuk Seme Framework 4.',
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
        "dateCreated": "2021-08-01T16:36:00+07:00",
        "datePublished": "2021-08-01T16:36:00+07:00",
        "dateModified": "2021-08-01T16:36:00+07:00",
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
