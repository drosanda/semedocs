<template>
<div class="section">
  <div class="container">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul class="breadcrumbs">
        <li class=""><nuxt-link to="/">Home</nuxt-link></li>
        <li class=""><nuxt-link to="/configuration">Configuration</nuxt-link></li>
            <li class="unavailable">General</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Configuration General</h1>
          <p>In general configuration, you can change the default value of base url.</p>
          <pre>
$site = "http://".$_SERVER['HTTP_HOST']."/";

$sene_method = "PATH_INFO";//REQUEST_URI,PATH_INFO,ORIG_PATH_INFO,
</pre>
					<p>The $site variable should have trailing slash on last char to work properly.</p>
					<p>The $sene_method variable PATH_INFO value used on Localhost environment like on XAMPP. REQUEST_URI value used on Server Production like Nginx, Apache2, or Litespeed. This configuration also depend on <b>.htaccess</b> file and server configuration.</p>
        
          <h2 class="">The .htaccess</h2>
          <p>Here is the example of .htaccess file if used on root folder.</p>
          <pre>RewriteEngine on
RewriteCond $1 !^(index\.php|resources|robots\.txt)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php/$1 [L,QSA]
</pre>
					<hr>
					<h3>Sub Directory</h3>
					<p>The .htaccess on subfolder if the default one not working, you can use this option.</p>
					<pre>RewriteEngine on
RewriteBase /appfolder/
RewriteCond $1 !^(index\.php|resources|robots\.txt)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /appfolder/index.php/$1 [L]
</pre>
					<hr>
					<h2>Nginx Configuration</h2>
					<p>If you using nginx, you can just add this code to <b>location /</b>. Before that, you have to define index first and then ad try_files on location /.</p>
					<pre>#define index first if not yet
index index.php;
location / {
	#autoindex on;
	try_files $uri $uri/ /index.php?$args;
}</pre>
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

