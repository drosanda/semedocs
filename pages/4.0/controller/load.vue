<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/controller">Controller</NuxtLink></li>
          <li class="unavailable">Load</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Load Method</h1>
            <p>
              The <code>load</code> method is used to call a model file or a library file while in the Controller context. This method also allows to instantiate the called file into an object. By default, the name of the instantiated object will be the same as the file name in lowercase. You can also replace the object name with the desired name or give it an alias.
            </p>

            <h3>Basic Usage</h3>
            <p>
              Here is the basic usage <code>load</code> method from <NuxtLink to="/4.0/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink> class.
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
                  $this-&#x3E;load(string $filename_location[, string $alias=''[, string $load_type='model']]):self
                </highlight-code>
              </div>
            </div>

            <h3>Parameters</h3>
            <p>
              This method has 1 required parameter and 2 optional parameters.
            </p>
            <h4>$filename_location</h4>
            <p>
              The <code>$model_filename</code> value can be contain a string of model filename.
              File location always relatives to <code>app/model</code> directory.
              So, if we have a model class under <code>app/model/api/hello_model.php</code>
              We have to fill the first parameter with extra suffix path, like <code>api/hello_model</code>.
            </p>

            <h4>$alias</h4>
            <p>
              The alias name of the object that has been called into the controller.
              If given an empty string, it will use the file name without the <code>.php</code> suffix as the object name.
            </p>

            <h3>$load_type</h3>
            <p>
              The type of call from the file to be called is "model", "lib" or "". If the string is empty, it will call the library but without instantiating it into an object.
            </p>

            <h2>Example</h2>
            <p>
              On this example, will show the implementation of <code>load</code> method without an alias.
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
                  class Blog extends \SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;load(&#x27;hello_model&#x27;);
                    }
                    public function index(){
                      //executing the hello_model object
                      print_r($this-&#x3E;hello_model-&#x3E;get());
                      die();
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h3>With Alias</h3>
            <p>
              On this example, will show the implementation of <code>load</code> method using alias.
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
                  class Blog extends \SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;load(&#x27;api/hello_model&#x27;,&#x27;hm&#x27;);
                    }
                    public function index(){
                      //executing the hello_model object
                      print_r($this-&#x3E;hm-&#x3E;get());
                      die();
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <div class="message is-success">
              <div class="message-body">
                <p><b>Tips</b></p>
                <p>If you confused how to fill the alias name, you can get from first letter of each class name.</p>
                <p>example, <code>app/model/api/hello_detail_model2.php</code> and then the alias will be <code>hdm2</code>.</p>
              </div>
            </div>

            <h3>Inside a Directory</h3>
            <p>
              On this example, will show the implementation of <code>load</code> method loading a model inside a directory and without an alias.
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
                  class Blog extends \SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;load(&#x27;api/hello_model&#x27;);
                    }
                    public function index(){
                      //executing the hello_model object
                      print_r($this-&#x3E;hello_model-&#x3E;get());
                      die();
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <div class="message is-warning">
              <div class="message-body">
                <p><b>Caution</b></p>
                <p>While loading the model from sub directory, the path prefix will not instantiate as object model name.</p>
                <p>So, be careful for choosing the naming class model or alias.</p>
                <p>If necessary, you can duplicate a model class to avoid conflict with extra suffix with number.</p>
                <p>example, <code>app/model/api/hello_model2.php</code> and then the class name <code>Hello_Model2</code>.</p>
              </div>
            </div>


          </div>
        </div>
      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0/controller/lib/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Lib Method
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0/controller/loadcss/" class="btn">
            loadCss Method
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
  data() {
    return {
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'Load Method',
      description: 'Learn more about load method from SENE_Controller class for Seme Framework 4',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0',
          text: '4.0'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0/controller',
          text: 'Controller',
        },
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
      "dateCreated": "2021-08-04T16:02:34+07:00",
      "datePublished": "2021-08-04T16:02:34+07:00",
      "dateModified": "2024-12-03T20:22:34+07:00",
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
