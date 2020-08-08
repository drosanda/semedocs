<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Home</NuxtLink></li>
            <li class="unavailable">Global Variabel and Constant</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Global Variable and Constant</h1>
					<p>Like the other framework, Seme Framework has several global variable and Constant that you can use for your web app.</p>
					<h2>SENEROOT</h2>
					<p>This global variable returned full path of your framework directory. Example:</p>
					<ul>
						<li>If you put working directory on <u>D:/xampp/htdocs/seme_framework</u><br />so the SENEROOT will returned path<br /><u>D:/xampp/htdocs/seme_framework</u>.</li>
            <li>If you put working directory on <u>/opt/lampp/htdocs/example_store</u><br />so the SENEROOT will returned path<br /><u>/opt/lampp/htdocs/example_store</u>.</li>
					</ul>
          <h2>SENECACHE</h2>
					<p>This global variable returned full path of your framework cache directory. Example:</p>
					<ul>
						<li>If you put working directory on <u>D:/xampp/htdocs/seme_framework</u><br />so the SENECACHE will returned path will be<br /><u>D:/xampp/htdocs/seme_framework/app/cache</u>.</li>
            <li>If you put working directory on <u>/opt/lampp/htdocs/example_store</u><br />so the SENECACHE will returned path<br /><u>/opt/lampp/htdocs/example_store/app/cache</u>.</li>
					</ul>
				</div>
      </div>

        </div>
      </div>
    </div>
  </template>
<script>
  export default {
    layout: 'blog'
    // page component definitions
  }
</script>

