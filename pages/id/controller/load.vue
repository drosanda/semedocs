<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">Load method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Load method</h1>
            <p><code>SENE_Controller::load</code> digunakan untuk memanggil model kedalam controller menjadi sebuah properti didalam controller tersebut.</p>

            <h2>Parameter</h2>
            <p>Metode load terdiri dari 2 parameter yaitu <code>model_location</code> dan <code>$alias</code>.</p>
            <code v-highlight class="php">$this-&#x3E;load(string $model_location[, string $alias])</code>

            <h3>$model_location</h3>
            <p>Lokasi file model selalu relatif ke direktori <code>app/model</code>.</p>
            <p>Jadi, jika ingin memanggil model <code>api/hello_model</code> maka lokasinya ada di <code>app/model/api/hello_model.php</code>.</p>
            <p>Dan, didalam controller akan ada properti baru bernama <code>hello_model</code> yang sama dengan nama file model namun tanpa akhiran <code>.php</code>.</p>

            <h3>$model_alias</h3>
            <p>
              Model alias digunakan untuk merubah nama properti yang dibuat secara otomatis melalui metode <code>load</code> yang ada didalam controller.
              Jadi, jika ingin menyederhanakan properti <code>hello_model</code> menjadi <code>h</code> saja, cukup tambahkan parameter ke-2 didalam methode load.
            </p>

            <p>Berikut ini adalah contoh pemanggilan model dengan menggunakan alias</p>
            <pre><code v-highlight class="php">$this-&#x3E;load('api/hello_model','h');</code></pre>

            <h2>Contoh Penggunaan</h2>
            <p>Berikut ini adalah contoh lengkap penggunaan metode load dari SENE_Controller.</p>
            <pre><code v-highlight class="php">&#x3C;?php
  class Blog extends SENE_Controller {
    public function __construct(){
    parent::__construct();
    $this-&#x3E;load(&#x27;api/hello_model&#x27;,&#x27;h&#x27;);
  }
  public function index(){
    //menjalankan metode get dari hello_model
    print_r($this-&#x3E;h-&#x3E;get());
    die();
  }
}</code></pre>
            <div class="message is-info">
<div class="message-body">
              <p><b>Perhatian</b></p>
              <p>Pastikan untuk selalu memakai alias yang unik untuk setiap pemanggilan model.</p>
              <p>Apabila ada alias yang sama, maka bisa menyebabkan akan mendapatkan hasil yang tidak diinginkan.</p>
            </div></div>

            <div class="message is-success">
<div class="message-body">
              <p><b>Tips</b></p>
              <p>Jika bingung menentukan alias, gunakan alias dengan awalan nama kelasnya masing-masing.</p>
              <p>Dan, apabila ada yang sama, berikan akhiran nomor pada akhir aliasnya.</p>
              <p>Contoh, <code>app/model/api/hello_detail_model2.php</code> dan aliasnya akan lebih baik jika dinamakan <code>hdm2</code>.</p>
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
            <b-button tag="router-link" to="/id/controller/lib" icon-pack="fa" icon-right="chevron-right" class="">
              Lib Method
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
        name: 'Seme Framework v4.0.0',
        suffix: ' - Dokumentasi Seme Framework v4.0.0',
        title: 'Metode load dari SENE_Controller',
        description: 'Metode load dari kelas SENE_Controller dalam SEME Framework versi 4.0.0 digunakan untuk memanggil model kedalam kelas controller'
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
