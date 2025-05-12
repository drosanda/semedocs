<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial/">Tutorial</NuxtLink></li>
          <li class="unavailable">Admin</li>
        </ul>
      </nav>
      <div>
        <div class="column">
          <div class="content">
            <h1 class="">Intro Admin</h1>
            <p>
              Kali ini kita akan mencoba membuat halaman untuk admin di Seme Framework 4. Mari kita lihat contoh tampilan admin yang akan kita buat di bawah ini.
            </p>
            <div class="" style="padding-top: 1%; padding-left: 15%; padding-right: 15%; padding-top: 5%; ">
              <amp-img layout="responsive" width="1169" height="901px" :src="exampleResult" alt="Seme Framework hello world controller" style="box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72);
-webkit-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72);
-moz-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72);"></amp-img>
            </div>
            <hr>

            <h2 id="part1">Setup Admin URL</h2>
            <p>
              Sebelum memulai pastikan untuk memeriksa pengaturan URL Rahasia untuk admin. Ini bisa ditemukan pada file <code>app/config/development.php</code> di variable <code>$admin_secret_url</code>.
              Nilai default untuk ini adalah <code>admin</code>.
            </p>

            <h3>Penyesuaian konfigurasi</h3>
            <p>
              Kita akan coba ganti nilai dari <code>$admin_secret_url</code>.
              Nilai default untuk ini adalah <code>adminxx</code>.
            </p>

            <h3>Controller</h3>
            <p>
              Seme framework memiliki default controller yang bernama <code>home.php</code> dengan nama kelas yang sama yaitu <code>Home</code>.
              Pertama, buka file yang terletak di <code>app/controller/admin/home.php</code>.
              Apabila tidak ada file atau direktori tersebut, buatlah terlebih dahulu.
            </p>
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
                  class Home extends \SENE_Controller
                  {
                    public function __construct()
                    {
                      parent::__construct();
                    }
                    public function index()
                    {
                      echo 'Admin Hello World!';
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <p>
              Setelah itu, jalankan XAMPP dan buka <code>http://localhost/seme_framework/adminxx</code> melalui google chrome atau firefox.
            </p>
            
            <div class="" style="padding: 7%;">
              <amp-img layout="responsive" width="1127px" height="671px" alt="Hello World" :src="intro1" style="box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -webkit-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -moz-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72);"></amp-img>
            </div>
            
            <p>
              Jika tampilannya sudah sesuai seperti yang ada digambar, berarti pengaturan admin sudah benar. Kemudian kembalikan lagi pengaturan nilai menjadi <code>$admin_secret_url = &#x22;admin&#x22;;</code>.
            </p>
            <hr>

            <h2 id="part2">Membuat Tampilan Admin</h2>
            <p>
              Pada kali ini kita akan membuat tampilan untuk admin beserta temanya. Tapi sebelum kesana, kita akan membuat tema tampilan untuk admin terlebih dahulu.
              Pertama-tama kita akan setup untuk script.json dan theme.json sebagai syarat utama pembuatan tema tampilan.
              Kemudian setelah itu kita akan memisahkan halaman template HTML yang utuh, menjadi beberapa layout tampilan dan bagian / component tampilan.
              Kemudian terakhir kita akan membuat sample page untuk tampilan admin.
            </p>
            <div class="message is-success">
              <div class="message-body">
                <p>Tutorial ini menggunakan admin theme dari <a href="https://cenah.co.id/" target="_blank">cenah.co.id <i class="fa fa-external-link"></i></a> sebagai library CSS dan JS-nya.</p>
              </div>
            </div>
            <p>
              Berikut ini adalah gambaran struktur file yang akan kita buat untuk membuat tema dan tampilan di admin:
            </p>
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
                <highlight-code lang="shell">
                  app/
&#x251C;&#x2500;&#x2500; controller/
&#x2502;   &#x2514;&#x2500;&#x2500; admin/
&#x2502;       &#x2514;&#x2500;&#x2500; home.php
&#x2514;&#x2500;&#x2500; view/
    &#x251C;&#x2500;&#x2500; admin/
    &#x2502;   &#x251C;&#x2500;&#x2500; home/
    &#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; home.php
    &#x2502;   &#x2502;   &#x2514;&#x2500;&#x2500; home_bottom.php
    &#x2502;   &#x251C;&#x2500;&#x2500; theme.json
    &#x2502;   &#x251C;&#x2500;&#x2500; script.json
    &#x2502;   &#x2514;&#x2500;&#x2500; partials/
    &#x2502;       &#x251C;&#x2500;&#x2500; col-1.php
    &#x2502;       &#x251C;&#x2500;&#x2500; col-2-left.php
    &#x2502;       &#x251C;&#x2500;&#x2500; head.php
    &#x2502;       &#x251C;&#x2500;&#x2500; header.php
    &#x2502;       &#x251C;&#x2500;&#x2500; global_message.php
    &#x2502;       &#x251C;&#x2500;&#x2500; navbar.php
    &#x2502;       &#x251C;&#x2500;&#x2500; sidebar.php
    &#x2502;       &#x251C;&#x2500;&#x2500; sidebar_alt.php
    &#x2502;       &#x251C;&#x2500;&#x2500; foot.php
    &#x2502;       &#x2514;&#x2500;&#x2500; footer.php
    &#x2514;&#x2500;&#x2500; front/
        &#x2514;&#x2500;&#x2500; ....
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p>Periksa direktori <code>app/controller/admin/</code> apabila belum ada, silakan buat direktori tersebut.</p>
                <p>Periksa direktori <code>app/view/admin/</code> apabila belum ada, silakan buat direktori tersebut.</p>
                <p>Periksa direktori <code>app/view/admin/page/</code> apabila belum ada, silakan buat direktori tersebut.</p>
                <p>Periksa direktori <code>app/view/admin/page/partials/</code> apabila belum ada, silakan buat direktori tersebut.</p>
              </div>
            </div>

            <h3>Pembuatan File script.json &amp; theme.json</h3>
            <p>
              File <code>script.json</code> digunakan untuk mendefinisikan file JavaScript (JS) apa saja yang akan digunakan oleh tema.
              Buka file yang terletak di <code>app/view/admin/script.json</code>.
              File ini akan eksekusi pada bagian akhir sebelum tutup BODY pada html.
              Apabila belum ada, silakan buat file tersebut dan <i>paste</i>-kan isinya dari kode dibawah ini.
            </p>

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
{
  &#x22;script&#x22;: [
    {
      &#x22;src&#x22;: &#x22;https://skin-cenah.b-cdn.net/js/vendor/jquery.min.js&#x22;
    },
    {
      &#x22;src&#x22;: &#x22;https://skin-cenah.b-cdn.net/js/vendor/bootstrap.min.js&#x22;
    },
    {
      &#x22;src&#x22;: &#x22;https://skin-cenah.b-cdn.net/js/plugins.js?v=0.0.2&#x22;
    },
    {
      &#x22;src&#x22;: &#x22;https://skin-cenah.b-cdn.net/js/app.js&#x22;
    }
  ]
}
                </highlight-code>
              </div>
            </div>
            <p>
              Kemudian setelah itu kita akan membuat File <code>theme.json</code> digunakan untuk mendefinisikan file CSS apa saja yang akan digunakan oleh tema. 
              Buka file yang terletak di <code>app/view/admin/theme.json</code>.
              File ini akan eksekusi pada bagian HEAD html.
              Apabila belum ada, silakan buat file tersebut dan <i>paste</i>-kan isinya dari kode dibawah ini.
            </p>

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
{
    &#x22;link&#x22;: [
        {
            &#x22;rel&#x22;: &#x22;stylesheet&#x22;,
            &#x22;href&#x22;: &#x22;https://skin-cenah.b-cdn.net/css/bootstrap.min.css&#x22;
        },
        {
            &#x22;rel&#x22;: &#x22;stylesheet&#x22;,
            &#x22;href&#x22;: &#x22;https://skin-cenah.b-cdn.net/css/plugins.css&#x22;
        },
        {
            &#x22;rel&#x22;: &#x22;stylesheet&#x22;,
            &#x22;href&#x22;: &#x22;https://skin-cenah.b-cdn.net/css/main.css&#x22;
        },
        {
            &#x22;rel&#x22;: &#x22;stylesheet&#x22;,
            &#x22;href&#x22;: &#x22;https://skin-cenah.b-cdn.net/css/themes.css&#x22;
        },
        {
            &#x22;rel&#x22;: &#x22;stylesheet&#x22;,
            &#x22;href&#x22;: &#x22;https://skin-cenah.b-cdn.net/css/themes/erplite.css&#x22;
        }
    ]
}
                </highlight-code>
              </div>
            </div>
            <p>
              Pelajari selengkapnya tentang <NuxtLink to="/id/view/script_json/" target="_blank">script.json <i class="fa fa-window-restore"></i></NuxtLink>.
            </p>

            <h3>Membuat HTML wrapper atau HTML layout</h3>
            <p>
              Untuk layout HTML utama pada admin, kita akan membuat 2 jenis yaitu 1 kolom dan 2 kolom dengan menu disamping kiri.
              Sekarang kita akan membuat untuk 1 kolom menu dulu di file <code>app/view/admin/page/col-1.php</code>.
              Kemudian copy <i>paste</i>-kan isinya dari kode dibawah ini.
            </p>

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
                <highlight-code lang="html">
