<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
<li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
              <li class=""><NuxtLink to="/4.0.0/model">Model</NuxtLink></li>
            <li class="unavailable">Group By Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Group By Method</h1>
					<p>Group By method is part of database class builder for selecting column data into a table.</p>
					<h2>Parameters</h2>
					<p>Group By method has 1 required parameters that is <b>column name</b> and <b>value</b>, another parameters are optional. Here is the completed parameters can be used by where methods</p>
					<pre>$this->db->group_by(string $condition): dbObject</pre>
          <h3>$condition</h3>
          <p><b>Condition</b> can be single column name or can be SQL Function.</p>
					<h2>Example usage</h2>
					<p>Here is the examples using group_by method. See the first of this page for full example.</p>
          <h3>Basic Usage</h3>
          <p>For example we assumed want to add new data in blog table. First, in the model:</p>
          <pre>class Blog_Model extends SENE_Model{
  var $tbl = 'blog';
  var $tbl_as = 'b';
  public function __construct(){
	 parent::__construct();
  }
  public function countByCategory(){
    $this->db->select_as("COUNT(*)",'total',0);
    $this->db->select_as("category",'category',0);
    $this->db->from($this->tbl,$this->tbl_as);
    $this->db->group_by("category");
    return $this->db->get();
  }
}</pre>
					<p>at the controller, we assumed has file named blog.php</p>
          <pre>class Blog extends Sene_Controller{
  public function __construct(){
    parent::__construct();
    $this->load('blog_model','bm'); #class scope model
  }
  public function index(){
    $blogs = $this->bm->countByCategory();
    $this->debug($blogs);
  }
}</pre>
        </div>
      </div>

        </div>

        <div class="columns">
          <div class="column">
            <b-button tag="router-link" to="/4.0.0/model/group_by" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Model::group_by
            </b-button>
          </div>
          <div class="column is-2">&nbsp;</div>
          <div class="column">
            <b-button tag="router-link" to="/4.0.0/model/order_by" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Model::order_by
            </b-button>
          </div>
        </div>

      </div>
    </div>
  </template>
<script>
  export default {
    layout: 'v4.0.0',
    data() {
      return {
        title: 'Model::group_by - Seme Framework v4.0.0'
      }
    },
    head() {
      return {
        title: this.title,
      }
    }
  }
</script>
