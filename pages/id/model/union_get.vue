<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model/">Model</NuxtLink></li>
          <li class="unavailable">Union Get</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Union Get</h1>
            <p>
              Metode <code>union_get</code> berguna untuk mengeksekusi query dari <b>Union Query Buffer</b> dan mengembalikan data dari hasil query tersebut.
            </p>

            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini adalah bentuk umum metode <code>union_get</code> dari properti <code>$db</code> yang ada di kelas <code>SENE_Model</code>.
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
                  $this-&#x3E;db-&#x3E;union_get([bool $is_debug = 0]]): mixed
                </highlight-code>
              </div>
            </div>

            <h3>Parameter</h3>
            <p>
              Metode ini tediri dari 1 parameter opsional.
            </p>

            <h4>$is_debug</h4>
            <p>
              Parameter <code>$is_debug</code> merupakan sebuah penanda (<em>flag</em>) untuk mengaktifkan mode <i>debug</i>.
              Nilai dari parameter ini bisa diis dengan <code>int 1</code> untuk mengaktifkan mode debug dan menampilkan query yang akan diproses.
              Isi dengan nilai lainnya untuk tidak mengaktifkan mode debug.
              Pada mode debug, tidak akan ada proses eksekusi query ke sistem database.
            </p>

            <h2>Contoh</h2>
            <p>
              Pada contoh ini akan ditampilkan implementasi metode <code>union_get</code>.
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
                  class Blog_Model extends SENE_Model{
                    var $tbl = &#x27;d_blog&#x27;;
                    var $tbl_as = &#x27;b&#x27;;

                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                    }
                    public function searchByScore($keyword){
                      $this-&#x3E;db-&#x3E;union_flush();

                      //1st union
                      $this-&#x3E;db-&#x3E;select(&#x27;id&#x27;);
                      $this-&#x3E;db-&#x3E;select(&#x27;title&#x27;);
                      $this-&#x3E;db-&#x3E;select(&#x27;excerpt&#x27;);
                      $this-&#x3E;db-&#x3E;select(&#x27;date_modified&#x27;);
                      $this-&#x3E;db-&#x3E;select_as(&#x22;3&#x22;,&#x27;score&#x27;);
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                      $this-&#x3E;db-&#x3E;where(&#x27;title&#x27;,$keyword,&#x27;or&#x27;,&#x27;like&#x27;,1,0);
                      $this-&#x3E;db-&#x3E;where(&#x27;excerpt&#x27;,$keyword,&#x27;or&#x27;,&#x27;like&#x27;,0,1);
                      $this-&#x3E;db-&#x3E;union_create();

                      //2nd union
                      $this-&#x3E;db-&#x3E;select(&#x27;id&#x27;);
                      $this-&#x3E;db-&#x3E;select(&#x27;title&#x27;);
                      $this-&#x3E;db-&#x3E;select(&#x27;excerpt&#x27;);
                      $this-&#x3E;db-&#x3E;select(&#x27;date_modified&#x27;);
                      $this-&#x3E;db-&#x3E;select_as(&#x22;2&#x22;,&#x27;score&#x27;);
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                      $this-&#x3E;db-&#x3E;where(&#x27;title&#x27;,$keyword,&#x27;or&#x27;,&#x27;like%&#x27;,1,0);
                      $this-&#x3E;db-&#x3E;where(&#x27;excerpt&#x27;,$keyword,&#x27;or&#x27;,&#x27;like%&#x27;,0,1);
                      $this-&#x3E;db-&#x3E;union_create();

                      //2nd union
                      $this-&#x3E;db-&#x3E;select(&#x27;id&#x27;);
                      $this-&#x3E;db-&#x3E;select(&#x27;title&#x27;);
                      $this-&#x3E;db-&#x3E;select(&#x27;excerpt&#x27;);
                      $this-&#x3E;db-&#x3E;select(&#x27;date_modified&#x27;);
                      $this-&#x3E;db-&#x3E;select_as(&#x22;1&#x22;,&#x27;score&#x27;);
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                      $this-&#x3E;db-&#x3E;where(&#x27;title&#x27;,$keyword,&#x27;or&#x27;,&#x27;%like&#x27;,1,0);
                      $this-&#x3E;db-&#x3E;where(&#x27;excerpt&#x27;,$keyword,&#x27;or&#x27;,&#x27;%like&#x27;,0,1);
                      $this-&#x3E;db-&#x3E;union_create();

                      //3nd union
                      $this-&#x3E;db-&#x3E;select(&#x27;id&#x27;);
                      $this-&#x3E;db-&#x3E;select(&#x27;title&#x27;);
                      $this-&#x3E;db-&#x3E;select(&#x27;excerpt&#x27;);
                      $this-&#x3E;db-&#x3E;select(&#x27;date_modified&#x27;);
                      $this-&#x3E;db-&#x3E;select_as(&#x22;0&#x22;,&#x27;score&#x27;);
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                      $this-&#x3E;db-&#x3E;where(&#x27;title&#x27;,$keyword,&#x27;or&#x27;,&#x27;%like%&#x27;,1,0);
                      $this-&#x3E;db-&#x3E;where(&#x27;excerpt&#x27;,$keyword,&#x27;or&#x27;,&#x27;%like%&#x27;,0,1);
                      $this-&#x3E;db-&#x3E;union_create();

                      $this-&#x3E;db-&#x3E;union_select(&#x27;id,title,date_modified,score&#x27;,&#x27;score&#x27;);
                      $this-&#x3E;db-&#x3E;union_group_by(&#x27;id&#x27;);
                      $this-&#x3E;db-&#x3E;union_order_by(&#x27;score&#x27;,&#x27;desc&#x27;)-&#x3E;union_limit(1, 14);
                      return $this-&#x3E;db-&#x3E;union_get();
                    }
                  }
                </highlight-code>
              </div>
            </div>


          </div>
        </div>

      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/model/union_flush/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Union Flush Method
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/model/union_group_by/" class="btn">
            Union Group By Method
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
      name: 'Seme Framework v4.0.0',
      suffix: ' - Seme Framework 4',
      title: 'Metode Union Get',
      description: 'Pelajari metode union_get dari properti $db pada kelas SENE_Model di Seme Framework 4.',
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
        "dateCreated": "2021-08-06T13:14:00+07:00",
        "datePublished": "2021-08-06T13:14:00+07:00",
        "dateModified": "2021-08-06T13:14:00+07:00",
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
