<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/configuration">Configuration</NuxtLink></li>
          <li class="unavailable">URL</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">URL</h1>
            <p>Seme Framework has some configuration for Uniform Resource Locator (URL).</p>
            <h2>Base URL</h2>
            <p>
              Base URL is required for avoiding mismatch target to a page, image, etc.
            </p>
            <p>
              The base url configuration existed on <code>$site</code> variable.
            </p>
            <p>
              Same as version 3.x.x the value of <b>must</b> be ended by trailing slash.
            </p>
            <p>
              Example:
            </p>
            <pre>$site = &#x22;http://localhost/seme-framework/&#x22;;</pre>
            <pre>$site = &#x22;https://www.example.com/&#x22;;</pre>
            <pre>$site = &#x22;http://localhost:8080/&#x22;;</pre>

            <b-message class="is-info">
              <p><b>Base URL with custom port</b></p>
              <p>if using <code>$_SERVER[&#x27;HTTP_HOST&#x27;]</code> there is no necessary to add suffix port after it.</p>
            </b-message>

            <b-message class="is-info">
              <p><b>Accessing base URL (<code>$site</code>) value</b></p>
              <p>The <NuxtLink to="/4.0.0/globals/functions/">base_url()</NuxtLink> global function is for returning value of <code>$site</code>.</p>
            </b-message>

            <h2>Admin Secret URL</h2>
            <p>The special base url configuration for admin that point to  <code>app/controller/admin/*</code>.</p>
            <p>The default value is <code>$admin_secret_url = &#x27;admin&#x27;;</code>.</p>
            <p>This is will relative to <code>$site</code> value.</p>
            <p>
              Example:
            </p>
            <pre>$admin_secret_url = &#x22;admin&#x22;;</pre>
            <pre>$admin_secret_url = &#x22;boss&#x22;;</pre>
            <pre>$admin_secret_url = &#x22;manajer&#x22;;</pre>

            <b-message class="is-info">
              <p><b>Accessing the secret admin URL (<code>$admin_secret_url</code>) value</b></p>
              <p>The <NuxtLink to="/4.0.0/globals/functions/">base_url_admin()</NuxtLink> global function is for returning value of <code>$site.$admin_secret_url</code>.</p>
            </b-message>

            <h2>URL Routing Method</h2>
            <p>
              The url routing method existed on <code>$method</code>, same as version 3.x.x the value consists of <code>REQUEST_URI</code>,<code>PATH_INFO</code>, and <code>ORIG_PATH_INFO</code>.
            </p>

            <h3>REQUEST_URI</h3>
            <p>
              The REQUEST_URI value suitable for NGINX, Apache on deployment server, LiteSpeed, etc.
            </p>

            <h3>PATH_INFO</h3>
            <p>
              The PATH_INFO value suitable for XAMPP development environtment.
            </p>

            <h3>ORIG_PATH_INFO</h3>
            <p>
              The ORIG_PATH_INFO value is for another server configuration.
            </p>

            <h2>CDN URL</h2>
            <p>The special base url for Content Delivery Network url.</p>
            <p>The default value is <code>$cdn_url = &#x27;&#x27;;</code></p>
            <p>
              Example:
            </p>
            <pre>$cdn_url = &#x22;http://cdn.cenah.co.id/seme-framework/&#x22;;</pre>

            <b-message class="is-info">
              <p><b>Accessing the CDN URL (<code>$cdn_url</code>) value</b></p>
              <p>The <NuxtLink to="/4.0.0/globals/functions/">$this->cdn_url()</NuxtLink> method form <code>SENE_Controller</code> class is for returning value of <code>$cdn_url</code> value.</p>
            </b-message>

            <hr>


          </div>

        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/4.0.0/downloads/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Download and Installation
            </b-button>
            <b-button tag="router-link" to="/4.0.0/configuration/development/" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Development Phase
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
        title: 'URL Configuration',
        description: 'Learn more about URL Configuration of Seme Framework version 4.0.0 through this documentation.'
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
