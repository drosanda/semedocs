<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.2</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/controller">Controller</NuxtLink></li>
          <li class="unavailable">Load method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Load method</h1>
            <p>Load method from class SENE_Controller is for loading a model class into controller.</p>
            <p>The model will be instantiate as part of properties on SENE_Controller.</p>
            <p>Without an alias, the instantiate model object will be same as filename without extension php.</p>
            <h2>Parameters</h2>
            <p>Load method has 2 parameter, there is the <code>model filename</code> and <code>model alias</code>.</p>
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
                  $this-&#x3E;load(string $filename_location[, string $alias])
                </highlight-code>
              </div>
            </div>
            <h3>$filename_location</h3>
            <p>The method load location always relatives to <code>app/model</code> directory.</p>
            <p>So, if we have a model class under <code>app/model/api/hello_model.php</code></p>
            <p>We have to fill the first parameter with <code>api/hello_model</code>.</p>
            <p>Here is the example:</p>
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
                  $this-&#x3E;load('api/hello_model');
                </highlight-code>
              </div>
            </div>
            <p>With this example the hello_model will be part of SENE_Controller class as <code>hello_model</code> object</p>
            <p>Here is the full example:</p>
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
                  class Blog extends SENE_Controller {
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
            <div class="message is-info">
              <div class="message-body">
                <p>While loading the model from sub directory, the path prefix will not instantiate as object model name.</p>
                <p>So, be careful for choosing the naming class model or alias.</p>
                <p>If necessary, you can duplicate a model class to avoid conflict with extra suffix with number.</p>
                <p>example, <code>app/model/api/hello_model2.php</code> and then the class name <code>Hello_Model2</code>.</p>
              </div>
            </div>

            <h3>$alias</h3>
            <p>The alias purpose is for shorting the name of model that we create into SENE_Controller.</p>
            <p>Alias can contain any alphanumeric and underscore.</p>
            <p>Here is the example:</p>
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
                  $this-&#x3E;load('api/hello_model','h');
                </highlight-code>
              </div>
            </div>
            <p>With this example the hello_model will be part of SENE_Controller class as <code>h</code> object</p>
            <p>Here is the full example:</p>
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
                  class Blog extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;load(&#x27;api/hello_model&#x27;,&#x27;h&#x27;);
                    }
                    public function index(){
                      //executing the hello_model object
                      print_r($this-&#x3E;h-&#x3E;get());
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
          </div>
        </div>
      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0.0/controller/lib/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Lib Method
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0.0/controller/loadCss/" class="btn">
            loadCSS Method
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
  data() {
    return {
      name: 'Seme Framework v4.0.0',
      suffix: ' - Seme Framework 4',
      title: 'SENE_Controller::load method',
      description: 'Learn more about load Method from SENE_Controller on Seme Framework version 4.0.0',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0/',
          text: '4.0.0',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0/controller/',
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
      "dateCreated": "2021-07-12T22:06:21+07:00",
      "datePublished": "2021-07-12T22:06:22+07:00",
      "dateModified": "2021-07-12T22:06:30+07:00",
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
