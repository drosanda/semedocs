<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial">Tutorial</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial/admin/introduction/">admin</NuxtLink></li>
          <li class="unavailable">Login</li>
        </ul>
      </nav>
      <div>
        <div class="column">
          <div class="content">
            <h1 class="">Membuat Halaman Login untuk Admin</h1>
            <p>
              Pada tutorial kali ini akan dibahas pembuatan login untuk admin. 
              Kurang lebih contoh tampilan jadinya seperti ini.
            </p>
            
            <div class="" style="padding: 7%;">
              <amp-img layout="responsive" width="1155px" height="818px" :src="loginAdminExample" style="box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -webkit-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -moz-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72);"></amp-img>
            </div>
            <p>
              Untuk membuatnya, kita akan melalui tahapan-tahapan sebagai berikut:
            </p>
            <ol>
              <li>Setup JI Model dan JI Controller</li>
              <li>Pembuatan table a_pengguna dan sample isinya</li>
              <li>Pembuatan concern dan model a_pengguna</li>
              <li>Pembuatan controller login dan logout</li>
              <li>Pembuatan view login</li>
              <li>Penambahan validasi &#x22;sudah login&#x22; pada controller</li>
            </ol>
            <p>
              Kemudian untuk struktur filenya seperti ini:
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
                  app/
                  ├── controller/
                  │&#160;└── admin/
                  │&#160;&#160;├── login.php
                  │&#160;&#160;├── logout.php
                  │&#160;&#160;└── home.php
                  └── view/
                  &#160;└── admin/
                  &#160;&#160;├── login
                  &#160;&#160;│ ├── home.php
                  &#160;&#160;│ └── home_bottom.php
                  &#160;&#160;├── home
                  &#160;&#160;│ ├── home.php
                  &#160;&#160;│ └── home_bottom.php
                  &#160;&#160;└── page/
                  &#160;&#160;&#160;└── login.php
                </highlight-code>
              </div>
            </div>

            <h2 id="part1">Setup JI Model dan JI Controller</h2>
            <p>
              JI Controller dan JI Model digunakan sebagai class helper untuk fungsi-fungsi yang akan tersedia secara umum baik pada controller maupun model.
              Sekarang kita akan merubah pengaturan terlebih dahulu, supaya seme framework memanggil JI_Model dan JI_Controller.
              Edit file <code>app/config/development.php</code> kemudian ganti pada bagian <code>core_prefix</code> menjadi seperti dibawah ini
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
                  $core_prefix = &#x27;ji_&#x27;;