&#x3C;!DOCTYPE html&#x3E;
&#x3C;html class=&#x22;no-js&#x22; lang=&#x22;en&#x22;&#x3E;
&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/partials/head&#x22;,$__forward); ?&#x3E;
&#x9;&#x3C;body&#x3E;
&#x9;&#x9;&#x3C;!-- Main Container --&#x3E;
&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeContent(); ?&#x3E;
&#x9;&#x9;&#x3C;!-- Main Container End --&#x3E;
&#x9;&#x9;&#x3C;!-- jQuery, Bootstrap.js, jQuery plugins and Custom JS code --&#x3E;
&#x9;&#x9;&#x3C;?php $this-&#x3E;getJsFooter(); ?&#x3E;
&#x9;&#x9;&#x3C;!-- Load and execute javascript code used only in this page --&#x3E;
&#x9;&#x9;&#x3C;script&#x3E;
&#x9;&#x9;var base_url = &#x27;&#x3C;?=base_url_admin()?&#x3E;&#x27;;
&#x9;&#x9;var Login = function(){
&#x9;&#x9;&#x9;return {
&#x9;&#x9;&#x9;&#x9;init: function(){
&#x9;&#x9;&#x9;&#x9;}
&#x9;&#x9;&#x9;}
&#x9;&#x9;}();
&#x9;&#x9;&#x9;$(document).ready(function(e){
&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getJsReady(); ?&#x3E;
&#x9;&#x9;&#x9;});
&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getJsContent(); ?&#x3E;
&#x9;&#x9;&#x3C;/script&#x3E;
&#x9;&#x3C;/body&#x3E;
&#x3C;/html&#x3E;
                </highlight-code>
              </div>
            </div>

            <p>
              Setelah itu kita akan membuat layout 2 kolom dengan menu di samping kiri pada file <code>app/view/admin/page/col-2-left.php</code>.
              Jika belum ada file-nya, buatlah file tersebut kemudian copy <i>paste</i>-kan isinya dari kode dibawah ini.
            </p>
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
                <highlight-code lang="html">
