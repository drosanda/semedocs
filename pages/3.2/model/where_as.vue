<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
<li class=""><NuxtLink to="/3.2">3.2.x</NuxtLink></li>
              <li class=""><NuxtLink to="/3.2/model">Model</NuxtLink></li>
            <li class="unavailable">Where AS Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Where AS Method</h1>
					<p>Where method is part of database class builder for filtering data compatible with WHERE Clause on SQL. This method support chained, and has flow from top to bottom while bracket are used. The <b>difference</b> is this method does not automatically escaped</p>

					<pre>class Blog_Model extends SENE_Model{
	var $tbl = 'd_order';
	var $tbl_as = 'dor';
	var $tbl2 = 'b_user';
	var $tbl2_as = 'bu';
	public function __construct(){
		parent::__construct();
		$this->db->from($this->tbl,$this->tbl_as);
	}
	public function getNow($id){
		$this->db->select("$this->tbl2_as.fname",'fname',0);
		$this->db->select("$this->tbl_as.date_order",'date_order',0);
		$this->db->join($this->tbl2,$this->tbl2_as,'id',$this->tbl_as,'b_user_id','');
		$this->db->where_as("DATE($this->tbl_as.date_order)","CURRENT_DATE()","AND","=",0,0);
		return $this->db->get();
	}
	public function getYesterday($b_user_id){
		$this->db->select("$this->tbl_as.*, $this-tbl_as.status_text",'status_text',0);
		$this->db->select("$this->tbl2_as.fname",'fname',0);
		$this->db->select("$this->tbl2_as.email",'email',0);
		$this->db->where_as("$this->tbl_as.status_text",$this->db->esc("order_invoice"),"AND","=",0,0);
		$this->db->where_as("DATE(date_order)","DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)","AND","=",0,0);
		return $this->db->get();
	}
}
					</pre>
					<h2>Parameters</h2>
					<p>Where method has 2 required parameters that is <b>column name</b> and <b>value</b>, another parameters are optional. Here is the completed parameters can be used by where methods</p>
					<pre>$this->db->where(
	COLUMN_NAME,
	VALUE,
	" AND | OR ",
	"= | != | <= | >= | < | > | <> |
	like | like% | %like | %like% |
	notlike | notlike% |%notlike | %notlike%
	",
	OPENBRACKET,
	CLOSEBRACKET
);</pre>
					<h3>COLUMN_NAME</h3>
					<p>Column name required for filtering data from table. The columname should exist on selected table. This method has unescaped value.</p>
					<h3>VALUE</h3>
					<p>Value required for matched with data on table. This method has unescaped value.</p>
					<h3>Combining Method</h3>
					<p>Default value is AND, this parameter useful for filtering data for multiple condition. Available value <b>AND</b> or <b>OR</b>. Value of this parameter is not case sensitive.</p>
					<h3>Relational Operator</h3>
					<p>Value required for matched COLUMN_NAME with value. Available value:</p>
					<ul>
					<li>=</li>
					<li>&lt;</li>
					<li>&gt;</li>
					<li>&lt;=</li>
					<li>&gt;=</li>
					<li>&lt;&gt;</li>
					<li>like</li>
					<li>like%</li>
					<li>%like</li>
					<li>%like%</li>
					<li>notlike</li>
					<li>notlike%</li>
					<li>%notlike</li>
					<li>%notlike%</li>
					</ul>
					<p>Value of this parameter is not case sensitive.</p>
					<h3>OPEN BRACKET</h3>
					<p>Required for adding bracket for prioritize condition filtering, default value 0. Available value <b>1</b> and <b>0</b>.</p>
					<h3>CLOSE BRACKET</h3>
					<p>Required for adding bracket for prioritize condition filtering, default value 0. Available value <b>1</b> and <b>0</b>.</p>
					<h2>Escaping Value</h2>
					<p>Escaping value is required for string matching. Here is the example</p>
					<pre>$this->db->where_as("$this->tbl_as.status_text",$this->db->esc("order_completed"));</pre>
					<h2>Basic Where Condition</h2>
					<p>For basic usage, Seme Framework has basic where method called <code>where</code> method</a>.</p>
        </div>
      </div>

        </div>
      </div>
    </div>
  </template>
<script>
  export default {
    layout: 'v3.2'
    // page component definitions
  }
</script>
