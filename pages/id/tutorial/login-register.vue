<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial">Tutorial</NuxtLink></li>
          <li class="unavailable">Login dan Register</li>
        </ul>
      </nav>
      <div>
        <div class="column">
          <div class="content">
            <h1 class="">Membuat Halaman Login dan Register</h1>
            <p>
              Pada tutorial kali ini akan dibahas pembuatan login, register beserta proses dan juga database-nya.
            </p>

            <h2>Sebelum Memulai</h2>
            <p>
              Pastikan anda sudah menjalankan MySQL dan juga telah membuat database dengan nama <code>seme_framework</code>.
              Kemudian pastikan <NuxtLink to="/id/configuration/db-connection" target="_blank">pengaturan koneksi database <i class="fa fa-window-restore"></i></NuxtLink> Seme Framework sudah benar mengarah ke nama database tersebut.
            </p>

            <h2>Import Database</h2>
            <p>
              Pertama-tama kita akan membuat tabel baru untuk penyimpanan data <b>user</b>.
              Data user pada tutorial kali ini akan disimpan dalam sebuah tabel bernama <code>b_user</code>.
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

DROP TABLE IF EXISTS &#x60;b_user&#x60;;
CREATE TABLE &#x60;b_user&#x60; (
  &#x60;id&#x60; int(6) unsigned NOT NULL AUTO_INCREMENT,
  &#x60;email&#x60; varchar(255) DEFAULT NULL,
  &#x60;password&#x60; varchar(255) NOT NULL,
  &#x60;nama&#x60; varchar(78) DEFAULT NULL,
  &#x60;alamat&#x60; varchar(78) DEFAULT NULL,
  &#x60;cdate&#x60; datetime DEFAULT NULL,
  &#x60;foto&#x60; varchar(255) DEFAULT NULL,
  &#x60;is_active&#x60; int(1) unsigned DEFAULT 1,
  PRIMARY KEY (&#x60;id&#x60;),
  KEY &#x60;email&#x60; (&#x60;email&#x60;)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4;
SET FOREIGN_KEY_CHECKS=1;
                </highlight-code>
              </div>
            </div>

            <h2>Membuat Model untuk tabel <code>b_user</code></h2>
            <p>
              Setelah mengimport tabel <code>b_user</code> kedalam database, sekarang saatnya membuat model untuk tabel <code>b_user</code>.
              Caranya buat file baru di <code>app/model/b_user_model.php</code>, kemudian <i>copy paste</i> kode dibawah ini dan simpan perubahan pada file tersebut.
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
                  class B_User_Model extends SENE_Model{
                    var $tbl = &#x27;b_user&#x27;;
                    var $tbl_as = &#x27;bu&#x27;;

                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                    }
                    public function getAll(){
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                      return $this-&#x3E;db-&#x3E;get();
                    }
                    public function countAll(){
                      $this-&#x3E;db-&#x3E;select_as(&#x27;COUNT(*)&#x27;,&#x27;total&#x27;,0);
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                      $d = $this-&#x3E;db-&#x3E;get_first();
                      if(isset($d-&#x3E;total)) return $d-&#x3E;total;
                      return 0;
                    }
                    public function getById($id){
                      $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;,$id);
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                      return $this-&#x3E;db-&#x3E;get_first();
                    }
                    public function set($di=array()){
                      $this-&#x3E;db-&#x3E;insert($this-&#x3E;tbl,$di);
                      return $this-&#x3E;db-&#x3E;last_id;
                    }
                    public function update($id,$du=array()){
                      $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;,$id);
                      return $this-&#x3E;db-&#x3E;update($this-&#x3E;tbl,$du);
                    }
                    public function del($id){
                      $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;,$id);
                      return $this-&#x3E;db-&#x3E;delete($this-&#x3E;tbl);
                    }
                    public function getByEmail($email){
                      $this-&#x3E;db-&#x3E;where(&#x27;email&#x27;,$email);
                      return $this-&#x3E;db-&#x3E;get_first();
                    }
                  }
                </highlight-code>
              </div>
            </div>


            <h2>Membuat Metode <i>Flash Message</i> pada Core Controller</h2>
            <p>
              <b>Flash message</b> merupakan suatu pesan yang dibuat oleh sistem dan akan dimunculkan ketika sistem selesai menjalankan proses tertentu.
              Contoh seperti setelah login gagal, ataupun setelah register gagal supaya user dapat mengetahui kesalahannya ada dimana.
              Supaya flash message ini tersedia pada setiap controller yang ada didalam sistem yang kita buat, maka kita akan membuat sebuah <NuxtLink to="/id/core/controller" target="_blank">Core Controller<i class="fa fa-window-restore"></i></NuxtLink> dan menambahkan metode untuk flash message.
            </p>
            <p>
              Langkah pertamanya adalah buat file baru didalam <code>app/core/ji_controller.php</code>,
              kemudian <i>copy paste</i> kode dibawah ini kedalam file tersebut dan simpan perubahannya.
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
class JI_Controller extends SENE_Controller
{
  public function __construct()
  {
    parent::__construct();
    $this-&#x3E;setTheme(&#x27;front&#x27;);
  }
  protected function __flash($message=&#x27;&#x27;,$type=&#x27;info&#x27;){
    $s = $this-&#x3E;getKey();
    if(!is_object($s)) $s = new stdClass();
    if(!isset($s-&#x3E;flash)) $s-&#x3E;flash = &#x27;&#x27;;
    if(strlen($message)&#x3E;0){
      $s-&#x3E;flash = $message;
    }
    $this-&#x3E;setKey($s);
    return $s;
  }
  protected function __flashClear(){
    $s = $this-&#x3E;getKey();
    if(!is_object($s)) $s = new stdClass();
    if(!isset($s-&#x3E;flash)) $s-&#x3E;flash = &#x27;&#x27;;
    $s-&#x3E;flash = &#x27;&#x27;;
    $this-&#x3E;setKey($s);
    return $s;
  }
  public function index() { }
}

                </highlight-code>
              </div>
            </div>

            <h3>Panggil Core Controller: ji_controller.php ke dalam Seme Framework</h3>
            <p>
              Setelah kita membuat core controller ji_controller.php, langkah selanjutnya adalah ubah pengaturan Seme Framework pada bagian core untuk memanggil file core ji_controller.php.
              Caranya, buka file pengaturan Seme Framework <code>app/config/development.php</code> kemudian cari bagian <code>$core_prefix</code> dan ubah file tersebut sesuai dengan kode dibawah ini.
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
                  ...

                  /********************************/
                  /* == Core Configuration == */
                  /* register your core class, and put it on: */
                  /*   - app/core/ */
                  /* all var $core_* value in lower case string*/
                  /* @var string */
                  /****************************/
                  $core_prefix = &#x27;ji_&#x27;;
                  $core_controller = &#x27;controller&#x27;;
                  $core_model = &#x27;&#x27;;

                  ...
                </highlight-code>
              </div>
            </div>

            <h3>Ubah semua <code>extends</code> pada Kelas Controller dari SENE_Controller menjadi JI_Controller</h3>
            <p>
              Setelah menetapkan pengaturan kelas core, selanjutnya adalah merubah semua kelas controller pada bagian <code>extends SENE_Controller</code> menjadi <code>JI_Controller</code>.
              Berikut ini adalah contoh ilustrasinya pada file <code>app/controller/home.php</code>.
            </p>
            <p>Dari:</p>
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
...
}
                </highlight-code>
              </div>
            </div>
            <p>Menjadi:</p>
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
class Home extends JI_Controller
{
...
}
                </highlight-code>
              </div>
            </div>

            <h2>Membuat View Register</h2>
            <p>
              Kemudian sekarang kita akan membuat view untuk halaman register.
              Halaman register ini telah dilengkapi dengan Flash Message untuk menampilkan pesan kesalahan ketika gagal melakukan pendaftaran.
              Selain itu, pada view ini juga akan diterapkan pengamanan inputan user dengan menambahkan atribut yang sesuai pada setiap input yang ada didalam form-nya.
              Untuk membuat view register ini caranya yaitu buat file baru di <code>app/view/front/register/home.php</code>,
              kemudian <i>copy paste</i> kode dibawah ini kedalam file tersebut dan simpan perubahan filenya.
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
&#x3C;main class=&#x22;register&#x22;&#x3E;
  &#x3C;div class=&#x22;container&#x22;&#x3E;
    &#x3C;div class=&#x22;row&#x22;&#x3E;
      &#x3C;div class=&#x22;col m6 offset-m3 s12&#x22;&#x3E;
        &#x3C;div class=&#x22;bungkus&#x22;&#x3E;
          &#x3C;h1&#x3E;Register&#x3C;/h1&#x3E;
          &#x3C;?php if(isset($sess-&#x3E;flash) &#x26;&#x26; strlen($sess-&#x3E;flash)&#x3E;0){ ?&#x3E;
          &#x3C;div class=&#x22;row&#x22;&#x3E;
            &#x3C;!-- Message Notification --&#x3E;
            &#x3C;div class=&#x22;col s12 red darken-2&#x22;&#x3E;
              &#x3C;p class=&#x22;white-text&#x22;&#x3E;&#x3C;b&#x3E;Alert:&#x3C;/b&#x3E; &#x3C;?=$sess-&#x3E;flash?&#x3E;&#x3C;/p&#x3E;
            &#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
          &#x3C;?php } ?&#x3E;
          &#x3C;form id=&#x22;flogin&#x22; action=&#x22;&#x3C;?=base_url()?&#x3E;register/proses&#x22; method=&#x22;post&#x22;&#x3E;
            &#x3C;div class=&#x22;row&#x22;&#x3E;
              &#x3C;div class=&#x22;input-field col s12&#x22;&#x3E;
                &#x3C;input class=&#x22;validate&#x22; id=&#x22;inama&#x22; type=&#x22;text&#x22; name=&#x22;nama&#x22; placeholder=&#x22;Full Name&#x22; autocomplete=&#x22;&#x22; required /&#x3E;
                &#x3C;label for=&#x22;inama&#x22;&#x3E;Full Name*&#x3C;/label&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;row&#x22;&#x3E;
              &#x3C;div class=&#x22;input-field col s12&#x22;&#x3E;
                &#x3C;input class=&#x22;validate&#x22; id=&#x22;iemail&#x22; type=&#x22;email&#x22; name=&#x22;email&#x22; placeholder=&#x22;Email&#x22; autocomplete=&#x22;&#x22; required /&#x3E;
                &#x3C;label for=&#x22;iemail&#x22;&#x3E;Email *&#x3C;/label&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;row&#x22;&#x3E;
              &#x3C;div class=&#x22;input-field col s12&#x22;&#x3E;
                &#x3C;input class=&#x22;validate&#x22; id=&#x22;ipassword&#x22; type=&#x22;password&#x22; name=&#x22;password&#x22; placeholder=&#x22;Password&#x22; autocomplete=&#x22;&#x22; required /&#x3E;
                &#x3C;label for=&#x22;ipassword&#x22;&#x3E;Password *&#x3C;/label&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;row&#x22;&#x3E;
              &#x3C;div class=&#x22;input-field col s12&#x22;&#x3E;
                &#x3C;input class=&#x22;validate&#x22; id=&#x22;ipassword_konfirmasi&#x22; type=&#x22;password&#x22; name=&#x22;password_konfirmasi&#x22; placeholder=&#x22;Password Confirmation&#x22; autocomplete=&#x22;&#x22; required /&#x3E;
                &#x3C;label for=&#x22;ipassword_konfirmasi&#x22;&#x3E;Password Confirmation *&#x3C;/label&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;row&#x22;&#x3E;
              &#x3C;div class=&#x22;col s12&#x22;&#x3E;
                &#x3C;div class=&#x22;center-align&#x22;&#x3E;
                  &#x3C;button class=&#x22;btn waves-effect waves-light&#x22; type=&#x22;submit&#x22; name=&#x22;action&#x22; style=&#x22;width: 100%;&#x22;&#x3E;
                    Daftar &#x3C;i class=&#x22;material-icons right&#x22;&#x3E;send&#x3C;/i&#x3E;
                  &#x3C;/button&#x3E;
                &#x3C;/div&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;

            &#x3C;div class=&#x22;row&#x22;&#x3E;
              &#x3C;div class=&#x22;col s12&#x22;&#x3E;
                &#x3C;div class=&#x22;d-grid gap-2 center-align&#x22;&#x3E;
                  &#x3C;a href=&#x22;&#x3C;?=base_url()?&#x3E;login&#x22; class=&#x22;daftar&#x22;&#x3E;Login&#x3C;/a&#x3E;
                &#x3C;/div&#x3E;
              &#x3C;/div&#x3E;
              &#x3C;div class=&#x22;col s12&#x22;&#x3E;
                &#x3C;div class=&#x22;d-grid gap-2 center-align&#x22;&#x3E;
                  atau
                &#x3C;/div&#x3E;
              &#x3C;/div&#x3E;
              &#x3C;div class=&#x22;col s12&#x22;&#x3E;
                &#x3C;div class=&#x22;d-grid gap-2 center-align&#x22;&#x3E;
                  &#x3C;a href=&#x22;&#x3C;?=base_url()?&#x3E;lupa&#x22; class=&#x22;daftar&#x22;&#x3E;Lupa Password?&#x3C;/a&#x3E;
                &#x3C;/div&#x3E;
              &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;

          &#x3C;/div&#x3E;
        &#x3C;/form&#x3E;
      &#x3C;/div&#x3E;

    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/main&#x3E;

                </highlight-code>
              </div>
            </div>

            <h2>Membuat Controller Register dan Prosesnya</h2>
            <p>
              Pada controller register ini kita akan membuat 2 proses utama yaitu menampilkan halaman register dari view yang telah kita buat sebelumnya dan proses pendaftaran.
              Sebelumnya pada controller ini, file model <code>b_user_model.php</code> akan dipanggil melalui metode <NuxtLink to="/id/controller/load" target="_blank">load <i class="fa fa-window-restore"></i></NuxtLink> pada constructor controller ini supaya controller memiliki kemampuan untuk menyimpan data kedalam tabel <code>b_user</code>.
            </p>
            <p>
              Sementara untuk validasi proses pendaftaran / register, pada controller ini akan dibuatkan metode <code>proses</code> yang berguna untuk memproses hasil <i>submit form</i> data yang dikirim dari view untuk disimpan kedalam database.
              Kemudian pada controller ini juga akan diterapkan beberapa validasi inputan beserta pesan kesalahannya apabila terjadi error.
            </p>
            <p>
              Untuk membuat controller register ini caranya yaitu buat file baru di <code>app/controller/register.php</code>,
              kemudian <i>copy paste</i> kode dibawah ini kedalam file tersebut dan simpan perubahan filenya.
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
                  class Register extends JI_Controller
                  {
                    public function __construct()
                    {
                      parent::__construct();
                      $this-&#x3E;setTheme(&#x27;front&#x27;);
                      $this-&#x3E;load(&#x27;b_user_model&#x27;,&#x27;bum&#x27;);
                    }
                    public function index()
                    {
                      $data = array();
                      $data[&#x27;sess&#x27;] = $this-&#x3E;getKey();
                      if(isset($data[&#x27;sess&#x27;]-&#x3E;user-&#x3E;id)){
                        redir(base_url(&#x27;dashboard&#x27;));
                        return;
                      }
                      $data = array();
                      $data[&#x27;sess&#x27;] = $this-&#x3E;__flash();
                      $this-&#x3E;setTitle(&#x27;Register&#x27;);
                      $this-&#x3E;setDescription(&#x22;Please register before you can login.&#x22;);
                      $this-&#x3E;setKeyword(&#x27;Seme Framework&#x27;);
                      $this-&#x3E;setAuthor(&#x27;Seme Framework&#x27;);

                      $this-&#x3E;putThemeContent(&#x22;register/home&#x22;,$data); //pass data to view
                      $this-&#x3E;loadLayout(&#x22;col-1&#x22;,$data);
                      $this-&#x3E;__flashClear();
                      $this-&#x3E;render();
                    }
                    public function proses(){
                      $nama = $this-&#x3E;input-&#x3E;post(&#x27;nama&#x27;);
                      $email = $this-&#x3E;input-&#x3E;post(&#x27;email&#x27;);
                      $password = $this-&#x3E;input-&#x3E;post(&#x27;password&#x27;);
                      $password_konfirmasi = $this-&#x3E;input-&#x3E;post(&#x27;password_konfirmasi&#x27;);

                      if(strlen($nama)&#x3C;=1){
                        $this-&#x3E;__flash(&#x27;Invalid name&#x27;);
                        $this-&#x3E;index();
                        return;
                      }

                      if(strlen($email)&#x3C;=4){
                        $this-&#x3E;__flash(&#x27;Invalid email&#x27;);
                        $this-&#x3E;index();
                        return;
                      }
                      $bum = $this-&#x3E;bum-&#x3E;getByEmail($email);
                      if(isset($bum-&#x3E;id)){
                        $this-&#x3E;__flash(&#x27;email has been used&#x27;);
                        $this-&#x3E;index();
                        return;
                      }

                      if(strlen($password)&#x3C;=4){
                        $this-&#x3E;__flash(&#x27;Invalid password&#x27;);
                        $this-&#x3E;index();
                        return;
                      }

                      if($password != $password_konfirmasi){
                        $this-&#x3E;__flash(&#x27;Password confirmation doesn\&#x27;t match&#x27;);
                        $this-&#x3E;index();
                        return;
                      }

                      $di = array();
                      $di[&#x27;nama&#x27;] = $nama;
                      $di[&#x27;email&#x27;] = $email;
                      $di[&#x27;password&#x27;] = password_hash($password, PASSWORD_BCRYPT);
                      $di[&#x27;alamat&#x27;] = &#x27;&#x27;;
                      $di[&#x27;cdate&#x27;] = &#x27;NOW()&#x27;;
                      $di[&#x27;is_active&#x27;] = 1;

                      $res = $this-&#x3E;bum-&#x3E;set($di);
                      if($res){
                        $sess = $this-&#x3E;getKey();
                        if(!is_object($sess)) $sess = new stdClass();
                        if(!isset($sess-&#x3E;user)) $sess-&#x3E;user = new stdClass();
                        $sess-&#x3E;user-&#x3E;id = 1;
                        $sess-&#x3E;user-&#x3E;nama = $nama;
                        $sess-&#x3E;user-&#x3E;email = $email;
                        $this-&#x3E;setKey($sess);

                        $this-&#x3E;__flash(&#x27;Welcome &#x27;.$nama.&#x27;....&#x27;);
                        redir(base_url(&#x27;dashboard&#x27;),1);
                        return;
                      }else{
                        $this-&#x3E;__flash(&#x27;Password confirmation doesn\&#x27;t match&#x27;);
                        $this-&#x3E;index();
                        return;
                      }
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h2>Membuat View Login</h2>
            <p>
              Sama seperti pada halaman register, view login juga sudah ada validasi dan flash message-nya.
              Untuk membuat view login ini caranya yaitu buat file baru di <code>app/view/front/login/home.php</code>,
              kemudian <i>copy paste</i> kode dibawah ini kedalam file tersebut dan simpan perubahan filenya.
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
                  &#x3C;main class=&#x22;login&#x22;&#x3E;
                    &#x3C;div class=&#x22;container&#x22;&#x3E;
                      &#x3C;div class=&#x22;row&#x22;&#x3E;
                        &#x3C;div class=&#x22;col m6 offset-m3 s12&#x22;&#x3E;
                          &#x3C;div class=&#x22;bungkus&#x22;&#x3E;
                            &#x3C;h1&#x3E;Login&#x3C;/h1&#x3E;
                            &#x3C;form id=&#x22;flogin&#x22; action=&#x22;&#x3C;?=base_url()?&#x3E;login/proses&#x22; method=&#x22;post&#x22;&#x3E;

                            &#x3C;?php if(isset($sess-&#x3E;flash) &#x26;&#x26; strlen($sess-&#x3E;flash)&#x3E;0){ ?&#x3E;
                            &#x3C;div class=&#x22;row&#x22;&#x3E;
                              &#x3C;!-- Message Notification --&#x3E;
                              &#x3C;div class=&#x22;col s12 red darken-2&#x22;&#x3E;
                                &#x3C;p class=&#x22;white-text&#x22;&#x3E;&#x3C;b&#x3E;Alert:&#x3C;/b&#x3E; &#x3C;?=$sess-&#x3E;flash?&#x3E;&#x3C;/p&#x3E;
                              &#x3C;/div&#x3E;
                            &#x3C;/div&#x3E;
                            &#x3C;?php } ?&#x3E;

                              &#x3C;div class=&#x22;row&#x22;&#x3E;
                                &#x3C;div class=&#x22;input-field col s12&#x22;&#x3E;
                                  &#x3C;input class=&#x22;validate&#x22; id=&#x22;iemail&#x22; type=&#x22;email&#x22; name=&#x22;email&#x22; placeholder=&#x22;Email&#x22; autocomplete=&#x22;&#x22; required /&#x3E;
                                  &#x3C;label for=&#x22;iemail&#x22;&#x3E;Email *&#x3C;/label&#x3E;
                                &#x3C;/div&#x3E;
                              &#x3C;/div&#x3E;
                              &#x3C;div class=&#x22;row&#x22;&#x3E;
                                &#x3C;div class=&#x22;input-field col s12&#x22;&#x3E;
                                  &#x3C;input class=&#x22;validate&#x22; id=&#x22;ipassword&#x22; type=&#x22;password&#x22; name=&#x22;password&#x22; placeholder=&#x22;Password&#x22; autocomplete=&#x22;&#x22; required /&#x3E;
                                  &#x3C;label for=&#x22;ipassword&#x22;&#x3E;Password *&#x3C;/label&#x3E;
                                &#x3C;/div&#x3E;

                                &#x3C;div class=&#x22;col s12&#x22;&#x3E;
                                  &#x3C;div class=&#x22;mb-3 right-align&#x22;&#x3E;
                                    &#x3C;a href=&#x22;&#x3C;?=base_url()?&#x3E;lupa&#x22; class=&#x22;lupa&#x22;&#x3E;Lupa Password&#x3C;/a&#x3E;
                                  &#x3C;/div&#x3E;
                                &#x3C;/div&#x3E;
                              &#x3C;/div&#x3E;
                              &#x3C;div class=&#x22;row&#x22;&#x3E;
                                &#x3C;div class=&#x22;col s12&#x22;&#x3E;
                                  &#x3C;div class=&#x22;center-align&#x22;&#x3E;
                                    &#x3C;button class=&#x22;btn waves-effect waves-light&#x22; type=&#x22;submit&#x22; name=&#x22;action&#x22; style=&#x22;width: 100%;&#x22;&#x3E;
                                      Login &#x3C;i class=&#x22;material-icons right&#x22;&#x3E;send&#x3C;/i&#x3E;
                                    &#x3C;/button&#x3E;
                                  &#x3C;/div&#x3E;
                                &#x3C;/div&#x3E;
                              &#x3C;/div&#x3E;

                              &#x3C;div class=&#x22;row&#x22;&#x3E;
                                &#x3C;div class=&#x22;col s12&#x22;&#x3E;
                                  &#x3C;div class=&#x22;d-grid gap-2 center-align&#x22;&#x3E;
                                    atau
                                    &#x3C;a href=&#x22;&#x3C;?=base_url()?&#x3E;register&#x22; class=&#x22;daftar&#x22;&#x3E;Daftar&#x3C;/a&#x3E;
                                  &#x3C;/div&#x3E;
                                &#x3C;/div&#x3E;
                              &#x3C;/div&#x3E;

                            &#x3C;/div&#x3E;

                          &#x3C;/form&#x3E;
                        &#x3C;/div&#x3E;

                      &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                  &#x3C;/main&#x3E;
                </highlight-code>
              </div>
            </div>

            <h2>Membuat Controller Login dan Prosesnya</h2>
            <p>
              Pada controller login ini kita akan membuat 2 proses utama yaitu menampilkan halaman login dan proses login yang usernya diambil dari table <code>b_user</code>.
              Untuk membuat controller login ini caranya yaitu buat file baru di <code>app/controller/login.php</code>,
              lalu <i>copy paste</i> kode dibawah ini kedalam file tersebut dan simpan perubahan filenya.
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
class Login extends JI_Controller
{
  public function __construct()
  {
    parent::__construct();
    $this-&#x3E;setTheme(&#x27;front&#x27;);
    $this-&#x3E;load(&#x27;b_user_model&#x27;,&#x27;bum&#x27;);
  }
  public function index()
  {
    $data = array();
    $data[&#x27;sess&#x27;] = $this-&#x3E;getKey();
    if(isset($data[&#x27;sess&#x27;]-&#x3E;user-&#x3E;id)){
      redir(base_url(&#x27;dashboard&#x27;));
      return;
    }
    $data = array();
    $data[&#x27;sess&#x27;] = $this-&#x3E;__flash();
    $this-&#x3E;setTitle(&#x27;Login&#x27;);
    $this-&#x3E;setDescription(&#x22;Please login before you continue to your page.&#x22;);
    $this-&#x3E;setKeyword(&#x27;Seme Framework&#x27;);
    $this-&#x3E;setAuthor(&#x27;Seme Framework&#x27;);

    $this-&#x3E;putThemeContent(&#x22;login/home&#x22;,$data); //pass data to view
    $this-&#x3E;loadLayout(&#x22;col-1&#x22;,$data);
    $this-&#x3E;__flashClear();
    $this-&#x3E;render();
  }
  public function proses(){
    $email = $this-&#x3E;input-&#x3E;post(&#x27;email&#x27;);
    $password = $this-&#x3E;input-&#x3E;post(&#x27;password&#x27;);

    if(strlen($email)&#x3E;=4 &#x26;&#x26; strlen($password)&#x3E;=5){
      $bum = $this-&#x3E;bum-&#x3E;getByEmail($email);
      if(isset($bum-&#x3E;id)){
        if(empty($bum-&#x3E;is_active)){
          $this-&#x3E;__flash(&#x27;This user has been deactivated&#x27;);
          $this-&#x3E;index();
          return;
        }

        //update password if still md5
        $this-&#x3E;password = password_hash($this-&#x3E;password, PASSWORD_BCRYPT);
        if(md5($password) == $bum-&#x3E;password){
          $du = array();
          $du[&#x27;password&#x27;] = password_hash($password, PASSWORD_BCRYPT);
          $this-&#x3E;bum-&#x3E;update($bum-&#x3E;id, $du);
          $password = $du[&#x27;password&#x27;];
          $bum-&#x3E;password = $password;
        }


        if (password_verify($password, $bum-&#x3E;password)) {
          //set to session
          $sess = $this-&#x3E;getKey();
          if(!is_object($sess)) $sess = new stdClass();
          if(!isset($sess-&#x3E;user)) $sess-&#x3E;user = new stdClass();
          $sess-&#x3E;user = $bum;
          $this-&#x3E;setKey($sess);

          // redirect to dashboard
          redir(base_url(&#x27;dashboard&#x27;),1);
          return;
        }else{
          $this-&#x3E;__flash(&#x27;Invalid email or password&#x27;);
          $this-&#x3E;index();
        }
      }else{
        $this-&#x3E;__flash(&#x27;Invalid email or password&#x27;);
        $this-&#x3E;index();
      }
    }else{
      $this-&#x3E;__flash(&#x27;Invalid email or password&#x27;);
      $this-&#x3E;index();
    }
  }
}

                </highlight-code>
              </div>
            </div>

            <h2>Membuat Controller Dashboard</h2>
            <p>
              Pada halaman dashboard ini akan digunakan untuk menguji sesi sudah login atau belum sehingga pada halaman ini ditambahkan validasi untuk mengecek user sudah login atau belum.
              Pertama-tama buat file baru di <code>app/controller/dashboard.php</code>, lalu copy paste kode dibawah ini kedalam file tersebut dan simpan perubahan filenya.
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
                  class Dashboard extends JI_Controller
                  {
                    public function __construct()
                    {
                      parent::__construct();
                      $this-&#x3E;setTheme(&#x27;front&#x27;);
                    }
                    public function index()
                    {
                      $data = array();
                      $data[&#x27;sess&#x27;] = $this-&#x3E;getKey();
                      if(!isset($data[&#x27;sess&#x27;]-&#x3E;user-&#x3E;id)){
                        redir(base_url(&#x27;login&#x27;));
                        return;
                      }
                      $this-&#x3E;setTitle(&#x27;Dashboard &#x27;.$data[&#x27;sess&#x27;]-&#x3E;user-&#x3E;nama);
                      $this-&#x3E;setDescription(&#x22;Congratulation, you have done well.&#x22;);
                      $this-&#x3E;setKeyword(&#x27;Seme Framework&#x27;);
                      $this-&#x3E;setAuthor(&#x27;Seme Framework&#x27;);

                      $this-&#x3E;putThemeContent(&#x22;dashboard/home&#x22;,$data); //pass data to view

                      $this-&#x3E;loadLayout(&#x22;col-1&#x22;,$data);
                      $this-&#x3E;render();
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h2>Membuat View Dashboard</h2>
            <p>
              Sekarang kita akan membuat view untuk halaman dashboard,
              buat file baru di <code>app/view/front/dashboard/home.php</code>,
              kemudian <i>copy paste</i> kode dibawah ini kedalam file tersebut dan simpan perubahan filenya.
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
                  &#x3C;div class=&#x22;container&#x22;&#x3E;
                    &#x3C;div class=&#x22;row&#x22;&#x3E;
                      &#x3C;div class=&#x22;col s12&#x22;&#x3E;
                        &#x3C;h1&#x3E;&#x3C;small&#x3E;Selamat Datang&#x3C;/small&#x3E; &#x3C;?=$sess-&#x3E;user-&#x3E;nama?&#x3E;&#x3C;/h1&#x3E;
                      &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                  &#x3C;/div&#x3E;
                </highlight-code>
              </div>
            </div>

            <h2>Menambahkan Menu Login, Register dan Validasi Session pada Navigation</h2>
            <p>
              Pada tutorial sebelumnya dalam <NuxtLink to="/id/tutorial/navigation" target="_blank">pembuatan Navigation <i class="fa fa-window-restore"></i></NuxtLink>,
              sekarang akan ditambahkan menu login dan register serta validasinya supaya hanya muncul ketika belum login dan tidak tampil ketika sudah login.
              Buka file <code>app/view/front/page/html/navbar.php</code> kemudian ganti isi filenya seperti kode dibawah ini dan simpan perubahan pada filenya.
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
&#x3C;nav&#x3E;
  &#x3C;div class=&#x22;nav-wrapper&#x22;&#x3E;
    &#x3C;a href=&#x22;#&#x22; class=&#x22;brand-logo&#x22;&#x3E;Logo&#x3C;/a&#x3E;
    &#x3C;a href=&#x22;#&#x22; data-target=&#x22;mobile-demo&#x22; class=&#x22;sidenav-trigger&#x22;&#x3E;
      &#x3C;i class=&#x22;material-icons&#x22;&#x3E;menu&#x3C;/i&#x3E;
    &#x3C;/a&#x3E;
    &#x3C;ul class=&#x22;right hide-on-med-and-down&#x22;&#x3E;
      &#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url()?&#x3E;&#x22;&#x3E;Homepage&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;?php if(isset($sess-&#x3E;user-&#x3E;id)){ ?&#x3E;
      &#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url(&#x27;logout&#x27;)?&#x3E;&#x22;&#x3E;Logout&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;?php } else { ?&#x3E;
      &#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url(&#x27;login&#x27;)?&#x3E;&#x22;&#x3E;Login&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url(&#x27;register&#x27;)?&#x3E;&#x22;&#x3E;Register&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;?php } ?&#x3E;
    &#x3C;/ul&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/nav&#x3E;

&#x3C;ul class=&#x22;sidenav&#x22; id=&#x22;mobile-demo&#x22;&#x3E;
  &#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url()?&#x3E;&#x22;&#x3E;Homepage&#x3C;/a&#x3E;&#x3C;/li&#x3E;
  &#x3C;?php if(isset($sess-&#x3E;user-&#x3E;id)){ ?&#x3E;
  &#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url(&#x27;logout&#x27;)?&#x3E;&#x22;&#x3E;Logout&#x3C;/a&#x3E;&#x3C;/li&#x3E;
  &#x3C;?php } else { ?&#x3E;
  &#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url(&#x27;login&#x27;)?&#x3E;&#x22;&#x3E;Login&#x3C;/a&#x3E;&#x3C;/li&#x3E;
  &#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url(&#x27;register&#x27;)?&#x3E;&#x22;&#x3E;Register&#x3C;/a&#x3E;&#x3C;/li&#x3E;
  &#x3C;?php } ?&#x3E;
&#x3C;/ul&#x3E;

                </highlight-code>
              </div>
            </div>

            <h2>Controller untuk logout</h2>
            <p>
              Untuk menghapus session yang digunakan setelah login berhasil, kita perlu fungsi logout untuk menghapus session tersebut.
              Caranya adalah buat file baru di <code>app/controller/logout.php</code> kemudian <i>copy paste</i> kode dibawah ini dan simpan perubahannya.
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
                  class Logout extends SENE_Controller
                  {
                      public function __construct()
                      {
                          parent::__construct();
                      }
                      public function index()
                      {
                          $data = array();
                          $sess = $this-&#x3E;getKey();
                          if (!is_object($sess)) {
                              $sess = new stdClass();
                          }
                          $sess-&#x3E;user = new stdClass();
                          $this-&#x3E;setKey($sess);
                          redir(base_url(&#x22;login&#x22;), 0);
                      }
                  }
                </highlight-code>
              </div>
            </div>

            <h2>Selesai...!</h2>
            <p>
              Untuk mencoba hasil dari tutorial ini, buka alamat <code>http://localhost/seme_framework</code> pada browser.
              Apabila ada yang tidak sesuai tampilannya, coba periksa lagi atau buat issue di github Seme Framework.
            </p>

          </div>
        </div>
      </div>



      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/tutorial/navigation" class="btn">
            <i class="fa fa-chevron-left"></i>
            Tutorial: Navigation
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/tutorial/send-email" class="btn">
            Tutorial: Kirim Email
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
      title: 'Membuat Login dan Register',
      description: 'Mari kita pelajari tutorial pembuatan halam login dan register di Seme Framework 4',
      navbar: require('~/assets/img/tutorial/navigation/navigation-bar.png'),
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
