<template>
  <div class="section">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul class="breadcrumbs">
            <li class=""><NuxtLink to="/">Home</NuxtLink></li>
            <li class=""><NuxtLink to="/model">Model</NuxtLink></li>
            <li class="unavailable">Select Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Select Method</h1>
					<p>Select method is part of database class builder for selecting column data into a table.</p>
					<h2>Parameters</h2>
					<p>Update method has 1 required parameters that is <b>column name</b> and <b>value</b>, another parameters are optional. Here is the completed parameters can be used by where methods</p>
					<pre>$this->db->select(string $column_name): dbObject</pre>
          <h3>$column_name</h3>
          <p><b>Column Name</b> can be single column name, or can be filled with wildcard "*".</p>
					<h2>Example usage</h2>
					<p>Here is the examples using select method. See the first of this page for full example.</p>
          <h3>Basic Usage</h3>
          <p>For example we assumed want to add new data in blog table. First, in the model:</p>
          <pre>
class Blog_Model extends SENE_Model{
  var $tbl = 'blog';
  var $tbl_as = 'b';
  public function __construct(){
	 parent::__construct();
  }
  public function getList(){
    $this->db->select("*");
    $this->db->from($this->tbl,$this->tbl_as);
    return $this->db->get();
  }
  public function getById($id){
    $this->db->select("id");
    $this->db->select("title");
    $this->db->select("content");
    $this->db->from($this->tbl,$this->tbl_as);
    $this->db->where_as("id",$id);
    return $this->db->get_first();
  }
}</pre>
					<p>at the controller, we assumed has file named blog.php</p>
          <pre>
class Blog extends Sene_Controller{
  public function __construct(){
    parent::__construct();
    $this->load('blog_model','bm'); #class scope model
  }
  public function index(){
    $blogs = $this->bm->getList();
    $this->debug($blogs);
  }
  public function detail($id){
    $blog = $this->bm->getById($id);
    $this->debug($blog);
  }
}</pre>
        </div>
      </div>
        </div>
      </div>
    </div>
</template>
