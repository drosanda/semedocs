<template>
<div class="section">
    <div class="row container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/uri-routing">URI Routing</NuxtLink></li>
          <li class="unavailable">Admin URI Routing</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
      <div class="content">
        <h1 class="">URI Routing for Admin Pages</h1>
			<p>Seme Framework has default feature to overide all routes below <b>app/controller/admin</b>. This feature comes when user need some extra security for securing admin pages. Not only re-routes, Seme Framework has another base_url function for compatibilty routing between admin page. The function is <b>base_url_admin()</b>.</p>
				<h2>Condition</h2>
				<p>For using this feature, Seme Framework has some condition to meet such as:</p>
				<ol>
					<li><b>$site_url</b> in app/config/config.php is set.</li>
					<li><b>$admin_secret_url</b> in index.php is set. Default value <i>admin</i>.</li>
					<li>Only work on controller below <b>app/controller/admin</b> folder.</li>
					<li>If there is a controller folder match with <b>$admin_secret_url</b> value, the controller under matched will be ignored.</li>
					<li>Use <b>base_url_admin</b> respectively instead of <b>base_url()</b>.</li>
				</ol>
				<p>Back to <NuxtLink to="/uri-routing.html">Uri Routing</NuxtLink>.</p>
      </div>
    </div>

      </div>
    </div>
  </div>
</template>
