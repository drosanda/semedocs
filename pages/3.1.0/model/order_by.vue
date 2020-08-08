<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Home</NuxtLink></li>
              <li class=""><NuxtLink to="/model">Model</NuxtLink></li>
            <li class="unavailable">Order By Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Order By Method</h1>
					<p>Order By method is part of database class builder for sorting result query.</p>
					<h2>Parameters</h2>
					<p>Insert method has 2 required parameters that is <b>column name</b> and <b>sort direction</b>.</p>
					<pre>$this->db->group_by(string $column_name, string $sort_direction): dbObject</pre>
          <h3>$column_name</h3>
          <p><b>Column Name</b> can be filled by column name or function string.</p>
          <h3>$sort_direction</h3>
          <p><b>Sort Direction</b> value consist of asc and desc. "asc" for ascending and "desc" for descending</p>
					<h2>Example usage</h2>
					<p>Here is the examples using order_by method. See the first of this page for full example.</p>
          <h3>Basic Usage</h3>
          <p>For example we assumed want to add new data in blog table. First, in the model:</p>
          <pre>class Blog_Model extends SENE_Model{
  var $tbl = 'blog';
  var $tbl_as = 'b';
  public function __construct(){
	 parent::__construct();
  }
  public function getLatest($di){
    $this->db->order_by("create_date","desc");
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
    layout: 'blog'
    // page component definitions
  }
</script>

