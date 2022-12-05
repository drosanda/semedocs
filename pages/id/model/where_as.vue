<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
          <li class="unavailable">Where AS</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Where AS</h1>
            <p>
              Metode <code>where_as</code> digunakan untuk melakukan penyaringan data dengan kondisi tertentu tapi tidak otomatis di <NuxtLink to="/id/model/esc/">Escape</NuxtLink>.
              Metode ini akan mengeksekusi perintah SQL <code>WHERE</code>.
              Metode ini juga bagian dari <code>Query Builder</code>.
            </p>

            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini adalah bentuk umum metode <code>where_as</code> dari properti <code>$db</code> di kelas <NuxtLink to="/id/model/#SENE_Model">SENE_Model <i class="fa fa-window-restore"></i></NuxtLink>.
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
                  $this-&#x3E;db-&#x3E;where_as(string $column_name, mixed $filter_value [, string $operator = 'AND' [, string $relation_operator = '=' [, int $open_bracket = 0 [, int $open_bracket = 0 ]]]]): $this-&#x3E;db
                </highlight-code>
              </div>
            </div>

            <h3>Parameter</h3>
            <p>
              Metode where_as terdiri dari 2 parameter wajib yaitu <b>$column_name</b> dan <b>$filter_value</b>.
            </p>

            <h4>$column_name</h4>
            <p>
              Dapat berisi nama kolom yang akan di filter.
              Nilai parameter ini <b>tidak otomatis</b> di <code>escape</code>. Berikut ini adalah contoh isi nilai dari parameter ini:
              <ul>
                <li><code>DATE(column_name)</code></li>
                <li><code>COALESCE(column_name, 0)</code></li>
                <li>dan seterusnya.</li>
              </ul>
            </p>

            <h4>$filter_value</h4>
            <p>
              Nilai filter terhadap kolom terpilih.
              Bisa di isi juga dengan kombinasi nilai juga function bawaan dari database.
              Nilai parameter ini <b>tidak otomatis</b> di <code>escape</code>. Berikut ini adalah contoh isi nilai dari parameter ini:
              <ul>
                <li><code>NOW()</code></li>
                <li><code>CURRENT_DATE()</code></li>
                <li><code>DATE('2021-08-09')</code></li>
                <li><code>IS NULL</code></li>
                <li><code>IS NOT NULL</code></li>
                <li>dan seterusnya.</li>
              </ul>
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
              Berikut ini adalah contoh penggunaan metode where_as pada file <code>d_order_model.php</code>.
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
                      $this-&#x3E;db-&#x3E;join($this-&#x3E;tbl2, $this-&#x3E;tbl2_as, &#x27;id&#x27;, $this-&#x3E;tbl_as, &#x27;d_order_id&#x27;, &#x27;&#x27;);
                      $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.d_order_id&#x22;, $this-&#x3E;db-&#x3E;esc($d_order_id));
                      return $this-&#x3E;db-&#x3E;get();
                    }
                    public function getDetailJasaForDrDashboard(){
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl, $this-&#x3E;tbl_as);
                      $this-&#x3E;db-&#x3E;join($this-&#x3E;tbl2, $this-&#x3E;tbl2_as, &#x27;id&#x27;, $this-&#x3E;tbl_as, &#x27;d_order_id&#x27;, &#x27;&#x27;);
                      $this-&#x3E;db-&#x3E;join($this-&#x3E;tbl3, $this-&#x3E;tbl3_as, &#x27;id&#x27;, $this-&#x3E;tbl_as, &#x27;c_produk_id&#x27;, &#x27;&#x27;);
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
                  SELECT * FROM `d_order` dor JOIN d_order_detail dod ON dor.id = dod.d_order_id WHERE dod.`id` = 59;

                  -- result from executing D_Order_Model::getDetailJasaForDrDashboard() --
                  SELECT *
                  FROM `d_order` dor
                    JOIN d_order_detail dod ON dor.id = dod.d_order_id
                    JOIN c_produk cp ON cp.id = dod.c_produk_id
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
            <nuxt-link to="/id/model/update/" class="btn">
              <i class="fa fa-chevron-left"></i>
              Metode update
            </nuxt-link>
          </div>
          <div class="nav-bottom-right">
            <nuxt-link to="/id/model/where_in/" class="btn">
              Metode where
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
      title: 'Metode Where AS',
      description: 'Pelajari metode where_as dari properti $db di kelas SENE_Model untuk Seme Framework 4',
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
      "dateCreated": "2022-12-05T19:04:00+07:00",
      "datePublished": "2022-12-05T19:04:00+07:00",
      "dateModified": "2022-12-05T19:04:00+07:00",
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
