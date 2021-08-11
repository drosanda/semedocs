<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
<li class=""><NuxtLink to="/3.2">3.2.x</NuxtLink></li>
              <li class=""><NuxtLink to="/3.2/model">Model</NuxtLink></li>
            <li class="unavailable">Get Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Get Method</h1>
					<p>Get method is part of database class builder for filtering result in array of array or array of object.</p>
					<h2>Parameters</h2>
					<p>Group By method has 2 parameter</p>
					<pre>$this->db->get_first([string $result_type, [bool $is_debug]]): mixed</pre>
          <h3>$result_type</h3>
          <p><b>Result type</b> consist of array and object, if value has "array" the result will be array of array otherwise will returned array of object.</p>
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
  public function getList($id){
    $this->db->select("id");
    $this->db->select("title");
    $this->db->select("content");
    $this->db->from($this->tbl,$this->tbl_as);
    return $this->db->get();
  }
  public function getListArray(){
    $this->db->select("id");
    $this->db->select("title");
    $this->db->select("content");
    $this->db->from($this->tbl,$this->tbl_as);
    return $this->db->get('array');
  }
  public function getListDebugQuery($id){
    $this->db->select("id");
    $this->db->select("title");
    $this->db->select("content");
    $this->db->from($this->tbl,$this->tbl_as);
    return $this->db->get('array',1);
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
    layout: 'v3.2'
    // page component definitions
  }
</script>

