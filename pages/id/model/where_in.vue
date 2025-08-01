<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
          <li class="unavailable">Where in</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Where in</h1>
            <p>Metode <code>where_in</code> digunakan untuk menjalankan operasi WHERE IN clause on SQL. This method support chained as well.</p>
            <h2>Basic Usage</h2>
            <p>
              Here is the basic usage <code>where_in</code> method from <code>$db</code> property on <code>SENE_Model</code> class.
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
                  $this-&#x3E;db-&#x3E;where_in(string $column_name, array $array_selector[, int $is_not=0]): $this-&#x3E;db;
                </highlight-code>
              </div>
            </div>
            <h3>Parameter</h3>
            <p>
              Metode ini memiliki 2 parameter wajib.
            </p>
            <h4>$column_name</h4>
            <p>
              <code>$column_name</code> dapat berisi nilai dengan nama kolom pada tabel.
            </p>
            <h4>$array_selector</h4>
            <p>
              Nilai <code>$array_selector</code> dapat berisi array dari nilai-nilai yang akan dibandingkan dengan nama kolom table.
            </p>
            <h4>$is_not</h4>
            <p>
              Jika nilai <code>$is_not</code> sama dengan 1, maka operasi <code>where not in</code> akan dijalankan.
            </p>

            <h2>Contoh penggunaan</h2>
            <p>
              Berikut ini adalah contoh penggunaan metode where_as pada file <code>where_in</code>.
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
                  class Blog_Model extends SENE_Model{
                    public $table = &#x27;d_order&#x27;;
                    public $table_alias = &#x27;dor&#x27;;
                    public $table2 = &#x27;b_user&#x27;;
                    public $table2_alias = &#x27;bu&#x27;;
                    
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;table,$this-&#x3E;table_alias);
                    }
                    public function Ids($ids){
                      $this-&#x3E;db-&#x3E;select(&#x22;$this-&#x3E;table_alias.*, $this-table_alias.status_text&#x22;,&#x27;status_text&#x27;,0);
                      $this-&#x3E;db-&#x3E;select(&#x22;$this-&#x3E;table2_alias.fname&#x22;,&#x27;fname&#x27;,0);
                      $this-&#x3E;db-&#x3E;select(&#x22;$this-&#x3E;table2_alias.email&#x22;,&#x27;email&#x27;,0);
                      $this-&#x3E;db-&#x3E;where_in(&#x22;$this-&#x3E;table_alias.id&#x22;, $ids);
                      return $this-&#x3E;db-&#x3E;get();
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/id/model/where_as/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  where as method
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/id/model/where/" class="btn">
                  where method
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
      title: 'Metode Where in',
      description: 'Pelajari tentang metode where_in dari properti $db di kelas SENE_Model untuk Seme Framework 4',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id',
          text: 'ID'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/model',
          text: 'Model'
        }
      ],
    }
  },
  head() {
    return {
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
        "dateCreated": "2022-12-05T19:15:00+07:00",
        "datePublished": "2022-12-05T19:15:00+07:00",
        "dateModified": "2022-12-05T19:26:00+07:00",
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
