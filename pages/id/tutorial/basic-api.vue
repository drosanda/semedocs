<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial/">Tutorial</NuxtLink></li>
          <li class="unavailable">Basic API</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Dasar-dasar Pembuatan Application Programming Interface (API)</h1>
            <p>Application Programming Interface (API) biasanya dibangun oleh pengembang untuk menjembatani frontend dan backend.</p>
            <p>Seme Framework memiliki fungsionalitas yang dapat mendukung untuk membangun API.</p>
            <p>Dalam tutorial ini Anda akan belajar tentang bagaimana:</p>
            <ul>
              <li>Mempersiapkan hasil keluaran berupa JSON dengan menggunakan library SEME_JSON.</li>
              <li>Membuat file Core controller supaya pembuatan kode yang berulang bisa dikurangi.</li>
              <li>Mengumpulkan dan memasukkan data formulir dan permintaan URI.</li>
              <li>Lakukan proses Create, Retrieve, Update and Delete (CRUD) ke database.</li>
              <li>Pengujian hasil dari pembuatan API</li>
            </ul>

            <h2>Prasyarat</h2>
            <p>Untuk hasil terbaik dari tutorial ini, Anda harus mengatur atau menginstal item berikut:</p>
            <ul>
              <li>Menjalankan Apache dan MySQL melalui XAMPP</li>
              <li>IDE atau Editor Teks sudah terinstall dan bisa digunakan</li>
              <li>Peramban / Browser seperti Chrome atau Firefox</li>
              <li>Download dan Install <a href="https://www.postman.com/downloads/" target="_blank">Postman</a> untuk melakukan pengujian API</li>
              <li><NuxtLink to="/id/tutorial/introduction/">Menyelesaikan tutorial pertama</NuxtLink></li>
              <li><NuxtLink to="/id/tutorial/get-data/">Menyelesaikan tutorial kedua</NuxtLink></li>
            </ul>
            <p>Jika sudah yakin, mari kita mulai!</p>

            <h2>Struktur file dan direktori</h2>
            <p>Sebelum kita melanjutkan ke tahap coding, kita harus belajar tentang direktori dan struktur hasil api yang kita gunakan untuk membangun API.</p>

            <h3>Struktur Direktori</h3>
            <p>Berikut adalah struktur yang harus kita ketahui dan digunakan.</p>

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
- app
-- controller
--- api
---- home.php
---- apikey.php
-- model
--- api
---- a_apikey_model.php
                </highlight-code>
              </div>
            </div>

            <p>Kita harus memisahkan controller dan model juga untuk menghindari kesalahan dengan menambahkan direktori baru ke model dan controller.</p>

            <h3>Struktur respons API </h3>
            <p>Ada banyak format standar untuk struktur respons API, tetapi kami menggunakan struktur API paling dasar pada tutorial ini.</p>

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
  &#x22;status&#x22;: 200,
  &#x22;message&#x22;: &#x22;Success&#x22;,
  &#x22;data&#x22;: []
}
            </highlight-code>
            </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p>Saat membuat API, kita tidak membutuhkan view, karena hasil API atau tampilan akan diproses langsung melalui kelas controller.</p>
              </div>
            </div>

            <h2>Fase Pengkodean (<em>Ngoding</em>)</h2>
            <p>Setelah memahami strukturnya, saatnya mengimplementasikan kode-kode tersebut.</p>

            <h3>Menentukan Respon atau hasil keluaran API</h3>
            <p>Pertama-tama kita harus membuat respons API default untuk menguji fungsionalitas dasar dan struktur hasil api dasar.</p>
            <p>Buat direktori baru bernama <code>api</code> di dalam <code>app/controller/</code>.</p>
            <p>Kemudian setelah itu dalam direktori baru tadi buat file baru bernama <code>home.php</code>.</p>

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
class Home extends SENE_Controller
{
  public function __construct()
  {
    parent::__construct();
    $this-&#x3E;lib(&#x22;sene_json_engine&#x22;, &#x22;json&#x22;);
  }
  public function index(){
    $data = array();
    $data[&#x27;status&#x27;] = 404;
    $data[&#x27;message&#x27;] = &#x27;Not found&#x27;;
    $data[&#x27;data&#x27;] = array();
    $this-&#x3E;json-&#x3E;out($data);
  }
}
                </highlight-code>
              </div>
            </div>
            <p>Kelas controller yang berisi kode ini merupakan kelas yang disusun dengan kode dasar untuk pembuatan API.</p>
            <p>Untuk menguji fungsionalitasnya, cukup buka <code>http://localhost/seme_framework/api/</code> melalui browser dan akan menghasilkan respon <code>not found</code> dengan <code>status 404</code>.</p>

            <h3>Membuat kelas Model</h3>
            <p>Kita harus membuat model untuk berkomunikasi antara PHP Server dan Database server.</p>
            <p>Buat direktori baru bernama <code>api</code> di dalam <code>app/model/</code>. Kemudian buat file baru bernama <code>a_apikey_model.php</code> di dalam direktori baru tersebut.</p>
            <p>Dalam model kita harus menambahkan beberapa metode seperti <strong>insert</strong>, <strong>update</strong>, <strong>delete</strong>, <strong>get by id</strong>, <strong>get all data</strong>, dan metode lainnya.</p>

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
class A_ApiKey_Model extends SENE_Model
{
  public $tbl = &#x27;a_apikey&#x27;;
  public $tbl_as = &#x27;ak&#x27;;

  public function __construct()
  {
    parent::__construct();
    $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl, $this-&#x3E;tbl_as);
  }

  /**
   * Start transaction
   * @return boolean      1 success, false failed
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
   * Commit transaction
   * @return boolean      1 success, false failed
   */
  public function trans_commit()
  {
    return $this-&#x3E;db-&#x3E;commit();
  }

  /**
   * Rollback transaction
   * @return boolean      1 success, false failed
   */
  public function trans_rollback()
  {
    return $this-&#x3E;db-&#x3E;rollback();
  }

  /**
   * Close / End transaction
   * @return boolean      1 success, false failed
   */
  public function trans_end()
  {
    return $this-&#x3E;db-&#x3E;autocommit(1);
  }

  /**
   * get last ID before insert
   * @param  int $nation_code    Nation Code or Country Code
   * @return int                 last id, 0 failed
   */
  public function getLastId($nation_code)
  {
    $this-&#x3E;db-&#x3E;select_as(&#x22;COALESCE(MAX($this-&#x3E;tbl_as.id),0)+1&#x22;, &#x22;last_id&#x22;, 0);
    $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl, $this-&#x3E;tbl_as);
    $this-&#x3E;db-&#x3E;where(&#x22;nation_code&#x22;, $nation_code);
    $d = $this-&#x3E;db-&#x3E;get_first(&#x27;&#x27;, 0);
    if (isset($d-&#x3E;last_id)) {
      return $d-&#x3E;last_id;
    }
    return 0;
  }

  /**
   * Insert data to a table row
   * @param  array   $di    key value pair for inserting data to a table
   * @return boolean        1 success, false failed
   */
  public function set($di)
  {
    return $this-&#x3E;db-&#x3E;insert($this-&#x3E;tbl, $di);
  }

  /**
   * Update data in a table row
   * @param  array   $nation_code     Nation Code or Country Code
   * @param  array   $id              ID from a table
   * @return boolean                  1 success, false failed
   */
  public function update($nation_code, $id, $du)
  {
    $this-&#x3E;db-&#x3E;where(&#x27;nation_code&#x27;, $nation_code);
    $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;, $id);
    return $this-&#x3E;db-&#x3E;update($this-&#x3E;tbl, $du);
  }

  /**
   * Delete data in a table row
   * @param  array   $nation_code     Nation Code or Country Code
   * @param  array   $id              ID from a table
   * @return boolean                  1 success, false failed
   */
  public function del($nation_code, $id)
  {
    $this-&#x3E;db-&#x3E;where(&#x27;nation_code&#x27;, $nation_code);
    $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;, $id);
    return $this-&#x3E;db-&#x3E;delete($this-&#x3E;tbl);
  }

  /**
   * Retrieve all rows
   * @return array        Array of object
   */
  public function get()
  {
    return $this-&#x3E;db-&#x3E;get();
  }

  /**
   * [getById description]
   * @param  int    $nation_code Nation Code or Country Code
   * @param  int    $id          ID from a table
   * @return object              Success if return Single row data object, otherwise return empty object
   */
  public function getById($nation_code,$id)
  {
    $this-&#x3E;db-&#x3E;where(&#x27;nation_code&#x27;, $nation_code);
    $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;, $id);
    return $this-&#x3E;db-&#x3E;get_first();
  }
}
                </highlight-code>
              </div>
            </div>

