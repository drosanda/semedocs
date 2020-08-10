<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class="unavailable">Install</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Install</h1>
            <p>Clone the repository with git or download the ZIP archive and then extract to your desired directory.</p>
            <h2>Installing to XAMPP (Examples)</h2>
            <p>After download the archive, lets say put extracted files on:</p>
            <ul>
              <li><code>/Application/XAMPP/htdocs/seme_framework</code> on Mac, or</li>
              <li><code>/opt/lampp/htdocs/seme_framework</code> on Linux, or</li>
              <li><code>D:\xampp\htdocs\seme_framework</code> on Windows</li>
            </ul>
            <p>
              And then running the XAMPP and open the <code>http://locahost/seme_framework/</code>.
              If there does not show any error, then you can proceed to configuration page.
            </p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/downloads/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Downloads
          </b-button>
        </div>
        <div class="column is-2">&nbsp;</div>
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/configuration/" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Configuration
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
        title: 'Install - Seme Framework v3.2.1'
      }
    },
    head() {
      return {
        title: this.title,
      }
    }
  }
</script>
