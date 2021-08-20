<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.2</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/model">Model</NuxtLink></li>
          <li class="unavailable">Join</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Join Method</h1>
            <p>
              The <code>join</code> method is used to combine query results from two or more tables with only 1 key is to be joined as condition.
              This method will execute the <code>JOIN</code> SQL command as well as part of the <code>Query Builder</code>.
            </p>

            <h2>Basic Usage</h2>
            <p>
              Here is the basic usage <code>join</code> method from <code>$db</code> property on <NuxtLink to="/4.0/model/#SENE_Model" target="_blank">SENE_Model <i class="fa fa-window-restore"></i></NuxtLink> class.
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
                  $this-&#x3E;db-&#x3E;join(
                    string $table2,
                    string $table2_alias,
                    string $table2_column_to_joined,
                    string $table1_alias,
                    string $table1_column_to_joined
                    [, string $join_method = &#x22;&#x22;]
                  ): $this-&#x3E;db
                </highlight-code>
              </div>
            </div>

            <h3>Parameters</h3>
            <p>
              This method has 5 required parameters and 1 optional parameter.
            </p>
            <h4>$table2</h4>
            <p>
              The <code>$table2</code> refers to the name of the table that will be joined to.
            </p>
            <h4>$table2_alias</h4>
            <p>
              The <code>$table2_alias</code> value can contain about string that aliased the value of <b>$table2</b>.
            </p>
            <h4>$table2_column_to_joined</h4>
            <p>
              The <code>$table2_column_to_joined</code> value can contain about column name from <b>$table2</b> to be the key.
            </p>

            <h4>$table1_alias</h4>
            <p>
              The <code>$table1_alias</code> value can contain about string that aliased the value of <b>origin table</b>.
            </p>
            <h4>$table1_column_to_joined</h4>
            <p>
              The <code>$table1_column_to_joined</code> value can contain about column name from <b>origin table</b> to be the key.
            </p>

            <h4>$join_method</h4>
            <p>
              The <code>$join_method</code> purpose is to declare join method that used.
              Default value is the empty string <code>&#x22;&#x22;</code>.
              Or can be on of these value:
              <ul>
                <li><code>left</code></li>
                <li><code>right</code></li>
                <li><code>inner</code></li>
                <li><code>outer</code></li>
              </ul>
            </p>

            <h2>Example</h2>
            <p>
              The following is an example of using the <code>join</code> method in the <code>d_order_model.php</code> file.
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
                    var $tbl2 = &#x27;d_order_detail&#x27;;
                    var $tbl2_as = &#x27;dod&#x27;;
                    var $tbl3 = &#x27;c_produk&#x27;;
                    var $tbl3_as = &#x27;cp&#x27;;

                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                    }
                    public function getByOrderId($d_order_id){
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                      $this-&#x3E;db-&#x3E;join($this-&#x3E;tbl2, $this-&#x3E;tbl2_as, &#x27;id&#x27;, $this-&#x3E;tbl_as, &#x27;d_order_id&#x27;, &#x27;left&#x27;);
                      $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.d_order_id&#x22;, $this-&#x3E;db-&#x3E;esc($d_order_id));
                      return $this-&#x3E;db-&#x3E;get();
                    }
                    public function getDetailJasaForDrDashboard(){
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl, $this-&#x3E;tbl_as);
                      $this-&#x3E;db-&#x3E;join($this-&#x3E;tbl2, $this-&#x3E;tbl2_as, &#x27;id&#x27;, $this-&#x3E;tbl_as, &#x27;d_order_id&#x27;, &#x27;&#x27;);
                      $this-&#x3E;db-&#x3E;join($this-&#x3E;tbl3, $this-&#x3E;tbl3_as, &#x27;id&#x27;, $this-&#x3E;tbl_as, &#x27;c_produk_id&#x27;, &#x27;left&#x27;);
                      $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl2_as.utype&#x22;,$this-&#x3E;db-&#x3E;esc(&#x27;order_selesai&#x27;));
                      $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl3_as.jenis_paket&#x22;, &#x27;IS NULL&#x27;);
                      $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.sdate&#x22;, &#x27;IS NOT NULL&#x27;);
                      return $this-&#x3E;db-&#x3E;get(&#x27;&#x27;,0);
                    }
                  }
                </highlight-code>
              </div>
            </div>


            <h3>SQL Generated Result</h3>
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
                  -- result from executing D_Order_Model::getByOrderId(47) --
                  SELECT *
                  FROM `d_order` dor
                  LEFT JOIN d_order_detail dod
                    ON dor.id = dod.d_order_id
                  WHERE dod.`id` = 47;

                  -- result from executing D_Order_Model::getDetailJasaForDrDashboard() --
                  SELECT *
                  FROM `d_order` dor
                  JOIN d_order_detail dod
                    ON dor.id = dod.d_order_id
                  LEFT JOIN c_produk cp
                    ON cp.id = dod.c_produk_id
                  WHERE
                    dod.`utype` = &#x22;order_selesai&#x22;
                    AND cp.utype IS NULL
                    AND dor.sdate IS NOT NULL;
                </highlight-code>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/4.0/model/insert/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  Insert Method
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/4.0/model/last_id/" class="btn">
                  Last ID Method
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
      title: 'Join Method',
      description: 'Learn more about join method from $db property on SENE_Model class for Seme Framework 4.',
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
        "dateCreated": "2021-08-04T09:52:00+07:00",
        "datePublished": "2021-08-04T09:52:00+07:00",
        "dateModified": "2021-08-04T09:52:00+07:00",
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
