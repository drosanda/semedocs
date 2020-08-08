<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Home</NuxtLink></li>
              <li class=""><NuxtLink to="/model">Model</NuxtLink></li>
            <li class="unavailable">Last ID Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Last ID Method</h1>
					<p>Last ID method is part of database class builder that returned postive integer value if an ID has generated automatically from auto increment feature.</p>
					<h2>Parameters</h2>
					<p>Last ID method has no parameter.</p>
					<pre>$this->db->lastId(): integer</pre>
          <h2>Example usage</h2>
					<p>Here is the examples using Last ID method. See the first of this page for full example.</p>
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
    return $this->db->lastId();
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

