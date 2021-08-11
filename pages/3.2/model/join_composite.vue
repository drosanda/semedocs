<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2/">3.2.x</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2/model/">Model</NuxtLink></li>
          <li class="unavailable">Join Composite</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Join Composite Method</h1>
            <p>
              <b>join_composite</b> method purpose is for joining the table with multiple <b>primary key</b> condition.
              This method are suitable by combining with <NuxtLink to="/3.2/model/composite_create/">composite_create</NuxtLink> method.
            </p>

            <h2>Basic Usage</h2>
            <p>
              Here is the basic usage of join_composite method.
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
                  $this-&#x3E;db-&#x3E;join_composite(string $TABLE_NAME, string $TABLE_NAME_ALIAS, array compositeObjects, string JOIN_TYPE): dbObject
                </highlight-code>
              </div>
            </div>

            <h3>Parameters</h3>
            <p>join_composite method has 4 required parameters and will returned dbObject</p>

            <h4>$TABLE_NAME</h4>
            <p>The table for joined with current table.</p>

            <h4>$TABLE_NAME_ALIAS</h4>
            <p>The alias table for joined with current table.</p>

            <h4 id="compositeObject">Array of Join Composite Object</h4>
            <p>Value required from array of object can be obtained from composite_create method.</p>

            <h4>JOIN_TYPE</h4>
            <p>JOIN_TYPE value. Default empty string. Value consist of inner, outer, left, right.</p>

            <div class="message is-info">
              <div class="message-body">
                <p>This method available from Seme Framework version &#x3E;= 3.2.5</p>
              </div>
            </div>

            <h2>Sample Usage</h2>
            <p>
              Here is the example usage from join_composite method on d_sales_model.php file.
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
                  class D_Sales_Model extends SENE_Model{
                    var $tbl = &#x27;d_sales&#x27;;
                    var $tbl_as = &#x27;dsl&#x27;;
                    var $tbl2 = &#x27;b_seller&#x27;;
                    var $tbl2_as = &#x27;bs&#x27;;

                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                    }
                    private function __joinTbl2(){
                      $composites = array();
                      $composites[] = $this-&#x3E;db-&#x3E;composite_create(&#x22;$this-&#x3E;tbl_as.nation_code&#x22;,&#x22;=&#x22;,&#x22;$this-&#x3E;tbl_as.nation_code&#x22;);
                      $composites[] = $this-&#x3E;db-&#x3E;composite_create(&#x22;$this-&#x3E;tbl_as.b_seller_id&#x22;,&#x22;=&#x22;,&#x22;$this-&#x3E;tbl_as.id&#x22;);
                      return $composites;
                    }
                    public function getByOrderId($id){
                      $this-&#x3E;db-&#x3E;join_composite($this-&#x3E;tbl2,$this-&#x3E;tbl2_as,$this-&#x3E;__joinTbl2(),&#x22;inner&#x22;);
                      $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.id&#x22;,$this-&#x3E;db-&#x3E;esc($id));
                      return $this-&#x3E;db-&#x3E;get_first();
                    }
                  }

                </highlight-code>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/3.2/model/insert/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  insert Method
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/3.2/model/join/" class="btn">
                  join Method
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
  layout: 'v3.2',
  data (){
    return {
      name: 'Seme Framework 3.2.5',
      suffix: ' - Seme Framework 3.2.5',
      title: 'Joins Composite Method',
      description: 'Learn more about join_composite method from $db property on SENE_Model class for Seme Framework 3.2.5.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2',
          text: '3.2.x',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2/model',
          text: 'Model',
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
        "dateCreated": "2021-07-12T19:32:00+07:00",
        "datePublished": "2021-07-12T19:32:00+07:00",
        "dateModified": "2021-07-12T19:34:00+07:00",
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
