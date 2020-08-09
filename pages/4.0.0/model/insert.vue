<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Home</NuxtLink></li>
<li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
              <li class=""><NuxtLink to="/4.0.0/model">Model</NuxtLink></li>
            <li class="unavailable">Insert Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Insert Method</h1>
					<p>Insert method is part of database class builder for inserting data into a table.</p>
					<h2>Parameters</h2>
					<p>Insert method has 2 required parameters that is <b>table name</b> and <b>values</b> in key value format.</p>
					<pre>$this->db->insert(string $table_name, array $data_insert, [bool $is_multiple=0], [bool $is_debug=0]): bool</pre>
          <h3>$data_insert</h3>
          <p><b>Data insert</b> is key value pair in an array. The key refer to column name of the table.</p>
					<h2>Example usage</h2>
					<p>Here is the examples using insert method. See the first of this page for full example.</p>
          <h3>Basic Usage</h3>
          <p>For example we assumed want to add new data in blog table. First, in the model:</p>
          <pre>class Blog_Model extends SENE_Model{
  var $tbl = 'blog';
  var $tbl_as = 'b';
  public function __construct(){
	 parent::__construct();
  }
  public function insert($di){
    $this->db->insert($ths->tbl,$di);
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
    $di['id'] = 1;
    $di['title'] = "This is new title of this blog!";
    $di['content'] = "This is new title of this blog!";
    $res = $this->bm->insert($id,$di); //call the method on the model
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
    layout: 'v4.0.0'
    // page component definitions
  }
</script>

