<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.2</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/view">View</NuxtLink></li>
          <li class="unavailable">script json</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">The <code>script.json</code> File</h1>
            <p>
              The script.json file contain about script tags for javascript source file.
              This file are required for creating a theme.
            </p>

            <h2>Location</h2>
            <p>
              The location of this file is inside a theme directory.
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
                   └── [THEME_NAME]/
                    ├──  ...
                    ├──  script.json
                    └──  ...
                </highlight-code>
              </div>
            </div>

            <h2 class="">How It Works</h2>
            <p>
              The script.json file processed by <NuxtLink to="/4.0/controller/constructor/">SENE_Controller class constructor</NuxtLink> and outputed by <NuxtLink to="/4.0/controller/getjsfooter/">getJsFooter()</NuxtLink>.
            </p>

            <h5>Example Usage with JSON String</h5>
            <p>
              Here is the example codes for script.json file using <b>json string</b>.
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
                <highlight-code lang="javascript">
                  [
                    &#x22;&#x3C;script src=\&#x22;{{base_url}}skin/front/js/nprogress.js\&#x22;&#x3E;&#x3C;/script&#x3E;&#x22;,
                    &#x22;&#x3C;script src=\&#x22;{{base_url}}skin/front/js/moment.min.js\&#x22;&#x3E;&#x3C;/script&#x3E;&#x22;,
                    &#x22;&#x3C;script src=\&#x22;{{base_url}}skin/front/js/moment-with-locales.min.js\&#x22;&#x3E;&#x3C;/script&#x3E;&#x22;
                  ]
                </highlight-code>
              </div>
            </div>

            <h5>Example Usage with JSON Object</h5>
            <p>
              Here is the example codes for script.json file using <b>json object</b>.
            </p>
            <p>
              This method only supported from Seme Framework 4.0.2 above.
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
                <highlight-code lang="javascript">
                  {
                    &#x22;script&#x22;:
                    [
                      {
                        &#x22;src&#x22;: &#x22;https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js&#x22;
                      },
                      {
                        &#x22;src&#x22;: &#x22;&#x7B;&#x7B;base_url&#x7D;&#x7D;skin/v2/css/jquery.min.js&#x22;
                      },
                      {
                        &#x22;src&#x22;: &#x22;&#x7B;&#x7B;cdn_url&#x7D;&#x7D;assets/js/jquery.moneyFormat.min.js&#x22;
                      }
                    ]
                  }
                </highlight-code>
              </div>
            </div>

            <h2>The <code>{{cdn_url}}</code> and <code>{{base_url}}</code> Keyword</h2>
            <p>
              script.json support <code>{{cdn_url}}</code> and <code>{{base_url}}</code> keyword for replacing value from Seme Framework configuration.
            </p>

          </div>
        </div>

      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0/view/cdn_url/" class="btn">
            <i class="fa fa-chevron-left"></i>
            cdn_url
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0/view/theme_json/" class="btn">
            theme.json
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
  data (){
    return {
      base_url: '{{base_url}}',
      cdn_url: '{{cdn_url}}',
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'The script.json File',
      description: 'Learn how to use script.json file on Seme Framework 4 theme.',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0/view',
          text: 'View'
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
        "dateCreated": "2021-07-18T13:01:00+07:00",
        "datePublished": "2021-07-18T13:02:00+07:00",
        "dateModified": "2021-07-18T13:06:24+07:00",
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
