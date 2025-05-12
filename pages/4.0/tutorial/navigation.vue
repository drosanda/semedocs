<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/">4.0.3</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/tutorial/">Tutorial</NuxtLink></li>
          <li class="unavailable">Navigation</li>
        </ul>
      </nav>
      <div>
        <div class="column">
          <div class="content">
            <h1 class="">Create Web Page Navigation</h1>
            <p>
              Navigation is used in websites to navigate from one page to another.
              This navigation is usually located at the top of the webpage.
              In this tutorial, we will create a <code>view component</code> navigation bar using Bootstrap 3 CSS.
              So, make sure you have completed the second part of the Introduction tutorial at <NuxtLink to="/4.0/tutorial/introduction/#part2">Introduction Part 2</NuxtLink> before continuing with this tutorial.
              Thus, the view settings, view components, and theme should already be set up and running well.
            </p>

            <amp-img layout="responsive" width="2356" height="624" :src="navbar" alt="Navigation bar example"></amp-img>

            <h2>Create Navigation Bar</h2>
            <p>
              Now, we will create a new file on <code>app/view/front/layout/partials/navbar.php</code> with contains navbar bootstrap 3 CSS.
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
                  &#x3C;nav class=&#x22;navbar navbar-inverse&#x22;&#x3E;
  &#x3C;div class=&#x22;container-fluid&#x22;&#x3E;
    &#x3C;div class=&#x22;navbar-header&#x22;&#x3E;
      &#x3C;a class=&#x22;navbar-brand&#x22; href=&#x22;#&#x22;&#x3E;WebSiteName&#x3C;/a&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;ul class=&#x22;nav navbar-nav&#x22;&#x3E;
      &#x3C;li class=&#x22;active&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Home&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Page 1&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Page 2&#x3C;/a&#x3E;&#x3C;/li&#x3E;
    &#x3C;/ul&#x3E;
    &#x3C;ul class=&#x22;nav navbar-nav navbar-right&#x22;&#x3E;
      &#x3C;li&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;span class=&#x22;glyphicon glyphicon-user&#x22;&#x3E;&#x3C;/span&#x3E; Sign Up&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;span class=&#x22;glyphicon glyphicon-log-in&#x22;&#x3E;&#x3C;/span&#x3E; Login&#x3C;/a&#x3E;&#x3C;/li&#x3E;
    &#x3C;/ul&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/nav&#x3E;
                </highlight-code>
              </div>
            </div>

            <h2>Load navbar into <code>one_column</code> layout</h2>
            <p>
              Now, we need to load the navbar into a <code>one_column.php</code> layout using this code below.
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
  &#x3C;!-- load head.php file as partial html element --&#x3E;
  &#x3C;?php $this-&#x3E;getThemeElement(&#x27;layout/partials/head&#x27;, $__forward) ?&#x3E;
  &#x3C;body&#x3E;
    &#x3C;!-- load navbar.php inside body before main content --&#x3E;
    &#x3C;?php $this-&#x3E;getThemeElement(&#x27;layout/partials/navbar&#x27;, $__forward) ?&#x3E;
    
    &#x3C;?php $this-&#x3E;getThemeContent() ?&#x3E;

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

            <h2>Test integration of navbar</h2>
            <p>
              Now, its time to test the navbar was loaded properly or not by opening this url on your web browser
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
                  http://localhost/seme_framework/
                </highlight-code>
              </div>
            </div>


            <h2>Reference</h2>
            <p>
              Here is the references:
            </p>
            <ol>
              <li>
                <a href="https://www.w3schools.com/bootstrap/bootstrap_navbar.asp" target="_blank">Navbar Bootstrap 3 <i class="fa fa-external-link"></i></a>
              </li>
              <li>
                <NuxtLink to="/4.0/controller/getthemeelement/" target="_blank">getThemeElement <i class="fa fa-window-restore"></i></NuxtLink>
              </li>
              <li>
                <NuxtLink to="/4.0/controller/loadlayout/" target="_blank">loadLayout <i class="fa fa-window-restore"></i></NuxtLink>
              </li>
              <li>
                <NuxtLink to="/4.0/view/theme/" target="_blank">View Theme <i class="fa fa-window-restore"></i></NuxtLink>
              </li>
            </ol>

          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0/tutorial" class="btn">
            <i class="fa fa-chevron-left"></i>
            Tutorial: Notfound Page
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0/tutorial/login-register" class="btn">
            Tutorial: Login Register
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'id',
  data (){
    return {
      name: 'Seme Framework 4 Tutorial',
      suffix: ' - Seme Framework 4 Tutorial',
      title: 'Create Navigation',
      description: 'Learn how to create navigation on Seme Framework 4',
      navbar: require('~/assets/img/tutorial/navigation/navigation-bar.png'),
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id',
          text: 'ID',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0/tutorial',
          text: 'Tutorial',
        }
      ],
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'id'
      },
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
  jsonld() { this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
  const items = this.breadcrumbs.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': "WebPage",
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
      "dateCreated": "2025-01-15T16:53:01+07:00",
      "datePublished": "2025-01-15T16:53:01+07:00",
      "dateModified": "2025-01-15T21:53:01+07:00",
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
