<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model/">Model</NuxtLink></li>
          <li class="unavailable">Join Composite</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Join Composite</h1>
            <p>
              Metode <code>join_composite</code> digunakan untuk menggabungkan hasil query dari dua tabel atau lebih dengan syarat join lebih dari 1 kunci.
              Metode ini akan mengeksekusi perintah SQL <code>JOIN</code> dan juga bagian dari <code>Query Builder</code>.
              Metode ini juga cocok untuk digunakan dalam proses join dengan kondisi <b>PRIMARY KEY</b> lebih dari satu.
            </p>

            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini adalah bentuk umum metode <code>join_composite</code> dari properti <code>$db</code> di kelas <NuxtLink to="/id/model/#SENE_Model">SENE_Model <i class="fa fa-window-restore"></i></NuxtLink>.
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
                  $this-&#x3E;db-&#x3E;join_composite(
                    string $table2_name,
                    string $table2_alias,
                    array $compositeObjects
                    [, string $join_method = &#x22;&#x22;]
                  ): $this->db
                </highlight-code>
              </div>
            </div>

            <h3>Parameter</h3>
            <p>Metode ini membutuhkan 4 parameter wajib dan 1 parameter opsional.</p>

            <h4>$table2_name</h4>
            <p>Nama tabel yang akan dijoinkan.</p>

            <h4>$table2_alias</h4>
            <p>Nama alias tabel yang akan dijoinkan.</p>

            <h4 id="compositeObjects">$compositeObjects</h4>
            <p>
              Array yang berisi objek komposit, isi nilai ini dibuat oleh metode <NuxtLink to="/id/model/composite_create/">composite_create <i class="fa fa-external-link"></i></NuxtLink>.
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

            <h2>Contoh Penggunaan</h2>
            <p>
              Berikut ini adalah contoh penggunaan metode <code>join_composite</code> pada file <code>d_sales_model.php</code>.
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
                  class D_Sales_Model extends SENE_Model{
                    var $tbl = &#x27;d_sales&#x27;;
                    var $tbl_as = &#x27;dsl&#x27;;
                    var $tbl2 = &#x27;b_seller&#x27;;
                    var $tbl2_as = &#x27;bs&#x27;;

                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                    }
                    private function __joinTbl2(){
                      $composites = array();
                      $composites[] = $this-&#x3E;db-&#x3E;composite_create(&#x22;$this-&#x3E;tbl_as.nation_code&#x22;,&#x22;=&#x22;,&#x22;$this-&#x3E;tbl_as.nation_code&#x22;);
                      $composites[] = $this-&#x3E;db-&#x3E;composite_create(&#x22;$this-&#x3E;tbl_as.b_seller_id&#x22;,&#x22;=&#x22;,&#x22;$this-&#x3E;tbl_as.id&#x22;);
                      return $composites;
                    }
                    public function getByOrderId($id){
                      $this-&#x3E;db-&#x3E;join_composite($this-&#x3E;tbl2,$this-&#x3E;tbl2_as,$this-&#x3E;__joinTbl2(),&#x22;inner&#x22;);
                      $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.id&#x22;,$this-&#x3E;db-&#x3E;esc($id));
                      return $this-&#x3E;db-&#x3E;get_first();
                    }
                  }

                </highlight-code>
              </div>
            </div>

            <h3>Hasil Perintah SQL</h3>
            <p>
              Berikut ini adalah perintah SQL yang dihasilkan oleh metode yang ada pada contoh kelas <code>D_Sales_Model</code>.
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
                  -- result from executing D_Sales_Model::getByOrderId(37) --
                  SELECT *
                  FROM `d_sales` dsl
                  INNER JOIN b_seller bs
                    ON (
                      dsl.nation_code = bs.nation_code
                      AND dsl.b_seller_id = bs.id
                    )
                  WHERE
                    dsl.id = &#x22;37&#x22;
                  LIMIT 0, 1;
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Info</b></p>
                <p>Metode ini ada dari mulai Seme Framework versi >= 3.2.1</p>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/id/model/insert/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  Metode insert
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/id/model/join/" class="btn">
                  Metode join
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
      title: 'Metode Join Composite',
      description: 'Pelajari selengkapnya tentang metode join_composite dari properti $db di SENE_Model untuk Seme Framework 4',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/tutorial',
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
      "dateCreated": "2021-07-12T20:17:00+07:00",
      "datePublished": "2021-07-12T20:17:00+07:00",
      "dateModified": "2021-07-12T20:17:00+07:00",
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
