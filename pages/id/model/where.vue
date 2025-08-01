<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
          <li class="unavailable">Metode Where</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Where</h1>
            <p>
              Metode <code>where</code> digunakan untuk melakukan penyaringan data dengan kondisi tertentu.
              Metode ini akan mengeksekusi perintah SQL <code>WHERE</code>.
              Metode ini juga bagian dari <code>Query Builder</code>.
            </p>

            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini adalah bentuk umum metode <code>where</code> dari properti <code>$db</code> di kelas <NuxtLink to="/id/model/#SENE_Model">SENE_Model <i class="fa fa-window-restore"></i></NuxtLink>.
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
                  $this-&#x3E;db-&#x3E;where(string $column_name, mixed $filter_value [, string $operator = 'AND' [, string $relation_operator = '=' [, int $open_bracket = 0 [, int $close_bracket = 0 ]]]]): $this-&#x3E;db
                </highlight-code>
              </div>
            </div>

            <h3>Parameter</h3>
            <p>
              Metode where terdiri dari 2 parameter wajib yaitu <b>$column_name</b> dan <b>$filter_value</b>.
              Nilai parameter ini <b>otomatis</b> di <code>escape</code>.
            </p>

            <h4>$column_name</h4>
            <p>
              Dapat berisi nama kolom yang akan di filter.
              Nilai parameter ini <b>otomatis</b> di <code>escape</code>.
            </p>

            <h4>$filter_value</h4>
            <p>
              Nilai filter terhadap kolom terpilih.
            </p>

            <h4>$operator</h4>
            <p>
              Nilai operator yang dilakukan terhadap kondisi <code>WHERE</code> selanjutnya, berikut ini nilai yang cocok untuk nilai dari parameter ini.
              <ul>
                <li><code>AND</code></li>
                <li><code>OR</code></li>
              </ul>
            </p>

            <h4>$operator_relational</h4>
            <p>
              Nilai operator relasional yang dilakukan terhadap kondisi filter dengan nama kolom.
              <ul>
                <li><code>=</code></li>
                <li><code>!=</code> atau <code>&#x3C;&#x3E;</code></li>
                <li><code>&#x3E;</code></li>
                <li><code>&#x3C;</code></li>
                <li><code>&#x3E;=</code></li>
                <li><code>&#x3C;=</code></li>
                <li><code>like</code></li>
                <li><code>like%</code></li>
                <li><code>%like</code></li>
                <li><code>%like%</code> atau <code>like%%</code></li>
                <li><code>notlike</code></li>
                <li><code>notlike%</code></li>
                <li><code>%notlike</code></li>
                <li><code>%notlike%</code> atau <code>notlike%%</code></li>
              </ul>
            </p>

            <h4>$open_bracket</h4>
            <p>
              Menambahkan kurung buka pada awal perintah <code>SQL</code> sebelum isi perintah kondisi <code>WHERE</code> selanjutnya.
            </p>

            <h4>$close_bracket</h4>
            <p>
              Menambahkan kurung tutup pada akhir perintah <code>SQL</code> sebelum isi perintah kondisi <code>WHERE</code> selanjutnya.
            </p>

            <h2>Contoh penggunaan</h2>
            <p>
              Berikut ini adalah contoh penggunaan metode where pada file <code>d_order_model.php</code>.
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
                    public $table = &#x27;d_order&#x27;;
                    public $table_alias = &#x27;dor&#x27;;

                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;table,$this-&#x3E;table_alias);
                    }

                    public function getById($id){
                      $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;,$id,&#x22;AND&#x22;,&#x22;=&#x22;,0,0);
                      return $this-&#x3E;db-&#x3E;get_first();
                    }
                    public function getNotCancelled(){
                      $this-&#x3E;db-&#x3E;where(&#x22;order_status&#x22;,&#x22;order_cancel&#x22;,&#x22;AND&#x22;,&#x22;&#x3C;&#x3E;&#x22;,0,0);
                      return $this-&#x3E;db-&#x3E;get();
                    }
                    public function getCancelByUser($b_user_id){
                      $this-&#x3E;db-&#x3E;where(&#x22;order_status&#x22;,&#x22;order_cancel&#x22;,&#x22;AND&#x22;,&#x22;like&#x22;,0,0);
                      $this-&#x3E;db-&#x3E;where(&#x22;b_user_id&#x22;,$b_user_id,&#x22;AND&#x22;,&#x22;=&#x22;,0,0);
                      return $this-&#x3E;db-&#x3E;get();
                    }
                    public function getAllCancelRefund(){
                      $this-&#x3E;db-&#x3E;where(&#x22;order_status&#x22;,&#x22;order_cancel&#x22;,&#x22;AND&#x22;,&#x22;=&#x22;,0,0);
                      $this-&#x3E;db-&#x3E;where(&#x22;is_refund&#x22;, 1,&#x22;OR&#x22;,&#x22;=&#x22;,1,0);
                      $this-&#x3E;db-&#x3E;where(&#x22;is_refund_closed&#x22;, 1,&#x22;OR&#x22;,&#x22;=&#x22;,0,1);
                      return $this-&#x3E;db-&#x3E;get();
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
                  -- result from executing D_Order_Model::getById(112) --
                  SELECT * FROM `d_order` WHERE `id` = 112;

                  -- result from executing D_Order_Model::getNotCancelled() --
                  SELECT * FROM `d_order` WHERE `order_status` != 'cancel';

                  -- result from executing D_Order_Model::getCancelByUser(2125) --
                  SELECT * FROM `d_order` WHERE `order_status` LIKE 'cancel' AND `b_user_id` = 2125;

                  -- result from executing D_Order_Model::getAllCancelRefund() --
                  SELECT * FROM `d_order` WHERE `order_status` = "order_cancel" AND ( `is_refund` = 1 OR `is_refund_closed` = 1);
                </highlight-code>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/model/where_as/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Metode where_as
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/view/" class="btn">
            View
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
      title: 'Metode Where',
      description: 'Pelajari metode where dari properti $db di kelas SENE_Model untuk Seme Framework 4.',
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
        "dateModified": "2023-07-31T23:01:00+07:00",
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
