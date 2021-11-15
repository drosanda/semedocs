<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/controller">Controller</NuxtLink></li>
          <li class="unavailable">putThemeContent Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">putThemeContent Method</h1>
            <p>
              The <code>putThemeContent</code> method used for load a view component file in current theme.
              This method support stack for loading another view component.
            </p>

            <h2>Basic Usage</h2>
            <p>Here is the basic usage of <code>putThemeContent</code> method from <NuxtLink to="/4.0/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink> class.</p>
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
                  $this->putThemeContent(string $content_location[, array $data]): $this
                </highlight-code>
              </div>
            </div>
            <h3>Parameters</h3>
            <p>
              This method has required 1 parameter that is $content_location.
            </p>
            <h4>$content_location</h4>
            <p>
              The <code>$content_location</code> value can be a string that indicates view component location related to current theme.
              This value does not need <code>.php</code> suffix.
            </p>

            <h4>$data</h4>
            <p>
              The <code>$data</code> values contain <code>array of array</code> that will be passed to view as a variable.
              The <code>array key</code> from this value will be parsed as name of a variable.
            </p>

            <h2>Example</h2>
            <p>
              Here is the example implementation of putThemeContent method.
            </p>

            <h3>File and Directory structures</h3>
            <p>
              Before implementing the codes, we have to understand the file and directory structure that will used in example.
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
                  app/
                  └── view/
                   └── front/
                    ├──  home/
                    | ├──  slider.php
                    | └──  three_values.php
                    └──  page
                      └──  col-1.php
                </highlight-code>
              </div>
            </div>

            <h3>The Controller</h3>
            <p>
              On this code example shows implementation of putThemeContent method and how to passing variable to it.
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
                  class Home extends SENE_Controller
                  {
                    public function __construct()
                    {
                      parent::__construct();
                      $this-&#x3E;setTheme(&#x27;homepage&#x27;);
                    }
                    public function index()
                    {
                      $data = array();
                      $data['example'] = 'this is example';
                      $this-&#x3E;putThemeContent(&#x27;home/slider&#x27;,$data);
                      $this-&#x3E;putThemeContent(&#x27;home/three_values&#x27;,$data);
                      $this-&#x3E;loadLayout(&#x27;col-1&#x27;,$data);
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h3>View component</h3>
            <p>
              From this example, how view called <code>$data</code> as a variable on <code>home/slider.php</code> view component source codes.
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
                <highlight-code lang="html">
                  &#x3C;div&#x3E;
                    &#x3C;h1&#x3E;This is parsed value from data &#x3C;?=$example?&#x3E;&#x3C;/h1&#x3E;
                  &#x3C;/div&#x3E;
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p>
                  <b>Info</b>
                </p>
                <p>
                  The <NuxtLink to="/id/controller/putthemecontent/">putThemeContent <i class="fa fa-window-restore"></i></NuxtLink>, <NuxtLink to="/en/controller/putjscontent/ ">putJsContent <i class="fa fa-window-restore"></i></NuxtLink> and <NuxtLink to="/id/controller/loadlayout/">loadLayout <i class="fa fa-window- restore"></i></NuxtLink> methods has the ability to buffer view components.
                  So the view component(s) that collected from the methods are not directly show up on browser, but only displayed while called <NuxtLink to="/id/controller/render/">render <i class=" fa method fa-window-restore"></i></NuxtLink> method.
                </p>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/4.0/controller/putjsready/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  putJsReady
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/4.0/controller/render/" class="btn">
                  render
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
  data() {
    return {
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'putThemeContent Method',
      description: 'Learn more about putThemeContent method from SENE_Controller class on Seme Framework 4',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0/controller',
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
        "dateCreated": "2021-07-31T12:13:14+07:00",
        "datePublished": "2021-07-31T12:13:14+07:00",
        "dateModified": "2021-07-31T12:13:14+07:00",
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
