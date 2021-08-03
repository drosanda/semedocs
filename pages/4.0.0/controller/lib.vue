<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/controller/">Controller</NuxtLink></li>
          <li class="unavailable">Lib method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Lib method</h1>
            <p>Lib method from class SENE_Controller is for loading a library class into controller.</p>
            <p>The library will be instantiate as part of properties on SENE_Controller.</p>
            <p>Without an alias, the instantiate library object will be same as filename without extension php.</p>

            <div class="message is-warning">
              <div class="message-body">
                <p>This <b>lib</b> method only affected for single file class library.</p>
                <p>For using 3rd party library like from <code>composer</code> you can read it from <NuxtLink to="/4.0.0/library/3rd-party">3rd library section</NuxtLink>.</p>
              </div>
            </div>

            <h2>Parameters</h2>
            <p>Load method has 3 parameter, there is the <code>library filename</code>, <code>library alias</code> and <code>embeeding type</code>.</p>
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
                  $this-&#x3E;lib(string $filename_location[, string $alias[, string $embeeding_type=&#x22;lib&#x22;]])
                </highlight-code>
              </div>
            </div>

            <h3>$filename_location</h3>
            <p>The method lib location always relatives to <code>kero/lib</code> directory.</p>
            <p>So, if we have a library class under <code>kero/lib/seme_email.php</code></p>
            <p>We have to fill the first parameter with <code>seme_email</code> without php extension.</p>
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
                  $this-&#x3E;load('seme_email');
                </highlight-code>
              </div>
            </div>
            <p>With this example the seme_email library will be part of SENE_Controller class as <code>seme_email</code> object</p>
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
                      $this-&#x3E;lib(&#x27;seme_email&#x27;);
                    }
                    public function index(){
                      //executing the seme_email object
                      $this-&#x3E;seme_email-&#x3E;from(&#x27;daeng@example.com&#x27;)
                      ....
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <div class="message is-info">
              <div class="message-body">
                <p>While loading the library from sub directory, the path prefix will not instantiate as object model name.</p>
                <p>So, be careful for choosing the naming class library or alias.</p>
                <p>If necessary, you can duplicate a library class to avoid conflict with extra suffix with number.</p>
                <p>example, <code>kero/lib/seme_email2.php</code> and then the class name <code>Seme_Email2</code>.</p>
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
                  $this-&#x3E;lib('seme_email','eml');
                </highlight-code>
              </div>
            </div>

            <p>With this example the seme_email will be part of SENE_Controller class as <code>eml</code> object</p>
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
                      $this-&#x3E;lib(&#x27;seme_email&#x27;,&#x27;eml&#x27;);
                    }
                    public function index(){
                      //executing the hello_model object
                      $this-&#x3E;eml-&#x3E;from(&#x27;daeng@example.com&#x27;)
                      ....
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <div class="message is-success">
              <div class="message-body">
                <p><b>Tips</b></p>
                <p>If you confused how to fill the alias name, you can get from first letter of each class name.</p>
                <p>example, <code>kero/lib/seme_email.php</code> and then the alias will be <code>se</code>.</p>
              </div>
            </div>

            <h3>$embeeding_type</h3>
            <p>The embeeding_type purpose is for enable autoinstantiate object or not.</p>
            <p>If value equal to <code>lib</code>, the library will be instantiated with same name as library filename.</p>
            <p>Otherwise, the library will be included only wihtout instantiated.</p>
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
                  $this-&#x3E;lib('seme_email','eml','inc');
                </highlight-code>
              </div>
            </div>
            <p>With this example the seme_email will be part of SENE_Controller class as <code>eml</code> object</p>
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
                      $this-&#x3E;lib(&#x27;seme_email&#x27;,&#x27;eml&#x27;,&#x27;inc&#x27;);
                    }
                    public function index(){
                      //executing the hello_model object
                      $eml = new Seme_Emal();
                      $eml-&#x3E;from(&#x27;daeng@example.com&#x27;);
                      ....
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <div class="message is-info">
              <div class="message-body">
                <p>If <code>$embeeding_type</code> value is not equal to <code>lib</code>, the second parameter will ignored.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0.0/controller/input/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Input Property
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0.0/controller/load/" class="btn">
            Load Method
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
        title: 'Lib Method from SENE_Controller',
        description: 'Learn more about lib Method from SENE_Controller on Seme Framework version 4.0.0',
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
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0/controller/',
            text: 'Controller'
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
          "dateCreated": "2021-07-12T22:04:21+07:00",
          "datePublished": "2021-07-12T22:04:22+07:00",
          "dateModified": "2021-07-12T22:04:30+07:00",
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
