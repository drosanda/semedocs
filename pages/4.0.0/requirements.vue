<template>
  <div class="section ">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class="unavailable">Requirements</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Requirements</h1>
            <p>This framework runs fine at PHP 5.6, but PHP 7.4.x is recommended regarding to its security performance.</p>
            <p>A database is required for most web application programming. Currently supported databases are:</p>
            <ul>
              <li>MySQL 5.1+ via the MySQLi drivers</li>
              <li>MariaDB version 5.5.x via the MySQLi drivers</li>
              <li>MariaDB version 10.x.x via the MySQLi drivers</li>
            </ul>
            <p>Since the framework requires the working connection to a MySQL database, it wont work unless you setup the database connection.</p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Version 4.0.0
          </b-button>
        </div>
        <div class="column is-2">&nbsp;</div>
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/download/" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Download
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
        title: 'Requirements - Seme Framework v4.0.0'
      }
    },
    head() {
      return {
        title: this.title,
      }
    }
  }
</script>
