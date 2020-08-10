<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class="unavailable">Configuration</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Configuration</h1>
            <p>
              On version 4.x.x, the configuration has merged into single files for easy deployment.
              The basic configuration not significanlty differents with 3.x.x version, like database, controller, base url, etc.
              And then additional configurations has been added too, for keeping deployment specific configuration.
            </p>
            <h2 class="">Location</h2>
            <p>
              The location in <code>app/config/</code>. By default only <code>development.php</code> existed in repository.
            </p>
            <h3 class="">Prioritize</h3>
            <p>
              Seme Framework will read the configuration with this order:
            </p>
            <ol>
              <li><code>production.php</code></li>
              <li><code>staging.php</code></li>
              <li><code>development.php</code></li>
            </ol>
            <p>The content of each files can be differents each others depends on your requirements.</p>
            <hr>
            <h2>Basic configuration</h2>
            <p>
              By default Seme Framework only include <code>development.php</code> for development phase.
              You can created new files named <code>staging.php</code> or even <code>production.php</code> later on each server.
            </p>

            <h3>Base URL</h3>
            <p>
              The base url configuration existed on <code>$site</code>, same as version 3.x.x the value of <b>must</b> be ended by trailing slash.
            </p>
            <p>
              Example value <code>$site = &#x22;https://localhost/seme-framework/&#x22;;</code>.
            </p>

            <h3>URL Routing Method</h3>
            <p>
              The url routing method existed on <code>$method</code>, same as version 3.x.x the value consists of <code>REQUEST_URI</code>,<code>PATH_INFO</code>, and <code>ORIG_PATH_INFO</code>.
            </p>

            <h4>REQUEST_URI</h4>
            <p>
              The REQUEST_URI value suitable for NGINX, Apache on deployment server, LiteSpeed, etc.
            </p>

            <h4>PATH_INFO</h4>
            <p>
              The PATH_INFO value suitable for XAMPP development environtment.
            </p>

            <h4>ORIG_PATH_INFO</h4>
            <p>
              The ORIG_PATH_INFO value is for another server configuration.
            </p>

            <h3>Admin Secret URL</h3>
            <p>
              The special base url configuration for admin that point to  <code>app/controller/admin/*</code>.
              The default value is <code>$admin_secret_url = &#x27;admin&#x27;;</code>
            </p>

            <h3>CDN URL</h3>
            <p>
              The special base url for Content Delivery Network url.
              The default value is <code>$cdn_url = &#x27;&#x27;;</code>
            </p>

            <h3>Database Connection Configuration</h3>
            <p>
              Database connection configuration existed on <code>$db</code> array values, separated by 7 keys.
            </p>

            <h4>$db['host']</h4>
            <p>
              The hostname or IP Address value of database server connection.
            </p>

            <h4>$db['user']</h4>
            <p>
              The user value of database server connection.
            </p>

            <h4>$db['pass']</h4>
            <p>
              The password value of database server connection.
            </p>

            <h4>$db['name']</h4>
            <p>
              The name of database using by database server connection.
            </p>

            <h4>$db['port']</h4>
            <p>
              The connection port used by database server connection. Default value is <code>$db[&#x27;port&#x27;] = &#x27;3306&#x27;;</code>.
            </p>

            <h4>$db['charset']</h4>
            <p>
              The character set used by database server connection. The value can be <code>latin1</code> or <code>utf8</code>.
            </p>

            <h4>$db['engine']</h4>
            <p>
              The framework database engine. In version 4 only <code>MySQLi</code> is available, so the default value is <code>$db[&#x27;engine&#x27;] = &#x27;mysqli&#x27;;</code>.
            </p>

            <h3>Session</h3>
            <p>
              The session key configuration requires for dividing the session used by another apps.
              This value is mandatory, the filling value can be random or the desired value as long as has unique value.
              Example <code>$saltkey = &#x27;s3mEFr4&#x27;;</code>.
            </p>

            <h3>Timezone</h3>
            <p>
              The timezone value required by some apps that requiring timezone precisions.
              The default value is <code>$timezone = &#x27;Asia/Jakarta&#x27;;</code>.
              For the values, please refer to <a href="https://www.php.net/manual/en/timezones.php">List of Supported Timezones</a> on PHP Manual website.
            </p>

            <h3>Additional Configuration</h3>
            <p>
              Seme Framework are now support for additional configuration values that can be implemented per configuration.
              The Additional configurations existed on <code>$semevar</code> array.
              You can add the name value pair on this array.
              The value can be <code>string</code>, <code>array</code>, <code>object</code>, and <code>number</code> depends on your requirements.
            </p>
            <hr>
            <h2>Source Codes</h2>
            <p>Here is the default content of development.php</p>
            <pre>
&#x3C;?php
/**
 * Configuration file for Development version
 *   You can create one for:
 *   development.php
 *   staging.php
 *   production.php
 */

/****************************/
/* == Base Configuration == */
/* @var string */
/****************************/

/**
 * Site Base URL with http:// or https:// prefix and trailing slash
 * @var string
 */
$site = &#x22;http://&#x22;.$_SERVER[&#x27;HTTP_HOST&#x27;].&#x22;/&#x22;;
/**
 * URL parse method
 *   - REQUEST_URI, suitable for Nginx
 *   - PATH_INFO, suitable for XAMPP
 *   - ORIG_PATH_INFO
 * @var string
 */