$core_controller = &#x27;controller&#x27;;
$core_model = &#x27;model&#x27;;
                </highlight-code>
              </div>
            </div>

            <p>
              Masih di file <code>app/config/development.php</code> lompati ke akhir file, kemudian tambahkan code dibawah ini ini:
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
                  $semevar[&#x27;site_title&#x27;] = &#x27;Seme Framework&#x27;;
$semevar[&#x27;site_version&#x27;] = &#x27;1.0.0&#x27;;
$semevar[&#x27;admin_site_title&#x27;] = &#x27;Admin Page&#x27;;
$semevar[&#x27;admin_site_title_suffix&#x27;] = &#x27; - &#x27;.$semevar[&#x27;admin_site_title&#x27;];
                </highlight-code>
              </div>
            </div>

            <p>
              Kemudian setelah itu kita akan buat file baru di <code>app/core/ji_controller.php</code>, isikan seperti code dibawah ini.
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
 * Core class for all controller
 *   contains general purpose methods that nice to have in all controllers
 *
 * @version 1.0.0
 *
 * @package Core\Controller
 * @since 1.0.0
 */
class JI_Controller extends \SENE_Controller
{
    protected $user_login = false;
    protected $admin_login = false;
    private $session_current = null;
    
    public function __construct()
    {
        parent::__construct();
        $this-&#x3E;session_current_check();
    }

    public function session_current_check()
    {
        $session = $this-&#x3E;session_current;
        if (!is_null($session) &#x26;&#x26; isset($session-&#x3E;user-&#x3E;id) &#x26;&#x26; isset($session-&#x3E;admin-&#x3E;id)) {
            return  $session;
        }

        $session = $this-&#x3E;getKey();
        if (!is_object($session)) {
            $session = new stdClass();
            $session-&#x3E;user = new stdClass();
            $session-&#x3E;admin = new stdClass();
        }
        if (!isset($session-&#x3E;user)) {
            $session-&#x3E;user = new stdClass();
        }
        if (isset($session-&#x3E;user-&#x3E;id)) {
            $this-&#x3E;user_login = true;
        }

        if (!isset($session-&#x3E;admin)) {
            $this-&#x3E;sessions-&#x3E;admin = new stdClass();
        }
        if (isset($session-&#x3E;admin-&#x3E;id)) {
            $this-&#x3E;admin_login = true;
        }
        $this-&#x3E;session_current = $session;

        return $this;
    }

    protected function config_semevar($key, $default=&#x27;&#x27;)
    {
        if (isset($this-&#x3E;config-&#x3E;semevar-&#x3E;{$key})) {
            return $this-&#x3E;config-&#x3E;semevar-&#x3E;{$key};
        } else {
            return $default;
        }
    }

    public function __init()
    {
        $data = array();
        $data[&#x27;sess&#x27;] = $this-&#x3E;session_current;

        return $data;
    }

    public function index() { }
}
                </highlight-code>
              </div>
            </div>
            
            <p>
              Selanjutnya adalah file <code>app/core/ji_model.php</code>, buatlah dan isi seperti code dibawah ini.
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
* Define all general method for all tables
*   For class models
*
* @package Core\Model
* @since 1.0
*/
class JI_Model extends \SENE_Model
{
    /** @var string  */
    public $table;

    /** @var string  */
    public $table_alias;

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Insert a row data
     *
     * @param  array   $d   Contain associative array that represent the pair of column and value
     * @return int          Return last ID if succeed, otherwise will return 0
     */
    public function set($d)
    {
        $this-&#x3E;db-&#x3E;insert($this-&#x3E;table, $d, 0, 0);
        return $this-&#x3E;db-&#x3E;last_id;
    }

    /**
     * Update a row data by supplied ID
     *
     * @param  int      $id    Positive integer
     * @return boolean         True if succeed, otherwise false
     */
    public function update($id, $d)
    {
        $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;, $id);
        return $this-&#x3E;db-&#x3E;update($this-&#x3E;table, $d, 0);
    }

    /**
     * Delete row data by ID
     *
     * @param  int      $id    Positive integer
     * @return boolean         True if succeed, otherwise false
     */
    public function del($id)
    {
        $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;, $id);
        return $this-&#x3E;db-&#x3E;delete($this-&#x3E;table);
    }

    /**
     * Get single row data by ID
     *
     * @param  int      $id     Positive integer
     * @return stdClass         Will return single row object, otherwise will return empty object
     */
    public function id($id)
    {
        $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;, $id);
        return $this-&#x3E;db-&#x3E;from($this-&#x3E;table, $this-&#x3E;table_alias)-&#x3E;get_first(&#x27;&#x27;, 0);
    }

    /**
     * Open the database transaction session
     * @return boolean True if succeed, otherwise false
     */
    public function trans_start()
    {
        $r = $this-&#x3E;db-&#x3E;autocommit(0);
        if ($r) {
            return $this-&#x3E;db-&#x3E;begin();
        }
        return false;
    }

    /**
     * Execute &#x60;commit&#x60; SQL command
     * @return boolean True if succeed, otherwise false
     */
    public function trans_commit()
    {
        return $this-&#x3E;db-&#x3E;commit();
    }

    /**
     * Rollback the database transaction session
     * @return boolean True if succeed, otherwise false
     */
    public function trans_rollback()
    {
        return $this-&#x3E;db-&#x3E;rollback();
    }

    /**
     * Finalize the database transaction session
     * @return boolean True if succeed, otherwise false
     */
    public function trans_end()
    {
        return $this-&#x3E;db-&#x3E;autocommit(1);
    }
}
                </highlight-code>
              </div>
            </div>

            <h2 id="part2">Pembuatan table a_pengguna dan sample isinya</h2>
            <p>
              Pertama-tama kita akan membuat tabel baru untuk penyimpanan data <b>pengguna admin</b>.
              Data user pada tutorial kali ini akan disimpan dalam sebuah tabel bernama <code>a_pengguna</code>.
              Pastikan database sudah dibuat sebelumnya dan juga sudah terpilih.
              Kemudian <i>Copy paste</i> kode SQL dibawah ini dan jalankan di <b>PhpMyAdmin</b> atau <b>MySQL</b> <i>query</i>-nya langsung untuk membuat tabel secara otomatis.
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
                <highlight-code lang="sql">
SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = &#x22;NO_AUTO_VALUE_ON_ZERO&#x22;;
SET time_zone = &#x22;+00:00&#x22;;

DROP TABLE IF EXISTS &#x60;a_pengguna&#x60;;
CREATE TABLE &#x60;a_pengguna&#x60; (
  &#x60;id&#x60; int(10) unsigned NOT NULL AUTO_INCREMENT,
  &#x60;username&#x60; varchar(64) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  &#x60;password&#x60; varchar(255) DEFAULT NULL,
  &#x60;created_at&#x60; datetime DEFAULT NULL,
  &#x60;updated_at&#x60; timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (&#x60;id&#x60;),
  UNIQUE KEY &#x60;a_pengguna_un&#x60; (&#x60;username&#x60;)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
SET FOREIGN_KEY_CHECKS=1;
                </highlight-code>
              </div>
            </div>

            <p>
              Kemudian setelah itu, kita akan masukan 1 sample akun admin dengan username <code>mimind</code> dan passwordnya itu adalah <code>admin123*</code>.
              Kemudian <i>Copy paste</i> kode SQL dibawah ini dan jalankan di <b>PhpMyAdmin</b> atau <b>MySQL</b> <i>query</i>-nya langsung untuk menambahkan user admin baru.
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
                <highlight-code lang="sql">
                  insert into &#x60;a_pengguna&#x60;(
&#x9;id,
&#x9;username,
&#x9;password,
&#x9;created_at,
&#x9;updated_at)
values(
&#x9;null,
&#x9;&#x27;mimind&#x27;,
&#x9;md5(&#x27;admin123*&#x27;),
&#x9;NOW(),
&#x9;null
);
                </highlight-code>
              </div>
            </div>

            <div class="message is-danger">
                <div class="message-body">
                  <p>
                    Menggunakan enkripsi password dengan MD5 sudah sangat familiar dan menjadi kurang aman, 
                    karena sudah banyak library yang bisa membalikan kode MD5 menjadi string originalnya.
                    Pada tutorial ini MD5 digunakan hanya untuk meng-enkripsi secara sederhana saja,
                    supaya password tidak bisa langsung terbaca isinya.
                  </p>
                </div>
            </div>
            <div class="message is-success">
                <div class="message-body">
                  <p>
                    Nanti, kita akan coba <em>upgrade</em> metode enkripsi MD5 menjadi yang lebih baik pada tutorial selanjutnya.
                  </p>
                </div>
            </div>

            <h2 id="part3">Pembuatan concern dan model <code>a_pengguna</code></h2>
            <p>
              Setelah mengimport tabel <code>a_pengguna</code> kedalam database, sekarang saatnya membuat <code>concern class</code> untuk tabel <code>a_pengguna</code>.
              Caranya buat file baru di <code>app/model/a_pengguna_concern.php</code>, kemudian <i>copy paste</i> kode dibawah ini dan simpan perubahan pada file tersebut.
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
namespace Model;

register_namespace(__NAMESPACE__);
/**
 * Define all general method(s) and constant(s) for a_pengguna table,
 *   can be inherited a Concern class also can be reffered as class constants
 *
 * @version 1.0.0
 *
 * @package Model\Concern
 * @since 1.0.0
 */
class A_Pengguna_Concern extends \JI_Model
{
    public $table = &#x27;a_pengguna&#x27;;
    public $table_alias = &#x27;ap&#x27;;

    public function __construct()
    {
        parent::__construct();
        $this-&#x3E;db-&#x3E;from($this-&#x3E;table, $this-&#x3E;table_alias);
    }

    public function username($username)
    {
        return $this-&#x3E;db
            -&#x3E;from($this-&#x3E;table, $this-&#x3E;table_alias)
            -&#x3E;where(&#x22;$this-&#x3E;table_alias.username&#x22;, $username, &#x27;AND&#x27;, &#x27;LIKE&#x27;)
            -&#x3E;get_first(&#x27;object&#x27;, 0);
    }
}
                </highlight-code>
              </div>
            </div>
            <p>
              Kemudian sekarang membuat model untuk ruang lingkup admin saja. Ini berarti model file yang ini hanya akan dipakai dibawah <code>controller/admin/</code> saja.
              Hal ini dilakukan supaya kode dapat dimaintenance dengan mudah apabila nanti ada perubahan.
              Selanjutnya kita akan buat file baru di <code>app/model/admin/a_pengguna_model.php</code>, kemudian <i>copy paste</i> kode dibawah ini dan simpan perubahan pada file tersebut.
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
namespace Model\Admin;

register_namespace(__NAMESPACE__);
/**
 * Scoped &#x60;admin&#x60; model for &#x60;a_pengguna&#x60; table
 *
 * @version 1.0.0
 *
 * @package Model\Admin
 * @since 1.0.0
 */
class A_Pengguna_Model extends \Model\A_Pengguna_Concern
{

    public function __construct()
    {
        parent::__construct();
    }
}
                </highlight-code>
              </div>
            </div>

            <h2>Membuat View dan Controller untuk halaman Login</h2>
            <p>
              Sekarang kita akan bikin view untuk tampilan login beserta controllernya (login &amp; logout).
              Pertama-tama kita akan buat dulu layout view untuk login.
              Buatlah file baru di <code>app/view/admin/page/login.php</code>, isikan seperti code dibawah ini.
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
&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/html/head&#x22;,$__forward); ?&#x3E;
&#x9;&#x3C;body&#x3E;
&#x9;&#x9;&#x3C;!-- Main Container --&#x3E;
&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeContent(); ?&#x3E;
&#x9;&#x9;&#x3C;!-- Main Container End --&#x3E;

&#x9;&#x9;&#x3C;!-- jQuery, Bootstrap.js, jQuery plugins and Custom JS code --&#x3E;
&#x9;&#x9;&#x3C;?php $this-&#x3E;getJsFooter(); ?&#x3E;

&#x9;&#x9;&#x3C;!-- Load and execute javascript code used only in this page --&#x3E;
&#x9;&#x9;&#x3C;script&#x3E;
&#x9;&#x9;public base_url = &#x27;&#x3C;?=base_url_admin()?&#x3E;&#x27;;
&#x9;&#x9;public Login = function(){
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

            <div class="message is-info">
              <div class="message-body">
                <p>
                  Alasan membuat layout baru adalah supaya wrapper HTML untuk login
                  memiliki desain yang berbeda dengan tampilan admin.
                </p>
              </div>
            </div>

            <p>
              Kemudian sekarang kita akan buat form login.
              Buatlah file baru di <code>app/view/admin/login/home.php</code>,
              <em>copy</em> <em>paste</em> isinya dengan kode dibawah ini.
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
                  &#x3C;!-- Login Full Background --&#x3E;
&#x3C;!-- For best results use an image with a resolution of 1280x1280 pixels (prefer a blurred image for smaller file size) --&#x3E;
&#x3C;img src=&#x22;https://seme-framework-storage.b-cdn.net/images/background-login-3.jpg&#x22; alt=&#x22;Login Full Background&#x22; class=&#x22;full-bg animation-pulseSlow&#x22;&#x3E;
&#x3C;!-- END Login Full Background --&#x3E;

&#x3C;!-- Login Container --&#x3E;
&#x3C;div id=&#x22;login-container&#x22; class=&#x22;animation-fadeIn&#x22;&#x3E;
    &#x3C;!-- Login Title --&#x3E;
    &#x3C;div class=&#x22;login-title text-center&#x22;&#x3E;
        &#x3C;img src=&#x22;https://seme-framework-storage.b-cdn.net/images/seme-framework-logo.png&#x22; class=&#x22;img-responsive&#x22; /&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;!-- END Login Title --&#x3E;

    &#x3C;!-- Login Block --&#x3E;
    &#x3C;div class=&#x22;block push-bit&#x22;&#x3E;
        &#x3C;div id=&#x22;flogin_info&#x22; class=&#x22;alert alert-info&#x22; role=&#x22;alert&#x22; style=&#x22;&#x3C;?php if(!isset($login_message)) echo &#x27;display:none&#x27;; ?&#x3E;&#x22;&#x3E;&#x3C;?php if(isset($login_message)) echo $login_message; ?&#x3E;&#x3C;/div&#x3E;
        &#x3C;!-- Login Form --&#x3E;
        &#x3C;form action=&#x22;&#x3C;?=base_url_admin(&#x22;login/authentication/&#x22;); ?&#x3E;&#x22; method=&#x22;post&#x22; id=&#x22;form-login&#x22; class=&#x22;form-horizontal form-bordered form-control-borderless&#x22;&#x3E;
            &#x3C;div class=&#x22;form-group&#x22;&#x3E;
                &#x3C;div class=&#x22;col-xs-12&#x22;&#x3E;
                    &#x3C;div class=&#x22;input-group&#x22;&#x3E;
                        &#x3C;span class=&#x22;input-group-addon&#x22;&#x3E;&#x3C;i class=&#x22;gi gi-user&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
                        &#x3C;input type=&#x22;text&#x22; id=&#x22;iusername&#x22; name=&#x22;username&#x22; class=&#x22;form-control input-lg&#x22; placeholder=&#x22;Username&#x22; /&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-group&#x22;&#x3E;
                &#x3C;div class=&#x22;col-xs-12&#x22;&#x3E;
                    &#x3C;div class=&#x22;input-group&#x22;&#x3E;
                        &#x3C;span class=&#x22;input-group-addon&#x22;&#x3E;&#x3C;i class=&#x22;gi gi-asterisk&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
                        &#x3C;input type=&#x22;password&#x22; id=&#x22;ipassword&#x22; name=&#x22;password&#x22; class=&#x22;form-control input-lg&#x22; placeholder=&#x22;Password&#x22;&#x3E;
                        &#x3C;input type=&#x22;hidden&#x22; id=&#x22;ireff&#x22; name=&#x22;reff&#x22; value=&#x22;&#x3C;?=$reff ?? &#x27;&#x27;?&#x3E;&#x22; /&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-group form-actions&#x22;&#x3E;
                &#x3C;div class=&#x22;col-xs-6&#x22;&#x3E;
                    &#x3C;?=$this-&#x3E;config_semevar(&#x27;admin_site_title&#x27;)?&#x3E; &#x3C;label class=&#x22;&#x22; style=&#x22;color: grey; font-weight: lighter; font-size: smaller;&#x22;&#x3E;version &#x3C;?=$this-&#x3E;config_semevar(&#x27;site_version&#x27;)?&#x3E;&#x3C;/label&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;col-xs-6 text-right&#x22;&#x3E;
                    &#x3C;button type=&#x22;submit&#x22; class=&#x22;btn btn-sm btn-primary btn-submit&#x22;&#x3E;Login &#x3C;i id=&#x22;icon-submit&#x22; class=&#x22;fa fa-angle-right&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/button&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/form&#x3E;
        &#x3C;!-- END Login Form --&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;!-- END Login Block --&#x3E;
&#x3C;/div&#x3E;
&#x3C;!-- END Login Container --&#x3E;
                </highlight-code>
              </div>
            </div>
            
            <p>
              Kemudian buat lagi file baru di <code>app/view/admin/login/home_bottom.php</code>, biarkan kosong saja file tersebut.
            </p>

            <div class="message is-info">
              <div class="message-body">
                <p>
                  File <code>app/view/admin/login/home_bottom.php</code> nanti akan kita gunakan untuk menyimpan kode JavaScript,
                  untuk membuat login dengan metode Ajax.
                </p>
              </div>
            </div>
            
            <p>
              Sekarang kita akan beralih ke controller, pertama-tama buat file controller untuk logout terlebih dahulu di <code>app/controller/admin/logout.php</code>.
              Kemudian <em>copy</em> <em>paste</em> kode dibawah ini.
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
* Controller Class
*   for Admin
* Main objective of this class is to clear session for admin
*
* @version 1.0.0
*
* @package Controller\Admin
* @since 1.0.0
*/
class Logout extends \JI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this-&#x3E;setTheme(&#x27;admin&#x27;);
    }

    public function index()
    {
        $initial_data = $this-&#x3E;__init();
        if (!isset($initial_data[&#x27;sess&#x27;]-&#x3E;user-&#x3E;admin)) {
            $this-&#x3E;session_current_check();
            $initial_data = $this-&#x3E;__init();
        }
        $initial_data[&#x27;sess&#x27;]-&#x3E;admin = new stdClass();
        $this-&#x3E;login_admin = false;
        $this-&#x3E;setKey($initial_data[&#x27;sess&#x27;]);

        flush();
        redir(base_url_admin(&#x22;login&#x22;), 0, 1);
    }
}
                </highlight-code>
              </div>
            </div>
            
            <p>
              Setelah itu kita akan membuat controller untuk login. Pada controller kali ini, ada 2 fungsi utama yaitu menampilkan form login (halaman login).
              Dan yang kedua, adalah untuk memproses input yang dikirim dari form login.
              Untuk menampilkan form login ada di method <code>index</code>, sementara untuk proses login ada di <code>authorization</code>.
              Sekarang kita akan buat file baru di <code>app/controller/admin/login.php</code>, kemudian <em>copy</em> <em>paste</em> kode dibawah ini.
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
class Login extends \JI_Controller
{
&#x9;public function __construct()
&#x9;{
&#x9;&#x9;parent::__construct();
&#x9;&#x9;$this-&#x3E;setTheme(&#x27;admin&#x27;);
&#x9;&#x9;$this-&#x3E;load(&#x27;a_pengguna_concern&#x27;);
&#x9;&#x9;$this-&#x3E;load(&#x27;admin/a_pengguna_model&#x27;, &#x27;apm&#x27;);
&#x9;}

    private function validate_input($key, $min_length=3)
    {
        $value = $this-&#x3E;input-&#x3E;request($key, &#x27;&#x27;);
&#x9;&#x9;if (strlen($value) &#x3C;= $min_length) {
&#x9;&#x9;&#x9;$value = false;
&#x9;&#x9;}

        return $value;
    }

    private function validate_admin_session()
    {
        if (isset($this-&#x3E;admin_login) &#x26;&#x26; $this-&#x3E;admin_login == true) {
            return true;
        }

        return false;
    }

    private function validate_username()
    {
        return $this-&#x3E;validate_input(&#x27;username&#x27;);
    }

    private function validate_password()
    {
        return $this-&#x3E;validate_input(&#x27;password&#x27;);
    }

    private function validate_password_md5($apm, $password)
    {
        if (md5($password) == $apm-&#x3E;password) {
            return true;
        } else {
            return false;
        }
    }

    private function session_current_update($data_initial, $apm)
    {
        $session_current = new stdClass();
        if (!isset($data_initial[&#x27;sess&#x27;]-&#x3E;admin)) {
            $this-&#x3E;session_current_check();
        }
        
        $data_initial[&#x27;sess&#x27;]-&#x3E;admin = $apm;
        $this-&#x3E;setKey($data_initial[&#x27;sess&#x27;]);

        return $data_initial;
    }

&#x9;public function index()
&#x9;{
&#x9;&#x9;$data = $this-&#x3E;__init();
        if ($this-&#x3E;validate_admin_session()) {
            redir(base_url_admin(&#x27;login/authorization/&#x27;));

            return true;
        }

&#x9;&#x9;$this-&#x3E;setTitle(&#x27;Login &#x27; . $this-&#x3E;config_semevar(&#x27;admin_site_title_suffix&#x27;));

        $failed_flag = intval($this-&#x3E;input-&#x3E;request(&#x27;failed&#x27;, 0));
        if ($failed_flag &#x3E; 0) {
            $data[&#x27;login_message&#x27;] = &#x27;Invalid username or password&#x27;;
        }

&#x9;&#x9;$this-&#x3E;putThemeContent(&#x22;login/home&#x22;, $data);
&#x9;&#x9;$this-&#x3E;putJsContent(&#x27;login/home_bottom&#x27;, $data);
&#x9;&#x9;$this-&#x3E;loadLayout(&#x27;login&#x27;, $data);
&#x9;&#x9;$this-&#x3E;render();
&#x9;}

&#x9;public function authentication()
&#x9;{
&#x9;&#x9;//init
&#x9;&#x9;$data = array();
&#x9;&#x9;$initial_data = $this-&#x3E;__init();
&#x9;&#x9;if ($this-&#x3E;validate_admin_session() == true)
        {
            redir(base_url_admin(&#x27;login/authorization/&#x27;));

            return false;
        }
&#x9;&#x9;
&#x9;&#x9;$username = $this-&#x3E;validate_username();
&#x9;&#x9;if (!$username)
        {
            redir(base_url_admin(&#x27;login/?failed=1&#x27;));
            return false;
        }

&#x9;&#x9;$password = $this-&#x3E;validate_password();
&#x9;&#x9;if (!$password)
        {
            redir(base_url_admin(&#x27;login/?failed=2&#x27;));
            return false;
        }

        $apm = $this-&#x3E;apm-&#x3E;username($username);
        if (!isset($apm-&#x3E;id))
        {
            redir(base_url_admin(&#x27;login/?failed=3&#x27;));
            return false;
        }

        if (!$this-&#x3E;validate_password_md5($apm, $password))
        {
            redir(base_url_admin(&#x27;login/?failed=4&#x27;));
            return false;
        }

        $this-&#x3E;session_current_update($initial_data, $apm);

        redir(base_url_admin(&#x27;login/authorization/&#x27;));
        return true;
&#x9;}

&#x9;public function authorization()
&#x9;{
&#x9;&#x9;$data = $this-&#x3E;__init();
        if ($this-&#x3E;validate_admin_session()) {
            redir(base_url_admin());
            
            return true;
        } else {
            redir(base_url_admin(&#x27;login&#x27;));
            
            return false;
        }
&#x9;}
}
                </highlight-code>
              </div>
            </div>

            <h2>Penambahan validasi sudah login pada controller</h2>
            <p>
              Pada file <code>app/controler/admin/home.php</code> ada beberapa code yang akan diubah.
              Pertama perubaha pada extends class, dari asalnya SENE_Controller menjadi JI_Controller.
              Kemudian setelah itu, menambahkan validasi apabila admin belum login.
              Mari kita lihat code dibawah ini, kemudian sesuaikanlah kodenya seperti dibawah ini.
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
class Home extends \JI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this-&#x3E;setTheme(&#x27;admin&#x27;);
    }
    public function index()
    {
        $data = $this-&#x3E;__init();
        if (!$this-&#x3E;admin_login) {
            redir(base_url_admin(&#x27;login&#x27;));

            return false;
        }
        
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
                  Pada class controller ini kita sudah <code>extends</code> dari <code>JI_Controller</code> tidak seperti
                  pada tutorial sebelumnya masih menggunakan class default dari Seme Framework.
                </p>
              </div>
            </div>
            
            <h2>Selesai...!</h2>
            <p>
              Untuk mencoba hasil dari tutorial ini, buka alamat <code>http://localhost/seme_framework/admin/home</code> pada browser.
              Harusnya akan muncul halaman login.
            </p>
            
            <div class="" style="padding: 7%;">
              <amp-img layout="responsive" width="1155px" height="818px" :src="loginAdminExample" style="box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -webkit-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -moz-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72);"></amp-img>
            </div>

            <p>
              Kemudian setelah itu, masukan username: <code>mimind</code>, dan password: <code>admin123*</code>. Jika berhasil harusnya masuk ke halaman admin sample.
            </p>
            
            <div class="" style="padding: 7%;">
              <amp-img layout="responsive" width="1372px" height="675px" :src="intro1end" style="box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -webkit-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -moz-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72);"></amp-img>
            </div>

          </div>
        </div>
      </div>
      
      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/tutorial/admin/introduction/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Intro: Admin
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/tutorial/admin/perusahaan-master-data" class="btn">
            Tutorial: Modul Master Data Perusahaan
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
      title: 'Login di Halaman Admin',
      description: 'Tutorial kali ini membuat login untuk halaman admin di Seme Framework 4',
      loginAdminExample: require('~/assets/img/tutorial/admin/login-admin-example.png'),
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
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/tutorial/admin/introduction',
          text: 'Admin',
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
      "dateCreated": "2021-09-24T22:53:01+07:00",
      "datePublished": "2021-09-24T22:53:01+07:00",
      "dateModified": "2021-09-25T22:53:01+07:00",
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
