<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
              <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
              <li class=""><NuxtLink to="/4.0.0/model">Model</NuxtLink></li>
            <li class="unavailable">Update Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Update Method</h1>
					<p>Update method is part of database class builder for updating a table.</p>

					<h2>Parameters</h2>
					<p>Update method has 2 required parameters that is <b>column name</b> and <b>value</b>, another parameters are optional. Here is the completed parameters can be used by where methods</p>
					<pre>$this->db->update(string $table_name, array $data_update, [bool $is_debug=0]): bool</pre>
          <h3>$data_update</h3>
          <p><b>Data update</b> is key value pair in an array. The key refer to column name of the table.</p>
					<h2>Example usage</h2>
					<p>Here is the examples using insert method. See the first of this page for full example.</p>
          <h3>Basic Usage</h3>
          <p>For example we assumed want to edit title in blog table. First, in the model:</p>
          <pre>
class Blog_Model extends SENE_Model{
  var $tbl = &#x27;blog&#x27;;
  var $tbl_as = &#x27;b&#x27;;
  public function __construct(){
&#x9; parent::__construct();
  }
  public function update($id,$du){
    $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;,$id);
    $this-&#x3E;db-&#x3E;update($ths-&#x3E;tbl,$du);
  }
}
          </pre>
					<p>at the controller, we assumed has file named blog.php</p>
          <pre>
class Blog extends Sene_Controller{
  public function __construct(){
    parent::__construct();
    $this-&#x3E;load(&#x27;blog_model&#x27;,&#x27;bm&#x27;); #class scope model
  }
  public function index(){
    $id = 1;
    $du = array();
    $du[&#x27;title&#x27;] = &#x22;This is new title of this blog!&#x22;;
    $res = $this-&#x3E;bm-&#x3E;update($id,$du); //call the method on the model
    if($res){
      echo &#x27;Success&#x27;;
    }else{
      echo &#x27;failed&#x27;;
    }
  }
}
  </pre>

        </div>
      </div>

        </div>

        <div class="columns">
          <div class="column">
            <b-button tag="router-link" to="/4.0.0/model/insert_batch" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Model::insert_batch
            </b-button>
          </div>
          <div class="column is-2">&nbsp;</div>
          <div class="column">
            <b-button tag="router-link" to="/4.0.0/model/delete" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Model::delete
            </b-button>
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
      suffix: ' - Seme Framework 4',
      title: 'Model::update method',
      description: 'Learn more about update method on SENE_Model class from Seme Framework.'
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
