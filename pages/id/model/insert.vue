<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
          <li class="unavailable">Insert Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Insert Method</h1>
            <p>Insert method is part of database class builder for inserting data into a table.</p>
            <h2>Parameters</h2>
            <p>Insert method has 2 required parameters that is <b>table name</b> and <b>values</b> in key value format.</p>
            <pre>
$this-&#x3E;db-&#x3E;insert(string $table_name, array $data_insert, [bool $is_multiple=0], [bool $is_debug=0]): bool
            </pre>
            <h3>$data_insert</h3>
            <p><b>Data insert</b> is key value pair in an array. The key refer to column name of the table.</p>

            <h2>Example usage</h2>
            <p>Here is the examples using insert method. See the first of this page for full example.</p>
            <h3>Basic Usage</h3>
            <p>For example we assumed want to add new data in blog table. First, in the model:</p>
            <pre>
&#x3C;?php
class Blog_Model extends SENE_Model{
  var $tbl = &#x27;blog&#x27;;
  var $tbl_as = &#x27;b&#x27;;
  public function __construct(){
    &#x9; parent::__construct();
  }
  public function insert($di){
    $this-&#x3E;db-&#x3E;insert($ths-&#x3E;tbl,$di);
  }
}
            </pre>
            <p>at the controller, we assumed has file named blog.php</p>
            <pre>
&#x3C;?php
class Blog extends Sene_Controller{
  public function __construct(){
    parent::__construct();
    $this-&#x3E;load(&#x27;blog_model&#x27;,&#x27;bm&#x27;); #class scope model
  }
  public function index(){
    $id = 1;
    $di = array();
    $di[&#x27;id&#x27;] = 1;
    $di[&#x27;title&#x27;] = &#x22;This is new title of this blog!&#x22;;
    $di[&#x27;content&#x27;] = &#x22;This is new title of this blog!&#x22;;
    $res = $this-&#x3E;bm-&#x3E;insert($id,$di); //call the method on the model
    if($res){
      echo &#x27;Success&#x27;;
    }else{
      echo &#x27;failed&#x27;;
    }
  }
}
            </pre>

            <h2>MySQL Builtin Functions</h2>
            <p>Seme Framework has supported the MySQL builtin function, such as:</p>
            <ul>
              <li><code>NOW()</code></li>
            </ul>

            <h3>Example usage</h3>
            <p>Here is the example usage for using MySQL builtin function in a controller.</p>
            <pre>
...
//data input
$di = array();
...
$di[&#x27;cdate&#x27;] = &#x27;NOW()&#x27;;
..
$res = $this-&#x3E;aakm-&#x3E;set($di);
...
            </pre>

            <b-message type="is-info">
              <p>You can see the full of source code on <NuxtLink to="/id/tutorial/basic-api/">Tutorial: Basic API</NuxtLink>.</p>
            </b-message>
          </div>
        </div>

      </div>


      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/id/model/get_first" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Model::get_first
          </b-button>
        </div>
        <div class="column is-2">&nbsp;</div>
        <div class="column">
          <b-button tag="router-link" to="/id/model/insert_multi" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Model::insert_multi
          </b-button>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'id',
  data (){
    return {
      name: 'Seme Framework v4.0.0',
      suffix: ' - Dokumentasi Seme Framework v4.0.0',
      title: 'Model::insert method',
      description: 'Pelajari selengkapnya tentang get_first method on SENE_Model class from Seme Framework.'
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
