<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/configuration">Configuration</NuxtLink></li>
          <li class="unavailable">Development</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Development</h1>
            <p>
              On development file, you can put your configuration for development environment.
              Like database connection, base url, etc. Also, you can put any additional config values of development phase only.
            </p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/configuration/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Configuration
          </b-button>
        </div>
        <div class="column is-2">&nbsp;</div>
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/configuration/staging" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Staging
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
        title: 'Development Phase Configuration - Seme Framework v4.0.0'
      }
    },
    head() {
      return {
        title: this.title,
      }
    }
  }
</script>
