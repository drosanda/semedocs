<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial/">Tutorial</NuxtLink></li>
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
              <li>IDE atau Editor Teks sudah terinstall dan bisa digunakan</li>
              <li>Peramban / Browser seperti Chrome atau Firefox</li>
              <li><NuxtLink to="/id/tutorial/introduction/">Menyelesaikan tutorial pertama</NuxtLink></li>
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
            <amp-img layout="responsive" width="1486px" height="1260px" alt="PMA DB Import" :src="dbImport"></amp-img>
            <p>Setelah mengimpor SQL, Anda dapat melihat tabel baru yang sudah ditambahkan ke database.</p>
            <amp-img layout="responsive" width="1862px" height="984px" alt="PMA DB table List" :src="dbTblList"></amp-img>

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

            <h3>Edit File Controller</h3>
            <p>Dari tutorial pertama, kami telah membuat pengontrol yang terletak di dalam direktori <code>app/controller/home.php</code>. Untuk menyelesaikan tutorial ini, kita harus menambahkan dan merubah beberapa dengan kode-kode tertentu.</p>

            <p>Pertama, kita harus buka file <code>home.php</code> yang ada di dalam direktori <code>app/controller</code>. Setelah itu, kita harus mendapatkan data dan memasukkannya ke dalam variabel bernama <code>$data[&#x27;aakm&#x27;]</code>.</p>

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
                </highlight-code>
              </div>
            </div>

            <h3>Edit View</h3>
            <p>Dari tutorial pertama, kami telah membuat tampilan yang terletak di <code>app/view/front/home/home.php</code>. Kemudian edit kode yang ada didalam file tersebut supaya bisa menampilkan data.</p>
            <p>Pertama, kita harus menelusuri array yang berisi dari variabel <code>$aakm</code> dan letakkan hasilnya dalam template html. Template html ini nantinya akan dibuat menjadi tampilan <a href="https://materializecss.com/cards.html" target="_blank">kartu / card dari MaterializeCSS</a>.</p>

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

                </highlight-code>
              </div>
            </div>

            <h2>Hasil Akhir</h2>
            <p>Apabila kita buka alamat <code>http://localhost/seme_framework/</code> melalui browser, maka akan menampilkan seperti apa yang ada didalam screenshot dibawah ini. Apabila tampilannya sudah sama persis, maka tutorial ini sudah berhasil dikuasai.</p>
            <amp-img layout="responsive" width="888px" height="782px" alt="hasil akhir tutorial" :src="getDataResult"></amp-img>

          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/tutorial/introduction/" class="btn">
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
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'Tutorial: Get Data',
      description: 'Pelajari selengkapnya tentang obtaining data from model tutorial by melalui dokumentasi Seme Framework versi 4.0.0.',
      dbCreate: require('~/assets/img/tutorial/phpmyadmin-db-create.png'),
      dbImport: require('~/assets/img/tutorial/phpmyadmin-db-import.png'),
      dbTblList: require('~/assets/img/tutorial/phpmyadmin-db-tables.png'),
      getDataResult: require('~/assets/img/tutorial/chrome-crud-result.png'),
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
          text: 'tutorial',
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
  jsonld() { this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
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
