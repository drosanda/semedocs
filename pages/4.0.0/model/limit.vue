<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/model">Model</NuxtLink></li>
          <li class="unavailable">Limit Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Limit Method</h1>
  					<p>Limit Method is part of database class builder for limiting query result.</p>
            <p>It will produce same as <i>SELECT * FROM table WHERE 1 LIMIT [A],[B]</i>.</p>
            <p>This method suitable for creating pagination with datatable method.</p>

  					<h2>Parameters</h2>
  					<p>Limit method has 2 required parameters that is <b>offset</b> and <b>count</b>.</p>
  					<code v-highlight class="php">$this-&gt;db-&gt;limit(int $offset, int $count): dbObject</code>

            <h3>$offset</h3>
            <p><b>Offset</b> can be zero or positive integer for specifying the offset of the first row to be returned.</p>

            <h3>$count</h3>
            <p><b>Count</b> can be zero or positive integer for specifying the maximum number of rows to be returned.</p>

  					<h2>Example usage</h2>
  					<p>Here is the examples using limit method. See the first of this page for full example.</p>

            <h3>Basic Usage</h3>
            <p>For example we assumed want to filter new data in blog table. First, in the model:</p>
            <pre><code v-highlight class="php">&lt;?php
class Blog_Model extends SENE_Model{
  var $tbl = &#039;blog&#039;;
  var $tbl_as = &#039;b&#039;;
  public function __construct(){
	 parent::__construct();
  }
  public function latest(){
    $this-&gt;db-&gt;select(&quot;*&quot;);
    $this-&gt;db-&gt;from($this-&gt;tbl,$this-&gt;tbl_as);
    $this-&gt;db-&gt;order_by(&quot;date_create&quot;,&quot;desc&quot;);
    $this-&gt;db-&gt;limit(0,5);
    return $this-&gt;db-&gt;get();
  }
  public function latest3ExceptOne(){
    $this-&gt;db-&gt;select(&quot;*&quot;);
    $this-&gt;db-&gt;from($this-&gt;tbl,$this-&gt;tbl_as);
    $this-&gt;db-&gt;order_by(&quot;date_create&quot;,&quot;desc&quot;);
    $this-&gt;db-&gt;limit(1,4);
    return $this-&gt;db-&gt;get();
  }
}</code></pre>
            <b-message class="is-info">
              <p><b>page method v.s. limit method</b></p>
              <p>Page method used for limiting by page and page size</p>
              <p>Limit method used for limiting data by MySQL traditional limit method</p>
            </b-message>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/4.0.0/model/order_by" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Model::order_by
            </b-button>
            <b-button tag="router-link" to="/4.0.0/model/get" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Model::get
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
      suffix: ' - Seme Framework v4.0.0 Documentation',
      title: 'Model::limit',
      description: 'Learn more about limit method from Seme Framework model class version 4.0.0 through this documentation.'
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
