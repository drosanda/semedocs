<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial/">Tutorial</NuxtLink></li>
          <li class="unavailable">Belajar PHP</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Membuat CRUD dan Download XLS</h1>
            <p>
              Download XLS merupakan fitur yang digunakan untuk mengunduh file dengan ekstensi <strong>.xls</strong> atau sering disebut dengan file spreadsheet (Excel).
              Pembuatan fitur ini diharapkan dapat memudahkan user dalam pengambilan data yang sudah diolah dalam bentuk excel.
            </p>

            <h2>Membuat Controller</h2>
            <p>
              Sebagai contoh Kita akan membuat xls untuk data pengiriman barang. Pertama, buat file baru di dalam 
              <code>app/controller/laporan/pengiriman.php</code> untuk membuat Controller xls data pengiriman barang.
              Kemudian, tuliskan kode ini didalam file <code>pengiriman.php</code> dan simpan.
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
                    //loading library
                    $vendorDirPath = (SEMEROOT . 'kero/lib/phpoffice/vendor/');
                    $vendorDirPath = realpath($vendorDirPath);
                    require_once $vendorDirPath . '/autoload.php';

                    use PhpOffice\PhpSpreadsheet\Spreadsheet;
                    use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

                    /**
                    * Controller untuk Pengiriman
                    *
                    * @version 1.0.0
                    *
                    * @package Laporan\Front
                    * @since 1.0.0
                    */
                    class Pengiriman extends \JI_Controller
                    {
                        public $use_cache = 0;

                        public function __construct()
                        {
                            parent::__construct();
                            $this->setTheme('front');
                            $this->current_parent = 'laporan';
                            $this->current_page = 'laporan_pengiriman';
                            $this->load('front/d_kirim_model', 'dkm');
                        }

                        public function index()
                        {
                            $data = $this->__init();
                            if (!$this->user_login) {
                                redir(base_url('login'));
                                die();
                            }

                            $this->setTitle('Laporan: Pengiriman ' . $this->config_semevar('site_suffix'));
                            $this->putThemeContent("laporan/pengiriman/home_modal", $data);
                            $this->putThemeContent("laporan/pengiriman/home", $data);
                            $this->putJsContent("laporan/pengiriman/home_bottom", $data);
                            $this->loadLayout('col-2-left', $data);
                            $this->render();
                        }

                        public function download_xls()
                        {
                            $data = $this->__init();
                            if (!$this->user_login) {
                                redir(base_url('login'));
                                die();
                            }

                            $start_date = $this->input->request('start_date');
                            $end_date = $this->input->request('end_date');

                            if (strlen($start_date) != 10 || strlen($end_date) != 10) {
                                echo 'Rentang waktu tanggal wajib diisi';
                                die();
                            }

                            $start_date = date("Y-m-d", strtotime($start_date));
                            $end_date = date("Y-m-d", strtotime($end_date));

                            // Prepare date range
                            $tgl_save = str_replace('-', '', $start_date) . '-' . str_replace('-', '', $end_date);
                            $tgl = 'Periode: ' . $this->__dateIndonesia($start_date, 'tanggal') . ' - ' . $this->__dateIndonesia($end_date, 'tanggal');

                            //filename builder
                            $save_dir = $this->__checkDir(date("Y/m", strtotime($end_date)));
                            $save_file = 'laporan-pengiriman-barang' . '-' . $tgl_save;
                            $save_file = str_replace(' ', '', str_replace('/', '', strtolower($save_file)));

                            //preset array gaya kolom
                            $style = array('horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
                            $styleborder = array(
                                'borders' => array(
                                    'outline' => array(
                                        'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN
                                    )
                                )
                            );
                            $judul_utama_sty = array(
                                'font'  => array(
                                    'bold'  => true,
                                    'size'  => 12,
                                    'name'  => 'Arial'
                                ),
                                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER
                            );
                            $judul_bold = array(
                                'font'  => array(
                                    'bold'  => true
                                ),
                                'borders' => array(
                                    'outline' => array(
                                        'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN
                                    )
                                ),
                                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER
                            );

                            //create object xls
                            $objPHPExcel = new Spreadsheet();
                            $objWorkSheet = $objPHPExcel->setActiveSheetIndex(0);

                            //pengaturan lebar kolom
                            $objWorkSheet->getColumnDimension('A')->setWidth(5);
                            $objWorkSheet->getColumnDimension('B')->setWidth(20);
                            $objWorkSheet->getColumnDimension('C')->setWidth(30);
                            $objWorkSheet->getColumnDimension('D')->setWidth(25);
                            $objWorkSheet->getColumnDimension('E')->setWidth(25);
                            $objWorkSheet->getColumnDimension('F')->setWidth(50);
                            $objWorkSheet->getColumnDimension('G')->setWidth(35);
                            $objWorkSheet->getColumnDimension('H')->setWidth(25);
                            $objWorkSheet->getColumnDimension('I')->setWidth(25);
                            $objWorkSheet->getColumnDimension('J')->setWidth(25);
                            $objWorkSheet->getColumnDimension('K')->setWidth(25);
                            $objWorkSheet->getColumnDimension('L')->setWidth(25);
                            $objWorkSheet->getColumnDimension('M')->setWidth(50);

                            //building xlsx
                            $objWorkSheet->setCellValue('A2', strtoupper('Laporan Pengiriman Barang'))->mergeCells('A2:M2');
                            $objWorkSheet->getStyle('A2')->getAlignment()->applyFromArray($style);
                            $objWorkSheet->getStyle('A2:M2')->applyFromArray($judul_utama_sty);

                            $objWorkSheet->setCellValue('A3', $tgl)->mergeCells('A3:M3');
                            $objWorkSheet->getStyle('A3')->getAlignment()->applyFromArray($style);
                            $objWorkSheet->getStyle('A3:M3')->applyFromArray($style);

                            $objWorkSheet->setCellValue('A4', '')->mergeCells('A4:M4');

                            //header
                            $objWorkSheet
                                ->setCellValue('A5', 'No.')
                                ->setCellValue('B5', 'Tanggal')
                                ->setCellValue('C5', 'Driver')
                                ->setCellValue('D5', 'Merk Kendaraan')
                                ->setCellValue('E5', 'Plat Nomor Kendaraan')
                                ->setCellValue('F5', 'Nama Kendaraan')
                                ->setCellValue('G5', 'SKU')
                                ->setCellValue('H5', 'Jumlah Muatan')
                                ->setCellValue('I5', 'Berat Muatan')
                                ->setCellValue('J5', 'Jam Keluar Kendaraan')
                                ->setCellValue('K5', 'Jam Masuk Kendaraan')
                                ->setCellValue('L5', 'Tujuan Pengiriman')
                                ->setCellValue('M5', 'Kab/Kota Pengiriman');

                            //setting gaya untuk header
                            $objWorkSheet->getStyle('A5')->applyFromArray($judul_bold)->getAlignment()->applyFromArray($style);
                            $objWorkSheet->getStyle('B5')->applyFromArray($judul_bold)->getAlignment()->applyFromArray($style);
                            $objWorkSheet->getStyle('C5')->applyFromArray($judul_bold)->getAlignment()->applyFromArray($style);
                            $objWorkSheet->getStyle('D5')->applyFromArray($judul_bold)->getAlignment()->applyFromArray($style);
                            $objWorkSheet->getStyle('E5')->applyFromArray($judul_bold)->getAlignment()->applyFromArray($style);
                            $objWorkSheet->getStyle('F5')->applyFromArray($judul_bold)->getAlignment()->applyFromArray($style);
                            $objWorkSheet->getStyle('G5')->applyFromArray($judul_bold)->getAlignment()->applyFromArray($style);
                            $objWorkSheet->getStyle('H5')->applyFromArray($judul_bold)->getAlignment()->applyFromArray($style);
                            $objWorkSheet->getStyle('I5')->applyFromArray($judul_bold)->getAlignment()->applyFromArray($style);
                            $objWorkSheet->getStyle('J5')->applyFromArray($judul_bold)->getAlignment()->applyFromArray($style);
                            $objWorkSheet->getStyle('K5')->applyFromArray($judul_bold)->getAlignment()->applyFromArray($style);
                            $objWorkSheet->getStyle('L5')->applyFromArray($judul_bold)->getAlignment()->applyFromArray($style);
                            $objWorkSheet->getStyle('M5')->applyFromArray($judul_bold)->getAlignment()->applyFromArray($style);

                            //set baris secara programming
                            $i = 6;
                            $nomor = 1;

                            $kirim = $this->dkm->getKirimXls($start_date, $end_date);

                            //cek data ada ga nya
                            if (count($kirim)) {
                                //iterasikan data
                                foreach ($kirim as $row) {
                                    $objWorkSheet->setCellValue('A' . $i, $nomor);
                                    $objWorkSheet->setCellValue('B' . $i, $row->cdate);
                                    $objWorkSheet->setCellValue('C' . $i, $row->driver);
                                    $objWorkSheet->setCellValue('D' . $i, $row->merk);
                                    $objWorkSheet->setCellValue('E' . $i, $row->no_pol);
                                    $objWorkSheet->setCellValue('F' . $i, $row->kendaraan);
                                    $objWorkSheet->setCellValue('G' . $i, $row->SKU);
                                    $objWorkSheet->setCellValue('H' . $i, $row->jumlah_muatan);
                                    $objWorkSheet->setCellValue('I' . $i, $row->berat);
                                    $objWorkSheet->setCellValue('J' . $i, $row->jam_keluar);
                                    $objWorkSheet->setCellValue('K' . $i, $row->jam_masuk);
                                    $objWorkSheet->setCellValue('L' . $i, $row->tujuan);
                                    $objWorkSheet->setCellValue('M' . $i, $row->KabKota);

                                    //set border ke masing2 kolom
                                    $objWorkSheet->getStyle('A' . $i)->applyFromArray($styleborder);
                                    $objWorkSheet->getStyle('B' . $i)->applyFromArray($styleborder);
                                    $objWorkSheet->getStyle('C' . $i)->applyFromArray($styleborder);
                                    $objWorkSheet->getStyle('D' . $i)->applyFromArray($styleborder);
                                    $objWorkSheet->getStyle('E' . $i)->applyFromArray($styleborder);
                                    $objWorkSheet->getStyle('F' . $i)->applyFromArray($styleborder);
                                    $objWorkSheet->getStyle('G' . $i)->applyFromArray($styleborder);
                                    $objWorkSheet->getStyle('H' . $i)->applyFromArray($styleborder);
                                    $objWorkSheet->getStyle('I' . $i)->applyFromArray($styleborder);
                                    $objWorkSheet->getStyle('J' . $i)->applyFromArray($styleborder);
                                    $objWorkSheet->getStyle('K' . $i)->applyFromArray($styleborder);
                                    $objWorkSheet->getStyle('L' . $i)->applyFromArray($styleborder);
                                    $objWorkSheet->getStyle('M' . $i)->applyFromArray($styleborder);

                                    $i++;
                                    $nomor++;
                                }
                            } else {
                                $objWorkSheet->setCellValue('A' . $i, 'Tidak ada data')->mergeCells('A' . $i . ':M' . $i);
                                $objWorkSheet->getStyle('A' . $i . ':M' . $i)->applyFromArray($styleborder);
                            }

                            $objWriter = new Xlsx($objPHPExcel);
                            if (file_exists($save_dir . '/' . $save_file . '.xlsx')) {
                                unlink($save_dir . '/' . $save_file . '.xlsx');
                            }
                            $objWriter->save($save_dir . '/' . $save_file . '.xlsx');

                            $this->__forceDownload($save_dir . '/' . $save_file . '.xlsx');
                        }
                    }
                </highlight-code>
              </div>
            </div>

            <h2>Membuat Model</h2>
            <p>
              Sekarang Kita akan membuat model untuk mengelola data dari bentuk kode program menjadi data yang bisa di ekspor ke dalam bentuk file excel. 
              Selain itu, pembuatan kode model ini juga bertujuan untuk membuat dan mengatur relasi tabel sesuai dengan kebutuhan data yang diperlukan untuk diolah.
              Buat file di dalam <code>app/model/d_kirim_model.php</code>. Kemudian, tuliskan kode ini didalam file <code>d_kirim_model.php</code> dan simpan.
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
                    * Model untuk table d_kirim_model
                    *
                    * @version 1.0.0
                    *
                    * @package Model\D_Kirim
                    * @since 1.0.0
                    */
                    class D_Kirim_Model extends SENE_Model
                    {
                        public $table = 'd_kirim';
                        public $table_alias = 'dk';
                        public $table2 = 'b_driver';
                        public $table2_alias = 'bd';
                        public $table3 = 'c_departure';
                        public $table3_alias = 'cr';
                        public $table4 = 'c_arrival';
                        public $table4_alias = 'ca';
                        public $table5 = 'c_muatan';
                        public $table5_alias = 'cm';
                        public $table6 = 'd_pengiriman';
                        public $table6_alias = 'dp';
                        public $table7 = 'a_vehicle';
                        public $table7_alias = 'av';

                        public function __construct()
                        {
                            parent::__construct();
                            $this->db->from($this->table, $this->table_alias);
                        }

                        public function id($id)
                        {
                            $this->db->where_as("$this->table_alias.id", $this->db->esc($id));
                            return $this->db->get_first();
                        }

                        public function get()
                        {
                            return $this->db->get();
                        }

                        public function getKirimXls($start_date = '', $end_date = '')
                        {
                            $this->db->flushQuery();
                            $this->db->select_as("$this->table_alias.id", "id", 0);
                            $this->db->select_as("$this->table_alias.cdate", "cdate", 0);
                            $this->db->select_as("$this->table2_alias.nama", "driver", 0);
                            $this->db->select_as("$this->table7_alias.merk", "merk", 0);
                            $this->db->select_as("$this->table7_alias.no_pol", "no_pol", 0);
                            $this->db->select_as("$this->table7_alias.nama", "kendaraan", 0);
                            $this->db->select_as("$this->table6_alias.kode", "SKU", 0);
                            $this->db->select_as("$this->table5_alias.jumlah_muatan", "jumlah_muatan", 0);
                            $this->db->select_as("$this->table5_alias.berat", "berat", 0);
                            $this->db->select_as("$this->table3_alias.jam_keluar", "jam_keluar", 0);
                            $this->db->select_as("$this->table4_alias.jam_masuk", "jam_masuk", 0);
                            $this->db->select_as("$this->table6_alias.tujuan", "tujuan", 0);
                            $this->db->select_as("$this->table6_alias.kabkota", "KabKota", 0);
                            $this->db->select_as("$this->table_alias.is_active", "is_active", 0);
                            $this->db->from($this->table, $this->table_alias);
                            $this->db->join($this->table2, $this->table2_alias, 'id', $this->table_alias, 'b_driver_id', '');
                            $this->db->join($this->table3, $this->table3_alias, 'id', $this->table_alias, 'c_departure_id', '');
                            $this->db->join($this->table4, $this->table4_alias, 'id', $this->table_alias, 'c_arrival_id', '');
                            $this->db->join($this->table5, $this->table5_alias, 'id', $this->table_alias, 'c_muatan_id', '');
                            $this->db->join($this->table6, $this->table6_alias, 'id', $this->table_alias, 'd_pengiriman_id', '');
                            $this->db->join($this->table7, $this->table7_alias, 'id', $this->table_alias, 'a_vehicle_id', '');

                            if (!empty($start_date) && !empty($end_date)) {
                                $this->db->where_as("$this->table_alias.cdate", '"' . $start_date . ' 00:00:00"', 'AND', '>=');
                                $this->db->where_as("$this->table_alias.cdate", '"' . $end_date . ' 23:59:59"', 'AND', '<=');
                            } elseif (!empty($start_date)) {
                                $this->db->where_as("$this->table_alias.cdate", '"' . $start_date . ' 00:00:00"', 'AND', '>=');
                            } elseif (!empty($end_date)) {
                                $this->db->where_as("$this->table_alias.cdate", '"' . $end_date . ' 23:59:59"', 'AND', '<=');
                            }

                            return $this->db->get("object", 0);
                        }
                    }
                </highlight-code>
              </div>
            </div>

            <h2>Membuat View</h2>
            <p>
              Terakhir, Kita akan membuat view yang digunakan untuk menampilkan tampilan (UI) ke pengguna. Dalam Kode kali ini, view akan dibuat
              untuk menampilkan data rentang tanggal, sehingga pengguna bisa mendownload data sesuai dengan tanggal yang diperlukan.
              Buat file di dalam <code>app/view/laporan/pengiriman/home.php</code>. Kemudian, tuliskan kode ini didalam file <code>home.php</code> dan simpan.
            </p>
            <div class="macwindow">
                <div class="titlebar">
                    <div class="buttons">
                    <div class="close">
                        <a class="closebutton" href="#"><span><strong>x</strong></span></a>
                    </div>
                    <div class="minimize">
                        <a class="minimizebutton" href="#"><span><strong>&ndash;</strong></span></a>
                    </div>
                    <div class="zoom">
                        <a class="zoombutton" href="#"><span><strong>+</strong></span></a>
                    </div>
                    </div>
                </div>

                <div class="maccontent">
                    <highlight-code lang="php">
                    &lt;style&gt;
                    .panel {
                        padding: 0 1em;
                    }
                    .panel h1, .panel h4, .panel p {
                        text-align: right;
                    }
                    .panel h1 {
                        font-size: 2em;
                        font-weight: bold;
                    }
                    .panel h4 {
                        font-size: 1.2em;
                        font-weight: 100;
                    }
                    .panel p {
                        font-size: 0.8em;
                        line-height: 1;
                        font-style: italic;
                    }
                    .panel.panel-success {
                        background-color: #d6e9c6;
                    }
                    .panel.panel-info {
                        background-color: #bce8f1;
                    }
                    .panel.panel-warning {
                        background-color: #faebcc;
                    }
                    .panel.panel-danger {
                        background-color: #ebccd1;
                    }
                    .panel.panel-default {
                        background-color: #dddddd;
                    }
                    &lt;/style&gt;

                    &lt;div id="page-content"&gt;
                        &lt;!-- Static Layout Header --&gt;
                        &lt;ul class="breadcrumb breadcrumb-top"&gt;
                            &lt;li&gt;Admin&lt;/li&gt;
                            &lt;li&gt;Laporan&lt;/li&gt;
                            &lt;li&gt;Pengiriman&lt;/li&gt;
                        &lt;/ul&gt;
                        &lt;!-- END Static Layout Header --&gt;

                        &lt;!-- Content --&gt;
                        &lt;div class="block full"&gt;
                            &lt;div class="block-title"&gt;
                                &lt;h2&gt;&lt;strong&gt;Laporan Pengiriman Barang&lt;/strong&gt;&lt;/h2&gt;
                            &lt;/div&gt;
                            &lt;div class="row"&gt;
                                &lt;div class="col-md-12"&gt;
                                    &lt;div class="panel panel-muted" style="margin-bottom: 0px;"&gt;
                                        &lt;div class="form-group"&gt;
                                            &lt;div class="col-md-4"&gt;
                                                &lt;div class="input-group"&gt;
                                                    &lt;div class="input-group-addon"&gt;
                                                        &lt;i class="fa fa-calendar"&gt;&lt;/i&gt;
                                                    &lt;/div&gt;
                                                    &lt;input id="fl_start_date" type="text" class="form-control input-datepicker" data-date-format="yyyy-mm-dd" placeholder="Mulai Tgl" value="&lt;?=date(&quot;Y-m-&quot;,strtotime(&quot;-1 month&quot;))?&gt;26" /&gt;
                                                &lt;/div&gt;
                                            &lt;/div&gt;
                                            &lt;div class="col-md-4"&gt;
                                                &lt;div class="input-group"&gt;
                                                    &lt;div class="input-group-addon"&gt;
                                                        &lt;i class="fa fa-calendar"&gt;&lt;/i&gt;
                                                    &lt;/div&gt;
                                                    &lt;input id="fl_end_date" type="text" class="form-control input-datepicker" data-date-format="yyyy-mm-dd" placeholder="Sampai Tgl" value="&lt;?=date(&quot;Y-m-&quot;)?&gt;25" /&gt;
                                                &lt;/div&gt;
                                            &lt;/div&gt;
                                            &lt;div class="col-md-4"&gt;
                                                &lt;div class="btn-group pull-right"&gt;
                                                    &lt;button id="button_xls" type="button" class="btn btn-success btn-submit"&gt;
                                                        &lt;i class="fa fa-download"&gt;&lt;/i&gt; XLS &lt;i class="icon-submit fa"&gt;&lt;/i&gt;
                                                    &lt;/button&gt;
                                                &lt;/div&gt;
                                            &lt;/div&gt;
                                        &lt;/div&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                    </highlight-code>
                </div>
            </div>

            <p>
              Kemudian, buat file di dalam <code>app/view/laporan/pengiriman/home_bottom.php</code> untuk menyimpan kode Javascript. 
              Kode ini digunakan untuk membuat halaman web menjadi lebih interaktif dan dinamis. Tuliskan kode didalam file <code>home_bottom.php</code> dan simpan.
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
                $('#button_xls').on('click',function(e){
                    e.preventDefault();
                    $('.btn-submit').prop('disabled',true);
                    $('.icon-submit').addClass('fa-circle-o-notch');
                    $('.icon-submit').addClass('fa-spin');

                    var start_date = $("#fl_start_date").val();
                    var end_date = $("#fl_end_date").val();
                    var url = '<?=base_url('laporan/pengiriman/download_xls/') ?>';
                    url = url + '/?start_date='+start_date+'&end_date='+end_date;

                    setTimeout(function(){
                        $('.btn-submit').prop('disabled',false);
                        $('.icon-submit').removeClass('fa-circle-o-notch');
                        $('.icon-submit').removeClass('fa-spin');
                        window.location = url;
                    },999);
                });
                </highlight-code>
              </div>
            </div>

            <p>
              Mari Kita lihat hasil akhir dari pembuatan download XLS ini melalui google chrome atau firefox. 
              Apakah sama dengan hasil <i>screenshot</i> dibawah ini.
            </p>
            <div class="" style="padding: 7%;">
              <amp-img layout="responsive" width="1372px" height="675px" :src="downloadxls" style="box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -webkit-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72); -moz-box-shadow: 3px 4px 33px -9px rgba(0,0,0,0.72);"></amp-img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "id",
  data() {
    return {
      name: "Seme Framework 4 Tutorial",
      suffix: " - Seme Framework 4 Tutorial",
      title: "Belajar Singkat PHP",
      description: "Tutorial belajar singkat PHP dasar sebelum menggunakan Seme Framework 4.",
      downloadxls: require('~/assets/img/tutorial/download-xls.png'),
      breadcrumbs: [
        {
          url: process.env.BASE_URL || "http://localhost:3001",
          text: "Seme Framework"
        },
        {
          url: (process.env.BASE_URL || "http://localhost:3001") + "/id",
          text: "ID"
        },
        {
          url:
            (process.env.BASE_URL || "http://localhost:3001") + "/id/tutorial",
          text: "Tutorial"
        }
      ]
    };
  },
  head() {
    return {
      htmlAttrs: {
        lang: "id"
      },
      title: this.title + this.suffix,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.name + ": " + this.title
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.description
        }
      ]
    };
  },
  jsonld() {
    this.breadcrumbs.push({
      url: (process.env.BASE_URL || "http://localhost:3001") + this.$route.path,
      text: this.title
    });
    const items = this.breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebPage",
        "@id": item.url,
        name: item.text
      }
    }));
    return [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items
      },
      {
        "@type": "NewsArticle",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id":
            (process.env.BASE_URL || "http://localhost:3001") +
            this.$route.path.replace(/\/+$/, "") +
            "/"
        },
        headline: this.headline || this.title,
        image: [(process.env.CDN_URL || "http://localhost:3001") + "/logo.png"],
        dateCreated: "2020-06-26T19:12:31+07:00",
        datePublished: "2020-06-26T19:12:39+07:00",
        dateModified: "2023-01-12T10:52:03+07:00",
        author: {
          "@type": "Person",
          gender: "Male",
          name: "Daeng Rosanda, S.Kom",
          alternateName: "Daeng Rosanda",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "Cipta Esensi Merenah",
            email: "hi@cenah.co.id"
          }
        },
        publisher: {
          "@type": "Organization",
          name: "Cipta Esensi Merenah",
          description:
            "Cipta Esensi Merenah (Cenah) is software house company focused on developing web-based application from Bandung, Indonesia.",
          logo: {
            "@type": "ImageObject",
            name: "logo Cipta Esensi Merenah",
            url: "https://cdn.cenah.co.id/_nuxt/img/logo-wide.5420183.png",
            width: "256px",
            height: "62px"
          }
        },
        description: this.description
      }
    ];
  }
};
</script>
