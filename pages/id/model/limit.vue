<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
<li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
              <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
            <li class="unavailable">Limit Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Limit Method</h1>
					<p>Limit Method is part of database class builder for limiting query result. It will produce same as <i>SELECT * FROM table WHERE 1 LIMIT [A],[B]</i>.</p>
					<h2>Parameters</h2>
					<p>Update method has 2 required parameters that is <b>offset</b> and <b>count</b>.</p>
					<pre>$this->db->limit(int $offset, int $count): dbObject</pre>
          <h3>$offset</h3>
          <p><b>Offset</b> can be zero or positive integer for specifying the offset of the first row to be returned.</p>
          <h3>$count</h3>
          <p><b>Count</b> can be zero or positive integer for specifying the maximum number of rows to be returned.</p>
					<h2>Example usage</h2>
					<p>Here is the examples using select method. See the first of this page for full example.</p>
          <h3>Basic Usage</h3>
          <p>For example we assumed want to add new data in blog table. First, in the model:</p>
          <pre>class Blog_Model extends SENE_Model{
  var $tbl = 'blog';
  var $tbl_as = 'b';
  public function __construct(){
	 parent::__construct();
  }
  public function latest(){
    $this->db->select("*");
    $this->db->from($this->tbl,$this->tbl_as);
    $this->db->order_by("date_create","desc");
    $this->db->limit(0,5);
    return $this->db->get();
  }
  public function latest3ExceptOne(){
    $this->db->select("*");
    $this->db->from($this->tbl,$this->tbl_as);
    $this->db->order_by("date_create","desc");
    $this->db->limit(1,4);
    return $this->db->get();
  }
}</pre>

        </div>
      </div>

        </div>

        <div class="columns">
          <div class="column">
            <b-button tag="router-link" to="/id/model/order_by" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Model::order_by
            </b-button>
          </div>
          <div class="column is-2">&nbsp;</div>
          <div class="column">
            <b-button tag="router-link" to="/id/model/get" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Model::get
            </b-button>
          </div>
        </div>

      </div>
    </div>
  </template>
<script>
  export default {
    layout: 'id',
    data() {
      return {
        title: 'Model::limit - Seme Framework v4.0.0'
      }
    },
    head() {
      return {
        title: this.title,
      }
    }
  }
</script>
