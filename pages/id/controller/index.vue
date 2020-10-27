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
                Kelas controller harus <code>extends</code> dari <code>SENE_Controller</code>.
                <pre>
app
|-- controller
|---- blog.php
                </pre>
                <pre>
isi dari blog.php
<code v-highlight class="php">&lt;?php class Blog extends JI_Controller { ... }</code></pre>

              </li>
              <li>
                Dan bisa juga <code>extends</code> dari kelas <code>core</code> yang mana kelas tersebut merupakan hasil <code>extends</code> dari <code>SENE_Controller</code>.
                <pre>
app
|-- core
|---- ji_controller.php
|-- controller
|---- home.php
|---- blog.php
                </pre>
                <pre>
isi dari ji_controller.php
<code v-highlight class="php">&lt;?php class JI_Controller extends SENE_Controller { ... }</code>
isi dari home.php
<code v-highlight class="php">&lt;?php class Home extends JI_Controller { ... }</code></pre>
              </li>
              <li>
                Penamaan nama file controller dan nama kelas controller hanya boleh, diawali oleh huruf, kemudian diteruskan oleh huruf dan atau angka, dan underscore.
                <pre>Contoh (benar):
-nama file:
  faktur_pajak.php
-nama kelas:
<code v-highlight class="php">&lt;?php class Faktur_Pajak extends SENE_Controller { .. }</code></pre>
                <pre>Contoh (Salah):
-nama file:
  1faktur pajak.php
-nama kelas:
<code v-highlight class="php">&lt;?php class 1Faktur Pajak extends SENE_Controller { .. }</code></pre>
              </li>
              <li>Nama file kelas controller harus dalam huruf kecil (<i>Lower Case</i>) dan berakhiran <code>.php</code>.</li>
              <li>
                Nama kelas dan nama file harus identik tapi boleh tidak sama huruf besar dan atau huruf kecilnya (tidak <i>case sensitive</i>).
                <pre>Contoh (benar):
-nama file:
  faktur_pajak.php
-nama kelas:
<code v-highlight class="php">&lt;?php class Faktur_Pajak extends SENE_Controller { .. }</code></pre>
                <pre>Contoh (benar):
-nama file:
fakturpajak.php
-nama kelas:
<code v-highlight class="php">&lt;?php class FakturPajak extends SENE_Controller { .. }</code></pre>
              </li>
            </ul>


            <h2>Contoh struktur Controller</h2>
            <p>Berikut ini adalah contoh struktur direktori dari controller:</p>
            <pre>
app
|-- controller
|---- home.php
|---- blog.php
            </pre>

            <p>Anggap saja kita sudah mengekstrak atau clone Seme Framework ke dalam direktori <code>D:\XAMPP\htdocs\seme_framework</code>.</p>
            <p>Jadi ketika kita membuka <code>http://localhost/seme_framework</code> maka Seme Framework akan membuka kelas controller yang ada di <code>app/controller/home.php</code>.</p>
            <b-message class="is-info">
              <p>Nama kelas <b>home</b> atau nama file <b>home.php</b> adalah kelas dasar (<i>default</i>) yang akan selalu diakses jika akar URL seperti <code>https://example.com</code>.</p>
            </b-message>
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
            <pre><code v-highlight class="php">&lt;?php
class Home extends SENE_Controller{
  public function __construct(){
    parent::__construct();
  }
  public function index(){
    echo &#x27;Thankyou for using Seme Framewrok&#x27;;
  }
}</code></pre>

            <h4>Controller untuk error 404 (not found)</h4>
            <p>Controller not found biasanya digunakan untuk aplikasi berbasis web karena mungkin saja ada kesalah URL atau data di aplikasi sudah dihapus atau disembunyikan.</p>
            <p>Controller not found ini sangat penting untuk menghasilkan pengalaman yang baik terhadap pengguna.</p>
            <pre><code v-highlight class="php">&lt;?php
class Notfound extends SENE_Controller{
  public function __construct(){
    parent::__construct();
  }
  public function index(){
    header(&#x22;HTTP/1.0 404 Not Found&#x22;);
    echo &#x27;404 Notfound&#x27;;
  }
}</code></pre>

            <b-message class="is-info">
              <p><b>Perhatian</b></p>
              <p>Pastikan bahwa nama kelas dan nama file telah identik. Apabila nama file dan nama kelas sudah identik, tapi tidak sama dengan alamat URL yang diminta maka akan menghasilkan error 404 (not found).</p>
            </b-message>
            <b-message class="is-danger">
              <p><b>Perhatian</b></p>
              <p>Apabila nama file cocok dengan permintaan alamat url, tapi tidak cocok dengan nama kelas. Maka akan menimbulkan error 500.</p>
            </b-message>

            <h2>Pembatasan akses pada method dan properti</h2>
            <p>Seme Framework telah mendukung deklrasi untuk private method, private properti, protected method dan protected properti.</p>

            <pre><code v-highlight class="php">&lt;?php
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
}</code></pre>
            <b-message class="is-info">
              <p>Private method dalam Seme Framework diawali dengan underscore 2 kali (__).</p>
            </b-message>
            <b-message class="is-success">
              <p>Private method tidak dapat diakses oleh alamat URL langsung.</p>
            </b-message>

          </div>
        </div>

      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/view" type="is-link" icon-pack="fa" icon-left="chevron-left" class="">
              View
            </b-button>
            <b-button tag="router-link" to="/id/controller/constructor" type="is-link" icon-pack="fa" icon-right="chevron-right" class="">
              Controller: __construct
            </b-button>
          </div>
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
      title: 'Controller',
      description: 'Pelajari selengkapnya tentang controller class of melalui dokumentasi Seme Framework versi 4.0.0.'
    }
  },
  head() {
    return {
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
  }
}
</script>
