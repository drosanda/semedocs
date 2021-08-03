<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.2</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/model/">Model</NuxtLink></li>
          <li class="unavailable">Where</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Where Method</h1>
            <p>Where method is part of database class builder for filtering data compatible with WHERE Clause on SQL. This method support chained, and has flow from top to bottom while bracket are used.</p>

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
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                    }
                    public function getById($id){
                      $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;,$id,&#x22;AND&#x22;,&#x22;=&#x22;,0,0);
                      return $this-&#x3E;db-&#x3E;get_first();
                    }
                    public function getCancel(){
                      $this-&#x3E;db-&#x3E;where(&#x22;order_status&#x22;,&#x22;order_cancel&#x22;,&#x22;AND&#x22;,&#x22;=&#x22;,0,0);
                      return $this-&#x3E;db-&#x3E;get();
                    }
                    public function getCancelByUser($b_user_id){
                      $this-&#x3E;db-&#x3E;where(&#x22;order_status&#x22;,&#x22;order_cancel&#x22;,&#x22;AND&#x22;,&#x22;=&#x22;,0,0)
                      $this-&#x3E;db-&#x3E;where(&#x22;b_user_id&#x22;,$b_user_id,&#x22;AND&#x22;,&#x22;=&#x22;,0,0);
                      return $this-&#x3E;db-&#x3E;get();
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <h2>Parameters</h2>
            <p>Where method has 2 required parameters that is <b>column name</b> and <b>value</b>, another parameters are optional. Here is the completed parameters can be used by where methods.</p>
            <ol type="1">
              <li>COLUMN_NAME*</li>
              <li>Combining Method*</li>
              <li>Operator</li>
              <li>Relational Operator</li>
              <li>Bracket open (boolean)</li>
              <li>Bracket close (boolean)</li>
            </ol>

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
                  $this-&#x3E;db-&#x3E;where(
                  COLUMN_NAME,
                  VALUE,
                  &#x22; AND | OR &#x22;,
                  &#x22;= | != | &#x3C;= | &#x3E;= | &#x3C; | &#x3E; | &#x3C;&#x3E; |
                  like | like% | %like | %like% |
                  notlike | notlike% |%notlike | %notlike%
                  &#x22;,
                  OPENBRACKET,
                  CLOSEBRACKET
                  );

                </highlight-code>
              </div>
            </div>
            <h3>COLUMN_NAME</h3>
            <p>Column name required for filtering data from table. The columname should exist on selected table. This method has automatically escaped.</p>
            <h3>VALUE</h3>
            <p>Value required for matched with data on table. This method has automatically escaped.</p>
            <h3>Combining Method</h3>
            <p>Default value is AND, this parameter useful for filtering data for multiple condition. Available value <b>AND</b> or <b>OR</b>. Value of this parameter is not case sensitive.</p>
            <h3>Relational Operator</h3>
            <p>Value required for matched COLUMN_NAME with value. Available value:</p>
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
            <h3>OPEN BRACKET</h3>
            <p>Required for adding bracket for prioritize condition filtering, default value 0. Available value <b>1</b> and <b>0</b>.</p>
            <h3>CLOSE BRACKET</h3>
            <p>Required for adding bracket for prioritize condition filtering, default value 0. Available value <b>1</b> and <b>0</b>.</p>
            <hr/>
            <h2>Example usage</h2>
            <p>Here is the examples using where method, makes sure another from method and get method has executed for real result. See the first of this page for full example.</p>
            <h3>Basic example</h3>
            <p>Here is basic usage for selecting single data using SQL query:</p>
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
                <highlight-code lang="sql_more">
                  SELECT * FROM d_order WHERE `id` = 1
                </highlight-code>
              </div>
            </div>
            <p>Here is basic usage for selecting single data using query builder:</p>
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
                  $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;,1);
                </highlight-code>
              </div>
            </div>
            <br>
            <h3>Using AND / OR</h3>
            <p>Using AND / OR by SQL query:</p>

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
                <highlight-code lang="sql_more">
                  SELECT *
                  FROM d_order
                  WHERE
                  &#x60;a_company_id&#x60; = 1 OR
                  &#x60;b_user_id&#x60; = 1
                </highlight-code>
              </div>
            </div>
            <p>Using AND / OR by query builder:</p>
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
                  $this-&#x3E;db-&#x3E;where(&#x22;b_user_id&#x22;,1,&#x27;OR&#x27;)-&#x3E;where(&#x22;a_company_id&#x22;,1,&#x27;AND&#x27;);
                </highlight-code>
              </div>
            </div>
            <br>
            <h3>Using Relational Operator</h3>
            <p>Using Relational Operator by query builder:</p>
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
                <highlight-code lang="sql_more">
                  SELECT *
                  FROM d_order
                  WHERE
                  &#x60;b_user_id&#x60; = 1 AND
                  &#x60;grand_total&#x60; &#x3E;= 1000 AND
                  &#x60;status_text&#x60; LIKE &#x27;order_completed&#x27;
                </highlight-code>
              </div>
            </div>
            <p>Using Relational Operator by query builder:</p>
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
                  $this-&#x3E;db
                  -&#x3E;where(&#x22;b_user_id&#x22;,1)
                  -&#x3E;where(&#x22;grand_total&#x22;,1000,&#x22;and&#x22;,&#x27;&#x3E;=&#x27;)
                  -&#x3E;where(&#x22;status_text&#x22;,&#x27;order_completed&#x27;,&#x22;and&#x22;,&#x27;like&#x27;);
                </highlight-code>
              </div>
            </div>
            <br>
            <h3>Using Bracket</h3>
            <p>Using bracket open and close by SQL query:</p>

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
                <highlight-code lang="sql_more">
                  SELECT *
                  FROM b_user
                  WHERE
                  &#x60;status_text&#x60; LIKE &#x27;active&#x27; AND
                  (
                  &#x60;fname&#x60; LIKE &#x27;%andre%&#x27; OR
                  &#x60;lname&#x60; LIKE &#x27;%andre%&#x27; OR
                  &#x60;city&#x60; LIKE &#x27;%andre%&#x27; OR
                  &#x60;email LIKE &#x27;%andre%&#x27;
                  )
                </highlight-code>
              </div>
            </div>
            <p>Using bracket open and close by query builder:</p>
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
                  $this-&#x3E;db
                  -&#x3E;where(&#x22;status_text&#x22;,&#x27;active&#x27;,&#x27;and&#x27;,&#x27;like&#x27;)
                  -&#x3E;where(&#x22;fname&#x22;,&#x27;andre&#x27;,&#x22;and&#x22;,&#x27;%like%&#x27;,1,0)
                  -&#x3E;where(&#x22;lname&#x22;,&#x27;andre&#x27;,&#x22;and&#x22;,&#x27;%like%&#x27;,0,0)
                  -&#x3E;where(&#x22;city&#x22;,&#x27;andre&#x27;,&#x22;and&#x22;,&#x27;%like%&#x27;,0,0)
                  -&#x3E;where(&#x22;email&#x22;,&#x27;andre&#x27;,&#x22;and&#x22;,&#x27;%like%&#x27;,0,1);
                </highlight-code>
              </div>
            </div>
            <hr>
            <h2>Advanced Where Condition</h2>
            <p>Seme Framework has advanced where method called <NuxtLink to="/4.0.0/model/where_as/">where_as method</NuxtLink>.</p>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/4.0.0/model/update/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  where_as method
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/4.0.0/view/" class="btn">
                  View
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
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'Where Method',
      description: 'Learn where method from $db property on SENE_Model class for Seme Framework 4',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0/',
          text: '4.0.2'
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
        "dateCreated": "2021-07-18T13:46:00+07:00",
        "datePublished": "2021-07-18T13:46:00+07:00",
        "dateModified": "2021-07-18T13:46:00+07:00",
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
