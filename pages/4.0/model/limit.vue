<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.2</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/model">Model</NuxtLink></li>
          <li class="unavailable">Limit</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Limit Method</h1>
            <p>
              The <code>limit</code> method is part of Query Builder for limiting query result by executing <code>LIMIT [A],[B]</code> SQL command.
              This method also suitable for creating pagination with datatables pagination.
            </p>

            <h2>Basic Usage</h2>
            <p>
              Here is the basic usage <code>limit</code> method from <code>$db</code> property on <NuxtLink to="/4.0/model/#SENE_Model" target="_blank">SENE_Model <i class="fa fa-window-restore"></i></NuxtLink> class.
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
                  $this-&gt;db-&gt;limit(int $a, int $b): $this-&#x3E;db
                </highlight-code>
              </div>
            </div>

            <h3>Parameters</h3>
            <p>This method has 2 required parameters.</p>

            <h4>$a</h4>
            <p>
              The <code>$a</code> value can be zero or positive integer for specifying the offset of the first row to be returned.
            </p>
            <h4>$b</h4>
            <p>
              The <b>$b</b> value can be zero or positive integer for specifying the maximum number of rows to be returned.
            </p>

            <h2>Example</h2>
            <p>On this example will show limiting the result query by using <code>limit</code> method in a model class.</p>
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
                  class D_Blog_Model extends SENE_Model{
                    var $tbl = &#039;d_blog&#039;;
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
                    public function latest3ExceptTheFirst(){
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
            <h3>SQL Result</h3>
            <p>
              The following is the SQL command that generated from <code>D_Blog_Model</code> model methods.
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
                  -- result from executing D_Blog_Model::latest() --
                  SELECT *
                  FROM &#x60;d_blog&#x60; b
                  ORDER BY &#x60;date_create&#x60; DESC
                  LIMIT 0, 5;
                  -- result from executing D_Blog_Model::latest3ExceptTheFirst() --
                  SELECT *
                  FROM &#x60;d_blog&#x60; b
                  ORDER BY &#x60;date_create&#x60; DESC
                  LIMIT 1, 4;
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Page method v.s. Limit Method</b></p>
                <p>Page method used for limiting by page and page size.</p>
                <p>Limit method used for limiting data by MySQL traditional limit method.</p>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/4.0/model/last_id/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  last_id Method
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/4.0/model/order_by/" class="btn">
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
  layout: 'v4.0',
  data (){
    return {
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'Limit Method',
      description: 'Learn more about limit method from $db property on SENE_Model class for Seme Framework 4.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0',
          text: '4.0'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0/model',
          text: 'Model'
        }
      ]
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
        "dateCreated": "2021-08-03T10:24:00+07:00",
        "datePublished": "2021-08-03T10:24:00+07:00",
        "dateModified": "2021-08-03T10:24:00+07:00",
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