&#x3C;!DOCTYPE html&#x3E;
&#x3C;html class=&#x22;no-js&#x22; lang=&#x22;en&#x22;&#x3E;
&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/partials/head&#x22;,$__forward); ?&#x3E;
&#x9;&#x3C;body&#x3E;
&#x9;&#x9;&#x3C;!-- Page Wrapper --&#x3E;
&#x9;&#x9;&#x3C;div id=&#x22;page-wrapper&#x22; class=&#x22;page-loading&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- Preloader --&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;preloader themed-background&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;h1 class=&#x22;push-top-bottom text-light text-center&#x22; &#x3E;&#x3C;strong&#x3E;&#x3C;?=$this-&#x3E;config-&#x3E;semevar-&#x3E;app_name;?&#x3E;&#x3C;/strong&#x3E;&#x3C;br&#x3E;&#x3C;small&#x3E;Loading...&#x3C;/small&#x3E;&#x3C;/h1&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;inner&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h3 class=&#x22;text-light visible-lt-ie10&#x22;&#x3E;&#x3C;strong&#x3E;Loading..&#x3C;/strong&#x3E;&#x3C;/h3&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;preloader-spinner hidden-lt-ie10&#x22;&#x3E;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- END Preloader --&#x3E;
&#x9;&#x9;&#x9;&#x3C;div id=&#x22;page-container&#x22; class=&#x22;sidebar-mini sidebar-visible-lg-mini&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Alternative Sidebar --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/partials/sidebar_alt&#x22;,$__forward); ?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;!-- END Alternative Sidebar --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Main Sidebar --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/partials/sidebar&#x22;,$__forward); ?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;!-- END Main Sidebar --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Main Container --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div id=&#x22;main-container&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Header --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/partials/header&#x22;,$__forward); ?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- END Header --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Main Container --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Global Message --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/partials/global_message&#x22;,$__forward); ?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Global Message --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeContent(); ?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Main Container End --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Footer --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/partials/footer&#x22;,$__forward); ?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- End Footer --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;!-- End Main Container --&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- End Page Container --&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;!-- End Page Wrapper --&#x3E;
&#x9;&#x9;&#x3C;!-- Foot --&#x3E;
&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/partials/foot&#x22;,$__forward); ?&#x3E;
&#x9;&#x9;&#x3C;!-- End Foot --&#x3E;
&#x9;&#x9;&#x3C;div id=&#x22;modal-preloader&#x22; class=&#x22;modal fade&#x22; tabindex=&#x22;-1&#x22; role=&#x22;dialog&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;modal-dialog slideInDown animated&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;modal-content&#x22; style=&#x22;background-color: #000;color: #fff;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Modal Header --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;modal-header text-center&#x22; style=&#x22;border: none;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h2 class=&#x22;modal-title&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-spin fa-refresh&#x22;&#x3E;&#x3C;/i&#x3E; Loading...&#x3C;/h2&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- END Modal Header --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;!-- jQuery, Bootstrap.js, jQuery plugins and Custom JS code --&#x3E;
&#x9;&#x9;&#x3C;?php $this-&#x3E;getJsFooter(); ?&#x3E;
&#x9;&#x9;&#x3C;!-- Load and execute javascript code used only in this page --&#x3E;
&#x9;&#x9;&#x3C;script&#x3E;
&#x9;&#x9;&#x9;var from_user_id = &#x27;&#x27;;
&#x9;&#x9;&#x9;var from_user_nama = &#x27;&#x27;;
&#x9;&#x9;&#x9;var to_user_id = &#x27;&#x27;;
&#x9;&#x9;&#x9;var to_user_nama = &#x27;&#x27;;
&#x9;&#x9;&#x9;var chat_active = 1;
&#x9;&#x9;&#x9;var last_pesan_id = 0;
&#x9;&#x9;&#x9;var iterator = 1;
&#x9;&#x9;&#x9;var base_url = &#x27;&#x3C;?=base_url_admin()?&#x3E;&#x27;;
&#x9;&#x9;&#x9;$(document).ready(function(e){
&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getJsReady(); ?&#x3E;
&#x9;&#x9;&#x9;});
&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getJsContent(); ?&#x3E;
&#x9;&#x9;&#x3C;/script&#x3E;
&#x9;&#x3C;/body&#x3E;
&#x3C;/html&#x3E;
                </highlight-code>
              </div>
            </div>

            <h3>Pemisahan bagian / component HTML</h3>
            <p>
              Pada kali ini, bagian HTML akan lebih banyak dipisahkan dari pada bagian di Front. Bagian yang akan dipisahkan antara lain:
              <ul>
                <li>head.php, untuk HTML head</li>
                <li>header.php, untuk menu dan isi HTML yang ditempatkan pada header</li>
                <li>global_message.php, untuk menyimpan komponen error yuang ditampilkan pada seluruh komponen halaman</li>
                <li>navbar.php, ini digunakan untuk menyimpan konten menu navigation bar</li>
                <li>sidebar.php, ini digunakan untuk menyimpan konten menu pada menu samping kiri</li>
                <li>sidebar_alt.php, ini digunakan untuk menyimpan konten menu pada menu samping kanan (alternatif)</li>
                <li>foot.php, ini digunakan untuk menyimpan komponen navigation tambahan seperti <em>back to top</em></li>
                <li>footer.php, ini digunakan untuk menyimpan informasi pada bagian akhir (bawah) halaman</li>
              </ul>
            </p>
            <p>
              Pertama-tama kita akan memisahakna bagian HEAD dari HTML yang akan disimpan pada file ini <code>app/view/admin/page/partials/head.php</code>.
              Apabila belum ada, silakan buat file tersebut dan copy <i>paste</i>-kan isinya dari kode dibawah ini.
            </p>

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
                <highlight-code lang="html">
&#x3C;head&#x3E;
    &#x3C;meta charset=&#x22;utf-8&#x22;&#x3E;
    &#x3C;meta name=&#x22;viewport&#x22; content=&#x22;width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no&#x22;&#x3E;
    &#x3C;title&#x3E;&#x3C;?=$this-&#x3E;getTitle()?&#x3E;&#x3C;/title&#x3E;
    &#x3C;meta name=&#x22;description&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getDescription()?&#x3E;&#x22;&#x3E;
    &#x3C;meta name=&#x22;keyword&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getKeyword()?&#x3E;&#x22;/&#x3E;
    &#x3C;meta name=&#x22;author&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getAuthor()?&#x3E;&#x22;&#x3E;
    &#x3C;meta name=&#x22;robots&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getRobots()?&#x3E;&#x22; /&#x3E;
    &#x3C;!-- Icons --&#x3E;
    &#x3C;!-- The following icons can be replaced with your own, they are used by desktop and mobile browsers --&#x3E;
    &#x3C;link rel=&#x22;shortcut icon&#x22; href=&#x22;&#x3C;?=$this-&#x3E;getIcon()?&#x3E;&#x22; /&#x3E;
    &#x3C;!-- END Icons --&#x3E;
    &#x3C;!-- Stylesheets --&#x3E;
    &#x3C;!-- END Stylesheets --&#x3E;
    &#x3C;?php $this-&#x3E;getAdditionalBefore()?&#x3E;
    &#x3C;?php $this-&#x3E;getAdditional()?&#x3E;
    &#x3C;?php $this-&#x3E;getAdditionalAfter()?&#x3E;
    &#x3C;!-- Modernizr (browser feature detection library) --&#x3E;
    &#x3C;script src=&#x22;https://skin.cenah.co.id/js/vendor/modernizr.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
