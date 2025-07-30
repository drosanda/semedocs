<template>
    <div class="section">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul class="breadcrumbs">
            <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
            <li class=""><NuxtLink to="/id">4.0.3 (Bahasa)</NuxtLink></li>
            <li class=""><NuxtLink to="/id/tutorial">Tutorial</NuxtLink></li>
            <li class=""><NuxtLink to="/id/tutorial/admin/introduction/">admin</NuxtLink></li>
            <li class="unavailable">Master Data Perusahaan</li>
          </ul>
        </nav>
        <div>
          <div class="column">
            <div class="content">
              <h1 class="">Master Data Perusahaan</h1>
              <p>
                Pada tutorial kali ini kita akan membuat master data perusahaan.
                Master data perusahaan ini akan kita gunakan untuk mengelola data perusahaan.
                Pada data ini juga kita akan coba implementasikan AJAX dan DataTable.
              </p>
              
              <div class="" style="padding: 7%;">
                <amp-img layout="responsive" width="1173px" height="774px" :src="homeDataMasterPerusahaan" style="box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -webkit-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -moz-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72);"></amp-img>
              </div>
              <p>
                Untuk membuatnya, kita akan melalui tahapan-tahapan sebagai berikut:
              </p>
              <ol>
                <li>Pembuatan table a_company dan sample isinya</li>
                <li>Pembuatan concern dan model a_company</li>
                <li>Penyesuaian JI_Controller untuk validasi dan API</li>
                <li>Pembuatan controller untuk API dan view</li>
                <li>Pembuatan view dan komponen HTML untuk datatable, form tambah dan edit, dan juga detail</li>
                <li>Menambahkan ke menu sidebar</li>
              </ol>
              <p>
                Kemudian untuk file yang akan diubah atau dibuat baru melingkupi:
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
                    ├── core/
                    │&#160;└── ji_controller.php
                    ├── controller/
                    │&#160;└── admin/
                    │&#160;│&#160;└── perusahaan/
                    │&#160;│&#160;&#160;&#160;└── masterdata.php
                    │&#160;└── api_admin/
                    │&#160;&#160;└── perusahaan/
                    │&#160;&#160;&#160;&#160;└── masterdata.php
                    └── view/
                    &#160;└── admin/
                    &#160;&#160;├── page/
                    &#160;&#160;│&#160;&#160;├──  component/
                    &#160;&#160;│&#160;&#160;│&#160;&#160;├── filter_button.php
                    &#160;&#160;│&#160;&#160;│&#160;&#160;├── simpan_button.php
                    &#160;&#160;│&#160;&#160;│&#160;&#160;└── simpan_perubahan_button.php
                    &#160;&#160;│&#160;&#160;└── page/
                    &#160;&#160;│&#160;&#160;&#160;&#160;└── sidebar.php
                    &#160;&#160;└── perusahaan/
                    &#160;&#160;&#160;&#160;└── masterdata/
                    &#160;&#160;&#160;&#160;&#160;&#160;├── _option_utype.php
                    &#160;&#160;&#160;&#160;&#160;&#160;├── baru_bottom.php
                    &#160;&#160;&#160;&#160;&#160;&#160;├── baru_modal.php
                    &#160;&#160;&#160;&#160;&#160;&#160;├── baru.php
                    &#160;&#160;&#160;&#160;&#160;&#160;├── detail_bottom.php
                    &#160;&#160;&#160;&#160;&#160;&#160;├── detail_modal.php
                    &#160;&#160;&#160;&#160;&#160;&#160;├── detail.php
                    &#160;&#160;&#160;&#160;&#160;&#160;├── edit_bottom.php
                    &#160;&#160;&#160;&#160;&#160;&#160;├── edit_modal.php
                    &#160;&#160;&#160;&#160;&#160;&#160;├── edit.php
                    &#160;&#160;&#160;&#160;&#160;&#160;├── home_bottom.php
                    &#160;&#160;&#160;&#160;&#160;&#160;├── home_modal.php
                    &#160;&#160;&#160;&#160;&#160;&#160;└── home.php
                  </highlight-code>
                </div>
              </div>
  
              <h2 id="part1">Pembuatan table a_company dan sample isinya</h2>
              <p>
                Pertama-tama kita akan membuat tabel baru untuk penyimpanan data <b>data master perusahaan</b>.
                Data user pada tutorial kali ini akan disimpan dalam sebuah tabel bernama <code>a_company</code>.
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

DROP TABLE IF EXISTS &#x60;a_company&#x60;;

CREATE TABLE &#x60;a_company&#x60; (
  &#x60;id&#x60; int(10) unsigned NOT NULL AUTO_INCREMENT,
  &#x60;utype&#x60; enum(&#x27;Pusat&#x27;,&#x27;Cabang&#x27;) NOT NULL DEFAULT &#x27;Pusat&#x27;,
  &#x60;kode&#x60; varchar(16) NOT NULL,
  &#x60;nama&#x60; varchar(100) NOT NULL,
  &#x60;created_at&#x60; datetime NOT NULL,
  &#x60;updated_at&#x60; timestamp NULL DEFAULT NULL,
  &#x60;negara&#x60; varchar(128) DEFAULT NULL,
  &#x60;provinsi&#x60; varchar(78) DEFAULT NULL,
  &#x60;kabkota&#x60; varchar(150) DEFAULT NULL,
  &#x60;kecamatan&#x60; varchar(78) DEFAULT NULL,
  &#x60;desakel&#x60; varchar(78) DEFAULT NULL,
  &#x60;telp&#x60; varchar(24) DEFAULT NULL,
  &#x60;is_active&#x60; int(1) unsigned NOT NULL DEFAULT 1,
  &#x60;is_deleted&#x60; int(1) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (&#x60;id&#x60;)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

SET FOREIGN_KEY_CHECKS=1;
                  </highlight-code>
                </div>
              </div>
  
              <p>
                Kemudian setelah itu, kita akan masukan 2 sample data perusahaan, <i>Copy paste</i> kode SQL dibawah ini dan jalankan di <b>PhpMyAdmin</b> atau <b>MySQL</b> <i>query</i>-nya langsung untuk menambahkan user admin baru.
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
                    insert into &#x60;a_company&#x60;(
  &#x9;utype,
  &#x9;kode,
  &#x9;nama,
  &#x9;created_at,
  &#x9;updated_at,
  &#x9;negara,
  &#x9;provinsi,
  &#x9;kabkota
  )
  values(
  &#x9;&#x27;Cabang&#x27;,
  &#x9;&#x27;Cetek&#x27;,
  &#x9;&#x27;PT Cipta Esensi Teknologi&#x27;,
  &#x9;NOW(),
  &#x9;null,
  &#x9;&#x27;Indonesia&#x27;,
  &#x9;&#x27;Jawa Barat&#x27;,
  &#x9;&#x27;Kab. Bandung&#x27;
  ),(
  &#x9;&#x27;Pusat&#x27;,
  &#x9;&#x27;CENAH&#x27;,
  &#x9;&#x27;PT Cipta Esensi Merenah&#x27;,
  &#x9;NOW(),
  &#x9;null,
  &#x9;&#x27;Indonesia&#x27;,
  &#x9;&#x27;Jawa Barat&#x27;,
  &#x9;&#x27;Kab. Bandung&#x27;
  );
                  </highlight-code>
                </div>
              </div>
  
              <h2 id="part3">Pembuatan concern dan model <code>a_company</code></h2>
              <p>
                Setelah mengimport tabel <code>a_company</code> kedalam database, sekarang saatnya membuat <code>concern class</code> untuk tabel <code>a_company</code>.
                Caranya buat file baru di <code>app/model/a_company_concern.php</code>, kemudian <i>copy paste</i> kode dibawah ini dan simpan perubahan pada file tersebut.
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
class A_Company_Concern extends \JI_Model
{
    public $table = &#x27;a_company&#x27;;
    public $table_alias = &#x27;ac&#x27;;

    public function __construct()
    {
        parent::__construct();
        $this-&#x3E;db-&#x3E;from($this-&#x3E;table, $this-&#x3E;table_alias);
    }

