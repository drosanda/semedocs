<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/controller">Controller</NuxtLink></li>
          <li class="unavailable">Load method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Load method</h1>
            <p>Load method from class SENE_Controller is for loading a model class into controller.</p>
            <p>The model will be instantiate as part of properties on SENE_Controller.</p>
            <p>Without an alias, the instantiate model object will be same as filename without extension php.</p>
            <h2>Parameters</h2>
            <p>Load method has 2 parameter, there is the <code>model filename</code> and <code>model alias</code>.</p>
            <pre>
$this-&#x3E;load(string $filename_location[, string $alias])
            </pre>
            <h3>$filename_location</h3>
            <p>The method load location always relatives to <code>app/model</code> directory.</p>
            <p>So, if we have a model class under <code>app/model/api/hello_model.php</code></p>
            <p>We have to fill the first parameter with <code>api/hello_model</code>.</p>
            <p>Here is the example:</p>
            <pre>
$this-&#x3E;load('api/hello_model');
            </pre>
            <p>With this example the hello_model will be part of SENE_Controller class as <code>hello_model</code> object</p>
            <p>Here is the full example:</p>
            <pre>
&#x3C;?php
  class Blog extends SENE_Controller {
    public function __construct(){
    parent::__construct();
    $this-&#x3E;load(&#x27;api/hello_model&#x27;);
  }
  public function index(){
    //executing the hello_model object
    print_r($this-&#x3E;hello_model-&#x3E;get());
    die();
  }
}
            </pre>
            <div class="message is-info">
<div class="message-body">
              <p>While loading the model from sub directory, the path prefix will not instantiate as object model name.</p>
              <p>So, be careful for choosing the naming class model or alias.</p>
              <p>If necessary, you can duplicate a model class to avoid conflict with extra suffix with number.</p>
              <p>example, <code>app/model/api/hello_model2.php</code> and then the class name <code>Hello_Model2</code>.</p>
            </div></div>

            <h3>$alias</h3>
            <p>The alias purpose is for shorting the name of model that we create into SENE_Controller.</p>
            <p>Alias can contain any alphanumeric and underscore.</p>
            <p>Here is the example:</p>
            <pre>
$this-&#x3E;load('api/hello_model','h');
            </pre>
            <p>With this example the hello_model will be part of SENE_Controller class as <code>h</code> object</p>
            <p>Here is the full example:</p>
<pre>
&#x3C;?php
class Blog extends SENE_Controller {
  public function __construct(){
    parent::__construct();
    $this-&#x3E;load(&#x27;api/hello_model&#x27;,&#x27;h&#x27;);
  }
  public function index(){
    //executing the hello_model object
    print_r($this-&#x3E;h-&#x3E;get());
    die();
  }
}
            </pre>
            <div class="message is-success">
<div class="message-body">
              <p><b>Tips</b></p>
              <p>If you confused how to fill the alias name, you can get from first letter of each class name.</p>
              <p>example, <code>app/model/api/hello_detail_model2.php</code> and then the alias will be <code>hdm2</code>.</p>
            </div></div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/4.0.0/controller/constructor" icon-pack="fa" icon-left="chevron-left" class="">
              Constructor
            </b-button>
            <b-button tag="router-link" to="/4.0.0/controller/lib" icon-pack="fa" icon-right="chevron-right" class="">
              Lib Method
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
    data() {
      return {
        name: 'Seme Framework v4.0.0',
        suffix: ' - Seme Framework v4.0.0 Documentation',
        title: 'load Method from SENE_Controller',
        description: 'Learn more about load Method from SENE_Controller on Seme Framework version 4.0.0'
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
