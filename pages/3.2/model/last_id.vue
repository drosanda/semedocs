<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2">3.2.x</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2/model/">Model</NuxtLink></li>
          <li class="unavailable">Last ID Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Last ID Method</h1>
            <p>
              The <code>last_id</code> method is part of Query Builder that returned postive integer value if an ID has generated automatically from <code>MySQL Auto Increment</code> feature.
            </p>

            <h2>Basic Usage</h2>
            <p>
              Here is the basic usage <code>last_id</code> method from <code>$db</code> property on <NuxtLink to="/3.2/model/#SENE_Model" target="_blank">SENE_Model <i class="fa fa-window-restore"></i></NuxtLink> class.
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
                  $this-&#x3E;db-&#x3E;lastId(): integer
                </highlight-code>
              </div>
            </div>
            <h3>Parameters</h3>
            <p>This method doenst need any parameter.</p>

            <h2>Example</h2>
            <p>
              On this example will show the process of 2 table, that first table will produce the <code>last_id</code>, and then the second table will requires the <code>last_id</code> result.
              Also, with the implementation in a controller class.
            </p>

            <h3>The 1st Model Class</h3>
            <p>
              In the first example for implementation <code>last_id</code> method in a model.
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
                  class D_Order_Model extends SENE_Model{
                    var $tbl = &#x27;d_order&#x27;;
                    var $tbl_as = &#x27;dor&#x27;;

                    public function __construct(){
                      &#x9; parent::__construct();
                    }
                    ...
                    public function set($di){
                      $this-&#x3E;db-&#x3E;insert($ths-&#x3E;tbl,$di);
                      return $this-&#x3E;db-&#x3E;lastId();
                    }
                    ...
                  }
                </highlight-code>
              </div>
            </div>
            <h3>The 2nd Model Class</h3>
            <p>
              In the second example create the insert method that requires from <code>last_id</code> result.
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
                  class D_Order_Detail_Model extends SENE_Model{
                    var $tbl = &#x27;d_order_detail&#x27;;
                    var $tbl_as = &#x27;dod&#x27;;

                    public function __construct(){
                      parent::__construct();
                    }
                    ...
                    public function set($dis){
                      return $this-&#x3E;db-&#x3E;insert_multi($ths-&#x3E;tbl,$dis);
                    }
                    ...
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Controller Class</h3>
            <p>
              In this controller class will show how to use <code>last_id</code> method, from a model and then inserted new data into another model.
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
                  class Penjualan extends SENE_Controller{
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;load(&#x27;d_order_model&#x27;,&#x27;dom&#x27;);
                      $this-&#x3E;load(&#x27;d_order_detail_model&#x27;,&#x27;dodm&#x27;);
                    }
                    ...
                    public function submit(){
                      $di = array();
                      $di[&#x27;buyer_name&#x27;] = &#x22;Aldy Iqbal&#x22;;
                      $di[&#x27;grand_total&#x27;] = &#x22;100&#x22;;
                      $di[&#x27;date_create&#x27;] = &#x22;NOW()&#x22;;
                      $last_id = $this-&#x3E;dom-&#x3E;set($di);
                      if($last_id){
                        $dis = array();
                        $di = array();
                        $di[&#x27;d_order_id&#x27;] = $last_id;
                        $di[&#x27;product_name&#x27;] = &#x22;Hand Sanitizer&#x22;;
                        $di[&#x27;price&#x27;] = &#x22;25&#x22;;
                        $di[&#x27;qty&#x27;] = &#x22;2&#x22;;
                        $dis[] = $di;
                        $di = array();
                        $di[&#x27;d_order_id&#x27;] = $last_id;
                        $di[&#x27;product_name&#x27;] = &#x22;Candy&#x22;;
                        $di[&#x27;price&#x27;] = &#x22;10&#x22;;
                        $di[&#x27;qty&#x27;] = &#x22;5&#x22;;
                        $dis[] = $di;
                        $res = $this-&#x3E;dodm-&#x3E;setMass($dis);
                        if($res){
                          echo &#x27;Success&#x27;;
                        }else{
                          echo &#x27;failed, ideally we have to rollback the first insert, but in this example has no rollback method&#x27;;
                        }
                      }else{
                        echo &#x27;failed&#x27;;
                      }
                    }
                    ...
                  }
                </highlight-code>
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
  layout: 'v3.2',
  data (){
    return {
      name: 'Seme Framework v3.2',
      suffix: ' - Seme Framework 3.2.5',
      title: 'Last ID Method',
      description: 'Learn more about last_id method from $db property on SENE_Model class for Seme Framework 3.2.5.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2',
          text: '3.2.x'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2/model',
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
        "dateCreated": "2021-07-15T09:23:00+07:00",
        "datePublished": "2021-07-15T09:23:00+07:00",
        "dateModified": "2021-07-15T09:24:00+07:00",
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
