<template>
  <div class="section">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul class="breadcrumbs">
            <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
            <li class=""><NuxtLink to="/model">Model</NuxtLink></li>
            <li class="unavailable">select_as Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Select AS Method</h1>
					<p>Select AS method is part of database class builder for selecting column data into a table with aliases.</p>
					<h2>Parameters</h2>
					<p>Update method has 3 required parameters that is <b>column name</b> and <b>value</b>, another parameters are optional. Here is the completed parameters can be used by where methods</p>
					<pre>$this->db->select_as(string $column_name_or_function, string $alias, bool $force_escape): dbObject</pre>
          <h3>$column_name_or_function</h3>
          <p><b>Column Name</b> can be single column name, or can be filled with wildcard "*", or can be filled with MySQL function.</p>
          <h3>$alias</h3>
          <p><b>Alias</b> Aliased name of <b>$column_name_or_function</b>.</p>
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
  public function countList(){
    $this->db->select_as("COUNT(*)","total",0);
    $this->db->from($this->tbl,$this->tbl_as);
    return $this->db->get_first();
  }
  public function translated($id){
    $this->db->select("id","blog_id",0);
    $this->db->select("title","judul",0);
    $this->db->select("content","isi",0);
    $this->db->from($this->tbl,$this->tbl_as);
    $this->db->where_as("id",$id);
    return $this->db->get_first();
  }
  public function allButModified($id){
    $this->db->select("$this->tbl_as.*, id","blog_id",0);
    $this->db->from($this->tbl,$this->tbl_as);
    $this->db->where_as("id",$id);
    return $this->db->get_first();
  }
}</pre>
					<p>at the controller, we assumed has file named blog.php</p>
          <pre>
class Blog extends SENE_Controller{
  public function __construct(){
    parent::__construct();
    $this->load('blog_model','bm'); #class scope model
  }
  public function index(){
    $blogs = $this->bm->countList();
    $this->debug($blogs);
  }
  public function detail($id){
    $blog = $this->bm->translated($id);
    $this->debug($blog);
  }
  public function all($id){
    $blog = $this->bm->allButModified($id);
    $this->debug($blog);
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

