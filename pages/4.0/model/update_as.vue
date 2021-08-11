<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.x</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/model">Model</NuxtLink></li>
          <li class="unavailable">Update AS</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Update AS Method</h1>
            <p>
              The <code>update_as</code> method is like <NuxtLink to="/4.0/model/update">update method <i class="fa fa-window-restore"></i></NuxtLink> but with <b>unescaped</b> key value pair.
              This method suitable for updating column to column in a table or suitable for another advanced SQL <code>UPDATE</code> operation.
              This method is available from SEME Framework version 3.1.0.
            </p>

            <div class="message is-warning">
              <div class="message-body">
                <p><b>Caution</b></p>
                <p>
                  The <i>escape</i> method (<code>$this-&#x3E;db-&#x3E;esc(&#x27;VALUE&#x27;)</code>) maybe required for preventing <a href="https://en.wikipedia.org/wiki/SQL_injection" target="_blank">SQL injection <i class="fa fa-external-link"></i></a>.
                </p>
              </div>
            </div>

            <h2>Basic Usage</h2>
            <p>
              Here is the basic usage <code>update_as</code> method from <code>$db</code> property on <NuxtLink to="/4.0/model/#SENE_Model">SENE_Model <i class="fa fa-window-restore"></i></NuxtLink> class.
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
                  $this-&#x3E;db-&#x3E;update_as(string $table_name, array $data_update, [bool $is_debug=0]): bool
                </highlight-code>
              </div>
            </div>

            <h3>Parameters</h3>
            <p>
              This method has 2 required parameters and 1 optional parameter.
            </p>

            <h4>$table_name</h4>
            <p>
              The <code>$table_name</code> refers to the name of the table to which the data is to be updated.
            </p>

            <h4>$data_update</h4>
            <p>
              The <code>$data_update</code> value can contain key value pair in array and automatically <code>escaped</code>.
              The key refer to column name of the table and the value refer to value that will be inserted.
              This value supported MySQL builtin functions and values, such as:
              <ul>
                <li><code>NOW()</code></li>
                <li><code>NULL</code></li>
              </ul>
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
              On this example, we want to update value a column named <code>revision_count</code> with it is own increment.
              Here is the examples usage <code>update_as</code> in a model class.
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
                    var $tbl = &#x27;blog&#x27;;
                    var $tbl_as = &#x27;b&#x27;;
                    public function __construct(){
                      parent::__construct();
                    }
                    public function update($id,$du){
                      $du[&#x27;revision_count&#x27;] = &#x27;&#x60;revision_count&#x60;+1&#x27;;
                      $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;, $id);
                      $this-&#x3E;db-&#x3E;update_as($ths-&#x3E;tbl,$du);
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Controller class example</h3>
            <p>And then this is controller class example using the model class example</p>
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
                  class Blog extends SENE_Controller{
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;load(&#x27;blog_model&#x27;,&#x27;bm&#x27;); #class scope model
                    }
                    public function index(){
                      $id = 1;
                      $du = array();
                      $du[&#x27;title&#x27;] = &#x22;This is new title of this blog!&#x22;;
                      $res = $this-&#x3E;bm-&#x3E;update($id,$du); //call the method on the model
                      if($res){
                        echo &#x27;Success&#x27;;
                      }else{
                        echo &#x27;failed&#x27;;
                      }
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Generated SQL</h3>
            <p>
              Here is the generated SQL command from method <code>update_as</code>.
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
                  UPDATE
                    `d_order`
                  SET
                    title = "This is new title of this blog!",
                    revision_count = `revision_count`+1
                  WHERE
                    `id` = 1;
                </highlight-code>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0/model/select" class="btn">
            <i class="fa fa-chevron-left"></i>
            Select Method
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0/model/update" class="btn">
            Update Method
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
      title: 'Update AS Method',
      description: 'Learn update_as method from $db property on SENE_Model class for Seme Framework 4.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0',
          text: '4.0.2'
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
        "dateCreated": "2021-08-10T21:35:00+07:00",
        "datePublished": "2021-08-10T21:35:00+07:00",
        "dateModified": "2021-08-10T21:36:00+07:00",
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
