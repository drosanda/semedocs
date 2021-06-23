<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/model">Model</NuxtLink></li>
          <li class="unavailable">composite_create method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Composite Create Method</h1>
            <p>Composite Create is for building multiple join condition for table that have two or more primary key.</p>
            <p>This method can be used properly with <NuxtLink to="/model/join_composite">join_composite</NuxtLink> method, for joining the table .</p>

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
            <p>composite_create method has 3 required parameters and will returned join composite object</p>
            <h3>COLUMN_NAME_1</h3>
            <p>Column name for first table.</p>
            <h3>Relational Operator</h3>
            <p>Value required for condition, value consists of &#x22;=&#x22;,&#x22;&#x3C;&#x3E;&#x22;.</p>
            <h3>COLUMN_NAME_1</h3>
            <p>Column name for second table.</p>

            <div class="message is-info">
<div class="message-body">
              <p>This method available from Seme Framework version &#x3E;= 3.2.1</p>
            </div></div>

          </div>
        </div>

      </div>

    <div class="columns">
      <div class="column">
        <b-button tag="router-link" to="/4.0.0/model/join_composite/" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
          Model::join_composite
        </b-button>
      </div>
      <div class="column is-2">&nbsp;</div>
      <div class="column">
        <b-button tag="router-link" to="/4.0.0/model/where" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
          Model::where
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
      title: 'Model::composite_create method',
      description: 'Learn more about composite_create method on SENE_Model class from Seme Framework.'
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
