<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
          <li class="unavailable">Order By Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Order By Method</h1>
  					<p>Order By method is part of database class builder for sorting result query.</p>

            <h2>Parameters</h2>
  					<p>Insert method has 2 required parameters that is <b>column name</b> and <b>sort direction</b>.</p>
  					<pre><code v-highlight class="sql">$this-&gt;db-&gt;group_by(string $column_name, string $sort_direction): dbObject</code></pre>

            <h3>$column_name</h3>
            <p><b>Column Name</b> can be filled by column name or function string.</p>

            <h3>$sort_direction</h3>
            <p><b>Sort Direction</b> value consist of asc and desc. "asc" for ascending and "desc" for descending</p>

            <h2>Example usage</h2>
  					<p>Here is the examples using order_by method. See the first of this page for full example.</p>

            <h3>Basic Usage</h3>
            <p>For example we assumed want to add new data in blog table. First, in the model:</p>
            <pre><code v-highlight class="php">&lt;?php
class Blog_Model extends SENE_Model{
  var $tbl = &#039;blog&#039;;
  var $tbl_as = &#039;b&#039;;
  public function __construct(){
	 parent::__construct();
  }
  public function getLatest($di){
    $this-&gt;db-&gt;order_by(&quot;create_date&quot;,&quot;desc&quot;);
    return $this-&gt;db-&gt;get();
  }
}</code></pre>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/model/group_by" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Model::group_by
            </b-button>
            <b-button tag="router-link" to="/id/model/limit" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Model::limit
            </b-button>
          </div>
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
      name: 'Seme Framework Bahasa Indonesia',
      suffix: ' - Seme Framework v4',
      title: 'Model::order_by method',
      description: 'Pelajari selengkapnya tentang penggunaan order_by method pada kelas Model di Seme Framework.'
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