            <h3>Membuat kelas Controller</h3>
            <p>Setelah membuat kelas model, sekarang kita akan mencoba membuat kelas controller. Kelas controller ini nantinya akan digunakan untuk mengeksekusi CRUD.</p>

            <div class="message is-info">
              <div class="message-body">
                <p><strong>Tentang CRUD</strong></p>
                <p>CRUD merupakan istilah untuk Create, Retrieve, Update, Delete. Biasanya diartikan sebagai proses dasar dalam penarikan / penampilan data, penghapusan data, perubahan data ataupun penghapusan data.</p>
                <p>CRUD juga biasanya digunakan sebagai fungsi dasar dalam pengoperasian aplikasi atau pembuatan aplikasi.</p>
              </div>
            </div>

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
class ApiKey extends SENE_Controller
{
  public function __construct()
  {
    parent::__construct();
    $this-&#x3E;load(&#x22;a_apikey_model&#x22;, &#x22;aakm&#x22;);
    $this-&#x3E;lib(&#x22;sene_json_engine&#x22;, &#x22;json&#x22;);
  }
  public function index(){
    $data = array();
    $data[&#x27;status&#x27;] = 200;
    $data[&#x27;message&#x27;] = &#x27;Success&#x27;;
    $data[&#x27;data&#x27;] = $this-&#x3E;aakm-&#x3E;get();
    $this-&#x3E;json-&#x3E;out($data);
  }

  public function detail($id){
    $data = array();
    $id = (int) $id;
    if($id&#x3C;=0){
      $data[&#x27;status&#x27;] = 800;
      $data[&#x27;message&#x27;] = &#x27;invalid ID&#x27;;
      $this-&#x3E;json-&#x3E;out($data);
    }

    $aakm = $this-&#x3E;aakm-&#x3E;getById($id);
    if(!isset($aakm-&#x3E;id)){
      $data[&#x27;status&#x27;] = 804;
      $data[&#x27;message&#x27;] = &#x27;Data with supplied ID not found&#x27;;
      $this-&#x3E;json-&#x3E;out($data);
    }else{
      $data[&#x27;status&#x27;] = 200;
      $data[&#x27;message&#x27;] = &#x27;Success&#x27;;
      $data[&#x27;data&#x27;] = $aakm;
      $this-&#x3E;json-&#x3E;out($data);
    }
  }

  public function create(){
    $data = array();
    $data[&#x27;status&#x27;] = 549;
    $data[&#x27;message&#x27;] = &#x27;one or more parameter are required&#x27;;
    $data[&#x27;data&#x27;] = array();

    //collect input
    $nation_code = $this-&#x3E;input-&#x3E;post(&#x27;nation_code&#x27;);
    $code = $this-&#x3E;input-&#x3E;post(&#x27;code&#x27;);
    $name = $this-&#x3E;input-&#x3E;post(&#x27;name&#x27;);
    $is_active = (int) $this-&#x3E;input-&#x3E;post(&#x27;is_active&#x27;);

    //validation
    if(strlen($nation_code)==0){
      $data[&#x27;status&#x27;] = 801;
      $data[&#x27;message&#x27;] = &#x27;invalid nation_code&#x27;;
      $this-&#x3E;json-&#x3E;out($data);
    }
    if(strlen($code)==0){
      $data[&#x27;status&#x27;] = 801;
      $data[&#x27;message&#x27;] = &#x27;invalid code&#x27;;
      $this-&#x3E;json-&#x3E;out($data);
    }
    if(strlen($name)==0){
      $data[&#x27;status&#x27;] = 802;
      $data[&#x27;message&#x27;] = &#x27;invalid name&#x27;;
      $this-&#x3E;json-&#x3E;out($data);
    }
    if($is_active&#x3C;0){
      $data[&#x27;status&#x27;] = 803;
      $data[&#x27;message&#x27;] = &#x27;invalid is_active&#x27;;
      $this-&#x3E;json-&#x3E;out($data);
    }

    //transaction open
    $this-&#x3E;aakm-&#x3E;trans_start();

    //data input
    $di = array();
    $di[&#x27;nation_code&#x27;] = $nation_code;
    $di[&#x27;id&#x27;] = $this-&#x3E;aakm-&#x3E;getLastId($nation_code);
    $di[&#x27;code&#x27;] = $code;
    $di[&#x27;name&#x27;] = $name;
    $di[&#x27;cdate&#x27;] = &#x27;NOW()&#x27;;
    $di[&#x27;ldate&#x27;] = &#x27;NOW()&#x27;;
    $di[&#x27;is_active&#x27;] = $is_active;

    $res = $this-&#x3E;aakm-&#x3E;set($di);
    if($res){
      $data[&#x27;status&#x27;] = 200;
      $data[&#x27;message&#x27;] = &#x27;success&#x27;;
      $data[&#x27;data&#x27;] = $this-&#x3E;aakm-&#x3E;get();
      $this-&#x3E;aakm-&#x3E;trans_commit();
    }else{
      $data[&#x27;status&#x27;] = 900;
      $data[&#x27;message&#x27;] = &#x27;insert data failed&#x27;;
      $this-&#x3E;aakm-&#x3E;trans_rollback();
    }

    //transaction closed
    $this-&#x3E;aakm-&#x3E;trans_end();

    //render response
    $this-&#x3E;json-&#x3E;out($data);
  }

  public function edit($nation_code,$id){
    $data = array();
    $data[&#x27;status&#x27;] = 549;
    $data[&#x27;message&#x27;] = &#x27;one or more parameter are required&#x27;;
    $data[&#x27;data&#x27;] = array();

    $nation_code = $this-&#x3E;input-&#x3E;post(&#x27;nation_code&#x27;);
    if(strlen($nation_code)==0){
      $data[&#x27;status&#x27;] = 801;
      $data[&#x27;message&#x27;] = &#x27;invalid nation_code&#x27;;
      $this-&#x3E;json-&#x3E;out($data);
    }

    $id = (int) $id;
    if($id&#x3C;=0){
      $data[&#x27;status&#x27;] = 800;
      $data[&#x27;message&#x27;] = &#x27;invalid ID&#x27;;
      $this-&#x3E;json-&#x3E;out($data);
    }

    $aakm = $this-&#x3E;aakm-&#x3E;getById($nation_code,$id);
    if(!isset($aakm-&#x3E;id)){
      $data[&#x27;status&#x27;] = 804;
      $data[&#x27;message&#x27;] = &#x27;Data with supplied ID not found&#x27;;
      $this-&#x3E;json-&#x3E;out($data);
    }

    //collect input
    $code = $this-&#x3E;input-&#x3E;post(&#x27;code&#x27;);
    $name = $this-&#x3E;input-&#x3E;post(&#x27;name&#x27;);
    $is_active = (int) $this-&#x3E;input-&#x3E;post(&#x27;is_active&#x27;);

    //validation
    if(strlen($code)==0){
      $data[&#x27;status&#x27;] = 801;
      $data[&#x27;message&#x27;] = &#x27;invalid code&#x27;;
      $this-&#x3E;json-&#x3E;out($data);
    }
    if(strlen($name)==0){
      $data[&#x27;status&#x27;] = 802;
      $data[&#x27;message&#x27;] = &#x27;invalid name&#x27;;
      $this-&#x3E;json-&#x3E;out($data);
    }
    if($is_active&#x3C;0){
      $data[&#x27;status&#x27;] = 803;
      $data[&#x27;message&#x27;] = &#x27;invalid is_active&#x27;;
      $this-&#x3E;json-&#x3E;out($data);
    }

    //data update
    $du = array();
    $du[&#x27;nation_code&#x27;] = $nation_code;
    $du[&#x27;code&#x27;] = $code;
    $du[&#x27;name&#x27;] = $name;
    $du[&#x27;ldate&#x27;] = &#x27;NOW()&#x27;;
    $du[&#x27;is_active&#x27;] = $is_active;

    $res = $this-&#x3E;aakm-&#x3E;update($nation_code,$id,$du);
    if($res){
      $data[&#x27;status&#x27;] = 200;
      $data[&#x27;message&#x27;] = &#x27;success&#x27;;
      $data[&#x27;data&#x27;] = $this-&#x3E;aakm-&#x3E;get();
    }else{
      $data[&#x27;status&#x27;] = 900;
      $data[&#x27;message&#x27;] = &#x27;update data failed&#x27;;
    }
    $this-&#x3E;json-&#x3E;out($data);
  }

  public function delete($nation_code,$id){
    $data = array();
    $data[&#x27;status&#x27;] = 549;
    $data[&#x27;message&#x27;] = &#x27;one or more parameter are required&#x27;;
    $data[&#x27;data&#x27;] = array();

    $nation_code = $this-&#x3E;input-&#x3E;post(&#x27;nation_code&#x27;);
    if(strlen($nation_code)==0){
      $data[&#x27;status&#x27;] = 801;
      $data[&#x27;message&#x27;] = &#x27;invalid nation_code&#x27;;
      $this-&#x3E;json-&#x3E;out($data);
    }

    $id = (int) $id;
    if($id&#x3C;=0){
      $data[&#x27;status&#x27;] = 800;
      $data[&#x27;message&#x27;] = &#x27;invalid ID&#x27;;
      $this-&#x3E;json-&#x3E;out($data);
    }

    $aakm = $this-&#x3E;aakm-&#x3E;getById($nation_code,$id);
    if(!isset($aakm-&#x3E;id)){
      $data[&#x27;status&#x27;] = 804;
      $data[&#x27;message&#x27;] = &#x27;Data with supplied ID not found&#x27;;
      $this-&#x3E;json-&#x3E;out($data);
    }

    $res = $this-&#x3E;aakm-&#x3E;del($nation_code,$id);
    if($res){
      $data[&#x27;status&#x27;] = 200;
      $data[&#x27;message&#x27;] = &#x27;success&#x27;;
      $data[&#x27;data&#x27;] = $this-&#x3E;aakm-&#x3E;get();
    }else{
      $data[&#x27;status&#x27;] = 900;
      $data[&#x27;message&#x27;] = &#x27;delete data failed&#x27;;
    }
    $this-&#x3E;json-&#x3E;out($data);
  }
}
                </highlight-code>
              </div>
            </div>

            <h2>Menguji hasil pembuatan API</h2>
            <p>Setelah menyelesaikan kode, kita dapat menguji kode dengan menggunakan Postman. Apabila anda sudah memiliki kemapuan berlebih, bisa juga dicoba dengan menggunakan runner test sendiri ataupun aplikasi testing API lainnya.</p>

            <div class="message is-info">
              <div class="message-body">
                <p>Seme Framework telah mendukung pembuatan test runner sendiri untuk menguji API.</p>
              </div>
            </div>

            <h3>Menguji API untuk List Data</h3>
            <p>Untuk menguji daftar kunci api, Anda dapat membuka url langsung di browser Anda untuk <code>http://localhost/seme_framework/api/apikey/</code>.</p>
            <p>Tapi, untuk fungsi lain anda harus mengujinya dengan menggunakan runner atau postman.</p>
            <p>Berikut adalah beberapa contoh untuk menguji API melalui Postman.</p>

            <h4>Create (Menambahkan Data)</h4>
            <p>Untuk menambahkan data dengan menggunakan postman, dapat dilihat dari screenshot dibawah ini.</p>
            <amp-img layout="responsive" width="1682px" height="1166px" alt="postman create" :src="pCreate"></amp-img>

            <h4>Edit (Perubahan data)</h4>
            <p>Untuk melakukan perubahan data dengan menggunakan postman, dapat dilihat dari screenshot dibawah ini.</p>
            <amp-img layout="responsive" width="1340px" height="1116px" alt="postman edit" :src="pEdit"></amp-img>

            <h4>Delete (Menghapus data)</h4>
            <p>Untuk melakukan penghapus data dengan menggunakan postman, dapat dilihat dari screenshot dibawah ini.</p>
            <amp-img layout="responsive" width="1336px" height="1106px" alt="postman delete" :src="pDel"></amp-img>

            <p>Selamat, tutorial dasar API sudah selesai.</p>
            <p>Jika Anda menghadapi masalah, jangan ragu untuk membuat  <a href="https://github.com/drosanda/seme-framework/issues/new" target="_blank">issue di Github Seme Framework</a> atau menghubungi saya secara langsung.</p>
            <hr>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/tutorial/get-data/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Tutorial: Get Data
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/uri_routing/" class="btn">
            Uri Routing
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
      title: 'Tutorial: Create basic API',
      description: 'Pelajari selengkapnya tentang creating API by using melalui dokumentasi Seme Framework versi 4.0.0.',
      pCreate: require('~/assets/img/tutorial/basic-api/postman-create.png'),
      pEdit: require('~/assets/img/tutorial/basic-api/postman-edit.png'),
      pDel: require('~/assets/img/tutorial/basic-api/postman-delete.png'),
      breadcrumbs: [
        {
          url: process.env.ORIGIN_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.ORIGIN_URL || 'http://localhost:3001')+'/id/',
          text: 'id',
        },
        {
          url: (process.env.ORIGIN_URL || 'http://localhost:3001')+'/id/tutorial/',
          text: 'tutorial',
        },
        {
          url: (process.env.ORIGIN_URL || 'http://localhost:3001')+'/id/tutorial/basic-api/',
          text: 'Basic API',
        },
      ],
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'id'
      },
      title: this.title+' - '+this.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
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
    const items = this.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
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
          "@id": (process.env.ORIGIN_URL || 'http://localhost:3001')+this.$route.path.replace(/\/+$/, '') + '/'
        },
        "headline": (this.headline || this.title),
        "image": [
          this.logo
        ],
        "dateCreated": "2020-06-11T10:12:00+07:00",
        "datePublished": "2020-06-11T10:12:00+07:00",
        "dateModified": "2021-06-11T01:04:00+07:00",
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
