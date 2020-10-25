<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/model">Model</NuxtLink></li>
          <li class="unavailable">select_as Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Select AS Method</h1>
            <p>Select AS method is part of database class builder for selecting column data into a table with aliases.</p>
            <h2>Parameters</h2>
            <p>Update method has 3 required parameters that is <b>column name</b> and <b>value</b>, another parameters are optional. Here is the completed parameters can be used by where methods</p>
            <pre>$this->db->select_as(string $column_name_or_function, string $alias, bool $force_escape): dbObject</pre>
            <h3>$column_name_or_function</h3>
            <p><b>Column Name</b> can be single column name, or can be filled with wildcard "*", or can be filled with MySQL function.</p>
            <h3>$alias</h3>
            <p><b>Alias</b> Aliased name of <b>$column_name_or_function</b>.</p>
            <h3>$force_escape</h3>
            <p><b>Boolean Flag</b> Force escape the column name. <i>optional</i>.</p>

            <h2>Example usage</h2>
            <p>Here is the examples using select_as method. See the first of this page for full example.</p>
            <h3>Basic Usage</h3>
            <p>For example we assumed want to add new data in blog table. First, in the model:</p>
            <pre>
class Blog_Model extends SENE_Model{
  var $tbl = &#x27;blog&#x27;;
  var $tbl_as = &#x27;b&#x27;;
  public function __construct(){
    parent::__construct();
  }
  public function countList(){
    $this-&#x3E;db-&#x3E;select_as(&#x22;COUNT(*)&#x22;,&#x22;total&#x22;,0);
    $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
    return $this-&#x3E;db-&#x3E;get_first();
  }
  public function translated($id){
    $this-&#x3E;db-&#x3E;select(&#x22;id&#x22;,&#x22;blog_id&#x22;,0);
    $this-&#x3E;db-&#x3E;select(&#x22;title&#x22;,&#x22;judul&#x22;,0);
    $this-&#x3E;db-&#x3E;select(&#x22;content&#x22;,&#x22;isi&#x22;,0);
    $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
    $this-&#x3E;db-&#x3E;where_as(&#x22;id&#x22;,$id);
    return $this-&#x3E;db-&#x3E;get_first();
  }
  public function allButModified($id){
    $this-&#x3E;db-&#x3E;select(&#x22;$this-&#x3E;tbl_as.*, id&#x22;,&#x22;blog_id&#x22;,0);
    $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
    $this-&#x3E;db-&#x3E;where_as(&#x22;id&#x22;,$id);
    return $this-&#x3E;db-&#x3E;get_first();
  }
}
            </pre>
              <p>at the controller, we assumed has file named blog.php</p>
              <pre>
class Blog extends Sene_Controller{
  public function __construct(){
    parent::__construct();
    $this->load('blog_model','bm'); #class scope model
  }
  public function index(){
    $blogs = $this->bm->countList();
    $this->debug($blogs);
  }
  public function detail($id){
    $blog = $this->bm->translated($id);
    $this->debug($blog);
  }
  public function all($id){
    $blog = $this->bm->allButModified($id);
    $this->debug($blog);
  }
}
              </pre>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <b-button tag="router-link" to="/4.0.0/model/select/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
                Model::select
              </b-button>
            </div>
            <div class="column is-2">&nbsp;</div>
            <div class="column">
              <b-button tag="router-link" to="/4.0.0/model/from" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
                Model::from
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
      suffix: ' - Seme Framework v4.0.0 Documentation',
      title: 'Model::select_as method',
      description: 'Learn more about select_as method on SENE_Model class from Seme Framework.'
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
