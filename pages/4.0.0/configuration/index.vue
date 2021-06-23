<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
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
            <p>
              And then the further information about basic configuration:
            </p>
            <ul>
              <li><NuxtLink to="/4.0.0/configuration/url/">URL Configuration</NuxtLink></li>
              <li><NuxtLink to="/4.0.0/configuration/db-connection/">Database Connection</NuxtLink></li>
            </ul>
            <h3>Session</h3>
            <p>
              The session key configuration requires for dividing the session used by another apps.
              This value is mandatory, the filling value can be random or the desired value as long as has unique value.
              Example <code>$saltkey = &#x27;s3mEFr4&#x27;;</code>. Learn more about <NuxtLink to="/4.0.0/configuration/session/">session configuration</NuxtLink>.
            </p>

            <h3>Timezone</h3>
            <p>
              The timezone value required by some apps that requiring timezone precisions.
              The default value is <code>$timezone = &#x27;Asia/Jakarta&#x27;;</code>.
              For the values, please refer to <a href="https://www.php.net/manual/en/timezones.php" target="_blank">List of Supported Timezones <i class="fa fa-external-link"></i></a> on PHP Manual website.
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
            <p>Here is the default content for development.php file.</p>

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
                </highlight-code>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0.0/downloads/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Download and Installation
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0.0/configuration/development/" class="btn">
            Development Phase
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    layout: 'v4.0.0',
    data (){
      return {
        name: 'Seme Framework v4.0.0',
        suffix: ' - Seme Framework 4',
        title: 'Configuration',
        description: 'Learn more about Configuration of Seme Framework version 4.0.0 through this documentation.',
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0/',
            text: '4.0.0',
          }
        ]
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
    },
    jsonld() { this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
      const items = this.breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          "@type": "WebPage",
          '@id': item.url,
          name: item.text,
        },
      }));
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items,
        },
        {
          "@type": "NewsArticle",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path.replace(/\/+$/, '') + '/'
          },
          "headline": (this.headline || this.title),
          "image": [
            (process.env.CDN_URL || 'http://localhost:3001')+'/logo.png'
          ],
          "dateCreated": "2020-06-11T10:12:00+07:00",
          "datePublished": "2020-06-11T10:12:00+07:00",
          "dateModified": "2021-06-23T19:37:17+07:00",
          "author": {
            "@type": "Person",
            "gender": "Male",
            "name": "Daeng Rosanda, S.Kom",
            "alternateName": "Daeng Rosanda",
            "jobTitle": "Founder",
            "worksFor": {
              "@type": "Organization",
              "name": "Cipta Esensi Merenah",
              "email": "hi@cenah.co.id"
            }
          },
          "publisher": {
            "@type": "Organization",
            "name": "Cipta Esensi Merenah",
            "description": "Cipta Esensi Merenah (Cenah) is software house company focused on developing web-based application from Bandung, Indonesia.",
            "logo": {
              "@type": "ImageObject",
              "name": "logo Cipta Esensi Merenah",
              "url": "https://cdn.cenah.co.id/_nuxt/img/logo-wide.5420183.png",
              "width": "256px",
              "height": "62px"
            }
          },
          "description": this.description
        }
      ];
    }
  }
</script>
