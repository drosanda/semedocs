<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial/">Tutorial</NuxtLink></li>
          <li class="unavailable">Halaman Statis Dasar</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Dasar-dasar pembuatan Halaman Statis</h1>
            <p>
              Setelah mempelajari <NuxtLink to="/id/tutorial/basic-routing/" target="_blank">perutean <i class="fa fa-window-restore"></i></NuxtLink>, kita akan belajar membuat halaman statis dan berpindah antar halaman tersebut
              Sebelum memulai tutorial ini, pastikan sudah <NuxtLink to="/id/downloads/" target="_blank">menginstall dan menjalankan <i class="fa fa-window-restore"></i></NuxtLink> Seme Framework.
              Diasumsikan Seme Framework berjalan menggunakan <code>XAMPP</code> dan diinstall di <code>D:/XAMPP/htdocs/seme_framework</code>.
              Kemudian buka aplikasi Atom IDE, VsCode atau notepad++. Setelah itu pilih <code>file / Open Directory</code> dan arahkan ke tempat folder atau direktori instalasi Seme Framework.
            </p>

            <h2>Menyetel pengaturan base_url()</h2>
            <p>
              Sebelum melanjutkan, periksa dulu nilai dari variabel <code>$site</code> pada file <code>app/config/development.php</code>, pastikan nilainya <code>http://localhost/seme_framework/</code>.
              Untuk lebih jelasnya lihat contoh pengaturannya.
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
                  /**
                   * Site Base URL with http:// or https:// prefix and trailing slash
                   * @var string
                   */
                  $site = &#x22;http://localhost/seme_framework/&#x22;;
                  ...
                </highlight-code>
              </div>
            </div>

            <h2>Membuat Controller Produk</h2>
            <p>
              Buat file baru di dalam <code>app/controller/produk.php</code> untuk membuat Controller produk.
              Kemudian, tuliskan kode ini didalam file <code>produk.php</code> dan simpan.
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
                  class Produk extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      echo 'Nanti halaman produk akan tampil disini';
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Setelah itu buka Browser, kemudian buka alamat <code>localhost/seme_framework/produk/</code> dan tekan enter untuk membuka halaman tersebut. Apabila, muncul tulisan seperti yang ada dicontroller berarti anda telah berhasil halaman baru.
            </p>

            <h3>Merubah isi Controller Home</h3>
            <p>
              Sekarang kita akan mencoba untuk menambahkan link dengan tag <code>&#x3C;a href=&#x22;...&#x22;&#x3E;...&#x3C;/a&#x3E;</code> supaya dapat mengarah ke halaman Produk.
              Untuk itu, kita akan merubah file <code>app/controller/home.php</code> kemudian ubah isi file tersebut menjadi sama seperti contoh kode dibawah ini.
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
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      echo &#x27;Halaman utama&#x27;;
                      echo &#x27;&#x3C;br&#x3E;&#x27;;
                      echo &#x27;Menuju ke halaman &#x3C;a href=&#x22;&#x27;.base_url().&#x27;produk&#x22;&#x3E;produk&#x3C;/a&#x3E;&#x27;;
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Setelah itu buka Browser, kemudian buka alamat <code>localhost/seme_framework/</code> dan tekan enter untuk membuka halaman tersebut. Apabila, muncul tulisan seperti yang ada di controller home berarti anda telah berhasil merubah controller Home.
            </p>

            <h3>Menambah <em>List</em> Produk</h3>
            <p>
              Sekarang kita akan menambahkan list produk, yaitu produk A dan produk B untuk ilustrasi.
              Dan tidak lupa juga untuk menambahkan link kembali ke halaman utama juga dengan tag <code>&#x3C;a href=&#x22;...&#x22;&#x3E;...&#x3C;/a&#x3E;</code>.
              Untuk itu buka file <code>app/controller/produk.php</code> dan ganti isinya seperti contoh kode dibawah ini.
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
                  class Produk extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      echo &#x27;Halaman Produk&#x27;;
                      echo &#x27;&#x3C;br&#x3E;&#x27;;
                      echo &#x27;Produk A &#x3C;br&#x3E;&#x27;;
                      echo &#x27;Produk B &#x3C;br&#x3E;&#x27;;
                      echo &#x27;Kembali ke &#x3C;a href=&#x22;&#x27;.base_url().&#x27;&#x22;&#x3E;Halaman Utama&#x3C;/a&#x3E;&#x27;;
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Setelah itu buka Browser, kemudian buka alamat <code>localhost/seme_framework/produk/</code> dan tekan enter untuk membuka halaman tersebut. Apabila, muncul tulisan seperti yang ada di controller home berarti anda telah berhasil merubah controller Home.
            </p>

            <h2>Membuat contoh halaman lanjutan</h2>
            <p>
              Sekarang kita akan mencoba membuat contoh halaman lanjutan untuk produk, yaitu halaman detail produk.
            </p>

            <h3>Merubah isi Controller <code>Home</code></h3>
            <p>
              Sekarang kita akan mencoba untuk menambahkan judul dengan tag <code>&#x3C;h1&#x3E;...&#x3C;/h1&#x3E;</code> dan <code>&#x3C;p&#x3E;...&#x3C;/p&#x3E;</code> untuk sub judulnya.
              Untuk itu, kita akan merubah file <code>app/controller/home.php</code> kemudian ubah isi file tersebut menjadi sama seperti contoh kode dibawah ini.
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
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      echo &#x27;&#x3C;h1&#x3E;Halaman utama&#x3C;/h1&#x3E;&#x27;;
                      echo &#x27;&#x3C;p&#x3E;Selamat datang di Toko Kamu&#x3C;/p&#x3E;&#x27;;
                      echo &#x27;&#x3C;br&#x3E;&#x27;;
                      echo &#x27;Lihat &#x3C;a href=&#x22;&#x27;.base_url().&#x27;produk&#x22;&#x3E;Produk&#x3C;/a&#x3E;&#x27;;
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Setelah itu buka Browser, kemudian buka alamat <code>localhost/seme_framework/</code> dan tekan enter untuk membuka halaman tersebut. Apabila, muncul tulisan seperti yang ada di controller home berarti anda telah berhasil merubah controller Home.
            </p>

            <h3>Menambahkan Detail Produk</h3>
            <p>
              Sekarang kita akan menambahkan 2 metode baru, yaitu metode <code>a()</code> dan <code>b()</code> pada kelas <code>Produk</code>.
              Sekarang ganti isi file <code>app/controller/produk.php</code> dengan kode sumber seperti dibawah ini.
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
                  class Produk extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      echo &#x27;Halaman Produk&#x27;;
                      echo &#x27;&#x3C;br&#x3E;&#x27;;
                      echo &#x27;ke &#x3C;a href=&#x22;&#x27;.base_url().&#x27;produk/a/&#x22;&#x3E;Produk A&#x3C;/a&#x3E;&#x3C;br&#x3E;&#x27;;
                      echo &#x27;ke &#x3C;a href=&#x22;&#x27;.base_url().&#x27;produk/b/&#x22;&#x3E;Produk B&#x3C;/a&#x3E;&#x3C;br&#x3E;&#x27;;
                      echo &#x27;Kembali ke &#x3C;a href=&#x22;&#x27;.base_url().&#x27;&#x22;&#x3E;Halaman Utama&#x3C;/a&#x3E;&#x27;;
                    }
                    public function a(){
                      echo &#x27;&#x3C;h1&#x3E;Produk A&#x3C;/h1>&#x27;;
                      echo &#x27;&#x3C;p&#x3E;Produk A cocok untuk dipakai di musim hujan&#x3C;/p&#x3E;&#x27;;
                      echo &#x27;&#x3C;p style=&#x22;text-decoration: line-through&#x22;&#x3E;Harga IDR 150.000&#x3C;/p&#x3E;&#x27;;
                      echo &#x27;&#x3C;p&#x3E;Harga IDR 125.000&#x3C;/p&#x3E;&#x27;;
                      echo &#x27;&#x3C;br&#x3E;&#x27;;
                      echo &#x27;Kembali ke &#x3C;a href=&#x22;&#x27;.base_url().&#x27;produk&#x22;&#x3E;Produk&#x3C;/a&#x3E;&#x27;;
                    }
                    public function b(){
                      echo &#x27;&#x3C;h1&#x3E;Produk B&#x3C;/h1&#x3E;&#x27;;
                      echo &#x27;&#x3C;p&#x3E;Produk B cocok untuk dipakai di musim panas&#x3C;/p&#x3E;&#x27;;
                      echo &#x27;&#x3C;p&#x3E;Harga IDR 150.000&#x3C;/p&#x3E;&#x27;;
                      echo &#x27;&#x3C;br&#x3E;&#x27;;
                      echo &#x27;Kembali ke &#x3C;a href=&#x22;&#x27;.base_url().&#x27;produk&#x22;&#x3E;Produk&#x3C;/a&#x3E;&#x27;;
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Setelah itu buka Browser, kemudian buka alamat <code>localhost/seme_framework/produk/</code> dan tekan enter untuk membuka halaman tersebut. Apabila, muncul tulisan seperti yang ada di controller home berarti anda telah berhasil merubah controller Home.
            </p>

            <h2>Menggunakan Direktori Produk</h2>
            <p>
              Sekarang kita akan mencoba membuat contoh halaman produk dengan menggunakan direktori.
            </p>

            <h3>Buat direktori <code>Produk</code></h3>
            <p>
              Pertama-tama, buat direktori <code>produk</code> didalam <code>app/controller</code>.
            </p>

            <h3>Pindahkan controller <code>produk</code></h3>
            <p>
              Kemudian, pindahkan controller <code>app/controller/produk.php</code> ke dalam direktori <code>app/controller/produk/produk.php</code>.
            </p>

            <h3>Ganti nama file dan nama kelas controller <code>Produk</code></h3>
            <p>
              Setelah itu ganti nama kelas dan controller <code>Produk</code> menjadi <code>Home</code>, begitu juga dengan nama filenya menjadi <code>app/controller/produk/home.php</code>
              Untuk lebih lengkapnya, bisa lihat contoh kode dibawah ini.
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
                  class Home extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      echo &#x27;Halaman Produk&#x27;;
                      echo &#x27;&#x3C;br&#x3E;&#x27;;
                      echo &#x27;ke &#x3C;a href=&#x22;&#x27;.base_url().&#x27;produk/a/&#x22;&#x3E;Produk A&#x3C;/a&#x3E;&#x3C;br&#x3E;&#x27;;
                      echo &#x27;ke &#x3C;a href=&#x22;&#x27;.base_url().&#x27;produk/b/&#x22;&#x3E;Produk B&#x3C;/a&#x3E;&#x3C;br&#x3E;&#x27;;
                      echo &#x27;Kembali ke &#x3C;a href=&#x22;&#x27;.base_url().&#x27;&#x22;&#x3E;Halaman Utama&#x3C;/a&#x3E;&#x27;;
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Pergeseran Peta Segmen URL</h3>
            <p>
              Ketika kita menggunakan direktori untuk produknya, maka segmen URL pun berubah.
              Dari asalnya merujuk pada metode didalam kelas produk, setelah menggunakan direktori maka link produk detail akan merujuk pada sebuah kelas bukan metode.
              Pada contoh kali ini, kelas yang ditunjuk adalah <code>kelas A</code> dan <code>kelas B</code> didalam direktori <code>produk</code>.
            </p>

            <h3>Membuat Kelas A</h3>
            <p>
              Sekarang kita akan membuat kelas A untuk detail produk A, buat file baru dan simpan didalam <code>app/controlller/produk/a.php</code>.
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
                  class A extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      echo &#x27;&#x3C;h1&#x3E;Produk A&#x3C;/h1>&#x27;;
                      echo &#x27;&#x3C;p&#x3E;Produk A cocok untuk dipakai di musim hujan&#x3C;/p&#x3E;&#x27;;
                      echo &#x27;&#x3C;p style=&#x22;text-decoration: line-through&#x22;&#x3E;Harga IDR 150.000&#x3C;/p&#x3E;&#x27;;
                      echo &#x27;&#x3C;p&#x3E;Harga IDR 125.000&#x3C;/p&#x3E;&#x27;;
                      echo &#x27;&#x3C;br&#x3E;&#x27;;
                      echo &#x27;Kembali ke &#x3C;a href=&#x22;&#x27;.base_url().&#x27;produk&#x22;&#x3E;Produk&#x3C;/a&#x3E;&#x27;;
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Membuat Kelas B</h3>
            <p>
              Sekarang kita akan membuat kelas B untuk detail produk B, buat file baru dan simpan didalam <code>app/controlller/produk/b.php</code>.
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
                  class B extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      echo &#x27;&#x3C;h1&#x3E;Produk B&#x3C;/h1>&#x27;;
                      echo &#x27;&#x3C;p&#x3E;Produk b cocok untuk dipakai di musim panas&#x3C;/p&#x3E;&#x27;;
                      echo &#x27;&#x3C;p&#x3E;Harga IDR 150.000&#x3C;/p&#x3E;&#x27;;
                      echo &#x27;&#x3C;br&#x3E;&#x27;;
                      echo &#x27;Kembali ke &#x3C;a href=&#x22;&#x27;.base_url().&#x27;produk&#x22;&#x3E;Produk&#x3C;/a&#x3E;&#x27;;
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <p>
              Setelah itu buka Browser, kemudian buka alamat <code>localhost/seme_framework/produk/</code> dan tekan enter untuk membuka halaman tersebut. Apabila, muncul tulisan seperti yang ada di controller home berarti anda telah berhasil merubah controller Home.
            </p>

            <h2>Kesimpulan</h2>
            <ul>
              <li>
                Dari tiga contoh diatas, dapat disimpulkan bahwa Seme Framework secara otomatis dapat menentukan pemetaan Alamat URL secara otomatis.
              </li>
              <li>
                Untuk membuat halaman harus ada 2 tahap ini.
                <ol>
                  <li>
                    Membuat file baru untuk view.
                  </li>
                  <li>
                    Kemudian untuk kelas Controller-nya:
                    <ul>
                      <li>
                        buat kelas controller baru, kemudian panggil view-nya, atau
                      </li>
                      <li>
                        Ubah di Controller-nya, Tambahkan metode <code>function</code> baru, kemudian panggil view-nya, atau
                      </li>
                      <li>
                        Ubah di Controller-nya, ubah metode / <code>function</code> yang sudah ada, kemudian panggil view-nya.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ul>

          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/tutorial/basic-routing/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Basic Routing
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/tutorial/" class="btn">
            Tutorial
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
      fr: require('~/assets/img/first-run.png'),
      name: 'Seme Framework 4 Tutorial',
      suffix: ' - Seme Framework 4 Tutorial',
      title: 'Pembuatan Halaman Statis',
      description: 'Pelajari tentang tutorial pembuatan halaman statis pada Seme Framework 4 beserta perpindahan antar halaman.',
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
        "dateCreated": "2020-06-25T12:23:01+07:00",
        "datePublished": "2020-06-25T13:33:42+07:00",
        "dateModified": "2021-06-25T13:34:39+07:00",
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
