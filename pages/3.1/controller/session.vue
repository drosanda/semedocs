<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/controller">Controller</NuxtLink></li>
            <li class="unavailable">Using Session</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Controller: Using Session</h1>
					<p>Seme Framework comes with bultin session manager which stored to $_SESSION array with randomize string that define through <a href="/config-session.html">configuration</a>. Method <code>setKey()</code> from Sene_controller allowed you to pass array of object or objects to save in session. And Method <code>getKey()</code> allowed to get any stored value to session. Here is the example</p>
					<pre>
class Home extends SENE_Controller{
	public function __construct(){
		parent::__construct();
	}
	private funtion __init(){
		$data = array();
		$sess = $this->getKey();
		if(!isset($sess->user_login)) $sess->user_login = 0;
		if(!isset($sess->user)) $sess->user = new stdClass();
		if(isset($sess->user->id)) $sess->user_login = 1;
		$this->setKey($sess);
		$data['sess'] = $sess;
		return $data;
	}
	public function index(){
		$data = $this->__init();
	}
	public function set_logged_in(){
		$sess = $this->getKey();
		if(!isset($sess->user_login)) $sess->user_login = 1;
		if(!isset($sess->user)) $sess->user = new stdClass();
		if(!isset($sess->user->id)) $sess->user->id = 1000;
		$this->setKey($sess);
	}
	public function set_logged_out(){
		$sess = $this->getKey();
		if(!isset($sess->user_login)) $sess->user_login = 0;
		if(!isset($sess->user)) $sess->user = new stdClass();
		if(!isset($sess->user->id)) $sess->user->id = 1000;
		unset($sess->user->id);
		$this->setKey($sess);
	}

}
					</pre>
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

