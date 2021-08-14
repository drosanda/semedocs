<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2">3.2.x</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2/model">Model</NuxtLink></li>
          <li class="unavailable">Update Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Update Method</h1>
            <p>
              The <code>update</code> is part of Query Builder method for executing SQL <code>UPDATE</code> command.
            </p>

            <h2>Basic Usage</h2>
            <p>
              Here is the basic usage <code>update</code> method from <code>$db</code> property on <NuxtLink to="/3.2/model/#SENE_Model">SENE_Model <i class="fa fa-window-restore"></i></NuxtLink> class.
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
                  $this-&#x3E;db-&#x3E;update(string $table_name, array $data_update [, bool $is_debug=0]): bool
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

            <h2>Example usage</h2>
            <p>
              Here is the source code examples for a model using <code>update</code> method.
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
                    var $tbl = &#x27;blog&#x27;;
                    var $tbl_as = &#x27;b&#x27;;
                    public function __construct(){
                      &#x9; parent::__construct();
                    }
                    public function update($id,$du){
                      $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;,$id);
                      $this-&#x3E;db-&#x3E;update($ths-&#x3E;tbl,$du);
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
      suffix: ' - Seme Framework 3.2',
      title: 'Update Method',
      description: 'Learn update method from $db property on SENE_Model class for Seme Framework version 3.2.x',
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
        "dateCreated": "2021-08-14T13:36:00+07:00",
        "datePublished": "2021-08-14T13:36:00+07:00",
        "dateModified": "2021-08-14T13:36:00+07:00",
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
