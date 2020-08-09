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
            <p>After that, your can proceed to configuration page</p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/download/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Download
          </b-button>
        </div>
        <div class="column">
          &nbsp;
        </div>
        <div class="column">
          &nbsp;
        </div>
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
