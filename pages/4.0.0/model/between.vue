<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.2</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/model">Model</NuxtLink></li>
          <li class="unavailable">Between Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Between Method</h1>
            <p>
              Between is a method of the DB object in the model class to be used as a <strong>Query Builder</strong>.
              The purpose of this method is to filter data that is compatible with the BETWEEN command in SQL.
            </p>

            <h2>Basic Usage</h2>
            <p>
              Here is the basic usage of <code>between</code> method is from <code>SENE_Model</code> class.
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
                  $this->db->between(string $column_name, string $value_from, string $value_to): $this->db
                </highlight-code>
              </div>
            </div>

            <h3>Parameters</h3>
            <p>
              Where method has 2 required parameters that is <b>column name</b> and <b>value</b>, another parameters are optional.
              Here is the completed parameters can be used by where methods.
            </p>

            <h4>$column_name</h4>
            <p>
              The <code>$column_name</code> value is required for filtering data from table.
              This parameter value is automatically escaped.
            </p>

            <h3>$value_from</h3>
            <p>
              The <code>$value_from</code> can contain about start value for filtering data by between method.
            </p>

            <h3>$value_to</h3>
            <p>
              The <code>$value_to</code> can contain about end value for filtering data by between method.
            </p>

            <h2>Example</h2>
            <p>
              Here is the basic example that used in a model class.
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
                  class Blog_Model extends SENE_Model{
                    var $tbl = 'd_order';
                    var $tbl_as = 'dor';
                    public function __construct(){
                      parent::__construct();
                      $this->db->from($this->tbl,$this->tbl_as);
                    }

                    /**
                    * Get blog post by creation date (not date time)
                    * @param  string  $sdate  &#x9;&#x9;String date format YYYY-MM-DD
                    * @param  string  $edate  &#x9;&#x9;String date format YYYY-MM-DD
                    * @return array           &#x9;&#x9;Result array of object
                    */
                    public function getByDateRange($sdate,$edate){
                      if (strlen($sdate)==10 &#x26;&#x26; strlen($edate)==10) {
                        $this-&#x3E;db-&#x3E;between(&#x22;$this-&#x3E;tbl_as.cdate&#x22;, &#x22;&#x27;$sdate&#x27;&#x22;, &#x22;&#x27;$edate 23:59:59&#x27;&#x22;);
                      }elseif(strlen($sdate)==10 &#x26;&#x26; strlen($edate)!=10){
                        $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.cdate&#x22;, &#x22;&#x27;$sdate&#x27;&#x22;, &#x22;AND&#x22;, &#x27;&#x3C;=&#x27;);
                      }elseif(strlen($sdate)!=10 &#x26;&#x26; strlen($edate)==10){
                        $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.cdate&#x22;, &#x22;&#x27;$edate&#x27;&#x22;, &#x22;AND&#x22;, &#x27;&#x3E;=&#x27;);
                      }
                      return $this-&#x3E;db-&#x3E;get();
                    }

                    /**
                    * Get blog post by publish date time
                    * @param  string  $sdate  &#x9;&#x9;String date format YYYY-MM-DD
                    * @param  string  $edate  &#x9;&#x9;String date format YYYY-MM-DD
                    * @return array           &#x9;&#x9;Result array of object
                    */
                    public function getByDateTimeRange($sdate,$edate){
                      if (strlen($sdate)==10 &#x26;&#x26; strlen($edate)==10) {
                        $this-&#x3E;db-&#x3E;between(&#x22;$this-&#x3E;tbl_as.pubdt&#x22;, &#x22;(&#x27;$sdate 00:00:00&#x27;)&#x22;, &#x22;(&#x27;$edate 23:59:59&#x27;)&#x22;);
                      }elseif(strlen($sdate)==10 &#x26;&#x26; strlen($edate)!=10){
                        $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.pubdt&#x22;, &#x22;(&#x27;$sdate 00:00:00&#x27;)&#x22;, &#x22;AND&#x22;, &#x27;&#x3C;=&#x27;);
                      }elseif(strlen($sdate)!=10 &#x26;&#x26; strlen($edate)==10){
                        $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.pubdt&#x22;, &#x22;(&#x27;$edate 23:59:59&#x27;)&#x22;, &#x22;AND&#x22;, &#x27;&#x3E;=&#x27;);
                      }
                      return $this-&#x3E;db-&#x3E;get();
                    }
                  }
                </highlight-code>
              </div>
            </div>



            <div class="message is-info">
               <div class="message-body">
                 <p><b>Tips</b></p>
                 <p>
                   This method can be chained with other <b>Query Builder</b> methods, because it returns the same object value (<em>return object</em>) as <code>$this->db</code> in the class Model.
                 </p>
               </div>
             </div>

          </div>
        </div>

      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0.0/model/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Model
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0.0/model/composite_create/" class="btn">
            composite_create
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
      title: 'Between Method',
      description: 'Learn more about between method from SENE_Model on Seme Framework 4.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0/',
          text: '4.0.2',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0/model/',
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
      "dateCreated": "2020-06-11T10:12:00+07:00",
      "datePublished": "2020-06-11T10:12:00+07:00",
      "dateModified": "2021-07-25T12:59:47+07:00",
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
