<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.2</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/model/">Model</NuxtLink></li>
          <li class="unavailable">Insert Multi Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Insert Multi Method</h1>
            <p>
              The <code>insert_multi</code> method purpose is for inserting multiple rows data into a table.
              This method is part from <NuxtLink to="/4.0.0/model/#query_builder">Query Builder <i class="fa fa-window-restore"></i></NuxtLink> methods.
            </p>

            <h2>Basic Usage</h2>
            <p>
              Here is the basic usage <code>insert_multi</code> method from <code>$db</code> property on <NuxtLink to="/4.0.0/model/#SENE_Model">SENE_Model <i class="fa fa-window-restore"></i></NuxtLink> class.
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
                  $this-&#x3E;db-&#x3E;insert_multi(string $table_name, array $data_inserts [, bool $is_debug = 0]): boolean
                </highlight-code>
              </div>
            </div>
            <h3>Parameters</h3>
            <p>
              This method has 2 required parameters and 1 optional parameter.
            </p>
            <h4>$table_name</h4>
            <p>
              The <code>$table_name</code> refers to the name of the table to which the data is to be inserted.
            </p>
            <h4>$data_inserts</h4>
            <p>
              The <code>$data_inserts</code> value can contain 2 dimension array.
              The first dimension array are the data sequencer. Each data sequencer contain an array with <code>key value pair</code>.
              The <code>array key</code> refer to column name of the table and the value refer to value that will be inserted.
              This value supported MySQL builtin functions and values, such as:
              <ul>
                <li><code>NOW()</code></li>
                <li><code>NULL</code></li>
              </ul>
            </p>

            <h2>Examples</h2>
            <p>
              This examples will show implementation <code>insert_multi</code> method on class model and then how to executing the method on controller class.
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
                  class Blog_Model extends SENE_Model{
                    var $tbl = &#x27;blog&#x27;;
                    var $tbl_as = &#x27;b&#x27;;

                    public function __construct(){
                      parent::__construct();
                    }
                    ...
                    public function inserts($dis){
                      $this-&#x3E;db-&#x3E;insert_multi($ths-&#x3E;tbl,$dis);
                    }
                    ...
                  }
                </highlight-code>
              </div>
            </div>

            <h3>The Controller Class Example</h3>
            <p>
              Here is the source code for controller class example using <code>insert_multi</code> method.
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
                  class Blog extends SENE_Controller{
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;load(&#x27;blog_model&#x27;,&#x27;bm&#x27;); #class scope model
                    }
                    public function index(){
                      $id = 1;
                      $di = array();

                      $dis = array();
                      $dis[&#x27;id&#x27;] = 1;
                      $dis[&#x27;title&#x27;] = &#x22;Hello World&#x22;;
                      $dis[&#x27;content&#x27;] = &#x22;Congratulation, your first blog!&#x22;;
                      $dis[&#x27;date_publish&#x27;] = &#x22;NULL&#x22;;
                      $di[]=$dis;

                      $dis = array();
                      $dis[&#x27;id&#x27;] = 2;
                      $dis[&#x27;title&#x27;] = &#x22;Seme Framework Awesome!&#x22;;
                      $dis[&#x27;content&#x27;] = &#x22;Lorem lipsum dolor sit ame, what is lorem lipsum?&#x22;;
                      $dis[&#x27;date_publish&#x27;] = &#x22;NOW()&#x22;;
                      $di[]=$dis;

                      $res = $this-&#x3E;bm-&#x3E;inserts($id,$dis); //call the method on the model
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
              The following is the SQL command that generated from <code>Blog</code> controller while executing <code>insert_multi</code> method.
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
                    (1,&#x22;Hello World&#x22;,&#x22;Congratulation, your first blog!&#x22;,NULL),
                    (2,&#x22;Seme Framework Awesome!&#x22;,&#x22;Lorem lipsum dolor sit ame, what is lorem lipsum?&#x22;,NOW())
                  ;
                </highlight-code>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/4.0.0/model/insert_batch/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  insert_batch Method
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/4.0.0/model/insert/" class="btn">
                  insert Method
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
      name: 'Seme Framework v4.0.0',
      suffix: ' - Seme Framework 4',
      title: 'Insert Multi Method',
      description: 'Learn more about insert_multi method from $db property on SENE_Model class for Seme Framework 4.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0/',
          text: '4.0.0'
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
        "dateCreated": "2021-07-12T21:01:00+07:00",
        "datePublished": "2021-07-12T21:01:00+07:00",
        "dateModified": "2021-07-12T21:02:00+07:00",
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
