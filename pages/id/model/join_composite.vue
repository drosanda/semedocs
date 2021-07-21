<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
          <li class="unavailable">Metode join_composite</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Join Composite</h1>
            <p>
              Metode <b>join_composite</b> digunakan untuk melakukan operasi <b>JOIN</b> dengan kondisi banyak <b>PRIMARY KEY</b> dan metode ini mendukung <i>chaining method query builder</i>.
              Metode ini cocok untuk digunakan dengan metode <NuxtLink to="/4.0.0/model/composite_create/">composite_create</NuxtLink>.
            </p>

            <h2>Penggunaan Dasar</h2>
            <p>
              Berikut ini adalah penggunaan dasar metode join_composite.
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
                  $this-&#x3E;db-&#x3E;join_composite(string $TABLE_NAME, string $TABLE_NAME_ALIAS, array compositeObjects, string JOIN_TYPE): dbObject
                </highlight-code>
              </div>
            </div>

            <h3>Parameter</h3>
            <p>join_composite terdiiri dari 4 parameter wajib dan akan mengembalikan objek dbObject.</p>

            <h4>$TABLE_NAME</h4>
            <p>Nama tabel yang akan dijoinkan.</p>

            <h4>$TABLE_NAME_ALIAS</h4>
            <p>Nama alias tabel yang akan dijoinkan.</p>

            <h4>Array of Join Composite Object</h4>
            <p>Array yang berisi objek komposit dari metode composite_create. </p>

            <h4>JOIN_TYPE</h4>
            <p>Jenis join, adapun nilai default yaitu string kosong. Selain itu, nilai dari JOIN_TYPE ini bisa berisi inner, outer, left, atau right.</p>

            <div class="message is-info">
              <div class="message-body">
                <p>Metode ini ada mulai dari Seme Framework versi &#x3E;= 3.2.1 keatas</p>
              </div>
            </div>

            <h2>Contoh Penggunaan</h2>
            <p>
              Berikut ini adalah contoh penggunaan metode join_composite pada file d_sales_model.php.
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
      title: 'Metode join_composite',
      description: 'Pelajari selengkapnya tentang metode join_composite dari SENE_Model di Seme Framework 4.0.0',
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
