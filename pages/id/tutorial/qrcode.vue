<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial/">Tutorial</NuxtLink></li>
          <li class="unavailable">Menampilkan QR Code</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Panduan Lengkap Cara Menampilkan QR Code</h1>
            <p>
              QR Code atau Quick Response Code adalah kode matriks 2D yang bisa menyimpan informasi dalam bentuk visual.
              QR Code sering digunakan untuk menyimpan berbagai informasi seperti informasi URL website, Wi-Fi, pembayaran digital, aplikasi, dan lainnya.
              Penggunaan QR Code sangatlah mudah, cukup dengan menggunakan kamera ponsel atau aplikasi pembaca QR Code untuk memindai, maka secara otomatis informasi
              yang ada di dalamnya akan ditampilkan. Di bawah ini merupakan panduan untuk menampilkan QR Code.
            </p>
            <h2>Membuat Controller</h2>
            <p>
              Kali ini Kita akan membuat qrcode untuk otorisasi perusahaan. Sebagai contoh, buat file baru di dalam folder
              <code>app/controller/admin/perusahaan/masterdata.php</code>. Kemudian, tuliskan kode ini didalam file <code>masterdata.php</code> dan simpan.
              Pastikan Anda menyimpan kode di dalam file yang sesuai dengan kebutuhan Anda, tidak perlu sama dengan contoh yang diberikan.
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
                <?php
                /**
                * Main Controller Class for Perusahaan Master Data
                *   on PoV Admin
                *
                * Mostly for this controller will resulting HTTP Body Content in HTML format
                *
                * @version 1.0.0
                *
                * @package Controller\Admin\Perusahaan\MasterData
                * @since 1.0.0
                */
                class MasterData extends JI_Controller
                {
                    public function __construct()
                    {
                        parent::__construct();
                        $this->setTheme('admin');
                        $this->lib("seme_purifier");
                        $this->load("a_company_concern");
                        $this->load("admin/a_company_model", 'acm');
                        $this->current_parent = 'perusahaan';
                        $this->current_page = 'perusahaan_masterdata';
                    }
                    public function index()
                    {
                        $data = $this->__init();
                        if(!$this->admin_login) {
                            redir(base_url_admin('login'));
                            die();
                        }

                        $this->setTitle('Perusahaan: Master Data '.$this->config_semevar("admin_site_suffix"));

                        $this->putThemeContent("perusahaan/masterdata/home_modal", $data);
                        $this->putThemeContent("perusahaan/masterdata/home", $data);
                        $this->putJsContent("perusahaan/masterdata/home_bottom", $data);
                        $this->loadLayout('col-2-left', $data);

                        $this->render();
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h2>Membuat Controller API</h2>
            <p>
              Kemudian, buat file di dalam API untuk menyimpan logic yang diperlukan. Buat file di dalam folder
              <code>app/controller/api_admin/perusahaan/masterdata.php</code>. Kemudian, tuliskan kode ini didalam file <code>masterdata.php</code> dan simpan.
              Pastikan Anda menyimpan kode di dalam file yang sesuai dengan kebutuhan Anda, tidak perlu sama dengan contoh yang diberikan.
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
                <?php
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
                        $this->lib("seme_purifier");
                        $this->load("a_company_concern");
                        $this->load("api_admin/a_company_model", 'acm');
                    }

                    private function __genTokenMobile($company_id)
                    {
                        $company_id = (int) $company_id;
                        $this->lib("conumtext");
                        $token = $this->conumtext->genRand($type = "str", $min = 6, $max = 24);
                        if ($company_id == 3) {
                            $token = 'KMZDT';
                        }
                        if ($company_id == 2) {
                            $token = 'KMZDR';
                        }
                        if ($company_id == 1) {
                            $token = 'KMZDS';
                        }
                        if ($company_id == 24783) {
                            $token = 'KMZDA';
                        }
                        return $token;
                    }

                    public function otorisasi($id)
                    {
                        $d = $this->__init();
                        $data = new stdClass();
                        if (!$this->admin_login) {
                            $this->status = 400;
                            $this->message = 'Harus login';
                            header("HTTP/1.0 400 Harus login");
                            $this->__json_out($data);
                            die();
                        }
                        $id = (int) $id;
                        if ($id <= 0) {
                            $this->status = 1;
                            $this->message = 'ID Perusahaan tidak valid';
                            $this->__json_out($data);
                            die();
                        }
                        $acm = $this->acm->getById($id);
                        if (!isset($acm->id)) {
                            $this->status = 2;
                            $this->message = 'Data perusahaan tidak dapat ditemukan';
                            $this->__json_out($data);
                            die();
                        }
                        if (empty($acm->is_active)) {
                            $this->status = 3;
                            $this->message = 'Perusahaan sudah tidak aktif';
                            $this->__json_out($data);
                            die();
                        }
                        $du = array();
                        $du['api_mobile_token'] = $this->__genTokenMobile($acm->id);
                        $this->acm->update($acm->id, $du);
                        $acm->api_mobile_token = $du['api_mobile_token'];

                        $this->lib("seme_qrcode");
                        $this->seme_qrcode->root(SEMEROOT);
                        $this->seme_qrcode->media($this->company_img);
                        $svgurl = $this->seme_qrcode->write($acm->api_mobile_token, $acm->api_mobile_token, "png");

                        $data = $acm;
                        $data->api_mobile_token_svg = base_url($svgurl);

                        $this->status = 200;
                        $this->message = 'Berhasil';
                        $this->__json_out2($data);
                    }
                }
                </highlight-code>
              </div>
            </div>

            <h2>Menambahkan Kode pada JI_Controller</h2>
            <p>
              Karena pada file API function otorisasi memakai kode <code>json_out2</code>, yang berarti kode <code>json_out2</code> digunakan
              untuk mengirimkan data dalam format JSON sebagai respons dari API, maka Kita harus memasukkan kode tersebut ke dalam <code>ji_controller</code>. Simpan kode di bawah ini
              ke dalam <code>app/core/ji_controller.php</code>
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
                public function __json_out2($dt)
                {
                    $this->lib('sene_json_engine', 'sene_json');
                    $data = array();
                    $data["status"]  = (int) $this->status;
                    $data["message"] = $this->message;
                    $data["data"]  = $dt;
                    $this->sene_json->out($data);
                    die();
                }
                </highlight-code>
              </div>
            </div>

            <p>
              Tambahkan kode ini juga dibawah kode <code>class JI_Controller extends \SENE_Controller</code>.
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
                public $company_img = 'media/company/';
                </highlight-code>
              </div>
            </div>

            <h2>Membuat Model</h2>
            <p>
              Sekarang Kita akan membuat model yang digunakan untuk menyimpan, mengambil, dan menampilkan data. Kita akan membuat dua model,
              satu untuk admin dan satu untuk API. Pertama, buat file di <code>app/model/admin/a_company_model.php</code>.
              Perlu diingat kembali, untuk penamaan file dan lokasi penyimpanan kode harus disesuaikan dengan kebutuhan sendiri.
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
                  <?php
                  namespace Model\Admin;

                  register_namespace(__NAMESPACE__);
                  /**
                  * Scoped `admin` model for `a_company` table
                  *
                  * @version 1.0.0
                  *
                  * @package Model\Admin
                  * @since 1.0.0
                  */
                  class A_Company_Model extends SENE_Model
                  {

                      public function __construct()
                      {
                          parent::__construct();
                      }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Selanjutnya, buat file di dalam <code>app/model/api_admin/a_company_model.php</code>.
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
                  <?php
                  namespace Model\Admin\API;

                  register_namespace(__NAMESPACE__);
                  /**
                  * Scoped `api_admin` model for `a_company` table
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

                      private function filter_keyword($keyword = '')
                      {
                          if (strlen($keyword) > 0) {
                              $this->db->where_as("$this->tbl_as.nama", $keyword, "OR", "%like%", 1, 0);
                              $this->db->where_as("$this->tbl_as.kode", $keyword, "OR", "%like%", 0, 0);
                              $this->db->where_as("$this->tbl_as.telp", $keyword, "OR", "%like%", 0, 0);
                              $this->db->where_as("$this->tbl_as.kabkota", $keyword, "OR", "%like%", 0, 0);
                              $this->db->where_as("$this->tbl_as.provinsi", $keyword, "OR", "%like%", 0, 1);
                          }
                      }

                      public function getAll($page = 0, $pagesize = 10, $sortCol = "id", $sortDir = "ASC", $keyword = '')
                      {
                          $this->db->flushQuery();
                          $this->db->select_as("$this->tbl_as.id", "id", 0);
                          $this->db->select_as("$this->tbl_as.utype", "utype", 0);
                          $this->db->select_as("$this->tbl_as.kode", "kode", 0);
                          $this->db->select_as("$this->tbl_as.nama", "nama", 0);
                          $this->db->select_as("CONCAT($this->tbl_as.provinsi,' - ',kabkota)", "Alamat", 0);
                          $this->db->select_as("$this->tbl_as.telp", "telp", 0);
                          $this->db->select_as("$this->tbl_as.is_active", "is_active", 0);
                          $this->db->select_as("$this->tbl_as.is_deleted", "is_deleted", 0);
                          $this->db->from($this->tbl, $this->tbl_as);
                          $this->filter_keyword($keyword);

                          $this->db->order_by($sortCol, $sortDir)->limit($page, $pagesize);
                          return $this->db->get("object", 0);
                      }

                      public function countAll($keyword = '')
                      {
                          $this->db->flushQuery();
                          $this->db->select_as("COUNT($this->tbl_as.id)", "jumlah", 0);
                          $this->db->from($this->tbl, $this->tbl_as);
                          $this->filter_keyword($keyword);

                          $d = $this->db->get_first("object", 0);
                          if (isset($d->jumlah)) return $d->jumlah;
                          return 0;
                      }

                      public function getById($id)
                      {
                          $this->db->where("id", $id);
                          return $this->db->get_first();
                      }
                    }
                </highlight-code>
              </div>
            </div>

            <h2>Membuat View</h2>
            <p>
              Langkah selanjutnya adalah membuat view yang akan terbagi menjadi 3 bagian, yaitu file <code>home.php</code>, <code>home_modal.php</code>, 
              dan <code>home_bottom.php</code>. Pertama, buatlah file di dalam <code>app/view/admin/perusahaan/masterdata/home.php</code>. 
              Selalu pastikan Anda menyimpan kode di dalam file yang sesuai dengan kebutuhan Anda, tidak perlu sama dengan contoh yang diberikan.
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
                  &lt;div id="page-content"&gt;
                    &lt;!-- Static Layout Header --&gt;
                    &lt;div class="content-header"&gt;
                      &lt;div class="row"&gt;
                        &lt;div class="col-md-6"&gt;&amp;nbsp;&lt;/div&gt;
                        &lt;div class="col-md-6"&gt;
                          &lt;div class="btn-group pull-right"&gt;
                            &lt;a id="" href="<?=base_url_admin('perusahaan/masterdata/baru/')?>" class="btn btn-info"&gt;&lt;i class="fa fa-plus"&gt;&lt;/i&gt; Baru&lt;/a&gt;
                          &lt;/div&gt;
                        &lt;/div&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;ul class="breadcrumb breadcrumb-top"&gt;
                      &lt;li&gt;Admin&lt;/li&gt;
                      &lt;li&gt;Perusahaan&lt;/li&gt;
                      &lt;li&gt;Master Data&lt;/li&gt;
                    &lt;/ul&gt;
                    &lt;!-- END Static Layout Header --&gt;

                    &lt;!-- Content --&gt;
                    &lt;div class="block full"&gt;
                      &lt;div class="block-title"&gt;
                        &lt;h4&gt;&lt;strong&gt;Master Data Perusahaan&lt;/strong&gt;&lt;/h4&gt;
                      &lt;/div&gt;

                      &lt;div class="row row-filter"&gt;
                        &lt;div class="col-md-5"&gt;
                          &lt;label&gt;Jenis&lt;/label&gt;
                          &lt;select id="fl_utype" class="form-control"&gt;
                            &lt;option value=""&gt;-- Semua --&lt;/option&gt;
                            &lt;?php $this-&gt;getThemeElement('perusahaan/masterdata/_option_utype', $__forward); ?&gt;
                          &lt;/select&gt;
                        &lt;/div&gt;
                        &lt;div class="col-md-5"&gt;
                          &lt;label&gt;Status&lt;/label&gt;
                          &lt;select id="fl_is_active" class="form-control"&gt;
                            &lt;option value=""&gt;-- Semua --&lt;/option&gt;
                            &lt;option value="1"&gt;Aktif&lt;/option&gt;
                            &lt;option value="0"&gt;Tidak Aktif&lt;/option&gt;
                          &lt;/select&gt;
                        &lt;/div&gt;
                        &lt;div class="col-md-1"&gt;&amp;nbsp;&lt;/div&gt;
                        &lt;div class="col-md-1"&gt;
                          &lt;label&gt;&amp;nbsp;&lt;/label&gt;
                          &lt;button id="filter_button" class="btn btn-info btn-alt btn-block btn-submit"&gt;
                            Filter &lt;i class="fa fa-filter icon-submit"&gt;&lt;/i&gt;
                          &lt;/button&gt;
                        &lt;/div&gt;
                      &lt;/div&gt;

                      &lt;div class="table-responsive"&gt;
                        &lt;table id="drTable" class="table table-vcenter table-condensed table-bordered"&gt;
                          &lt;thead&gt;
                            &lt;tr&gt;
                              &lt;th class="text-center"&gt;ID&lt;/th&gt;
                              &lt;th&gt;Jenis&lt;/th&gt;
                              &lt;th&gt;Kode&lt;/th&gt;
                              &lt;th&gt;Nama&lt;/th&gt;
                              &lt;th&gt;Alamat&lt;/th&gt;
                              &lt;th&gt;Telp&lt;/th&gt;
                              &lt;th&gt;Status&lt;/th&gt;
                            &lt;/tr&gt;
                          &lt;/thead&gt;
                          &lt;tbody&gt;
                          &lt;/tbody&gt;
                        &lt;/table&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;!-- END Content --&gt;
                  &lt;/div&gt;
                </highlight-code>
              </div>
            </div>

            <p>
              Lalu yang kedua, buat file di dalam <code>app/view/admin/perusahaan/masterdata/home_modal.php</code>.
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
                  &lt;!-- modal option --&gt;
                  &lt;div id="modal_option" class="modal fade " tabindex="-1" role="dialog" aria-hidden="true"&gt;
                    &lt;div class="modal-dialog modal-sm"&gt;
                      &lt;div class="modal-content"&gt;

                        &lt;!-- Modal Header --&gt;
                        &lt;div class="modal-header text-center"&gt;
                          &lt;h2 class="modal-title">Pilihan&lt;/h2&gt;
                        &lt;/div&gt;
                        &lt;!-- END Modal Header --&gt;

                        &lt;!-- Modal Body --&gt;
                        &lt;div class="modal-body"&gt;
                          &lt;div class="row"&gt;
                            &lt;div class="col-xs-12 btn-group-vertical"&gt;
                              &lt;a id="aotorisasi" href="#" class="btn btn-info text-left" target="_blank"&gt;&lt;i class="fa fa-qrcode"&gt;&lt;/i&gt; Otorisasi&lt;/a&gt;
                            &lt;/div&gt;
                          &lt;/div&gt;
                          &lt;div class="row" style="margin-top: 1em;"&gt;
                            &lt;div class="col-md-12" style="border-top: 1px #afafaf dashed;"&gt;&nbsp;&lt;/div&gt;
                            &lt;div class="col-xs-12 btn-group-vertical" style=""&gt;
                              &lt;button type="button" class="btn btn-default btn-block text-left" data-dismiss="modal"&gt;&lt;i class="fa fa-times"&gt;&lt;/i&gt; Tutup&lt;/button&gt;
                            &lt;/div&gt;
                          &lt;/div&gt;
                          &lt;!-- END Modal Body --&gt;
                        &lt;/div&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;

                  &lt;!-- modal otorisasi --&gt;
                  &lt;div id="modal_otorisasi" class="modal fade " tabindex="-1" role="dialog" aria-hidden="true"&gt;
                    &lt;div class="modal-dialog modal-sm"&gt;
                      &lt;div class="modal-content"&gt;

                        &lt;!-- Modal Header --&gt;
                        &lt;div class="modal-header text-center"&gt;
                          &lt;h3 class="modal-title"&gt;Scan Untuk Identifikasi Perusahaan&lt;/h3&gt;
                        &lt;/div&gt;
                        &lt;!-- END Modal Header --&gt;

                        &lt;!-- Modal Body --&gt;
                        &lt;div class="modal-body"&gt;
                          &lt;div class="row"&gt;
                            &lt;div class="col-md-12"&gt;
                              &lt;img id="api_mobile_token_svg" src="" class="img-responsive" /&gt;
                            &lt;/div&gt;
                          &lt;/div&gt;
                          &lt;!-- END Modal Body --&gt;
                        &lt;/div&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                </highlight-code>
              </div>
            </div>

            <p>
              Ketiga, buat file di dalam <code>app/view/admin/perusahaan/masterdata/home_bottom.php</code>.
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
                  var drTable = {};
                  var ieid = '';
                  App.datatables();

                  if(jQuery('#drTable').length>0){
                    drTable = jQuery('#drTable')
                    .on('preXhr.dt', function ( e, settings, data ){
                      $().btnSubmit();
                    }).DataTable({
                        "order"				: [[ 0, "desc" ]],
                        "responsive"	  	: true,
                        "bProcessing"		: true,
                        "bServerSide"		: true,
                        "sAjaxSource"		: "<?=base_url('api_admin/perusahaan/masterdata/')?>",
                        "fnServerParams": function ( aoData ) {
                          aoData.push(
                            { "name": "utype", "value": $("#fl_utype").val() },
                            { "name": "is_active", "value": $("#fl_is_active").val() }
                          );
                        },
                        "fnServerData": function (sSource, aoData, fnCallback, oSettings) {
                          oSettings.jqXHR = $.ajax({
                            dataType 	: 'json',
                            method 		: 'POST',
                            url 		: sSource,
                            data 		: aoData
                          }).done(function (response, status, headers, config) {
                            console.log(response);

                            $('#drTable > tbody').off('click', 'tr');
                            $('#drTable > tbody').on('click', 'tr', function (e) {
                              e.preventDefault();
                              var id = $(this).find("td").html();
                              ieid = id;
                              $("#modal_option").modal("show");
                            });

                            $().btnSubmit('done');

                            fnCallback(response);
                          }).fail(function (response, status, headers, config) {
                            gritter("&lt;h4&gt;Error&lt;/h4&gt;&lt;p&gt;Tidak dapat mengambil data sekarang, silahkan coba lagi nanti&lt;/p&gt;",'warning');
                            $().btnSubmit('done');
                          });
                        },
                    });

                    // pencarian data default text
                    $('.dataTables_filter input').attr('placeholder', 'Cari');
                    $("#filter_button").on("click",function(e){
                      e.preventDefault();
                      drTable.ajax.reload();
                    });
                  }

                  $("#aotorisasi").on("click",function(e){
                      $("#modal_option").modal("hide");
                      e.preventDefault();
                      NProgress.start();
                      $.get("<?=base_url("api_admin/perusahaan/masterdata/otorisasi/")?>"+ieid+"/").done(function(dt){
                        if(dt.status == 200){
                          $("#api_mobile_token_svg").attr("src",dt.data.api_mobile_token_svg);
                          setTimeout(function(){
                            NProgress.done();
                            $("#modal_otorisasi").modal("show");
                          },1000);
                        }else{
                          NProgress.done();
                          gritter("&lt;h4&gt;Failed&lt;/h4&gt;&lt;p&gt;"+dt.message+"&lt;/p&gt;","warning");
                        }
                      }).fail(function(){
                        NProgress.done();
                      });
                    });
                </highlight-code>
              </div>
            </div>

            <p>
              Terakhir, buatlah file di dalam folder <code>kero/lib/seme_qrcode.php</code> dan download composer untuk memasukkan serta
              menampilkan qrcode. Download bisa melalui link berikut <a href="https://getcomposer.org/download/">composer <i class="fa fa-external-link"></i></a>. Dan jangan lupa untuk membuat
              folder <code>media/company</code> seperti yang diarahkan pada kode <code>public $media = 'media/company/';</code> di bawah ini.
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
                <?php
                Class Seme_QRCode {
                  public $root = '';
                  public $media = 'media/company/';
                  public function __construct(){
                    $this->root = getcwd();
                    $cwd = dirname(__FILE__);
                    require_once($cwd."/phpqrcode/qrlib.php");
                  }
                  public function media($media){
                    $media = rtrim($media).'/';
                    $this->media = $media;
                  }
                  public function root($root){
                    $root = rtrim($root).'/';
                    $this->root = $root;
                  }
                  public function write($str,$filename="",$ext="png"){
                    if(strlen($filename)==0) $filename = date("ymdHis");
                    if(is_file($this->root.$this->media.$filename.".png") && file_exists($this->root.$this->media.$filename.".png")){
                      unlink($this->root.$this->media.$filename.".png");
                    }
                    QRcode::png($str,$this->root.$this->media.$filename.".png","Q","10");
                    return $this->media.$filename.".png";
                  }
                }
                </highlight-code>
              </div>
            </div>

            <p> 
              Hasil dari langkah-langkah di atas akan ditampilkan seperti pada  <i>screenshot</i> di bawah ini.
            </p>
            <div class="" style="padding: 7%;">
              <amp-img layout="responsive" width="1024px" height="675px" :src="qrcode" style="box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -webkit-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -moz-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72);"></amp-img>
            </div>

          </div>
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
      title: 'Panduan Lengkap Cara Menampilkan QRCode',
      description: 'Tutorial belajar singkat cara menampilkan qrcode',
      qrcode: require('~/assets/img/tutorial/qrcode-id.png'),
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
        "dateCreated": "2020-06-26T19:12:31+07:00",
        "datePublished": "2020-06-26T19:12:39+07:00",
        "dateModified": "2023-01-12T10:52:03+07:00",
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