    protected function filter_utype($utype=&#x27;&#x27;)
    {
        if (strlen($utype)) {
            $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;table_alias.utype&#x22;,  $this-&#x3E;db-&#x3E;esc($utype));
        }

        return $this;
    }

    protected function filter_is_active($is_active=&#x27;&#x27;)
    {
        if (strlen($is_active)) {
            $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;table_alias.is_active&#x22;, $this-&#x3E;db-&#x3E;esc($is_active));
        }

        return $this;
    }

    protected function filter_keyword($keyword=&#x27;&#x27;)
    {
        if (strlen($keyword) &#x3E; 2) {
            $this-&#x3E;db
                -&#x3E;where_as(&#x22;$this-&#x3E;table_alias.kode&#x22;, $keyword, &#x27;OR&#x27;, &#x27;%like%&#x27;, 1, 0)
                -&#x3E;where_as(&#x22;$this-&#x3E;table_alias.nama&#x22;, $keyword, &#x27;OR&#x27;, &#x27;%like%&#x27;, 0, 0)
                -&#x3E;where_as(&#x22;$this-&#x3E;table_alias.telp&#x22;, $keyword, &#x27;and&#x27;, &#x27;%like%&#x27;, 0, 1);
        }

        return $this;
    }
}
                  </highlight-code>
                </div>
              </div>
              
              <h3>Pembuatan Model a_company untuk PoV API Admin</h3>
              <p>
                Kemudian sekarang membuat model a_company hanya untuk ruang lingkup <code>api_admin</code> saja. 
                Ini berarti model yang ini hanya akan dipakai dibawah <code>controller/api_admin/</code>.
                Hal ini dilakukan supaya kode dapat dimaintenance dengan mudah apabila nanti ada perubahan.
                unutk itu buatlah file baru di <code>app/model/api_admin/a_company_model.php</code>, 
                kemudian <i>copy paste</i> kode dibawah ini dan simpan perubahan pada file tersebut.
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
namespace Model\Admin\API;

register_namespace(__NAMESPACE__);
/**
 * Scoped &#x60;api_admin&#x60; model for &#x60;a_company&#x60; table
 *
 * @version 1.0.0
 *
 * @package Model\Admin\API
 * @since 1.0.0
 */
class A_Company_Model extends \Model\A_Company_Concern
{

    public function __construct()
    {
        parent::__construct();
    }

    private function filter($keyword=&#x27;&#x27;, $uytpe=&#x27;&#x27;, $is_active=&#x27;&#x27;)
    {
        $this
            -&#x3E;filter_utype($uytpe)
            -&#x3E;filter_is_active($is_active)
            -&#x3E;filter_keyword($keyword);
        return $this;
    }

    public function count($keyword, $utype, $is_active)
    {
        $this-&#x3E;db-&#x3E;select_as(&#x22;COUNT(1)&#x22;, &#x27;total&#x27;);
        $this-&#x3E;db-&#x3E;from($this-&#x3E;table, $this-&#x3E;table_alias);
        $this-&#x3E;filter($keyword, $utype, $is_active);
        $result = $this-&#x3E;db-&#x3E;get_first();
        if (isset($result-&#x3E;total)) {
            return $result-&#x3E;total;
        } else {
            return 0;
        }
    }

    public function data($page, $pagesize, $sorting_column, $sorting_direction, $keyword, $utype, $is_active)
    {
        $this-&#x3E;db
            -&#x3E;select_as(&#x22;$this-&#x3E;table_alias.id&#x22;, &#x27;id&#x27;)
            -&#x3E;select_as(&#x22;$this-&#x3E;table_alias.utype&#x22;, &#x27;utype&#x27;)
            -&#x3E;select_as(&#x22;$this-&#x3E;table_alias.kode&#x22;, &#x27;kode&#x27;)
            -&#x3E;select_as(&#x22;$this-&#x3E;table_alias.nama&#x22;, &#x27;nama&#x27;)
            -&#x3E;select_as(&#x22;CONCAT($this-&#x3E;table_alias.kabkota, &#x27; &#x27;, $this-&#x3E;table_alias.provinsi)&#x22;, &#x27;alamat&#x27;)
            -&#x3E;select_as(&#x22;$this-&#x3E;table_alias.telp&#x22;, &#x27;telp&#x27;)
            -&#x3E;select_as(&#x22;$this-&#x3E;table_alias.is_active&#x22;, &#x27;is_active&#x27;)
            -&#x3E;select_as(&#x22;$this-&#x3E;table_alias.is_deleted&#x22;, &#x27;is_deleted&#x27;);
        $this-&#x3E;db-&#x3E;from($this-&#x3E;table, $this-&#x3E;table_alias);
        $this-&#x3E;filter($keyword, $utype, $is_active);
        $this-&#x3E;db-&#x3E;order_by($sorting_column, $sorting_direction)-&#x3E;limit($page, $pagesize);

        return $this-&#x3E;db-&#x3E;get();
    }
}
                  </highlight-code>
                </div>
              </div>
              
              <h3>Pembuatan Model a_company untuk PoV Admin</h3>
              <p>
                Setelah PoV API Admin, selanjutnya kita akan membuat untuk Admin.
                File model ini akan digunakan di <code>controller/admin/</code> saja.
                Buat lagi file baru di <code>app/model/admin/a_company_model.php</code>,
                kemudian <i>copy paste</i> kode dibawah ini dan simpan perubahan pada file tersebut.
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
 * Scoped &#x60;admin&#x60; model for &#x60;a_company&#x60; table
 *
 * @version 1.0.0
 *
 * @package Model\Admin
 * @since 1.0.0
 */
class A_Company_Model extends \Model\A_Company_Concern
{

    public function __construct()
    {
        parent::__construct();
    }
}
                  </highlight-code>
                </div>
              </div>
              
              <h2>Penyesuaian kode di JI_Controller dan JI_Model</h2>
              <p>
                Kelas JI_Controller merupakan kelas yang dipanggil oleh semua controller.
                untuk itu, apabila ada method-method atau fungsi-fungsi yang ingin tersedia pada setiap kelas controller,
                harus di definisikan disini.
              </p>
              <p>
                <b>Contoh</b>: Fungsi untuk menampilkan JSON pada HTTP response untuk keperluan API itu pasti selalu ada untuk controller pada PoV API.
              </p>
              <p>
                Sekarang kita ubah code pada <code>app/core/ji_controller.php</code>, menjadi seperti ini:
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

    private function __json_response_default($data)
    {
        $data = array();
        $data[&#x22;status&#x22;]  = (int) $this-&#x3E;status;
        $data[&#x22;message&#x22;] = $this-&#x3E;message;
        $data[&#x22;data&#x22;]  = $data;

        return $data;
    }

    protected function response_missing_required_parameter()
    {
        $this-&#x3E;status = 422;
        $this-&#x3E;message = &#x27;One or more parameter was missing&#x27;;
        header(&#x22;HTTP/1.0 422 missing some required parameter(s)&#x22;);
        $this-&#x3E;__json_out(array());
        die();
    }

    protected function response_no_data()
    {
        $this-&#x3E;status = 204;
        $this-&#x3E;message = &#x27;No data&#x27;;
        header(&#x22;HTTP/1.0 204 no data&#x22;);
        $this-&#x3E;__json_out(array());
        die();
    }

    protected function validate_id($id)
    {
        $id = intval($id);
        if ($id &#x3C;= 0) {
            $id = 0;
        }

        if (empty($id)) {
            $this-&#x3E;response_missing_required_parameter();
        }

        return $id;
    }

    /**
     * API need to protected from unauthorized access
     *
     * @param  mixed $dt input object or array
     * @return string     sting json formatted with its header
     */
    public function __protect_api($data=array())
    {
        if (!$this-&#x3E;admin_login) {
            $this-&#x3E;status = 400;
            $this-&#x3E;message = &#x27;Harus login&#x27;;
            header(&#x22;HTTP/1.0 400 Harus login&#x22;);
            $this-&#x3E;__json_out($data);
            die();
        }
    }

    private function sorting_direction()
    {
        $sorting_direction = strtoupper($this-&#x3E;input-&#x3E;post(&#x22;sSortDir_0&#x22;, &#x27;DESC&#x27;));
        if ($sorting_direction != &#x22;ASC&#x22;) {
            return &#x27;DESC&#x27;;
        } else {
            return &#x27;ASC&#x27;;
        }
    }

    private function sorting_column()
    {
        return trim(strtoupper($this-&#x3E;input-&#x3E;post(&#x22;iSortCol_0&#x22;, &#x27;id&#x27;)));
    }

    private function filter_keyword()
    {
        return trim(strip_tags($this-&#x3E;input-&#x3E;post(&#x22;sSearch&#x22;, &#x27;&#x27;)));
    }

    /**
     * Build data table request
     *
     * @return object     datatable request object
     */
    public function __datatable_request()
    {
        $datatable_request = new stdClass();
        $datatable_request-&#x3E;sorting =  new stdClass();
        $datatable_request-&#x3E;sorting-&#x3E;column = $this-&#x3E;sorting_column();
        $datatable_request-&#x3E;sorting-&#x3E;direction = $this-&#x3E;sorting_direction();
        $datatable_request-&#x3E;filter = new stdClass();
        $datatable_request-&#x3E;filter-&#x3E;keyword = $this-&#x3E;filter_keyword();
        $datatable_request-&#x3E;pagination = new stdClass();
        $datatable_request-&#x3E;pagination-&#x3E;page = $this-&#x3E;input-&#x3E;post(&#x22;iDisplayStart&#x22;);
        $datatable_request-&#x3E;pagination-&#x3E;size = intval($this-&#x3E;input-&#x3E;post(&#x22;iDisplayLength&#x22;, 0));
        
        return $datatable_request;
    }

    /**
     * Procedure for output the json formatted string
     *   to HTTP Response
     *
     * @param  mixed $dt input object or array
     * @return string     sting json formatted with its header
     */
    public function __json_out($data)
    {
        $this-&#x3E;lib(&#x27;sene_json_engine&#x27;, &#x27;sene_json&#x27;);
        $this-&#x3E;sene_json-&#x3E;out($this-&#x3E;__json_response_default($data));
        die();
    }
    

    /**
     * Procedure for generating output for datatable response
     *   on JSON format
     * 
     * This can be consumed for DataTable Ajax request API
     *
     * @param array $data    array of object
     * @param int   $count   number of counted row
     * @param array $another array of array for addition information
     * 
     * @return      Datatable array of array response
     */
    public function __json__datatable($data, $count, $another=array())
    {
        $this-&#x3E;lib(&#x27;sene_json_engine&#x27;, &#x27;sene_json&#x27;);
        $rdata = array();
        if (!is_array($data)) {
            $data = array();
        }
        $dt1 = array();
        $dt2 = array();
        if (!is_array($data)) {
            trigger_error(&#x27;jsonDataTable first params need array!&#x27;);
            die();
        }
        foreach ($data as $dat) {
            $dt2 = array();
            if (is_int($dat)) {
                trigger_error(&#x27;[ERROR: &#x27;.$dat.&#x27;] Data table not well performed because a query execution error!&#x27;);
            }
            foreach ($dat as $dt) {
                $dt2[] = $dt;
            }
            $dt1[] = $dt2;
        }

        if (is_array($another)) {
            $rdata = $another;
        }
        $rdata[&#x27;data&#x27;] = $dt1;
        $rdata[&#x27;recordsFiltered&#x27;] = $count;
        $rdata[&#x27;recordsTotal&#x27;] = $count;
        $rdata[&#x27;status&#x27;] = (int) $this-&#x3E;status;
        $rdata[&#x27;message&#x27;] = $this-&#x3E;message;
        $this-&#x3E;sene_json-&#x3E;out($rdata);
        die();
    }

    public function index() { }
}
                  </highlight-code>
                </div>
              </div>
              
              <p>
                Kemudian untuk file <code>app/core/ji_model.php</code>, buatlah menjadi seperti ini.
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

              <h2>Membuat Controller untuk halaman perusahaan master data</h2>
              <p>
                Setelah selesai penyesuaian kode pada kelas core (JI_Controller dan JI_Model), sekarang kita akan membuat file baru untuk
                halaman data master perusahaan.
                Pada kelas controller kali ini akan ada <em>Point of View</em> (sudut pandang) yaitu <code>API_Admin</code> dan <code>Admin</code>.
              </p>

              <h3>Controller untuk PoV Admin</h3>
              <p>
                Pada versi admin hanya digunakan untuk memanggil view saja, mari kita buat file di <code>app/controller/admin/perusahaan/masterdata.php</code>,
                dan <em>copy</em> <em>paste</em> kode dibawah ini
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
* Main Controller Class for Perusahaan Master Data
*   on PoV Admin
*
* Mostly for this controller will resulting HTTP Body Content in HTML format
*
* @version 1.0.0
*
* @package Controller\Admin\Perusahaan
* @since 1.0.0
*/
class MasterData extends JI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this-&#x3E;setTheme(&#x27;admin&#x27;);
        $this-&#x3E;load(&#x22;a_company_concern&#x22;);
        $this-&#x3E;load(&#x22;admin/a_company_model&#x22;, &#x27;acm&#x27;);
        $this-&#x3E;lib(&#x22;seme_purifier&#x22;);
        $this-&#x3E;current_parent = &#x27;perusahaan&#x27;;
        $this-&#x3E;current_page = &#x27;perusahaan_masterdata&#x27;;
    }
    public function index()
    {
        $data = $this-&#x3E;__init();
        if(!$this-&#x3E;admin_login) {
            redir(base_url_admin(&#x27;login&#x27;));
            die();
        }

        $this-&#x3E;setTitle(&#x27;Perusahaan: Master Data &#x27;.$this-&#x3E;config_semevar(&#x22;admin_site_suffix&#x22;));

        $this-&#x3E;putThemeContent(&#x22;perusahaan/masterdata/home_modal&#x22;, $data);
        $this-&#x3E;putThemeContent(&#x22;perusahaan/masterdata/home&#x22;, $data);
        $this-&#x3E;putJsContent(&#x22;perusahaan/masterdata/home_bottom&#x22;, $data);
        $this-&#x3E;loadLayout(&#x27;col-2-left&#x27;, $data);

        $this-&#x3E;render();
    }

    public function baru()
    {
        $data = $this-&#x3E;__init();
        if(!$this-&#x3E;admin_login) {
            redir(base_url_admin(&#x27;login&#x27;));
            die();
        }

        $this-&#x3E;setTitle(&#x27;Perusahaan: Master Data: Baru &#x27;.$this-&#x3E;config_semevar(&#x22;admin_site_suffix&#x22;));

        $this-&#x3E;putThemeContent(&#x22;perusahaan/masterdata/baru_modal&#x22;, $data);
        $this-&#x3E;putThemeContent(&#x22;perusahaan/masterdata/baru&#x22;, $data);
        $this-&#x3E;putJsContent(&#x22;perusahaan/masterdata/baru_bottom&#x22;, $data);
        $this-&#x3E;loadLayout(&#x27;col-2-left&#x27;, $data);

        $this-&#x3E;render();
    }

    public function edit($id)
    {
        $data = $this-&#x3E;__init();
        if (!$this-&#x3E;admin_login) {
            redir(base_url_admin(&#x27;login&#x27;));
            die();
        }

        $acm = $this-&#x3E;acm-&#x3E;id(intval($id));
        if(!isset($acm-&#x3E;id)) {
            redir(base_url_admin(&#x27;perusahaan/masterdata/&#x27;));
            die();
        }

        $data[&#x27;acm&#x27;] = $acm;

        $this-&#x3E;setTitle(&#x27;Perusahaan: Master Data: Edit #&#x27;.$acm-&#x3E;id.&#x27; &#x27;.$this-&#x3E;config_semevar(&#x22;admin_site_suffix&#x22;));

        $this-&#x3E;putThemeContent(&#x22;perusahaan/masterdata/edit_modal&#x22;, $data);
        $this-&#x3E;putThemeContent(&#x22;perusahaan/masterdata/edit&#x22;, $data);
        $this-&#x3E;putJsContent(&#x22;perusahaan/masterdata/edit_bottom&#x22;, $data);
        $this-&#x3E;loadLayout(&#x27;col-2-left&#x27;, $data);

        $this-&#x3E;render();
    }

    public function detail($id)
    {
        $data = $this-&#x3E;__init();
        if (!$this-&#x3E;admin_login) {
            redir(base_url_admin(&#x27;login&#x27;));
            die();
        }
        $id = (int) $id;
&#x9;&#x9;
        $acm = $this-&#x3E;acm-&#x3E;id(intval($id));
        if(!isset($acm-&#x3E;id)) {
            redir(base_url_admin(&#x27;perusahaan/masterdata/&#x27;));
            die();
        }
&#x9;&#x9;
        $data[&#x27;acm&#x27;] = $acm;
        
&#x9;&#x9;$this-&#x3E;setTitle(&#x27;Perusahaan: Master Data: Detail #&#x27;.$acm-&#x3E;id.&#x27; &#x27;.$this-&#x3E;config_semevar(&#x22;admin_site_suffix&#x22;));
        
&#x9;&#x9;$this-&#x3E;putThemeContent(&#x22;perusahaan/masterdata/detail&#x22;, $data);
        $this-&#x3E;putJsContent(&#x22;perusahaan/masterdata/detail_bottom&#x22;, $data);
        $this-&#x3E;loadLayout(&#x27;col-2-left&#x27;, $data);

        $this-&#x3E;render();
    }
}
                  </highlight-code>
                </div>
              </div>

              <h3>Controller untuk PoV API Admin</h3>
              <p>
                Selanjutnya kita akan membuat untuk PoV <code>API_Admin</code>.
                Pada PoV API admin, controller akan bertindak sebagai <em>middleware</em> sekaligus <em>data source</em>.
                Buat file di <code>app/controller/api_admin/perusahaan/masterdata.php</code>,
                lalu <em>copy</em> <em>paste</em> kode dibawah ini
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
* Main Controller Class for Perusahaan Master Data
*   on PoV API Admin
*
* Mostly for this controller will resulting HTTP Body Content in HTML format
*
* @version 1.0.0
*
* @package Controller\Admin\API\Perusahaan
* @since 1.0.0
*/
class MasterData extends \JI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this-&#x3E;lib(&#x22;seme_purifier&#x22;);
        $this-&#x3E;load(&#x22;a_company_concern&#x22;);
        $this-&#x3E;load(&#x22;api_admin/a_company_model&#x22;, &#x27;acm&#x27;);
    }

    /**
     * Mapping the column number from datatable request into column name
     *
     * @param  int     $column_number
     * 
     * @return string  Full qualified column name with table prefix
     */
    private function sorting_column($column_number)
    {
        // define all table aliases here
        $table_alias = $this-&#x3E;acm-&#x3E;table_alias;

        // translate number column from datatable request to
        //   column name
        switch ($column_number) {
            case 0:
                $sorting_column = &#x22;$table_alias.id&#x22;;
                break;
            case 1:
                $sorting_column = &#x22;$table_alias.utype&#x22;;
                break;
            case 2:
                $sorting_column = &#x22;$table_alias.kode&#x22;;
                break;
            case 3:
                $sorting_column = &#x22;$table_alias.nama&#x22;;
                break;
            case 4:
                $sorting_column = &#x22;concat($table_alias.kabkota, &#x27; &#x27;, $table_alias.provinsi)&#x22;;
                break;
            case 5:
                $sorting_column = &#x22;$table_alias.telp&#x22;;
                break;
            case 6:
                $sorting_column = &#x22;$table_alias.is_active&#x22;;
                break;
            default:
                $sorting_column = &#x22;$table_alias.id&#x22;;
        }

        return $sorting_column;
    }

    public function index()
    {
        $init_data = $this-&#x3E;__init();
        $this-&#x3E;__protect_api();
        
        $request = $this-&#x3E;__datatable_request();
        $utype = $this-&#x3E;input-&#x3E;post(&#x22;utype&#x22;, &#x27;&#x27;);
        $is_active = $this-&#x3E;input-&#x3E;post(&#x22;is_active&#x22;, &#x27;&#x27;);
        
        $this-&#x3E;status = 200;
        $this-&#x3E;message = &#x27;Berhasil&#x27;;
        $result_data = $this-&#x3E;acm-&#x3E;data($request-&#x3E;pagination-&#x3E;page, $request-&#x3E;pagination-&#x3E;size, $this-&#x3E;sorting_column($request-&#x3E;sorting-&#x3E;column), $request-&#x3E;sorting-&#x3E;direction, $request-&#x3E;filter-&#x3E;keyword, $utype, $is_active);
        $result_count = $this-&#x3E;acm-&#x3E;count($request-&#x3E;filter-&#x3E;keyword, $utype, $is_active);

        foreach($result_data as &#x26;$gd){
            if (isset($gd-&#x3E;nama)) {
                $gd-&#x3E;nama = htmlentities(rtrim($gd-&#x3E;nama, &#x27; - &#x27;));
            }
            if (isset($gd-&#x3E;utype)) {
                $gd-&#x3E;utype = ucfirst($gd-&#x3E;utype);
            }
            if (isset($gd-&#x3E;alamat)) {
                $gd-&#x3E;alamat = htmlentities(ltrim($gd-&#x3E;alamat, &#x27;, &#x27;));
            }
            if (isset($gd-&#x3E;is_active)) {
                if (!empty($gd-&#x3E;is_active)) {
                    $gd-&#x3E;is_active = &#x27;&#x3C;label class=&#x22;label label-success&#x22;&#x3E;Aktif&#x3C;/label&#x3E;&#x27;;
                }else{
                    $gd-&#x3E;is_active = &#x27;&#x3C;label class=&#x22;label label-default&#x22;&#x3E;Tidak Aktif&#x3C;/label&#x3E;&#x27;;
                }
            }
        }

        $this-&#x3E;__json__datatable($result_data, $result_count);
    }

    private function validate_input()
    {
        $data_to_insert = $_POST;

        foreach ($data_to_insert as &#x26;$di){
            $di = trim(strip_tags($di));
        }

        if (!isset($data_to_insert[&#x27;nama&#x27;])) {
            $this-&#x3E;response_missing_required_parameter();
        }

        return $data_to_insert;
    }
    
    public function baru()
    {
        $init_data = $this-&#x3E;__init();
        $this-&#x3E;__protect_api();
        
        $this-&#x3E;acm-&#x3E;trans_start();
        $res = $this-&#x3E;acm-&#x3E;set($this-&#x3E;validate_input());
        if ($res) {
            $this-&#x3E;acm-&#x3E;trans_commit();
            $this-&#x3E;status = 200;
            $this-&#x3E;message = &#x27;Data baru berhasil ditambahkan&#x27;;

        }else{
            $this-&#x3E;status = 901;
            $this-&#x3E;message = &#x27;Tidak dapat menyimpan data ke database&#x27;;
            $this-&#x3E;acm-&#x3E;trans_rollback();
        }
        $this-&#x3E;acm-&#x3E;trans_end();

        $this-&#x3E;__json_out(array());
    }

    public function detail($id)
    {
        $init_data = $this-&#x3E;__init();
        $this-&#x3E;__protect_api();

        $data = $this-&#x3E;acm-&#x3E;id($this-&#x3E;validate_id($id));
        if (!isset($data-&#x3E;id)) {
            $this-&#x3E;response_no_data();
        }
        
        $this-&#x3E;status = 200;
        $this-&#x3E;message = &#x27;Berhasil&#x27;;
        $this-&#x3E;__json_out($data);
    }

    public function edit($id)
    {
        $init_data = $this-&#x3E;__init();
        $this-&#x3E;__protect_api();

        $acm = $this-&#x3E;acm-&#x3E;id($this-&#x3E;validate_id($id));
        if (!isset($acm-&#x3E;id)) {
            $this-&#x3E;response_no_data();
        }

        $res = $this-&#x3E;acm-&#x3E;update($id, $this-&#x3E;validate_input());
        if ($res) {
            $this-&#x3E;status = 200;
            $this-&#x3E;message = &#x27;Success&#x27;;
        }else{
            $this-&#x3E;status = 901;
            $this-&#x3E;message = &#x27;Tidak dapat merubah data ke database&#x27;;
        }
        $this-&#x3E;__json_out(array());
    }

    public function hapus($id)
    {
        $init_data = $this-&#x3E;__init();
        $this-&#x3E;__protect_api();

        $acm = $this-&#x3E;acm-&#x3E;id($this-&#x3E;validate_id($id));
        if (!isset($acm-&#x3E;id)) {
            $this-&#x3E;response_no_data();
        }
        
        $res = $this-&#x3E;acm-&#x3E;del($id);
        if ($res) {
            $this-&#x3E;status = 200;
            $this-&#x3E;message = &#x27;Berhasil&#x27;;
        }else{
            $this-&#x3E;status = 902;
            $this-&#x3E;message = &#x27;Tidak dapat menghapus data ke database&#x27;;
        }
        $this-&#x3E;__json_out(array());
    }
    
}
                  </highlight-code>
                </div>
              </div>
              
              <h2>Membuat Komponen HTML dan View untuk Halaman Master Data Perusahaan</h2>
              <p>
                Setelah controller sudah siap, kini saatnya untuk membuat komponen HTML seperti button dan lain-lain, juga 
                halaman dari master data perusahaan itu sendiri beserta form untuk input dan edit data.
              </p>

              <h3>Pembuatan Komponen HTML</h3>
              <p>
                Komponen yang pertama yang akan kita buat yaitu komponen filter button.
                Buatlah file baru di <code>app/view/admin/page/component/filter_button.php</code>,
                kemudian <em>copy paste</em> kode dibawah ini
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
                    &#x3C;button id=&#x22;filter_button&#x22; class=&#x22;btn btn-info btn-alt btn-block btn-submit&#x22;&#x3E;
    Filter &#x3C;i class=&#x22;fa fa-filter icon-submit&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/button&#x3E;
                  </highlight-code>
                </div>
              </div>
              
              <p>
                Selanjutnya komponen untuk button simpan yang akan digunakan oleh setiap isian form.
                Buatlah file baru di <code>app/view/admin/page/component/simpan_button.php</code>,
                kemudian <em>copy paste</em> kode dibawah ini
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
                    &#x3C;button type=&#x22;submit&#x22; class=&#x22;btn btn-primary btn-submit&#x22;&#x3E;
    Simpan &#x3C;i class=&#x22;fa fa-save icon-submit&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/button&#x3E;
                  </highlight-code>
                </div>
              </div>

              <p>
                Lalu kita buat komponen untuk list option di modul perusahaan saja, filenya ada di <code>app/view/admin/perusahaan/masterdata/_option_utype.php</code>,
                kemudian <em>copy paste</em> kode dibawah ini
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
                    &#x3C;option value=&#x22;Pusat&#x22;&#x3E;Pusat&#x3C;/option&#x3E;
&#x3C;option value=&#x22;Cabang&#x22;&#x3E;Cabang&#x3C;/option&#x3E;
                  </highlight-code>
                </div>
              </div>

              <p>
                Terakhir komponen untuk button simpan perubahan yang akan digunakan oleh setiap isian form.
                Buatlah file baru di <code>app/view/admin/page/component/simpan_perubahan_button.php</code>,
                kemudian <em>copy paste</em> kode dibawah ini
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
                    &#x3C;button type=&#x22;submit&#x22; class=&#x22;btn btn-primary btn-submit&#x22;&#x3E;
    Simpan Perubahan &#x3C;i class=&#x22;fa fa-save icon-submit&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/button&#x3E;
                  </highlight-code>
                </div>
              </div>

              <h3>View HTML untuk Home di Master Data Perusahaan</h3>
              <p>
                Setelah selesai dengan komponen HTML, sekarang kita akan membuat viewnya yang akan digunakan untuk menampilkan data
                master perusahaan dalam bentuk tabel.
                Bukan hanya itu saja, pada halaman ini kita juga akan menambahkan filter berdasarkan kata kunci <em>keyword</em>
                dan juga filter berdasarkan <em>Flag</em>.
              </p>
              <p>
                Akan ada 3 file yang akan dibuat untuk halaman ini, yaitu:
                <ol>
                  <li><code>home.php</code></li>
                  <li><code>home_modal.php</code></li>
                  <li><code>home_bottom.php</code></li>
                </ol>
              </p>
              <p>
                Sekarang mari kita buat file baru di <code>app/view/admin/perusahaan/masterdata/home.php</code>,
                seperti biasa <em>copy paste</em> kode dibawah ini.
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
&#x9;&#x9;&#x3C;div class=&#x22;row&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-6&#x22;&#x3E;&#x26;nbsp;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-6&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;btn-group pull-right&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a id=&#x22;&#x22; href=&#x22;&#x3C;?=base_url_admin(&#x27;perusahaan/masterdata/baru/&#x27;)?&#x3E;&#x22; class=&#x22;btn btn-info&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-plus&#x22;&#x3E;&#x3C;/i&#x3E; Baru&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;ul class=&#x22;breadcrumb breadcrumb-top&#x22;&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;Admin&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;Perusahaan&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;Master Data&#x3C;/li&#x3E;
&#x9;&#x3C;/ul&#x3E;
&#x9;&#x3C;!-- END Static Layout Header --&#x3E;

&#x9;&#x3C;!-- Content --&#x3E;
&#x9;&#x3C;div class=&#x22;block full&#x22;&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;block-title&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;h4&#x3E;&#x3C;strong&#x3E;Master Data Perusahaan&#x3C;/strong&#x3E;&#x3C;/h4&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;

&#x9;&#x9;&#x3C;div class=&#x22;row row-filter&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-1 col-md-2 col-sm-6&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;label&#x3E;Jenis&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;select id=&#x22;fl_utype&#x22; class=&#x22;form-control&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;option value=&#x22;&#x22;&#x3E;-- Semua --&#x3C;/option&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x27;perusahaan/masterdata/_option_utype&#x27;, $__forward); ?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/select&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-1 col-md-2 col-sm-6&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;label&#x3E;Status&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;select id=&#x22;fl_is_active&#x22; class=&#x22;form-control&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;option value=&#x22;&#x22;&#x3E;-- Semua --&#x3C;/option&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;option value=&#x22;1&#x22;&#x3E;Aktif&#x3C;/option&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;option value=&#x22;0&#x22;&#x3E;Tidak Aktif&#x3C;/option&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/select&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-9 col-md-6 col-sm-8 col-xs-6&#x22;&#x3E;&#x26;nbsp;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-1 col-md-2 col-sm-4 col-xs-6&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;label&#x3E;&#x26;nbsp;&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;button id=&#x22;filter_button&#x22; class=&#x22;btn btn-info btn-alt btn-block btn-submit&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;Filter &#x3C;i class=&#x22;fa fa-filter icon-submit&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/button&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;

&#x9;&#x9;&#x3C;div class=&#x22;table-responsive&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;table id=&#x22;drTable&#x22; class=&#x22;table table-vcenter table-condensed table-bordered&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;thead&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;th class=&#x22;text-center&#x22;&#x3E;ID&#x3C;/th&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;th&#x3E;Jenis&#x3C;/th&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;th&#x3E;Kode&#x3C;/th&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;th&#x3E;Nama&#x3C;/th&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;th&#x3E;Alamat&#x3C;/th&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;th&#x3E;Telp&#x3C;/th&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;th&#x3E;Status&#x3C;/th&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/thead&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;tbody&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/tbody&#x3E;
&#x9;&#x9;&#x9;&#x3C;/table&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;

&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;!-- END Content --&#x3E;
&#x3C;/div&#x3E;
                  </highlight-code>
                </div>
              </div>
              
              <p>
                Selanjutnya kode untuk view modal. Pada file view modal ini digunakan untuk menyimpan komponen modal (<em>Pop Up</em>) menu pilihan
                ketika baris data pada DataTable di klik.
                Buatlah file baru di <code>app/view/admin/perusahaan/masterdata/home_modal.php</code>,
                Kemudian <em>copy paste</em> kode dibawah ini.
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
                    &#x3C;!-- modal option --&#x3E;
&#x3C;div id=&#x22;modal_option&#x22; class=&#x22;modal fade &#x22; tabindex=&#x22;-1&#x22; role=&#x22;dialog&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
&#x9;&#x3C;div class=&#x22;modal-dialog modal-sm&#x22;&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;modal-content&#x22;&#x3E;

&#x9;&#x9;&#x9;&#x3C;!-- Modal Header --&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;modal-header text-center&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;h2 class=&#x22;modal-title&#x22;&#x3E;Pilihan&#x3C;/h2&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- END Modal Header --&#x3E;

&#x9;&#x9;&#x9;&#x3C;!-- Modal Body --&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;modal-body&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;row&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-xs-12 btn-group-vertical&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a id=&#x22;adetail&#x22; href=&#x22;#&#x22; class=&#x22;btn btn-info btn-left&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-info-circle&#x22;&#x3E;&#x3C;/i&#x3E; Detail&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a id=&#x22;aedit&#x22; href=&#x22;#&#x22; class=&#x22;btn btn-info btn-left&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-pencil&#x22;&#x3E;&#x3C;/i&#x3E; Edit&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;button id=&#x22;bhapus&#x22; type=&#x22;button&#x22; class=&#x22;btn btn-danger btn-left btn-submit&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-trash-o icon-submit&#x22;&#x3E;&#x3C;/i&#x3E; Hapus&#x3C;/button&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;row&#x22; style=&#x22;margin-top: 1em; &#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-12&#x22; style=&#x22;border-top: 1px #afafaf dashed;&#x22;&#x3E;&#x26;nbsp;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-xs-12 btn-group-vertical&#x22; style=&#x22;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-default btn-block text-left&#x22; data-dismiss=&#x22;modal&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-trash&#x22;&#x3E;&#x3C;/i&#x3E; Tutup&#x3C;/button&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;!-- END Modal Body --&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;

                  </highlight-code>
                </div>
              </div>
              
              <p>
                Terakhir kita akan membuat code JavaScript supaya datatablenya dapat tampil dan
                datanya pun dapat terambil melalui API.
                Begitu juga dengan fungsionalitas filternya.
                Untuk itu buatlah file baru di <code>app/view/admin/perusahaan/masterdata/home_bottom.php</code>,
                Kemudian <em>copy paste</em> kode dibawah ini.
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
                  <highlight-code lang="javascript">
                    public drTable = {};
public ieid = &#x27;&#x27;;

App.datatables();

if(jQuery(&#x27;#drTable&#x27;).length&#x3E;0){
&#x9;drTable = jQuery(&#x27;#drTable&#x27;)
&#x9;.on(&#x27;preXhr.dt&#x27;, function ( e, settings, data ){
&#x9;&#x9;$().btnSubmit();
&#x9;}).DataTable({
&#x9;&#x9;&#x9;&#x22;order&#x22;&#x9;&#x9;&#x9;&#x9;: [[ 0, &#x22;desc&#x22; ]],
&#x9;&#x9;&#x9;&#x22;responsive&#x22;&#x9;  &#x9;: true,
&#x9;&#x9;&#x9;&#x22;bProcessing&#x22;&#x9;&#x9;: true,
&#x9;&#x9;&#x9;&#x22;bServerSide&#x22;&#x9;&#x9;: true,
&#x9;&#x9;&#x9;&#x22;sAjaxSource&#x22;&#x9;&#x9;: &#x22;&#x3C;?=base_url(&#x27;api_admin/perusahaan/masterdata/&#x27;)?&#x3E;&#x22;,
&#x9;&#x9;&#x9;&#x22;fnServerParams&#x22;: function ( aoData ) {
&#x9;&#x9;&#x9;&#x9;aoData.push(
&#x9;&#x9;&#x9;&#x9;&#x9;{ &#x22;name&#x22;: &#x22;a_company_id_parent&#x22;, &#x22;value&#x22;: $(&#x22;#fl_a_company_id_parent&#x22;).val() },
&#x9;&#x9;&#x9;&#x9;&#x9;{ &#x22;name&#x22;: &#x22;badan_hukum&#x22;, &#x22;value&#x22;: $(&#x22;#fl_badan_hukum&#x22;).val() },
&#x9;&#x9;&#x9;&#x9;&#x9;{ &#x22;name&#x22;: &#x22;is_vendor&#x22;, &#x22;value&#x22;: $(&#x22;#fl_is_vendor&#x22;).val() },
&#x9;&#x9;&#x9;&#x9;&#x9;{ &#x22;name&#x22;: &#x22;is_active&#x22;, &#x22;value&#x22;: $(&#x22;#fl_is_active&#x22;).val() },
&#x9;&#x9;&#x9;&#x9;&#x9;{ &#x22;name&#x22;: &#x22;utype&#x22;, &#x22;value&#x22;: $(&#x22;#fl_utype&#x22;).val() }
&#x9;&#x9;&#x9;&#x9;);
&#x9;&#x9;&#x9;},
&#x9;&#x9;&#x9;&#x22;fnServerData&#x22;: function (sSource, aoData, fnCallback, oSettings) {
&#x9;&#x9;&#x9;&#x9;oSettings.jqXHR = $.ajax({
&#x9;&#x9;&#x9;&#x9;&#x9;dataType &#x9;: &#x27;json&#x27;,
&#x9;&#x9;&#x9;&#x9;&#x9;method &#x9;&#x9;: &#x27;POST&#x27;,
&#x9;&#x9;&#x9;&#x9;&#x9;url &#x9;&#x9;: sSource,
&#x9;&#x9;&#x9;&#x9;&#x9;data &#x9;&#x9;: aoData
&#x9;&#x9;&#x9;&#x9;}).done(function (response, status, headers, config) {
&#x9;&#x9;&#x9;&#x9;&#x9;console.log(response);

&#x9;&#x9;&#x9;&#x9;&#x9;$(&#x27;#drTable &#x3E; tbody&#x27;).off(&#x27;click&#x27;, &#x27;tr&#x27;);
&#x9;&#x9;&#x9;&#x9;&#x9;$(&#x27;#drTable &#x3E; tbody&#x27;).on(&#x27;click&#x27;, &#x27;tr&#x27;, function (e) {
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;e.preventDefault();
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;public id = $(this).find(&#x22;td&#x22;).html();
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;ieid = id;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;$(&#x22;#adetail&#x22;).attr(&#x22;href&#x22;,&#x22;&#x3C;?=base_url_admin(&#x27;perusahaan/masterdata/detail/&#x27;)?&#x3E;&#x22;+ieid);
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;$(&#x22;#aedit&#x22;).attr(&#x22;href&#x22;,&#x22;&#x3C;?=base_url_admin(&#x27;perusahaan/masterdata/edit/&#x27;)?&#x3E;&#x22;+ieid);
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;$(&#x22;#modal_option&#x22;).modal(&#x22;show&#x22;);
&#x9;&#x9;&#x9;&#x9;&#x9;});

&#x9;&#x9;&#x9;&#x9;&#x9;$().btnSubmit(&#x27;done&#x27;);

&#x9;&#x9;&#x9;&#x9;&#x9;fnCallback(response);
&#x9;&#x9;&#x9;&#x9;}).fail(function (response, status, headers, config) {
&#x9;&#x9;&#x9;&#x9;&#x9;gritter(&#x22;&#x3C;h4&#x3E;Error&#x3C;/h4&#x3E;&#x3C;p&#x3E;Tidak dapat mengambil data sekarang, silahkan coba lagi nanti&#x3C;/p&#x3E;&#x22;,&#x27;warning&#x27;);
&#x9;&#x9;&#x9;&#x9;&#x9;$().btnSubmit(&#x27;done&#x27;);
&#x9;&#x9;&#x9;&#x9;});
&#x9;&#x9;&#x9;},
&#x9;});

&#x9;// pencarian data default text
&#x9;$(&#x27;.dataTables_filter input&#x27;).attr(&#x27;placeholder&#x27;, &#x27;Cari kode, nama, telp&#x27;);
&#x9;
&#x9;$(&#x22;#filter_button&#x22;).on(&#x22;click&#x22;,function(e){
&#x9;&#x9;e.preventDefault();
&#x9;&#x9;drTable.ajax.reload();
&#x9;});
}


//hapus
$(&#x22;#bhapus&#x22;).on(&#x22;click&#x22;,function(e){
&#x9;e.preventDefault();
&#x9;if(ieid){
&#x9;&#x9;let c = confirm(&#x27;Apakah kamu yakin?&#x27;);
&#x9;&#x9;if(c){
&#x9;&#x9;&#x9;$().btnSubmit();
&#x9;&#x9;&#x9;let url = &#x27;&#x3C;?=base_url(&#x22;api_admin/perusahaan/masterdata/hapus/&#x22;)?&#x3E;&#x27;+ieid;
&#x9;&#x9;&#x9;$.get(url).done(function(response){
&#x9;&#x9;&#x9;&#x9;NProgress.done();
&#x9;&#x9;&#x9;&#x9;if(response.status==200){
&#x9;&#x9;&#x9;&#x9;&#x9;gritter(&#x27;&#x3C;h4&#x3E;Sukses&#x3C;/h4&#x3E;&#x3C;p&#x3E;Data berhasil dihapus&#x3C;/p&#x3E;&#x27;,&#x27;success&#x27;);
&#x9;&#x9;&#x9;&#x9;&#x9;$(&#x27;.icon-submit&#x27;).removeClass(&#x27;fa-circle-o-notch fa-spin&#x27;);
&#x9;&#x9;&#x9;&#x9;&#x9;$(&#x27;.btn-submit&#x27;).prop(&#x27;disabled&#x27;,false);
&#x9;&#x9;&#x9;&#x9;&#x9;NProgress.done();

&#x9;&#x9;&#x9;&#x9;&#x9;drTable.ajax.reload();
&#x9;&#x9;&#x9;&#x9;&#x9;$(&#x22;#modal_option&#x22;).modal(&#x22;hide&#x22;);
&#x9;&#x9;&#x9;&#x9;&#x9;$(&#x22;#modal_edit&#x22;).modal(&#x22;hide&#x22;);
&#x9;&#x9;&#x9;&#x9;}else{
&#x9;&#x9;&#x9;&#x9;&#x9;gritter(&#x27;&#x3C;h4&#x3E;Gagal&#x3C;/h4&#x3E;&#x3C;p&#x3E;&#x27;+response.message+&#x27;&#x3C;/p&#x3E;&#x27;,&#x27;danger&#x27;);
&#x9;&#x9;&#x9;&#x9;&#x9;$().btnSubmit(&#x27;done&#x27;);
&#x9;&#x9;&#x9;&#x9;}
&#x9;&#x9;&#x9;}).fail(function() {
&#x9;&#x9;&#x9;&#x9;gritter(&#x27;&#x3C;h4&#x3E;Error&#x3C;/h4&#x3E;&#x3C;p&#x3E;Tidak dapat menghapus data ke database, Cobalah beberapa saat lagi&#x3C;/p&#x3E;&#x27;, &#x27;danger&#x27;);
&#x9;&#x9;&#x9;&#x9;$().btnSubmit(&#x27;done&#x27;);
&#x9;&#x9;&#x9;});
&#x9;&#x9;}
&#x9;}
});
                  </highlight-code>
                </div>
              </div>
              
              <h3>View HTML untuk Form Tambah Data Baru di Master Data Perusahaan</h3>
              <p>
                Sekarang kita akan membuat kode HTML untuk menampilkan form input data di halaman Master Data Perusahaan.
              </p>
              <p>
                Akan ada 3 file yang akan dibuat untuk halaman ini, yaitu:
                <ol>
                  <li><code>baru.php</code></li>
                  <li><code>baru_modal.php</code></li>
                  <li><code>baru_bottom.php</code></li>
                </ol>
              </p>
              <p>
                Sekarang mari kita buat file baru di <code>app/view/admin/perusahaan/masterdata/baru.php</code>,
                seperti biasa <em>copy paste</em> kode dibawah ini.
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
&#x9;&#x9;&#x3C;div class=&#x22;row&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-12&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;btn-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a id=&#x22;aback&#x22; href=&#x22;&#x3C;?=base_url_admin(&#x27;perusahaan/masterdata/&#x27;)?&#x3E;&#x22; class=&#x22;btn btn-default&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-chevron-left&#x22;&#x3E;&#x3C;/i&#x3E; Kembali &#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;ul class=&#x22;breadcrumb breadcrumb-top&#x22;&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;Admin&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;Perusahaan&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x22;perusahaan/masterdata/&#x22;)?&#x3E;&#x22;&#x3E;Master Data&#x3C;/a&#x3E;&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;Baru&#x3C;/li&#x3E;
&#x9;&#x3C;/ul&#x3E;
&#x9;&#x3C;!-- END Static Layout Header --&#x3E;

&#x9;&#x3C;!-- Content --&#x3E;
&#x9;&#x3C;div class=&#x22;block full row&#x22;&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;block-title&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;h4&#x3E;&#x3C;strong&#x3E;Form Tambah Data&#x3C;/strong&#x3E;&#x3C;/h4&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;

&#x9;&#x9;&#x3C;form id=&#x22;form_tambah&#x22; action=&#x22;&#x3C;?=base_url_admin()?&#x3E;&#x22; method=&#x22;post&#x22; enctype=&#x22;multipart/form-data&#x22; class=&#x22;form-bordered form-horizontal&#x22; onsubmit=&#x22;return false;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-1 col-md-3 col-sm-4&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label for=&#x22;iiutype&#x22; class=&#x22;control-label&#x22;&#x3E;Jenis *&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;select id=&#x22;iiutype&#x22; class=&#x22;form-control&#x22; name=&#x22;utype&#x22; required&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;option value=&#x22;&#x22;&#x3E;-- Pilih --&#x3C;/option&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x27;perusahaan/masterdata/_option_utype&#x27;, $__forward); ?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/select&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-1 col-md-3 col-sm-4&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label for=&#x22;iis_active&#x22; class=&#x22;control-label&#x22;&#x3E;Aktif?&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;select id=&#x22;iis_active&#x22; class=&#x22;form-control&#x22; name=&#x22;is_active&#x22; &#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;option value=&#x22;1&#x22;&#x3E;Iya&#x3C;/option&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;option value=&#x22;0&#x22;&#x3E;Tidak&#x3C;/option&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/select&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-1 col-md-3 col-sm-4&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label for=&#x22;iikode&#x22; class=&#x22;control-label&#x22;&#x3E;Kode *&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input id=&#x22;iikode&#x22; class=&#x22;form-control&#x22; name=&#x22;kode&#x22; placeholder=&#x22;Kode Perusahaan&#x22; minlength=&#x22;1&#x22; maxlength=&#x22;16&#x22; required /&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-11 col-md-9 col-sm-8&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label for=&#x22;iinama&#x22; class=&#x22;control-label&#x22;&#x3E;Nama *&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input id=&#x22;iinama&#x22; class=&#x22;form-control&#x22; name=&#x22;nama&#x22; placeholder=&#x22;Nama Perusahaan / Kode Cabang&#x22; maxlength=&#x22;100&#x22; required/&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;

&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-3 col-md-6 col-sm-6&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label for=&#x22;inegara&#x22; class=&#x22;control-label&#x22;&#x3E;Negara *&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input id=&#x22;inegara&#x22; class=&#x22;form-control&#x22; name=&#x22;negara&#x22; placeholder=&#x22;Negara&#x22; required /&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-3 col-md-6 col-sm-6&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label for=&#x22;iprovinsi&#x22; class=&#x22;control-label&#x22;&#x3E;Provinsi *&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input id=&#x22;iprovinsi&#x22; class=&#x22;form-control&#x22; name=&#x22;provinsi&#x22; placeholder=&#x22;Provinsi&#x22; required /&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-3 col-md-6 col-sm-6&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label for=&#x22;ikabkota&#x22; class=&#x22;control-label&#x22;&#x3E;Kabupaten / Kota&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input id=&#x22;ikabkota&#x22; class=&#x22;form-control&#x22; name=&#x22;kabkota&#x22; placeholder=&#x22;Kab. / Kota&#x22; required /&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-3 col-md-6 col-sm-6&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label for=&#x22;ikecamatan&#x22; class=&#x22;control-label&#x22;&#x3E;Kecamatan&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input id=&#x22;ikecamatan&#x22; class=&#x22;form-control&#x22; name=&#x22;kecamatan&#x22; placeholder=&#x22;Kecamatan&#x22; required /&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-3 col-md-6 col-sm-6&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label for=&#x22;idesakel&#x22; class=&#x22;control-label&#x22;&#x3E;Desa / Kelurahan&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input id=&#x22;idesakel&#x22; class=&#x22;form-control&#x22; name=&#x22;desakel&#x22; placeholder=&#x22;Desa / Kelurahan&#x22; required /&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;

&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group form-actions&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-xs-12 text-right&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;btn-group pull-right&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x27;page/component/simpan_button&#x27;, $__forward); ?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;

&#x9;&#x9;&#x3C;/form&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                  </highlight-code>
                </div>
              </div>
              
              <p>
                Sementara untuk file modal kita tidak pakai untuk saat ini, jadi cukup buat file baru saja di 
                <code>app/view/admin/perusahaan/masterdata/baru_modal.php</code>,
                dan biarkan isinya kosong.
              </p>

              <p>
                Terakhir kita akan membuat code JavaScript untuk menyimpan data secara <em>Asynchronous</em>
                dengan memanfaatkan keunggulan dari javascript.
                Untuk itu buatlah file baru di <code>app/view/admin/perusahaan/masterdata/baru_bottom.php</code>,
                Kemudian <em>copy paste</em> isinya dari kode dibawah ini.
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
                  <highlight-code lang="javascript">
                    $(&#x22;#form_tambah&#x22;).on(&#x22;submit&#x22;,function(e){
&#x9;e.preventDefault();
&#x9;$().btnSubmit();

&#x9;public fd = new FormData($(this)[0]);
&#x9;public url = &#x27;&#x3C;?= base_url(&#x22;api_admin/perusahaan/masterdata/baru/&#x22;)?&#x3E;&#x27;;
&#x9;$.ajax({
&#x9;&#x9;type: $(this).attr(&#x27;method&#x27;),
&#x9;&#x9;url: url,
&#x9;&#x9;data: fd,
&#x9;&#x9;processData: false,
&#x9;&#x9;contentType: false,
&#x9;&#x9;success: function(respon){
&#x9;&#x9;&#x9;if(respon.status==200){
&#x9;&#x9;&#x9;&#x9;gritter(&#x27;&#x3C;h4&#x3E;Sukses&#x3C;/h4&#x3E;&#x3C;p&#x3E;Data berhasil ditambahkan&#x3C;/p&#x3E;&#x27;,&#x27;success&#x27;);
&#x9;&#x9;&#x9;&#x9;setTimeout(function(){
&#x9;&#x9;&#x9;&#x9;&#x9;window.location = &#x27;&#x3C;?=base_url_admin(&#x27;perusahaan/masterdata/&#x27;)?&#x3E;&#x27;;
&#x9;&#x9;&#x9;&#x9;},3000);
&#x9;&#x9;&#x9;}else{
&#x9;&#x9;&#x9;&#x9;gritter(&#x27;&#x3C;h4&#x3E;Gagal&#x3C;/h4&#x3E;&#x3C;p&#x3E;&#x27;+respon.message+&#x27;&#x3C;/p&#x3E;&#x27;,&#x27;danger&#x27;);
&#x9;&#x9;&#x9;&#x9;$().btnSubmit(&#x27;done&#x27;);
&#x9;&#x9;&#x9;}
&#x9;&#x9;},
&#x9;&#x9;error:function(){
&#x9;&#x9;&#x9;setTimeout(function(){
&#x9;&#x9;&#x9;&#x9;gritter(&#x27;&#x3C;h4&#x3E;Error&#x3C;/h4&#x3E;&#x3C;p&#x3E;Tidak dapat menyimpan data sekarang, coba lagi nanti&#x3C;/p&#x3E;&#x27;,&#x27;warning&#x27;);
&#x9;&#x9;&#x9;}, 666);

&#x9;&#x9;&#x9;$().btnSubmit(&#x27;done&#x27;);
&#x9;&#x9;&#x9;return false;
&#x9;&#x9;}
&#x9;});
});
                  </highlight-code>
                </div>
              </div>
              
              <h3>View HTML untuk Form Edit Data di Master Data Perusahaan</h3>
              <p>
                Sekarang kita akan membuat kode HTML untuk menampilkan form untuk edit data di halaman Master Data Perusahaan.
                Kenapa filenya kita pisah antara edit dan tambah data baru, supaya nanti ketika ada perubahanyang hanya bersifat pada edit saja
                atau tambah baru saja, form HTML nya dapat di maintenance dengan mudah.
              </p>
              <p>
                Akan ada 3 file yang akan dibuat untuk halaman ini, yaitu:
                <ol>
                  <li><code>edit.php</code></li>
                  <li><code>edit_modal.php</code></li>
                  <li><code>edit_bottom.php</code></li>
                </ol>
              </p>
              <p>
                Sekarang mari kita buat file baru di <code>app/view/admin/perusahaan/masterdata/edit.php</code>,
                seperti biasa <em>copy paste</em> kode dibawah ini.
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
&#x9;&#x9;&#x3C;div class=&#x22;row&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-12&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;btn-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a id=&#x22;aback&#x22; href=&#x22;&#x3C;?=base_url_admin(&#x27;perusahaan/masterdata/&#x27;)?&#x3E;&#x22; class=&#x22;btn btn-default&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-chevron-left&#x22;&#x3E;&#x3C;/i&#x3E; Kembali &#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;ul class=&#x22;breadcrumb breadcrumb-top&#x22;&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;Admin&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;Perusahaan&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x22;perusahaan/masterdata/&#x22;)?&#x3E;&#x22;&#x3E;Master Data&#x3C;/a&#x3E;&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;Edit #&#x3C;?=$acm-&#x3E;id?&#x3E;&#x3C;/li&#x3E;
&#x9;&#x3C;/ul&#x3E;
&#x9;&#x3C;!-- END Static Layout Header --&#x3E;

&#x9;&#x3C;!-- Content --&#x3E;
&#x9;&#x3C;div class=&#x22;block full&#x22;&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;block-title&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;h4&#x3E;&#x3C;strong&#x3E;Form Edit Data&#x3C;/strong&#x3E;&#x3C;/h4&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;

&#x9;&#x9;&#x3C;form id=&#x22;form_edit&#x22; action=&#x22;&#x3C;?=base_url_admin()?&#x3E;&#x22; method=&#x22;post&#x22; enctype=&#x22;multipart/form-data&#x22; class=&#x22;form-bordered form-horizontal&#x22; onsubmit=&#x22;return false;&#x22;&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;form-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-1 col-md-3 col-sm-4&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label for=&#x22;ieutype&#x22; class=&#x22;control-label&#x22;&#x3E;Jenis *&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;select id=&#x22;ieutype&#x22; class=&#x22;form-control&#x22; name=&#x22;utype&#x22; required&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;option value=&#x22;&#x22;&#x3E;-- Pilih --&#x3C;/option&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x27;perusahaan/masterdata/_option_utype&#x27;, $__forward); ?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/select&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-1 col-md-3 col-sm-4&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label for=&#x22;ieis_active&#x22; class=&#x22;control-label&#x22;&#x3E;Aktif?&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;select id=&#x22;ieis_active&#x22; class=&#x22;form-control&#x22; name=&#x22;is_active&#x22; &#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;option value=&#x22;1&#x22;&#x3E;Iya&#x3C;/option&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;option value=&#x22;0&#x22;&#x3E;Tidak&#x3C;/option&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/select&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-1 col-md-3 col-sm-4&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label for=&#x22;iekode&#x22; class=&#x22;control-label&#x22;&#x3E;Kode&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input id=&#x22;iekode&#x22; class=&#x22;form-control&#x22; name=&#x22;kode&#x22; placeholder=&#x22;Kode Perusahaan&#x22; minlength=&#x22;1&#x22; maxlength=&#x22;16&#x22; required /&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-11 col-md-9 col-sm-8&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label for=&#x22;ienama&#x22; class=&#x22;control-label&#x22;&#x3E;Nama *&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input id=&#x22;ienama&#x22; class=&#x22;form-control&#x22; name=&#x22;nama&#x22; placeholder=&#x22;Nama Perusahaan / Kode Cabang&#x22; required/&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;

&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-3 col-md-6 col-sm-6&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label for=&#x22;ienegara&#x22; class=&#x22;control-label&#x22;&#x3E;Negara *&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input id=&#x22;ienegara&#x22; class=&#x22;form-control&#x22; name=&#x22;negara&#x22; placeholder=&#x22;Negara&#x22; required /&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-3 col-md-6 col-sm-6&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label for=&#x22;ieprovinsi&#x22; class=&#x22;control-label&#x22;&#x3E;Provinsi *&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input id=&#x22;ieprovinsi&#x22; class=&#x22;form-control&#x22; name=&#x22;provinsi&#x22; placeholder=&#x22;Provinsi&#x22; required /&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-3 col-md-6 col-sm-6&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label for=&#x22;iekabkota&#x22; class=&#x22;control-label&#x22;&#x3E;Kabupaten / Kota&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input id=&#x22;iekabkota&#x22; class=&#x22;form-control&#x22; name=&#x22;kabkota&#x22; placeholder=&#x22;Kab. / Kota&#x22; required /&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-3 col-md-6 col-sm-6&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label for=&#x22;iekecamatan&#x22; class=&#x22;control-label&#x22;&#x3E;Kecamatan&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input id=&#x22;iekecamatan&#x22; class=&#x22;form-control&#x22; name=&#x22;kecamatan&#x22; placeholder=&#x22;Kecamatan&#x22; required /&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-lg-3 col-md-6 col-sm-6&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label for=&#x22;iedesakel&#x22; class=&#x22;control-label&#x22;&#x3E;Desa / Kelurahan&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input id=&#x22;iedesakel&#x22; class=&#x22;form-control&#x22; name=&#x22;desakel&#x22; placeholder=&#x22;Desa / Kelurahan&#x22; required /&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;

&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group form-actions&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-xs-12 text-right&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;btn-group pull-right&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x27;page/component/simpan_perubahan_button&#x27;, $__forward); ?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;

&#x9;&#x9;&#x3C;/form&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                  </highlight-code>
                </div>
              </div>
              
              <p>
                Sementara untuk file modal kita tidak pakai untuk saat ini, jadi cukup buat file baru saja di 
                <code>app/view/admin/perusahaan/masterdata/edit_modal.php</code>,
                dan biarkan isinya kosong.
              </p>

              <p>
                Terakhir kita akan membuat code JavaScript untuk mengisi nilai default dari hasil lookup data berdasarkan ID yang akan di edit.
                Dan juga sama seperti pada JS di halaman tambah baru, disini juga akan mengimplementasikan
                AJAX untuk penyimpanan datanya.
                Selanjutnya kita tinggal membuat file baru di <code>app/view/admin/perusahaan/masterdata/edit_bottom.php</code>,
                Kemudian <em>copy paste</em> isinya dari kode dibawah ini.
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
                  <highlight-code lang="javascript">
                    // fill data
public data_fill = &#x3C;?=json_encode($acm)?&#x3E;;
$.each(data_fill, function(k,v){
&#x9;$(&#x22;#ie&#x22;+k).val(v);
});

//submit form
$(&#x22;#form_edit&#x22;).on(&#x22;submit&#x22;,function(e){
&#x9;e.preventDefault();
&#x9;$().btnSubmit();

&#x9;public fd = new FormData($(this)[0]);
&#x9;public url = &#x27;&#x3C;?=base_url(&#x22;api_admin/perusahaan/masterdata/edit/&#x22;.$acm-&#x3E;id)?&#x3E;&#x27;;

&#x9;$.ajax({
&#x9;&#x9;type: $(this).attr(&#x27;method&#x27;),
&#x9;&#x9;url: url,
&#x9;&#x9;data: fd,
&#x9;&#x9;processData: false,
&#x9;&#x9;contentType: false,
&#x9;&#x9;success: function(respon){
&#x9;&#x9;&#x9;if(respon.status == 200){
&#x9;&#x9;&#x9;&#x9;gritter(&#x27;&#x3C;h4&#x3E;Sukses&#x3C;/h4&#x3E;&#x3C;p&#x3E;Perubahan data berhasil disimpan&#x3C;/p&#x3E;&#x27;, &#x27;success&#x27;);
&#x9;&#x9;&#x9;&#x9;setTimeout(function(){
&#x9;&#x9;&#x9;&#x9;&#x9;window.location = &#x27;&#x3C;?=base_url_admin(&#x27;perusahaan/masterdata/&#x27;)?&#x3E;&#x27;;
&#x9;&#x9;&#x9;&#x9;}, 3456);
&#x9;&#x9;&#x9;}else{
&#x9;&#x9;&#x9;&#x9;gritter(&#x27;&#x3C;h4&#x3E;Gagal&#x3C;/h4&#x3E;&#x3C;p&#x3E;&#x27;+respon.message+&#x27;&#x3C;/p&#x3E;&#x27;,&#x27;danger&#x27;);
&#x9;&#x9;&#x9;&#x9;$().btnSubmit(&#x27;done&#x27;);
&#x9;&#x9;&#x9;}
&#x9;&#x9;},
&#x9;&#x9;error:function(){
&#x9;&#x9;&#x9;setTimeout(function(){
&#x9;&#x9;&#x9;&#x9;gritter(&#x27;&#x3C;h4&#x3E;Error&#x3C;/h4&#x3E;&#x3C;p&#x3E;Tidak dapat menyimpan data sekarang, coba lagi nanti&#x3C;/p&#x3E;&#x27;,&#x27;warning&#x27;);
&#x9;&#x9;&#x9;}, 666);
        
      $().btnSubmit(&#x27;done&#x27;);
&#x9;&#x9;&#x9;return false;
&#x9;&#x9;}
&#x9;});

});
                  </highlight-code>
                </div>
              </div>
              
              <h3>View HTML untuk Detail Data di Master Data Perusahaan</h3>
              <p>
                Terakhhir kita akan buat view untuk halaman detail data dari Master Data Perusahaan.
              </p>
              <p>
                Akan ada 2 file yang akan dibuat untuk halaman ini, yaitu:
                <ol>
                  <li><code>detail.php</code></li>
                  <li><code>detail_bottom.php</code></li>
                </ol>
              </p>
              <p>
                Sekarang mari kita buat file baru di <code>app/view/admin/perusahaan/masterdata/detail.php</code>,
                seperti biasa <em>copy paste</em> kode dibawah ini.
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
&#x9;&#x9;&#x3C;div class=&#x22;row&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-6 col-sm-6&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;btn-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a id=&#x22;&#x22; href=&#x22;&#x3C;?=base_url_admin(&#x27;perusahaan/masterdata/&#x27;)?&#x3E;&#x22; class=&#x22;btn btn-default&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-chevron-left&#x22;&#x3E;&#x3C;/i&#x3E; Kembali&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-6 col-sm-6&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;btn-group pull-right&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a id=&#x22;&#x22; href=&#x22;&#x3C;?=base_url_admin(&#x27;perusahaan/masterdata/edit/&#x27;.$acm-&#x3E;id)?&#x3E;&#x22; class=&#x22;btn btn-info&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-edit&#x22;&#x3E;&#x3C;/i&#x3E; Edit&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;ul class=&#x22;breadcrumb breadcrumb-top&#x22;&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;Admin&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;Perusahaan&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x22;perusahaan/masterdata/&#x22;)?&#x3E;&#x22;&#x3E;Master Data&#x3C;/a&#x3E;&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;Detail #&#x3C;?=$acm-&#x3E;id?&#x3E;&#x3C;/li&#x3E;
&#x9;&#x3C;/ul&#x3E;
&#x9;&#x3C;!-- END Static Layout Header --&#x3E;

&#x9;&#x3C;div class=&#x22;block full&#x22;&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;block-title&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;h4&#x3E;&#x3C;strong&#x3E;Informasi Detail&#x3C;/strong&#x3E;&#x3C;/h4&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;row&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-12&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;table class=&#x22;table table-bordered&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;tbody&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;th class=&#x22;col-md-2&#x22;&#x3E;Nama&#x3C;/th&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td class=&#x22;col-md-1&#x22;&#x3E;:&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;?=$acm-&#x3E;nama?&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;th&#x3E;Jenis&#x3C;/th&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;:&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;?=$acm-&#x3E;utype?&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;th&#x3E;Kode&#x3C;/th&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;:&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;?=$acm-&#x3E;kode?&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;th&#x3E;Alamat&#x3C;/th&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;:&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;?=isset($acm-&#x3E;desakel)?$acm-&#x3E;desakel:&#x27;&#x27;?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;?=isset($acm-&#x3E;kecamatan)?$acm-&#x3E;kecamatan:&#x27;&#x27;?&#x3E;&#x3C;br /&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;?=isset($acm-&#x3E;kabkota)?$acm-&#x3E;kabkota:&#x27;&#x27;?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;?=isset($acm-&#x3E;provinsi)?$acm-&#x3E;provinsi:&#x27;&#x27;?&#x3E;&#x3C;br /&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;?=isset($acm-&#x3E;negara)?$acm-&#x3E;negara:&#x27;&#x27;?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;th&#x3E;Telp&#x3C;/th&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;:&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;?=$acm-&#x3E;telp?&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;th&#x3E;Status&#x3C;/th&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;:&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;?=!empty($acm-&#x3E;is_active) ? &#x27;&#x3C;label class=&#x22;label label-success&#x22;&#x3E;Aktif&#x3C;/label&#x3E;&#x27;: &#x27;&#x3C;label class=&#x22;label label-default&#x22;&#x3E;Tidak Aktif&#x3C;/label&#x3E;&#x27;?&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/tbody&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/table&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                  </highlight-code>
                </div>
              </div>
              
              <p>
                Sementara untuk file bottom kita tidak pakai untuk saat ini, jadi cukup buat file baru saja di 
                <code>app/view/admin/perusahaan/masterdata/detail_bottom.php</code>,
                dan biarkan isinya kosong.
              </p>

              
              
              <h2>Menambahkan Modul Master Data Perusahaan Ke Menu</h2>
              <p>
                Untuk menambahkan modul Master Data Perusahaan Ke Menu sidebar itu sangat mudah sekali.
                Kita cukup isikan kode HTML list (&#x3C;li&#x3E;) dan unordered list (&#x3C;ul&#x3E;) beserta link pada isi listnya.
                Namun lain hal cerita apabila kita telah menerapkan metode <em>Authorization</em> seperti RBAC, ACL, ataupun ABAC
                Ini pasti akan menjadi tantangan tersendiri.
              </p>
              
              <p>
                Karena sekarang kita belum menerapkan metode <em>Authorization</em> pada aplikasi yang kita bikin,
                editlah file <code>app/view/admin/page/html/sidebar.php</code>, buatlah jadi seperti ini.
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
&#x9;&#x9;&#x9;&#x9;&#x3C;img src=&#x22;&#x3C;?=$admin_logo_url?&#x3E;&#x22; onerror=&#x22;this.onerror=null;this.src=&#x27;https://seme-framework-storage.b-cdn.net/images/seme-framework-logo.png&#x27;;&#x22; style=&#x22;width: 90%;&#x22; /&#x3E;
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
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22;fa fa-building sidebar-nav-icon&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;span class=&#x22;sidebar-nav-mini-hide&#x22;&#x3E;Perusahaan&#x3C;/span&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;ul class=&#x22;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x27;perusahaan/masterdata/&#x27;)?&#x3E;&#x22; class=&#x22;&#x22;&#x3E;
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
                Setelah selesai nanti bisa kita lihat, menu baru bernama perusahaan dan ada sub menu di bawahnya bernama master data perusahaan.
              </p>

              <h2>Selesai...!</h2>
              <p>
                Untuk mencoba hasil dari tutorial ini, buka alamat <code>http://localhost/seme_framework/admin/logout</code> pada browser.
                Harusnya akan muncul halaman login. Kemudian login dengan menggunakan username dan password pada tutorial sebelumnya.
                Setelah itu <em>hover</em> pada menu sidebar (samping kiri), nanti akan muncul menu baru. Klik saja pada menu tersebut.
              </p>
              
              <div class="" style="padding: 7%;">
                <amp-img layout="responsive" width="1173px" height="769px" :src="menuDataMasterPerusahaan" style="box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -webkit-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -moz-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72);"></amp-img>
              </div>
              
              <div class="" style="padding: 7%;">
                <amp-img layout="responsive" width="1173px" height="773px" :src="baruDataMasterPerusahaan" style="box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -webkit-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -moz-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72);"></amp-img>
              </div>
              
              <div class="" style="padding: 7%;">
                <amp-img layout="responsive" width="1173px" height="773px" :src="editDataMasterPerusahaan" style="box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -webkit-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -moz-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72);"></amp-img>
              </div>
              
              <div class="" style="padding: 7%;">
                <amp-img layout="responsive" width="1173px" height="773px" :src="detailDataMasterPerusahaan" style="box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -webkit-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -moz-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72);"></amp-img>
              </div>
  
            </div>
          </div>
        </div>
        
        <div class="nav-bottom">
          <div class="nav-bottom-left">
            <nuxt-link to="/id/tutorial/admin/login/" class="btn">
              <i class="fa fa-chevron-left"></i>
              Tutorial: Admin Login
            </nuxt-link>
          </div>
          <div class="nav-bottom-right">
            <nuxt-link to="/id/tutorial/admin/into" class="btn">
              Tutorial: intro Admin
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
        title: 'Modul Perusahaan',
        description: 'Tutorial kali ini membuat Modul Perusahaan di halaman admin menggunakan Seme Framework 4',
        menuDataMasterPerusahaan: require('~/assets/img/tutorial/admin/menu-data-master-perusahaan.png'),
        homeDataMasterPerusahaan: require('~/assets/img/tutorial/admin/home-data-master-perusahaan.png'),
        baruDataMasterPerusahaan: require('~/assets/img/tutorial/admin/baru-data-master-perusahaan.png'),
        editDataMasterPerusahaan: require('~/assets/img/tutorial/admin/edit-data-master-perusahaan.png'),
        detailDataMasterPerusahaan: require('~/assets/img/tutorial/admin/detail-data-master-perusahaan.png'),
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
        "dateCreated": "2023-10-24T22:53:01+07:00",
        "datePublished": "2023-10-24T22:53:01+07:00",
        "dateModified": "2023-10-25T22:53:01+07:00",
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
  