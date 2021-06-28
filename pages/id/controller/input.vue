<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">Properti Input</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Properti Input</h1>
            <p>
              Seme Framework memiliki properti untuk menerima atau memproses hasil pengiriman nilai melalui <code>$_POST</code>, <code>$_GET</code>, dan <code>$_REQUEST</code>.
            </p>
            <p>
              Properti ini berisikan object dari kelas <code>SENE_Input</code>.
            </p>

            <h2>Metode <code>SENE_Input::post()</code></h2>
            <p>
              Metode <code>SENE_Input::post()</code> akan menerima isi nilai dari tag <code>form</code> HTML dengan atribut <code>method</code> berisikan <code>post</code> dan atribut <code>enctype</code> berisikan <code>multipart/form-data</code>.
            </p>


            <p>
              Berikut ini adalah bentuk umum dari metode <code>SENE_Input::post()</code>.
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
                  SENE_Input::post($keyname, $default_value=0): mixed
                </highlight-code>
              </div>
            </div>

            <h3>Parameter</h3>
            <p>
              Metode <code>SENE_Input::post</code> terdiri atas 2 parameter yaitu <code>$keyname</code> dan <code>$default_value</code>.
            </p>
            <p>
              Parameter <code>$keyname</code> wajib diisi dan harus sesuai dengan isi dari atribut <code>name</code> yang ada dalam tag <code>input</code>, <code>select</code>, dan komponen form html lainnya.
            </p>
            <p>
              Sementara parameter <code>$default_value</code> tidak wajib diisi.
            </p>

            <h3>Contoh Kode</h3>
            <p>
              Berikut ini adalah contoh potongan kode HTML form.
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
                  &#x3C;form method=&#x22;post&#x22; enctype=&#x22;multipart/form-data&#x22;&#x3E;
                  &#x3C;input type=&#x22;text&#x22; name=&#x22;nama&#x22; /&#x3E;
                  &#x3C;select name=&#x22;gender&#x22;&#x3E;
                  &#x3C;option value=&#x22;1&#x22;&#x3E;Pria&#x3C;/option&#x3E;
                  &#x3C;option value=&#x22;0&#x22;&#x3E;Wanita&#x3C;/option&#x3E;
                  &#x3C;/select&#x3E;
                  &#x3C;/form&#x3E;
                  ...
                </highlight-code>
              </div>
            </div>

            <p>
              Berikut ini adalah contoh kode di Controller Seme Framework.
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
                  class Home extends Sene_Controller{
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      $nama = $this-&#x3E;input-&#x3E;post(&#x27;nama&#x27;); // disesuaikan dengan tag input untuk atribut name=&#x22;nama&#x22;
                      $gender = $this-&#x3E;input-&#x3E;post(&#x27;gender&#x27;); // disesuaikan dengan tag select untuk atribut name=&#x22;gender&#x22;
                      ...
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h2>Metode <code>SENE_Input::get()</code></h2>
            <p>
              Metode <code>SENE_Input::get()</code> akan menerima isi nilai dari tag <code>form</code> HTML dengan atribut <code>method</code> berisikan <code>get</code>.
              Metode ini juga akan menerima input <code>GET</code>, yang dilewatkan melalui <code>alamat URL</code>.
            </p>

            <p>
              Berikut ini adalah bentuk umum dari metode <code>SENE_Input::get()</code>.
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
                  SENE_Input::get($keyname, $default_value=0): mixed
                </highlight-code>
              </div>
            </div>

            <h3>Parameter</h3>
            <p>
              Metode <code>SENE_Input::get</code> terdiri atas 2 parameter yaitu <code>$keyname</code> dan <code>$default_value</code>.
            </p>
            <p>
              Parameter <code>$keyname</code> wajib diisi dan harus sesuai dengan isi dari atribut <code>name</code> yang ada dalam tag <code>input</code>, <code>select</code>, dan komponen form html lainnya.
            </p>
            <p>
              Sementara parameter <code>$default_value</code> tidak wajib diisi.
            </p>

            <h3>Contoh Kode melalui FORM</h3>
            <p>
              Berikut ini adalah contoh potongan kode HTML form.
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
                  &#x3C;form method=&#x22;get&#x22;&#x3E;
                  &#x3C;input type=&#x22;text&#x22; name=&#x22;nama&#x22; /&#x3E;
                  &#x3C;select name=&#x22;gender&#x22;&#x3E;
                  &#x3C;option value=&#x22;1&#x22;&#x3E;Pria&#x3C;/option&#x3E;
                  &#x3C;option value=&#x22;0&#x22;&#x3E;Wanita&#x3C;/option&#x3E;
                  &#x3C;/select&#x3E;
                  &#x3C;/form&#x3E;
                  ...
                </highlight-code>
              </div>
            </div>

            <p>
              Berikut ini adalah contoh kode di Controller Seme Framework.
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
                  class Home extends Sene_Controller{
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      $nama = $this-&#x3E;input-&#x3E;get(&#x27;nama&#x27;); // disesuaikan dengan tag input untuk atribut name=&#x22;nama&#x22;
                      $gender = $this-&#x3E;input-&#x3E;get(&#x27;gender&#x27;); // disesuaikan dengan tag select untuk atribut name=&#x22;gender&#x22;
                      ...
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Contoh Kode melalui URL</h3>
            <p>
              Berikut ini adalah alamat URL, dengan <code>https://example.com/</code> sebagai <code>BASE_URL</code>.
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
                  https://example.com/login/proses/?username=RuliWidura1&password=123456
                </highlight-code>
              </div>
            </div>

            <p>
              Berikut ini adalah contoh kode di Controller Seme Framework.
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
                  class Login extends Sene_Controller{
                    public function __construct(){
                      parent::__construct();
                    }
                    ...
                    public function proses(){
                      $username = $this-&#x3E;input-&#x3E;get(&#x27;username&#x27;); // didapatkan dari parameter URL username
                      $password = $this-&#x3E;input-&#x3E;get(&#x27;password&#x27;); // didapatkan dari parameter URL password
                      ...
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h2>Metode <code>SENE_Input::request()</code></h2>
            <p>
              Metode <code>SENE_Input::request()</code> akan menerima isi nilai baik dari metode <code>GET</code> maupun <code>POST</code>.
              Jadi, metode ini mengizinkan untuk memproses input baik dari proses pengiriman FORM maupun URL.
            </p>

            <p>
              Berikut ini adalah bentuk umum dari metode <code>SENE_Input::request()</code>.
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
                  SENE_Input::request($keyname, $default_value=0): mixed
                </highlight-code>
              </div>
            </div>

            <h3>Parameter</h3>
            <p>
              Metode <code>SENE_Input::request</code> terdiri atas 2 parameter yaitu <code>$keyname</code> dan <code>$default_value</code>.
            </p>
            <p>
              Parameter <code>$keyname</code> wajib diisi dan harus sesuai dengan isi dari atribut <code>name</code> yang ada dalam tag <code>input</code>, <code>select</code>, dan komponen form html lainnya.
            </p>
            <p>
              Sementara parameter <code>$default_value</code> tidak wajib diisi.
            </p>

            <h3>Contoh Kode</h3>
            <p>
              Berikut ini adalah contoh potongan kode HTML form.
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
                  &#x3C;form action=&#x22;&#x3C;?=base_url()?&#x3E;produk/review/?id=96&#x22; method=&#x22;post&#x22; enctype=&#x22;multipart/form-data&#x22;&#x3E;
                  &#x3C;input type=&#x22;text&#x22; name=&#x22;review&#x22; /&#x3E;
                  &#x3C;select name=&#x22;like&#x22;&#x3E;
                  &#x3C;option value=&#x22;1&#x22;&#x3E;Like&#x3C;/option&#x3E;
                  &#x3C;option value=&#x22;0&#x22;&#x3E;Dislike&#x3C;/option&#x3E;
                  &#x3C;/select&#x3E;
                  &#x3C;/form&#x3E;
                  ...
                </highlight-code>
              </div>
            </div>

            <p>
              Berikut ini adalah contoh kode di Controller Seme Framework.
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
                  class Produk extends Sene_Controller{
                    public function __construct(){
                      parent::__construct();
                    }
                    ...
                    public function review(){
                      $id = $this-&#x3E;input-&#x3E;request(&#x27;id&#x27;); // nilai yang dikirim melalui parameter URL / GET
                      $review = $this-&#x3E;input-&#x3E;get(&#x27;nama&#x27;); // nilai yang dikirim dari atribut name=&#x22;review&#x22; melalui POST
                      $rating = $this-&#x3E;input-&#x3E;get(&#x27;gender&#x27;); // nilai yang dikirim dari atribut name=&#x22;gender&#x22; melalui POST
                      ...
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h2>Menangani Upload File (<code>$_FILES</code>)</h2>
            <p>Untuk menangani <code>$_FILES</code> Anda harus membuatnya <b>secara manual</b> sesuai dengan kebutuhan aplikasi Anda.</p>
            <h3>Ngoding untuk penanganan upload FILE</h3>
            <p>
              Pertama-tama kita harus membuat metode <code>__uploadImage()</code> secara <code>private</code>, supaya tidak bisa diakses langsung melalui rute default Seme Framework.
              Berikut ini adalah contoh potongan kode untuk pembuatan metode <code>__uploadImage()</code> di Controller.
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
                  class Produk extends Sene_Controller{
                    public function __construct(){
                      parent::__construct();
                    }
                    ...
                    /**
                    * Method for handling file upload
                    * Only allowed .png, .jpeg, .jpg, .gif extension
                    * Max file size 2000000 bytes
                    * Unsupported WebP encoding image
                    * @param       string $keyname           the $_FILES key that send from html
                    * @param       string $id                the id of user, product, or uniqid
                    * @param       string $ke                sequencer
                    * @constructor
                    * @return      object                    result with object, contain status, message, image, and thumb.
                    */
                    private function __uploadImage($keyname, $id, $ke=&#x22;&#x22;)
                    {
                      $sc = new stdClass();
                      $sc-&#x3E;status = 500;
                      $sc-&#x3E;message = &#x27;Error&#x27;;
                      $sc-&#x3E;image = &#x27;&#x27;;
                      $sc-&#x3E;thumb = &#x27;&#x27;;
                      if (isset($_FILES[$keyname][&#x27;name&#x27;])) {
                        if ($_FILES[$keyname][&#x27;size&#x27;]&#x3E;2000000) {
                          $sc-&#x3E;status = 301;
                          $sc-&#x3E;message = &#x27;Ukuran gambar terlalu besar. Silakan pilih dengan ukuran kurang dari 2 MB&#x27;;
                          $this-&#x3E;seme_log-&#x3E;write(&#x27;User::__uploadImagex -- forceClose &#x27;.$sc-&#x3E;status.&#x27; &#x27;.$sc-&#x3E;message);
                          return $sc;
                        }
                        $filenames = pathinfo($_FILES[$keyname][&#x27;name&#x27;]);
                        if (isset($filenames[&#x27;extension&#x27;])) {
                          $fileext = strtolower($filenames[&#x27;extension&#x27;]);
                        } else {
                          $fileext = &#x27;jpg&#x27;;
                        }

                        if (!in_array($fileext, array(&#x22;jpg&#x22;,&#x22;png&#x22;,&#x22;jpeg&#x22;,&#x22;gif&#x22;))) {
                          $sc-&#x3E;status = 303;
                          $sc-&#x3E;message = &#x27;Invalid file extension, please try other image file.&#x27;;
                          $this-&#x3E;seme_log-&#x3E;write(&#x27;User::__uploadImagex -- forceClose &#x27;.$sc-&#x3E;status.&#x27; &#x27;.$sc-&#x3E;message);
                          return $sc;
                        }
                        $filename = &#x22;$id-$ke&#x22;;
                        $filethumb = $filename.&#x27;-thumb&#x27;;

                        $targetdir = 'media/upload/';
                        $targetdircheck = realpath(SEMEROOT.$targetdir);
                        if (empty($targetdircheck)) {
                          if (PHP_OS == &#x22;WINNT&#x22;) {
                            if (!is_dir(SEMEROOT.$targetdir)) {
                              mkdir(SEMEROOT.$targetdir);
                            }
                          } else {
                            if (!is_dir(SEMEROOT.$targetdir)) {
                              mkdir(SEMEROOT.$targetdir, 0775);
                            }
                          }
                        }

                        $tahun = date(&#x22;Y&#x22;);
                        $targetdir = $targetdir.DIRECTORY_SEPARATOR.$tahun;
                        $targetdircheck = realpath(SEMEROOT.$targetdir);
                        if (empty($targetdircheck)) {
                          if (PHP_OS == &#x22;WINNT&#x22;) {
                            if (!is_dir(SEMEROOT.$targetdir)) {
                              mkdir(SEMEROOT.$targetdir);
                            }
                          } else {
                            if (!is_dir(SEMEROOT.$targetdir)) {
                              mkdir(SEMEROOT.$targetdir, 0775);
                            }
                          }
                        }

                        $bulan = date(&#x22;m&#x22;);
                        $targetdir = $targetdir.DIRECTORY_SEPARATOR.$bulan;
                        $targetdircheck = realpath(SEMEROOT.$targetdir);
                        if (empty($targetdircheck)) {
                          if (PHP_OS == &#x22;WINNT&#x22;) {
                            if (!is_dir(SEMEROOT.$targetdir)) {
                              mkdir(SEMEROOT.$targetdir);
                            }
                          } else {
                            if (!is_dir(SEMEROOT.$targetdir)) {
                              mkdir(SEMEROOT.$targetdir, 0775);
                            }
                          }
                        }

                        $sc-&#x3E;status = 998;
                        $sc-&#x3E;message = &#x27;Invalid file extension uploaded&#x27;;
                        if (in_array($fileext, array(&#x22;gif&#x22;, &#x22;jpg&#x22;, &#x22;png&#x22;,&#x22;jpeg&#x22;))) {
                          $filecheck = SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filename.&#x27;.&#x27;.$fileext;
                          if (file_exists($filecheck)) {
                            unlink($filecheck);
                            $rand = rand(0, 999);
                            $filename = &#x22;$id-$ke-&#x22;.$rand;
                            $filecheck = SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filename.&#x27;.&#x27;.$fileext;
                            if (file_exists($filecheck)) {
                              unlink($filecheck);
                              $rand = rand(1000, 99999);
                              $filename = &#x22;$id-$ke-&#x22;.$rand;
                            }
                          }
                          $filethumb = $filename.&#x22;-thumb.&#x22;.$fileext;
                          $filename = $filename.&#x22;.&#x22;.$fileext;

                          move_uploaded_file($_FILES[$keyname][&#x27;tmp_name&#x27;], SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filename);
                          if (is_file(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filename) &#x26;&#x26; file_exists(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filename)) {
                            if (@mime_content_type(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filename) == &#x27;image/webp&#x27;) {
                              $sc-&#x3E;status = 302;
                              $sc-&#x3E;message = &#x27;WebP image format currently unsupported&#x27;;
                              $this-&#x3E;seme_log-&#x3E;write(&#x27;User::__uploadImagex -- forceClose &#x27;.$sc-&#x3E;status.&#x27; &#x27;.$sc-&#x3E;message);
                              return $sc;
                            }

                            $this-&#x3E;lib(&#x22;wideimage/WideImage&#x22;, &#x27;wideimage&#x27;, &#x22;inc&#x22;);
                            if (file_exists(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filethumb) &#x26;&#x26; is_file(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filethumb)) {
                              unlink(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filethumb);
                            }
                            if (file_exists(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filename) &#x26;&#x26; is_file(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filename)) {
                              WideImage::load(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filename)-&#x3E;reSize(370)-&#x3E;saveToFile(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filethumb);
                              $sc-&#x3E;status = 200;
                              $sc-&#x3E;message = &#x27;Successful&#x27;;
                              $sc-&#x3E;thumb = str_replace(&#x22;//&#x22;, &#x22;/&#x22;, $targetdir.&#x27;/&#x27;.$filethumb);
                              $sc-&#x3E;image = str_replace(&#x22;&#x27;\&#x27;&#x22;, &#x22;/&#x22;, $targetdir.&#x27;/&#x27;.$filename);
                              $sc-&#x3E;image = str_replace(&#x22;//&#x22;, &#x22;/&#x22;, $targetdir.&#x27;/&#x27;.$filename);
                            } else {
                              $sc-&#x3E;status = 997;
                              $sc-&#x3E;message = &#x27;Failed: file image not exists&#x27;;
                              $this-&#x3E;seme_log-&#x3E;write(&#x27;User::__uploadImagex -- forceClose &#x27;.$sc-&#x3E;status.&#x27; &#x27;.$sc-&#x3E;message);
                            }
                          } else {
                            $sc-&#x3E;status = 999;
                            $sc-&#x3E;message = &#x27;Upload file failed&#x27;;
                            $this-&#x3E;seme_log-&#x3E;write(&#x27;User::__uploadImagex -- forceClose &#x27;.$sc-&#x3E;status.&#x27; &#x27;.$sc-&#x3E;message);
                          }
                        } else {
                          $sc-&#x3E;status = 998;
                          $sc-&#x3E;message = &#x27;Invalid file extension uploaded&#x27;;
                          $this-&#x3E;seme_log-&#x3E;write(&#x27;User::__uploadImagex -- forceClose &#x27;.$sc-&#x3E;status.&#x27; &#x27;.$sc-&#x3E;message);
                        }
                      } else {
                        $sc-&#x3E;status = 988;
                        $sc-&#x3E;message = &#x27;Keyname file does not exists&#x27;;
                        $this-&#x3E;seme_log-&#x3E;write(&#x27;User::__uploadImagex -- forceClose &#x27;.$sc-&#x3E;status.&#x27; &#x27;.$sc-&#x3E;message);
                      }
                      return $sc;
                    }
                    ...
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Penggunaan Kode Pustaka (<em>Library</em>)</h3>
            <p>Berikut ini adalah daftar pustaka yang digunakan oleh potongan kode diatas:</p>
            <ul>
              <li><NuxtLink to="/id/library/seme_log/">Library/Seme_Log</NuxtLink></li>
              <li><NuxtLink to="/id/library/wideimage/">Library/WideImage</NuxtLink></li>
              <li>Direktori <code>media/upload/</code> dengan hak akses <code>write</code> sehingga web server dapat memindahkan file yang diupload kedalam susunan direktori Seme Framework.</li>
            </ul>

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
                  public function __construct(){
                    parent:: __construct();
                    $this-&#x3E;lib(&#x22;seme_log&#x22;);
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Cara Penggunaan Kode Penanganan Upload File</h3>
            <p>Berikut ini adalah contoh penggunaan kode didalam sebuah metode yang ada di kelas Controller.</p>

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
                  // mengeksekusi metode __uploadImage()
                  $sc = $this-&#x3E;__uploadImage(&#x22;foto&#x22;,$id,&#x22;1&#x22;);
                  // variabel $sc berisikan objek
                  // jika tidak berisikan objek, maka proses penanganan upload file gagal

                  // validasi bahwa $sc ini berisi objek, untuk menghindari ketika validasi error
                  if(!is_object($sc)) $sc = new stdClass();

                  // validasi bahwa $sc berisikan objek $status, untuk menghindari ketika validasi error
                  if(!isset($sc-&#x3E;status)) $sc-&#x3E;status=0;

                  // validasi bahwa $sc berisikan objek $message, untuk menghindari ketika validasi error
                  if(!isset($sc-&#x3E;message)) $sc-&#x3E;message=&#x27;no response from upload processor&#x27;;

                  //validasi terakhir error tidaknya
                  if($sc-&#x3E;status == 200){
                    //berhasil diupload
                    ....
                  }else{
                    //gagal diupload
                    ....
                  }
                  ...
                </highlight-code>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/controller/getkey/" class="btn">
            <i class="fa fa-chevron-left"></i>
            metode getKey
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/controller/lib/" class="btn">
            Metode lib
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
  data() {
    return {
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'Properti Input',
      description: 'Metode Properti Input dari kelas SENE_Controller dalam SEME Framework versi 4.0.0 digunakan untuk memanggil variabel yang tersimpan didalam $_SESSION.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/',
          text: 'ID',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/controller/',
          text: 'Controller',
        }
      ]
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
        "datePublished": "2020-06-11T10:32:00+07:00",
        "dateModified": "2021-06-25T11:44:40+07:00",
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
