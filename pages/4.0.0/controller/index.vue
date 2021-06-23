<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class="unavailable">Controller Class</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Controller Class</h1>
            <p>Controller is the main actor in Seme Framework life cycle.</p>
            <p>A Controller is simply a class file that is named in a way that can be associated with an URI.</p>
            <p>The controller class relatives to <code>app/controller</code> directory.</p>
            <p>The controller filename and class name can only have alphanumeric with underscore.</p>
            <h2>Example</h2>
            <p>Here is the basic example for a controller structure:</p>
            <pre>
              app
              |-- controller
              |---- home.php
              |---- blog.php
            </pre>
            <p>Lets say, you have extracted Seme Framework on <code>D:\XAMPP\htdocs\seme-framework</code></p>
            <p>So, if you accessing the <code>http://localhost/seme-framework</code> the Seme Framework will load <code>home.php</code> controller.</p>
            <div class="message is-info">
              <div class="message-body">
                <p>Class <b>home</b> or <b>home.php</b> file is the default access controller from each URI even in the sub directory.</p>
              </div>
            </div>
            <p>How if, we accessing <code>http://localhost/seme-framework/blog</code>?</p>
            <p>The answer is, Seme Framework will load controller blog.php</p>
            <p>Seme Framework will only load controller with filename and its class name are matched.</p>

            <h2>SENE_Controller</h2>
            <p>SENE_Controller is basic class for creating controller which contain properties and methods that are required for using Seme Framework properly.</p>

            <h3>Basic Usage</h3>
            <p>Here is some basic usage for creating controller</p>

            <h4>Default Controller</h4>
            <p>Here is the default source code of controller.</p>

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
                <highlight-code lang="html">
                  &#x3C;?php
                  class Home extends Sene_Controller{
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      echo &#x27;Thankyou for using Seme Framewrok&#x27;;
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h4>Notfound Controller</h4>
            <p>Here is the default source code of notfound controller.</p>

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
                <highlight-code lang="html">
                  &#x3C;?php
                  class Notfound extends Sene_Controller{
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      header(&#x22;HTTP/1.0 404 Not Found&#x22;);
                      echo &#x27;404 Notfound&#x27;;
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p>Please make sure your class name are match with filename.</p>
              </div>
            </div>
            <div class="message is-info">
              <div class="message-body">
                <p>Undefined file name will be throw 404 error.</p>
              </div>
            </div>
            <div class="message is-danger">
              <div class="message-body">
                <p><b>Caution</b></p>
                <p>Mismatched classname with filename will be throw 500 error.</p>
              </div>
            </div>

            <h2>Access Methods</h2>
            <p>Seme Framework supported access method for public and private declaration.</p>
            <h3>Private Properties and Methods</h3>
            <p>Seme Framework allow your method in Private or in Protected mode. The Private or Protected mode cant be executed through URI request. Or you can use double underscore (__) means as Private properties or methods.</p>

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
                <highlight-code lang="html">
                  class Home extends Sene_Controller{
                    var $public_var = &#x27;Yi-Ha!&#x27;;
                    var $__underWear = &#x27;My Private Things&#x27;;
                    public function __construct(){
                      parent::__construct();
                    }
                    private function __processFile(){
                      return true;
                    }
                    public function index(){
                      echo &#x27;404 Notfound&#x27;;
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <div class="message is-info">
              <div class="message-body">
                <p>The private method or private properties on Seme Framework are always prefixed with double underscore.</p>
              </div>
            </div>
            <div class="message is-success">
              <div class="message-body">
                <p>The private method is inaccessible from URI request.</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0.0/view/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Download and Installation
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0.0/controller/constructor/" class="btn">
            Controller: __construct
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
      title: 'Controller',
      description: 'Learn more about controller class of Seme Framework version 4.0.0 through this documentation.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0/',
          text: '4.0.0',
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
