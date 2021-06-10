<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class="">URI Routing</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">URI Routing</h1>
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

            <b-notification type="is-primary" :closable="false">
              Important: Do not use leading/trailing slashes.
            </b-notification>
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
            <b-notification type="is-primary" :closable="false">
              Important:  The reserved routes must come before any wildcard routes.
            </b-notification>
            <p>Another reserved route is admin secret route. Please refer to <NuxtLink to="/4.0.0/uri_routing/admin">this docs</NuxtLink> for using admin secret routing.</p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/4.0.0/tutorial/introduction" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Tutorial: Introduction
            </b-button>
            <b-button tag="router-link" to="/4.0.0/uri_routing/admin" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Uri Routing: Admin
            </b-button>
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
      suffix: ' - Seme Framework v4.0.0 Documentation',
      title: 'URI Routing',
      description: 'Learn more about the URI Routing of Seme Framework version 4.0.0 through this documentation.'
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
  }
}
</script>
