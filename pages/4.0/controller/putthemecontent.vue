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
              The putThemeContent() method injects view content into a layout within the current theme. It supports nested view component loading and variable passing.
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
                  protected function putThemeContent(string $view_file_path = &#x27;&#x27;, array $forwarded_data = []): mixed
                </highlight-code>
              </div>
            </div>
            <h3>Parameters</h3>
            <p>
              This method has required 1 parameter that is $view_file_path.
            </p>
            <h4>$view_file_path</h4>
            <p>
              Relative theme location filename without .php extension.
            </p>

            <h4>$forwarded_data</h4>
            <p>
              Associative array of data to pass to the view. This parameter was optional.
            </p>

            <h3>Return Value</h3>
            <ul>
              <li>Returns 0 on successful view injection</li>
              <li>Returns instance of current class ($this) on failure</li>
              <li>Triggers E_USER_ERROR if view file cannot be loaded</li>
            </ul>

            <h3>Behavior</h3>
            <ul>
              <li>Constructs full view path using theme directory</li>
              <li>Checks if view file exists</li>
              <li>Creates temporary session storage for passed variables</li>
              <li>Extracts variables into current scope</li>
              <li>Buffers view content using output buffering</li>
              <li>Appends buffered content to theme content</li>
              <li>Cleans up temporary session data</li>
            </ul>

            <h3>Error Handling</h3>
            <p>The method will trigger a user error if:</p>
            <ul>
              <li>The specified view file does not exist</li>
              <li>The full path cannot be constructed</li>
            </ul>

            <h2>Examples</h2>
            <p>
              Here is the example implementation of putThemeContent method.
            </p>

            <h3>Example 1: Basic Usage, Directory Structure, and html view example code</h3>
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
                  class Home extends \SENE_Controller {
    public function __construct() {
        parent::__construct();
        $this-&#x3E;setTheme(&#x27;front&#x27;);
    }

    public function index() {
        $data = [
            &#x27;title&#x27; =&#x3E; &#x27;Welcome&#x27;
        ];
        $this-&#x3E;putThemeContent(&#x22;home/home&#x22;, $data);  // this method will be loaded views under app/view/front/home/bottom.php
        $this-&#x3E;putJsContent(&#x22;home/home_bottom&#x22;, $data);
        $this-&#x3E;loadLayout(&#x27;single_column_layout&#x27;, $data);
        $this-&#x3E;render();
    }
}
                </highlight-code>
              </div>
            </div>

            <p>Directory structure</p>
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
&#x2514;&#x2500;&#x2500; view/
    &#x2514;&#x2500;&#x2500; front/
        &#x2514;&#x2500;&#x2500; home/
            &#x2514;&#x2500;&#x2500; home.php
                </highlight-code>
              </div>
            </div>

            <p>Example of app/view/front/home/home.php file content</p>
            
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
                  &#x3C;header&#x3E;
    &#x3C;h1&#x3E;&#x3C;?= $title ?&#x3E;&#x3C;/h1&#x3E;
&#x3C;/header&#x3E;
                </highlight-code>
              </div>
            </div>

            <h2>Notes</h2>
            <ul>
              <li>View files must have .php extension</li>
              <li>View paths are relative to the theme directory</li>
              <li>Variables passed in $forwarded_data array become available in view scope</li>
              <li>Content is buffered and not immediately output</li>
              <li>Must call render method to display collected content</li>
            </ul>

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
        "dateModified": "2025-02-21T23:13:14+07:00",
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
