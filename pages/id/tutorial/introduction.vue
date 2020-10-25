<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial">Tutorial</NuxtLink></li>
          <li class="unavailable">Perkenalan</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1 class="">Perkenalan penggunaan Seme Framework</h1>
            <p>Sebelum memulai tutorial, Anda harus melakukan yang dijelaskan pada <NuxtLink to="/id/requirements">halaman persyaratan</NuxtLink>  terlebih dahulu.</p>
            <p>Tujuan dari tutorial ini adalah, bagaimana berinteraksi dengan View dan Controller. Interaksi model akan dibahas pada tutorial berikutnya.</p>

            <figure class="image">
              <img src="~/assets/img/tutorial/introduction/hello-world.png" alt="Seme Framework hello world controller" />
            </figure>

            <p>Baiklah kita mulai!</p>
            <hr>
            
            <h2>Hello World!</h2>
            <p>Hello World sering digunakan untuk menggambarkan sintaks dasar dari suatu bahasa pemrograman.</p>
            <p>Tetapi pada Seme Framework, Hello World Hello World digunakan untuk memeriksa tujuan dasar MVC.</p>

            <h3>Penyesuaian konfigurasi</h3>
            <p>Asumsikan Seme Framework telah di instal sesuai dengan halaman <NuxtLink to="/id/downloads">Download &amp; Install</NuxtLink>.</p>
            <p>Setelah itu, jalankan XAMPP dan buka <code>http://localhost/seme_framework</code> melalui google chrome atau firefox.</p>

            <h3>Controller</h3>
            <p>Seme framework memiliki default controller yang bernama <code>home.php</code> dengan nama kelas yang sama yaitu <code>Home</code>.</p>
            <p>
              Pertama, buka file yang terletak di <code>app/controller/home.php</code>.
              Apabila tidak ada file atau direktori tersebut, buatlah terlebih dahulu.
            </p>
            <pre>
              <code v-highlight class="php">&#x3C;?php
class Home extends SENE_Controller
{
    public function __construct()
    {
        parent::__construct();
    }
    public function index()
    {
        echo 'Hello World!';
    }
}</code>
            </pre>
            <p>Kemudian buka alamat <code>http://localhost/seme_framework</code>, itu seharusnya sudah memunculkan Hello World! langsung dari kelas home.php controller.</p>
            <figure>
              <img src="~/assets/img/hello-world.png" >
            </figure>

            <hr>

            <h3>View</h3>
            <p>Pada tutorial ini kita akan mempelajari cara merender tampilan dengan tema dan meneruskan data dari controller ke tampilan yang dilewatkan oleh controller.</p>

            <b-message class="is-success">
              <p>Tutorial ini menggunakan <a href="https://materializecss.com/" target="_blank">materializeCSS</a> sebagai library CSS-nya.</p>
            </b-message>
            <h4>Membuat tema: <u>front</u>.</h4>
            <p>Sebelum memulai, kita harus memahami struktur direktori tema.</p>
            <pre><code v-highlight class="plaintext">-| app/
---| view/
-----| front/
-------| theme.json
-------| script.json
-------| page/
---------| col-1.php
-----------| html/
-------------| head.php</code></pre>
            <p>Periksa direktori <code>app/view/front/</code> apabila belum ada, silakan buat direktori tersebut.</p>
            <p>Periksa direktori <code>app/view/front/page/</code> apabila belum ada, silakan buat direktori tersebut.</p>
            <p>Periksa direktori <code>app/view/front/page/html/</code> apabila belum ada, silakan buat direktori tersebut.</p>

            <h5>File theme.json</h5>
            <p>File theme.json digunakan untuk mendefinisikan css apa saja yang akan digunakan oleh tema.</p>
            <p>Buka file yang terletak di <code>app/view/front/theme.json</code>.</p>
            <p>apabila belum ada, silakan buat file tersebut dan <i>paste</i>-kan isinya dari kode dibawah ini.</p>

            <pre><code v-highlight class="json">
