<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
          <li class="unavailable">Page Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Page Method</h1>
  					<p>Page method digunakan untuk membatasi jumlah baris dari hasil query. Dengan fungsi ini memungkinkan untuk mengatur banyaknya jumlah data dan akan tampil pada halaman ke berapa.</p>
            <p>Metode ini akan menghasilkan query seperti ini:</p>
            <code v-highlight class="sql">SELECT * FROM table WHERE 1 LIMIT [A],[B]</code>

  					<h2>Parameter</h2>
  					<p>Page method membutuhkan 2 parameter yaitu <b>page</b> dan <b>pagesize</b>.</p>
  					<code v-highlight class="php">$this-&gt;db-&gt;limit(int $page, int $pagesize): dbObject</code>

            <h3>$page</h3>
            <p>Parameter <b>Page</b> digunakan untuk menentukan halaman pada $pagesize tertentu.</p>

            <h3>$pagesize</h3>
            <p>Parameter <b>Pagesize</b> digunakan untuk menentukan banyaknya jumlah baris per hasil data.</p>

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
  public function halamanKe2dari25Baris(){
    $this-&gt;db-&gt;select(&quot;*&quot;);
    $this-&gt;db-&gt;from($this-&gt;tbl,$this-&gt;tbl_as);
    $this-&gt;db-&gt;order_by(&quot;date_create&quot;,&quot;desc&quot;);
    $this-&gt;db-&gt;page(2,25);
    return $this-&gt;db-&gt;get();
  }
  public function halamanKe1Per10Baris(){
    $this-&gt;db-&gt;select(&quot;*&quot;);
    $this-&gt;db-&gt;from($this-&gt;tbl,$this-&gt;tbl_as);
    $this-&gt;db-&gt;order_by(&quot;date_create&quot;,&quot;desc&quot;);
    $this-&gt;db-&gt;page(1,10);
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
            <b-button tag="router-link" to="/id/model/order_by" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Model::order_by
            </b-button>
            <b-button tag="router-link" to="/id/model/query" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
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
  layout: 'id',
  data (){
    return {
      name: 'Seme Framework v4.0.0',
      suffix: ' - Seme Framework v4.0.0 Documentation',
      title: 'Model::page',
      description: 'Pelajari selengkapnya tentang penggunaan page method pada kelas Model di Seme Framework.'
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
