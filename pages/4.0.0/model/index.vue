<template>
<div class="section">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul class="breadcrumbs">
            <li class=""><NuxtLink to="/">Home</NuxtLink></li>
<li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
            <li class="unavailable">Model</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Model</h1>
					<p>Model is a class contain about communication from framework to database. Model is a bridge for data that can be fetch or push to database from controller. The method of model can only executed from controller class.</p>

					<pre>class Blog_Model extends SENE_Model{
	var $tbl = 'blog';
	var $tbl_as = 'b';
	public function __construct(){
		parent::__construct();
		$this->db->from($this->tbl,$this->tbl_as);
	}
}
					</pre>
					<h2>Composition</h2>
					<p>Model contain about class name which is match with its file name. Filename only use lower case, but there is no restriction on class name for using uppercase or camel case. Method only Extended by Sene_Model or extending from core model that extend sene_model before. Same as controller, class model have to re-executed their parent constructor using <code>parent::__construct();</code> to get all functional of model.</p>
					<h3>Naming Standard</h3>
					<p>Actually this not a requirement, but Seme Framework has recommendation for naming model. Model on Seme Framework located at <code>app/model/</code> you create your new file model inside that folder. But, if you have bigger apps you can start considering separated model inside folder. Seme Framework recommend the folder splitted by Major Use for creating folder, such as Front stand for frontend, admin stands for admin page, api stands for API development etc.</p>
					<p>Different from directory name, Seme Framework suggest give name of model like exactly table name in your working database fill it with suffix model for avoiding colision with controller class name. Here is the example scheme.</p>
					<pre>app/model/
-front/
--user_model.php
--blog_model.php
-admin/
--user_model.php
--blog_model.php
					</pre>
					<h2>Using Query Builder</h2>
					<p>Seme Framework model allowed you to use our query builder method that can help reuse your code in for another model. So, you can simply use copy-paste and change the <code>$tbl</code> properties of your class model. Here is the example:</p>

					<pre>class Blog_Model extends SENE_Model{
	var $tbl = 'blog';
	var $tbl_as = 'b';
	public function __construct(){
		parent::__construct();
	}
	public function getAll(){
		$this->db->from($this->tbl,$this->tbl_as);
		return $this->db->get();
	}
	public function countAll(){
		$this->db->select_as('COUNT(*)','total',0);
		$this->db->from($this->tbl,$this->tbl_as);
		$d = $this->db->get_first();
		if(isset($d->total)) return $d->total;
		return 0;
	}
	public function getById($id){
		$this->db->where('id',$id);
		$this->db->from($this->tbl,$this->tbl_as);
		return $this->db->get_first();
	}
	public function insert($di=array()){
		$this->db->insert($this->tbl,$di);
		return $this->db->last_id;
	}
	public function edit($id,$du=array()){
		$this->db->where('id',$id);
		return $this->db->update($this->tbl,$du);
	}
	public function delete($id){
		$this->db->where("id",$id);
		return $this->db->delete($this->tbl);
	}
}
					</pre>
					<h3>Debug Query</h3>
					<p>Seme Framework has debugging feature on each Query Builder methods.</p>
					<ul>
						<li>$this->db->get('object',1)</li>
						<li>$this->db->get_first('object',1)</li>
						<li>$this->db->insert($this->tbl,$di,0,1)</li>
						<li>$this->db->update($this->tbl,1);</li>
						<li>$this->db->delete($this->tbl,1);</li>
					</ul>
        </div>
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

