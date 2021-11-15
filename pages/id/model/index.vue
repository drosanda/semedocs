<template>
<div class="section">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul class="breadcrumbs">
            <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
            <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
            <li class="unavailable">Model</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Model</h1>
          <p>
            Kelas Model dalam Seme Framework merupakan kumpulan kode yang dibuat secara <code>manual</code> untuk berinteraksi dengan sistem database yang diturunkan dari kelas <code>SENE_Model</code> atau dari turunannya.
            Dengan dipisahkannya logika utama dengan logika untuk komunikasi dengan sistem database, diharapkan dapat meningkatkan <a href="https://en.wikipedia.org/wiki/Reusability" target="_blank">reusability <i class="fa fa-external-link"></i></a> dan kerapihan penempatan file kode sumber.
          </p>

          <h2>Daftar Isi</h2>
          <ul>
            <li>
              <NuxtLink to="/id/model/#syarat_ketentuan">Syarat dan Ketentuan</NuxtLink>
              <ul>
                <li>
                  <NuxtLink to="/id/model/#syarat_ketentuan_lokasi">Lokasi</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/id/model/#aturan_penamaan">Aturan Penamaan</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/id/model/#one_on_one">1 kelas dalam 1 file</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/id/model/#turunan_kelas">Turunan Kelas</NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <NuxtLink to="/id/model/#SENE_Model">SENE_Model</NuxtLink>
              <ul>
                <li>
                  <NuxtLink to="/id/model/#SENE_Model_sinopsis">Sinopsis Kelas</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/id/model/#properti_db">$db</NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <NuxtLink to="/id/model/#query_builder">Query Builder</NuxtLink>
              <ul>
                <li>
                  <NuxtLink to="/id/model/#kelebihan">Kelebihan</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/id/model/#kekurangan">Kekurangan</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/id/model/#cara_pengunaan">Cara Penggunaan</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/id/model/#debug_sql">Debugging</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>

          <h2 id="syarat_ketentuan">Syarat dan Ketentuan</h2>
          <p>
            Berikut ini adalah syarat dan ketentuan yang harus dipenuhi ketika ingin menggunakan kelas Model dengan benar supaya dapat berjalan dengan baik.
          </p>

          <h3 id="syarat_ketentuan_lokasi">Lokasi</h3>
          <p>
            Semua file model di simpan di dalam direktori <code>app/model</code>.
          </p>

          <h4>Pembuatan Direktori</h4>
          <p>
            Pembuatan direktori untuk model diperbolehkan selama masih di dalam <code>app/model</code>.
          </p>

          <h4>Struktur File dan Direktori Kelas Model</h4>
          <p>
            Berikut ini adalah contoh ilustrasi lokasi file dan direktori untuk kelas model
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
              └── model/
                ├── front/
                | ├── user_model.php
                | └── blog_model.php
                └── admin/
                  ├── user_model.php
                  └── blog_model.php
              </highlight-code>
            </div>
          </div>

          <h3 id="aturan_penamaan">Aturan Penamaan</h3>
          <p>
            Ada beberapa aturan untuk penamaan kelas model. Namun biasanya, 1 kelas model merepresentasikan 1 tabel pada sistem database.
            Nama kelas dan nama file harus identik tapi tidak harus sama dalam kapitalisasi huruf (<em>lowercase</em> &amp <em>uppercase</em>).
            Aturan penamaan ini dibuat supaya kegunaan, nama file dan kelas model tidak ambigu.
          </p>

          <h4>Nama File</h4>
          <p>
            Untuk nama file, sesuaikan dengan nama tabel dan diberi akhiran <code>_model.php</code>.
            Nama file hanya boleh menggunakan huruf kecil (<em>lowercase</em>), angka dan underscore sebagai pemisah.
            Tapi tidak boleh diawali oleh angka dan underscore.
            Contoh nama tabelnya <code>b_user</code> jadi nama file modelnya <code>b_user_model.php</code>.
          </p>

          <h4>Nama Kelas</h4>
          <p>
            Nama kelas sesuaikan dengan nama tabel dan diberi akhiran <code>_Model</code>.
            Nama kelas hanya boleh menggunakan huruf, angka, dan underscore sebagai pemisah.
            Tapi tidak boleh diawali dengan angka atau underscore.
            Setiap awalan huruf dan atau setelah pemisah underscore dimulai dengan huruf kapital (<em>uppercase</em>).
            Contoh nama tabelnya <code>b_user</code> jadi nama kelas modelnya <code>B_User_Model</code>.
          </p>

          <h3 id="one_on_one">Jumlah Kelas dalam 1 file</h3>
          <p>
            Kelas model di Seme Framework hanya boleh menampung <b>1 kelas model</b> dalam <b>1 file</b> model.
            Contoh untuk tabel <code>b_user</code> pada file model <code>b_user_model.php</code> hanya memiliki kelas <code>B_User_Model</code>, tidak ada kelas model lainnya dalam satu file yang sama.
          </p>

          <h3 id="turunan_kelas">Turunan Kelas</h3>
          <p>
            Model harus menurunkan kelas dengan kode <code>extends</code> dari kelas <code>SENE_Model</code>.
            Begitupun juga ketika menggunakan fitur <NuxtLink to="/id/core/model/">Core <i class="fa fa-window-restore"></i></NuxtLink>, kelas model core harus menurunkan dengan cara yang sama.
          </p>

          <h4>Konstruktor</h4>
          <p>
            Setiap kelas model wajib mendeklarasikan <code>konstruktor kelas</code> dan <code>costructor parent</code>-nya.
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
                class Blog_Model extends SENE_Model{
                  var $tbl = &#x27;blog&#x27;;
                  var $tbl_as = &#x27;b&#x27;;
                  public function __construct(){
                    parent::__construct();
                    ...
                  }
                  ...
                }
              </highlight-code>
            </div>
          </div>

          <h2 id="SENE_Model">Kelas SENE_Model</h2>
          <p>
            Kelas SENE_Model merupakan kelas dasar yang telah memiliki berbagai fungsi (metode) didalamnya untuk keperluan komunikasi dengan sistem databse untuk pembangunan aplikasi berbasis web menggunakan Seme Framework.
            Ada banyak metode dan properti yang telah tersedia pada kelas SENE_Model ini.
          </p>

          <h3 id="SENE_Model_sinopsis">Sinopsis Kelas SENE_Model</h3>
					<p>
            Berikut ini adalah sinopsis atau gambaran isi kelas SENE_Model.
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
                abstract class SENE_Model
                {
                    public $db;
                    protected $directories;
                    protected $config;
                    public $field = array();

                    public function __construct(){ ... }
                    private function loadEngine($db) { ... }
                    public function __encrypt($val) { ... }
                    public function __decrypt($val) { ... }
                    public function __decrypt($val) { ... }
                }
              </highlight-code>
            </div>
          </div>

					<h3 id="properti_db">Properti $db</h3>
					<p>
            Properti <code>$db</code> pada kelas SENE_Model berisikan properti dan metode untuk berinteraksi dengan sistem database.
            Adapun tujuan dari properti kelas ini adalah menghasilkan kode <code>SQL</code> yang cocok terhadap sistem database tertentu tanpa perlu menghafal kode <code>SQL</code>.
            Didalam properti ini juga ada kumpulan metode untuk melakukan proses Query Builder.
          </p>

					<h2 id="query_builder">Query Builder</h2>
          <p>
            Query Builder merupakan <b>kumpulan metode</b> yang ada pada properti <code>$db</code> di dalam kelas <code>SENE_Model</code> yang dapat digunakan untuk menyusun kode <code>SQL</code>.
            Metode ini dapat digunakan secara berantai, dan diakhiri oleh <b>metode pengakhiran</b> seperti <NuxtLink to="/id/model/get/" target="_blank">get <i class="fa fa-window-restore"></i></NuxtLink>, atau <NuxtLink to="/id/model/get_first/" target="_blank">get_first <i class="fa fa-window-restore"></i></NuxtLink>, atau <NuxtLink to="/id/model/insert/" target="_blank">insert <i class="fa fa-window-restore"></i></NuxtLink>, atau <NuxtLink to="/id/model/insert/" target="_blank">update <i class="fa fa-window-restore"></i></NuxtLink>, atau <NuxtLink to="/id/model/delete/" target="_blank">delete <i class="fa fa-window-restore"></i></NuxtLink>.
          </p>

          <h3 id="kelebihan">Kegunaan Query Builder</h3>
          <p>
            Berikut ini adalah beberapa kegunaan dengan menggunakan query builder:
            <ul>
              <li>
                Mempercepat dan mempermudah proses pembuatan kelas model di Seme Framework.
              </li>
              <li>
                Tidak usah menghafal urutan pengkodisian kode SQL. Query Builder urutan kondisinya bebas, selama diakhiri oleh metode pengakhiran.
              </li>
              <li>
                Tidak usah ganti kode ketika ganti sistem database. Kode <code>SQL</code> untuk setiap sistem database berbeda. Dengan Query Builder ini akan otomatis memilihkan kode SQL yang cocok dengan sistem database yang dipakai.
              </li>
            </ul>
          </p>
          <h3 id="kekurangan">Kelemahan Query Builder</h3>
          <p>
            Berikut ini adalah beberapa kelemahan dengan menggunakan query builder:
            <ul>
              <li>
                Query Builder terbatas, tidak sebebas query <code>SQL</code> secara manual.
              </li>
              <li>
                Query Builder tidak dapat menjalankan query yang sangat kompleks.
              </li>
            </ul>
          </p>
          <p>
            Meskipun ada kelemahannya, Seme Framework telah menyediakan metode khusus sebagai alternatif untuk mengeksekusi kode <code>SQL</code> secara manual, yaitu dengan menggunakan metode <NuxtLink to="/id/model/query/">Query <i class="fa fa-window-restore"></i></NuxtLink>.
          </p>

          <h3 id="cara_pengunaan">Cara Menggunakan Query Builder</h3>
          <p>
            Berikut ini adalah beberapa cara penggunaan untuk Query Builder.
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
class Blog_Model extends SENE_Model{
  var $tbl = &#x27;blog&#x27;;
  var $tbl_as = &#x27;b&#x27;;
  public function __construct(){
    parent::__construct();
  }
  public function getAll(){
    $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
    return $this-&#x3E;db-&#x3E;get();
  }
  public function countAll(){
    $this-&#x3E;db-&#x3E;select_as(&#x27;COUNT(*)&#x27;,&#x27;total&#x27;,0);
    $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
    $d = $this-&#x3E;db-&#x3E;get_first();
    if(isset($d-&#x3E;total)) return $d-&#x3E;total;
    return 0;
  }
  public function getById($id){
    $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;,$id);
    $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
    return $this-&#x3E;db-&#x3E;get_first();
  }
  public function set($di=array()){
    $this-&#x3E;db-&#x3E;insert($this-&#x3E;tbl,$di);
    return $this-&#x3E;db-&#x3E;last_id;
  }
  public function update($id,$du=array()){
    $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;,$id);
    return $this-&#x3E;db-&#x3E;update($this-&#x3E;tbl,$du);
  }
  public function del($id){
    $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;,$id);
    return $this-&#x3E;db-&#x3E;delete($this-&#x3E;tbl);
  }
}
              </highlight-code>
            </div>
          </div>

					<h3 id="debug_sql">Debug SQL</h3>
					<p>
            Seme Framework memiliki fitur atau penanda (<em>flag</em>) untuk melakukan debug terhadap query atau kode <code>SQL</code> yang dilakukan. Cukup menambahkan penanda 1 pada akhir parameter dari setiap metode yang digunakan.
          </p>
					<ul>
						<li>$this-&#x3E;db-&#x3E;get(&#x27;object&#x27;,<code>1</code>)</li>
						<li>$this-&#x3E;db-&#x3E;get_first(&#x27;object&#x27;,<code>1</code>)</li>
						<li>$this-&#x3E;db-&#x3E;insert($this-&#x3E;tbl,$di,0,<code>1</code>)</li>
						<li>$this-&#x3E;db-&#x3E;update($this-&#x3E;tbl,<code>1</code>);</li>
						<li>$this-&#x3E;db-&#x3E;delete($this-&#x3E;tbl,<code>1</code>);</li>
					</ul>
        </div>
      </div>

    </div>

    <div class="nav-bottom">
      <div class="nav-bottom-left">
        <nuxt-link to="/id/globals/" class="btn">
        <i class="fa fa-chevron-left"></i>
          Variabel Global
        </nuxt-link>
      </div>
      <div class="nav-bottom-right">
        <nuxt-link to="/id/model/between/" class="btn">
          Metode between
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
      title: 'Kelas Model',
      description: 'Pelajari selengkapnya tentang Kelas Model of melalui dokumentasi Seme Framework versi 4.0.0.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id',
          text: 'ID',
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
