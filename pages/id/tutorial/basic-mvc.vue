<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial/">Tutorial</NuxtLink></li>
          <li class="unavailable">Dasar-dasar MVC</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Dasar-dasar MVC</h1>
            <p>
              MVC atau Model View Controller merupakan suatu metode pembangunan perangkat lunak yang memisahkan logika aplikasi menjadi beberapa bagian yang dasarkan pada fungsi suatu bagian tertentu.
              Penyusunan kode didalam Seme Framework akan berupa kelas, properti, dan metode dengan konsep yang sama dengan Pemrograman Berorientasi Objek.
            </p>
            <div class="message is-warning">
              <div class="message-body">
                <p><b>Perhatian</b></p>
                <p>Dalam penjelasan ini mungkin ada yang tidak sesuai dengan kaidah atau teori Pemrograman Berorientasi Objek (PBO).</p>
                <p>Penjelasan ini hanyalah penjelasan singkat tentang penggunaan (<em>Best Practice</em>) dari Seme Framework yang menggunakan konsep Kelas dan Objek.</p>
              </div>
            </div>
            <p>
              Dalam tutorial ini, tidak ada praktek ngoding.
              Hanya ada pembahasan teori bagaimana penggunaan Seme Framework supaya tidak kaget.
              Kadang kala, programmer bingung untuk menggunakan Seme Framework ini, beberapa kode tidak terlihat mata tapi kodenya ada dan dituliskan ketika ngoding.
              Maka untuk menghindari hal tersebut, kita harus belajar memahami dulu bagaimana cara menyusun kode dengan Seme Framework.
            </p>

            <h2>Apa itu Model?</h2>
            <p><b>Model</b> merupakan bagian kode khusus yang berfungsi untuk melakukan komunikasi dari kode yang kita bangun terhadap database. Adapun isi dari model ini biasanya, untuk menarik data, menyimpan data, dan menghapus data dari database.</p>
            <h2>Apa itu View?</h2>
            <p><b>View</b> merupakan kumpulan kode yang khusus digunakan untuk mengeluarkan tampilan. Biasanya pada view ini berisi HTML, JavaScript, CSS, dan sedikit PHP yang hanya digunakan untuk mengeluarkan datanya saja.</p>

            <h2>Apa itu Controller?</h2>
            <p>
              <b>Controller</b> merupakan kode yang berisi sebagai jembatan dari <b>Model &amp; View</b>. Pada bagian ini biasanya berisikan kode PHP beserta logika didalamnya. Controller juga bisa diartikan sebagai identitas dari <i>HTTP Request</i> untuk sebuah halaman web.
            </p>
            <br>
            <amp-img layout="responsive" width="837px" height="458px" src="https://nyingspot.b-cdn.net/wp-content/uploads/2016/11/konsep-mvc-nyingspot.com_.png"></amp-img>
            <p>Dengan pemecahan kode berdasarkan konsep MVC, diharapkan pembangunan aplikasi dapat lebih jelas dan sederhana sehingga lebih mudah untuk dikembangkan dan dikelola dari sisi kode maupun sisi alur proses.</p>

            <h2>Struktur Kelas</h2>
            <p>
              Kelas merupakan konsep penulisan kode dengan mengelompokan sekumpulan kode tertentu menjadi dua bagian utama, yaitu <b>Properti</b> dan <b>Metode</b>.
              Berikut ini adalah contoh bagan struktur kelas di Seme Framework.
            </p>

            <div class="table-responsive">
              <table class="table table-bordered table-fit-content">
                <thead>
                  <tr>
                    <th>
                      [HAK_AKSES] Nama_Kelas
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      [HAK_AKSES] <b><i>var</i></b> <span class="text-info">$nama_properti</span>;
                    </td>
                  </tr>
                  <tr>
                    <td>
                      [HAK_AKSES] <b><i>function</i></b> <span class="text-success">nama_metode()</span>;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


            <h3>Apa itu Properti pada kelas?</h3>
            <p>
              Properti pada kelas merupakan tempat penyimpanan nilai dari kelas tersebut. Properti kalau dalam pemrograman biasa, sering disebut dengan variabel.
            </p>
            <h3>Apa itu Metode pada kelas?</h3>
            <p>
              Metode dapat berisikan kumpulan kode atau logika yang ada pada suatu kelas.
            </p>

            <h3>Hak Akses pada kelas, properti, dan metode</h3>
            <p>
              Baik kelas, properti, ataupun metode memiliki 3 jenis <b>hak akses</b> yaitu:
              <ol>
                <li><b>Public</b></li>
                <li><b>Private</b></li>
                <li><b>Protected</b></li>
              </ol>
            </p>
            <p>
              <b>Hak akses public</b> merupakan hak akses yang bisa diakses di manapun selama kode itu dipanggil.
              Pada umumnya hak akses public ini tidak dituliskan (deklarasikan) secara langsung.
              Jadi setiap Kelas, properti, ataupun metode yang tidak ada awalan public itu akan dianggap public.
            </p>
            <p>Contoh dalam kode</p>
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
                  class Nama_Kelas_Panjang_Sekali {
                    var $properti_ke1;
                    var $properti_ke2;

                    public function nama_metode(){
                      //isi kode php
                    }
                  }

                  //dapat ditulis juga sama dengan

                  public class Nama_Kelas_Panjang_Sekali {
                    public $properti_ke1;
                    public $properti_ke2;

                    public function nama_metode(){
                      //isi kode php
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <p>
              <b>Hak akses private</b> merupakan hak akses yang hanya bisa diakses didalam kelas tersebut.
              Hak akses ini memberikan sifat ekslusif dimana proses kode atau penyimpanan variabel didalam properti untuk tidak dapat diubah oleh pihak luar.
              Begitu juga dengan turunan kelasnya, baik kelas, properti, dan metode ketika memiliki hak akses private tidak dapat mengakses leluhurnya.
            </p>
            <p>Contoh dalam kode:</p>
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
                  private class Nama_Kelas_Panjang_Sekali {
                    var $properti_ke1;
                    private $__properti_ke2;

                    public function nama_metode_public(){
                      //isi kode php
                    }
                    private function __nama_metode_private(){
                      //isi kode php
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Dalam Seme Framework, hak akses private diberi awalan (prefix) undescore dua kali, contoh <code>$__privateVariabel</code>.
            </p>

            <p>
              <b>Hak akses protected</b> merupakan hak akses yang hanya bisa diakses didalam kelas tersebut dan turunannya. Perbedaan dengan hak akses private adalah hak akses private tidak mengizinkan siapapun mengeksekusi atau merubah properti dan metode yang ada pada kelas tersebut.
            </p>

            <h3>Pewarisan (<em>Inheritance</em>) pada Kelas</h3>
            <p>
              Kelas dapat diturunkan atau diwariskan supaya nilai dari properti ataupun logika yang ada pada metode tidak usah ditulis ulang.
              Dengan memanfaatkan pewarisan ini, penggunaan Seme Framework akan menyingkat proses pembuatan aplikasi.
              Karena sebagian kode yang menampung logika tertentu tinggal digunakan.
              Untuk penggunaan kembali kode yang sudah ada ini, disebut dengan Inheritance atau Pewarisan.
            </p>

            <h4>Cara atau perintah untuk menurunkan kelas</h4>
            <p>
              Untuk menurunkan sebuah kelas dari Seme Framework, menggunakan kode atau perintah <code>extends</code>.
              Dimana perintah <code>extends</code> ini akan mengacu kepada nama kelas yang menjadi orang tuanya (<em>Parent Class</em>).
            </p>

            <h4>
              Contoh koding pewarisan di Seme Framework.
            </h4>
            <p>
              Dalam Seme Framework ada kelas <code>SENE_Controller</code>, yang mana kelas ini sudah dibuat sedemikian rupa supaya dapat digunakan kembali.
            </p>
            <p>
              Berikut ini adalah contoh kelas <code>SENE_Controller</code> yang sudah ada didalam Seme Framework dan akan dijadikan orang tua (<em>parent class</em>) oleh kelas <code>Home</code>.
              Silahkan pahami potongan sebagian kodenya.
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
                  class SENE_Controller {
                    .
                    .
                    .
                    public function load($model_file_name){
                      if(file_exists(SEMEROOT.&#x27;app/model/&#x27;.$model_file_name.&#x27;.php&#x27;)){
                        require_once SEMEROOT.&#x27;app/model/&#x27;.$model_file_name.&#x27;.php&#x27;;
                      }else{
                        trigger_error(&#x27;could not find require_once library &#x27;.$item.&#x27;&#x27;);
                      }
                    }
                    .
                    .
                    .
                  }
                </highlight-code>
              </div>
            </div>

            <p>
              Kemudian kelas <code>SENE_Controller</code> ini akan diturunkan menjadi kelas <code>Home</code> untuk menampilkan halaman utama menggunakan Seme Framework.
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
                    public function index(){
                      $this-&#x3E;load(&#x27;d_blog_model&#x27;);
                      // ini memanggil metode load dari SENE_Controller
                      // tanpa harus ngoding lagi
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Kode <code>$this</code></h3>
            <p>
              Penulisan kode <code>$this</code> ketika sedang dalam kelas controller, maka itu akan mengacu ke kelas controller.
              Begitupun ketika dalam kelas model, maka akan mengacu kedalam kelas model tersebut.
              Kode <code>$this</code> ini bisa memiliki banyak arti tergantung dimana kode ini dituliskan.
              Kondisi penulisan kode <code>$this</code> ini disebut dengan penulisan kode kontekstual.
              Dimana kode <code>$this</code> akan bergantung terhadap posisi penulisan kode ini berada.
            </p>
            <p>
              Dalam penjelasan saat ini kita akan fokus terhadap kelas <code>Home</code> dan kelas <code>SENE_Controller</code> yang mana sudah dijelaskan dalam potongan kode diatas.
              Konteks <code>$this</code> dalam contoh kode diatas akan mengacu pada <b>method</b> atau <b>properti</b> baik dalam kelas <code>Home</code> maupun kelas <code>SENE_Controller</code>.
            </p>
            <p>
              Setiap perintah <code>$this</code> isinya akan berbeda-beda tergantung kelas utama dan kelas yang di <code>extends</code>-nya.
              Yang mebedakannya adalah akan mengacu terhadap properti apabila tidak diakhiri dengan simbol kurung <code>()</code>.
              Dan akan mengarah ke metode apabila diakhiri dengan simbol kurung <code>()</code>.
            </p>
            <p>
              Untuk lebih jelasnya mari kita perhatikan dengan baik contoh penulisan kode <code>$this</code> dalam 2 konteks yang berbeda.
            </p>

            <h4>Contoh koding <code>$this</code> dalam konteks Controller</h4>
            <p>
              Berikut ini adalah contoh koding dalam konteks Controller.
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
                    public function index(){
                      $this-&#x3E;load(&#x27;d_blog_model&#x27;);
                      // ini memanggil metode load dari SENE_Controller
                      // tanpa harus ngoding lagi
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Dalam contoh konteks ini, kode <code>$this-&#x3E;load</code> mengacu pada metode yang ada pada <code>SENE_Controller</code>.
            </p>

            <h4>Contoh koding <code>$this</code> dalam konteks Model</h4>
            <p>
              Berikut ini adalah contoh koding dalam konteks Model
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
                  class B_User_Model extends SENE_Model {
                    public $nama_tabel = &#x27;b_user&#x27;;

                    public function tambah_data(){
                      $data_baru = array(&#x27;nama&#x27;=&#x3E;&#x27;Sandi&#x27;,&#x27;Kelas&#x27;=&#x3E;&#x27;2c&#x27;);
                      return $this-&#x3E;db-&#x3E;insert(
                      $this-&#x3E;nama_tabel,
                      $data_baru
                      );
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Pada kodingan contoh Model, ada 2 perintah <code>$this</code>.
            </p>
            <ol>
              <li>
                <p>
                  <code>$this</code> yang pertama mengacu pada properti <code>$db</code> yang ada di dalam <code>SENE_Model</code>.
                </p>
                <p>
                  Properti <code>$db</code> tidak ada dalam kelas <code>B_User_Model</code> karena properti tersebut adanya di <code>SENE_Model</code>.
                </p>
                <p>
                  Kemudian, properti <code>$db</code> itu mengacu terhadap kelas <code>SENE_MySQLi_Engine</code>.
                  Jadi, <code>SENE_Model</code> itu memiliki properti <code>$db</code> yang berisi <code>SENE_MySQLi_Engine</code>.
                </p>
                <p>
                  Begitu juga kodingan <code>$this-&#x3E;db-&#x3E;insert</code>, isi kodenya ada di dalam <code>SENE_MySQLi_Engine</code> bukan di dalam kelas <code>SENE_Model</code>.
                </p>
                <p>&nbsp;</p>
              </li>
              <li>
                <p>
                  Sementara pada <code>$this</code> kedua, pada kodingan <code>$this-&#x3E;nama_tabel</code> mengacu pada properti <code>$nama_tabel</code> yang ada di dalam kelas <code>B_User_Model</code>. Kodingnya pun bisa kita lihat, karena ada didalam kelas yang sama.
                </p>
                <p>
                  Jadi, properti <code>$nama_tabel</code> itu tidak ada di dalam <code>SENE_Model</code> maupun <code>SENE_MySQLi_Engine</code>.
                </p>
              </li>
            </ol>

            <div class="message is-info">
              <div class="message-body">
                Pelajari selengkapnya tentang perutean di halaman <NuxtLink to="/id/uri_routing/">URI Routing</NuxtLink>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/tutorial/basic-php/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Basic PHP
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/tutorial/basic-routing/" class="btn">
            Basic Routing
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
      title: 'Tutorial Dasar MVC',
      description: 'Mari kita pahami dan pelajari bagaimana cara menulis kode dengan Seme Framework',
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
        "dateCreated": "2020-06-24T22:43:31+07:00",
        "datePublished": "2020-06-24T22:43:39+07:00",
        "dateModified": "2021-06-25T00:03:00+07:00",
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
