<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
<li class=""><NuxtLink to="/3.2.1/">3.2.1</NuxtLink></li>
              <li class=""><NuxtLink to="/3.2.1/model">Model</NuxtLink></li>
            <li class="unavailable">Query Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Exec Method</h1>
					<p>Exec method is used executing the raw SQL agains the table.</p>
          <h2>Parameters</h2>
          <p>Query method has 1 required parameter.</p>
					<pre>$this->db->query(string $sql): boolean</pre>
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
	public function massUpdateProduct($id){
    $sql = 'UPDATE products SET is_published =0 WHERE DATE(date_created) < DATE("2019-01-01")';
		return $this->db->exec($sql);
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

