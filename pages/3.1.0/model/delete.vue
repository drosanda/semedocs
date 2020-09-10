<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Home</NuxtLink></li>
              <li class=""><NuxtLink to="/model">Model</NuxtLink></li>
            <li class="unavailable">Delete Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Delete Method</h1>
					<p>Delete method for deleting data in the table.</p>
					<pre>$this->db->delete(string $table_name [, int $is_debug=0]): boolean</pre>
          <h2>Parameters</h2>
          <p>Where method has 2 parameters that is <b>table name</b> and <b>debug flag</b>.</p>
          <h3>$table_name</h3>
          <p><b>Table Name</b> can be string contain table name.</p>
					<h2>Example usage</h2>
					<p>Here is the examples using <b>delete method</b>. See the first of this page for full example.</p>
          <h3>Basic Usage</h3>
          <p>For example we assumed want to delete data in blog table. First, in the model:</p>
<pre>class Blog_Model extends SENE_Model{
	var $tbl = 'd_order';
	var $tbl_as = 'dor';
	public function __construct(){
		parent::__construct();
		$this->db->from($this->tbl,$this->tbl_as);
	}
	public function delete($id){
    $this->db->where("id",$id);
		return $this->db->delete($this->tbl);
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
    layout: 'v3.1.0'
    // page component definitions
  }
</script>

