<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Controller</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Kelas Controller</h1>
            <p>
              Kelas Controller dalam Seme Framework merupakan inti dari semua logika yang ada dalam jangkauan kelas tersebut.
              Nama kelas dan nama file Controller akan digunakans sebagai identitas dari permintaan URL.
            </p>

            <h2>Daftar Isi</h2>
            <ul>
              <li>
                <NuxtLink to="/id/controller/#syarat_ketentuan">Syarat Ketentuan</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/id/controller/#contoh_benar_salah">Contoh Benar salah</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/id/controller/#SENE_Controller">Kelas SENE_Controller</NuxtLink>
              </li>
            </ul>

            <h2 id="syarat_ketentuan">Syarat &amp; Ketentuan</h2>
            <p>
              Berikut ini adalah syarat dan ketentuan yang harus dipenuhi ketika ingin menggunakan kelas Controller dengan benar supaya dapat berjalan dengan baik.
            </p>

            <h3>Lokasi</h3>
            <p>
              Semua controller di simpan di dalam direktori <code>app/controller</code>.
            </p>

            <h3>Aturan Penamaan</h3>
            <p>
              Penamaan nama file controller dan nama kelas controller hanya dapat diawali dengan huruf, kemudian diikuti dengan huruf dan atau angka, dan/atau garis bawah.
              Kemudian untuk Nama kelas dan nama file harus identik, tapi boleh beda urutan pengkapitalan pada nama kelas.
              Sementara untuk <b>nama file</b> ditulis dengan <b>huruf kecil</b> tidak boleh kapital. Baru bisa diikuti dengan angka, dan/atau <u>underscore</u> serta diberi akhiran <code>.php</code>.
            </p>

            <h3 id="rule_1on1">Jumlah kelas controller dalam 1 file</h3>
            <p>
              Seme Framework hanya mengizinkan 1 kelas controller dalam satu file yang sama.
              Begitu juga dengan nama metode dalam 1 kelas harus bersifat unik (tidak boleh sama).
            </p>

            <h3 id="rule_inherit">Turunan Kelas</h3>
            <p>
              Controller harus menurunkan kelas dengan kode <code>extends</code> dari kelas <NuxtLink to="/id/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink>.
              Begitupun juga ketika menggunakan fitur <NuxtLink to="/id/core/controller/" target="_blank">Core <i class="fa fa-window-restore"></i></NuxtLink>, kelas controller core harus menurunkan dengan cara yang sama.
            </p>

            <h3 id="rule_inherit">Konstruktor Kelas</h3>
            <p>
              Setiap kelas controller wajib mendeklarasikan konstruktor kelas, berikut ini adalah contoh kodenya.
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
                  &lt;?php
                  class Home extends SENE_Controller{
                    // WAJIB konstruktor kelas
                    public function __construct(){
                      //WAJIB konstruktor parent kelas
                      parent::__construct();
                    }
                    ...
                  }
                </highlight-code>
              </div>
            </div>

            <h3 id="rule_inherit">Metode Index</h3>
            <p>
              Metode <code>index</code> wajib ada untuk setiap turunan dari kelas <NuxtLink to="/id/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink>.
            </p>

            <h3 id="rule_inherit"><em>Defaults</em></h3>
            <p>
              Nama default dari kelas controller adalah <code>Home</code>.
              Sementara nama default dari metode adalah <code>index</code>.
              Dan file name default dari controller adalah <code>home.php</code>.
              Jadi, pastikan untuk selalu memeriksa nama dan isi file controller baik didalam direktori <code>app/controller</code> maupun direktori lain didalamnya.
            </p>

            <h3>Direktori Spesial: admin</h3>
            <p>
              Seme Framework mendukung direktori spesial untuk pembuatan halaman admin (<code>app/controller/admin</code>).
              Direktori ini memiliki perlakuan khusus dalam pemetaan ulang URL Request. Pelajari selengkapnya tentang <NuxtLink to="/id/uri_routing/admin/">halaman admin</NuxtLink>.
            </p>

            <h3>Kedalaman Direktori</h3>
            <p>
              Seme Framework hanya mendukung 1 tingkat lebih dalam direktori dari mulai <code>app/controller</code>.
              Dan 1 tingkat lebih dalam juga untuk direktori spesial admin.
              Berikut ini adalah contoh susunan file dan direktori untuk controller.
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
                  └── controller/
                   ├── admin/
                   |  ├── sales/
                   |  | ├── online.php
                   |  | ├── offline.php
                   |  | └── report.php
                   |  ├── login.php
                   |  ├── logout.php
                   |  └── dashboard.php
                   |── product/
                   | ├── home.php
                   | ├── search.php
                   | └── detail.php
                   |── login.php
                   |── register.php
                   |── forgot.php
                   └── about.php
                </highlight-code>
              </div>
            </div>

            <h2 id="contoh_benar_salah">Contoh Benar Salah Syarat Controller</h2>
            <p>
              Berikut ini adalah berbagai contoh untuk salah atau benar pemenuhan syarat dari penamaan file dan kelas controller.
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
                  /**
                  * CONTOH BENAR
                  * -nama file:
                  *   faktur_pajak.php
                  * -nama kelas: Faktur_Pajak
                  */

                  &lt;?php class Faktur_Pajak extends SENE_Controller { .. }

                  /**
                  * CONTOH BENAR
                  * -nama file:
                  *   fakturpajak.php
                  * -nama kelas: FakturPajak
                  */

                  &lt;?php class FakturPajak extends SENE_Controller { .. }

                  /**
                  * CONTOH SALAH: ada spasi
                  * -nama file:
                  *   faktur pajak.php
                  * -nama kelas: Faktur_Pajak
                  */

                  &lt;?php class Faktur_Pajak extends SENE_Controller { .. }

                  /**
                  * CONTOH SALAH: diawali angka
                  * -nama file:
                  *   1faktur_pajak.php
                  * -nama kelas: 1Faktur_Pajak
                  */

                  &lt;?php class 1Faktur_Pajak extends SENE_Controller { .. }

                  /**
                  * CONTOH SALAH: nama kelas tidak identik, beda - dan _
                  * -nama file:
                  *   faktur-pajak.php
                  * -nama kelas: Faktur_Pajak
                  */

                  &lt;?php class 1Faktur_Pajak extends SENE_Controller { .. }

                  /**
                  * CONTOH SALAH: nama kelas dan nama file pakai -
                  * -nama file:
                  *   faktur-pajak.php
                  * -nama kelas: Faktur-Pajak
                  */

                  &lt;?php class 1Faktur-Pajak extends SENE_Controller { .. }

                  /**
                  * CONTOH SALAH: nama kelas pakai -
                  * -nama file:
                  *   faktur_pajak.php
                  * -nama kelas: Faktur-Pajak
                  */

                  &lt;?php class 1Faktur-Pajak extends SENE_Controller { .. }

                  /**
                  * CONTOH SALAH: isi kelas tidak ada kelas constructor
                  * -nama file:
                  *   faktur_pajak.php
                  * -nama kelas: Faktur_Pajak
                  */

                  &lt;?php class Faktur_Pajak extends SENE_Controller {
                    public function index(){
                      echo &#x27;Thankyou for using Seme Framewrok&#x27;;
                    }
                  }

                  /**
                  * CONTOH SALAH: isi kelas tidak ada metode index
                  * -nama file:
                  *   faktur_pajak.php
                  * -nama kelas: Faktur_Pajak
                  */

                  &lt;?php class Faktur_Pajak extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                    }
                  }

                  /**
                  * CONTOH SALAH: isi kelas metode kelas konstruktor tidak lengkap
                  * -nama file:
                  *   faktur_pajak.php
                  * -nama kelas: Faktur_Pajak
                  */

                  &lt;?php class Faktur_Pajak extends SENE_Controller {
                    public function __construct(){
                    }
                    public function index(){
                      echo &#x27;Thankyou for using Seme Framewrok&#x27;;
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h2>Cara Kerja</h2>
            <p>
              Seme Framework akan memuat controller dengan permintaan URI.
              Biasanya ada hubungan satu-ke-satu antara string URL dan kelas/metode pengontrol yang sesuai.
              Segmen dalam URI biasanya mengikuti pola ini:
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
                  example.com/class/method/parameter1/parameter2/.../parameterN
                </highlight-code>
              </div>
            </div>
            <p>
              Atau apabila menggunakan direktori:
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
                  example.com/directory/class/method/parameter1/parameter2/.../parameterN
                </highlight-code>
              </div>
            </div>
            <p>
              Seme Framework hanya akan memuat pengontrol dengan nama file dan nama kelasnya cocok.
              Namun, Seme Framework memiliki dukungan untuk <NuxtLink to="/id/configuration/routes/">Pemetaan Ulang Kontroler URI</NuxtLink>.
            </p>

            <h3>Controller Spesial: Notfound</h3>
            <p>
              Error 404 atau Notfound adalah kontroler khusus yang berfungsi sebagai fallback jika file Controller tidak ditemukan serta persyaratannya tidak terpenuhi.
            </p>

            <h2>Error 5xx</h2>
            <p>
              Kesalahan 500 atau kode 5xx lainnya, biasanya disebabkan oleh nama kelas yang tidak cocok dengan nama file.
              Namun, kondisi ini juga dapat disebabkan oleh kesalahan pada kode sumber.
            </p>

            <h2 id="SENE_Controller">Kelas SENE_Controller</h2>
            <p>
              Kelas SENE_Controller merupakan kelas dasar yang telah memiliki berbagai fungsi (metode) didalamnya untuk keperluan pembangunan aplikasi berbasis web.
              Ada banyak metode dan properti yang telah tersedia pada kelas SENE_Controller ini.
            </p>

            <h3>Penggunaan Dasar</h3>
            <p>
              Berikut ini adalah cara penggunaan dasar dari Kelas Controller di Seme Framework.
            </p>

            <h4>Controller Default</h4>
            <p>Berikut ini adalah source code dari kelas home:</p>
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
&lt;?php
class Home extends SENE_Controller{
  public function __construct(){
    parent::__construct();
  }
  public function index(){
    echo &#x27;Thankyou for using Seme Framewrok&#x27;;
  }
}
                </highlight-code>
              </div>
            </div>

            <h4>Controller untuk error 404 (not found)</h4>
            <p>Controller not found biasanya digunakan untuk aplikasi berbasis web karena mungkin saja ada kesalah URL atau data di aplikasi sudah dihapus atau disembunyikan.</p>
            <p>Controller not found ini sangat penting untuk menghasilkan pengalaman yang baik terhadap pengguna.</p>
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
                <highlight-code lang="php">&lt;?php
class Notfound extends SENE_Controller{
  public function __construct(){
    parent::__construct();
  }
  public function index(){
    header(&#x22;HTTP/1.0 404 Not Found&#x22;);
    echo &#x27;404 Notfound&#x27;;
  }
}
</highlight-code>
</div>
</div>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Perhatian</b></p>
                <p>Pastikan bahwa nama kelas dan nama file telah identik. Apabila nama file dan nama kelas sudah identik, tapi tidak sama dengan alamat URL yang diminta maka akan menghasilkan error 404 (not found).</p>
              </div>
            </div>

            <div class="message is-danger">
              <div class="message-body">
                <p><b>Perhatian</b></p>
                <p>Apabila nama file cocok dengan permintaan alamat url, tapi tidak cocok dengan nama kelas. Maka akan menimbulkan error 500.</p>
              </div>
            </div>

            <h2>Pembatasan akses pada method dan properti</h2>
            <p>Seme Framework telah mendukung deklrasi untuk private method, private properti, protected method dan protected properti.</p>

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
                <highlight-code lang="php">&lt;?php
class Home extends SENE_Controller{
  var $public_var = &#039;Yi-Ha!&#039;
  var $__underWear = &#039;My Private Things&#039;
  public function __construct(){
    parent::__construct();
  }
  private function __processFile(){
    return true;
  }
  public function index(){
    echo &#039;not found&#039;
  }
}
</highlight-code>
</div>
</div>
            <div class="message is-info">
              <div class="message-body">
                <p><b>Asal kamu tahu</b></p>
                <p>
                  Private method dalam Seme Framework diawali dengan underscore 2 kali (__) dan tidak dapat diakses oleh alamat URL langsung.
                </p>
                <p>
                  Masih bingung? Pelajari lagi <NuxtLink to="/id/tutorial/basic-mvc/#hak_akses_kelas">Hak Akses Kelas <i class="fa fa-window-restore"></i></NuxtLink> untuk Seme Framework.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/view/" class="btn">
          <i class="fa fa-chevron-left"></i>
            View
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/controller/constructor/" class="btn">
            Constructor kelas
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
      title: 'Kelas Controller',
      description: 'Pelajari selengkapnya tentang aturan pembuatan kelas controller untuk Seme Framework 4.',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/controller',
          text: 'Controller',
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
        "dateCreated": "2021-08-11T19:52:38+07:00",
        "datePublished": "2021-08-11T19:52:38+07:00",
        "dateModified": "2021-07-27T23:34:00+07:00",
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
