<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Kelas Controller</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Kelas Controller</h1>
            <p>Kelas Controller dalam Seme Framework merupakan inti dari semua logika yang ada dalam jangkauan kelas tersebut.</p>
            <p>Nama kelas dalam Controller juga berfungsi sebagai identitas dari sebuah alamat URL.</p>

            <h2>Ketentuan Kelas Controller</h2>
            <p>Berikut ini adalah ketentuan ketika ingin menggunakan kelas Controller dengan benar supaya dapat berjalan dengan baik:</p>
            <ul>
              <li>Semua kelas Controller di simpan didalam direktori <code>app/controller</code>.</li>
              <li>
                <p>Kelas controller harus <code>extends</code> dari <code>SENE_Controller</code>.</p>

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
app
|-- controller
|---- blog.php
                    </highlight-code>
                  </div>
                </div>

                <p>isi dari blog.php</p>

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
                    <highlight-code lang="php">&#x3C;?php class Blog extends JI_Controller { ... }</highlight-code>
                  </div>
                </div>

              </li>
              <li>
                Dan bisa juga <code>extends</code> dari kelas <code>core</code> yang mana kelas tersebut merupakan hasil <code>extends</code> dari <code>SENE_Controller</code>.

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
app
|-- core
|---- ji_controller.php
|-- controller
|---- home.php
|---- blog.php

                    </highlight-code>
                  </div>
                </div>

                <p>isi dari ji_controller.php</p>
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
                    <highlight-code lang="php">&lt;?php class JI_Controller extends SENE_Controller { ... }</highlight-code>
                  </div>
                </div>
                <p>isi dari home.php</p>

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
                    <highlight-code lang="php">&lt;?php class Home extends JI_Controller { ... }</highlight-code>
                </div>
              </div>
              </li>
              <li>
                <p>
                  Penamaan nama file controller dan nama kelas controller hanya boleh, diawali oleh huruf, kemudian diteruskan oleh huruf dan atau angka, dan underscore.
                </p>
                <p>Contoh (benar):</p>

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
-nama file:
  faktur_pajak.php
-nama kelas:

&lt;?php class Faktur_Pajak extends SENE_Controller { .. }
                    </highlight-code>
                  </div>
                </div>

                <p>Contoh (Salah):</p>

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
                      -nama file:
                        1faktur pajak.php
                      -nama kelas:
                      &lt;?php class 1Faktur Pajak extends SENE_Controller { .. }
                    </highlight-code>
                  </div>
                </div>
              </li>
              <li>
                <p>
                  Nama file kelas controller harus dalam huruf kecil (<i>Lower Case</i>) dan berakhiran <code>.php</code>.
                </p>
              </li>
              <li>
                <p>
                  Nama kelas dan nama file harus identik tapi boleh tidak sama huruf besar dan atau huruf kecilnya (tidak <i>case sensitive</i>).
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
                    <highlight-code lang="php">Contoh (benar):
-nama file:
  faktur_pajak.php
-nama kelas:

&lt;?php class Faktur_Pajak extends SENE_Controller { .. }

Contoh (benar):
-nama file:
fakturpajak.php
-nama kelas:
&lt;?php class FakturPajak extends SENE_Controller { .. }
                    </highlight-code>
                  </div>
                </div>
              </li>
            </ul>


            <h2>Contoh struktur Controller</h2>
            <p>Berikut ini adalah contoh struktur direktori dari controller:</p>
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
app
|-- controller
|---- home.php
|---- blog.php
                </highlight-code>
              </div>
            </div>

            <p>Anggap saja kita sudah mengekstrak atau clone Seme Framework ke dalam direktori <code>D:\XAMPP\htdocs\seme_framework</code>.</p>
            <p>Jadi ketika kita membuka <code>http://localhost/seme_framework</code> maka Seme Framework akan membuka kelas controller yang ada di <code>app/controller/home.php</code>.</p>

            <div class="message is-info">
              <div class="message-body">
                <p>Nama kelas <b>home</b> atau nama file <b>home.php</b> adalah kelas dasar (<i>default</i>) yang akan selalu diakses jika akar URL seperti <code>https://example.com</code>.</p>
              </div>
            </div>

            <p>Bagaimana seandainya kita akan membuka alamat URL  <code>http://localhost/seme_framework/blog</code>, apakah akan muncul?</p>
            <p>Jawabannya adalah Seme Framework akan memamnggil file controller <code>app/controller/blog.php</code> jika ada.</p>
            <p>Seme Framework will only load controller with filename and its class name are matched.</p>

            <h2>Kelas SENE_Controller</h2>
            <p>Kelas SENE_Controller merupakan kelas dasar yang telah memiliki berbagai fungsi (method) didalamnya untuk keperluan pembangunan aplikasi berbasis web.</p>
            <p>Ada banyak fungsi dan variabel yang telah tersedia di kelas SENE_Controller ini.</p>

            <h3>Penggunaan Dasar</h3>
            <p>Berikut ini adalah cara penggunaan dasar dari Kelas Controller di Seme Framework.</p>

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
                <highlight-code lang="php">&lt;?php
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
                <p>Private method dalam Seme Framework diawali dengan underscore 2 kali (__).</p>
              </div>
            </div>

            <div class="message is-success">
              <div class="message-body">
                <p>Private method tidak dapat diakses oleh alamat URL langsung.</p>
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
            Controller: __construct
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
      suffix: ' - Seme Framework Bahasa Indonesia',
      title: 'Kelas Controller',
      description: 'Pelajari selengkapnya tentang controller class of melalui dokumentasi Seme Framework versi 4.0.0.',
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
