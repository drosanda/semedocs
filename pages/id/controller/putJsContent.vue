<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">putJsContent Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">putJsContent Method</h1>
            <p>SENE_Controller::putJsContent digunakan untuk memanggil isi dari file javascript kedalam template html.</p>
            <p>Supaya dapat berjalan dengan baik, metode ini membutuhkan <code>getJsContent()</code> yang diapit didalam tag script.</p>

            <h2>Penggunaan dasar</h2>
            <p>Berikut ini adalah contoh pengunaan dari methode putJsContent.</p>
            <code v-highlight class="php">SENE_Controllers::putJsContent(string $js_location[, array $data]): object SENE_Controller</code>

            <h2>Contoh Penggunaan lengkap</h2>
            <p>Here is the example for <code>putThemeContent</code> method:</p>
            <pre><code v-highlight class="php">&#x3C;?php
class Home extends SENE_Controller
{
  public function __construct()
  {
    parent::__construct();
    $this-&#x3E;setTheme(&#x27;homepage&#x27;);
  }
  public function index()
  {
    $data = array();
    $this-&#x3E;putThemeContent(&#x27;home/slider&#x27;,$data);
    $this-&#x3E;putThemeContent(&#x27;home/three_values&#x27;,$data);
    $this-&#x3E;putJsContent(&#x27;home/home_bottom&#x27;,$data);
    $this-&#x3E;loadLayout(&#x27;col-1&#x27;,$data);
  }
}</code></pre>
            <p>So, the <code>homepage</code> theme, <code>col-1</code> layout and <code>home_bottom.php</code> content should be existed on the directory structure.</p>
            <pre>
- app
|-- view
|--- homepage
|---- home
|----- slider.php
|----- three_values.php
|---- page
|----- col-1.php

            </pre>
            <h3>Example home_bottom.php content</h3>
            <p>Here is the example code for home_bottom.php content</p>
            <pre>
alert(&#x27;Hi, this is from home_bottom&#x27;);
            </pre>
            <div class="message is-info">
  <div class="message-body">
              <p>For further information about home_bottom.php and layout, please refer to <NuxtLink to="/id/view/theme-content/js/">Javascript Theme Content</NuxtLink>.</p>
            </div></div>
          </div>
        </div>

      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/controller/loadLayout" type="is-link" icon-pack="fa" icon-left="chevron-left">
              loadLayout Method
            </b-button>
            <b-button tag="router-link" to="/id/controller/putJsContent" type="is-link" icon-pack="fa" icon-right="chevron-right">
              putJsContent Method
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
      title: 'putJsContent Method from SENE_Controller',
      description: 'Pelajari selengkapnya tentang putJsContent Method from SENE_Controller on Seme Framework versi 4.0.0'
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
