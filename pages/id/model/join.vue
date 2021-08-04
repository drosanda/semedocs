<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model/">Model</NuxtLink></li>
          <li class="unavailable">Join</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Join</h1>
            <p>
              Metode <code>join</code> digunakan untuk menggabungkan hasil query dari dua tabel atau lebih dengan syarat hanya memiliki 1 kunci yang akan di joinkan.
              Metode ini akan mengeksekusi perintah SQL <code>JOIN</code> dan juga bagian dari <code>Query Builder</code>.
            </p>

            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini adalah bentuk umum metode <code>join</code> dari properti <code>$db</code> di kelas <NuxtLink to="/id/model/#SENE_Model">SENE_Model <i class="fa fa-window-restore"></i></NuxtLink>.
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
                  $this-&#x3E;db-&#x3E;join(
                    string $table2,
                    string $table2_alias,
                    string $table2_column_to_joined,
                    string $table1_alias,
                    string $table1_column_to_joined
                    [, string $join_method = &#x22;&#x22;]
                  ): $this-&#x3E;db
                </highlight-code>
              </div>
            </div>

            <h3>Parameter</h3>
            <p>
              Metode <code>join</code> terdiri dari 5 parameter wajib dan 1 parameter opsional.
            </p>

            <h4>$table2</h4>
            <p>
              Dapat berisi <code>string</code> nama tabel yang akan dijoinkan.
            </p>

            <h4>$table2_alias</h4>
            <p>
              Dapat berisi <code>string</code> berisi nama alias tabel dari <code>$table2</code>.
            </p>

            <h4>$table2_column_to_joined</h4>
            <p>
              Dapat berisi <code>string</code> nama kolom patokan dari <code>$table2</code> untuk dijoinkan.
            </p>

            <h4>$table1_alias</h4>
            <p>
              Dapat berisi <code>string</code> nama alias dari tabel patokan.
            </p>

            <h4>$table1_column_to_joined</h4>
            <p>
              Dapat berisi <code>string</code> nama kolom patokan dari tabel <code>$table1_alias</code>.
            </p>

            <h4>$join_method</h4>
            <p>
              Cara yang digunakan untuk menjoinkan tabel, nilai defaultnya adalah string kosong <code>&#x22;&#x22;</code>.
              Berikut ini adalah beberapa nilai yang cocok untuk isi dari parameter <code>join_method</code>:
              <ul>
                <li><code>left</code> untuk left join</li>
                <li><code>right</code> untuk right join</li>
                <li><code>inner</code> untuk inner join</li>
                <li><code>outer</code> untuk outer join</li>
              </ul>
            </p>

            <h2>Contoh penggunaan</h2>
            <p>
              Berikut ini adalah contoh penggunaan metode <code>join</code> pada file <code>d_order_model.php</code>.
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
                    var $tbl3 = &#x27;c_produk&#x27;;
                    var $tbl3_as = &#x27;cp&#x27;;

                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                    }
                    public function getByOrderId($d_order_id){
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                      $this-&#x3E;db-&#x3E;join($this-&#x3E;tbl2, $this-&#x3E;tbl2_as, &#x27;id&#x27;, $this-&#x3E;tbl_as, &#x27;d_order_id&#x27;, &#x27;left&#x27;);
                      $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.d_order_id&#x22;, $this-&#x3E;db-&#x3E;esc($d_order_id));
                      return $this-&#x3E;db-&#x3E;get();
                    }
                    public function getDetailJasaForDrDashboard(){
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl, $this-&#x3E;tbl_as);
                      $this-&#x3E;db-&#x3E;join($this-&#x3E;tbl2, $this-&#x3E;tbl2_as, &#x27;id&#x27;, $this-&#x3E;tbl_as, &#x27;d_order_id&#x27;, &#x27;&#x27;);
                      $this-&#x3E;db-&#x3E;join($this-&#x3E;tbl3, $this-&#x3E;tbl3_as, &#x27;id&#x27;, $this-&#x3E;tbl_as, &#x27;c_produk_id&#x27;, &#x27;left&#x27;);
                      $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl2_as.utype&#x22;,$this-&#x3E;db-&#x3E;esc(&#x27;order_selesai&#x27;));
                      $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl3_as.jenis_paket&#x22;, &#x27;IS NULL&#x27;);
                      $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.sdate&#x22;, &#x27;IS NOT NULL&#x27;);
                      return $this-&#x3E;db-&#x3E;get(&#x27;&#x27;,0);
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
                  -- result from executing D_Order_Model::getByOrderId(59) --
                  SELECT *
                  FROM `d_order` dor
                  LEFT JOIN d_order_detail dod
                    ON dor.id = dod.d_order_id
                  WHERE dod.`id` = 59;

                  -- result from executing D_Order_Model::getDetailJasaForDrDashboard() --
                  SELECT *
                  FROM `d_order` dor
                  JOIN d_order_detail dod
                    ON dor.id = dod.d_order_id
                  LEFT JOIN c_produk cp
                    ON cp.id = dod.c_produk_id
                  WHERE
                    dod.`utype` = &#x22;order_selesai&#x22;
                    AND cp.utype IS NULL
                    AND dor.sdate IS NOT NULL;
                </highlight-code>
              </div>
            </div>

          </div>
        </div>

        <div class="nav-bottom">
          <div class="nav-bottom-left">
            <nuxt-link to="/id/model/join_composite/" class="btn">
              <i class="fa fa-chevron-left"></i>
              Metode join_composite
            </nuxt-link>
          </div>
          <div class="nav-bottom-right">
            <nuxt-link to="/id/model/last_id/" class="btn">
              Metode last_id
              <i class="fa fa-chevron-right"></i>
            </nuxt-link>
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
      title: 'Metode Join',
      description: 'Pelajari metode join dari properti $db di kelas SENE_Model untuk Seme Framework 4',
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
        "dateCreated": "2021-08-01T09:04:00+07:00",
        "datePublished": "2021-08-01T09:04:00+07:00",
        "dateModified": "2021-08-01T09:04:00+07:00",
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
