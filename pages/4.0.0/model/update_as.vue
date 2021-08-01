<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.2</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/model/">Model</NuxtLink></li>
          <li class="unavailable">update_as</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Update AS Method</h1>
            <p>Update AS method is like update method but with <b>unescaped</b> key value pair. This method suitable for update column to column in a table.</p>
            <p>This methode is available from SEME Framework version 4.0.2.</p>

            <div class="message is-warning">
              <div class="message-body">
                <p><b>Warning</b></p>
                <p>
                  Maybe using <i>escape</i> methode (<code>$this->db->esc('NILAI')</code>) for key value pair is required for prevent <b>SQL injection</b>.
                </p>
              </div>
            </div>

            <h2>Parameters</h2>
            <p>Update method has 2 required parameters that is <b>table name</b> and <b>key value pair in array</b>, another parameters are optional. Here is the completed parameters can be used by where methods</p>
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
            <p>Fill with table name that will be updated.</p>

            <h3>$data_update</h3>
            <p>Contains name and value pair in <b>array</b>. The key is for column name and the value is for new updated value.</p>

            <h3>$is_debug</h3>
            <p>Flag for activating debug mode.</p>

            <h2>Example usage</h2>
            <p>Here is the examples usage for this method:</p>
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
          <nuxt-link to="/4.0.0/model/select/" class="btn">
            <i class="fa fa-chevron-left"></i>
            select method
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0.0/model/update/" class="btn">
            update method
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'v4.0.0',
  data (){
    return {
      name: 'Seme Framework v4.0.0',
      suffix: ' - Seme Framework 4',
      title: 'update_as method',
      description: 'Learn more about update_as method from Seme Framework model class version 4.0.0 through this documentation.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0/',
          text: '4.0.0'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0/model/',
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
        "dateCreated": "2021-07-12T21:35:00+07:00",
        "datePublished": "2021-07-12T21:35:00+07:00",
        "dateModified": "2021-07-12T21:36:00+07:00",
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
