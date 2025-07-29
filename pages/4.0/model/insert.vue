<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/model">Model</NuxtLink></li>
          <li class="unavailable">Insert</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Insert Method</h1>
            <p>
              Insert method is part of database class builder for inserting data into a table.
            </p>

            <h2>Basic Usage</h2>
            <p>
              Here is the basic usage <code>insert</code> method from <code>$db</code> property on <code>SENE_Model</code> class.
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
                  $this-&#x3E;db-&#x3E;insert(string $table_name, array $data_insert [, bool $mass_insert=0 [, bool $is_debug=0] ] ): bool
                </highlight-code>
              </div>
            </div>

            <h3>Parameters</h3>
            <p>Insert method has 2 required parameters that is <b>$table_name</b> and <b>$data_insert</b> in key value format.</p>

            <h4>$table_name</h4>
            <p>
              The <code>$table_name</code> refers to the name of the table to which the data is to be inserted.
            </p>

            <h4>$data_insert</h4>
            <p>
              The <code>$data_insert</code> value can contain key value pair in array.
              The key refer to column name of the table and the value refer to value that will be inserted.
              This value supported MySQL builtin functions and values, such as:
              <ul>
                <li><code>NOW()</code></li>
                <li><code>NULL</code></li>
              </ul>
            </p>

            <h4>$mass_insert</h4>
            <p>
              The value of <code>$mass_insert</code> can contain values 1 and 0. If the value is equal to 1 (one), it is used to insert more than one row of data in one method call.
              For this method to work properly, the value of <code>$data_insert</code> must be of data type <code>array of array</code>.
              Where the first array contains a sequence or row sequence, with an automatic key.
              Meanwhile, for the contents of each row the array sequence contains a combination of array keys and values as in insert data in general.
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
              This examples will show implementation <code>insert</code> method on class model and then how to executing the method on controller class.
            </p>

            <h3>The Model Class Example</h3>
            <p>
              Here is the source code example for <code>Blog_Model</code> class.
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
                    var $table = &#x27;blog&#x27;;
                    var $table_alias = &#x27;b&#x27;;
                    public function __construct(){
                      parent::__construct();
                    }
                    public function insert($di){
                      $this-&#x3E;db-&#x3E;insert($ths-&#x3E;table,$di);
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h3>The Controller Class Example</h3>
            <p>
              Here is the source code for controller class example using <code>insert</code> method.
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
                  class Blog extends SENE_Controller{
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;load(&#x27;blog_model&#x27;,&#x27;bm&#x27;); #class scope model
                    }
                    public function index(){
                      $di = array();
                      $di[&#x27;id&#x27;] = 1;
                      $di[&#x27;title&#x27;] = &#x22;Seme Blog!&#x22;;
                      $di[&#x27;content&#x27;] = &#x22;Hello, welcome to Seme Blog&#x22;;
                      $di[&#x27;date_publish&#x27;] = &#x22;NOW()&#x22;;
                      $res = $this-&#x3E;bm-&#x3E;insert($di); //call the method on the model
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

            <h3>SQL Result</h3>
            <p>
              The following is the SQL command that generated from <code>Blog</code> controller while executing <code>insert</code> method.
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
                  INSERT INTO blog (id,title,content,date_publish)
                  VALUES
                    (1,&#x22;Seme Blog!&#x22;,&#x22;Hello, welcome to Seme Blog&#x22;,NULL)
                  ;
                </highlight-code>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/4.0/model/insert_multi/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  insert_multi
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/4.0/model/join_composite/" class="btn">
                  join_composite
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
      title: 'Insert Method',
      description: 'Learn more about insert method from $db property on SENE_Model class for Seme Framework 4.',
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
        "dateCreated": "2021-07-12T21:20:00+07:00",
        "datePublished": "2021-07-12T21:20:00+07:00",
        "dateModified": "2021-07-25T20:21:00+07:00",
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
