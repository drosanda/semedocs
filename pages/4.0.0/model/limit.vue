<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.2</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/model">Model</NuxtLink></li>
          <li class="unavailable">Limit Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Limit Method</h1>
            <p>Limit Method is part of database class builder for limiting query result.</p>
            <p>It will produce same as <i>SELECT * FROM table WHERE 1 LIMIT [A],[B]</i>.</p>
            <p>This method suitable for creating pagination with datatable method.</p>

            <h2>Parameters</h2>
            <p>Limit method has 2 required parameters that is <b>offset</b> and <b>count</b>.</p>
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
                  $this-&gt;db-&gt;limit(int $offset, int $count): dbObject
                </highlight-code>
              </div>
            </div>

            <h3>$offset</h3>
            <p><b>Offset</b> can be zero or positive integer for specifying the offset of the first row to be returned.</p>

            <h3>$count</h3>
            <p><b>Count</b> can be zero or positive integer for specifying the maximum number of rows to be returned.</p>

            <h2>Example usage</h2>
            <p>Here is the examples using limit method. See the first of this page for full example.</p>

            <h3>Basic Usage</h3>
            <p>For example we assumed want to filter new data in blog table. First, in the model:</p>
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
                    var $tbl = &#039;blog&#039;;
                    var $tbl_as = &#039;b&#039;;
                    public function __construct(){
                      parent::__construct();
                    }
                    public function latest(){
                      $this-&gt;db-&gt;select(&quot;*&quot;);
                      $this-&gt;db-&gt;from($this-&gt;tbl,$this-&gt;tbl_as);
                      $this-&gt;db-&gt;order_by(&quot;date_create&quot;,&quot;desc&quot;);
                      $this-&gt;db-&gt;limit(0,5);
                      return $this-&gt;db-&gt;get();
                    }
                    public function latest3ExceptOne(){
                      $this-&gt;db-&gt;select(&quot;*&quot;);
                      $this-&gt;db-&gt;from($this-&gt;tbl,$this-&gt;tbl_as);
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
                <p><b>page method v.s. limit method</b></p>
                <p>Page method used for limiting by page and page size</p>
                <p>Limit method used for limiting data by MySQL traditional limit method</p>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/4.0.0/model/last_id/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  last_id Method
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/4.0.0/model/order_by/" class="btn">
                  order_by Method
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
  layout: 'v4.0.0',
  data (){
    return {
      name: 'Seme Framework v4.0.0',
      suffix: ' - Seme Framework 4',
      title: 'limit method',
      description: 'Learn more about limit method from Seme Framework model class version 4.0.0 through this documentation.',
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
        "dateCreated": "2021-07-12T21:23:00+07:00",
        "datePublished": "2021-07-12T21:23:00+07:00",
        "dateModified": "2021-07-12T21:24:00+07:00",
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
