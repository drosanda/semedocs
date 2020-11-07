<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2.1/">3.2.1</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2.1/configuration">Configuration</NuxtLink></li>
          <li class="unavailable">Controller</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Config: controller.php</h1>
            <p>In this configuration file you can change the default value of controller and then manipulate the url routing.</p>
            <pre><code v-highlight class="php">&#x3C;?php
$default_controller=&#x27;home&#x27;;
$notfound_controller=&#x27;notfound&#x27;;

//override default routing
//make sure dont add any traing slash in array key of routes

//example $routes[&#x27;produk/(:any)&#x27;] = &#x27;produk/detail/index/$1&#x27;;
//example $routes[&#x27;blog/id/(:num)/(:any)&#x27;] = &#x27;blog/detail/index/$1/$2&#x27;;
$routes[&#x27;produk/(:any)&#x27;] = &#x27;produk/detail/index/$1&#x27;;
$routes[&#x27;produk/detail/(:any)&#x27;] = &#x27;produk/detail/index/$1&#x27;;
$routes[&#x27;checkout/berhasil/(:any)&#x27;] = &#x27;checkout/berhasil/index/$1&#x27;;
$routes[&#x27;konfirmasi/(:any)&#x27;] = &#x27;konfirmasi/index/$1&#x27;;

//dukungan
$routes[&#x27;dukungan/kebijakan-privasi&#x27;] = &#x27;dukungan/kebijakan_privasi&#x27;;
$routes[&#x27;dukungan/syarat-ketentuan&#x27;] = &#x27;dukungan/syarat_ketentuan&#x27;;
//$routes[&#x27;produk/(:any)/(:any)&#x27;] = &#x27;produk/detail/index/$1/$2&#x27;;</code></pre>

  					<p>The sequences of routes variable determines priority for each route.</p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/3.2.1/configuration/config/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Config: config.php
            </b-button>
            <b-button tag="router-link" to="/3.2.1/configuration/core/" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Config: core.php
            </b-button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    layout: 'v3.2.1',
    data() {
      return {
        name: 'Seme Framework v3.2.1',
        suffix: ' - Seme Framework v3.2.1 Documentation',
        title: 'Configuration: controller.php',
        description: 'File controller.php for Seme Framework version 3.x basic controller setting'
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
