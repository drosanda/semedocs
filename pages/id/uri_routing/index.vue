<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class="">URI Routing</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Perutean URI (<em>URI Routing</em>)</h1>
            <p>Typically there is a one-to-one relationship between a URL string and its corresponding controller class/method. The segments in a URI normally follow this pattern:</p>
            <ul>
              <li><code>example.com/class/method/id/</code></li>
            </ul>
            <p>In some instances, however, you may want to remap this relationship so that a different class/function can be called instead of the one corresponding to the URL.</p>

            <p>For example, lets say you want your URLs to have this prototype:</p>
            <ul>
              <li>example.com/product/1/</li>
              <li>example.com/product/2/</li>
              <li>example.com/product/3/</li>
              <li>example.com/product/4/</li>
            </ul>

            <p>Normally the second segment of the URL is reserved for the function name, but in the example above it instead has a product ID. To overcome this, Seme Framework allows you to remap the URI handler.</p>
            <hr>
            <h2>Setting custom URI Routing</h2>
            <p>Routing rules are defined in your <code>app/config/</code>. You can set this routing applied into production, staging, or development depend on your requirements.</p>
            <p>On each configuration files, Seme Framework has created the commented section for rewriting URI in the routing section.</p>
            <p>And then if you opened the configuration file, you'll see an array called <code>$routes</code> that permits you to specify your own routing criteria. Routes can either be specified using wildcards </p>
            <hr>
            <h2>Wildcards</h2>
            <p>A typical wildcard route might look something like this:</p>
            <code class="language-php">
              $routes['product/:num'] = "catalog/product_lookup";
            </code>

            <p>In a route, the array key contains the URI to be matched, while the array value contains the destination it should be re-routed to. In the above example, if the literal word "product" is found in the first segment of the URL, and a number is found in the second segment, the "catalog" class and the "product_lookup" method are instead used.</p>

            <p>You can match literal values or you can use two wildcard types:</p>
            <ul>
              <li><code>(:num)</code> will match a segment containing only numbers.</li>
              <li><code>(:any)</code> will match a segment containing any character.</li>
            </ul>

            <div class="panel">Note: Routes will run in the order they are defined. Higher routes will always take precedence over lower ones.</div>

            <h3>Examples</h3>
            <p>Here are a few routing examples:</p>
            <code>
              $routes['produk'] = "products";
            </code>
            <p>A URL containing the word "produk" in the first segment will be remapped to the "products" class.</p>

            <code>$routes['produk/ojan'] = "products/detail/15";</code>

            <p>A URL containing the segments produk/ojan will be remapped to the "products" class and the "detail" method. The ID will be set to "15".</p>

            <code>
              $routes['product/(:any)'] = "catalog/product_lookup";
            </code>
            <p>A URL with "product" as the first segment, and anything in the second will be remapped to the "catalog" class and the "product_lookup" method.</p>
            <code>
              $routes['product/(:num)'] = "catalog/product_lookup_by_id/$1";
            </code>
            <p>A URL with "product" as the first segment, and a number in the second will be remapped to the "catalog" class and the "product_lookup_by_id" method passing in the match as a variable to the function.</p>


            <div class="message is-info">
              <div class="message-body">
                <p>
                  Penting: jangan tambahkan garis miring (/) pada awalan atau akhiran .
                </p>
              </div>
            </div>

            <hr>
            <h3>Reserved Routes</h3>
            <p>There are two reserved routes:</p>
            <code>
              $routes['home'] = 'home';
            </code>
            <br>
            <p>This route indicates which controller class should be loaded if the URI contains no data, which will be the case when people load your root URL. In the above example, the "welcome" class would be loaded. You are encouraged to always have a default route otherwise a 404 page will appear by default.</p>
            <code>
              $routes['notfound'] = 'notfound';
            </code>
            <br>
            <p>This route indicates which controller class should be loaded if the requested controller is not found. By default it will executed <code>app/controller/notfound.php</code>. You can change it if necessary.</p>

            <div class="message is-info">
              <div class="message-body">
                <p>
                  Penting: Rute cadangan harus berada pada posisi paling awal sebelum rute global (<em>WildCards</em>).
                </p>
              </div>
            </div>

            <p>Another reserved route is admin secret route. Please refer to <NuxtLink to="/id/uri_routing/admin/">this docs</NuxtLink> for using admin secret routing.</p>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/tutorial/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Tutorial
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/uri_routing/admin/" class="btn">
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
  layout: 'id',
  data (){
    return {
      name: 'Seme Framework v4.0.0',
      suffix: ' - Dokumentasi Seme Framework v4.0.0',
      title: 'Perutean URI',
      description: 'Pelajari selengkapnya tentang the URI Routing of melalui dokumentasi Seme Framework versi 4.0.0.',
      breadcrumbs: [
        {
          url: process.env.ORIGIN_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.ORIGIN_URL || 'http://localhost:3001')+'/id/',
          text: 'ID',
        },
        {
          url: (process.env.ORIGIN_URL || 'http://localhost:3001')+'/id/uri_routing/',
          text: 'Perutean URI',
        }
      ]
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'id'
      },
      title: this.title+' - '+this.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
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
          (process.env.CDN_URL || 'http://localhost:3001').'/logo.png'
        ],
        "dateCreated": "2020-06-11T10:12:00+07:00",
        "datePublished": "2020-06-11T10:12:00+07:00",
        "dateModified": "2021-06-11T01:04:00+07:00",
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
