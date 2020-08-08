<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Home</NuxtLink></li>
<li class=""><NuxtLink to="/3.2.1/">3.2.1</NuxtLink></li>
              <li class=""><NuxtLink to="/3.2.1/model">Model</NuxtLink></li>
            <li class="unavailable">Between Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Between Method</h1>
					<p>Between method is part of database class builder for filtering data compatible with BETWEEN Clause on SQL. This method support chained, and has flow from top to bottom while bracket are used.</p>

					<pre>
class Blog_Model extends SENE_Model{
	var $tbl = 'd_order';
	var $tbl_as = 'dor';
	public function __construct(){
		parent::__construct();
		$this->db->from($this->tbl,$this->tbl_as);
	}
	public function getById($id){
		$this->db->where("id",$id,"AND","=",0,0);
		return $this->db->get_first();
	}
	public function getCancel(){
		$this->db->where("order_status","order_cancel","AND","=",0,0);
		return $this->db->get();
	}
	public function getCancelByUser($b_user_id){
		$this->db->where("order_status","order_cancel","AND","=",0,0)
		$this->db->where("b_user_id",$b_user_id,"AND","=",0,0);
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
					<p>Column name required for filtering data from table. The columname should exist on selected table. This method has automatically escaped.</p>
					<h3>VALUE</h3>
					<p>Value required for matched with data on table. This method has automatically escaped.</p>
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
					<h2>Example usage</h2>
					<p>Here is the examples using where method, makes sure another from method and get method has executed for real result. See the first of this page for full example.</p>
					<p>Basic example</p>
					<pre>SELECT * FROM d_order WHERE `id` = 1</pre>
					<pre>$this->db->where("id",1);</pre>
					<br>
					<p>Using AND / OR</p>
					<pre>SELECT *
FROM d_order
WHERE
	`a_company_id` = 1 OR
	`b_user_id` = 1</pre>
					<pre>$this->db->where("b_user_id",1,'OR')->where("a_company_id",1,'AND');</pre>
					<br>
					<p>Using Relational Operator</p>
					<pre>SELECT *
FROM d_order
WHERE
	`b_user_id` = 1 AND
	`grand_total` >= 1000 AND
	`status_text` LIKE 'order_completed'</pre>
					<pre>$this->db
	->where("b_user_id",1)
	->where("grand_total",1000,"and",'>=')
	->where("status_text",'order_completed',"and",'like');</pre>
					<br>
					<p>Using Bracket</p>
					<pre>SELECT *
FROM b_user
WHERE
	`status_text` LIKE 'active' AND
	(
		`fname` LIKE '%andre%' OR
		`lname` LIKE '%andre%' OR
		`city` LIKE '%andre%' OR
		`email LIKE '%andre%'
	)</pre>
					<pre>$this->db
	->where("status_text",'active','and','like')
	->where("fname",'andre',"and",'%like%',1,0)
	->where("lname",'andre',"and",'%like%',0,0)
	->where("city",'andre',"and",'%like%',0,0)
	->where("email",'andre',"and",'%like%',0,1);</pre>

					<h2>Advanced Where Condition</h2>
					<p>Seme Framework has advanced where method called <a href="/model-where-as.html">where_as method</a>.</p>

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

