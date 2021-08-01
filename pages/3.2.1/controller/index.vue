<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2.1/">3.2.1</NuxtLink></li>
          <li class="unavailable">Controller</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Controller</h1>
            <p>Controller is the main actor in framework lifes. A Controller is simply a class file that is named in a way that can be associated with a URI. If you extract Seme Framework on <code>XAMPP/htdocs/seme/</code> and then you called <code>http://localhost/seme/blog/</code>, you are accessing the Blog Controller, if the blog.php file is existed on your controller folder. By Default, if you accessing <code>http://localhost/seme/</code> it will executing home controller which is the default controller for first request in Seme Framework.</p>
            <h2>The Condition</h2>
            <p>A Controller can be loaded if URI request has same name with filename of controller and class name of controller. Like example before, if you access blog URI make sure that file blog.php is existed in app/controller/ and the class name is blog with extending SENE_Controller.</p>
            <h2>What if not found?</h2>
            <p>By Default Seme Framework has fallback controller named notfound controller which is included in Seme Framework package. You can override the controller, if you wish.</p>
            <h2>Default Controller</h2>
            <p>Here is the default source code of controller.</p>
            <pre>
              class Home extends SENE_Controller{
                public function __construct(){
                  parent::__construct();
                }
                public function index(){
                  echo 'Thankyou for using Seme Framewrok';
                }
              }
            </pre>
            <h2>Notfound Controller</h2>
            <p>Here is the default source code of notfound controller.</p>
            <pre>
              class Notfound extends SENE_Controller{
                public function __construct(){
                  parent::__construct();
                }
                public function index(){
                  header("HTTP/1.0 404 Not Found");
                  echo '404 Notfound';
                }
              }
            </pre>

            <p class="panel">Please make sure your class name are match with filename.</p>
            <p class="panel">Seme Framework only use lowercase filename, but there is no restriction for class name use capital at first name. You can do CamelCase if you want on class name.</p>
            <h2>Controller Composition</h2>
            <p>Like a object oriented lesson, a controller can have properties and methods. First, if you want the class can be identified as a controller, you have to extends SENE_Controller on class declaration. After that, you have to re-executed parent constructor if you want use all benefit from SENE_Controller on your controller (<code>parent::__construct();</code>).</p>
            <h3>Private Properties and Methods</h3>
            <p>Seme Framework allow your method in Private or in Protected mode. The Private or Protected mode cant be executed through URI request. Or you can use double underscore (__) means as Private properties or methods.</p>
            <pre>
              class Home extends SENE_Controller{
                var $public_var = 'Yi-Ha!';
                var $__underWear = 'My Private Things';
                public function __construct(){
                  parent::__construct();
                }
                private function __processFile(){
                  return true;
                }
                public function index(){
                  echo '404 Notfound';
                }
              }
            </pre>
            <h2>Loading the Model</h2>
            <p>Model is a class contain about communication from framework to database. Model is a bridge for data that can be fetch or push to database from controller. You can load model in constructor if you want executed widely in certain controller. Or you can load inside method of a controller. </p>

            <pre>
              class Home extends SENE_Controller{
                public function __construct(){
                  parent::__construct();
                  $this->load('users_model','alias_of_user_model'); #class scope model
                }
                private function __processFile(){
                  return true;
                }
                public function index(){
                  $this->load('address_model','alias_of_address_model'); #method scope model
                  echo '404 Notfound';
                }
              }
            </pre>
            <h2>Loading the Theme</h2>
            <p>Theme is collection of view file that meets requirement of Seme Framework. Please refer to this <a href="/view.html">section</a> if you want learn more.</p>

            <pre>
              class Home extends SENE_Controller{
                public function __construct(){
                  parent::__construct();
                  $this->setTheme('name_of_theme'); //located at app/view/name_of_theme
                }
              }
            </pre>
            <h3>Debug variable</h3>
            <p>Seme framework has builtin debugging in controller and view scope. The purpose of debugger for debugging variable on controller or view.</p>

            <pre>
              class Home extends SENE_Controller{
                public function __construct(){
                  parent::__construct();
                  $this->setTheme('front');
                  $this->load('front/user_model','um');
                }
                public function index(){
                  $data = array();

                  $data['user'] = $this->um->getById($id);

                  //debugging $data
                  $this->debug($data);
                  die();

                  $this->putThemeContent('home/home',$data);

                  $this->setLayout('col-1',$data);
                  $this->render();
                }
              }
            </pre>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'v3.2.1',
  data (){
    return {
      name: 'Seme Framework v3.2.1',
      suffix: ' - Seme Framework 3.2.1',
      title: 'Controller',
      description: 'Learn more about controller class of Seme Framework version 3.2.1 through this documentation.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2.1/',
          text: '3.2.1',
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
  jsonld() { this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
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
