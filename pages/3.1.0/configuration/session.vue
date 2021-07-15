<template>
  <div class="section">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul class="breadcrumbs">
        <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
        <li class=""><NuxtLink to="/3.1.0/">3.1.x</NuxtLink></li>
        <li class=""><NuxtLink to="/3.1.0/configuration/">Configuration</NuxtLink></li>
        <li class="unavailable">session.php</li>
      </ul>
    </nav>
    <div class="columns">
      <div class="column">
        <div class="content">
          <h1 class="">Configuration: session.php</h1>
          <p>Session configuration define the <code>$_SESSION[$key]</code> used by framework.</p>
          <p>If you installed 2 framework on same server with same login method and same session key, the app will be share same session.</p>
          <p>If you want to separated it, simply fill the session key value uniquely.</p>
          <p>The session configuration located at <code>app/config/session.php</code>.</p>
          <h2>Example</h2>
          <pre><code v-highlight class="php">&#x3C;?php
$saltkey = 's3M3Fr31$';</code></pre>
        </div>
      </div>

    </div>


    <div class="columns">
      <div class="column">
        <div class="buttons">
          <b-button tag="router-link" to="/3.1.0/configuration/database/" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Configuration: database.php
          </b-button>
          <b-button tag="router-link" to="/3.1.0/configuration/timezone/" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Configuration: timezone.php
          </b-button>
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
        title: 'Configuration: session.php',
        description: 'File session.php for Seme Framework version 3.x basic setting'
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
