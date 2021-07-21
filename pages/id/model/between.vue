<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model/">Model</NuxtLink></li>
          <li class="unavailable">Metode Between</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Between</h1>
            <p>
              Between adalah metode dari object DB yang ada didalam kelas model untuk digunakan sebagai <strong>Query Builder</strong>.
              Kegunaan dari metode ini adalah untuk memfilter data yang kompatibel dengan perintah BETWEEN pada SQL.
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
                    var $tbl = &#x27;d_order&#x27;;
                    var $tbl_as = &#x27;dor&#x27;;
                    public function __construct(){
                      parent::__construct();
                      $this->db->from($this->tbl,$this->tbl_as);
                    }

                    /**
                    * Get blog post by creation date (not date time)
                    * @param  string  $sdate  &#x9;&#x9;String date format YYYY-MM-DD
                    * @param  string  $edate  &#x9;&#x9;String date format YYYY-MM-DD
                    * @return array           &#x9;&#x9;Result array of object
                    */
                    public function getByDateRange($sdate,$edate){
                      if (strlen($sdate)==10 &#x26;&#x26; strlen($edate)==10) {
                        $this-&#x3E;db-&#x3E;between(&#x22;$this-&#x3E;tbl_as.cdate&#x22;, &#x22;&#x27;$sdate&#x27;&#x22;, &#x22;&#x27;$edate 23:59:59&#x27;&#x22;);
                      }elseif(strlen($sdate)==10 &#x26;&#x26; strlen($edate)!=10){
                        $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.cdate&#x22;, &#x22;&#x27;$sdate&#x27;&#x22;, &#x22;AND&#x22;, &#x27;&#x3C;=&#x27;);
                      }elseif(strlen($sdate)!=10 &#x26;&#x26; strlen($edate)==10){
                        $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.cdate&#x22;, &#x22;&#x27;$edate&#x27;&#x22;, &#x22;AND&#x22;, &#x27;&#x3E;=&#x27;);
                      }
                      return $this-&#x3E;db-&#x3E;get();
                    }

                    /**
                    * Get blog post by publish date time
                    * @param  string  $sdate  &#x9;&#x9;String date format YYYY-MM-DD
                    * @param  string  $edate  &#x9;&#x9;String date format YYYY-MM-DD
                    * @return array           &#x9;&#x9;Result array of object
                    */
                    public function getByDateTimeRange($sdate,$edate){
                      if (strlen($sdate)==10 &#x26;&#x26; strlen($edate)==10) {
                        $this-&#x3E;db-&#x3E;between(&#x22;$this-&#x3E;tbl_as.pubdt&#x22;, &#x22;(&#x27;$sdate 00:00:00&#x27;)&#x22;, &#x22;(&#x27;$edate 23:59:59&#x27;)&#x22;);
                      }elseif(strlen($sdate)==10 &#x26;&#x26; strlen($edate)!=10){
                        $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.pubdt&#x22;, &#x22;(&#x27;$sdate 00:00:00&#x27;)&#x22;, &#x22;AND&#x22;, &#x27;&#x3C;=&#x27;);
                      }elseif(strlen($sdate)!=10 &#x26;&#x26; strlen($edate)==10){
                        $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.pubdt&#x22;, &#x22;(&#x27;$edate 23:59:59&#x27;)&#x22;, &#x22;AND&#x22;, &#x27;&#x3E;=&#x27;);
                      }
                      return $this-&#x3E;db-&#x3E;get();
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h2>Parameter</h2>
            <p>
              Jika metode memiliki 3 parameter wajib yaitu <b>nama kolom</b>, <b>nilai awal</b>, <b>nilai akhir</b>
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
                  $this->db->between( COLUMN_NAME, VALUE_FROM, VALUE_TO): $this->db
                </highlight-code>
              </div>
            </div>

            <h3>COLUMN_NAME</h3>
            <p>Nama kolom diperlukan untuk memfilter data dari tabel. Nama kolom harus ada di tabel yang dipilih. Metode ini telah lolos secara otomatis.</p>
            <h3>VALUE_FROM</h3>
            <p>Rentang nilai yang diperlukan untuk dicocokkan dengan COLUMN_NAME.</p>
            <h3>VALUE_TO</h3>
            <p>Rentang nilai yang diperlukan untuk dicocokkan dengan COLUMN_NAME.</p>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Info</b></p>
                <p>
                  Metode mendukung metode berantai (<em>Chaining Method</em>) <b>Query Builder</b> lainnya, karena mengembalikan nilai objek (<em>return object</em>) yang sama dengan <code>$this->db</code> di dalam kelas Model.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div class="nav-bottom">
          <div class="nav-bottom-left">
            <nuxt-link to="/id/model/" class="btn">
            <i class="fa fa-chevron-left"></i>
              Model
            </nuxt-link>
          </div>
          <div class="nav-bottom-right">
            <nuxt-link to="/id/model/composite_create/" class="btn">
              Metode composite_create
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
      title: 'Metode Between',
      description: 'Pelajari selengkapnya tentang metode between dari SENE_Model di Seme Framework versi 4.0.0',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/model/',
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
        "dateCreated": "2020-06-11T10:12:00+07:00",
        "datePublished": "2020-06-11T10:12:00+07:00",
        "dateModified": "2021-06-29T23:54:00+07:00",
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
