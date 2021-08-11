<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/">4.0.x</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/controller/">Controller</NuxtLink></li>
          <li class="unavailable">getThemeElement method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">getThemeElement method</h1>
            <p>
              The getThemeElement method will <code>echo</code> the buffered view components that from another view component.
            </p>

            <h2>Basic Usage</h2>
            <p>The basic usage for getThemeElement method.</p>
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
                  getThemeElement(string $view_location [,array $__forward=array() [, int $cacheable=0]]): $this
                </highlight-code>
              </div>
            </div>

            <h3>Parameters</h3>
            <p>
              There is 2 requireds parameter and 1 optional parameter.
            </p>

            <h4>$view_location</h4>
            <p>
              Location relatives to a theme and file name of view without .php suffix.
            </p>

            <h4>$__forward</h4>
            <p>
              Data that will be passed to buffered view component.
            </p>

            <h4>$cacheable</h4>
            <p>
              This parameter value allowed the buffered view cached with expected time value in second(s).
            </p>

            <h2>Example Usage</h2>
            <p>
              Usually this method called inside a layout file. Here is the basic example for <code>getThemeElement</code> method.
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
                  &#x3C;html&#x3E;
                  &#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/html/head&#x22;,$__forward); ?&#x3E;
                  &#x3C;body&#x3E;
                    ...
                  &#x3C;/body&#x3E;
                  &#x3C;/html&#x3E;
                </highlight-code>
              </div>
            </div>

            <p>
              Here is the full file and directory structures.
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
                  |- app/
                  |-- view/
                  |--- front/
                  |---- page/
                  |----- col-1.php
                  |----- html/
                  |------ head.php
                </highlight-code>
              </div>
            </div>

            <p>
              Here is the source code of head.php file.
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
                  &#x3C;head&#x3E;
                  &#x3C;!-- Basic page needs --&#x3E;
                  &#x3C;meta charset=&#x22;utf-8&#x22;&#x3E;
                  &#x3C;!-- Mobile specific metas  --&#x3E;
                  &#x3C;meta name=&#x22;viewport&#x22; content=&#x22;width=device-width, initial-scale=1&#x22;&#x3E;

                  &#x3C;!--[if IE]&#x3E;
                    &#x3C;meta http-equiv=&#x22;X-UA-Compatible&#x22; content=&#x22;IE=edge&#x22;&#x3E;
                  &#x3C;![endif]--&#x3E;
                  &#x3C;meta http-equiv=&#x22;x-ua-compatible&#x22; content=&#x22;ie=edge&#x22;&#x3E;
                  &#x3C;title&#x3E;&#x3C;?php echo $this-&#x3E;getTitle(); ?&#x3E;&#x3C;/title&#x3E;
                  &#x3C;meta name=&#x22;language&#x22; content=&#x22;id&#x22; /&#x3E;
                  &#x3C;meta name=&#x22;description&#x22; content=&#x22;&#x3C;?php echo $this-&#x3E;getDescription(); ?&#x3E;&#x22;/&#x3E;
                  &#x3C;meta name=&#x22;keyword&#x22; content=&#x22;&#x3C;?php echo $this-&#x3E;getKeyword(); ?&#x3E;&#x22;/&#x3E;
                  &#x3C;meta name=&#x22;author&#x22; content=&#x22;&#x3C;?php echo $this-&#x3E;getAuthor(); ?&#x3E;&#x22;&#x3E;
                  &#x3C;link rel=&#x22;icon&#x22; href=&#x22;&#x3C;?php echo $this-&#x3E;getIcon(); ?&#x3E;&#x22; type=&#x22;image/x-icon&#x22; /&#x3E;
                  &#x3C;link rel=&#x22;shortcut icon&#x22; href=&#x22;&#x3C;?php echo $this-&#x3E;getShortcutIcon(); ?&#x3E;&#x22; type=&#x22;image/x-icon&#x22; /&#x3E;
                  &#x3C;meta name=&#x22;robots&#x22; content=&#x22;&#x3C;?php echo $this-&#x3E;getRobots(); ?&#x3E;&#x22; /&#x3E;

                  &#x3C;?php $this-&#x3E;getAdditionalBefore(); ?&#x3E;
                  &#x3C;?php $this-&#x3E;getAdditional(); ?&#x3E;
                  &#x3C;?php $this-&#x3E;getAdditionalAfter(); ?&#x3E;

                  &#x3C;/head&#x3E;
                </highlight-code>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/4.0/controller/getshortcuticon/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  getShortcutIcon
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/4.0/controller/getTitle/" class="btn">
                  getTitle
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
  data (){
    return {
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'getThemeElement method',
      description: 'Learn more about getThemeElement method on SENE_Controller class Seme Framework.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0',
          text: '4.0.2'
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
        "dateCreated": "2021-07-24T11:41:00+07:00",
        "datePublished": "2021-07-24T11:42:00+07:00",
        "dateModified": "2021-07-24T11:42:00+07:00",
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
