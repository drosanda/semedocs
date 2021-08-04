<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2.1">3.2.x</NuxtLink></li>
          <li class="unavailable">Model</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">

            <h1 class="">The Model Class</h1>
            <p>
              Model is a class contain about communication from framework to database.
              Model is a bridge for data that can be fetch or push to database from controller.
              The method of model can only executed from controller class.
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
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h2>Composition</h2>
            <p>Model contain about class name which is match with its file name. Filename only use lower case, but there is no restriction on class name for using uppercase or camel case. Method only Extended by Sene_Model or extending from core model that extend sene_model before. Same as controller, class model have to re-executed their parent constructor using <code>parent::__construct();</code> to get all functional of model.</p>
            <h3>Naming Standard</h3>
            <p>Actually this not a requirement, but Seme Framework has recommendation for naming model. Model on Seme Framework located at <code>app/model/</code> you create your new file model inside that folder. But, if you have bigger apps you can start considering separated model inside folder. Seme Framework recommend the folder splitted by Major Use for creating folder, such as Front stand for frontend, admin stands for admin page, api stands for API development etc.</p>
            <p>Different from directory name, Seme Framework suggest give name of model like exactly table name in your working database fill it with suffix model for avoiding colision with controller class name. Here is the example scheme.</p>
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
                  app/
                  └── model/
                    ├── front/
                    | ├── user_model.php
                    | └── blog_model.php
                    └── admin/
                      ├── user_model.php
                      └── blog_model.php
                </highlight-code>
              </div>
            </div>


            <h2 id="SENE_Model">SENE_Model Class</h2>
            <p>
              SENE_Model class is a base class that has various functions (methods) in it for communication purposes with database systems for web-based application development using the Seme Framework.
              There are many methods and properties already available in this SENE_Model class.
            </p>

            <h3 id="SENE_Model_sinopsis">Class Synopsis</h3>
            <p>
              The following is a class synopsis for SENE_Model class.
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
                  abstract class SENE_Model
                  {
                    public $db;
                    protected $directories;
                    protected $config;
                    public $field = array();

                    public function __construct(){ ... }
                    private function loadEngine($db) { ... }
                    public function __encrypt($val) { ... }
                    public function __decrypt($val) { ... }
                    public function __decrypt($val) { ... }
                  }
                </highlight-code>
              </div>
            </div>

            <h3 id="properti_db">$db Property</h3>
            <p>
              The <code>$db</code> property of the SENE_Model class contains properties and methods for interacting with the system database.
              The purpose of this class property is to generate <code>SQL</code> code that is suitable for a particular database system without the need to memorize <code>SQL</code> code.
              In this property there is also a collection of methods to perform the Query Builder process.
            </p>

            <h2 id="query_builder">Using Query Builder</h2>
            <p>Seme Framework model allowed you to use our query builder method that can help reuse your code in for another model. So, you can simply use copy-paste and change the <code>$tbl</code> properties of your class model. Here is the example:</p>

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
                    public function getAll(){
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                      return $this-&#x3E;db-&#x3E;get();
                    }
                    public function countAll(){
                      $this-&#x3E;db-&#x3E;select_as(&#x27;COUNT(*)&#x27;,&#x27;total&#x27;,0);
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                      $d = $this-&#x3E;db-&#x3E;get_first();
                      if(isset($d-&#x3E;total)) return $d-&#x3E;total;
                      return 0;
                    }
                    public function getById($id){
                      $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;,$id);
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                      return $this-&#x3E;db-&#x3E;get_first();
                    }
                    public function set($di=array()){
                      $this-&#x3E;db-&#x3E;insert($this-&#x3E;tbl,$di);
                      return $this-&#x3E;db-&#x3E;last_id;
                    }
                    public function update($id,$du=array()){
                      $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;,$id);
                      return $this-&#x3E;db-&#x3E;update($this-&#x3E;tbl,$du);
                    }
                    public function del($id){
                      $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;,$id);
                      return $this-&#x3E;db-&#x3E;delete($this-&#x3E;tbl);
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Debug Query</h3>
            <p>Seme Framework has debugging feature (<strong>flag</strong>) on each Query Builder methods.</p>
            <ul>
              <li>$this-&#x3E;db-&#x3E;get(&#x27;object&#x27;,<code>1</code>)</li>
              <li>$this-&#x3E;db-&#x3E;get_first(&#x27;object&#x27;,<code>1</code>)</li>
              <li>$this-&#x3E;db-&#x3E;insert($this-&#x3E;tbl,$di,0,<code>1</code>)</li>
              <li>$this-&#x3E;db-&#x3E;update($this-&#x3E;tbl,<code>1</code>);</li>
              <li>$this-&#x3E;db-&#x3E;delete($this-&#x3E;tbl,<code>1</code>);</li>
            </ul>

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
      name: 'Seme Framework 3.2.1',
      suffix: ' - Seme Framework 3.2.1',
      title: 'The Model Class',
      description: 'Learn more about the model class for Seme Framework 3.2.1.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2.1',
          text: '3.2.x',
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
        "dateModified": "2021-06-23T15:26:17+07:00",
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
