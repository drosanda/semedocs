<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">Bahasa Indonesia</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">Lib method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Controller: Using Session</h1>
  					<p>Seme Framework comes with builtin session manager which stored to <code>$_SESSION</code> array with randomize string that define through <NuxtLink href="/4.0.0/configuration/session/">configuration</NuxtLink>. Method <code>setKey()</code> from Sene_controller allowed you to pass array of object or objects to save in session. And Method <code>getKey()</code> allowed to get any stored value to session. Here is the example</p>
  					<pre>
  class Home extends Sene_Controller{
  &#x9;public function __construct(){
  &#x9;&#x9;parent::__construct();
  &#x9;}
  &#x9;private funtion __init(){
  &#x9;&#x9;$data = array();
  &#x9;&#x9;$sess = $this-&#x3E;getKey();
  &#x9;&#x9;if(!isset($sess-&#x3E;user_login)) $sess-&#x3E;user_login = 0;
  &#x9;&#x9;if(!isset($sess-&#x3E;user)) $sess-&#x3E;user = new stdClass();
  &#x9;&#x9;if(isset($sess-&#x3E;user-&#x3E;id)) $sess-&#x3E;user_login = 1;
  &#x9;&#x9;$this-&#x3E;setKey($sess);
  &#x9;&#x9;$data[&#x27;sess&#x27;] = $sess;
  &#x9;&#x9;return $data;
  &#x9;}
  &#x9;public function index(){
  &#x9;&#x9;$data = $this-&#x3E;__init();
  &#x9;}
  &#x9;public function set_logged_in(){
  &#x9;&#x9;$sess = $this-&#x3E;getKey();
  &#x9;&#x9;if(!isset($sess-&#x3E;user_login)) $sess-&#x3E;user_login = 1;
  &#x9;&#x9;if(!isset($sess-&#x3E;user)) $sess-&#x3E;user = new stdClass();
  &#x9;&#x9;if(!isset($sess-&#x3E;user-&#x3E;id)) $sess-&#x3E;user-&#x3E;id = 1000;
  &#x9;&#x9;$this-&#x3E;setKey($sess);
  &#x9;}
  &#x9;public function set_logged_out(){
  &#x9;&#x9;$sess = $this-&#x3E;getKey();
  &#x9;&#x9;if(!isset($sess-&#x3E;user_login)) $sess-&#x3E;user_login = 0;
  &#x9;&#x9;if(!isset($sess-&#x3E;user)) $sess-&#x3E;user = new stdClass();
  &#x9;&#x9;if(!isset($sess-&#x3E;user-&#x3E;id)) $sess-&#x3E;user-&#x3E;id = 1000;
  &#x9;&#x9;unset($sess-&#x3E;user-&#x3E;id);
  &#x9;&#x9;$this-&#x3E;setKey($sess);
  &#x9;}
  }
  					</pre>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/controller/load" type="is-link" icon-pack="fa" icon-left="chevron-left" class="">
              Load Method
            </b-button>
            <b-button tag="router-link" to="/id/controller/input" type="is-link" icon-pack="fa" icon-right="chevron-right" class="">
              Input Method
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
      title: 'Using Session from SENE_Controller',
      description: 'Pelajari selengkapnya tentang Using Session from SENE_Controller on Seme Framework versi 4.0.0'
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
