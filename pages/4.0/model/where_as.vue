<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/model">Model</NuxtLink></li>
          <li class="unavailable">Where AS</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Where AS Method</h1>
            <p>
              Here is the basic usage <code>where_as</code> method from <code>$db</code> property on <code>SENE_Model</code> class.
            </p>

            <h2>Basic Usage</h2>
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
                  $this-&#x3E;db-&#x3E;where(string $column_name, mixed $filter_value [, string $operator = 'AND' [, string $relation_operator = '=' [, int $open_bracket = 0 [, int $close_bracket = 0 ]]]]): $this-&#x3E;db
                </highlight-code>
              </div>
            </div>

            <p>The <code>where_as</code> method is part of database class builder for filtering data compatible with WHERE Clause on SQL. This method support chained, and has flow from top to bottom while bracket are used. The <b>difference</b> is this method does not automatically escaped</p>

            
            <h3>Parameters</h3>
            <p>Where AS method has 2 required parameters that is <b>column name</b> and <b>value</b>, another parameters are optional. Here is the completed parameters can be used by where methods</p>
            
            <h3>$column_name</h3>
            <p>Column name required for filtering data from table. The columname should exist on selected table. This method has unescaped value.</p>
            <h3>$filter_value</h3>
            <p>Value required for matched with data on table. This method has unescaped value.</p>
            <h3>$operator</h3>
            <p>Default value is AND, this parameter useful for filtering data for multiple condition. Available value <b>AND</b> or <b>OR</b>. Value of this parameter is not case sensitive.</p>
            <h3>$relation_operator</h3>
            <p>Value required for matched $column_name with value. Available value:</p>
            <ul>
              <li>=</li>
              <li>&lt;</li>
              <li>&gt;</li>
              <li>&lt;=</li>
              <li>&gt;=</li>
              <li>&lt;&gt;</li>
              <li>like</li>
              <li>like%</li>
              <li>%like</li>
              <li>%like%</li>
              <li>notlike</li>
              <li>notlike%</li>
              <li>%notlike</li>
              <li>%notlike%</li>
            </ul>
            <p>Value of this parameter is not case sensitive.</p>
            <h3>$open_bracket</h3>
            <p>Required for adding bracket for prioritize condition filtering, default value 0. Available value <b>1</b> and <b>0</b>.</p>
            <h3>$close_bracket</h3>
            <p>Required for adding bracket for prioritize condition filtering, default value 0. Available value <b>1</b> and <b>0</b>.</p>
            
            <h2>Example</h2>
            <p>
              Here is the basic example using <code>where_as</code> method in a model class.
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
                    var $tbl = &#x27;d_order&#x27;;
                    var $tbl_as = &#x27;dor&#x27;;
                    var $tbl2 = &#x27;b_user&#x27;;
                    var $tbl2_as = &#x27;bu&#x27;;
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                    }
                    public function getNow($id){
                      $this-&#x3E;db-&#x3E;select(&#x22;$this-&#x3E;tbl2_as.fname&#x22;,&#x27;fname&#x27;,0);
                      $this-&#x3E;db-&#x3E;select(&#x22;$this-&#x3E;tbl_as.date_order&#x22;,&#x27;date_order&#x27;,0);
                      $this-&#x3E;db-&#x3E;join($this-&#x3E;tbl2,$this-&#x3E;tbl2_as,&#x27;id&#x27;,$this-&#x3E;tbl_as,&#x27;b_user_id&#x27;,&#x27;&#x27;);
                      $this-&#x3E;db-&#x3E;where_as(&#x22;DATE($this-&#x3E;tbl_as.date_order)&#x22;,&#x22;CURRENT_DATE()&#x22;,&#x22;AND&#x22;,&#x22;=&#x22;,0,0);
                      return $this-&#x3E;db-&#x3E;get();
                    }
                    public function getYesterday($b_user_id){
                      $this-&#x3E;db-&#x3E;select(&#x22;$this-&#x3E;tbl_as.*, $this-tbl_as.status_text&#x22;,&#x27;status_text&#x27;,0);
                      $this-&#x3E;db-&#x3E;select(&#x22;$this-&#x3E;tbl2_as.fname&#x22;,&#x27;fname&#x27;,0);
                      $this-&#x3E;db-&#x3E;select(&#x22;$this-&#x3E;tbl2_as.email&#x22;,&#x27;email&#x27;,0);
                      $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.status_text&#x22;,$this-&#x3E;db-&#x3E;esc(&#x22;order_invoice&#x22;),&#x22;AND&#x22;,&#x22;=&#x22;,0,0);
                      $this-&#x3E;db-&#x3E;where_as(&#x22;DATE(date_order)&#x22;,&#x22;DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)&#x22;,&#x22;AND&#x22;,&#x22;=&#x22;,0,0);
                      return $this-&#x3E;db-&#x3E;get();
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <h3>Escaping The Value</h3>
            <p>Escaping value is required for string matching. Here is the example</p>
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
                  $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.status_text&#x22;,$this-&#x3E;db-&#x3E;esc(&#x22;order_completed&#x22;));
                </highlight-code>
              </div>
            </div>
            <h2>Basic Where Condition</h2>
            <p>For basic usage, Seme Framework has basic where method called <NuxtLink to="/4.0/model/where/">where method</NuxtLink>.</p>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/4.0/model/update/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  update method
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/4.0/model/where_in/" class="btn">
                  where in method
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
      title: 'Where AS method',
      description: 'Learn where_as method from $db property on SENE_Model class for Seme Framework 4',
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
        "dateCreated": "2021-07-17T1:15:00+07:00",
        "datePublished": "2021-07-17T11:15:00+07:00",
        "dateModified": "2023-07-31T11:56:00+07:00",
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