&#x3C;/head&#x3E;
                </highlight-code>
              </div>
            </div>
            
            <p>
              Kemudian sekarang kita akan memisahkan bagian untuk komponen header <code>app/view/admin/page/partials/header.php</code>.
              Silakasn Copy-Paste kode dibawah ini.
            </p>

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
                <highlight-code lang="html">
&#x3C;?php
&#x9;$admin_foto = &#x27;&#x27;;
&#x9;if(isset($sess-&#x3E;admin-&#x3E;foto))$admin_foto = $sess-&#x3E;admin-&#x3E;foto;
&#x9;if(empty($admin_foto)) $admin_foto = &#x27;media/user-default.png&#x27;;
&#x9;$admin_foto = $this-&#x3E;cdn_url($admin_foto);
?&#x3E;
&#x3C;header class=&#x22;navbar navbar-default&#x22;&#x3E;
&#x9;&#x3C;!-- Left Header Navigation --&#x3E;
&#x9;&#x3C;ul class=&#x22;nav navbar-nav-custom&#x22;&#x3E;
&#x9;&#x9;&#x3C;!-- Main Sidebar Toggle Button --&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x3C;a href=&#x22;javascript:void(0)&#x22; onclick=&#x22;App.sidebar(&#x27;toggle-sidebar&#x27;);this.blur();&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22;fa fa-bars fa-fw&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;!-- END Main Sidebar Toggle Button --&#x3E;
&#x9;&#x9;&#x3C;!-- Template Options --&#x3E;
&#x9;&#x9;&#x3C;!-- Change Options functionality can be found in js/app.js - templateOptions() --&#x3E;
&#x9;&#x9;&#x3C;li class=&#x22;dropdown&#x22; style=&#x22;display:none;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;a href=&#x22;javascript:void(0)&#x22; class=&#x22;dropdown-toggle&#x22; data-toggle=&#x22;dropdown&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22;gi gi-settings&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x3C;ul class=&#x22;dropdown-menu dropdown-custom dropdown-options&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li class=&#x22;dropdown-header text-center&#x22;&#x3E;Header Style&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;btn-group btn-group-justified btn-group-sm&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;javascript:void(0)&#x22; class=&#x22;btn btn-primary&#x22; id=&#x22;options-header-default&#x22;&#x3E;Light&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;javascript:void(0)&#x22; class=&#x22;btn btn-primary&#x22; id=&#x22;options-header-inverse&#x22;&#x3E;Dark&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li class=&#x22;dropdown-header text-center&#x22;&#x3E;Page Style&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;btn-group btn-group-justified btn-group-sm&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;javascript:void(0)&#x22; class=&#x22;btn btn-primary&#x22; id=&#x22;options-main-style&#x22;&#x3E;Default&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;javascript:void(0)&#x22; class=&#x22;btn btn-primary&#x22; id=&#x22;options-main-style-alt&#x22;&#x3E;Alternative&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x3C;/ul&#x3E;
&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;!-- END Template Options --&#x3E;
&#x9;&#x3C;/ul&#x3E;
&#x9;&#x3C;!-- END Left Header Navigation --&#x3E;
&#x9;&#x3C;!-- Search Form --&#x3E;
&#x9;&#x3C;form id=&#x22;fmenu_cari&#x22; action=&#x22;&#x3C;?=base_url_admin(&#x27;cari/&#x27;); ?&#x3E;&#x22; method=&#x22;post&#x22; class=&#x22;navbar-form-custom&#x22; onsubmit=&#x22;return false;&#x22;&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;form-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;input id=&#x22;top-search&#x22; type=&#x22;text&#x22; name=&#x22;keyword&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Cari menu/modul..&#x22;&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;/form&#x3E;
&#x9;&#x3C;!-- END Search Form --&#x3E;
&#x9;&#x3C;!-- Right Header Navigation --&#x3E;
&#x9;&#x3C;ul class=&#x22;nav navbar-nav-custom pull-right&#x22;&#x3E;
&#x9;&#x9;&#x3C;!-- Alternative Sidebar Toggle Button --&#x3E;
&#x9;&#x9;&#x3C;!-- chat toggle --&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- If you do not want the main sidebar to open when the alternative sidebar is closed, just remove the second parameter: App.sidebar(&#x27;toggle-sidebar-alt&#x27;); --&#x3E;
&#x9;&#x9;&#x9;&#x3C;a href=&#x22;javascript:void(0)&#x22; onclick=&#x22;App.sidebar(&#x27;toggle-sidebar-alt&#x27;, &#x27;toggle-other&#x27;);this.blur();&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22;fa fa-comments&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;span id=&#x22;chat-online-count&#x22; class=&#x22;label label-primary label-indicator animation-floating&#x22;&#x3E;0&#x3C;/span&#x3E;
&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;!-- end chat toggle --&#x3E;
&#x9;&#x9;&#x3C;!-- User Dropdown --&#x3E;
&#x9;&#x9;&#x3C;li class=&#x22;dropdown&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;a href=&#x22;javascript:void(0)&#x22; class=&#x22;dropdown-toggle&#x22; data-toggle=&#x22;dropdown&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;img src=&#x22;&#x3C;?=$admin_foto?&#x3E;&#x22; alt=&#x22;avatar&#x22; onerror=&#x22;this.onerror=null;this.src=&#x27;https://seme-framework-storage.b-cdn.net/images/user-default.png&#x27;;&#x22;&#x3E; &#x3C;i class=&#x22;fa fa-angle-down&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x3C;ul class=&#x22;dropdown-menu dropdown-custom dropdown-menu-right&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li class=&#x22;dropdown-header text-center&#x22;&#x3E;Account&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x27;profil&#x27;)?&#x3E;&#x22; title=&#x22;Profil&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22;fa fa-user fa-fw pull-right&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;Profil
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li class=&#x22;divider&#x22;&#x3E;&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x27;logout&#x27;); ?&#x3E;&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-ban fa-fw pull-right&#x22;&#x3E;&#x3C;/i&#x3E; Logout&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x3C;/ul&#x3E;
&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;!-- END User Dropdown --&#x3E;
&#x9;&#x3C;/ul&#x3E;
&#x9;&#x3C;!-- END Right Header Navigation --&#x3E;
&#x3C;/header&#x3E;

                </highlight-code>
              </div>
            </div>

            <p>
              Setelah itu untuk component global message ada di <code>app/view/admin/page/partials/global_message.php</code>.
              Apabila belum ada, silakan buat file tersebut dan copy <i>paste</i>-kan isinya dari kode dibawah ini.
            </p>
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
                <highlight-code lang="html">
