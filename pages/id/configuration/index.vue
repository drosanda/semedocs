<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Pengaturan</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Pengaturan</h1>
            <p>
              Pada versi 4.x.x, konfigurasi telah digabungkan menjadi file tunggal untuk penerapan yang mudah. Konfigurasi dasar tidak berbeda secara signifikan dengan versi 3.x.x, seperti database, controller, base url, dll. Kemudian konfigurasi tambahan juga telah ditambahkan, untuk menjaga konfigurasi khusus penerapan.
            </p>
            <h2 class="">Lokasi file pengaturan</h2>
            <p>
              Lokasi file untuk pengaturan seme framework ada di <code>app/config/</code>. Secara default, hanya ada file <code>development.php</code> didalamnya.
            </p>
            <h3 class="">Prioritas File Pengaturan</h3>
            <p>
              Seme Framework akan membaca konfigurasi dengan urutan ini:
            </p>
            <ol>
              <li><code>production.php</code></li>
              <li><code>staging.php</code></li>
              <li><code>development.php</code></li>
            </ol>
            <p>Isi dari setiap file dapat berbeda satu sama lain tergantung pada kebutuhan Anda.</p>
            <div class="message is-info">
                <div class="message-body">
                  <p>
                    Secara default Seme Framework hanya menyertakan <code>development.php</code> untuk tahap pengembangan.
                    Anda dapat membuat file baru dengan nama <code>staging.php</code> atau bahkan <code>production.php</code> di server <i>production</i>.
                  </p>
              </div>
            </div>
            <hr>
            <h2>Pengaturan Dasar</h2>
            <p>
              Berikut ini adalah daftar link untuk pengaturan dasar Seme Framework.
            </p>
            <ul>
              <li><NuxtLink to="/id/configuration/url">Pengaturan URL</NuxtLink></li>
              <li><NuxtLink to="/id/configuration/db-connection">Koneksi Database</NuxtLink></li>
            </ul>
            <h3>Session</h3>
            <p>
              Seme Framework telah ada pengaturan untuk kunci session key untuk menyekat sesi dari aplikasi yang lain.
              Pengaturan kunci session ini bersifat wajib meskipun nilai kunci session dapat diisi dengan nilai acak atau nilai tertentu selama tidak berbenturan dengan kunci session yang lain.
              Contoh <code>$saltkey = &#x27;s3mEFr4&#x27;;</code>.
            </p>

            <h3>Timezone (zona waktu)</h3>
            <p>
              Pengaturan zona waktu sangan penting untuk beberapa kebutuhan aplikasi tertentu.
              Nilai default dari zona waktu di Seme Framework adalah <code>$timezone = &#x27;Asia/Jakarta&#x27;;</code>.
              Untuk referensi nilai zona waktu dapa dilihat di <a href="https://www.php.net/manual/en/timezones.php">Daftar zona waktu</a> di website resmi PHP.
            </p>

            <h3>Pengaturan tambahan</h3>
            <p>
              Framework Seme sekarang mendukung nilai konfigurasi tambahan yang dapat diimplementasikan per pengaturan.
              Adapun untuk nilai pengaturan tambahan ada di array <code>$semevar</code>.
              Silakan diisi dengan kombinasi kunci dan nilai (name value pair), yang mana nilai dari variabel ini dapat berupa <code>string</code>, <code>array</code>, <code>object</code>, dan <code>number</code> tergantung dari kebutuhan.
            </p>
            <hr>

            <h2>Kode Sumber (<em>Source Codes</em>)</h2>
            <p>Berikut ini adalah kode sumber default untuk pengaturan Seme Framework pada tahap <code>development.php</code>.</p>

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
                <highlight-code lang="php">&#x3C;?php
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
          <nuxt-link to="/id/downloads/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Download dan Install
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/configuration/development/" class="btn">
            Fase Development
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    layout: 'id',
    data (){
      return {
        name: 'Seme Framework v4.0.0',
        suffix: ' - Dokumentasi Seme Framework v4.0.0',
        title: 'Configuration',
        description: 'Pelajari selengkapnya tentang pengaturan melalui dokumentasi Seme Framework versi 4.0.0.'
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