[
  &#x22;&#x3C;link rel=\&#x22;stylesheet\&#x22; href=\&#x22;https://fonts.googleapis.com/icon?family=Material+Icons\&#x22; \/&#x3E;&#x22;,
  &#x22;&#x3C;link rel=\&#x22;stylesheet\&#x22; href=\&#x22;https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\&#x22; \/&#x3E;&#x22;
]</code></pre>
            <h5>File script.json</h5>
            <p>File script.json digunakan untuk mendefinisikan file javascript apa saja yang akan digunakan oleh tema.</p>
            <p>Seme Framework akan menentukan skrip mana yang akan dimuat. Buka file yang terletak di <code>app/view/front/script.json</code>.</p>
            <p>apabila belum ada, silakan buat file tersebut dan <i>paste</i>-kan isinya dari kode dibawah ini.</p>
            <pre><code v-highlight class="json">
[
  &#x22;&#x3C;script src=\&#x22;https://code.jquery.com/jquery-3.5.1.min.js\&#x22;&#x3E;&#x3C;\/script&#x3E;&#x22;,
  &#x22;&#x3C;script src=\&#x22;https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\&#x22;&#x3E;&#x3C;\/script&#x3E;&#x22;
]</code></pre>
            <h5>Membuat layout HTML utama</h5>
            <p>Seme Framework mendukung tata letak utama HTML untuk rendering html, javascript, dan konten.</p>
            <p>Buka file yang terletak di <code>app/view/front/page/col-1.php</code>.</p>
            <p>apabila belum ada, silakan buat file tersebut dan <i>paste</i>-kan isinya dari kode dibawah ini.</p>

            <pre><code v-highlight class="php-template">&#x3C;!DOCTYPE html&#x3E;
&#x3C;html&#x3E;
  &#x3C;?php $this-&#x3E;getThemeElement(&#x27;page/html/head&#x27;, $__forward) ?&#x3E;
  &#x3C;body&#x3E;
    &#x3C;?php $this-&#x3E;getThemeContent() ?&#x3E;

  &#x9;&#x3C;!-- jQuery, Bootstrap.js, jQuery plugins and Custom JS code --&#x3E;
  &#x9;&#x3C;?php $this-&#x3E;getJsFooter(); ?&#x3E;

  &#x9;&#x3C;!-- Load and execute javascript code used only in this page --&#x3E;
    &#x3C;script&#x3E;
  &#x9;&#x9;$(document).ready(function(e){
  &#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getJsReady(); ?&#x3E;
  &#x9;&#x9;});
  &#x9;&#x9;&#x3C;?php $this-&#x3E;getJsContent(); ?&#x3E;
  &#x9;&#x3C;/script&#x3E;
  &#x3C;/body&#x3E;
&#x3C;/html&#x3E;
</code></pre>
            <b-message type="is-info">
              <p>Hanya ada satu variabel yang dapat melewati view dari controller.</p>
              <p>Jadi, kita harus meletakkan variabel apa pun yang akan ditampilkan dalam array tunggal.</p>
              <p>Dalam contoh ini Seme Framework menggunakan variabel <code>$data</code> dengan tipe data array didalam controller <code>home.php</code>.</p>
            </b-message>

            <h5>Pemisahan bagian HEAD dari HTML</h5>
            <p>Dengan menggunakan Seme Framework memungkinkan untuk memisahkan komponen html untuk memaksimalkan penggunaan kembali komponen HTML tersebut.</p>
            <p>Untuk melakukannya, buka file yang terletak di <code>app/view/front/page/html/head.php</code>.</p>
            <p>apabila belum ada, silakan buat file tersebut dan <i>paste</i>-kan isinya dari kode dibawah ini.</p>
            <pre><code v-highlight class="php-template">&#x3C;head&#x3E;
&#x9;&#x3C;meta charset=&#x22;utf-8&#x22;&#x3E;
&#x9;&#x3C;meta name=&#x22;viewport&#x22; content=&#x22;width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no&#x22;&#x3E;