&#x3C;div id=&#x22;global_message_danger&#x22; class=&#x22;alert alert-danger&#x22; role=&#x22;alert&#x22; style=&#x22;display:none;&#x22;&#x3E;
    &#x3C;span class=&#x22;glyphicon glyphicon-exclamation-sign&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
    &#x3C;span class=&#x22;sr-only&#x22;&#x3E;Error:&#x3C;/span&#x3E;
    &#x3C;span id=&#x22;global_message_danger_text&#x22;&#x3E;Enter a valid email address&#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div id=&#x22;global_message_info&#x22; class=&#x22;alert alert-info&#x22; role=&#x22;alert&#x22; style=&#x22;display:none;&#x22;&#x3E;
    &#x3C;span class=&#x22;glyphicon glyphicon-exclamation-sign&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
    &#x3C;span class=&#x22;sr-only&#x22;&#x3E;Info:&#x3C;/span&#x3E;
    &#x3C;span id=&#x22;global_message_info_text&#x22;&#x3E;Enter a valid email address&#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div id=&#x22;global_message_success&#x22; class=&#x22;alert alert-success&#x22; role=&#x22;alert&#x22; style=&#x22;display:none;&#x22;&#x3E;
    &#x3C;span class=&#x22;glyphicon glyphicon-exclamation-sign&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
    &#x3C;span class=&#x22;sr-only&#x22;&#x3E;Berhasil:&#x3C;/span&#x3E;
    &#x3C;span id=&#x22;global_message_success_text&#x22;&#x3E;Enter a valid email address&#x3C;/span&#x3E;
&#x3C;/div&#x3E;
                </highlight-code>
              </div>
            </div>
            
            <p>
              Kemudian ini untuk component navigation bar di <code>app/view/admin/page/partials/navbar.php</code>.
              Apabila belum ada, silakan buat file tersebut dan copy <i>paste</i>-kan isinya dari kode dibawah ini.
            </p>
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
                <highlight-code lang="html">
&#x3C;nav class=&#x22;navbar navbar-default&#x22;&#x3E;
  &#x3C;div class=&#x22;container-fluid&#x22;&#x3E;
    &#x3C;!-- Brand and toggle get grouped for better mobile display --&#x3E;
    &#x3C;div class=&#x22;navbar-header&#x22;&#x3E;
      &#x3C;button type=&#x22;button&#x22; class=&#x22;navbar-toggle&#x22; data-toggle=&#x22;collapse&#x22; data-target=&#x22;#navbar&#x22; aria-expanded=&#x22;true&#x22; aria-controls=&#x22;navbar&#x22;&#x3E;
        &#x3C;span class=&#x22;sr-only&#x22;&#x3E;Toggle navigation&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;icon-bar&#x22;&#x3E;&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;icon-bar&#x22;&#x3E;&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;icon-bar&#x22;&#x3E;&#x3C;/span&#x3E;
      &#x3C;/button&#x3E;
    &#x3C;/div&#x3E;
    
    &#x3C;!-- Collect the nav links, forms, and other content for toggling --&#x3E;
    &#x3C;div id=&#x22;navbar&#x22; class=&#x22;collapse navbar-collapse&#x22; &#x3E;
      &#x3C;ul class=&#x22;nav navbar-nav&#x22;&#x3E;
        &#x3C;li class=&#x22;active&#x22;&#x3E;
          &#x3C;a href=&#x22;#&#x22; class=&#x22;btn-sidebar-toggle&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-list&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
      &#x3C;/ul&#x3E;
      &#x3C;form id=&#x22;form_module_search&#x22; action=&#x22;&#x3C;?=base_url_admin(&#x22;modules&#x22;)?&#x3E;&#x22; method=&#x22;get&#x22; class=&#x22;navbar-form navbar-left&#x22;&#x3E;
        &#x3C;div class=&#x22;form-group&#x22;&#x3E;
          &#x3C;input id=&#x22;fmsfilter&#x22; name=&#x22;filter&#x22; type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Cari Modul&#x22; minlength=&#x22;0&#x22; /&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;button type=&#x22;submit&#x22; class=&#x22;btn btn-default&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-search&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/button&#x3E;
      &#x3C;/form&#x3E;
      &#x3C;ul class=&#x22;nav navbar-nav navbar-right&#x22;&#x3E;
        &#x3C;li&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-bell-o&#x22;&#x3E;&#x3C;/i&#x3E; Pemberitahuan &#x3C;label class=&#x22;label label-info&#x22;&#x3E;0&#x3C;/label&#x3E;&#x3C;/a&#x3E;&#x3C;/li&#x3E;
        &#x3C;li class=&#x22;dropdown&#x22;&#x3E;
          &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-toggle&#x22; data-toggle=&#x22;dropdown&#x22; role=&#x22;button&#x22; aria-haspopup=&#x22;true&#x22; aria-expanded=&#x22;false&#x22;&#x3E;&#x3C;?=$sess-&#x3E;admin-&#x3E;nama?&#x3E;  &#x3C;span class=&#x22;caret&#x22;&#x3E;&#x3C;/span&#x3E;&#x3C;/a&#x3E;
          &#x3C;ul class=&#x22;dropdown-menu&#x22;&#x3E;
            &#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x22;profil&#x22;)?&#x3E;&#x22; title=&#x22;Lihat profil saya&#x22;&#x3E;Profil&#x3C;/a&#x3E;&#x3C;/li&#x3E;
            &#x3C;li role=&#x22;separator&#x22; class=&#x22;divider&#x22;&#x3E;&#x3C;/li&#x3E;
            &#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x22;logout&#x22;)?&#x3E;&#x22; title=&#x22;Keluar dari &#x3C;?=$this-&#x3E;site_name_admin?&#x3E;&#x22;&#x3E;Logout&#x3C;/a&#x3E;&#x3C;/li&#x3E;
          &#x3C;/ul&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;&#x3C;a id=&#x22;btn-header-show&#x22; href=&#x22;#&#x22; &#x3E;&#x3C;i class=&#x22;fa fa-ravelry&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;/ul&#x3E;
    &#x3C;/div&#x3E;&#x3C;!-- /.navbar-collapse --&#x3E;
  &#x3C;/div&#x3E;&#x3C;!-- /.container-fluid --&#x3E;
