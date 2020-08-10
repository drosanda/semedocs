<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class="unavailable">Download</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Download</h1>
            <p>You can download Seme Framework through github repository:</p>
            <ul>
              <li><a href="https://github.com/drosanda/seme-framework" target="_blank">Seme Framework</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/requirements/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Requirements
          </b-button>
        </div>
        <div class="column">
          &nbsp;
        </div>
        <div class="column">
          &nbsp;
        </div>
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
