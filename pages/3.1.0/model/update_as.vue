<template>
  <div class="section">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul class="breadcrumbs">
            <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
            <li class=""><NuxtLink to="/3.1.0/">3.1.0</NuxtLink></li>
            <li class=""><NuxtLink to="/3.1.0/model">Model</NuxtLink></li>
          <li class="unavailable">update_as</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Update AS Method</h1>
  					<p>Update AS method is like update method but with <b>unescaped</b> key value pair. This method suitable for update column to column in a table.</p>
            <p>This methode is available from SEME Framework version 3.1.4.</p>

            <div class="message is-warning">
  <div class="message-body">
              <p><b>Warning</b></p>
              <p>
                Maybe using <i>escape</i> methode (<code>$this->db->esc('NILAI')</code>) for key value pair is required for prevent <b>SQL injection</b>.
              </p>
            </div></div>

  					<h2>Parameters</h2>
  					<p>Update method has 2 required parameters that is <b>table name</b> and <b>key value pair in array</b>, another parameters are optional. Here is the completed parameters can be used by where methods</p>
  					<code v-highlight class="php">$this->db->update_as(string $table_name, array $data_update, [bool $is_debug=0]): bool</code>

            <h3>$table_name</h3>
            <p>Fill with table name that will be updated.</p>

            <h3>$data_update</h3>
            <p>Contains name and value pair in <b>array</b>. The key is for column name and the value is for new updated value.</p>

            <h3>$is_debug</h3>
            <p>Flag for activating debug mode.</p>

  					<h2>Example usage</h2>
  					<p>Here is the examples usage for this method:</p>

            <pre><code v-highlight class="php">&#x3C;?php
class Blog_Model extends SENE_Model{
  var $tbl = &#x27;blog&#x27;;
  var $tbl_as = &#x27;b&#x27;;
  public function __construct(){
&#x9; parent::__construct();
  }
  public function update(){
    $du = array();
    $du[&#x27;counter&#x27;] = &#x27;&#x60;counter&#x60;+1&#x27;;
    $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;,1);
    $this-&#x3E;db-&#x3E;update_as($ths-&#x3E;tbl,$du);
  }
}</code></pre>


          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/3.2.1/model/select" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Model::select
          </b-button>
        </div>
        <div class="column is-2">&nbsp;</div>
        <div class="column">
          <b-button tag="router-link" to="/3.2.1/model/update" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Model::update
          </b-button>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'v3.1',
  data (){
    return {
      name: 'Seme Framework v3.1.x',
      suffix: ' - Seme Framework v3.1.x Documentation',
      title: 'Model::update_as method',
      description: 'Learn more about update_as method from Seme Framework version 3.1.x.'
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
