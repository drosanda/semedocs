<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
            <li class="unavailable">Library</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Library</h1>
					<p>Library is a file of collection of file that you can use inside Seme Framework. You can found our library on <code>kero/lib/</code>. Seme Framework has 3 method for loading library.</p>
						<ol>
							<li>instantiate library object automatically,</li>
							<li>instantiate object of library by using different name</li>
							<li>include only library file, so you can instantiate by using its class name.</li>
						</ol>
					<hr>
					<h2>Loading A Library</h2>
					<p>You can load library from controller by using method lib. Method lib has 3 parameter required:</p>
						<ul>
							<li>Location of library file relative to kero/lib/.</li>
							<li>Object name, default name is class name with in lower case format.</li>
							<li>The include method. you can use inc value if you just require_once only your lib. Otherwise library will instantiate automatically.</li>
						</ul>
					<p>Example loading json library in home controller:</p>
					<pre>Class Home extends SENE_Controller {
	$this->lib('sene_json_engine','sene_json');
	public function __construct(){
		parent::__construct();
	}
	public function index(){
		$data = array();
		$data["status"]  = 200;
		$data["message"] = 'Hello we just use json right here, Yi-Ha!';
		$data["result"]  = array();
		$this->sene_json->out($data);
	}
}
</pre>
					<p>After that you can open your base_url on browser and see what you get.</p>
          <h2>List of Library</h2>
          <p>Here is the list of library currently exist on seme framework:</p>
          <ul>
            <li><NuxtLink to="/4.0.0/library/seme_log">Seme Log - Logger</NuxtLink></li>
            <li><NuxtLink to="/4.0.0/library/seme_email">Seme Email - Email Sender</NuxtLink></li>

          </ul>
				</div>
      </div>

        </div>
      </div>
    </div>
  </template>
<script>
  export default {
    layout: 'v3.1'
    // page component definitions
  }
</script>
