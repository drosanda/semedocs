<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.2</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/controller/">Controller</NuxtLink></li>
          <li class="unavailable">loadCss</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">loadCss Method</h1>
            <p>
              The <code>loadCss</code> method purpose is for loading css file from a controller.
            </p>

            <h2>Basic Usage</h2>
            <p>
              Here is the basic usage <code>loadCss</code> method from <NuxtLink to="/4.0.0/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink> class.
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
                  $this-&#x3E;loadCss(string $src[, string $utype]): $this
                </highlight-code>
              </div>
            </div>

            <h3>Parameters</h3>
            <p>loadCSS has 1 required parameter and 1 optional parameter.</p>

            <h4>$src</h4>
            <p>
              The <code>$src</code> value can be an relative url by using <NuxtLink to="/4.0.0/globals/#base_url">base_url() <i class="fa fa-window-restore"></i></NuxtLink> function or using CDN url by using <NuxtLink to="/4.0.0/controller/cdn_url/">cdn_url() <i class="fa fa-window-restore"></i></NuxtLink> method or a plain external URL.
            </p>

            <h4>$utype</h4>
            <p>
              The <code>$utype</code> value indicates the load position of css after load.
              Here is the list of compatible values:
              <ul>
                <li><code>before</code>, its mean css will be loaded before <NuxtLink to="/4.0.0/view/theme_json/">theme.json <i class="fa fa-window-restore"></i></NuxtLink> list.</li>
                <li><code>after</code>, its mean css will be loaded after <NuxtLink to="/4.0.0/view/theme_json/">theme.json <i class="fa fa-window-restore"></i></NuxtLink> list.</li>
              </ul>
            </p>

            <h2>Example Usage</h2>
            <p>
              Here is the full example for <code>loadCss</code> method by using used external css resource.
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
                  $this-&#x3E;loadCss(&#x27;https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css&#x27;,&#x27;before&#x27;);
                </highlight-code>
              </div>
            </div>

            <h3>Relative CSS File</h3>
            <p>
              If want to used relatives css resource, simply use.
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
                  $this-&#x3E;loadCss(base_url(&#x27;assets/css/font-awesome.min.css&#x27;,&#x27;before&#x27;));
                </highlight-code>
              </div>
            </div>

            <h3>Full Example</h3>
            <p>
              Here is the full example on blog.php file controller.
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
                  class Blog extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      //external
                      $this-&#x3E;loadCss(&#x27;https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css&#x27;,&#x27;before&#x27;);
                      //relatives
                      $this-&#x3E;loadCss(base_url(&#x27;assets/css/font-awesome.min.css&#x27;,&#x27;before&#x27;));

                      //theme content and layout rendering
                      $this-&#x3E;putJSReady(&#x27;home/home_bottom&#x27;,$data);
                      $this-&#x3E;putThemeContent(&#x27;home/home&#x27;,$data);
                      $this-&#x3E;loadLayout(&#x27;col-1&#x27;,$data);
                      $this-&#x3E;render();
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <div class="message is-warning">
              <div class="message-body">
                <p><b>Caution</b></p>
                <p>Please make sure this method has been loaded from <NuxtLink to="/4.0.0/tutorial/introduction/#view_html_head">header html  <i class="fa fa-window-restore"></i></NuxtLink> template, with the following order:</p>
                <ul>
                  <li><NuxtLink to="/4.0.0/controller/getAdditionalBefore/">&#x3C;?php $this-&#x3E;getAdditionalBefore()?&#x3E; <i class="fa fa-window-restore"></i></NuxtLink></li>
                  <li><NuxtLink to="/4.0.0/controller/getAdditional/">&#x9;&#x3C;?php $this-&#x3E;getAdditional()?&#x3E; <i class="fa fa-window-restore"></i></NuxtLink></li>
                  <li><NuxtLink to="/4.0.0/controller/getAdditionalAfter/">&#x9;&#x3C;?php $this-&#x3E;getAdditionalAfter()?&#x3E; <i class="fa fa-window-restore"></i></NuxtLink></li>
                </ul>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/4.0.0/controller/load/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  Load method
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/4.0.0/controller/loadlayout/" class="btn">
                  loadLayout method
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
      title: 'loadCss Method',
      description: 'Learn more about loadCss method from SENE_Controller class on Seme Framework 4.',
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
        "dateCreated": "2021-08-04T13:24:00+07:00",
        "datePublished": "2021-08-04T13:24:00+07:00",
        "dateModified": "2021-08-04T13:24:00+07:00",
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
