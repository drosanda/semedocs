<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class="unavailable">Global Variables and Functions</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Global Variables and Functions</h1>
            <p>Like the other framework, Seme Framework has several global Variables and Functions that you can use for your web app.</p>

            <h2 id="base_url">base_url()</h2>
            <p>This global function return full path url. Please make sure your <code>$base_url</code> are set properly for each <NuxtLink to="/4.0/configuration/">configurations</NuxtLink>.</p>

            <h2>base_url_admin()</h2>
            <p>This global function return full path url for admin secret url. Please make sure your <code>$base_url_admin</code> are set properly for each <NuxtLink to="/4.0/configuration/">configurations</NuxtLink>.</p>

            <h2>Controller::debug()</h2>
            <p>This global function will echo pre formatted text for debugging purpose.</p>

            <h2>dd()</h2>
            <p>Same as <code>Controller::debug()</code> this global function will echo pre formatted text for debugging purpose.</p>


            <h2>$__forward</h2>
            <p>This global variable used by view for forwarding variable between <NuxtLink to="/4.0/view">view</NuxtLink>.</p>
            
            <h3>Example</h3>
            <p>Lets say we have view structure like below:</p>

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
                    ├── page/
                    │ └── html/
                    │   ├── header.php
                    │   ├── navbar.php
                    │   └── foter.php
                    └── col-1.php
                </highlight-code>
              </div>
            </div>

            <p>On col-1.php we will call <code>html/header.php</code> and from then will called <code>html/navbar.php</code>.</p>

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
                  // ilustration
                  header.php &#x3C;----- navbar.php
                </highlight-code>
              </div>
            </div>

            <p>So that all the contents of the variables are passed inside <code>html/header.php</code> can be pass through into <code>html/header.php</code> by using <code>$__forward</code> variable.</p>
            
            <p>And here is the impementation.</p>

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
                  $this-&#x3E;getThemeElement(&#x27;page/html/navbar&#x27;, $__forward);
                  ?&#x3E;
                </highlight-code>
              </div>
            </div>

            <h2 id="fungsi_redir" class="">Redir Method (Redirect)</h2>
            <p>
              <code>{{redir}}</code> method purpose for redirecting current page in a controller to another url.
              This method has 3 parameters:
              <ul>
                  <li><code>target_url</code> *mandatory, contains string of target URL.</li>
                  <li><code>waiting_time</code> default: 0, wait time before redirect in second(s).</li>
                  <li><code>redirect_method</code> default: 0, if 1 redirect method using HTML otherwise using PHP header.</li>
              </ul>
            </p>

            <h3 class="">Example</h3>
            <p>
              Here is the example for redir method:
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
                  ...
                  redir(base_url('login'));
                  ...
                  ...
                  redir(base_url('login'), 5, 1);
                  ...
                </highlight-code>
              </div>
            </div>
            
          </div>
        </div>

      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0/constants/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Constants
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0/model/" class="btn">
            Class Model
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
      redir: 'redir',
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'Global Variables and Functions',
      description: 'Learn more about Global Variables and Functions of Seme Framework version 4 through this documentation.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0',
          text: '4.0'
        }
      ]
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
        "@type": "WebPage",
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
        "dateCreated": "2021-08-11T19:52:38+07:00",
        "datePublished": "2021-08-11T19:52:38+07:00",
        "dateModified": "2024-06-11T17:22:00+07:00",
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
