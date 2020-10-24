<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">Bahasa Indonesia</NuxtLink></li>
          <li class=""><NuxtLink to="/id/configuration">Pengaturan</NuxtLink></li>
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
            <h2>Base URL with custom port</h2>
            <p>Seme Framework can be running with overriden default http port e.g. <code>8080</code></p>
            <p>Todo so, you have to edit the <code>$site</code> value on <code>app/config/development.php</code> file.</p>
            <pre>
$site = &#x22;http://localhost:8080/seme-framework/&#x22;;
            </pre>
            <p>But if using <code>$_SERVER[&#x27;HTTP_HOST&#x27;]</code> there is no necessary to add suffix port after it.</p>
            <pre>
$site = &#x22;http://&#x22;.$_SERVER[&#x27;HTTP_HOST&#x27;].&#x22;/seme-framework/&#x22;;
            </pre>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/configuration/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Basic Configuration
            </b-button>
            <b-button tag="router-link" to="/id/configuration/staging" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Staging Phase
            </b-button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    layout: 'id',
    data() {
      return {
        name: 'Seme Framework v4.0.0',
        suffix: ' - Dokumentasi Seme Framework v4.0.0',
        title: 'Development Phase Configuration',
        description: 'Pelajari selengkapnya tentang how to configuring Seme Framework version 4.0.0 in development phase'
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
