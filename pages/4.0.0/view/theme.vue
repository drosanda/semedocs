<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/view">View</NuxtLink></li>
          <li class="unavailable">Theme</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Theme</h1>
            <p>
              Seme Framework support theme creation by separating the view into 2 different view parts, the reusable view component(s) and specific view component(s).
            </p>

            <h2 class="">The Reusable Component(s)</h2>
            <p>
              The reusable component(s) is the view component(s) that always included on each view, such as inside head tag, navigation bar, side menu, footer, and many more.
            </p>

            <h2 class="">The Specific Component(s)</h2>
            <p>
              The Specific Component(s) is the view component that only show up for a specific page. This specific component(s) on Seme Framework usually separated by Controller class name and its method.
            </p>

            <h2 class="">How It Works</h2>
            <p>
              The view template on Seme Framework will be related to a directory name inside <code>app/view</code>.
              The reusable component(s) will be placed inside theme directory under <code>page/html</code> directory.
              The specific component(s) will be placed inside theme directory, the directory name will be represented the controller name, and then the method will be a file name inside the same directory.
            </p>

            <h3>Basic File and Directory Structure</h3>
            <p>
              Seme Framework requires a directory for a theme name.
              And then Seme Framework theme requires a layout file, script.json file, and theme.json file.
              For more detailed information you can see the directory structure ilustration below.
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
                | app/
                |- view/
                |-- [THEME_NAME]/
                |--- theme.json
                |--- script.json
                |--- page/
                |---- col-1.php (layout file)
              </highlight-code>
            </div>
          </div>

          <h4>Theme Directory</h4>
          <p>
            A directory inside <code>app/view</code> that represent the theme name.
            The directory theme name always in lowercase, only use underscore for special character.
          </p>

          <h4>The Layout File</h4>
          <p>
            Layout file is main file for the reusable component. The location of layout file is under <code>page</code> directory inside theme directory.
            This layout file can be loaded by using <NuxtLink to="/4.0.0/controller/loadlayout/">loadLayout()</NuxtLink> method from SENE_Controller class.
          </p>
          <p>
            Here is the example codes for a layout file named <code>col-1.php</code> file.
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
                &#x20;&#x3C;head&#x3E;
                &#x20;&#x20;&#x3C;title&#x3E;&#x3C;?=$this-&#x3E;getTitle()?&#x3E;&#x3C;/title&#x3E;

                &#x20;&#x20;&#x3C;!-- CSS link from theme.json --&#x3E;
                &#x20;&#x20;&#x3C;?php $this-&#x3E;getAdditional(); ?&#x3E;
                &#x20;&#x3C;/head&#x3E;
                &#x20;&#x3C;body&#x3E;
                &#x20;&#x20;&#x3C;?php $this-&#x3E;getThemeContent() ?&#x3E;

                &#x20;&#x20;&#x3C;!-- from script.json --&#x3E;
                &#x20;&#x20;&#x3C;?php $this-&#x3E;getJsFooter(); ?&#x3E;

                &#x20;&#x20;&#x3C;!-- Load and execute javascript --&#x3E;
                &#x20;&#x20;&#x3C;script&#x3E;
                &#x20;&#x20;&#x20;//javascript loaded from putJsReady()
                &#x20;&#x20;&#x20;&#x3C;?php $this-&#x3E;getJsReady(); ?&#x3E;

                &#x20;&#x20;&#x20;//javascript loaded from putJsContent()
                &#x20;&#x20;&#x20;&#x3C;?php $this-&#x3E;getJsContent(); ?&#x3E;
                &#x20;&#x3C;/script&#x3E;
                &#x3C;/body&#x3E;
                &#x3C;/html&#x3E;
              </highlight-code>
            </div>
          </div>

          <h4>theme.json File</h4>
          <p>
            The theme.json file contain about css links tags to use in inside head tag.
            This file are processed by <NuxtLink to="/4.0.0/controller/constructor/">SENE_Controller class constructor</NuxtLink> and outputed by <NuxtLink to="/4.0.0/controller/getadditional/">getAdditional()</NuxtLink>.
          </p>

          <h5>theme.json JSON String Example</h5>
          <p>
            Here is the example codes for theme.json file using <b>json string</b>.
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
                &#x22;&#x3C;link rel=\&#x22;stylesheet\&#x22; href=\&#x22;&#x7B;&#x7B;base_url&#x7D;&#x7D;skin/front/css/nprogress.css\&#x22; /&#x3E;&#x22;,
                &#x22;&#x3C;link rel=\&#x22;stylesheet\&#x22; href=\&#x22;https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css\&#x22; /&#x3E;&#x22;,
                &#x22;&#x3C;link rel=\&#x22;stylesheet\&#x22; href=\&#x22;&#x7B;&#x7B;cdn_url&#x7D;&#x7D;assets/css/jquery.gritter.css\&#x22; /&#x3E;&#x22;
                ]
              </highlight-code>
            </div>
          </div>

          <h5>theme.json JSON Object Example</h5>
          <p>
            Here is the example codes for theme.json file using <b>json object</b>.
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
                  &#x22;link&#x22;:
                  [
                    {
                      &#x22;rel&#x22;: &#x22;stylesheet&#x22;,
                      &#x22;href&#x22;: &#x22;https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css&#x22;
                    },
                    {
                      &#x22;rel&#x22;: &#x22;stylesheet&#x22;,
                      &#x22;href&#x22;: &#x22;&#x7B;&#x7B;cdn_url&#x7D;&#x7D;assets/css/jquery.gritter.css&#x22;
                    },
                    {
                      &#x22;rel&#x22;: &#x22;stylesheet&#x22;,
                      &#x22;href&#x22;: &#x22;&#x7B;&#x7B;base_url&#x7D;&#x7D;skin/v2/css/app.css&#x22;
                    }
                  ]
                }
              </highlight-code>
            </div>
          </div>

          <h4>script.json File</h4>
          <p>
            The script.json file contain about script tags for javascript source file.
            This file are processed by <NuxtLink to="/4.0.0/controller/constructor/">SENE_Controller class constructor</NuxtLink> and outputed by <NuxtLink to="/4.0.0/controller/getjsfooter/">getJsFooter()</NuxtLink>.
          </p>

          <h5>script.json JSON String Example</h5>
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

          <h5>script.json JSON Object Example</h5>
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

          <h4>Using <code>{{cdn_url}}</code> and <code>{{base_url}}</code> Keyword</h4>
          <p>
            Both of theme.json and script json, support <code>{{cdn_url}}</code> and <code>{{base_url}}</code> keyword for replacing value from Seme Framework configuration.
          </p>

        </div>
      </div>

    </div>

    <div class="nav-bottom">
      <div class="nav-bottom-left">
        <nuxt-link to="/4.0.0/view/" class="btn">
          <i class="fa fa-chevron-left"></i>
          View
        </nuxt-link>
      </div>
      <div class="nav-bottom-right">
        <nuxt-link to="/4.0.0/view/layout/" class="btn">
          View: Layout
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
  data (){
    return {
      base_url: '{{base_url}}',
      cdn_url: '{{cdn_url}}',
      name: 'Seme Framework v4.0.0',
      suffix: ' - Seme Framework 4',
      title: 'Theme',
      description: 'Learn how to create a theme using Seme Framework 4.',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0/view/',
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
        "dateCreated": "2021-07-18T10:01:00+07:00",
        "datePublished": "2021-07-18T10:02:00+07:00",
        "dateModified": "2021-07-18T12:18:31+07:00",
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
