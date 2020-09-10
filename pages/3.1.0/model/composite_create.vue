<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Home</NuxtLink></li>
              <li class=""><NuxtLink to="/model">Model</NuxtLink></li>
            <li class="unavailable">composite_create method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Composite Create Method</h1>
					<p>Composite Create is for building multiple join condition for table that have two or more primary key.</p>
					<p>This method can be used properly with <a href="/model-join_composite.html">join_composite</a> method, for joining the table .</p>

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
					<p>composite_create method has 3 required parameters and will returned join composite object</p>
					<h3>COLUMN_NAME_1</h3>
					<p>Column name for first table.</p>
					<h3>Relational Operator</h3>
					<p>Value required for condition, value consists of "=","<>".</p>
					<h3>COLUMN_NAME_1</h3>
					<p>Column name for second table.</p>
					<h3>Relational Operator</h3>
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

