<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class="unavailable">Downloads</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Downloads</h1>
            <p>You can find any download resources related to Seme Framework. You can get Seme Framework by downloading it through github:</p>
            <ul>
              <li><a href="https://github.com/drosanda/seme-framework" target="_blank">Seme Framework on Github</a></li>
            </ul>
            <h2>Working Examples</h2>
            <p>And then, if you want to use working examples instead. You can clone or download by clicking the following links:</p>
            <ul>
              <li><a href="https://github.com/drosanda/seme_adminhtml" target="_blank">Admin HTML template</a></li>
              <li><a href="https://github.com/drosanda/seme-indonesian-address-provider-api" target="_blank">API Address Provider (ID)</a></li>
              <li><a href="https://github.com/drosanda/seme_landing" target="_blank">Landing Page</a></li>
            </ul>
            <hr>
            <p>Or, you can just proceed to install page.</p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/requirements/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Requirements
          </b-button>
        </div>
        <div class="column is-2">&nbsp;</div>
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/install/" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Install
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
        title: 'Download - Seme Framework v4.0.0'
      }
    },
    head() {
      return {
        title: this.title,
      }
    }
  }
</script>
