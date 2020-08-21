<template>
  <div class="section">
    <div class="row container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/global">Global</NuxtLink></li>
          <li class="unavailable">Function</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Function</h1>
            <p>Seme Framework has default feature to overide all routes below <b>app/controller/admin</b>. This feature comes when user need some extra security for securing admin pages. Not only re-routes, Seme Framework has another base_url function for compatibilty routing between admin page. The function is <b>base_url_admin()</b>.</p>
            <h2>Condition</h2>
            <p>For using this feature, Seme Framework has some condition to meet such as:</p>
            <ol>
              <li><code>$site_url</code> have to fill correclty on each file configurations, e.g. <code>app/config/development.php</code>.</li>
              <li><code>$admin_secret_url</code> on admin routing section in each file configuration is set. Default value <b>admin</b>.</li>
              <li>Only work on controller below <code>app/controller/admin</code> folder.</li>
              <li>If there is a controller folder match with <code>$admin_secret_url</code> value, the controller under matched will be ignored.</li>
              <li>Use <code>base_url_admin</code> respectively instead of <code>base_url()</code>.</li>
            </ol>
          </div>
        </div>

      </div>


      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/uri_routing/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Uri Routing
          </b-button>
        </div>
        <div class="column is-2">&nbsp;</div>
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/constants" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Constants
          </b-button>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'v4.0.0',
  data() {
    return {
      title: 'Global: Functions - Seme Framework v4.0.0'
    }
  },
  head() {
    return {
      title: this.title,
    }
  }
}
</script>
