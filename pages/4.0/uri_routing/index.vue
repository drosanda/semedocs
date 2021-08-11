<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.2</NuxtLink></li>
          <li class="unavailable">URI Routing</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">URI Routing</h1>
            <p>
              Typically there is a <b>one-to-one</b> relationship between a URL string and its corresponding controller class/method.
              The segments in a URI normally follow this pattern:
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
                  example.com/class/method/id/
                </highlight-code>
              </div>
            </div>

            <p>
              However in some instances, you may want to remap this relationship so that a different class/function can be called instead of the one corresponding to the URL.
              For example, lets say you want your URLs to have like this:
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
                  example.com/product/1/
                  example.com/product/2/
                  example.com/product/3/
                  example.com/product/4/
                </highlight-code>
              </div>
            </div>

            <p>
              Normally the second segment of the URL is reserved for the function name, but in the example above it instead has a product ID.
              To overcome this, Seme Framework allows you to remap the URI handler.
            </p>
            <hr>
            <h2>Setting custom URI Routing</h2>
            <p>
              Routing rules are defined in your <code>app/config/</code>.
              You can set this routing applied into production, staging, or development depend on your requirements.
              On each configuration files, Seme Framework has created the commented section for rewriting URI in the routing section.
              And then if you opened the configuration file, you'll see an array called <code>$routes</code> that permits you to specify your own routing criteria.
              Routes can either be specified using wildcards.
            </p>
            <hr>
            <h2>Wildcards</h2>
            <p>
              A typical wildcard route might look something like this:
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
                  $routes[&#x27;product/:num&#x27;] = &#x22;catalog/product_lookup&#x22;;
                </highlight-code>
              </div>
            </div>

            <p>
              In a route, the array key contains the URI to be matched.
              While the array value contains the destination it should be re-routed to.
              In the above example, if the literal word <code>product</code> is found in the first segment of the URL.
              And a number is found in the second segment of the url, so the <code>catalog</code> class and the <code>product_lookup</code> method are instead used.
            </p>

            <p>You can match literal values or you can use two wildcard types:</p>
            <ul>
              <li><code>(:num)</code> will match a segment containing only numbers.</li>
              <li><code>(:any)</code> will match a segment containing any character.</li>
            </ul>

            <div class="message is-danger">
              <div class="message-body">
                <p><b>Note</b></p>
                <p>
                  Routes will run in the order they are defined.
                  Higher routes will always take precedence over lower ones.
                </p>
              </div>
            </div>

            <h3>Examples</h3>
            <p>Here are a few routing examples:</p>
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
                  $routes[&#x27;produk&#x27;] = &#x22;products&#x22;;
                </highlight-code>
              </div>
            </div>
            <p>
              An URL containing the word <code>produk</code> in the first segment will be remapped to the <code>products</code> class or to the <code>directory</code> in a controller with same name.
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
                  $routes[&#x27;produk/ojan&#x27;] = &#x22;products/detail/15&#x22;;
                </highlight-code>
              </div>
            </div>

            <p>
              An URL containing the segments <code>produk/ojan</code> will be remapped to the <code>products</code> class and the <code>detail</code> method.
              And then the ID will be set to <code>15</code>.
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
                  $routes[&#x27;product/(:any)&#x27;] = &#x22;catalog/product_lookup&#x22;;
                </highlight-code>
              </div>
            </div>
            <p>An URL with <code>product</code> as the first segment and <code>any</code>thing in the second will be remapped to the <code>catalog</code> class and the <code>product_lookup</code> method.</p>
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
                  $routes[&#x27;product/(:num)&#x27;] = &#x22;catalog/product_lookup_by_id/$1&#x22;;
                </highlight-code>
              </div>
            </div>
            <p>
              An URL with <code>product</code> as the first segment, and a number in the second will be remapped to the <code>catalog</code> class and the <code>product_lookup_by_id</code> method passing in the match as a variable to the function.
            </p>

            <div class="message is-danger">
              <div class="message-body">
                <p><b>Important</b></p>
                <p>Do not use leading/trailing slashes in routes key or value.</p>
              </div>
            </div>
            <hr>
            <h3>Reserved Routes</h3>
            <p>There are two reserved routes:</p>
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
                  $routes[&#x27;home&#x27;] = &#x27;home&#x27;;
                </highlight-code>
              </div>
            </div>
            <br>
            <p>
              This route indicates which controller class should be loaded if the URI contains no data, which will be the case when people load your root URL. In the above example, the "welcome" class would be loaded. You are encouraged to always have a default route otherwise a 404 page will appear by default.
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
                  $routes[&#x27;notfound&#x27;] = &#x27;notfound&#x27;;
                </highlight-code>
              </div>
            </div>
            <br>
            <p>
              This route indicates which controller class should be loaded if the requested controller is not found.
              By default it will executed <code>app/controller/notfound.php</code>.
              You can change it if necessary.
            </p>
            <div class="message is-danger">
              <div class="message-body">
                <p><b>Important</b></p>
                <p>
                  The reserved routes must come before any wildcard routes.
                </p>
              </div>
            </div>
            <p>
              Another reserved route is admin <b>secret</b> route. Please refer to <NuxtLink to="/4.0/uri_routing/admin/">this docs</NuxtLink> for using admin secret routing.
            </p>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0/tutorial/static-page/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Tutorial: Static Page
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0/uri_routing/admin/" class="btn">
            Uri Routing: Admin
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
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'URI Routing',
      description: 'Learn more about URI Routing on Seme Framework 4.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0',
          text: '4.0.2',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0/uri_routing',
          text: 'URI Routing',
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
        "dateCreated": "2021-08-04T21:47:00+07:00",
        "datePublished": "2021-08-04T21:47:00+07:00",
        "dateModified": "2021-08-04T21:47:00+07:00",
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
