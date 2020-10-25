<template>
<div class="section">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul class="breadcrumbs">
            <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
<li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
            <li class="unavailable">Model</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Model</h1>
					<p>Model is a class contain about communication from framework to database. Model is a bridge for data that can be fetch or push to database from controller. The method of model can only executed from controller class.</p>

					<pre>
class Blog_Model extends SENE_Model{
&#x9;var $tbl = &#x27;blog&#x27;;
&#x9;var $tbl_as = &#x27;b&#x27;;
&#x9;public function __construct(){
&#x9;&#x9;parent::__construct();
&#x9;&#x9;$this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
&#x9;}
}
					</pre>
					<h2>Composition</h2>
					<p>Model contain about class name which is match with its file name. Filename only use lower case, but there is no restriction on class name for using uppercase or camel case. Method only Extended by Sene_Model or extending from core model that extend sene_model before. Same as controller, class model have to re-executed their parent constructor using <code>parent::__construct();</code> to get all functional of model.</p>
					<h3>Naming Standard</h3>
					<p>Actually this not a requirement, but Seme Framework has recommendation for naming model. Model on Seme Framework located at <code>app/model/</code> you create your new file model inside that folder. But, if you have bigger apps you can start considering separated model inside folder. Seme Framework recommend the folder splitted by Major Use for creating folder, such as Front stand for frontend, admin stands for admin page, api stands for API development etc.</p>
					<p>Different from directory name, Seme Framework suggest give name of model like exactly table name in your working database fill it with suffix model for avoiding colision with controller class name. Here is the example scheme.</p>
					<pre>
app/model/
-front/
--user_model.php
--blog_model.php
-admin/
--user_model.php
--blog_model.php
					</pre>
					<h2>Using Query Builder</h2>
					<p>Seme Framework model allowed you to use our query builder method that can help reuse your code in for another model. So, you can simply use copy-paste and change the <code>$tbl</code> properties of your class model. Here is the example:</p>

					<pre>
class Blog_Model extends SENE_Model{
&#x9;var $tbl = &#x27;blog&#x27;;
&#x9;var $tbl_as = &#x27;b&#x27;;
&#x9;public function __construct(){
&#x9;&#x9;parent::__construct();
&#x9;}
&#x9;public function getAll(){
&#x9;&#x9;$this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
&#x9;&#x9;return $this-&#x3E;db-&#x3E;get();
&#x9;}
&#x9;public function countAll(){
&#x9;&#x9;$this-&#x3E;db-&#x3E;select_as(&#x27;COUNT(*)&#x27;,&#x27;total&#x27;,0);
&#x9;&#x9;$this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
&#x9;&#x9;$d = $this-&#x3E;db-&#x3E;get_first();
&#x9;&#x9;if(isset($d-&#x3E;total)) return $d-&#x3E;total;
&#x9;&#x9;return 0;
&#x9;}
&#x9;public function getById($id){
&#x9;&#x9;$this-&#x3E;db-&#x3E;where(&#x27;id&#x27;,$id);
&#x9;&#x9;$this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
&#x9;&#x9;return $this-&#x3E;db-&#x3E;get_first();
&#x9;}
&#x9;public function set($di=array()){
&#x9;&#x9;$this-&#x3E;db-&#x3E;insert($this-&#x3E;tbl,$di);
&#x9;&#x9;return $this-&#x3E;db-&#x3E;last_id;
&#x9;}
&#x9;public function update($id,$du=array()){
&#x9;&#x9;$this-&#x3E;db-&#x3E;where(&#x27;id&#x27;,$id);
&#x9;&#x9;return $this-&#x3E;db-&#x3E;update($this-&#x3E;tbl,$du);
&#x9;}
&#x9;public function del($id){
&#x9;&#x9;$this-&#x3E;db-&#x3E;where(&#x22;id&#x22;,$id);
&#x9;&#x9;return $this-&#x3E;db-&#x3E;delete($this-&#x3E;tbl);
&#x9;}
}
					</pre>
					<h3>Debug Query</h3>
					<p>Seme Framework has debugging feature on each Query Builder methods.</p>
					<ul>
						<li>$this-&#x3E;db-&#x3E;get(&#x27;object&#x27;,<code>1</code>)</li>
						<li>$this-&#x3E;db-&#x3E;get_first(&#x27;object&#x27;,<code>1</code>)</li>
						<li>$this-&#x3E;db-&#x3E;insert($this-&#x3E;tbl,$di,0,<code>1</code>)</li>
						<li>$this-&#x3E;db-&#x3E;update($this-&#x3E;tbl,<code>1</code>);</li>
						<li>$this-&#x3E;db-&#x3E;delete($this-&#x3E;tbl,<code>1</code>);</li>
					</ul>
        </div>
      </div>

    </div>


    <div class="columns">
      <div class="column">
        <div class="buttons">
          <b-button tag="router-link" to="/4.0.0/globals/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Global
          </b-button>
          <b-button tag="router-link" to="/4.0.0/model/select" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Model::select
          </b-button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  layout: 'v4.0.0',
  data (){
    return {
      name: 'Seme Framework v4.0.0',
      suffix: ' - Seme Framework v4.0.0 Documentation',
      title: 'Class Model',
      description: 'Learn more about Class Model of Seme Framework version 4.0.0 through this documentation.'
    }
  },
  head() {
    return {
      title: this.title+this.suffix,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.name+': '+this.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        }
      ]
    }
  }
}
</script>
