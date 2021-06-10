<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><nuxt-link to="/">Home</nuxt-link></li>
          <li class=""><nuxt-link to="/3.1.0/configuration">Configuration</nuxt-link></li>
          <li class="unavailable">timezone.php</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Configuration: timezone.php</h1>
            <p>The timezone configuration located at <code>app/config/timezone.php</code> please change it. The default timezone in this framework is GMT+7.</p>
            <h2>Example</h2>
            <pre><code v-highlight class="php">&#x3C;?php
date_default_timezone_set(&#x27;Asia/Jakarta&#x27;);</code></pre>
            <p>Timezone value refer to this link <a href="https://www.php.net/manual/en/timezones.php" target="_blank">https://www.php.net/manual/en/timezones.php</a></p>
          </div>
        </div>

      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/3.1.0/configuration/session/" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Configuration: session.php
            </b-button>
            <b-button tag="router-link" to="/3.1.0/controller/" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Controller
            </b-button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    layout: 'v3.1.0',
    data() {
      return {
        name: 'Seme Framework v3.1.0',
        suffix: ' - Seme Framework v3.1.0 Documentation',
        title: 'Configuration: timezone.php',
        description: 'File session.php for Seme Framework version 3.x timezone setting'
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
