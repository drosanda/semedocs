<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
<li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
              <li class=""><NuxtLink to="/id/library">Library</NuxtLink></li>
            <li class="unavailable">Seme Log</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Seme Log</h1>
					<p>Seme Log is library for logging some text or result into file log. Seme log will create and put new file seme.log in root project or in app/cache/seme.log depending directory access on your script.</p>
					<hr>
					<h2>How to use</h2>
					<p>First we have to loaded library by using library loaded:</p>
					<pre>$this->lib('seme_log');</pre>
					<p>You can put libary loader in constructor of controller or on each method in your controller.</p>
          <h2>Basic Usage</h2>
          <p>Seme Log only have one method called <b>write</b> for writting log into file log. Here is the example:</p>
          <pre>Class Product extends SEME_Controller{
  public function __construct(){
    $this->lib('seme_log');
  }
  public function index(){
    $this->seme_log->write("Produk::index called");
  }
}</pre>
          <p>And then this is the result if we open file seme.log</p>
          <pre>2019-08-06 10:22:22 - Produk::index called
2019-08-06 10:22:25 - Produk::index called
</pre>
          <h3>Advanced Result</h3>
          <p>If you used *nix Operating System, you can tail -f seme.log for realtime view log.</p>
				</div>
      </div>

        </div>
      </div>
    </div>
  </template>
<script>
  export default {
    layout: 'v4.0.0'
    // page component definitions
  }
</script>

