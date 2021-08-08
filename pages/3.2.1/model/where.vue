<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2.1">3.2.x</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2.1/model">Model</NuxtLink></li>
          <li class="unavailable">Where Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Where Method</h1>
            <p>
              The <code>where</code> method purpose is for filtering data from query result by executing <code>WHERE</code> SQL command.
              This method will put the result SQL command on Query Builder can combined with another Query Builder methods.
            </p>

            <h2>Basic Usage</h2>
            <p>
              Here is the basic usage <code>where</code> method from <code>$db</code> property on <code>SENE_Model</code> class.
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
                  $this-&#x3E;db-&#x3E;where(string $column_name, mixed $filter_value [, string $operator = &#x27;AND&#x27; [, string $relation_operator = &#x27;=&#x27; [, int $open_bracket = 0 [, int $open_bracket = 0 ]]]]): $this-&#x3E;db
                </highlight-code>
              </div>
            </div>
            <h3>Parameters</h3>
            <p>
              This method has required 2 parameters and 4 optional parameters.
            </p>


            <h4>$column_name</h4>
            <p>
              Can contain the name of the column to be filtered.
              The value of this parameter is <b>auto</b> in <code>escape</code>.
            </p>

            <h4>$filter_value</h4>
            <p>
              Filter value against the selected column.
            </p>

            <h4>$operator</h4>
            <p>
              The operator value performed for the next <code>WHERE</code> condition, the following values match the value of this parameter.
              <ul>
                <li><code>AND</code></li>
                <li><code>OR</code></li>
              </ul>
            </p>

            <h4>$operator_relational</h4>
            <p>
              The value of the relational operator assigned to the filter condition with the column name.
              <ul>
                <li><code>=</code></li>
                <li><code>!=</code> or <code>&#x3C;&#x3E;</code></li>
                <li><code>&#x3E;</code></li>
                <li><code>&#x3C;</code></li>
                <li><code>&#x3E;=</code></li>
                <li><code>&#x3C;=</code></li>
                <li><code>like</code></li>
                <li><code>like%</code></li>
                <li><code>%like</code></li>
                <li><code>%like%</code> or <code>like%%</code></li>
                <li><code>notlike</code></li>
                <li><code>notlike%</code></li>
                <li><code>%notlike</code></li>
                <li><code>%notlike%</code> or <code>notlike%%</code></li>
              </ul>
            </p>

            <h4>$open_bracket</h4>
            <p>
              Add an opening parenthesis at the beginning of the <code>SQL</code> command before the contents of the next <code>WHERE</code> command.
            </p>

            <h4>$close_bracket</h4>
            <p>
              Add a closing parenthesis at the end of the <code>SQL</code> command before the contents of the next <code>WHERE</code> command.
            </p>

            <h2>Example</h2>
            <p>
              The following is an example of using the where method in the <code>d_order_model.php</code> file.
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
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                    }

                    public function getById($id){
                      $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;,$id,&#x22;AND&#x22;,&#x22;=&#x22;,0,0);
                      return $this-&#x3E;db-&#x3E;get_first();
                    }
                    public function getNotCancelled(){
                      $this-&#x3E;db-&#x3E;where(&#x22;order_status&#x22;,&#x22;order_cancel&#x22;,&#x22;AND&#x22;,&#x22;&#x3C;&#x3E;&#x22;,0,0);
                      return $this-&#x3E;db-&#x3E;get();
                    }
                    public function getCancelByUser($b_user_id){
                      $this-&#x3E;db-&#x3E;where(&#x22;order_status&#x22;,&#x22;order_cancel&#x22;,&#x22;AND&#x22;,&#x22;like&#x22;,0,0);
                      $this-&#x3E;db-&#x3E;where(&#x22;b_user_id&#x22;,$b_user_id,&#x22;AND&#x22;,&#x22;=&#x22;,0,0);
                      return $this-&#x3E;db-&#x3E;get();
                    }
                    public function getAllCancelRefund(){
                      $this-&#x3E;db-&#x3E;where(&#x22;order_status&#x22;,&#x22;order_cancel&#x22;,&#x22;AND&#x22;,&#x22;=&#x22;,0,0);
                      $this-&#x3E;db-&#x3E;where(&#x22;is_refund&#x22;, 1,&#x22;OR&#x22;,&#x22;=&#x22;,1,0);
                      $this-&#x3E;db-&#x3E;where(&#x22;is_refund_closed&#x22;, 1,&#x22;OR&#x22;,&#x22;=&#x22;,0,1);
                      return $this-&#x3E;db-&#x3E;get();
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Generated SQL Command</h3>
            <p>
              The following is the SQL command generated by the method in the <code>D_Order_Model</code> class example.
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
                  -- result from executing D_Order_Model::getById(112) --
                  SELECT * FROM `d_order` WHERE `id` = 112;

                  -- result from executing D_Order_Model::getNotCancelled() --
                  SELECT * FROM `d_order` WHERE `order_status` != 'cancel';

                  -- result from executing D_Order_Model::getCancelByUser(2125) --
                  SELECT * FROM `d_order` WHERE `order_status` LIKE 'cancel' AND `b_user_id` = 2125;

                  -- result from executing D_Order_Model::getAllCancelRefund() --
                  SELECT * FROM `d_order` WHERE `order_status` = "order_cancel" AND ( `is_refund` = 1 OR `is_refund_closed` = 1);
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
      suffix: ' - Seme Framework 3.2.1',
      title: 'Where Method',
      description: 'Learn about where method on $db property on SENE_Model class for Seme Framework 3.2.5.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2.1',
          text: '3.2.1',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2.1/model',
          text: 'Model',
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
        "@type": "WebPage",
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
        "dateCreated": "2020-08-08T09:48:12+07:00",
        "datePublished": "2020-08-08T09:48:12+07:00",
        "dateModified": "2020-08-08T09:48:12+07:00",
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
