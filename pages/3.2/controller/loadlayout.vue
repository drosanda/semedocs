<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2">3.2.x</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2/controller">Controller</NuxtLink></li>
          <li class="unavailable">loadLayout Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">loadLayout Method</h1>
            <p>
              This <code>loadLayout</code> method will be loaded a layout file or view component that file relatives in current theme into view buffer.
            </p>

            <h2>Basic Usage</h2>
            <p>Here is the basic usage of <code>loadLayout</code> method.</p>
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
                  $this-&#x3E;loadLayout(string $layout [, array $data = array()]): $this
                </highlight-code>
              </div>
            </div>

            <h3>Parameters</h3>
            <p>
              This method has 1 required parameter and 1 optional parameter.
            </p>

            <h4>$layout</h4>
            <p>
              The $layout value is string name of a file relatives to current theme.
            </p>

            <h5>Layout Requirements</h5>
            <p>The valid layout should only put inside <code>page</code> directory of the current theme.</p>
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
                    └── THEME_NAME/
                      └── page/
                        └── [LAYOUT_FILENAME].php
                </highlight-code>
              </div>
            </div>

            <h2>Example</h2>
            <p>Here is the example for <code>loadLayout</code> method:</p>
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
                      $this->setTheme(&#x27;front&#x27;);
                    }
                    public function index(){
                      $data = array();
                      $data['example'] = 'this is example';
                      $this-&#x3E;setTitle(&#x27;Blog home&#x27;);
                      $this-&#x3E;putThemeContent(&#x22;blog/home&#x22;,$data);
                      $this-&#x3E;putJsContent(&#x27;blog/home_bottom&#x27;,$data);
                      $this-&#x3E;loadLayout(&#x27;col-1&#x27;,$data);
                      $this-&#x3E;render();
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>So, the <code>front</code> theme and <code>col-1</code> layout should be existed on the directory structure.</p>
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
                      └── page/
                        └── col-1.php
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Info</b></p>
                <p>
                  The <code>putThemeContent</code>, <code>putJsContent</code>, and <code>render</code> method(s) has ability for buffered the html view.
                </p>
              </div>
            </div>

            <div class="message is-success">
              <div class="message-body">
                <p><b>Layout Naming Tips</b></p>
                <p>
                  If you confused how to decided the name of a layout, here is the tips with its filename:
                  <ul>
                    <li><b>col-1.php</b> is for a page with one column.</li>
                    <li><b>col-2-left.php</b> is for a page splitted by two column, and the menu are on left.</li>
                    <li><b>col-2-right.php</b> is for a page splitted by two column, and the menu are on right.</li>
                    <li><b>col-3.php</b> is for a page splitted by three column.</li>
                    <li><b>login.php</b> the special layout for login.</li>
                    <li><b>homepage.php</b> the special layout for homepage.</li>
                  </ul>
                </p>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/3.2/controller/loadcss/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  loadCss
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/3.2/controller/putjscontent/" class="btn">
                  putJsContent
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
  layout: 'v3.2',
  data() {
    return {
      name: 'Seme Framework 3.2',
      suffix: ' - Seme Framework 3.2',
      title: 'loadLayout Method',
      description: 'Learn more about loadLayout Method from SENE_Controller on Seme Framework 3.2',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2',
          text: '3.2.x'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2/controller',
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
        "dateCreated": "2021-11-18T06:31:00+07:00",
        "datePublished": "2021-11-18T06:31:00+07:00",
        "dateModified": "2021-11-18T06:31:00+07:00",
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
