<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class="unavailable">Controller Class</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Controller Class</h1>
            <p>Controller is the main actor in Seme Framework life cycle.</p>
            <p>A Controller is simply a class file that is named in a way that can be associated with an URI.</p>
            <p>The controller class relatives to <code>app/controller</code> directory.</p>
            <p>The controller filename and class name can only have alphanumeric with underscore.</p>
            <h2>Example</h2>
            <p>Here is the basic example for a controller structure:</p>
            <pre>
app
|-- controller
|---- home.php
|---- blog.php
            </pre>
            <p>Lets say, you have extracted Seme Framework on <code>D:\XAMPP\htdocs\seme-framework</code></p>
            <p>So, if you accessing the <code>http://localhost/seme-framework</code> the Seme Framework will load <code>home.php</code> controller.</p>
            <b-message class="is-info">
              <p>Class <b>home</b> or <b>home.php</b> file is the default access controller from each URI even in the sub directory.</p>
            </b-message>
            <p>How if, we accessing <code>http://localhost/seme-framework/blog</code>?</p>
            <p>The answer is, Seme Framework will load controller blog.php</p>
            <p>Seme Framework will only load controller with filename and its class name are matched.</p>

            <h2>SENE_Controller</h2>
            <p>SENE_Controller is basic class for creating controller which contain properties and methods that are required for using Seme Framework properly.</p>

            <h3>Basic Usage</h3>
            <p>Here is some basic usage for creating controller</p>

            <h4>Default Controller</h4>
            <p>Here is the default source code of controller.</p>
            <pre>
&#x3C;?php
class Home extends Sene_Controller{
  public function __construct(){
    parent::__construct();
  }
  public function index(){
    echo &#x27;Thankyou for using Seme Framewrok&#x27;;
  }
}
            </pre>

            <h4>Notfound Controller</h4>
            <p>Here is the default source code of notfound controller.</p>
            <pre>
&#x3C;?php
class Notfound extends Sene_Controller{
  public function __construct(){
    parent::__construct();
  }
  public function index(){
    header(&#x22;HTTP/1.0 404 Not Found&#x22;);
    echo &#x27;404 Notfound&#x27;;
  }
}
            </pre>
            <b-message class="is-info">
              <p>Please make sure your class name are match with filename.</p>
            </b-message>
            <b-message class="is-info">
              <p>Undefined file name will be throw 404 error.</p>
            </b-message>
            <b-message class="is-danger">
              <p><b>Caution</b></p>
              <p>Mismatched classname with filename will be throw 500 error.</p>
            </b-message>

            <h2>Access Methods</h2>
            <p>Seme Framework supported access method for public and private declaration.</p>
            <h3>Private Properties and Methods</h3>
            <p>Seme Framework allow your method in Private or in Protected mode. The Private or Protected mode cant be executed through URI request. Or you can use double underscore (__) means as Private properties or methods.</p>
            <pre>
class Home extends Sene_Controller{
  var $public_var = &#x27;Yi-Ha!&#x27;;
  var $__underWear = &#x27;My Private Things&#x27;;
  public function __construct(){
    parent::__construct();
  }
  private function __processFile(){
    return true;
  }
  public function index(){
    echo &#x27;404 Notfound&#x27;;
  }
}
            </pre>
            <b-message class="is-info">
              <p>The private method or private properties on Seme Framework are always prefixed with double underscore.</p>
            </b-message>
            <b-message class="is-success">
              <p>The private method is inaccessible from URI request.</p>
            </b-message>

          </div>
        </div>

      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/4.0.0/view" type="is-link" icon-pack="fa" icon-left="chevron-left" class="">
              View
            </b-button>
            <b-button tag="router-link" to="/4.0.0/controller/constructor" type="is-link" icon-pack="fa" icon-right="chevron-right" class="">
              Controller: __construct
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
      title: 'Controller',
      description: 'Learn more about controller class of Seme Framework version 4.0.0 through this documentation.'
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
