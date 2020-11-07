<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><nuxt-link to="/">Home</nuxt-link></li>
          <li class=""><nuxt-link to="/3.1.0/configuration">Configuration</nuxt-link></li>
          <li class="unavailable">database.php</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Configuration: database.php</h1>
            <p>Like other framework, Seme Framework has single configuration for connecting to MySQL or MariaDB. Currently available engine is MySQLi.</p>
            <pre><code v-highlight class="php">&#x3C;?php
$db['host']  = "localhost";
$db['user']  = "root";
$db['pass']  = "";
$db['name']  = "database_name";
$db['engine']= "mysqli"; //available mysqli only</code></pre>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/3.1.0/configuration/core/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Configuration: core.php
            </b-button>
            <b-button tag="router-link" to="/3.1.0/configuration/session/" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Configuration: session.php
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
        title: 'Configuration: database.php',
        description: 'File database.php for Seme Framework version 3.x database connection setting'
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
