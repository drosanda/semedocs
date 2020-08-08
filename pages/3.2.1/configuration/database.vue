<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
<li class=""><NuxtLink to="/3.2.1/">3.2.1</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2.1/configuration">Configuration</NuxtLink></li>
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
    layout: 'v3.2.1'
    // page component definitions
  }
</script>

