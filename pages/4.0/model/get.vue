<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/model">Model</NuxtLink></li>
          <li class="unavailable">Get</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Get Method</h1>
            <p>
              The <code>get</code> method is a part of the <code>query builder</code> which is useful for getting <u>all results</u> from the query builder that has been compiled.
            </p>

            <h2>Basic Usage</h2>
            <p>
              Here is the basic usage <code>get</code> method from <code>$db</code> property on <NuxtLink to="/4.0/model/#SENE_Model" target="_blank">SENE_Model <i class="fa fa-window-restore"></i></NuxtLink> class.
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
                  $this-&#x3E;db-&#x3E;get([string $result_type = &#x22;&#x22; [, bool $is_debug = 0]]): mixed
                </highlight-code>
              </div>
            </div>

            <h3>Parameters</h3>
            <p>
              This method has 2 optional parameters.
            </p>

            <h4>$result_type</h4>
            <p>
              The value of the <code>$result_type</code> parameter to determine the output of the get method.
              Fill with <code>string &#x22;array&#x22;</code> to return the result value with data type <i>array of array</i>.
              While the contents of other values to return values with data type <i>array of objects</i>.
            </p>
            <h4>$is_debug</h4>
            <p>
              The <code>$is_debug</code> parameter is a marker (<em>flag</em>) to enable <i>debug</i> mode.
              The value of this parameter can be filled with <code>int 1</code> to enable debug mode and display the query to be processed.
              Fill it with another value to not enable debug mode.
              In debug mode, there will be no query execution process to the database system.
            </p>


            <h2>Example</h2>
            <p>
              Here is the example for <code>get</code> in a model class.
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
                  class D_Blog_Model extends SENE_Model{
                    public $table = &#x27;blog&#x27;;
                    public $table_alias = &#x27;b&#x27;;

                    public function __construct(){
                      parent::__construct();
                    }
                    ...
                    public function getSearch($keyword){
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;table,$this-&#x3E;table_alias);
                      $this-&#x3E;db-&#x3E;where(&#x22;title&#x22;, ($keyword), &#x22;OR&#x22;, &#x22;%like%&#x22;, 1, 0);
                      $this-&#x3E;db-&#x3E;where(&#x22;content&#x22;, ($keyword), &#x22;AND&#x22;, &#x22;%like%&#x22;, 0, 1);
                      $this-&#x3E;db-&#x3E;where(&#x22;is_published&#x22;, $this-&#x3E;db-&#x3E;esc(1));
                      return $this-&#x3E;db-&#x3E;get();
                    }
                    ...
                  }
                </highlight-code>
              </div>
            </div>

            <h3>SQL Result</h3>
            <p>
              The following is the SQL command that generated from <code>D_Blog_Model</code> class methods.
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
                  -- result from executing D_Blog_Model::getSearch('Seme Framework') --
                  SELECT *
                  FROM `d_blog` b
                  WHERE
                    (
                      `title` LIKE '%Seme Framework%'
                      OR `content` LIKE '%Seme Framework%'
                    )
                    AND `is_published` = 1;

                </highlight-code>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0/model/get_first/" class="btn">
            <i class="fa fa-chevron-left"></i>
            get_first Method
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0/model/group_by/" class="btn">
            group_by Method
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
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
      title: 'Get Method',
      description: 'Learn about get method from $db property on SENE_Model class for Seme Framework 4.',
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
