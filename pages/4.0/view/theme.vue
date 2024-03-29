<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/view">View</NuxtLink></li>
          <li class="unavailable">Theme</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Theme</h1>
            <p>
              Theme is a set of files and directories that contain view for serving completed webpage interface.
              Seme Framework support theme creation by separating the view into 2 different parts, the reusable view component(s) and specific view component(s).
            </p>

            <h2 class="">The Specific View Component(s)</h2>
            <p>
              The Specific View Component(s) is the view component that only show up for a specific page.
              This specific View component(s) on Seme Framework usually separated by Controller class name and its method.
              Also this specific component will separated again by its content like specific content for Main HTML Content, JavaScript, and Additional HTML Content.
            </p>
            <h3 id="specific_js">Specific view Component for Javascript Content</h3>
            <p>
              In the seme framework, each specific JavaScript file will be stored in a view file ending in <code>_bottom.php</code>.
              Example for <code>Product</code> class controller and <code>detail</code> method, so the special view file for the javascript is <code>product/detail/home_bottom.php</code>.
            </p>
            <h3>Example</h3>
            <p>
              Here is the files and directories example for specific view component.
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
                  &#160;└── front/
                  &#160;&#160;├── home/
                  &#160;&#160;│ ├── home.php (for Main HTML)
                  &#160;&#160;│ ├── home_modal.php (for HTML Modal)
                  &#160;&#160;│ └── home_bottom.php (for JS)
                  &#160;&#160;├── product/
                  &#160;&#160;│ ├── home.php
                  &#160;&#160;│ ├── home_modal.php
                  &#160;&#160;│ ├── home_bottom.php
                  &#160;&#160;│ ├── detail.php
                  &#160;&#160;│ ├── detail_modal.php
                  &#160;&#160;│ └── detail_bottom.php
                  &#160;&#160;└── profile/
                  &#160;&#160;&#160; ├── home.php
                  &#160;&#160;&#160; ├── home_modal.php
                  &#160;&#160;&#160; └── home_bottom.php
                </highlight-code>
              </div>
            </div>

            <h2 class="">The Reusable View Component(s)</h2>
            <p>
              The reusable component(s) is the view component(s) that always included on each view, such as inside head tag, navigation bar, side menu, footer, and many more.
            </p>

            <h2 class="">Requirement</h2>
            <p>
              There is some requirements for building a theme in Seme Framework.
              Seme Framework requires a directory for a theme that will created inside <code>app/view</code> and its directory name will be repesented as theme name.
            </p>

            <h3>File and Directory Structure Requirement</h3>
            <p>
              And then Seme Framework theme requires a directory named <code>page</code>, a <code>layout file</code> inside page directory, <code>script.json</code> file, and <code>theme.json</code> file.
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
                app/
                └── view/
                &#160;└── [THEME_NAME]/
                &#160;&#160;├── theme.json
                &#160;&#160;├── script.json
                &#160;&#160;└── page/
                &#160;&#160;&#160;└── col-1.php
              </highlight-code>
            </div>
          </div>

          <h4>Theme Directory Name Rules</h4>
          <p>
            A theme required a directory inside <code>app/view</code>. The directory name represent the theme name.
            The theme name should in lowercase, and after that the number character can be followed. Only use underscore for special character.
          </p>

          <h4>The Layout File</h4>
          <p>
            Layout file is main file for the reusable component. The location of layout file is under <code>page</code> directory inside theme directory.
            This layout file can be loaded by using <NuxtLink to="/4.0/controller/loadlayout/">loadLayout()</NuxtLink> method from SENE_Controller class.
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
            This file are processed by <NuxtLink to="/4.0/controller/constructor/">SENE_Controller class constructor</NuxtLink> and outputed by <NuxtLink to="/4.0/controller/getadditional/">getAdditional()</NuxtLink>.
          </p>

          <h5>theme.json JSON Example</h5>
          <p>
            Here is the example codes for theme.json file using <b>json object</b>, this method only supported from Seme Framework 4.0.2 above.
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
            This file are processed by <NuxtLink to="/4.0/controller/constructor/">SENE_Controller class constructor</NuxtLink> and outputed by <NuxtLink to="/4.0/controller/getjsfooter/">getJsFooter()</NuxtLink>.
          </p>

          <h5>script.json Example</h5>
          <p>
            Here is the example codes for script.json file using <b>json object</b>,
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
        <nuxt-link to="/4.0/view/" class="btn">
          <i class="fa fa-chevron-left"></i>
          View
        </nuxt-link>
      </div>
      <div class="nav-bottom-right">
        <nuxt-link to="/4.0/view/layout/" class="btn">
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
  layout: 'v4.0',
  data (){
    return {
      base_url: '{{base_url}}',
      cdn_url: '{{cdn_url}}',
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'Theme',
      description: 'Learn how to create a theme using Seme Framework 4.',
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
        "dateCreated": "2021-08-16T07:53:33+07:00",
        "datePublished": "2021-08-16T07:53:33+07:00",
        "dateModified": "2021-08-16T07:53:33+07:00",
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
