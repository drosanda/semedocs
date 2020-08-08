<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/tutorial.html">Tutorial</NuxtLink></li>
          <li class="unavailable">Introduction</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Introduction</h1>
            <p>First thing first is setup the environment for your development such as IDE <a href="https://notepad-plus-plus.org/download/" target="_blank">Notepad++</a> or <a href="https://atom.io/" target="_blank">Atom</a> and then <a href="https://www.apachefriends.org/download.html" target="_blank">XAMPP</a>, and <a href="https://filezilla-project.org/download.php" target="_blank">FileZilla FTP client</a> if you use Linux or Mac environment. If you still unsure, you can reach our <a href="install-environment.html">development environment</a> guidance for better explanation.</p>

            <h2>Setup</h2>
            <p>After your development environment is set, download framework and the extract to XAMPP/htdocs/seme/ and go to XAMPP/htdocs/seme/app/config and choose config.php first and match the $site variable to 'http://localhost/seme/' and $sene_method using PATH_INFO if using XAMPP.</p>
            <p>Check XAMPP/htdocs/seme/.htaccess file is exist, if not you can refer to our guide about <a href="/config-config.html">htaccess</a>.</p>
            <p>Since the framework need at least one <b>working database connection</b>, so you need create your dummy database lets say <b>seme_db</b>. Leave it same name if you wont any conflict.</p>
            <p>Back to app/config directory and then change database.php file to fit your database connection. By default MySQL on XAMPP username is root without password. Fill the database name seme_db.</p>
            <h2>Testing</h2>
            <p>If you are done, you can open <code>http://localhost/seme/</code> through your browser and show <i>Thankyou for using seme framework</i> means its done.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    layout: 'blog'
    // page component definitions
  }
</script>