&#x3C;/nav&#x3E;
                </highlight-code>
              </div>
            </div>
            
            <p>
              Setelahnya untuk component sidebar menu yang akan ditampilkan pada samping kiri halaman admin. Untuk kodenya ada di <code>app/view/admin/page/partials/sidebar.php</code>.
              Apabila belum ada, silakan buat file tersebut dan copy <i>paste</i>-kan isinya dari kode dibawah ini.
            </p>
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
                <highlight-code lang="html">
&#x3C;?php
&#x9;$admin_name = $sess-&#x3E;admin-&#x3E;username ?? &#x27;&#x27;;
&#x9;if(isset($sess-&#x3E;admin-&#x3E;nama)) if(strlen($sess-&#x3E;admin-&#x3E;nama)&#x3E;1) $admin_name = $sess-&#x3E;admin-&#x3E;nama;
&#x9;if(!isset($this-&#x3E;current_page)) $this-&#x3E;current_page = &#x22;&#x22;;
&#x9;if(!isset($this-&#x3E;current_parent)) $this-&#x3E;current_parent = &#x22;&#x22;;
&#x9;$current_page = $this-&#x3E;current_page;
&#x9;$current_parent = $this-&#x3E;current_parent;
&#x9;$parent = array();
&#x9;foreach(($sess-&#x3E;admin-&#x3E;menus-&#x3E;left ?? []) as $key=&#x3E;$v){
&#x9;&#x9;$parent[$v-&#x3E;identifier] = 0;
&#x9;&#x9;if(count($v-&#x3E;childs)&#x3E;0){
&#x9;&#x9;&#x9;foreach($v-&#x3E;childs as $f){
&#x9;&#x9;&#x9;&#x9;if($current_page==$f-&#x3E;identifier){
&#x9;&#x9;&#x9;&#x9;&#x9;$current_page = $v-&#x3E;identifier;
&#x9;&#x9;&#x9;&#x9;&#x9;$parent[$v-&#x3E;identifier] = 1;
&#x9;&#x9;&#x9;&#x9;}
&#x9;&#x9;&#x9;}
&#x9;&#x9;}
&#x9;}
&#x9;$admin_foto = &#x27;&#x27;;
&#x9;if(isset($sess-&#x3E;admin-&#x3E;foto))$admin_foto = $sess-&#x3E;admin-&#x3E;foto;
&#x9;if(empty($admin_foto)) $admin_foto = &#x27;media/user-default.png&#x27;;
&#x9;$admin_foto = $this-&#x3E;cdn_url($admin_foto);
    $admin_logo_url = &#x27;&#x27;;
    if (isset($this-&#x3E;config-&#x3E;semevar-&#x3E;admin_logo) &#x26;&#x26; strlen($this-&#x3E;config-&#x3E;semevar-&#x3E;admin_logo) &#x3E; 4) {
        $admin_logo_url = $this-&#x3E;cdn_url($this-&#x3E;config-&#x3E;semevar-&#x3E;admin_logo);
    }
?&#x3E;
&#x3C;div id=&#x22;sidebar&#x22;&#x3E;
&#x9;&#x3C;!-- Wrapper for scrolling functionality --&#x3E;
&#x9;&#x3C;div id=&#x22;sidebar-scroll&#x22;&#x3E;
&#x9;&#x9;&#x3C;!-- Sidebar Content --&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;sidebar-content&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- Brand --&#x3E;
&#x9;&#x9;&#x9;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(); ?&#x3E;&#x22; class=&#x22;sidebar-brand&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;img src=&#x22;&#x3C;?=$admin_logo_url?&#x3E;&#x22; onerror=&#x22;this.onerror=null;this.src=&#x27;&#x27;;&#x22; style=&#x22;width: 90%;&#x22; /&#x3E;
&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- END Brand --&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- User Info --&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;sidebar-section sidebar-user clearfix sidebar-nav-mini-hide&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;sidebar-user-avatar&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x27;profil&#x27;); ?&#x3E;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;img src=&#x22;&#x3C;?=$admin_foto?&#x3E;&#x22; alt=&#x22;avatar&#x22; onerror=&#x22;this.onerror=null;this.src=&#x27;https://seme-framework-storage.b-cdn.net/images/user-default.png&#x27;;&#x22; /&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;sidebar-user-name&#x22;&#x3E;&#x3C;?=$admin_name; ?&#x3E;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;sidebar-user-links&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x27;profil&#x27;); ?&#x3E;&#x22; data-toggle=&#x22;tooltip&#x22; data-placement=&#x22;bottom&#x22; title=&#x22;Profile&#x22;&#x3E;&#x3C;i class=&#x22;gi gi-user&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x22;logout&#x22;); ?&#x3E;&#x22; data-toggle=&#x22;tooltip&#x22; data-placement=&#x22;bottom&#x22; title=&#x22;Logout&#x22;&#x3E;&#x3C;i class=&#x22;gi gi-exit&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- END User Info --&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- Sidebar Navigation --&#x3E;
&#x9;&#x9;&#x9;&#x3C;ul class=&#x22;sidebar-nav&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li class=&#x22;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x27;&#x27;)?&#x3E;&#x22; class=&#x22; &#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22; sidebar-nav-mini-hide&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22;fa fa-home sidebar-nav-icon&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;span class=&#x22;sidebar-nav-mini-hide&#x22;&#x3E;Dashboard&#x3C;/span&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li class=&#x22;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;#&#x22; class=&#x22;sidebar-nav-menu &#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22;fa fa-angle-left sidebar-nav-indicator sidebar-nav-mini-hide&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22;fa fa-cog fa-spin sidebar-nav-icon&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;span class=&#x22;sidebar-nav-mini-hide&#x22;&#x3E;Perusahaan&#x3C;/span&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;ul class=&#x22;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x27;perusahaan/master/&#x27;)?&#x3E;&#x22; class=&#x22;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;Data Master Perusahaan
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/ul&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x3C;/ul&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- END Sidebar Navigation --&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;!-- END Sidebar Content --&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;!-- END Wrapper for scrolling functionality --&#x3E;
&#x3C;/div&#x3E;
                </highlight-code>
              </div>
            </div>
            
            <p>
              Kemudian sekarang akan membuat untuk sidebar alternatif.
              File ini tidak akan kita gunakan terlebih dahulu, tapi akan di persiapkan untuk tutorial selanjutnya.
              Apabila belum ada, silakan buat file tersebut di <code>app/view/admin/page/partials/sidebar_alt.php</code>, kemudian copy <i>paste</i>-kan isinya dari kode dibawah ini.
            </p>
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
                <highlight-code lang="html">
&#x3C;div id=&#x22;sidebar-alt&#x22;&#x3E;
&#x9;&#x3C;!-- Wrapper for scrolling functionality --&#x3E;
&#x9;&#x3C;div id=&#x22;sidebar-alt-scroll&#x22;&#x3E;
&#x9;&#x9;&#x3C;!-- Sidebar Content --&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;sidebar-content&#x22;&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;!-- END Sidebar Content --&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;!-- END Wrapper for scrolling functionality --&#x3E;
&#x3C;/div&#x3E;
                </highlight-code>
              </div>
            </div>
            
            <p>
              Kemudian sekarang akan membuat untuk wrapper untuk footer, di <code>app/view/admin/page/partials/foot.php</code>, buatlah file tersebut kemudian copy <i>paste</i>-kan isinya dari kode dibawah ini.
            </p>
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
                <highlight-code lang="html">
&#x3C;!-- Scroll to top link, initialized in js/app.js - scrollToTop() --&#x3E;
&#x3C;a href=&#x22;#&#x22; id=&#x22;to-top&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-angle-double-up&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/a&#x3E;
&#x3C;!-- User Settings, modal which opens from Settings link (found in top right user menu) and the Cog link (found in sidebar user info) --&#x3E;
&#x3C;div id=&#x22;modal-user-settings&#x22; class=&#x22;modal fade&#x22; tabindex=&#x22;-1&#x22; role=&#x22;dialog&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
&#x9;&#x3C;div class=&#x22;modal-dialog&#x22;&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;modal-content&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- Modal Header --&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;modal-header text-center&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;h2 class=&#x22;modal-title&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-pencil&#x22;&#x3E;&#x3C;/i&#x3E; Settings&#x3C;/h2&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- END Modal Header --&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- Modal Body --&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;modal-body&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;form action=&#x22;index.html&#x22; method=&#x22;post&#x22; enctype=&#x22;multipart/form-data&#x22; class=&#x22;form-horizontal form-bordered&#x22; onsubmit=&#x22;return false;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;fieldset&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;legend&#x3E;Vital Info&#x3C;/legend&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label class=&#x22;col-md-4 control-label&#x22;&#x3E;Username&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-8&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p class=&#x22;form-control-static&#x22;&#x3E;Admin&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label class=&#x22;col-md-4 control-label&#x22; for=&#x22;user-settings-email&#x22;&#x3E;Email&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-8&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;email&#x22; id=&#x22;user-settings-email&#x22; name=&#x22;user-settings-email&#x22; class=&#x22;form-control&#x22; value=&#x22;admin@example.com&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label class=&#x22;col-md-4 control-label&#x22; for=&#x22;user-settings-notifications&#x22;&#x3E;Email Notifications&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-8&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label class=&#x22;switch switch-primary&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;checkbox&#x22; id=&#x22;user-settings-notifications&#x22; name=&#x22;user-settings-notifications&#x22; value=&#x22;1&#x22; checked&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;span&#x3E;&#x3C;/span&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/fieldset&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;fieldset&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;legend&#x3E;Password Update&#x3C;/legend&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label class=&#x22;col-md-4 control-label&#x22; for=&#x22;user-settings-password&#x22;&#x3E;New Password&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-8&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;password&#x22; id=&#x22;user-settings-password&#x22; name=&#x22;user-settings-password&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Please choose a complex one..&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label class=&#x22;col-md-4 control-label&#x22; for=&#x22;user-settings-repassword&#x22;&#x3E;Confirm New Password&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-8&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;password&#x22; id=&#x22;user-settings-repassword&#x22; name=&#x22;user-settings-repassword&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;..and confirm it!&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/fieldset&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group form-actions&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-xs-12 text-right&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-sm btn-default&#x22; data-dismiss=&#x22;modal&#x22;&#x3E;Close&#x3C;/button&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;button type=&#x22;submit&#x22; class=&#x22;btn btn-sm btn-primary&#x22;&#x3E;Save Changes&#x3C;/button&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/form&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- END Modal Body --&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;!-- END User Settings --&#x3E;
                </highlight-code>
              </div>
            </div>
            
            <p>
              Terakhir, kita akan membuat footer untuk halaman admin di <code>app/view/admin/page/partials/footer.php</code>. Silakan copy <i>paste</i>-kan isinya dari kode dibawah ini.
            </p>
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
                <highlight-code lang="html">
                  &#x3C;footer class=&#x22;clearfix&#x22;&#x3E;
&#x9;&#x3C;div class=&#x22;rainbow pull-right&#x22;&#x3E;
&#x9;&#x9;Made with &#x3C;i class=&#x22;fa fa-heart text-danger&#x22;&#x3E;&#x3C;/i&#x3E; by &#x3C;a href=&#x22;https://cenah.co.id&#x22; target=&#x22;_blank&#x22;&#x3E;cenah.co.id&#x3C;/a&#x3E;. 
&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;div class=&#x22;pull-left&#x22;&#x3E;
&#x9;&#x9;Seme Framework version 4 - Admin &#x26;copy; &#x3C;?=date(&#x22;Y&#x22;)?&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x3C;/footer&#x3E;
                </highlight-code>
              </div>
            </div>

            <h3>Membuat sample kontent untuk tema Admin</h3>
            <p>
              Setelah selesai memecah komponen HTML, selanjutnya kita akan membuat contoh halaman utama pada admin.
              Halaman utama ini nantinya kita akan isi dengan dashboard pada tutorial selanjutnya.
            </p>

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
                <highlight-code lang="html">
&#x3C;div id=&#x22;page-content&#x22;&#x3E;
&#x9;&#x3C;!-- Static Layout Header --&#x3E;
&#x9;&#x3C;div class=&#x22;content-header&#x22;&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;header-section&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;h1&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22;gi gi-show_big_thumbnails&#x22;&#x3E;&#x3C;/i&#x3E;Static Layout&#x3C;br&#x3E;&#x3C;small&#x3E;This is the default layout&#x3C;/small&#x3E;
&#x9;&#x9;&#x9;&#x3C;/h1&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;ul class=&#x22;breadcrumb breadcrumb-top&#x22;&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;Admin&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url_admin()?&#x3E;&#x22;&#x3E;Home&#x3C;/a&#x3E;&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url_admin()?&#x3E;&#x22;&#x3E;Example&#x3C;/a&#x3E;&#x3C;/li&#x3E;
&#x9;&#x3C;/ul&#x3E;
&#x9;&#x3C;!-- END Static Layout Header --&#x3E;
&#x9;
&#x9;&#x3C;!-- Dummy Content --&#x3E;
&#x9;&#x3C;div class=&#x22;block full block-alt-noborder&#x22;&#x3E;
&#x9;&#x9;&#x3C;h3 class=&#x22;sub-header text-center&#x22;&#x3E;&#x3C;strong&#x3E;Dummy Content&#x3C;/strong&#x3E; for layout demostration&#x3C;/h3&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;row&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;article&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in purus. Mauris tincidunt tincidunt turpis in porta. Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum leo mi nec lectus. Nam commodo turpis id lectus scelerisque vulputate. Integer sed dolor erat. Fusce erat ipsum, varius vel euismod sed, tristique et lectus? Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque?&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Proin rhoncus dui at ligula vestibulum ut facilisis ante sodales! Suspendisse potenti. Aliquam tincidunt sollicitudin sem nec ultrices. Sed at mi velit. Ut egestas tempor est, in cursus enim venenatis eget! Nulla quis ligula ipsum. Donec vitae ultrices dolor? Donec lacinia venenatis metus at bibendum? In hac habitasse platea dictumst. Proin ac nibh rutrum lectus rhoncus eleifend. Sed porttitor pretium venenatis. Suspendisse potenti. Aliquam quis ligula elit. Aliquam at orci ac neque semper dictum. Sed tincidunt scelerisque ligula, et facilisis nulla hendrerit non. Suspendisse potenti. Pellentesque non accumsan orci. Praesent at lacinia dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in purus. Mauris tincidunt tincidunt turpis in porta. Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum leo mi nec lectus. Nam commodo turpis id lectus scelerisque vulputate. Integer sed dolor erat. Fusce erat ipsum, varius vel euismod sed, tristique et lectus? Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque?&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Proin rhoncus dui at ligula vestibulum ut facilisis ante sodales! Suspendisse potenti. Aliquam tincidunt sollicitudin sem nec ultrices. Sed at mi velit. Ut egestas tempor est, in cursus enim venenatis eget! Nulla quis ligula ipsum. Donec vitae ultrices dolor? Donec lacinia venenatis metus at bibendum? In hac habitasse platea dictumst. Proin ac nibh rutrum lectus rhoncus eleifend. Sed porttitor pretium venenatis. Suspendisse potenti. Aliquam quis ligula elit. Aliquam at orci ac neque semper dictum. Sed tincidunt scelerisque ligula, et facilisis nulla hendrerit non. Suspendisse potenti. Pellentesque non accumsan orci. Praesent at lacinia dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in purus.&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/article&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;!-- END Dummy Content --&#x3E;
&#x3C;/div&#x3E;
                </highlight-code>
              </div>
            </div>

            <h5>Implementasi di Controller</h5>
            <p>
              Setelah membuat tema, beserta isinya sekarang saatnya untuk integrasikan semuanya, mulai dari Controller sampai dengan view.
              Untuk melakukannya, buka file <code>app/controller/admin/home.php</code> kemudian <b>ganti</b> (<em>edit</em>) isinya dengan menggunakan kode dibawah ini:
            </p>
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
* Main Controller Class
*   for Admin
* Mostly for this controller will resulting HTTP Body Content in HTML format
*
* @version 1.0.0
*
* @package Controller\Admin
* @since 1.0.0
*/
class Home extends \SENE_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this-&#x3E;setTheme(&#x27;admin&#x27;);
    }
    public function index()
    {
        $data = $this-&#x3E;__init();
        $this-&#x3E;setTitle(&#x22;Home Admin&#x22;);
        
        $this-&#x3E;putJsContent(&#x22;home/home_bottom&#x22;, $data);
        $this-&#x3E;putThemeContent(&#x22;home/home&#x22;, $data);

        $this-&#x3E;loadLayout(&#x27;col-2-left&#x27;, $data);
        $this-&#x3E;render();
    }
}
                </highlight-code>
              </div>
            </div>
            <div class="message is-info">
              <div class="message-body">
                <p>
                  Pada class controller ini kita masih <code>extends</code> dari <code>SENE_Controller</code>.
                  Nanti di tutorial selanjutnya, kita akan merubahnya
                </p>
              </div>
            </div>

            <h5>Melihat hasilnya</h5>
            <p>Untuk melihat hasil dari pembuatan tema ini, cukup buka alamat <code>http://localhost/seme_framework/admin/</code> melalui google chrome atau firefox.</p>
            <p>Kemudian, kita lihat hasilnya apakah sama seperti <i>screenshot</i> dibawah ini.</p>
            
            <div class="" style="padding: 7%;">
              <amp-img layout="responsive" width="1372px" height="675px" :src="intro1end" style="box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -webkit-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -moz-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72);"></amp-img>
            </div>

            <hr>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/tutorial/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Tutorial
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/tutorial/admin/login" class="btn">
            Tutorial: Login Admin
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
      name: 'Seme Framework 4 Tutorial',
      suffix: ' - Seme Framework 4 Tutorial',
      title: 'Intro Admin',
      description: 'Kali ini kita akan mencoba membuat halaman untuk admin di Seme Framework 4',
      exampleResult: require('~/assets/img/tutorial/admin/example-result.png'),
      intro1: require('~/assets/img/tutorial/admin/intro-1.png'),
      intro1end: require('~/assets/img/tutorial/admin/intro-1-end.png'),
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id',
          text: 'ID',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/tutorial',
          text: 'Tutorial',
        }
      ],
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'id'
      },
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
  jsonld() {
    this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
    const items = this.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': "WebPage",
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
        "dateCreated": "2023-10-21T19:52:38+07:00",
        "datePublished": "2023-10-22T19:52:38+07:00",
        "dateModified": "2023-10-22T11:11:11+07:00",
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
