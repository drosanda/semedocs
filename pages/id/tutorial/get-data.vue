<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial">Tutorial</NuxtLink></li>
          <li class="unavailable">Get data</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Dapatkan Data</h1>
            <p>Get Data adalah contoh paling dasar untuk menggambarkan bagaimana framework mendapatkan data dari database.</p>
            <p>Get data adalah bagian dari metode CRUD, yang disebut Retrieve. CRUD adalah nama pendek dari Create Retrieve Update and Delete.</p>
            <p>Dalam tutorial ini Anda akan belajar tentang bagaimana:</p>
            <ul>
              <li>Mengatur database dengan membuat database dan mengimpor file SQL.</li>
              <li>Periksa koneksi dan konfigurasi dari framework.</li>
              <li>Buat model.</li>
              <li>Ubah controller dan view.</li>
            </ul>

            <h2>Prasyarat</h2>
            <p>Untuk hasil terbaik dari tutorial ini, Anda harus mengatur atau menginstal item berikut:</p>
            <ul>
              <li>Menjalankan Apache dan MySQL melalui XAMPP</li>
              <li>IDE atau Editor Teks</li>
              <li>Peramban / Browser</li>
              <li><NuxtLink to="/id/tutorial/introduction">Menyelesaikan tutorial pertama</NuxtLink></li>
            </ul>
            <p>Oke, mari kita mulai!</p>

            <h2>Siapkan database</h2>
            <p>Sebelum kita melanjutkan ke kode dengan Seme Framework, kita harus menyiapkan database untuk koneksi yang berfungsi antara Seme Framework dan Database.</p>

            <h3>Buat database menggunakan PhpMyAdmin</h3>
            <p>PhpMyAdmin adalah antarmuka manajemen basis data berbasis web. PhpMyAdmin sudah ada pada bawaan <a href="https://www.apachefriends.org/download.html" target="_blank">XAMPP</a>.</p>
            <p>PhpMyAdmin ini memungkinkan Anda untuk melakukan hampir semua hal ke database yang didukung MySQL atau MariaDB.</p>
            <p>Jika Anda telah menjalankan XAMPP, maka Anda dapat membuka <code>http://localhost/phpmyadmin/</code>.</p>
            <p>Anda harus membuat database, bernama <code>seme_framework</code>.</p>
            <amp-img layout="responsive" width="1086px" height="694px" alt="PMA DB Create" :src="dbCreate"></amp-img>

            <h3>Impor database contoh</h3>
            <p>Setelah membuat database, Anda harus mengimpor database.</p>
            <p>Kami telah menyimpan file sql pada direktori <code>sql</code>.</p>
            <p>Sebelum melanjutkan proses ekspor Anda harus memilih database <code>seme_framework</code> yang telah Anda buat sebelumnya.</p>
            <p>Navigasikan ke tab <code>export</code> dan pilih file <code>seme_framework.sql</code> didalam direktori <code>sql</code>.</p>
            <amp-img layout="responsive" width="1086px" height="694px" alt="PMA DB Create" :src="dbImport"></amp-img>
            <p>Setelah mengimpor SQL, Anda dapat melihat tabel baru yang sudah ditambahkan ke database.</p>
            <amp-img layout="responsive" width="1086px" height="694px" alt="PMA DB Create" :src="dbTblList"></amp-img>

            <h2>Penysunan Kode (<em>Ngoding</em>)</h2>
            <p>Setelah setup database, saatnya untuk coding. Hal pertama yang harus kita periksa kembali adalah file konfigurasi yang terletak di <code>app/config/development.php</code>. Pastikan konfigurasi koneksi database berfungsi.</p>

            <h3>Buat Model</h3>
            <p>Model pada MVC framework digunakan untuk menjembatani framework dan tabel database. Dan kemudian jika kita telah memisahkan model, tingkat reusability meningkat karena model dapat digunakan berulang kali beberapa kali pada banyak controller.</p>

            <p>Mari kita buat file baru bernama <code>a_apikey_model.php</code> untuk tabel <b>a_apikey</b> didalam direktori <code>app/model/</code>, dan kemudian masukkan kode ini ke file Anda.</p>
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
    public function set($di)
    {
        return $this-&#x3E;db-&#x3E;insert($this-&#x3E;tbl,$di);
    }
    public function update($id,$du)
    {
        $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;,$id);
        return $this-&#x3E;db-&#x3E;update($this-&#x3E;tbl,$du);
    }
    public function del($id,$du)
    {
        $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;,$id);
        return $this-&#x3E;db-&#x3E;delete($this-&#x3E;tbl);
    }
    public function get()
    {
        return $this-&#x3E;db-&#x3E;get();
    }
    public function getById($id)
    {
        $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;,$id);
        return $this-&#x3E;db-&#x3E;get_first();
    }
}
                </highlight-code>
              </div>
            </div>

            <h3>Edit Controller</h3>
            <p>From the first tutorial, we have created a controller located at <code>app/controller/home.php</code>. For achieving this tutorial, we have to modified the codes.</p>
            <p>First, we have to load new file that we created before <code>a_apikey_model</code>. After that, we have to get the data and put into a variable named <code>$data[&#x27;aakm&#x27;]</code>.</p>
            <pre>
&#x3C;?php
class Home extends SENE_Controller
{
  public function __construct()
  {
    parent::__construct();
    $this-&#x3E;setTheme(&#x27;front&#x27;);
    $this-&#x3E;load(&#x22;a_apikey_model&#x22;, &#x22;aakm&#x22;);
  }
  public function index()
  {
    $data = array();
    $this-&#x3E;setTitle(&#x27;Get The Data!&#x27;);
    $this-&#x3E;setDescription(&#x22;Here is the example for getting the data.&#x22;);
    $this-&#x3E;setKeyword(&#x27;Seme Framework&#x27;);
    $this-&#x3E;setAuthor(&#x27;Seme Framework&#x27;);

    $data[&#x27;aakm&#x27;] = $this-&#x3E;aakm-&#x3E;get();

    $this-&#x3E;putThemeContent(&#x22;home/home&#x22;,$data); //pass data to view
    $this-&#x3E;putJsContent(&#x22;home/home_bottom&#x22;,$data); //pass data to view

    $this-&#x3E;loadLayout(&#x22;col-1&#x22;,$data);
    $this-&#x3E;render();
  }
}
            </pre>

            <h3>Edit View</h3>
            <p>From the first tutorial, we have created view located at <code>app/view/front/home/home.php</code>. For achieving this tutorial, we have to modified the codes for vieweing the data properly.</p>
            <p>First, we have to iterating the array of <code>$aakm</code> and put result on card type html.</p>
            <pre>
&#x3C;div class=&#x22;container&#x22;&#x3E;
  &#x3C;div class=&#x22;row&#x22;&#x3E;
    &#x3C;?php foreach($aakm as $aak) { ?&#x3E;
    &#x3C;div class=&#x22;col m12 s12&#x22;&#x3E;
      &#x3C;div class=&#x22;card rounded preload-any&#x22;&#x3E;
        &#x3C;div class=&#x22;card-content &#x22;&#x3E;
          &#x3C;span class=&#x22;card-title&#x22;&#x3E;[&#x3C;?=$aak-&#x3E;code?&#x3E;] &#x3C;?=$aak-&#x3E;name?&#x3E;&#x3C;/span&#x3E;
          &#x3C;p&#x3E;&#x3C;small&#x3E;&#x3C;?=$aak-&#x3E;cdate?&#x3E;&#x3C;/small&#x3E;&#x3C;/p&#x3E;
          &#x3C;p&#x3E;&#x3C;?=$aak-&#x3E;name.&#x27; ID: &#x27;.$aak-&#x3E;id?&#x3E;&#x3C;/p&#x3E;
          &#x3C;br&#x3E;
          &#x3C;div class=&#x22;btn-group&#x22;&#x3E;
            &#x26;nbsp;
          &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;?php } ?&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

            </pre>

            <h2>Result</h2>
            <p>If you open the <code>http://localhost/seme_framework</code> and view same as screenshot before, so you are achieved this tutorial successfully.</p>
            <figure>
              <img src="~/assets/img/tutorial/chrome-crud-result.png">
            </figure>

          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/tutorial/basic-api/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Tutorial: Introduction
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/tutorial/basic-api/" class="btn">
            Tutorial: Basic API
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
      title: 'Tutorial: Get Data',
      description: 'Pelajari selengkapnya tentang obtaining data from model tutorial by melalui dokumentasi Seme Framework versi 4.0.0.',
      dbCreate: require('~/assets/img/tutorial/phpmyadmin-db-create.png'),
      dbImport: require('~/assets/img/tutorial/phpmyadmin-db-import.png'),
      dbTblList: require('~/assets/img/tutorial/phpmyadmin-db-tables.png'),
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
