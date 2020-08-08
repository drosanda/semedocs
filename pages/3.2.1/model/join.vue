<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Home</NuxtLink></li>
<li class=""><NuxtLink to="/3.2.1/">3.2.1</NuxtLink></li>
              <li class=""><NuxtLink to="/3.2.1/model">Model</NuxtLink></li>
            <li class="unavailable">Join Method</li>
          </ul>
        </nav>
        <div class="columns">
        <div class="column">
        <div class="content">
          <h1 class="">Join Method</h1>
					<p><b>Join</b> method is part of database for joining table.</p>
					<h2>Parameters</h2>
					<p>Update method has 6 required parameters.</p>
					<pre>$this->db->join(
            string $table2,
            string $table2_alias,
            string $table2_column_to_joined,
            string $table1_alias,
            string $table1_column_to_joined,
            string $join_method
          ): dbObject</pre>
          <h3>$table_name</h3>
          <p><b>Table Name</b> refer to table name.</p>
          <h3>$alias</h3>
          <p><b>Alias</b> Aliased name of <b>$table_name</b>.</p>
					<h2>Example usage</h2>
					<p>Here is the examples using select method. See the first of this page for full example.</p>
          <h3>Basic Usage</h3>
          <p>For example we assumed want to add new data in blog table. First, in the model:</p>
          <pre>class Blog_Model extends SENE_Model{
  var $tbl = 'blog';
  var $tbl_as = 'b';
  var $tbl2 = 'user';
  var $tbl2_as = 'u';

  public function __construct(){
	 parent::__construct();
  }
  public function getAll(){
    $this->db->select_as("$this->tbl_as.*, $this->tbl2_as.name","author",0);
    $this->db->from($this->tbl,$this->tbl_as);
    $this->db->join($this->tbl2,$this->tbl2_as,"user_id",$this->tbl_as,"id","");
    return $this->db->get();
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

