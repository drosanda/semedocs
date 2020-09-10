<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><nuxt-link to="/">Home</nuxt-link></li>
          <li class=""><nuxt-link to="/configuration">Configuration</nuxt-link></li>
          <li class="unavailable">Database</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Configuration: Database</h1>
            <p>Like other framework, Seme Framework has single configuration for connecting to MySQL or MariaDB. Currently available engine is MySQLi.</p>
            <pre>
              $db['host']  = "localhost";
              $db['user']  = "root";
              $db['pass']  = "";
              $db['name']  = "database_name";
              $db['engine']= "mysqli"; //available mysql,mysqli,pdo
            </pre>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    layout: 'v3.1.0'
    // page component definitions
  }
</script>

