<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial/">Tutorial</NuxtLink></li>
          <li class="unavailable">Belajar PHP</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Belajar Singkat PHP</h1>
            <p>
              Seme Framework dibuat dengan menggunakan bahasa pemrograman PHP.
              Di sini sekarang, anda akan belajar mengenai penggunaan dasar PHP yang digunakan untuk penyusunan kode dengan Seme Framework.
            </p>
            <h2>Referensi Resmi PHP</h2>
            <p>
              Untuk bacaan lengkap tentang bahasa pemrograman php ada di situs resminya yaitu <a href="https://php.net/">PHP.NET <i class="fa fa-external-link"></i></a> yang tersedia dalam bahasa Inggris.
            </p>
            <h2>Tujuan Belajar Singkat PHP di website Dokumentasi Seme Framework</h2>
            <p>
              Tujuan akhir dari Tutorial Belajar Singkat PHP ini adalah supaya programmer dapat membaca kode dengan bahasanya sendiri.
              Kemudian, apabila telah bisa membaca kode dengan bahasa sendiri, baru bisa melanjutkan ke Tutorial Selanjutnya.
            </p>

            <h2>Penulisan dasar kode PHP</h2>
            <p>
              Bahasa pemrograman PHP ini dikembangkan dari bahasa C, yang artinya hampir semua komponen bahasa C ada di dalam PHP.
              Namun, untuk sekarang PHP sudah memiliki banyak kemajuan sehingga sudah sedikit berbeda dengan pendahulunya.
            </p>
            <p>
              Kode PHP diakhiri dengan tanda titik koma (<code>;</code>) untuk setiap perintahnya.
              Kemudian biasanya setelah titik koma (<code>;</code>), kode dilanjutkan pada baris baru supaya lebih mudah dibaca.
              Kebanyakan dari PHP ditulis dengan huruf kecil (<b>Lowercase</b>) terkecuali untuk penamaan tertentu.
            </p>
            <h3>Memulai Ngoding PHP</h3>
            <p>
              Kode PHP diawali dengan <code>&#x3C;?php</code> dan diakhiri atau ditutup dengan <code>?&#x3E;</code>.
              Jadi PHP itu dibuka dengan kode <code>&#x3C;?php</code> dan ditutup dengan kode <code>&#x3C;?php</code>.
              Namun sekarang kode PHP tidak perlu ditutup pada akhir halaman PHP, terkecuali ingin menampilkan kode selain PHP.
            </p>
            <p>
              Dengan adanya kode pembuka dan kode penutup, PHP dapat digabungkan dengan HTML secara langsung sehingga bisa menampilkan bagian-bagian halaman yang berasal dari PHP.
            </p>
            <p>
              Untuk lebih jelasnya, bisa lihat contoh ini.
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
                  echo &#x27;ini dari PHP&#x27;;
                  ?&#x3E;
                  &#x3C;h3&#x3E;Ini dari HTML&#x3C;/h3&#x3E;
                  &#x3C;?php
                  echo &#x27;balik lagi dari PHP&#x27;;

                  //baris terakhir tidak usah pakai tutup
                </highlight-code>
              </div>
            </div>

            <h3>Menulis Komentar di dalam PHP</h3>
            <p>
              Penulisan komentar atau catatan pada saat ngoding sangat penting.
              Catatan ini akan membantu untuk mengingat programmer arti lengkapnya dari sebuah kode.
              Komentar ini tidak akan diproses oleh PHP dan tidak akan menimbulkan ERROR selama masih dalam badan komentar.
            </p>

            <h4>Penulisan Komentar per baris</h4>
            <p>
              Dalam PHP, komentar dapat diketikan per baris.
              Untuk menuliskan komentar perbaris ini, cukup ketik <code>//</code> (dua kali garis miring) pada baris yang ingin dikomentari.
              Contoh kode untuk penulisan komentar.
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
                  // ini komentar kode dalam baris ini tidak akan dieksekusi
                </highlight-code>
              </div>
            </div>

            <h4>Penulisan Komentar per blok</h4>
            <p>
              Dalam PHP, komentar dapat diketikan untuk banyak baris atau perbagian blok.
              Untuk menuliskan komentar perblok ini ada kode pembukanya yaitu <code>/**</code> sedangkan penutup komentarnya yaitu <code>*/</code>.
              Contoh kode untuk penulisan komentar perblok.
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
                   Ini adalah komentar panjang sekali
                   Pokoknya, kalau yang baca komentar ini pasti ngerti
                   Semoga cepet bisa memahami tulisan ini
                  */
                </highlight-code>
              </div>
            </div>

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
              Fungsi bawaan ini berguna untuk mempercepat proses penerapan logika dalam penyusunan kode karena sudah terbantu denga fungsi yang ada ini.
              Fungsi ini biasanya ditandai dengan akhiran kurung, contoh fungsi <code>strtoupper()</code> adalah fungsi bawaan untuk merubah string menjadi huruf besar semua.
            </p>
            <h3>Variabel bawaan atau (<em>Built-in variables</em>)</h3>
            <p>
              Seperti bahasa pemrograman lainnya, PHP memiliki variabel bawaan yang cukup lengkap.
              Variabel bawaan ini biasanya akan digunakan oleh pembuat kode untuk mendapatkan nilai yang telah ada di sistem.
              Dan bisa juga, untuk merubah nilai yang sudah ada atau bahkan menambahkan nilai yang baru.
            </p>
            <h3>Ruang Lingkup</h3>
            <p>
              PHP memiliki ruang lingkup baik untuk penggunaan fungsi maupun untuk penggunaan variabel.
              Ada dua tujuan dari ruang lingkup ini, yaitu:
            </p>
            <ol>
              <li><b>Melonggarkan</b> variabel atau fungsi supaya dapat digunakan dimanapun.</li>
              <li><b>Membatasi</b> variabel atau fungsi supaya <b>tidak tercampur</b> dengan variabel atau fungsi lain.</li>
            </ol>
            <h4>Ruang lingkup Global</h4>
            <p>
              Ruang lingkup global adalah cara untuk melonggarkan variabel ataupun fungsi supaya dapat digunakan dimanapun.
              Tapi, kelemahannya adalah mungkin akan terjadi bentrok antar fungsi atau variabel jika namanya sama.
              Ketika bentroknya terhadap fungsi dengan yang sama, biasanya akan menimbulkan error.
              Namun, ketika bentroknya dengan nama variabel yang sama, biasanya tidak error.
              Tapi, menyebabkan isi atau nilai yang dimiliki oleh variabel tersebut bisa berubah nilainya.
            </p>
            <div class="message is-warning">
              <div class="message-body">
                <p><b>Awas!</b></p>
                <p>
                  Efek samping penggunaan variabel yang banyak didalam ruang lingkup global bisa menyebabkan <em>lemot</em>.
                </p>
              </div>
            </div>
            <p>
              Kelemahan yang selanjutnya dari penggunaan ruang lingkup global ini adalah, apabila nilai yang disimpan dari variabel tersebut sangat banyak.
              Contoh ketika ada variabel bertipe data array menyimpan banyak sekali data, akan membuat lemot</em>.
            </p>
            <p>
              Contoh dari fungsi dengan ruang lingkup global ini adalah fungsi <code>strtoupper()</code> yang ada dicontoh sebelumnya.
            </p>
            <p>
              Sementara, untuk contoh variabel global adalah <code>$_POST</code> yang berisikan nilai dari hasil pengiriman data melalui <code>HTML FORM</code>.
            </p>
            <h4>Ruang lingkup Class</h4>
            <p>
              Dalam PHP juga, ada ruang lingkup <code>class</code> yang biasa kita sebut dengan hak akses kelas. Ada 3 hak akses yang digunakan dalam kelas yaitu <code>Public</code>, <code>Private</code>, dan <code>Protected</code>.
            </p>
            <p>
              Untuk pembahasan selanjutnya tentang kelas, akan dibahas pada Tutorial <b>Basic MVC</b> (setelah tutorial ini).
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
            <p>
              Untuk contoh perbedaan ruang lingkup ketika ngoding metode kelas, akan dibahas pada Tutorial <b>Basic MVC</b> (setelah tutorial ini).
            </p>

            <h2>Tipe Data</h2>
            <p>
              Tipe data atau jenis penyimpanan data dalam PHP tidak dibutuhkan atau dideklarasikan secara langsung.
              Meskipun begitu, PHP tetap mengenal beberapa jenis tipe data seperti integer, float, string, boolean, array, object, mixed, dan lain-lain.
            </p>

            <h3>INT atau INTEGER</h3>
            <p>
              <code>int</code> atau <code>integer</code>, untuk menyimpan data angka genap tanpa pecahan dari mulai negatif sampai positif. seperti 0, -1, 2, 1000, -781 dan seterusnya.
              Integer dalam PHP cukup disebuts dengan <code>int</code> saja dalam huruf kecil (lowercase).
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
                  $anggota[&#x27;pertama&#x27;] = &#x27;Sandi&#x27;;
                  $anggota[&#x27;kedua&#x27;] = &#x27;Ruli&#x27;;
                  $anggota[&#x27;ketiga&#x27;] = &#x27;Iqbal&#x27;;
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
                  $anggota[&#x27;pertama&#x27;] = &#x27;Sandi&#x27;;
                  $anggota[&#x27;kedua&#x27;] = &#x27;Ruli&#x27;;
                  $anggota[&#x27;ketiga&#x27;] = &#x27;Iqbal&#x27;;

                  // kita akan mencoba menampilkan nilai yang berisi &#x27;Ruli&#x27;
                  // nilai &#x27;Ruli&#x27; ada didalam kunci &#x27;kedua&#x27;
                  // jadi
                  echo $anggota[&#x27;kedua&#x27;];
                  // ini akan menampilkan Ruli di layar
                </highlight-code>
              </div>
            </div>

            <h4>Cara mengetahui isi kunci dan isi nilai seluruh array</h4>
            <p>
              Cara untuk mengetahui isi nilai dan kunci dari sebuah array yang benar adalah dengan menggunakan teknik perulangan.
              Teknik perulangan ini, akan dibahas pada halaman tutorial ini setelah logika dan percabangan.
              Jadi terus baca dan coba untuk fahami dulu keseluruhan tulisan ini.
            </p>
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
                    $anggota[&#x27;pertama&#x27;] = &#x27;Sandi&#x27;;
                    $anggota[&#x27;kedua&#x27;] = &#x27;Ruli&#x27;;
                    $anggota[&#x27;ketiga&#x27;] = &#x27;Iqbal&#x27;;
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
              Jadi mau tidak mau, kunci pada object tetap harus disebutkan secara langsung.
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
                  // nilai &#x27;Iqbal&#x27; ada didalam kunci &#x27;ketiga&#x27;
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
                  $int_bukan = &#x27;1&#x27;;
                  // ini artinya ada variabel bernama int_bukan berisi STRING &#x27;1&#x27;
                  $str_lagi = &#x22;Hello World&#x22;;
                  // ini artinya ada variabel bernama str_lagi berisi STRING &#x22;Hello World&#x22;
                  $contoh_ke_4 = &#x22;Hello World&#x22;;
                  // ini artinya ada variabel bernama str_lagi berisi STRING &#x22;Hello World&#x22;
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

            <h2>Operator</h2>
            <p>
              Pada bahasa pemrograman PHP ada yang disebut dengan operator.
              Operator biasanya digunakan untuk melakukan proses <b>Matematika</b>, seperti tambah, kurang, bagi, kali, dan modulus.
            </p>
            <h3>Operator +</h3>
            <p>
              Operator tambah digunakan untuk melakukan proses pertambahan.
              Dalam bahasa pemrograman PHP, operator pertambahan memiliki simbol yang sama dengan simbol matematika biasa yaitu simbol tambah (+).
            </p>
            <h3>Operator -</h3>
            <p>
              Operator kurang digunakan untuk melakukan proses pengurangan.
              Dalam bahasa pemrograman PHP, operator pengurangan memiliki simbol yang sama dengan simbol matematika biasa yaitu simbol kurang (-).
            </p>
            <h3>Operator /</h3>
            <p>
              Operator bagi digunakan untuk melakukan proses pembagian.
              Dalam bahasa pemrograman PHP, operator pembagian memiliki simbol yang sama dengan simbol matematika biasa yaitu simbol bagi (/).
            </p>
            <h3>Operator *</h3>
            <p>
              Operator kali digunakan untuk melakukan proses pengalian.
              Dalam bahasa pemrograman PHP, operator pengalian memiliki simbol yang berbeda dengan simbol matematika biasa yaitu simbol bintang / <b>wildcard</b> (*).
            </p>
            <h3>Operator %</h3>
            <p>
              Operator modulus digunakan untuk melakukan proses perhitungan sisa bagi.
              Dalam bahasa pemrograman PHP, operator modulus memiliki simbol yang berbeda dengan simbol matematika biasa yaitu simbol persen (%).
              Operator ini biasanya digunakan untuk menentukan ganjil genap pada warna tabel karena ketika semua bilang di modulus angka 2, hanya akan menghasilkan nilai 1 dan 0.
              Nilai 1 untuk baris ganjil karena memiliki hasil bagi 1, sementara nilai 0 untuk baris genap karena bilangan tersebut habis dibagi 2.
            </p>
            <p>
              Berikut ini adalah contoh kode untuk setiap operator.
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
                  $a = 1;
                  $b = 2;
                  $c = $a+$b;
                  // nilai $c adalah INT 3

                  $a = 1;
                  $b = 2;
                  $c = $a-$b;
                  // nilai $c adalah INT -1

                  $a = 1;
                  $b = 2;
                  $c = $a/$b;
                  // nilai $c adalah FLOAT 0.5

                  $a = 1;
                  $b = 2;
                  $c = $a*$b;
                  // nilai $c adalah INT 2


                  $a = 1;
                  $b = 2;
                  $c = $a%$b;
                  // nilai $c adalah INT 1
                  // karena 2 bagi 1 menghasilkan sisa 1.
                </highlight-code>
              </div>
            </div>
            <h3>Operator untuk String</h3>
            <p>
              Tipe data String memiliki operator khusus yaitu titik (.).
              Operator ini digunakan untuk menggabungkan 2 string atau lebih.
              Lihat contoh kode untuk lebih jelasnya.
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
                  $a = &#x27;Hallo&#x27;;
                  $b = &#x27;Dunia&#x27;;
                  $c = $a.$b;
                  // nilai $c adalah String &#x27;HaloDunia&#x27;
                  // tidak ada spasi

                  $c = $a.&#x27; &#x27;.$b;
                  // nilai $c adalah String &#x27;Halo Dunia&#x27;

                  //menggabungkan string tanpa pakai 2 variabel

                  $a = &#x27;Hallo&#x27;;
                  $a = $a.&#x27; Dunia&#x27;;
                  // nilai $a adalah String &#x27;Halo Dunia&#x27;

                  //atau dengan cara singkat

                  $a = &#x27;Hallo&#x27;;
                  $a .= &#x27; Dunia&#x27;;
                  // nilai $a adalah String &#x27;Halo Dunia&#x27;
                </highlight-code>
              </div>
            </div>

            <h2>Logika Percabangan</h2>
            <p>
              Logika Percabangan ini biasanya digunakan untuk membuat perbandingan antar nilai.
              Nilai ini bisa didapatkan melalui variabel, maupun membandingkan nilainya secara langsung.
            </p>
            <h3>Operator pada logika Percabangan</h3>
            <p>
              Operator pada logika Percabangan biasa disebut juga dengan <b>Operator Perbandingan</b>, telah disediakan oleh PHP untuk digunakan pada logika percabangan, yaitu:
            </p>
            <ol>
              <li>
                <code>$a == $b</code> berarti $a sama dengan $b.
              </li>
              <li>
                <code>$a != $b</code> berarti tidak sama dengan.
              </li>
              <li>
                <code>$a &#x3E; $b</code> $a lebih besar dari $b.
              </li>
              <li>
                <code>$a &#x3E;= $b</code> $a lebih besar sama dengan dari $b.
              </li>
              <li>
                <code>$a &#x3C; $b</code> $a lebih kecil dari $b.
              </li>
              <li>
                <code>$a &#x3C;= $b</code> $a lebih kecil sama dengan dari $b.
              </li>

            </ol>
            <p>
              Contoh kode untuk perbandingan nilai dari variabel dan nilai langsung beserta cara bacanya.
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
                  // Contoh perbandingan menggunakan variabel
                  $a = 1;
                  $b = 2;

                  //kemudian dibandingkan dengan menggunakan IF ELSE
                  //gunakan operator lebih besar
                  if($a &#x3E; $b){
                    echo &#x27;$a tidak lebih besar dari $b&#x27;;
                  }else{
                    echo &#x27;$a lebih besar dari $b&#x27;;
                  }
                  //kodingan diatas dapat dibaca sebagai berikut:
                  // ada variabel $a berisi nilai INTEGER 1
                  // ada variabel $b berisi nilai INTEGER 2
                  // Apakah variabel $a lebih besar dari variabel $b?
                  // jika benar jalankan perintah echo &#x27;$a tidak lebih besar dari $b&#x27;;
                  // lainnya (jika salah maksudnya) jalankan perintah echo &#x27;$a lebih besar dari $b&#x27;;

                  // Contoh perbandingan menggunakan nilai langsung
                  if(7 &#x3E; 6){
                    echo &#x27;7 tidak lebih besar dari 6&#x27;;
                  }else{
                    echo &#x27;7 lebih besar dari 6&#x27;;
                  }
                  //kodingan diatas dapat dibaca sebagai berikut:
                  // Apakah 7 lebih besar dari variabel 6?
                  // jika benar jalankan perintah echo &#x27;7 tidak lebih besar dari 6&#x27;;
                  // lainnya (jika salah maksudnya) jalankan perintah echo &#x27;7 lebih besar dari 6&#x27;;
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Posisi tanda sama dengan (<code>=</code>)</b></p>
                <p>
                  Tanda sama dengan selalu ada di paling kanan setelah tanda kurang dari (<code>&#x3C;</code>) atau lebih dari (<code>&#x3E;</code>).
                </p>
              </div>
            </div>

            <h3>Logika Percabangan lebih dari satu (Logika percabangan Majemuk)</h3>
            <p>
              Berikut ini adalah contoh Logika Percabangan lebih dari satu.
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
                // Contoh Logika percabangan Majemuk
                $status_transaksi = &#x27;berhasil&#x27;;
                if($status_transaksi == &#x27;berhasil&#x27;){
                  echo &#x27;Status Transaksi: Berhasil&#x27;;
                }elseif($status_transaksi == &#x27;gagal&#x27;){
                  echo &#x27;Status Transaksi: Gagal&#x27;;
                }else{
                  echo &#x27;Status Transaksi: Tidak diketahui&#x27;;
                }

                //kodingan diatas dapat dibaca sebagai berikut:
                // ada variabel $status_transaksi berisi nilai STRING &#x27;berhasil&#x27;;
                // Apakah variabel $status_transaksi sama dengan STRING &#x27;berhasil&#x27; ?
                // jika benar jalankan perintah echo &#x27;Status Transaksi: Berhasil&#x27;;
                // Apakah variabel $status_transaksi sama dengan STRING &#x27;gagal&#x27; ?
                // jika benar jalankan perintah echo &#x27;Status Transaksi: Gagal&#x27;;
                // lainnya (jika tidak memenuhi kriteria if maupun if else)
                // jalankan echo &#x27;Status Transaksi: Tidak diketahui&#x27;;
              </highlight-code>
            </div>
          </div>

          <h3>Logika Percabangan lebih dari satu kondisi</h3>
          <p>
            Berikut ini adalah contoh Logika Percabangan lebih dari satu kondisi.
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
              // Contoh Logika Percabangan lebih dari satu kondisi
              $status_transaksi = &#x27;berhasil&#x27;;
              $penjual_aktif = 1;
              if($status_transaksi == &#x27;berhasil&#x27; &#x26;&#x26; $penjual_aktif == 1){
                echo &#x27;Status Transaksi: Berhasil&#x27;;
              }elseif($status_transaksi == &#x27;berhasil&#x27; &#x26;&#x26; $penjual_aktif == 0){
                echo &#x27;Status Transaksi: Berhasil, tapi penjual tidak aktif. Uang akan dikembalikan dalam 2x24 jam&#x27;;
              }elseif($status_transaksi == &#x27;gagal&#x27; &#x26;&#x26; $penjual_aktif == 1){
                echo &#x27;Status Transaksi: Gagal&#x27;;
              }elseif($status_transaksi == &#x27;gagal&#x27; &#x26;&#x26; $penjual_aktif == 0){
                echo &#x27;Status Transaksi: Gagal&#x27;;
              }else{
                echo &#x27;Status Transaksi: Tidak diketahui&#x27;;
              }
            </highlight-code>
          </div>
        </div>

          <h2>Perulangan</h2>
          <p>
            Perulangan adalah sesuatu yang harus dipelajari secara intensif.
            Karena, perulangan ini akan selalu digunakan untuk menampilkan data dari array.
            Yang paling sering digunakan oleh Seme Framework hanya 2, yaitu foreach dan for.
            Semua tarikan dari model di Seme Framework, biasanya berbentuk array of object.
            Jadi harus difahami betur, tentang penggunaan perulangan ini.
          </p>

          <h3>Perulangan dengan Foreach</h3>
          <p>
            Perluangan dengan foreach adalah perulangan yang paling sederhana dan gampang digunakan.
            Kenapa sederhana dan gampang? Nanti bisa diketahui ketika membahas teknik perulangan dengan for.
          </p>
          <p>
            Berikut ini adalah contoh kode untuk penelusuran array dengan foreach.
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
                // contoh sederhana
                $anggota = array();
                $anggota[&#x27;pertama&#x27;] = &#x27;Sandi&#x27;;
                $anggota[&#x27;kedua&#x27;] = &#x27;Ruli&#x27;;
                $anggota[&#x27;ketiga&#x27;] = &#x27;Iqbal&#x27;;

                foreach($anggota as $a){
                  echo $a;
                  // akan menampilkan semua isi dari nilai array anggota
                  // tanpa harus mengetahui kunci arraynya
                }

                //kemudian $anggota bertambah
                $anggota[&#x27;keempat&#x27;] = &#x27;Tia&#x27;;
                $anggota[&#x27;kelima&#x27;] = &#x27;Tami&#x27;;

                //ketika di foreach lagi
                foreach($anggota as $a){
                  echo $a;
                  // akan menampilkan semua isi dari nilai array anggota
                  // ditambah nilai yang baru akan muncul
                  // tanpa harus merubah kode foreach
                }

                //kemudian $anggota bertambah dengan kunci array otomatis
                $anggota[] = &#x27;Daeng&#x27;;
                $anggota[] = &#x27;Vanny&#x27;;

                //ketika di foreach lagi
                foreach($anggota as $a){
                  echo $a;
                  // akan menampilkan semua isi dari nilai array anggota
                  // ditambah nilai yang baru dengan kunci array otomatis
                  // tanpa harus merubah kode foreach
                }
              </highlight-code>
            </div>
          </div>

          <h3>Perulangan dengan For</h3>
          <p>
            Perulangan dengan for dapat digunakan untuk menelusuri isi dari variabel array.
            Tapi, menggunakan perulangan for ini ada syaratnya, yaitu isi dari variabel yang akan diulang panjang kuncinya sudah ada.
            Dan syarat selanjutnya adalah, kuncinya harus berupa kunci integer.
          </p>
          <p>
            Berikut ini adalah contoh kode untuk penelusuran array dengan for.
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
                // contoh sederhana
                $anggota = array();
                $anggota[] = &#x27;Sandi&#x27;;
                $anggota[] = &#x27;Ruli&#x27;;
                $anggota[] = &#x27;Iqbal&#x27;;

                //karena anggotanya ada 3, maka for nya maksimal 3.
                for($i=0;$i&#x3C;3;$i++){
                  echo $anggota[$i];
                  // akan menampilkan semua isi array
                  // yang dipanggil melalui kunci arraynya
                }

                //kemudian $anggota bertambah
                $anggota[] = &#x27;Tia&#x27;;
                $anggota[] = &#x27;Tami&#x27;;

                //ketika di for lagi,
                // harus dihitung jml array kuncinya
                for($i=0;$i&#x3C;5;$i++){
                  echo $anggota[$i];
                  // akan menampilkan semua isi array
                  // yang dipanggil melalui kunci arraynya
                }

                //kemudian $anggota bertambah dengan kunci array manual
                $anggota[&#x27;keenam&#x27;] = &#x27;Daeng&#x27;;
                $anggota[&#x27;ketujuh&#x27;] = &#x27;Vanny&#x27;;

                //ketika di for lagi
                // harus dihitung jml array kuncinya
                for($i=0;$i&#x3C;5;$i++){
                  echo $anggota[$i];
                  // akan menampilkan semua isi array
                  // yang dipanggil melalui kunci arraynya
                  // tapi akan error, karena $anggota ke-6
                  // dan ke-7 index nya bukan integer
                }
                //jadi lebih mudah pakai foreach kan
              </highlight-code>
            </div>
          </div>



          <h3>Perulangan dengan Foreach menggunakan kunci array</h3>
          <p>
            Berikut ini adalah contoh kode untuk penelusuran array dengan foreach tapi pemanggilan arraynya menggunakan kunci array.
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
                // contoh sederhana
                $anggota = array();
                $anggota[] = &#x27;Sandi&#x27;;
                $anggota[] = &#x27;Ruli&#x27;;
                $anggota[] = &#x27;Iqbal&#x27;;

                foreach($anggota as $kunci=>$nilai){
                  //cara echo nya
                  echo anggota[$kunci];
                  // akan menampilkan semua isi dari nilai array anggota
                  // tanpa harus mengetahui kunci arraynya
                }

                //kemudian $anggota bertambah dengan kunci array manual
                $anggota[&#x27;keenam&#x27;] = &#x27;Daeng&#x27;;
                $anggota[&#x27;ketujuh&#x27;] = &#x27;Vanny&#x27;;

                //ketika di foreach lagi
                foreach($anggota as $kunci=>$nilai){
                  echo anggota[$kunci=>$nilai];
                  // akan menampilkan semua isi dari nilai array anggota
                  // tanpa harus mengetahui kunci arraynya
                  // array key bukan integer pun tidak akan menimbulkan error
                  // jadi pakai foreach lebih mudah
                }
              </highlight-code>
            </div>
          </div>

          <h2>Kesimpulan</h2>
          <p>
            Didalam tutorial ini sudah dijelaskan secara menyeluruh, cara ngoding dasar menggunakan PHP.
            Apabila ada yang tidak mengerti, halaman ini mungkin perlu dibaca berulang kali sampai paham.
          </p>

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
    suffix: ' - Seme Framework 4',
    title: 'Belajar Singkat PHP',
    description: 'Belajar Singkat PHP dasar sebelum menggunakan Seme Framework',
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
      "dateModified": "2021-07-26T10:51:33+07:00",
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