$method = &#x22;PATH_INFO&#x22;;//REQUEST_URI,PATH_INFO,ORIG_PATH_INFO,
/**
 * Admin Secret re-routing
 * this is alias for app/controller/admin/*
 * @var string
 */
$admin_secret_url = &#x27;admin&#x27;;
/**
 * Base URL with http:// or https:// prefix and trailing slash
 * @var string
 */
$cdn_url = &#x27;&#x27;;

/********************************/
/* == Database Configuration == */
/* Database connection information */
/* @var array of string */
/********************************/
$db[&#x27;host&#x27;]  = &#x27;localhost&#x27;;
$db[&#x27;user&#x27;]  = &#x27;root&#x27;;
$db[&#x27;pass&#x27;]  = &#x27;&#x27;;
$db[&#x27;name&#x27;]  = &#x27;seme_framework&#x27;;
$db[&#x27;port&#x27;] = &#x27;3306&#x27;;
$db[&#x27;charset&#x27;] = &#x27;latin1&#x27;;
$db[&#x27;engine&#x27;] = &#x27;mysqli&#x27;;

/****************************/
/* == Session Configuration == */
/* @var string */
/****************************/
$saltkey = &#x27;s3mEFr4&#x27;;

/********************************/
/* == Timezone Configuration == */
/* @var string */
/****************************/
$timezone = &#x27;Asia/Jakarta&#x27;;

/********************************/
/* == Core Configuration == */
/* register your core class, and put it on: */
/*   - app/core/ */
/* all var $core_* value in lower case string*/
/* @var string */
/****************************/
$core_prefix = &#x27;&#x27;;
$core_controller = &#x27;&#x27;;
$core_model = &#x27;&#x27;;

/********************************/
/* == Controller Configuration == */
/* register your onboarding (main) controller */
/*   - make sure dont add any traing slash in array key of routes */
/*   - all var $controller_* value in lower case string */
/*   - example $routes[&#x27;produk/(:any)&#x27;] = &#x27;produk/detail/index/$1&#x27; */
/*   - example example $routes[&#x27;blog/id/(:num)/(:any)&#x27;] = &#x27;blog/detail/index/$1/$2&#x27;&#x27; */
/* @var string */
/****************************/
$controller_main=&#x27;home&#x27;;
$controller_404=&#x27;notfound&#x27;;

/********************************/
/* == Controller Re-Routing Configuration == */
/* make sure dont add any traing slash in array key of routes */
/* @var array of string */
/****************************/
// $routes[&#x27;produk/(:any)&#x27;] = &#x27;produk/detail/index/$1&#x27;;
// $routes[&#x27;blog/id/(:num)/(:any)&#x27;] = &#x27;blog/detail/index/$1/$2&#x27;;


/********************************/
/* == Another Configuration == */
/* configuration are in array of string format */
/*  - as name value pair */
/*  - accessing value by $this-&#x3E;semevar-&#x3E;key in controller extended class */
/*  - accessing value by $this-&#x3E;semevar-&#x3E;key in model extended class */
/****************************/

//firebase messaging
$semevar[&#x27;fcm&#x27;] = new stdClass();
$semevar[&#x27;fcm&#x27;]-&#x3E;version = &#x27;&#x27;;
$semevar[&#x27;fcm&#x27;]-&#x3E;apiKey = &#x27;&#x27;;
$semevar[&#x27;fcm&#x27;]-&#x3E;authDomain = &#x27;&#x27;;
$semevar[&#x27;fcm&#x27;]-&#x3E;databaseURL = &#x27;&#x27;;
$semevar[&#x27;fcm&#x27;]-&#x3E;projectId = &#x27;&#x27;;
$semevar[&#x27;fcm&#x27;]-&#x3E;storageBucket = &#x27;&#x27;;
$semevar[&#x27;fcm&#x27;]-&#x3E;messagingSenderId = &#x27;&#x27;;
$semevar[&#x27;fcm&#x27;]-&#x3E;appId = &#x27;&#x27;;

// example
$semevar[&#x27;site_name&#x27;] = &#x27;Seme Framework&#x27;;
$semevar[&#x27;email_from&#x27;] = &#x27;noreply@thecloudalert.com&#x27;;
$semevar[&#x27;email_reply&#x27;] = &#x27;hi@thecloudalert.com&#x27;;
$semevar[&#x27;app_name&#x27;] = &#x27;Seme Framework&#x27;;
$semevar[&#x27;app_logo&#x27;] = &#x27;Seme Framework&#x27;;

            </pre>

            <div class="columns">
              <div class="column">
                <b-button tag="router-link" to="/4.0.0/install/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
                  Install
                </b-button>
              </div>
              <div class="column is-2">&nbsp;</div>
              <div class="column">
                <b-button tag="router-link" to="/4.0.0/configuration/development/" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
                  Development
                </b-button>
              </div>
            </div>

          </div>
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
        title: 'Basic Configuration - Seme Framework v4.0.0'
      }
    },
    head() {
      return {
        title: this.title,
      }
    }
  }
</script>
