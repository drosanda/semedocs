<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/model">Model</NuxtLink></li>
          <li class="unavailable">Page Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Page Method</h1>
  					<p>Page Method is part of database class builder for limiting query result. It will produce same as <i>SELECT * FROM table WHERE 1 LIMIT [A],[B]</i>.</p>

  					<h2>Parameters</h2>
  					<p>Page method has 2 required parameters that is <b>page</b> and <b>pagesize</b>.</p>
  					<code v-highlight class="php">$this-&gt;db-&gt;page(int $page, int $pagesize): dbObject</code>

            <h3>$page</h3>
            <p><b>Page</b> determine the current page of specified pagesize.</p>

            <h3>$pagesize</h3>
            <p><b>Pagesize</b> the maximum result row count per page.</p>

  					<h2>Example usage</h2>
  					<p>Here is the examples using page method. See the first of this page for full example.</p>

            <h3>Basic Usage</h3>
            <p>For example we assumed want to add new data in blog table. First, in the model:</p>
            <pre><code v-highlight class="php">&lt;?php
class Blog_Model extends SENE_Model{
  var $tbl = &#039;blog&#039;;
  var $tbl_as = &#039;b&#039;;
  public function __construct(){
	 parent::__construct();
  }
  public function showFirstPagePer5Rows(){
    $this-&gt;db-&gt;select(&quot;*&quot;);
    $this-&gt;db-&gt;from($this-&gt;tbl,$this-&gt;tbl_as);
    $this-&gt;db-&gt;order_by(&quot;date_create&quot;,&quot;desc&quot;);
    $this-&gt;db-&gt;page(1,5);
    return $this-&gt;db-&gt;get();
  }
  public function showSecondPagePer10Rows(){
    $this-&gt;db-&gt;select(&quot;*&quot;);
    $this-&gt;db-&gt;from($this-&gt;tbl,$this-&gt;tbl_as);
    $this-&gt;db-&gt;order_by(&quot;date_create&quot;,&quot;desc&quot;);
    $this-&gt;db-&gt;limit(2,10);
    return $this-&gt;db-&gt;get();
  }
}</code></pre>
            <div class="message is-info">
  <div class="message-body">
              <p><b>page method v.s. limit method</b></p>
              <p>Page method used for limiting by page and page size</p>
              <p>Limit method used for limiting data by MySQL traditional limit method</p>
            </div></div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/4.0.0/model/order_by" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Model::order_by
            </b-button>
            <b-button tag="router-link" to="/4.0.0/model/query" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Model::query
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
      suffix: ' - Seme Framework 4',
      title: 'Model::page',
      description: 'Learn more about page method from Seme Framework model class version 4.0.0 through this documentation.'
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
