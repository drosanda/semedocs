<template>
  <div class="macwindow">
    <div class="titlebar">
      <div class="buttons">
        <div class="close">
          <a class="closebutton" href="#"><span><strong>x</strong></span></a>
          <!-- close button link -->
        </div>
        <div class="minimize">
          <a class="minimizebutton" href="#"><span><strong>&ndash;</strong></span></a>
          <!-- minimize button link -->
        </div>
        <div class="zoom">
          <a class="zoombutton" href="#"><span><strong>+</strong></span></a>
          <!-- zoom button link -->
        </div>
      </div>
    </div>
    <div class="maccontent">
      <highlight-code lang="php">
&#x3C;?php
/**
* # Development.php
* Configuration file for **development** environment.
*
* Seme Framework support for another environment, such as:
*   - &#x60;development.php&#x60;
*   - &#x60;staging.php&#x60;
*   - &#x60;production.php&#x60;
*
* ## &#x60;$site&#x60;
* Site Base URL with http:// or https:// prefix and trailing slash
*
* ## &#x60;$method&#x60;
* URL parse method
*   - REQUEST_URI, suitable for Nginx
*   - PATH_INFO, suitable for XAMPP
*   - ORIG_PATH_INFO
*
* ## &#x60;$admin_secret_url&#x60;
* Admin Secret url for re-routing &#x60;admin&#x60; directory on controller into &#x60;$admin_secret_url&#x60; on request path
*
* ## &#x60;$cdn_url&#x60;
* Base CDN URL with http:// or https:// prefix and trailing slash, optional
*
* ## $db
* Database array configuration
* - host
* - user
* - pass, password
* - engine
* - charset
* - port
*
* ## &#x60;$saltkey&#x60;
* Salt key for session secret
*
* ## &#x60;$timezone&#x60;
* Default time zone
*
* ## &#x60;$core_prefix&#x60;
* Core class prefix, please fill this before load php class on &#x60;app/core/&#x60;
*
* ## &#x60;$core_controller&#x60;
* Core class name for controller (without prefix)
*
* ## &#x60;$core_model&#x60;
* Core class name for mode (without prefix)
*
* ## &#x60;$controller_main&#x60;
* Default Main Controller for application onboarding
*
* ## &#x60;$controller_404&#x60;
* Default Main Controller for handling error 404 not found
*   Not found on Seme Framework caused by Undefined method or class controller
*
* ## &#x60;$semevar&#x60;
* Custom configuration value(s) that can be put on &#x60;$semevar[&#x27;keyname&#x27;] = {value}&#x60;, example:
*
* &#x60;&#x60;&#x60;php
* $semevar[&#x27;site_name&#x27;] = &#x27;Seme Framework&#x27;;
* &#x60;&#x60;&#x60;
*
* on controller, you can load the value by implementing code like this
* &#x60;&#x60;&#x60;php
* $this-&#x3E;config-&#x3E;semevar-&#x3E;site_name; //will contain &#x22;Seme Framework&#x22;
* &#x60;&#x60;&#x60;
*
* @package Application\Configuration
* @version 4.0.3
*
* @since 4.0.0
*/

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
/*  - accessing value by $this-&#x3E;config-&#x3E;semevar-&#x3E;keyname in controller extended class */
/*  - accessing value by $this-&#x3E;config-&#x3E;semevar-&#x3E;keyname in model extended class */
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
      </highlight-code>
    </div>
  </div>
</template>