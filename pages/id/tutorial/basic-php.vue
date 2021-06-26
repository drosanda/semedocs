<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial/">Tutorial</NuxtLink></li>
          <li class="unavailable">Belajar PHP</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Belajar PHP</h1>
            <p>
              Seme Framework dibuat dengan menggunakan bahasa pemrograman PHP. Untuk bacaan lengkap tentang bahasa pemrograman php ada di situs resminya yaitu <a href="https://php.net/">PHP.NET <i class="fa fa-external-link"></i></a> yang tersedia dalam bahasa Inggris.
              Di sini sekarang, anda akan belajar mengenai penggunaan dasar PHP yang digunakan untuk penyusunan kode dengan Seme Framework.
            </p>

            <h2>Penulisan dasar kode PHP</h2>
            <p>
              Bahasa pemrograman PHP ini dikembangkan dari bahasa C, yang artinya hampir semua komponen bahasa C ada di dalam PHP.
              Namun, untuk sekarang PHP sudah memiliki banyak kemajuan sehingga sudah sedikit berbeda dengan pendahulunya.
            </p>
            <p>
              Kode PHP ditulis dengan diakhiri tanda titik koma (<code>;</code>) untuk setiap perintahnya.
              Kebanyakan dari PHP ditulis dengan huruf kecil (<b>Lowercase</b>) terkecuali untuk penamaan tertentu.
            </p>
            <h3>Kaidah tangan kanan</h3>
            <p>
              PHP menggunakan konsep atau kaidah tangan kanan.
              Untuk mengisikan nilai mulai dari bagian kanan ke Kiri. Contoh <code>$a = $b</code>, nilai <code>$a</code> akan berisi <code>$b</code>, bukan sebaliknya.
              Konsep ini berlaku untuk pengisian nilai kedalam <b>variabel</b> atau pengisian nilai kedalam <b>properti</b> ketika dalam ruang lingkup kelas.
            </p>
            <p>
              Berikut ini adalah contoh kode untuk pembuktian konsep atau kaidah tangan kanan.
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
                  //contoh variabel
                  $a = 6;
                  //$a akan berisi 6
                  $b = $a;
                  //$b akan berisi 6 juga dari a

                  //contoh properti kelas
                  $this->a = 7;
                  // Properti $a akan berisi 7
                  $this->b = $a;
                  // Properti $b akan nilai yang sama dengan nilai dari variabel $a
                </highlight-code>
              </div>
            </div>

            <h3>Fungsi bawaan atau (<em>Built-in functions</em>)</h3>
            <p>
              Seperti bahasa pemrograman lainnya, PHP memiliki fungsi bawaan yang cukup lengkap.
              Fungsi bawaan ini ada untuk mempercepat proses penerapan logika dalam penyusunan kode.
              Fungsi ini biasanya ditandai dengan akhiran kurung, contoh fungsi <code>strtoupper()</code> adalah fungsi bawaan untuk merubah string menjadi huruf besar semua.
            </p>
            <h3>Variabel bawaan atau (<em>Built-in variables</em>)</h3>
            <p>
              Seperti bahasa pemrograman lainnya, PHP memiliki variabel bawaan yang cukup lengkap.
              Variabel bawaan ini biasanya akan digunakan oleh pembuat kode untuk mendapatkan nilai yang telah ada disistem.
              Dan bisa juga, untuk merubah nilai yang sudah ada atau bahjkan menambahkan nilai yang baru.
            </p>
            <h3>Ruang Lingkup Variabel dan Fungsi</h3>
            <p>
              PHP memiliki ruang lingkup baik untuk fungsi maupun variabel.
              Ruang lingkup ini berfungsi untuk melonggarkan supaya dapat diakses dimana saja dan atau membatasi supaya tidak bentrok dengan variabel lain maupun fungsi lain.
            </p>
            <h4>Ruang lingkup Global</h4>
            <p>
              Ruang lingkup <code>global</code> biasanya akan mengizinkan variabel atau fungsi diakses dimanapun, tidak terbatas terhadap kelas ataupun isi dari badan fungsi yang kita buat.
            </p>
            <p>
              Contoh dari fungsi dengan ruang lingkup global ini adalah fungsi <code>strtoupper()</code> yang ada dicontoh sebelumnya.
            </p>
            <p>
              Sementara, untuk contoh variabel global adalah <code>$_POST</code> yang berisikan nilai dari hasil pengiriman data melalui <code>HTML FORM</code>.
            </p>
            <h4>Ruang lingkup Class</h4>
            <p>
              Dalam PHP juga, ada ruang lingkup <code>class</code> yang biasa kita sebut dengan hak akses kelas. Ada 3 hak akses yang digunakan dalam kelas yaitu <code>Public</code>, <code>Private</code>, dan <code>Private</code>.
            </p>
            <h4>Ruang lingkup Lokal</h4>
            <p>
              Ketika dalam ruang lingkup lokal seperti dalam badan fungsi atau metode kelas. Baik variabel ataupun fungsi tidak akan bisa diakses dari selain badan kode tersebut.
            </p>
            <p>
              Untuk lebih memperjelas perbedaan ruang lingkup lokal, bisa dilihat dalam potongan kode ini.
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
                  $pariabel_gelobal = 'Dunia';
                  function percobaan(){
                    $pariabel_lokal = 'Halo '.$pariabel_gelobal;
                    //$pariabel_lokal akan berisi 'Halo Dunia'
                    //karena $pariabel_gelobal akan tersedia secara global
                    //jadi bisa dipanggil kedalam fungsi
                  }
                  // sementara apabila kita mencoba untuk
                  // memanggil nilai $pariabel_lokal
                  // dengan cara
                  echo $pariabel_lokal;
                  // akan menimbulkan error
                  // karena $pariabel_lokal hanya ada dalam badan fungsi
                </highlight-code>
              </div>
            </div>

            <h2>Tipe Data</h2>
            <p>
              Tipe data atau jenis penyimpanan data dalam PHP tidak dituliskan atau dideklarasikan secara langsung.
              Meskipun begitu, PHP tetap mengenal beberapa jenis tipe data seperti integer, float, string, boolean, array, object, mixed, dan lain-lain.
            </p>

            <h3>INT atau INTEGER</h3>
            <p>
              <code>int</code> atau <code>integer</code>, untuk menyimpan data angka genap tanpa pecahan dari mulai negatif sampai positif. seperti 0, -1, 2, 1000, -781 dan seterusnya.
              Integer dalam PHP cukup ditulis dengan <code>int</code> saja dalam huruf kecil (lowercase).
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
                  $ini_integer = 1;
                  $ini_integer_juga = -199;
                  $ini_integer_lagi = 27;
                </highlight-code>
              </div>
            </div>

            <h3>Float</h3>
            <p>
              <code>float</code> tipe data untuk menyimpan angka genap dan pecahan dari mulai negatif sampai positif. Untuk penulisan tanda desimalnya menggunakan <b>titik (.)</b> bukan <u>koma (,)</u>. Contoh <code>0.99</code>, <code>-2.75</code>, <code>0.00</code>, <code>1.10009</code> dan lainnya.
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
                  $ini_float = -1;
                  $ini_float_juga = -1.99;
                  $ini_float_lagi = 27.0091;
                </highlight-code>
              </div>
            </div>

            <h3>String</h3>
            <p>
              <code>string</code> tipe data untuk menyimpan huruf dan angka. Biasanya untuk penulisannya diapit oleh tanda kutip satu (&#x27;) maupun tanda kutip dua (&#x22;). Contoh <code>&#x22;Ruli&#x22;</code>, <code>&#x27;Sandi&#x27;</code>, <code>&#x27;Hari Jum\&#x27;at&#x27;</code>, <code>&#x22;mamah berkata, \&#x22;cepat Pulang\&#x22;&#x22;</code> dan lain-lain.
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
                  $ini_string = &#x27;Halo aku Sandi&#x27;;
                  $ini_string_juga = &#x22;Hi, gw Ruli!&#x22;;
                  $ini_string_lagi = &#x27;Sekarang hari Jum\&#x27;at&#x27;;
                  $awas_ini_string = &#x22;Ibu berteriak,\&#x22;Maliiiinggg....!!!\&#x22;&#x22;;
                </highlight-code>
              </div>
            </div>

            <h3>Boolean</h3>
            <p>
              <code>bool</code> atau <code>boolean</code> tipe data ini hanya memiliki dua nilai, yaitu 1 dan 0. Dalam penyebutan lainnya juga bisa diartikan dengan <code>TRUE</code> untuk nilai 1 atau <code>FALSE</code> untuk nilai 0.
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
                  $is_lunas = 1;
                  $is_lulus = 0;
                  $sudah_dibayar = TRUE;
                  $is_active = FALSE;
                </highlight-code>
              </div>
            </div>

            <h3>Array</h3>
            <p>
              <code>array</code> merupakan tipe data yang dapat menampung banyak isi. Bisa terdiri dari banyak integer yang disebut dengan <b>Array of Integer</b>, kemudian untuk array yang berisi array disebut dengan <b>Array of Array</b>, sementara array yang berisi object disebut dengan <b>Array of Object</b> dan istilah array lainnya.
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
                  //contoh array of string
                  $anggota = array();
                  //array akan diisi
                  $anggota[] = &#x27;Sandi&#x27;;
                  //sekarang $anggota berisi string &#x27;Sandi&#x27;
                  $anggota[] = &#x27;Ruli&#x27;;
                  //sekarang $anggota berisi string &#x27;Sandi&#x27; dan &#x27;Ruli&#x27;
                  $anggota[] = &#x27;Iqbal&#x27;;
                  //sekarang $anggota berisi string &#x27;Sandi&#x27;, &#x27;Ruli&#x27; dan &#x27;Iqbal&#x27;
                  //isi data sebelumnya tidak tertimpa
                </highlight-code>
              </div>
            </div>

            <h4>Cara ngoding array</h4>
            <p>
              Untuk membuat <code>array</code>, pertama-tama <code>variabel</code> harus diisi terlebih dahulu dengan fungsi <code>array()</code>.
              Kemudian untuk menambahkan <code>array</code> kedalam <code>variabel</code> dengan notasi kurung kotak setelah penulisan nama variabel. Untuk lebih jelas lihat contoh potongan kode sebelumnya.
            </p>

            <h4><b>RAHASIA</b> <code>array</code> bisa menyimpan banyak nilai</h4>
            <p>
              Supaya dapat menyimpan banyak nilai, tentu saja ada <b>RAHASIA</b>-nya.
              Pada bahasa pemrograman PHP, <code>array</code> terdiri dari 2 bagian yaitu <code>kunci</code> dan <code>nilai</code>.
            </p>
            <p>
              Kunci <code>array</code> dalam PHP dimulai dari <code>0</code> dan akan terus bertambah seiring <b>pertambahan nilai</b> pada array-nya seperti <code>0, 1, 2, 3, ..., 990</code> dan seterusnya.
              Meskipun demikian, PHP tidak membatasi kunci <code>array</code> ini supaya bisa diisi selain angka, kunci array ini juga bisa diisi dengan huruf dan underscore.
            </p>
            <p>
              Untuk lebih lengkapnya bisa dilihat dari contoh potongan kode dibawah ini.
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
                  //contoh pengisian kunci dalam array
                  $anggota = array();
                  $anggota['pertama'] = &#x27;Sandi&#x27;;
                  $anggota['kedua'] = &#x27;Ruli&#x27;;
                  $anggota['ketiga'] = &#x27;Iqbal&#x27;;
                </highlight-code>
              </div>
            </div>

            <h4>Cara pemanggilan array</h4>
            <p>
              Untuk memanggil <code>array</code>, pastikan <code>array</code> tersebut sudah terisi.
              Apabila sudah terisi, maka akan ada kunci nilainya.
              Kunci nilai inilah yang kita butuhkan untuk memanggil array.
              Kita akan mencoba menampilkan nilai array dengan fungsi <code>echo</code>
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
                  //contoh pemanggilan nilai dalam array
                  $anggota = array();
                  $anggota['pertama'] = &#x27;Sandi&#x27;;
                  $anggota['kedua'] = &#x27;Ruli&#x27;;
                  $anggota['ketiga'] = &#x27;Iqbal&#x27;;

                  // kita akan mencoba menampilkan nilai yang berisi &#x27;Ruli&#x27;
                  // nilai &#x27;Ruli&#x27; ada didalam kunci 'kedua'
                  // jadi
                  echo $anggota['kedua'];
                  // ini akan menampilkan Ruli di layar
                </highlight-code>
              </div>
            </div>

            <h4>Cara mengetahui isi kunci dan isi nilai seluruh array</h4>
            <p>
              Untuk mengetahui kunci array dalam Seme Framework sudah mudah, cukup memanggil fungsi <code>dd()</code> didalam view, model, ataupun controller Seme Framework.
              Fungsi <code>dd</code> ini bukan fungsi bawaan PHP, tapi fungsi bawaan dari Seme Framework.
              Baca selengkapnya tentang <NuxtLink to="/id/globals/" target="_blank"> fungsi DD() <i class="fa fa-external-link"></i></NuxtLink>.
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
                  class Home extends SENE_Controller {
                    ...
                    //contoh menampilkan isi array dalam controller
                    $anggota = array();
                    $anggota['pertama'] = &#x27;Sandi&#x27;;
                    $anggota['kedua'] = &#x27;Ruli&#x27;;
                    $anggota['ketiga'] = &#x27;Iqbal&#x27;;
                    $anggota[] = &#x27;Tami&#x27;;
                    $anggota[] = &#x27;Tia&#x27;;
                    $anggota[] = &#x27;Daeng&#x27;;
                    $anggota[] = &#x27;Vanny&#x27;;

                    // karena ketika pengisian dicampur
                    // maka menentukan kunci array akan menjadi membingungkan
                    // untuk itu, ada fungsi DD ini
                    dd($anggota);
                    ...
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Object</h3>
            <p>
              <code>object</code> merupakan tipe data yang terdiri dari properti dan method. Untuk isi dan properti dan method dari object ini bergantung pada kelas yang dibuat object-nya. Untuk object akan dibahas pada tutorial selanjutnya mengenai MVC.
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
                  //contoh penggunaan object
                  $anggota = new stdClass();
                  $anggota->pertama = &#x27;Sandi&#x27;;
                  $anggota->kedua = &#x27;Ruli&#x27;;
                  $anggota->ketiga = &#x27;Iqbal&#x27;;
                </highlight-code>
              </div>
            </div>

            <h4>Cara ngoding object</h4>
            <p>
              Untuk membuat <code>object</code>, pertama-tama <code>variabel</code> harus diisi terlebih dahulu dengan kata kunci <code>new</code> dan diikuti oleh penulisan kelas <code>stdClass()</code>.
              Kemudian untuk menambahkan <code>object</code> kedalam <code>variabel</code> dengan notasi panah (-&#x3E;) penulisan nama variabel. Untuk lebih jelas lihat contoh potongan kode sebelumnya.
            </p>

            <h4><b>RAHASIA</b> <code>object</code> bisa menyimpan banyak nilai</h4>
            <p>
              Sama seperti array, supaya dapat menyimpan banyak nilai object memiliki <b>RAHASIA</b>-nya.
              Dan rahasianya pun sama yaitu, <code>kunci</code> dan <code>nilai</code>.
            </p>
            <p>
              Tapi kunci yang digunakan object tidak bisa bertambah otomatis, seperti dalam array.
              Karena kunci object tidak bisa menggunakan awalan huruf, hanya bisa huruf kemudian angka, dan underscore.
              Jadi mau tidak mau, kunci pada object tetap harus dituliskan secara langsung.
              Untuk lebih jelas lihat contoh potongan kode sebelumnya.
            </p>

            <h4>Cara pemanggilan object</h4>
            <p>
              Untuk memanggil <code>object</code>, pastikan <code>object</code> tersebut sudah terisi.
              Apabila sudah terisi, maka akan ada kunci nilainya.
              Kunci nilai inilah yang kita butuhkan untuk memanggil object.
              Kita akan mencoba menampilkan nilai object dengan fungsi <code>echo</code>
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
                  //contoh pemanggilan nilai dalam object
                  $anggota = new stdClass();
                  $anggota->pertama = &#x27;Sandi&#x27;;
                  $anggota->kedua = &#x27;Ruli&#x27;;
                  $anggota->ketiga = &#x27;Iqbal&#x27;;

                  // kita akan mencoba menampilkan nilai yang berisi &#x27;Iqbal&#x27;
                  // nilai &#x27;Iqbal&#x27; ada didalam kunci 'ketiga'
                  // jadi
                  echo $anggota->ketiga;
                  // ini akan menampilkan Iqbal di layar
                </highlight-code>
              </div>
            </div>

            <h4>Cara mengetahui isi kunci dan isi nilai seluruh object</h4>
            <p>
              Untuk mengetahui kunci object dalam Seme Framework sudah mudah, cukup memanggil fungsi <code>dd()</code> didalam view, model, ataupun controller Seme Framework.
              Fungsi <code>dd</code> ini bukan fungsi bawaan PHP, tapi fungsi bawaan dari Seme Framework.
              Baca selengkapnya tentang <NuxtLink to="/id/globals/" target="_blank"> fungsi DD() <i class="fa fa-external-link"></i></NuxtLink>.
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
                  class Anggota extends SENE_Controller {
                    ...
                    //contoh menampilkan isi object dalam controller
                    $anggota = new stdClass();
                    $anggota->pertama = &#x27;Sandi&#x27;;
                    $anggota->kedua = &#x27;Ruli&#x27;;
                    $anggota->ketiga = &#x27;Iqbal&#x27;;

                    dd($anggota);
                    ...
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Mixed</h3>
            <p>
              <code>mixed</code> merupakan tipe data khusus yang hanya ada di PHP. Tipe data ini akan mengizinkan diisi dengan tipe data apapun. Seperti <code>string</code> kemudian ditimpa dengan <code>int</code> dan seterusnya.
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
                  $asalnya_int = 50;
                  //akan diisi string
                  $asalnya_int = &#x27;50&#x27;;
                  //sekarang $asalnya_int tetap berisi 50 TETAPI berupa string bukanlagi INTEGER
                  $asalnya_int = &#x27;Tia&#x27;;
                  //sekarang $asalnya_int berisi string &#x27;Tia&#x27;
                  $asalnya_int = 0.170001;
                  //sekarang $asalnya_int berisi float 0.170001
                  $asalnya_int = array();
                  //sekarang $asalnya_int berisi array kosong;
                  $asalnya_int = new stdClass();
                  //sekarang $asalnya_int berisi object kosong;
                  //isi data sebelumnya tidak tertimpa
                </highlight-code>
              </div>
            </div>
            <div class="message is-info">
              <div class="message-body">
                <p><b>Asal kamu tahu</b></p>
                <p>
                  Kalau dalam bahasa pemrograman yang lain, ketika variabel sudah ditentukan tipe datanya misalkan INT dan diisi nilai selain INT, maka akan menyebabkan ERROR.
                </p>
                <p>
                  Itulah salah satu alasan PHP menerapkan tipe data mixed ini.
                </p>
              </div>
            </div>

            <h2>Variabel</h2>
            <p>
              Setelah mengenal tipe data, kita akan belajar mengenai variabel.
              Variabel ini dalam bahasa pemrograman merupakan tempat penyimpanan nilai.
              Bisa diibaratkan, variabel ini adalah sebuah gelas yang memiliki nama dan bisa diisi suatu nilai tertentu.
              Nilai ini nantinya akan memiliki jenis atau tipe data.
              Sementara, nama variabel didalam bahasa pemrograman PHP diawali dengan tanda dollar atau <code>$</code>.
              Untuk lebih lengkapnya mari kita lihat contoh kode dibawah ini.
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
                  $nama_variabel = 1;
                  // ini artinya ada variabel bernama nama_variabel berisi INT 1
                  $int_bukan = '1';
                  // ini artinya ada variabel bernama int_bukan berisi STRING '1'
                  $str_lagi = "Hello World";
                  // ini artinya ada variabel bernama str_lagi berisi STRING "Hello World"
                  $contoh_ke_4 = "Hello World";
                  // ini artinya ada variabel bernama str_lagi berisi STRING "Hello World"
                </highlight-code>
              </div>
            </div>
            <p>
              Untuk nama variabel, tidak boleh diawali oleh angka, hanya bisa diawali huruf, baru bisa ditambahkan dengan angka.
              Untuk contoh <b>salahnya penulisan variabel</b> lihat kode dibawah ini.
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
                  $1ap = 1;
                  //penamaan variabel salah, karena diawali angka 1
                  $sudah lunas = TRUE;
                  //penamaan variabel salah, karena ada spasi
                </highlight-code>
              </div>
            </div>
            <p>
              Untuk nama variabel, tidak boleh diawali oleh angka, hanya bisa diawali huruf, baru bisa ditambahkan dengan angka.
              Kemudian, untuk pembuatan variabel juga tidak boleh menggunakan karakter khusus, selain underscore.
            </p>

          </div>

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
        <nuxt-link to="/id/tutorial/basic-mvc/" class="btn">
          Basic MVC
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
    name: 'Seme Framework 4',
    suffix: ' - Seme Framework 4 Bahasa Indonesia',
    title: 'Tutorial Dasar PHP',
    description: 'Belajar PHP dasar sebelum menggunakan Seme Framework',
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
        url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/tutorial/',
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
      "dateModified": "2021-06-26T19:13:00+07:00",
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
