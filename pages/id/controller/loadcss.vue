<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">LoadCss</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">loadCss method</h1>
            <p>Metode loadCSS ada di SENE_Controller yang berguna untuk memanggil CSS dengan URL tertentu melalui controller.</p>
            <h2>Parameter</h2>
            <p>Metode loadCSS miliki 2 parameter, yakni $src dan $utype.</p>
            <code v-highlight class="php">$this-&#x3E;loadCss(string $src[, string $utype]): object SENE_Controller</code>

            <h3>$src</h3>
            <p>Nilai dari $src ini bisa menggunakan URL relatif dengan memanfaatkan fungsi <code>base_url()</code> atau <code>SENE_Controller::cdn_url</code>.</p>
            <p>Jadi jika ingin menggunakan sumber external cukup gunakan seperti ini <code>$this-&#x3E;loadCss(&#x27;https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css&#x27;,&#x27;before&#x27;)</code></p>
            <p>Sebaliknya, jika ingin menggunakan url relatif bisa seperti ini <code>$this-&#x3E;loadCss(base_url(&#x27;assets/css/font-awesome.min.css&#x27;,&#x27;before&#x27;));</code>.</p>

            <h3>$utype</h3>
            <p>Nilai dari $utype ini bisa berisi <code>'before'</code> atau <code>'after'</code> atau <code>''</code> (string kosong).</p>
            <p>Before berarti css akan ditambahkan sebelum list yang ada di <code>app/view/NAMA_TEMA/theme.json</code>.</p>
            <p>After berarti css akan ditambahkan setelah list yang ada di <code>app/view/NAMA_TEMA/theme.json</code>.</p>

            <h3>Contoh Lengkap</h3>
            <p>Berikut ini adalah contoh lengkap untuk penggunaan method loadCss:</p>
            <pre><code v-highlight class="php">&#x3C;?php
class Blog extends SENE_Controller {
  public function __construct(){
    parent::__construct();
  }
  public function index(){
    //external
    $this-&#x3E;loadCss(&#x27;https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css&#x27;,&#x27;before&#x27;);
    //relatif
    $this-&#x3E;loadCss(base_url(&#x27;assets/css/font-awesome.min.css&#x27;,&#x27;before&#x27;));

    //theme content and layout rendering
    $this-&#x3E;putJSReady(&#x27;home/home_bottom&#x27;,$data);
    $this-&#x3E;putThemeContent(&#x27;home/home&#x27;,$data);
    $this-&#x3E;loadLayout(&#x27;col-1&#x27;,$data);
    $this-&#x3E;render();
  }
}</code></pre>

            <div class="message is-warning">
<div class="message-body">
              <p><b>Perhatian</b></p>
              <p>Supaya metode loadCss dapat berjalan dengan baik, pastikan sudah memanggil:</p>
              <ul>
                <li>&#x3C;?php $this-&#x3E;getAdditionalBefore()?&#x3E;</li>
                <li>&#x9;&#x3C;?php $this-&#x3E;getAdditional()?&#x3E;</li>
                <li>&#x9;&#x3C;?php $this-&#x3E;getAdditionalAfter()?&#x3E;</li>
              </ul>
              <p>Didalam templet header tema.</p>

            </div></div>

          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/controller/session" icon-pack="fa" icon-left="chevron-left" class="">
              Menggunakan Session
            </b-button>
            <b-button tag="router-link" to="/id/database" icon-pack="fa" icon-right="chevron-right" class="">
              Database
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
        title: 'loadCss Method dari SENE_Controller',
        description: 'Pelajari selengkapnya tentang loadCss method dari SENE_Controller di Seme Framework versi 4.0.0'
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
