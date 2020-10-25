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
          <h1 class="">Config: Database</h1>
          <p>In this configuration file you can change the default value of controller and then manipulate the url routing.</p>
          <pre>
            $default_controller='home';
$notfound_controller='notfound';

//override default routing
//make sure dont add any traing slash in array key of routes

//example $routes['produk/(:any)'] = 'produk/detail/index/$1';
//example $routes['blog/id/(:num)/(:any)'] = 'blog/detail/index/$1/$2';
$routes['produk/(:any)'] = 'produk/detail/index/$1';
$routes['produk/detail/(:any)'] = 'produk/detail/index/$1';
$routes['checkout/berhasil/(:any)'] = 'checkout/berhasil/index/$1';
$routes['konfirmasi/(:any)'] = 'konfirmasi/index/$1';

//dukungan
$routes['dukungan/kebijakan-privasi'] = 'dukungan/kebijakan_privasi';
$routes['dukungan/syarat-ketentuan'] = 'dukungan/syarat_ketentuan';
//$routes['produk/(:any)/(:any)'] = 'produk/detail/index/$1/$2';
</pre>
					<p>The sequences of routes variable determines priority for each route.</p>
        </div>
      </div>

        </div>
      </div>
    </div>
</template>
<script>
  export default {
    layout: 'v3.2.1'
    // page component definitions
  }
</script>

