<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
          <li class="unavailable">Limit</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode Limit </h1>
            <p>
              Metode <code>limit</code> adalah bagian dari Query Builder untuk membatasi hasil query dengan mengeksekusi perintah SQL <code>LIMIT [A],[B]</code>.
              Metode ini juga cocok untuk membuat <em>pagination</em> dengan datatables pagination.
            </p>
            <div class="message is-success">
              <div class="message-body">
                <p>Limit method ini cocok untuk diaplikasikan dengan DataTable.</p>
              </div>
            </div>
            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini adalah bentuk umum dari metode <code>limit</code> dari properti <code>$db</code> yang ada di dalam kelas <code>SENE_Model</code>.
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
                  $this-&#x3E;db-&#x3E;limit(int $offset, int $count): $this-&#x3E;db
                </highlight-code>
              </div>
            </div>

            <h3>Parameters</h3>
            <p>
              Metode ini memiliki 2 parameter wajib.
            </p>

            <h4>$offset</h4>
            <p>
              Nilai dari parameter <b>$offset</b> dapat berisi integer positif dengan nilai mulai dari <code>0</code> untuk batas awal data.
            </p>

            <h4>$count</h4>
            <p>
              Nilai dari parameter <b>$count</b> dapat berisi integer positif dengan nilai mulai dari <code>0</code> untuk batas akhir data.
            </p>

            <h2>Contoh Penggunaan</h2>
            <p>
              Berikut ini adalah contoh penggunaan untuk metode <code>limit</code> pada file model <code>blog_model.php</code>.
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
                  &lt;?php
                  class Blog_Model extends SENE_Model{
                    public $table = &#039;blog&#039;;
                    public $table_alias = &#039;b&#039;;
                    
                    public function __construct(){
                      parent::__construct();
                    }
                    public function latest(){
                      $this-&gt;db-&gt;select(&quot;*&quot;);
                      $this-&gt;db-&gt;from($this-&gt;table,$this-&gt;table_alias);
                      $this-&gt;db-&gt;order_by(&quot;date_create&quot;,&quot;desc&quot;);
                      $this-&gt;db-&gt;limit(0,5);
                      return $this-&gt;db-&gt;get();
                    }
                    public function latest3ExceptOne(){
                      $this-&gt;db-&gt;select(&quot;*&quot;);
                      $this-&gt;db-&gt;from($this-&gt;table,$this-&gt;table_alias);
                      $this-&gt;db-&gt;order_by(&quot;date_create&quot;,&quot;desc&quot;);
                      $this-&gt;db-&gt;limit(1,4);
                      return $this-&gt;db-&gt;get();
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Metode Page v.s. Metode Limit</b></p>
                <p>Metode Page digunakan untuk membatasi dengan jumlah data perhalaman.</p>
                <p>Metode Limit digunakan untuk membatasi dengan batas awal tarikan dan batas akhir tarikan data.</p>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/id/model/last_id/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  Metode Last ID
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/id/model/order_by/" class="btn">
                  Metode Order By
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
      title: 'Metode Limit',
      description: 'Pelajari tentang metode limit dari properti $db di SENE_Model pada Seme Framework 4.',
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
      ]
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
        "dateCreated": "2021-08-03T10:24:00+07:00",
        "datePublished": "2021-08-03T10:24:00+07:00",
        "dateModified": "2024-08-26T10:00:00+07:00",
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
