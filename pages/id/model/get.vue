<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
              <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
              <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
            <li class="unavailable">Get Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Get Method</h1>
					<p>Get method is part of database class builder for filtering result in array of array or array of object.</p>
					<h2>Parameters</h2>
					<p>Group By method has 2 parameter</p>
					<pre>$this->db->get_first([string $result_type, [bool $is_debug]]): mixed</pre>
          <h3>$result_type</h3>
          <p><b>Result type</b> consist of array and object, if value has "array" the result will be array of array otherwise will returned array of object.</p>
					<h2>Example usage</h2>
					<p>Here is the examples using select method. See the first of this page for full example.</p>
          <h3>Basic Usage</h3>
          <p>For example we assumed want to add new data in blog table. First, in the model:</p>
          <pre>
class Blog_Model extends SENE_Model{
  var $tbl = &#x27;blog&#x27;;
  var $tbl_as = &#x27;b&#x27;;
  public function __construct(){
&#x9; parent::__construct();
  }
  public function getList($id){
    $this-&#x3E;db-&#x3E;select(&#x22;id&#x22;);
    $this-&#x3E;db-&#x3E;select(&#x22;title&#x22;);
    $this-&#x3E;db-&#x3E;select(&#x22;content&#x22;);
    $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
    return $this-&#x3E;db-&#x3E;get();
  }
  public function getListArray(){
    $this-&#x3E;db-&#x3E;select(&#x22;id&#x22;);
    $this-&#x3E;db-&#x3E;select(&#x22;title&#x22;);
    $this-&#x3E;db-&#x3E;select(&#x22;content&#x22;);
    $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
    return $this-&#x3E;db-&#x3E;get(&#x27;array&#x27;);
  }
  public function getListDebugQuery($id){
    $this-&#x3E;db-&#x3E;select(&#x22;id&#x22;);
    $this-&#x3E;db-&#x3E;select(&#x22;title&#x22;);
    $this-&#x3E;db-&#x3E;select(&#x22;content&#x22;);
    $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
    return $this-&#x3E;db-&#x3E;get(&#x27;array&#x27;,1);
  }
}
          </pre>
        </div>
      </div>

        </div>


        <div class="columns">
          <div class="column">
            <b-button tag="router-link" to="/id/model/limit" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Model::limit
            </b-button>
          </div>
          <div class="column is-2">&nbsp;</div>
          <div class="column">
            <b-button tag="router-link" to="/id/model/get_first" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Model::get_first
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
      title: 'Model::get method',
      description: 'Pelajari selengkapnya tentang get method on SENE_Model class from Seme Framework.'
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