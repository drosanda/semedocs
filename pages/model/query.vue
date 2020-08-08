<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Home</NuxtLink></li>
              <li class=""><NuxtLink to="/model">Model</NuxtLink></li>
            <li class="unavailable">Query Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Query Method</h1>
					<p>Query method is used to query the raw SQL.</p>
          <h2>Parameters</h2>
          <p>Query method has 1 required parameter.</p>
					<pre>$this->db->query(string $sql): arrayOfObject</pre>
          <h3>$sql</h3>
          <p><b>SQL</b> can be single command of SQL.</p>
					<h2>Example usage</h2>
					<p>Here is the examples using SQL method. See the first of this page for full example.</p>
          <h3>Basic Usage</h3>
          <p>For example we assumed want to add new data in blog table. First, in the model:</p>
          <pre>class Blog_Model extends SENE_Model{
	var $tbl = 'd_order';
	var $tbl_as = 'dor';
	public function __construct(){
		parent::__construct();
		$this->db->from($this->tbl,$this->tbl_as);
	}
	public function getReported($id){
    $sql = 'SELECT bk.name AS category FROM blog WHERE is_published = 1 ORDER BY created_date DESC LIMIT 0,1;';
		return $this->db->query($sql);
	}
}</pre>

        </div>
      </div>

        </div>
      </div>
    </div>
  </template>
