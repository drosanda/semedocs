<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.1.0/">3.1.0</NuxtLink></li>
          <li class=""><NuxtLink to="/3.1.0/model">Model</NuxtLink></li>
          <li class="unavailable">Exec Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Exec Method</h1>
            <p>Exec method is used executing the raw SQL agains the table.</p>

            <h2>Parameters</h2>
            <p>Query method has 1 required parameter.</p>
            <pre>
$this-&#x3E;db-&#x3E;query(string $sql): boolean
            </pre>

            <h3>$sql</h3>
            <p><b>SQL</b> can be single command of SQL.</p>

            <h2>Example usage</h2>
            <p>Here is the examples using SQL method. See the first of this page for full example.</p>

            <h3>Basic Usage</h3>
            <p>For example we assumed want to add new data in blog table. First, in the model:</p>
            <pre>
class Blog_Model extends SENE_Model{
&#x9;var $tbl = &#x27;d_order&#x27;;
&#x9;var $tbl_as = &#x27;dor&#x27;;
&#x9;public function __construct(){
&#x9;&#x9;parent::__construct();
&#x9;&#x9;$this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
&#x9;}
&#x9;public function massUpdateProduct($id){
&#x9;&#x9;$sql = &#x27;UPDATE products SET is_published =0 WHERE DATE(date_created) &#x3C; DATE(&#x22;2019-01-01&#x22;)&#x27;;
&#x9;&#x9;return $this-&#x3E;db-&#x3E;exec($sql);
&#x9;}
}
            </pre>
          </div>
        </div>

      </div>
      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/3.1.0/model/delete" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Model::delete
            </b-button>
            <b-button tag="router-link" to="/3.1.0/model/query" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
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
  layout: 'v3.1.0',
  data (){
    return {
      name: 'Seme Framework v3.1.0',
      suffix: ' - Documentation',
      title: 'Model::exec',
      description: 'Learn more about Model::exec on Seme Framework version 3.1.0 through this documentation.'
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
