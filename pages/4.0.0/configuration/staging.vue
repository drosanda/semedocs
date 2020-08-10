<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/configuration">Configuration</NuxtLink></li>
          <li class="unavailable">Staging</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Staging</h1>
            <p>
              On staging file, you can put your configuration for staging environment.
              Like database connection, base url, etc. Also, you can put any additional config values of staging phase only.
            </p>
            <p>
              You have to exclude the <code>app/config/staging.php</code> from git by adding it on <code>.gitignore</code>.
              So, you can pull at any time in staging server.
              But, be careful wrong configuration can deleted some files or directories.
            </p>

            <div class="columns">
              <div class="column">
                <b-button tag="router-link" to="/4.0.0/configuration/development/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
                  Development
                </b-button>
              </div>
              <div class="column is-2">&nbsp;</div>
              <div class="column">
                <b-button tag="router-link" to="/4.0.0/configuration/production" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
                  Production
                </b-button>
              </div>
            </div>

          </div>
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
        title: 'Staging Phase Configuration - Seme Framework v4.0.0'
      }
    },
    head() {
      return {
        title: this.title,
      }
    }
  }
</script>
