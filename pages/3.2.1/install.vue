<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2.1/">3.2.1</NuxtLink></li>
          <li class="unavailable">Install</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Install</h1>
            <p>Clone the repository to your directory, or Download framework on github as ZIP and then extract from archive.</p>
            <hr>
            <h2>Configuring</h2>
            <p>Go to <code>app/config/config.php</code> and edit the file to suitable your choice.</p>
            <h3>File: config.php</h3>
            <p>There is default example for config.php in Seme Framework.</p>
            <pre>
$site = "http://".$_SERVER['HTTP_HOST']."/";
$sene_method = "PATH_INFO";//REQUEST_URI,PATH_INFO,ORIG_PATH_INFO
            </pre>
            <h3>$site</h3>
            <p>Change content of site variabel and then add slash on the last</p>
            <p>Default value is <code>"http://".$_SERVER['HTTP_HOST']."/"</code>.</p>
            <h3>$sene_method</h3>
            <p>If under default XAMPP config PATH_INFO is your best choice. But if in your production server, usually use REQUEST_URI.</p>
            <p>This configuration will depend on .htaccess file.</p>
            <hr>
            <h2>Htaccess configuration</h2>
            <p>If you using apache web server, the apache configuration is the most important to working with this framework. Default configuration:</p>
            <pre>
RewriteEngine on
RewriteCond $1 !^(index\.php|resources|robots\.txt)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php/$1 [L,QSA]
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
