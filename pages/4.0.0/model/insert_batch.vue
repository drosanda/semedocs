<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
<li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
              <li class=""><NuxtLink to="/4.0.0/model">Model</NuxtLink></li>
            <li class="unavailable">Insert Batch Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Insert Batch Method</h1>
					<p>Insert Batch method is alias of insert_multi method. Insert batch is part of database class builder for inserting multiple data into a table. Is alias of <NuxtLink to="/4.0.0/model/insert_multi/">Insert Multi method</NuxtLink>.</p>
					<h2>Parameters</h2>
          <p>Insert Batch method has 2 required parameters that is <b>table name</b> and <b>values</b> array of array format.</p>
					<pre>$this->db->insert(string $table_name, array $data_inserts, [bool $is_debug=0]): bool</pre>
          <h3>$data_inserts</h3>
          <p><b>Data inserts</b> is key value pair in an array. The key refer to column name of the table.</p>
					<h2>Example usage</h2>
					<p>Here is the examples using insert multi method. See the first of this page for full example.</p>
          <h3>Basic Usage</h3>
          <p>For example we assumed want to add new data in blog table. First, in the model:</p>
          <pre>
class Blog_Model extends SENE_Model{
  var $tbl = &#x27;blog&#x27;;
  var $tbl_as = &#x27;b&#x27;;
  public function __construct(){
&#x9; parent::__construct();
  }
  public function inserts($dis){
    $this-&#x3E;db-&#x3E;insert_batch($ths-&#x3E;tbl,$dis);
  }
}
</pre>
					<p>at the controller, we assumed has file named blog.php</p>
          <pre>
class Blog extends Sene_Controller{
  public function __construct(){
    parent::__construct();
    $this-&#x3E;load(&#x27;blog_model&#x27;,&#x27;bm&#x27;); #class scope model
  }
  public function index(){
    $id = 1;
    $di = array();

    $dis = array();
    $dis[&#x27;id&#x27;] = 1;
    $dis[&#x27;title&#x27;] = &#x22;This is new title of this blog!&#x22;;
    $dis[&#x27;content&#x27;] = &#x22;This is new title of this blog!&#x22;;
    $di[]=$dis;

    $dis = array();
    $dis[&#x27;id&#x27;] = 2;
    $dis[&#x27;title&#x27;] = &#x22;Test multiple insert&#x22;;
    $dis[&#x27;content&#x27;] = &#x22;This is new test for multiple insert&#x22;;
    $di[]=$dis;

    $res = $this-&#x3E;bm-&#x3E;inserts($id,$dis); //call the method on the model
    if($res){
      echo &#x27;Success&#x27;;
    }else{
      echo &#x27;failed&#x27;;
    }
  }
}
          </pre>
        </div>
      </div>

        </div>


        <div class="columns">
          <div class="column">
            <b-button tag="router-link" to="/4.0.0/model/insert_multi" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Model::insert_multi
            </b-button>
          </div>
          <div class="column is-2">&nbsp;</div>
          <div class="column">
            <b-button tag="router-link" to="/4.0.0/model/update" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Model::update
            </b-button>
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
