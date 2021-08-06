<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial/">Tutorial</NuxtLink></li>
          <li class="unavailable">Perkenalan</li>
        </ul>
      </nav>
      <div>
        <div class="column">
          <div class="content">
            <h1 class="">Perkenalan penggunaan Seme Framework 4</h1>
            <p>
              Sebelum memulai tutorial, Anda harus melakukan apa yang dijelaskan pada <NuxtLink to="/id/requirements/" target="_blank">halaman persyaratan <i class="fa fa-window-restore"></i></NuxtLink> terlebih dahulu.
              Tujuan dari tutorial ini adalah, bagaimana berinteraksi dengan View dan Controller. Interaksi model akan dibahas pada tutorial berikutnya.
            </p>

            <amp-img layout="responsive" width="874" height="804px" :src="helloWorld" alt="Seme Framework hello world controller"></amp-img>
            <hr>
            <p><b>Baiklah kita mulai!</b></p>
            <hr>

            <h2 id="part1">Hello World!</h2>
            <p>
              Hello World sering digunakan untuk menggambarkan sintaks dasar dari suatu bahasa pemrograman.
              Tetapi pada Seme Framework, Hello World Hello World digunakan untuk memeriksa tujuan dasar MVC.
            </p>

            <h3>Penyesuaian konfigurasi</h3>
            <p>
              Asumsikan Seme Framework telah di instal sesuai dengan halaman <NuxtLink to="/id/downloads/" target="_blank">Download &amp; Install <i class="fa fa-window-restore"></i></NuxtLink>.
              Setelah itu, jalankan XAMPP dan buka <code>http://localhost/seme_framework</code> melalui google chrome atau firefox.
            </p>

            <h3>Controller</h3>
            <p>
              Seme framework memiliki default controller yang bernama <code>home.php</code> dengan nama kelas yang sama yaitu <code>Home</code>.
              Pertama, buka file yang terletak di <code>app/controller/home.php</code>.
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
                  class Home extends SENE_Controller
                  {
                    public function __construct()
                    {
                      parent::__construct();
                    }
                    public function index()
                    {
                      echo 'Hello World!';
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <p>Kemudian buka alamat <code>http://localhost/seme_framework</code>, itu seharusnya sudah memunculkan Hello World! langsung dari kelas home.php controller.</p>
            <amp-img layout="responsive" width="774px" height="262px" alt="Hello World" :src="hellowWorld2" ></amp-img>

            <p>
              Jika tampilannya sudah sesuai seperti yang ada digambar, berarti tutorial hello world pertama telah selesai.
              Sekarang kita akan melanjutkan tutorial Hello World bagian kedua.
            </p>
            <hr>

            <h2 id="part2">Hello World bagian 2</h2>
            <p>
              Pada hello world bagian kedua, kita akan mencoba untuk mengimplementasikan Hello World melalui sebuah tema tampilan.
              Kita akan mulai membuat view, kemudian tema, lalu menyesuaikan controller supaya dapat memanggil tema yang sudah dibuat.
            </p>

            <h3>View</h3>
            <p>Pada tutorial ini kita akan mempelajari cara merender tampilan dengan tema dan meneruskan data dari controller ke tampilan yang dilewatkan oleh controller.</p>

            <div class="message is-success">
              <div class="message-body">
                <p>Tutorial ini menggunakan <a href="https://materializecss.com/" target="_blank">materializeCSS <i class="fa fa-external-link"></i></a> sebagai library CSS-nya.</p>
              </div>
            </div>
            <h4>Membuat tema: <u>front</u>.</h4>
            <p>Sebelum memulai, kita harus memahami struktur direktori tema.</p>

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
                  └── view/
                  &#160;└── front/
                  &#160;&#160;├── home
                  &#160;&#160;│ ├── home.php
                  &#160;&#160;│ └── home_bottom.php
                  &#160;&#160;├── theme.json
                  &#160;&#160;├── script.json
                  &#160;&#160;└── page/
                  &#160;&#160;&#160;├── col-1.php
                  &#160;&#160;&#160;└── html/
                  &#160;&#160;&#160;&#160;&#160;└── head.php
                </highlight-code>
              </div>
            </div>

            <p>Periksa direktori <code>app/view/front/</code> apabila belum ada, silakan buat direktori tersebut.</p>
            <p>Periksa direktori <code>app/view/front/page/</code> apabila belum ada, silakan buat direktori tersebut.</p>
            <p>Periksa direktori <code>app/view/front/page/html/</code> apabila belum ada, silakan buat direktori tersebut.</p>

            <h5>File theme.json</h5>
            <p>
              File <code>theme.json</code> digunakan untuk mendefinisikan css apa saja yang akan digunakan oleh tema.
              Buka file yang terletak di <code>app/view/front/theme.json</code>.
              apabila belum ada, silakan buat file tersebut dan <i>paste</i>-kan isinya dari kode dibawah ini.
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
                    &#x22;link&#x22;:
                    [
                    {
                      &#x22;rel&#x22;: &#x22;stylesheet&#x22;,
                      &#x22;href&#x22;: &#x22;https://fonts.googleapis.com/icon?family=Material+Icons&#x22;
                    },
                    {
                      &#x22;rel&#x22;: &#x22;stylesheet&#x22;,
                      &#x22;href&#x22;: &#x22;https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css&#x22;
                    }
                    ]
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Pelajari selengkapnya tentang <NuxtLink to="/id/view/theme_json/" target="_blank">theme.json <i class="fa fa-window-restore"></i></NuxtLink>.
            </p>

            <h5>File script.json</h5>
            <p>
              File <code>script.json</code> digunakan untuk mendefinisikan file javascript apa saja yang akan digunakan oleh tema.
              Seme Framework akan menentukan skrip mana yang akan dimuat. Buka file yang terletak di <code>app/view/front/script.json</code>.
              apabila belum ada, silakan buat file tersebut dan <i>paste</i>-kan isinya dari kode dibawah ini.
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
                    &#x22;script&#x22;:
                    [
                    {
                      &#x22;src&#x22;: &#x22;https://code.jquery.com/jquery-3.5.1.min.js&#x22;
                    },
                    {
                      &#x22;src&#x22;: &#x22;https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js&#x22;
                    }
                    ]
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Pelajari selengkapnya tentang <NuxtLink to="/id/view/script_json/" target="_blank">script.json <i class="fa fa-window-restore"></i></NuxtLink>.
            </p>

            <h5>Membuat layout HTML utama</h5>
            <p>
              Seme Framework mendukung tata letak utama HTML untuk rendering html, javascript, dan konten.
              Buka file yang terletak di <code>app/view/front/page/col-1.php</code>.
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
                <highlight-code lang="html">
                  &#x3C;!DOCTYPE html&#x3E;
                  &#x3C;html&#x3E;
                    &#x3C;?php $this-&#x3E;getThemeElement(&#x27;page/html/head&#x27;, $__forward) ?&#x3E;
                    &#x3C;body&#x3E;
                      &#x3C;?php $this-&#x3E;getThemeContent() ?&#x3E;

                      &#x3C;!-- jQuery, Bootstrap.js, jQuery plugins and Custom JS code --&#x3E;
                      &#x3C;?php $this-&#x3E;getJsFooter(); ?&#x3E;

                      &#x3C;!-- Load and execute javascript code used only in this page --&#x3E;
                      &#x3C;script&#x3E;
                        $(document).ready(function(e){
                          &#x3C;?php $this-&#x3E;getJsReady(); ?&#x3E;
                        });
                        &#x3C;?php $this-&#x3E;getJsContent(); ?&#x3E;
                      &#x3C;/script&#x3E;
                    &#x3C;/body&#x3E;
                  &#x3C;/html&#x3E;
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p>Hanya ada satu variabel yang dapat melewati view dari controller.</p>
                <p>Jadi, kita harus meletakkan variabel apa pun yang akan ditampilkan dalam array tunggal.</p>
                <p>Dalam contoh ini Seme Framework menggunakan variabel <code>$data</code> dengan tipe data array didalam controller <code>home.php</code>.</p>
              </div>
            </div>

            <h5>Pemisahan bagian HEAD dari HTML</h5>
            <p>Dengan menggunakan Seme Framework memungkinkan untuk memisahkan komponen html untuk memaksimalkan penggunaan kembali komponen HTML tersebut.</p>
            <p>Untuk melakukannya, buka file yang terletak di <code>app/view/front/page/html/head.php</code>.</p>
            <p>apabila belum ada, silakan buat file tersebut dan <i>paste</i>-kan isinya dari kode dibawah ini.</p>

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
                    &#x3C;link rel=&#x22;shortcut icon&#x22; href=&#x22;&#x3C;?=$this-&#x3E;getIcon()?&#x3E;&#x22;&#x3E;
                    &#x3C;!-- END Icons --&#x3E;

                    &#x3C;meta name=&#x22;msapplication-TileColor&#x22; content=&#x22;#353769&#x22;&#x3E;
                    &#x3C;meta name=&#x22;theme-color&#x22; content=&#x22;#353769&#x22;&#x3E;
                    &#x3C;?php $this-&#x3E;getAdditionalBefore()?&#x3E;
                    &#x3C;?php $this-&#x3E;getAdditional()?&#x3E;
                    &#x3C;?php $this-&#x3E;getAdditionalAfter()?&#x3E;
                  &#x3C;/head&#x3E;
                </highlight-code>
              </div>
            </div>
            <div class="message is-info">
              <div class="message-body">
                <p>Pengaturan tema di Seme Framework membutuhkan file dibawah ini supaya dapat berjalan dengan baik:</p>
                <ol>
                  <li><code>theme.json</code>,</li>
                  <li><code>script.json</code>,</li>
                  <li>dan sebuah file untuk layout HTML. Contoh: <code>page/col-1.php</code> </li>
                </ol>
                <p>Jadi, kita harus meletakkan variabel apa pun yang akan ditampilkan dalam array tunggal.</p>
              </div>
            </div>
            <div class="message is-info">
              <div class="message-body">
                <p><code>$data[&#x27;hello&#x27;]</code> dari controller, akan diekstraksi secara otomatis menjadi variabel <code>$hello</code> ketika berada didalam view.</p>
                <p>Begitupun dengan nilai atau kunci lainnya, akan diekstraksi secara otomatis juga.</p>
              </div>
            </div>

            <h5>Membuat isi tema</h5>
            <p>Seme Framework mendukung konten tema yang terpisah. Konten ini akan dirender pada tata letak utama bagian dalam.</p>
            <p>Untuk melakukanya, buka file yang terletak di <code>app/view/front/home/home.php</code>.</p>
            <p>Apabila file tersebut belum ada, silakan buat file-nya dulu, kemudian <i>paste</i>-kan kode dibawah ini.</p>

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
                      &#x3C;div class=&#x22;col m12 s12&#x22;&#x3E;
                        &#x3C;div class=&#x22;card rounded preload-any&#x22;&#x3E;
                          &#x3C;div class=&#x22;card-content &#x22;&#x3E;
                            &#x3C;span class=&#x22;card-title&#x22;&#x3E;&#x3C;?=$hello?&#x3E; passed to view&#x3C;/span&#x3E;
                              &#x3C;p&#x3E;This is from view only&#x3C;/p&#x3E;
                              &#x3C;br&#x3E;
                              &#x3C;div class=&#x22;btn-group&#x22;&#x3E;
                              &#x26;nbsp;
                            &#x3C;/div&#x3E;
                          &#x3C;/div&#x3E;
                        &#x3C;/div&#x3E;
                      &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                  &#x3C;/div&#x3E;
                </highlight-code>
              </div>
            </div>

            <h5>Implementasi di Controller</h5>
            <p>Setelah membuat tema, beserta isinya sekarang saatnya untuk integrasikan semuanya, mulai dari Controller sampai dengan view.</p>
            <p>Untuk melakukannya, buka file <code>app/controller/home.php</code> kemudian <b>ganti</b> (<em>edit</em>) isinya dengan menggunakan kode dibawah ini:</p>

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
                      $this-&#x3E;setTheme(&#x27;front&#x27;);
                    }
                    public function index()
                    {
                      $data = array();
                      $this-&#x3E;setTitle(&#x27;Seme Framework Introduction!&#x27;);
                      $this-&#x3E;setDescription(&#x22;Congratulation, you have done well.&#x22;);
                      $this-&#x3E;setKeyword(&#x27;Seme Framework&#x27;);
                      $this-&#x3E;setAuthor(&#x27;Seme Framework&#x27;);

                      $data[&#x27;hello&#x27;] = &#x22;this is from controller&#x22;;

                      $this-&#x3E;putThemeContent(&#x22;home/home&#x22;,$data); //pass data to view

                      $this-&#x3E;loadLayout(&#x22;col-1&#x22;,$data);
                      $this-&#x3E;render();
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <h5>Melihat hasilnya</h5>
            <p>Untuk melihat hasil dari pembuatan tema ini, cukup buka alamat <code>http://localhost/seme_framework</code> melalui google chrome atau firefox.</p>
            <p>Kemudian, kita lihat hasilnya apakah sama seperti <i>screenshot</i> dibawah ini.</p>
            <amp-img layout="responsive" width="2268px" height="618px" :src="tutor6a"></amp-img>

            <hr>

            <h2>Bonus Tambahan</h2>
            <p>
              Dengan layout utama yang telah kita buat sebelumnya, kita dapat memasukkan dan merender javascript menggunakan Seme Framework.
              Untuk mencapai ini, pertama buat file <code>app/view/front/home/home_bottom.php</code>.
              Dan kemudian tambahkan kode ini di atasnya.
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
                  alert(&#x27;This is Hello World from app/view/home/home_bottom.php&#x27;);
                </highlight-code>
              </div>
            </div>

            <p>Setelah itu, kita harus memuat tombol beranda dari <code>app/controller/home.php</code>.</p>

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
                      $this-&#x3E;setTheme(&#x27;front&#x27;);
                    }
                    public function index()
                    {
                      $data = array();
                      $this-&#x3E;setTitle(&#x27;Seme Framework Introduction!&#x27;);
                      $this-&#x3E;setDescription(&#x22;Congratulation, you have done well.&#x22;);
                      $this-&#x3E;setKeyword(&#x27;Seme Framework&#x27;);
                      $this-&#x3E;setAuthor(&#x27;Seme Framework&#x27;);

                      $data[&#x27;hello&#x27;] = &#x22;this is from controller&#x22;;

                      $this-&#x3E;putThemeContent(&#x22;home/home&#x22;,$data); //pass data to view
                      $this-&#x3E;putJsContent(&#x22;home/home_bottom&#x22;,$data); //pass data to view

                      $this-&#x3E;loadLayout(&#x22;col-1&#x22;,$data);
                      $this-&#x3E;render();
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Untuk mengujinya, buka <code>http://localhost/seme_framework</code> menggunakan browser.
              Apabila sudah benar, itu akan menampilkan sebuah <em>alert</em>, kemudian menampilkan H1 dengan konten Hello World dari tampilan dan menggunakan tema.
            </p>
            <amp-img layout="responsive" width="2178px" height="598px" :src="tutor7"></amp-img>

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
          <nuxt-link to="/id/tutorial/notfound-page/" class="btn">
            Tutorial: Notfound
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
      title: 'Penggunaan Dasar',
      description: 'Pelajari tutorial penggunaan dasar dari Seme Framework 4.',
      helloWorld: require('~/assets/img/tutorial/introduction/hello-world.png'),
      hellowWorld2: require('~/assets/img/hello-world.png'),
      tutor6a: require('~/assets/img/tutorial/introduction/6a.png'),
      tutor7: require('~/assets/img/tutorial/introduction/7.png'),
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
        "dateCreated": "2020-06-11T10:12:00+07:00",
        "datePublished": "2020-06-11T10:12:00+07:00",
        "dateModified": "2021-07-25T11:11:11+07:00",
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
