<template>
  <div class="section">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul class="breadcrumbs">
            <li class=""><nuxt-link to="/">Home</nuxt-link></li>
            <li class="unavailable">URI Routing</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">URI Routing</h1>
          <p>Typically there is a one-to-one relationship between a URL string and its corresponding controller class/method. The segments in a URI normally follow this pattern:</p>
          <code>
              example.com/class/function/id/
          </code>
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
          <p>Routing rules are defined in your <b>app/config/controller.php</b> file. In it you'll see an array called <b>$routes</b> that permits you to specify your own routing criteria. Routes can either be specified using wildcards </p>
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
$routes['journals'] = "blogs";
</code>
<p>A URL containing the word "journals" in the first segment will be remapped to the "blogs" class.</p>

<code>$routes['blog/joe'] = "blogs/users/34";</code>

<p>A URL containing the segments blog/joe will be remapped to the "blogs" class and the "users" method. The ID will be set to "34".</p>

<code>
$routes['product/(:any)'] = "catalog/product_lookup";
</code>
<p>A URL with "product" as the first segment, and anything in the second will be remapped to the "catalog" class and the "product_lookup" method.</p>
<code>
$routes['product/(:num)'] = "catalog/product_lookup_by_id/$1";
</code>
<p>A URL with "product" as the first segment, and a number in the second will be remapped to the "catalog" class and the "product_lookup_by_id" method passing in the match as a variable to the function.</p>

<div class="panel">Important: Do not use leading/trailing slashes.</div>
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
          <div class="panel">Important:  The reserved routes must come before any wildcard routes.</div>
					<p>Another reserved route is admin secret route. Please refer to <a href="/uri-routing-admin.html">this docs</a> for using admin secret routing.</p>
        </div>
      </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    layout: 'v3.1.0'
    // page component definitions
  }
</script>

