<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
<li class=""><NuxtLink to="/3.2.1/">3.2.1</NuxtLink></li>
              <li class=""><NuxtLink to="/3.2.1/model">Model</NuxtLink></li>
            <li class="unavailable">Update Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Update Method</h1>
					<p>Update method is part of database class builder for updating a table.</p>

					<h2>Parameters</h2>
					<p>Update method has 2 required parameters that is <b>column name</b> and <b>value</b>, another parameters are optional. Here is the completed parameters can be used by where methods</p>
					<pre>$this->db->update(string $table_name, array $data_update, [bool $is_debug=0]): bool</pre>
          <h3>$data_update</h3>
          <p><b>Data update</b> is key value pair in an array. The key refer to column name of the table.</p>
					<h2>Example usage</h2>
					<p>Here is the examples using insert method. See the first of this page for full example.</p>
          <h3>Basic Usage</h3>
          <p>For example we assumed want to edit title in blog table. First, in the model:</p>
          <pre>class Blog_Model extends SENE_Model{
  var $tbl = 'blog';
  var $tbl_as = 'b';
  public function __construct(){
	 parent::__construct();
  }
  public function update($id,$du){
    $this->db->where("id",$id);
    $this->db->update($ths->tbl,$du);
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
    $du = array();
    $du['title'] = "This is new title of this blog!";
    $res = $this->bm->update($id,$du); //call the method on the model
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
    layout: 'v3.2.1'
    // page component definitions
  }
</script>

