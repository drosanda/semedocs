<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/model">Model</NuxtLink></li>
          <li class="unavailable">join_composite method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Join Composite Method</h1>
            <p>join_composite method purpose is for joining the table with multiple primary key.</p>
            <p>We can achieved the conditions of joining multiple primary key with <a href="/model-composite_create">composite_create</a> method.</p>

            <pre>
class Blog_Model extends SENE_Model{
var $tbl = 'd_order';
var $tbl_as = 'dor';
var $tbl2 = 'b_seller';
var $tbl2_as = 'bs';
public function __construct(){
  parent::__construct();
  $this->db->from($this->tbl,$this->tbl_as);
}
private function __joinTbl2(){
  $composites = array();
  $composites[] = $this->db->composite_create("$this->tbl_as.nation_code","=","$this->tbl_as.nation_code");
  $composites[] = $this->db->composite_create("$this->tbl_as.b_seller_id","=","$this->tbl_as.id");
  return $composites;
}
public function getByOrderId($id){
  $this->db->join_composite($this->tbl2,$this->tbl2_as,$this->__joinTbl2(),"inner");
  $this->db->where_as("$this->tbl_as.id",$this->db->esc($id));
  return $this->db->get_first();
}
}
          </pre>
          <h2>Parameters</h2>
          <p>join_composite method has 3 required parameters and will returned join composite object</p>
          <h3>Table Name 1</h3>
          <p>The table for joined with current table.</p>
          <h3>Alias of Table Name 1</h3>
          <p>The alias table for joined with current table.</p>
          <h3>Array of Join Composite Object</h3>
          <p>Value required from array of object from composite_create.</p>
          <h3>Join Method</h3>
          <p>Join method value. Default empty string. Value consist of, inner, outer, left, right.</p>
          <h3>Relational Operator</h3>
        </div>
      </div>

    </div>



    <div class="columns">
      <div class="column">
        <b-button tag="router-link" to="/4.0.0/model/join/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
          Model::join
        </b-button>
      </div>
      <div class="column is-2">&nbsp;</div>
      <div class="column">
        <b-button tag="router-link" to="/4.0.0/model/composite_create" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
          Model::composite_create
        </b-button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  layout: 'v4.0.0',
  data() {
    return {
      title: 'Model::join_composite - Seme Framework v4.0.0'
    }
  },
  head() {
    return {
      title: this.title,
    }
  }
}
</script>
