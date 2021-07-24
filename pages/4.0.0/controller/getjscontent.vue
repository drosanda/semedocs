<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.2</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/controller/">Controller</NuxtLink></li>
          <li class="unavailable">getJsContent method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">getJsContent method</h1>
            <p>
              The getJsContent method will <code>echo</code> the buffered view components that contain javascript from <NuxtLink to="/4.0.0/controller/putjscontent/">putJsContent</NuxtLink>.
              This method usually called in a <NuxtLink to="/4.0.0/view/layout/">view layout</NuxtLink>.
            </p>

            <h2>Basic Usage</h2>
            <p>The basic usage for getJsContent method.</p>
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
                  $this->getJsContent(): void
                </highlight-code>
              </div>
            </div>

            <h3>Parameters</h3>
            <p>
              There is no parameter available for getIcon method.
            </p>

            <h2>Example Usage</h2>
            <p>
              Usually this method called inside a layout file. Here is the basic example for <code>getJsContent</code> method.
              Here is the content of <code>col-1.php</code> layout file.
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
                  &#x3C;!DOCTYPE html&#x3E;
                  &#x3C;html class=&#x22;no-js&#x22; lang=&#x22;id&#x22;&#x3E;
                    &#x3C;?php $this-&#x3E;getThemeElement(&#x27;page/html/head&#x27;,$__forward); ?&#x3E;
                    &#x3C;body class=&#x22;preloader-active&#x22;&#x3E;
                      &#x3C;?php $this-&#x3E;getThemeElement(&#x27;page/html/header&#x27;,$__forward); ?&#x3E;
                      &#x3C;?php $this-&#x3E;getThemeContent(); ?&#x3E;
                      &#x3C;?php $this-&#x3E;putJsContent(&#x27;page/html/footjs&#x27;,$__forward); ?&#x3E;

                      &#x3C;!-- jQuery, Bootstrap.js, jQuery plugins and Custom JS code --&#x3E;
                      &#x3C;?php $this-&#x3E;getJsFooter(); ?&#x3E;

                      &#x3C;!-- Load and execute javascript code used only in this page --&#x3E;
                      &#x3C;script&#x3E;
                        $(document).ready(function(e){
                          &#x3C;?php $this-&#x3E;getJsReady(); ?&#x3E;
                        });
                        &#x3C;?php $this-&#x3E;getJsContent(); ?&#x3E;
                      &#x3C;/script&#x3E;
                    &#x3C;/body&#x3E;
                  &#x3C;/html&#x3E;
                </highlight-code>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/4.0.0/controller/getIcon/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  getIcon
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/4.0.0/controller/getjsfooter/" class="btn">
                  getJSFooter
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
      title: 'getJsContent method',
      description: 'Learn more about getJsContent method from SENE_Controller class on Seme Framework 4.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0/',
          text: '4.0.0'
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
        "dateCreated": "2021-07-24T11:23:00+07:00",
        "datePublished": "2021-07-24T11:32:00+07:00",
        "dateModified": "2021-07-24T11:33:00+07:00",
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