&#x9;&#x3C;title&#x3E;&#x3C;?=$this-&#x3E;getTitle()?&#x3E;&#x3C;/title&#x3E;

&#x9;&#x3C;meta name=&#x22;description&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getDescription()?&#x3E;&#x22;&#x3E;
&#x9;&#x3C;meta name=&#x22;keyword&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getKeyword()?&#x3E;&#x22;/&#x3E;
&#x9;&#x3C;meta name=&#x22;author&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getAuthor()?&#x3E;&#x22;&#x3E;
&#x9;&#x3C;meta name=&#x22;robots&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getRobots()?&#x3E;&#x22; /&#x3E;

&#x9;&#x3C;!-- Icons --&#x3E;
&#x9;&#x3C;!-- The following icons can be replaced with your own, they are used by desktop and mobile browsers --&#x3E;
&#x9;&#x3C;link rel=&#x22;shortcut icon&#x22; href=&#x22;&#x3C;?=$this-&#x3E;getIcon()?&#x3E;&#x22;&#x3E;
&#x9;&#x3C;!-- END Icons --&#x3E;

&#x9;&#x3C;meta name=&#x22;msapplication-TileColor&#x22; content=&#x22;#353769&#x22;&#x3E;
&#x9;&#x3C;meta name=&#x22;theme-color&#x22; content=&#x22;#353769&#x22;&#x3E;
&#x9;&#x3C;?php $this-&#x3E;getAdditionalBefore()?&#x3E;
&#x9;&#x3C;?php $this-&#x3E;getAdditional()?&#x3E;
&#x9;&#x3C;?php $this-&#x3E;getAdditionalAfter()?&#x3E;
&#x3C;/head&#x3E;</code></pre>

            <b-message type="is-info">
              <p>Pengaturan tema di Seme Framework membutuhkan file dibawah ini supaya dapat berjalan dengan baik:</p>
              <ol>
                <li><code>theme.json</code>,</li>
                <li><code>script.json</code>,</li>
                <li>dan sebuah file untuk layout HTML. Contoh: <code>page/col-1.php</code> </li>
              </ol>
              <p>Jadi, kita harus meletakkan variabel apa pun yang akan ditampilkan dalam array tunggal.</p>
            </b-message>

            <b-message type="is-info">
              <p><code>$data[&#x27;hello&#x27;]</code> dari controller, akan diekstraksi secara otomatis menjadi variabel <code>$hello</code> ketika berada didalam view.</p>
              <p>Begitupun dengan nilai atau kunci lainnya, akan diekstraksi secara otomatis juga.</p>
            </b-message>

            <h5>Membuat isi tema</h5>
            <p>Seme Framework mendukung konten tema yang terpisah. Konten ini akan dirender pada tata letak utama bagian dalam.</p>
            <p>Untuk melakukanya, buka file yang terletak di <code>app/view/front/home/home.php</code>.</p>
            <p>Apabila file tersebut belum ada, silakan buat file-nya dulu, kemudian <i>paste</i>-kan kode dibawah ini.</p>

            <pre><code v-highlight class="php-template">&#x3C;div class=&#x22;container&#x22;&#x3E;
  &#x3C;div class=&#x22;row&#x22;&#x3E;
    &#x3C;div class=&#x22;col m12 s12&#x22;&#x3E;
      &#x3C;div class=&#x22;card rounded preload-any&#x22;&#x3E;
        &#x3C;div class=&#x22;card-content &#x22;&#x3E;
          &#x3C;span class=&#x22;card-title&#x22;&#x3E;&#x3C;?=$hello?&#x3E; passed to view&#x3C;/span&#x3E;
          &#x3C;p&#x3E;This is from view only&#x3C;/p&#x3E;
          &#x3C;br&#x3E;
          &#x3C;div class=&#x22;btn-group&#x22;&#x3E;
            &#x26;nbsp;
          &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;</code></pre>

            <h5>Implementasi di Controller</h5>
            <p>Setelah membuat tema, beserta isinya sekarang saatnya untuk integrasikan semuanya, mulai dari Controller sampai dengan view.</p>
            <p>Untuk melakukannya, buka file <code>app/controller/home.php</code> kemudian edit isinya dengan menggunakan kode dibawah ini:</p>
            <pre><code v-highlight class="php-template">&#x3C;?php
class Home extends SENE_Controller
{
  public function __construct()
  {
    parent::__construct();
    $this-&#x3E;setTheme(&#x27;front&#x27;);
  }
  public function index()
  {
    $data = array();
    $this-&#x3E;setTitle(&#x27;Seme Framework Introduction!&#x27;);
    $this-&#x3E;setDescription(&#x22;Congratulation, you have done well.&#x22;);
    $this-&#x3E;setKeyword(&#x27;Seme Framework&#x27;);
    $this-&#x3E;setAuthor(&#x27;Seme Framework&#x27;);

    $data[&#x27;hello&#x27;] = &#x22;this is from controller&#x22;;

    $this-&#x3E;putThemeContent(&#x22;home/home&#x22;,$data); //pass data to view

    $this-&#x3E;loadLayout(&#x22;col-1&#x22;,$data);
    $this-&#x3E;render();
  }
}
</code></pre>
            <h5>Melihat hasilnya</h5>
            <p>Untuk melihat hasil dari pembuatan tema ini, cukup buka alamat <code>http://localhost/seme_framework</code> melalui google chrome atau firefox.</p>
            <p>Kemudian, kita lihat hasilnya apakah sama seperti <i>screenshot</i> dibawah ini.</p>
            <figure>
              <img src="~/assets/img/tutorial/introduction/6a.png">
            </figure>

            <hr>

            <h4>Bonus Mission</h4>
            <p>With the main layout that we have created before, we can include and render javascript using Seme Framework.</p>
            <p>For achieving this, first create the file <code>app/view/front/home/home_bottom.php</code>.</p>
            <p>And then, put this code on it.</p>
            <pre><code v-highlight class="javascript">alert(&#x27;This is Hello World from app/view/home/home_bottom.php&#x27;);</code></pre>
            <p>After that, we have to load the home bottom from <code>app/controller/home.php</code>.</p>
            <pre><code v-highlight class="php-template">&#x3C;?php
class Home extends SENE_Controller
{
  public function __construct()
  {
    parent::__construct();
    $this-&#x3E;setTheme(&#x27;front&#x27;);
  }
  public function index()
  {
    $data = array();
    $this-&#x3E;setTitle(&#x27;Seme Framework Introduction!&#x27;);
    $this-&#x3E;setDescription(&#x22;Congratulation, you have done well.&#x22;);
    $this-&#x3E;setKeyword(&#x27;Seme Framework&#x27;);
    $this-&#x3E;setAuthor(&#x27;Seme Framework&#x27;);

    $data[&#x27;hello&#x27;] = &#x22;this is from controller&#x22;;

    $this-&#x3E;putThemeContent(&#x22;home/home&#x22;,$data); //pass data to view
    $this-&#x3E;putJsContent(&#x22;home/home_bottom&#x22;,$data); //pass data to view

    $this-&#x3E;loadLayout(&#x22;col-1&#x22;,$data);
    $this-&#x3E;render();
  }
}</code></pre>
            <p>To test it, open <code>http://localhost/seme_framework</code> using browser.</p>
            <p>It should show an alert, view with loaded CSS, and show H1 with content Hello World from view and using theme.</p>
            <figure>
              <img src="~/assets/img/tutorial/introduction/7.png">
            </figure>

            <hr>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/tutorial/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Tutorial
            </b-button>
            <b-button tag="router-link" to="/id/tutorial/get-data/" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Mengambil Data
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
      title: 'Perkenalan penggunaan',
      description: 'Perkenalan penggunaan dasar penggunaan Seme Framework versi 4.0.0.'
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
