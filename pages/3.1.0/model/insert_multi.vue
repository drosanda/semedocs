<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
              <li class=""><NuxtLink to="/model">Model</NuxtLink></li>
            <li class="unavailable">Insert Multi Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Insert Multi Method</h1>
					<p>Insert Multi method is part of database class builder for inserting multiple data / mass insert into a table.</p>
					<h2>Parameters</h2>
          <p>Insert Multi method has 2 required parameters that is <b>table name</b> and <b>values</b> array of array format.</p>
					<pre>$this->db->insert_multi(string $table_name, array $data_inserts, [bool $is_debug=0]): bool</pre>
          <h3>$data_inserts</h3>
          <p><b>Data inserts</b> is key value pair in an array. The key refer to column name of the table.</p>
					<h2>Example usage</h2>
					<p>Here is the examples using insert multi method. See the first of this page for full example.</p>
          <h3>Basic Usage</h3>
          <p>For example we assumed want to add new data in blog table. First, in the model:</p>
          <pre>class Blog_Model extends SENE_Model{
  var $tbl = 'blog';
  var $tbl_as = 'b';
  public function __construct(){
	 parent::__construct();
  }
  public function inserts($dis){
    $this->db->insert_multi($ths->tbl,$dis);
  }
}</pre>
					<p>at the controller, we assumed has file named blog.php</p>
          <pre>class Blog extends Sene_Controller{
  public function __construct(){
    parent::__construct();
    $this->load('blog_model','bm'); #class scope model
  }
  public function index(){
    $id = 1;
    $di = array();

    $dis = array();
    $dis['id'] = 1;
    $dis['title'] = "This is new title of this blog!";
    $dis['content'] = "This is new title of this blog!";
    $di[]=$dis;

    $dis = array();
    $dis['id'] = 2;
    $dis['title'] = "Test multiple insert";
    $dis['content'] = "This is new test for multiple insert";
    $di[]=$dis;

    $res = $this->bm->inserts($id,$dis); //call the method on the model
    if($res){
      echo 'Success';
    }else{
      echo 'failed';
    }
  }
}</pre>
        </div>
      </div>

        </div>
      </div>
    </div>
  </template>
<script>
  export default {
    layout: 'v3.1.0'
    // page component definitions
  }
</script>

