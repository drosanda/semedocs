<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Home</NuxtLink></li>
              <li class=""><NuxtLink to="/model">Model</NuxtLink></li>
            <li class="unavailable">From Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">From Method</h1>
					<p><b>From</b> method is part of database class builder for selecting table with its alias.</p>
					<h2>Parameters</h2>
					<p>Update method has 2 required parameters that is <b>table name</b> and <b>table alias</b>. Table alias are required for using <b>join</b> and <b>join_method</b></p>
					<pre>$this->db->from(string $table_name, string $table_alias): object</pre>
          <h3>$table_name</h3>
          <p><b>Table Name</b> refer to table name.</p>
          <h3>$alias</h3>
          <p><b>Alias</b> Aliased name of <b>$table_name</b>.</p>
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

