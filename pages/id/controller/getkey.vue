<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">getKey method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">getKey method</h1>
            <p><code>SENE_Controller::getKey</code> digunakan untuk memanggil variabel yang disimpan didalam $_SESSION.</p>
            <p>Metode biasanya ini digunakan untuk mengambil data yang tersimpan setelah proses login berhasil.</p>

            <h2>Parameter</h2>
            <p>Tidak ada parameter untuk metode ini.</p>

            <h2>Pengunaan dasar</h2>
            <p>Berikut ini adalah penggunaan dasar dari metode getKey</p>
            <code v-highlight class="php">SENE_Controller::getKey(): mixed</code>

            <h2>Contoh Penggunaan</h2>
            <p>Berikut ini adalah contoh penggunaannya untuk memeriksa user sudah login atau belum.</p>
            <pre><code v-highlight class="php">&#x3C;?php
class Login extends SENE_Controller{
&nbsp;public function __construct(){
&nbsp;&nbsp;parent::__construct();
&nbsp;&nbsp;$this-&#x3E;setTheme(&#x27;front&#x27;);
&nbsp;&nbsp;$this-&#x3E;load(&#x27;front/b_user_model&#x27;,&#x27;bum&#x27;);
&nbsp;}
&nbsp;public function index(){
&nbsp;&nbsp;//check sudah login atau belum
&nbsp;&nbsp;$data = $this-&#x3E;getKey();
&nbsp;&nbsp;if(isset($data->user->id)){
&nbsp;&nbsp;&nbsp;//sudah login, alihkan ke halaman utama
&nbsp;&nbsp;&nbsp;&nbsp;redir(base_url());
&nbsp;&nbsp;&nbsp;&nbsp;die();
&nbsp;&nbsp;}

&nbsp;&nbsp;//tampilkan halaman untuk login
&nbsp;&nbsp;$this-&#x3E;setTitle(&#x27;Login &#x27;.$this-&#x3E;config-&#x3E;semevar-&#x3E;site_suffix);
&nbsp;&nbsp;$this-&#x3E;setDescription(&#x22;Silahkan login anda sebelum dapat melakukan pelayanan&#x22;);
&nbsp;&nbsp;$this-&#x3E;setKeyword(&#x22;login&#x22;);
&nbsp;&nbsp;$this-&#x3E;putThemeContent(&#x22;login/home&#x22;,$data); //pass data to view
&nbsp;&nbsp;$this-&#x3E;putJsContent(&#x22;login/home_bottom&#x22;,$data); //pass data to view
&nbsp;&nbsp;$this-&#x3E;loadLayout(&#x22;col-1-login&#x22;,$data);
&nbsp;&nbsp;$this-&#x3E;render();
&nbsp;}
}</code></pre>
            <div class="message is-info">
<div class="message-body">
              <p><b>Perhatian</b></p>
              <p>Pastikan pengaturan <code>$saltkey</code> telah diubah dan bersifat unik antara 1 projek dengan projek lainnya.</p>
            </div></div>

            <div class="message is-success">
<div class="message-body">
              <p><b>Tips</b></p>
              <p>Jika bingung menentukan <code>$saltkey</code>, gunakan nama singkat proyek dan akhiri dengan tahun.</p>
            </div></div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/controller/constructor" icon-pack="fa" icon-left="chevron-left" class="">
              Constructor
            </b-button>
            <b-button tag="router-link" to="/id/controller/input" icon-pack="fa" icon-right="chevron-right" class="">
              Input
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
    data() {
      return {
        name: 'Seme Framework Bahasa Indonesia',
        suffix: ' - Seme Framework v4',
        title: 'Metode getKey dari SENE_Controller',
        description: 'Metode getKey dari kelas SENE_Controller dalam SEME Framework versi 4.0.0 digunakan untuk memanggil variabel yang tersimpan didalam $_SESSION.'
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
