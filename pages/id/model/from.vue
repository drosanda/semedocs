<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">Bahasa Indonesia</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
          <li class="unavailable">From Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">From Method</h1>
            <p><b>From</b> method is part of database class builder for selecting table with its alias.</p>
            <h2>Parameters</h2>
            <p>Update method has 2 required parameters that is <b>table name</b> and <b>table alias</b>. Table alias are required for using <b>join</b> and <b>join_method</b></p>
            <pre>$this->db->from(string $table_name, string $table_alias): object</pre>
            <h3>$table_name</h3>
            <p><b>Table Name</b> refer to table name.</p>
            <h3>$alias</h3>
            <p><b>Alias</b> Aliased name of <b>$table_name</b>. required if you have call <b>join</b> method</p>
            <h2>Example usage</h2>
            <p>Here is the examples using select method. See the first of this page for full example.</p>
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
}
            </pre>

          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/id/model/select_as/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Model::select_as
          </b-button>
        </div>
        <div class="column is-2">&nbsp;</div>
        <div class="column">
          <b-button tag="router-link" to="/id/model/join" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Model::join
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
        title: 'Model::from method',
        description: 'Pelajari selengkapnya tentang from method on SENE_Model class from Seme Framework.'
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
