<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
          <li class="unavailable">Composite Create</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Composite Create</h1>
            <p>
              Metode <b>composite_create</b> digunakan untuk menghasilkan <code>array compositeObjects</code> untuk nilai parameter <NuxtLink to="/id/model/join_composite/#compositeObject">compositeObject <i class="fa fa-window-restore"></i></NuxtLink> dalam metode <NuxtLink to="/id/model/join_composite/">join_composite <i class="fa fa-window-restore"></i></NuxtLink>.
              Metode dapat digunakan berulang kali sebanyak kunci yang digunakan.
            </p>

            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini adalah bentuk umum metode <code>composite_create</code> dari properti <code>$db</code> di kelas <NuxtLink to="/id/model/#SENE_Model">SENE_Model <i class="fa fa-window-restore"></i></NuxtLink>.
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
                  $this-&#x3E;db-&#x3E;composite_create(
                  string $table1_column,
                  string $operator,
                  string $table2_column
                  ): array
                </highlight-code>
              </div>
            </div>

            <h3>Parameter</h3>
            <p>Metode composite_create terdiri dari 3 parameter wajib dan akan mengembalikan compositeObject.</p>

            <h4>$table1_column</h4>
            <p>Nama kolom pada tabel pertama yang akan dibuat composite-nya.</p>

            <h4>$operator</h4>
            <p>
              Dapat berisi nilai operator relasional, seperti:
              <ul>
                <li><code>=</code></li>
                <li><code>&#x3C;&#x3E;</code></li>
              </ul>
            </p>

            <h4>$table2_column</h4>
            <p>Nama kolom untuk tabel kedua.</p>

            <h2>Contoh Penggunaan</h2>
            <p>
              Berikut ini adalah contoh penggunaan metode composite_create dalam bentuk kode utuh d_sales_model.php.
            </p>
            <p>

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
                    public $table = &#x27;d_sales&#x27;;
                    public $table_alias = &#x27;dsl&#x27;;
                    public $table2 = &#x27;b_seller&#x27;;
                    public $table2_alias = &#x27;bs&#x27;;

                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;table,$this-&#x3E;table_alias);
                    }
                    private function __joinTable2(){
                      $composites = array();
                      $composites[] = $this-&#x3E;db-&#x3E;composite_create(&#x22;$this-&#x3E;table_alias.nation_code&#x22;,&#x22;=&#x22;,&#x22;$this-&#x3E;table_alias.nation_code&#x22;);
                      $composites[] = $this-&#x3E;db-&#x3E;composite_create(&#x22;$this-&#x3E;table_alias.b_seller_id&#x22;,&#x22;=&#x22;,&#x22;$this-&#x3E;table_alias.id&#x22;);
                      return $composites;
                    }
                    public function getByOrderId($id){
                      $this-&#x3E;db-&#x3E;join_composite($this-&#x3E;table2,$this-&#x3E;table2_alias,$this-&#x3E;__joinTable2(),&#x22;inner&#x22;);
                      $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;table_alias.id&#x22;,$this-&#x3E;db-&#x3E;esc($id));
                      return $this-&#x3E;db-&#x3E;get_first();
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Info</b></p>
                <p>Metode ini ada dari mulai Seme Framework versi >= 3.2.1</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/model/between/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Metode Between
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/model/delete/" class="btn">
            Metode Delete
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
      title: 'Metode composite_create',
      description: 'Pelajari selengkapnya tentang metode composite_create dari SENE_Model di Seme Framework versi 4.0.0',
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
        "dateCreated": "2021-07-12T19:52:00+07:00",
        "datePublished": "2021-07-12T19:52:01+07:00",
        "dateModified": "2021-07-12T19:53:00+07:00",
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
