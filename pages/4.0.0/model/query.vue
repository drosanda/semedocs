<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
<li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
              <li class=""><NuxtLink to="/4.0.0/model">Model</NuxtLink></li>
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
          <pre>
class Blog_Model extends SENE_Model{
&#x9;var $tbl = &#x27;d_order&#x27;;
&#x9;var $tbl_as = &#x27;dor&#x27;;
&#x9;public function __construct(){
&#x9;&#x9;parent::__construct();
&#x9;&#x9;$this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
&#x9;}
&#x9;public function getReported($id){
&#x9;&#x9;$sql = &#x27;SELECT bk.name AS category
&#x9;&#x9;&#x9;FROM blog
&#x9;&#x9;&#x9;WHERE is_published = 1
&#x9;&#x9;&#x9;ORDER BY created_date DESC
&#x9;&#x9;&#x9;LIMIT 0,1;&#x27;;
&#x9;&#x9;return $this-&#x3E;db-&#x3E;query($sql);
&#x9;}
}
</pre>

        </div>
      </div>

        </div>

        <div class="columns">
          <div class="column">
            <b-button tag="router-link" to="/4.0.0/model/exec" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Model::exec
            </b-button>
          </div>
          <div class="column is-2">&nbsp;</div>
          <div class="column">
            <b-button tag="router-link" to="/4.0.0/model/last_id" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Model::last_id
            </b-button>
          </div>
        </div>

      </div>
    </div>
  </template>
<script>
  export default {
    layout: 'v4.0.0'
    // page component definitions
  }
</script>
