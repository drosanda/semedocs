<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">setKey method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">setKey method</h1>
            <p>Metode <code>SENE_Controller::setKey</code> digunakan untuk menyimpan nilai didalam $_SESSION.</p>
            <p>Metode biasanya ini digunakan untuk menyimpan data setelah proses login berhasil.</p>

            <h2>Parameter</h2>
            <p>Metode ini membutuhkan satu parameter yaitu <b>$values</b>.</p>

            <h2>Pengunaan dasar</h2>
            <p>Berikut ini adalah penggunaan dasar dari metode setKey</p>
            <code v-highlight class="php">SENE_Controller::setKey(mixed $values): object</code>

            <h2>Contoh Penggunaan</h2>
            <p>Berikut ini adalah contoh penggunaannya untuk API dalam proses otentifikasi pengguna (login).</p>
            <pre><code v-highlight class="php">&#x3C;?php
class Login extends SENE_Controller{

public function __construct(){
&nbsp;parent::__construct();
&nbsp;$this-&#x3E;setTheme(&#x27;front&#x27;);
&nbsp;$this-&#x3E;load(&#x27;front/b_user_model&#x27;,&#x27;bum&#x27;);
}
public function index(){
&nbsp;//check sudah login atau belum
&nbsp;$data = $this-&#x3E;getKey();
&nbsp;if(isset($data->user->id)){
&nbsp;&nbsp;//sudah login
&nbsp;&nbsp;&nbsp;$this-&#x3E;status = 303;
&nbsp;&nbsp;&nbsp;$this-&#x3E;message = &#x27;Sudah login, silakan refresh halaman&#x27;;
&nbsp;&nbsp;&nbsp;$this-&#x3E;__json_out($data);
&nbsp;&nbsp;&nbsp;die();
&nbsp;}
&nbsp;$this-&#x3E;status = 1709;
&nbsp;$this-&#x3E;message = &#x27;Kombinasi email dan/atau password salah&#x27;;
&nbsp;$username = $this-&#x3E;input-&#x3E;request(&#x27;username&#x27;);
&nbsp;$res = $this-&#x3E;bum-&#x3E;auth($username);
&nbsp;if (isset($res-&#x3E;id)) {
&nbsp;&nbsp;$password = $this-&#x3E;input-&#x3E;request(&#x27;password&#x27;);
&nbsp;&nbsp;if (!password_verify($password, $res-&#x3E;password)) {
&nbsp;&nbsp;&nbsp;$this-&#x3E;status = 1707;
&nbsp;&nbsp;&nbsp;$this-&#x3E;message = &#x27;Kombinasi email dan/atau password salah&#x27;;
&nbsp;&nbsp;&nbsp;$this-&#x3E;__json_out($data);
&nbsp;&nbsp;&nbsp;die();
&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;$sess = new stdClass();
&nbsp;&nbsp;if (isset($dt[&#x27;sess&#x27;])) $sess = $dt[&#x27;sess&#x27;];
&nbsp;&nbsp;if (!is_object($sess)) $sess = new stdClass();
&nbsp;&nbsp;if (!isset($sess-&#x3E;user)) $sess-&#x3E;user = new stdClass();
&nbsp;&nbsp;$sess-&#x3E;user = $res;
&nbsp;&nbsp;$this-&#x3E;setKey($sess);
&nbsp;}
&nbsp;
&nbsp;$this-&#x3E;__json_out($data);
}
}</code></pre>
            <p>&nbsp;</p>
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
            <b-button tag="router-link" to="/id/controller/session" icon-pack="fa" icon-left="chevron-left" class="">
              session
            </b-button>
            <b-button tag="router-link" to="/id/controller/settheme" icon-pack="fa" icon-right="chevron-right" class="">
              setTheme
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
        name: 'Seme Framework 4',
        suffix: ' - Seme Framework 4 Bahasa Indonesia',
        title: 'Metode setKey dari SENE_Controller',
        description: 'Metode setKey dari kelas SENE_Controller dalam SEME Framework versi 4.0.0 digunakan untuk memanggil variabel yang tersimpan didalam $_SESSION.'
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
