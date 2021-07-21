<template>
  <div class="section">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul class="breadcrumbs">
            <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
            <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
            <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
          <li class="unavailable">Join Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Join Method</h1>
    				<p><b>Join</b> method is part of database for joining table.</p>
    				<h2>Parameters</h2>
    				<p>Update method has 6 required parameters.</p>
    				<pre>
$this-&#x3E;db-&#x3E;join(
string $table2,
string $table2_alias,
string $table2_column_to_joined,
string $table1_alias,
string $table1_column_to_joined,
string $join_method
): dbObject
            </pre>
            <h3>$table_name</h3>
            <p><b>Table Name</b> refer to table name.</p>
            <h3>$alias</h3>
            <p><b>Alias</b> Aliased name of <b>$table_name</b>.</p>
      			<h2>Example usage</h2>
      			<p>Here is the examples using select method. See the first of this page for full example.</p>
            <h3>Basic Usage</h3>
            <p>For example we assumed want to add new data in blog table. First, in the model:</p>
            <pre>
class Blog_Model extends SENE_Model{
  var $tbl = &#x27;blog&#x27;;
  var $tbl_as = &#x27;b&#x27;;
  var $tbl2 = &#x27;user&#x27;;
  var $tbl2_as = &#x27;u&#x27;;

  public function __construct(){
   parent::__construct();
  }
  public function getAll(){
    $this-&#x3E;db-&#x3E;select_as(&#x22;$this-&#x3E;tbl_as.*, $this-&#x3E;tbl2_as.name&#x22;,&#x22;author&#x22;,0);
    $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
    $this-&#x3E;db-&#x3E;join($this-&#x3E;tbl2,$this-&#x3E;tbl2_as,&#x22;user_id&#x22;,$this-&#x3E;tbl_as,&#x22;id&#x22;,&#x22;&#x22;);
    return $this-&#x3E;db-&#x3E;get();
  }
}
            </pre>
          </div>
        </div>
      </div>


      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/id/model/from/" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Model::from
          </b-button>
        </div>
        <div class="column is-2">&nbsp;</div>
        <div class="column">
          <b-button tag="router-link" to="/id/model/join_composite" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Model::join_composite
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
        name: 'Seme Framework 4',
        suffix: ' - Seme Framework 4',
        title: 'Model::join method',
        description: 'Pelajari selengkapnya tentang join method on SENE_Model class from Seme Framework.'
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
