<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/configuration">Pengaturan</NuxtLink></li>
          <li class="unavailable">Production</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Production</h1>
            <p>
              On staging file, you can put your configuration for staging environment.
              Like database connection, base url, etc. Also, you can put any additional config values of staging phase only.
            </p>
            <p>
              You have to exclude the <code>app/config/production.php</code> from git by adding it on <code>.gitignore</code>.
              So, you can pull at any time in production server.
              But, be careful wrong configuration can deleted some files or directories.
            </p>
          </div>
        </div>

      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/configuration/staging/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Staging Phase
            </b-button>
            <b-button tag="router-link" to="/id/tutorial" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Tutorial
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
        title: 'Production Phase Configuration',
        description: 'Pelajari selengkapnya tentang how to configuring Seme Framework version 4.0.0 in production phase'
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
