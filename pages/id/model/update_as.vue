<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0 (bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/model">Model</NuxtLink></li>
        <li class="unavailable">update_as</li>
      </ul>
    </nav>
    <div class="columns">
      <div class="column">
        <div class="content">
          <h1 class="">Metode Update AS</h1>
					<p>Metode update_as dari kelas SENE_MySQLi_Model merupakan metode yang sama dengan metode Update, namun nilai updatenya tidak <b><i>auto escaped</i></b>. Metode ini cocok untuk melakukan update nilai dari kolom ke kolom didalam tabel yang sama.</p>
          <p>Metode ini tersedia sejak Seme Framework 4.0.2.</p>

          <div class="message is-warning">
            <div class="message-body">
            <p><b>Perhatian</b></p>
            <p>
              Pastikan untuk memeriksa dan menggunakan fungsi <i>escape</i> (<code>$this->db->esc('NILAI')</code>) pada pasangan kunci dan nilai untuk mencegah <b>SQL injection</b>.
            </p>
          </div>
        </div>

					<h2>Parameter</h2>
					<p>Update AS memiliki 3 parameter yaitu <b>nama tabel</b> dan <b>pasangan kunci dan nilai</b> untuk bahan updatenya.</p>

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
                $this->db->update_as(string $table_name, array $data_update, [bool $is_debug=0]): bool
              </highlight-code>
            </div>
          </div>


          <h3>$table_name</h3>
          <p>Diisi dengan nama tabel yang akan diupdate.</p>
          <h3>$data_update</h3>
          <p>Berisikan <b>array</b> 1 dimensi yang didalamnya terdiri dari atas kunci dan nilainya. Kunci untuk nama kolom, sementara nilai berisikan nilai baru yang akan diedit.</p>
          <h3>$is_debug</h3>
          <p>Flag untuk mengaktifkan mode debug.</p>

          <h2>Contoh Penggunaan</h2>
					<p>Berikut ini adalah contoh pengunaannya</p>

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
  var $tbl = &#x27;blog&#x27;;
  var $tbl_as = &#x27;b&#x27;;
  public function __construct(){
&#x9; parent::__construct();
  }
  public function update(){
    $du = array();
    $du[&#x27;counter&#x27;] = &#x27;&#x60;counter&#x60;+1&#x27;;
    $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;,1);
    $this-&#x3E;db-&#x3E;update_as($ths-&#x3E;tbl,$du);
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
          <nuxt-link to="/id/model/select/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Model::select
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/model/update/" class="btn">
            Model::update
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
      name: 'Seme Framework v4.0.x',
      suffix: ' - Dokumentasi Seme Framework v4.0.x ',
      title: 'Model::update_as method',
      description: 'Pelajari selengkapnya tentang method update_as di Seme Framework versi 4.0.0',
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
  jsonld() { this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
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
        "dateModified": "2021-06-24T12:04:00+07:00",
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
