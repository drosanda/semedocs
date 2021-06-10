<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2.1/">3.2.1</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2.1/configuration">Configuration</NuxtLink></li>
          <li class="unavailable">config.php</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Configuration: config.php</h1>
            <p>In general configuration, you can change the default value of base url.</p>
            <pre><code v-highlight class="php">&#x3C;?php
$site = &#x27;http://&#x27;.$_SERVER[&#x27;HTTP_HOST&#x27;].&#x27;/&#x27;;

$sene_method = &#x27;PATH_INFO&#x27;;//REQUEST_URI,PATH_INFO,ORIG_PATH_INFO</code></pre>

  					<p>The <code>$site</code> variable should have trailing slash on last char to work properly.</p>
  					<p>The <code>$sene_method</code> variable PATH_INFO value used on Localhost environment like on XAMPP. REQUEST_URI value used on Server Production like Nginx, Apache2, or Litespeed. This configuration also depend on <b>.htaccess</b> file and server configuration.</p>

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

        <div class="columns">
          <div class="column">
            <div class="buttons">
              <b-button tag="router-link" to="/3.2.1/configuration/" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
                Configuration
              </b-button>
              <b-button tag="router-link" to="/3.2.1/configuration/controller" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
                Config: controller.php
              </b-button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </template>
<script>
export default {
    layout: 'v3.2.1',
    data() {
      return {
        name: 'Seme Framework v3.2.1',
        suffix: ' - Seme Framework v3.2.1 Documentation',
        title: 'Configuration: config.php',
        description: 'File config.php for Seme Framework version 3.x basic setting'
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
