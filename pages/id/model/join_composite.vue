<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
          <li class="unavailable">join_composite method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Join Composite Method</h1>
            <p>join_composite method purpose is for joining the table with multiple primary key.</p>
            <p>We can achieved the conditions of joining multiple primary key with <NuxtLink to="/id/model/composite_create/">composite_create</NuxtLink> method.</p>

            <pre>
class Blog_Model extends SENE_Model{
var $tbl = &#x27;d_order&#x27;;
var $tbl_as = &#x27;dor&#x27;;
var $tbl2 = &#x27;b_seller&#x27;;
var $tbl2_as = &#x27;bs&#x27;;
public function __construct(){
  parent::__construct();
  $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
}
private function __joinTbl2(){
  $composites = array();
  $composites[] = $this-&#x3E;db-&#x3E;composite_create(&#x22;$this-&#x3E;tbl_as.nation_code&#x22;,&#x22;=&#x22;,&#x22;$this-&#x3E;tbl_as.nation_code&#x22;);
  $composites[] = $this-&#x3E;db-&#x3E;composite_create(&#x22;$this-&#x3E;tbl_as.b_seller_id&#x22;,&#x22;=&#x22;,&#x22;$this-&#x3E;tbl_as.id&#x22;);
  return $composites;
}
public function getByOrderId($id){
  $this-&#x3E;db-&#x3E;join_composite($this-&#x3E;tbl2,$this-&#x3E;tbl2_as,$this-&#x3E;__joinTbl2(),&#x22;inner&#x22;);
  $this-&#x3E;db-&#x3E;where_as(&#x22;$this-&#x3E;tbl_as.id&#x22;,$this-&#x3E;db-&#x3E;esc($id));
  return $this-&#x3E;db-&#x3E;get_first();
}
}
          </pre>
          <h2>Parameters</h2>
          <p>join_composite method has 3 required parameters and will returned join composite object</p>
          <h3>Table Name 1</h3>
          <p>The table for joined with current table.</p>
          <h3>Alias of Table Name 1</h3>
          <p>The alias table for joined with current table.</p>
          <h3>Array of Join Composite Object</h3>
          <p>Value required from array of object from composite_create.</p>
          <h3>Join Method</h3>
          <p>Join method value. Default empty string. Value consist of, inner, outer, left, right.</p>

          <div class="message is-info">
<div class="message-body">
            <p>This method available from Seme Framework version &#x3E;= 3.2.1</p>
          </div></div>

        </div>
      </div>

    </div>



    <div class="columns">
      <div class="column">
        <b-button tag="router-link" to="/id/model/join/" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
          Model::join
        </b-button>
      </div>
      <div class="column is-2">&nbsp;</div>
      <div class="column">
        <b-button tag="router-link" to="/id/model/composite_create" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
          Model::composite_create
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
      title: 'Model::join_composite method',
      description: 'Pelajari selengkapnya tentang join_composite method on SENE_Model class from Seme Framework.'
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
