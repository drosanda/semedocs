<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/tutorial">Tutorial</NuxtLink></li>
          <li class="unavailable">Introduction</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Introduction</h1>
            <p>Before starting the tutorial, you have to do which is described on the <NuxtLink to="/4.0.0/requirements">requirements</NuxtLink> first.</p>
            <p>The goals for this tutorial is, how to interacted with Model, View, And Controller.</p>
            <p>Ok, lets get started!.</p>

            <h2>Hello World!</h2>
            <p>Hello World is often used to illustrate the basic syntax of a programming language.</p>
            <p>But on Seme Framework, Hello World used to checked the basic MVC purpose.
            </p>
            <h3>Setup the config</h3>
            <p>We assumed that you put Seme Framework which is described In the <NuxtLink to="/4.0.0/downloads">Download &amp; Install</NuxtLink> page.</p>
            <p>After that, start the XAMPP and open <code>http://localhost/seme_framework</code>.</p>

            <h3>Controller</h3>
            <p>On Seme Framework, the default controller named <code>home.php</code> with its class name name <code>Home</code> too.</p>
            <p>
              First, open files located at <code>app/controller/home.php</code>.
              If the file doesnt exists, create one.
            </p>
            <pre>
&#x3C;?php

class Home extends SENE_Controller
{
    public function __construct()
    {
        parent::__construct();
    }
    public function index()
    {
        echo 'Hello World!';
    }
}
            </pre>
            <p>And then open <code>http://localhost/seme_framework</code>, it should show Hello World!.</p>

            <h3>Model</h3>
            <p>On this tutorial we will learn, how to interacted with model from controller.</p>
            <p>First, open files located at <code>app/model/hello_model.php</code>.</p>
            <p>If the file doesnt exists, create one.</p>
            <p>And then, put this code on it.</p>

            <pre>
&#x3C;?php
class Hello_Model extends SENE_Model
{
    public function __construct()
    {
        parent::__construct();
    }
    public function get()
    {
        return &#x27;Hello World, from model&#x27;;
    }
}
            </pre>
            <p>And then, open and edit the <code>app/controller/home.php</code> again.</p>
            <p>Put model loader on constructor.</p>
            <pre>
&#x3C;?php
class Home extends SENE_Controller
{
  public function __construct()
  {
      parent::__construct();
      $this-&#x3E;load(&#x22;hello_model&#x22;, &#x22;h&#x22;);
  }
  public function index()
  {
      echo $this-&#x3E;h-&#x3E;get();
  }
}
            </pre>
            <p>And then open <code>http://localhost/seme_framework</code>, it should show Hello World from model.</p>

            <h3>View</h3>
            <p>On this tutorial we will learn how to render the view with theme and passing the data from model to view passed by controller.</p>

            <h4>Create Theme: <u>front</u>.</h4>
            <p>first of all, we will define which css to call. Open files located at <code>app/view/front/theme.json</code>.</p>
            <p>If the file doesnt exists, create one. And then, put this code on it.</p>

            <pre>
[
  &#x22;&#x3C;link rel=\&#x22;stylesheet\&#x22; href=\&#x22;https://fonts.googleapis.com/icon?family=Material+Icons\&#x22; \/&#x3E;&#x22;,
  &#x22;&#x3C;link rel=\&#x22;stylesheet\&#x22; href=\&#x22;https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\&#x22; \/&#x3E;&#x22;
]
            </pre>
            <p>Second, we will define the script to load. Open files located at <code>app/view/front/script.json</code>.</p>
            <p>If the file doesnt exists, create one. And then, put this code on it.</p>
            <pre>
[
  &#x22;&#x3C;script src=\&#x22;https://code.jquery.com/jquery-3.5.1.min.js\&#x22;&#x3E;&#x3C;\/script&#x3E;&#x22;,
  &#x22;&#x3C;script src=\&#x22;https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\&#x22;&#x3E;&#x3C;\/script&#x3E;&#x22;
]
            </pre>
            <p>Third, create the HTML template. Open files located at <code>app/view/front/page/col-1.php</code>.</p>
            <p>If the file doesnt exists, create one. And then, put this code on it.</p>

            <pre>
&#x3C;!DOCTYPE html&#x3E;
&#x3C;html&#x3E;
  &#x3C;?php $this-&#x3E;getThemeElement(&#x27;page/html/head&#x27;, $__forward) ?&#x3E;
  &#x3C;?php if($this-&#x3E;config-&#x3E;environment == &#x27;production&#x27;){ ?&#x3E;
  &#x3C;?php } ?&#x3E;
  &#x3C;body&#x3E;
    &#x3C;?php $this-&#x3E;getThemeContent() ?&#x3E;

  &#x9;&#x3C;!-- jQuery, Bootstrap.js, jQuery plugins and Custom JS code --&#x3E;
  &#x9;&#x3C;?php $this-&#x3E;getJsFooter(); ?&#x3E;

  &#x9;&#x3C;!-- Load and execute javascript code used only in this page --&#x3E;
    &#x3C;script&#x3E;
  &#x9;&#x9;$(document).ready(function(e){
  &#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getJsReady(); ?&#x3E;
  &#x9;&#x9;});
  &#x9;&#x9;&#x3C;?php $this-&#x3E;getJsContent(); ?&#x3E;
  &#x9;&#x3C;/script&#x3E;
  &#x3C;/body&#x3E;
&#x3C;/html&#x3E;
            </pre>
            <p>Fourth, we have to create separated html head. Open files located at <code>app/view/front/page/html/head.php</code>.</p>
            <p>If the file doesnt exists, create one. And then, put this code on it.</p>
            <pre>
&#x3C;head&#x3E;
&#x9;&#x3C;meta charset=&#x22;utf-8&#x22;&#x3E;
&#x9;&#x3C;meta name=&#x22;viewport&#x22; content=&#x22;width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no&#x22;&#x3E;

&#x9;&#x3C;title&#x3E;&#x3C;?=$this-&#x3E;getTitle()?&#x3E;&#x3C;/title&#x3E;

&#x9;&#x3C;meta name=&#x22;description&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getDescription()?&#x3E;&#x22;&#x3E;
&#x9;&#x3C;meta name=&#x22;keyword&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getKeyword()?&#x3E;&#x22;/&#x3E;
&#x9;&#x3C;meta name=&#x22;author&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getAuthor()?&#x3E;&#x22;&#x3E;
&#x9;&#x3C;meta name=&#x22;robots&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getRobots()?&#x3E;&#x22; /&#x3E;

&#x9;&#x3C;!-- Icons --&#x3E;
&#x9;&#x3C;!-- The following icons can be replaced with your own, they are used by desktop and mobile browsers --&#x3E;
&#x9;&#x3C;link rel=&#x22;shortcut icon&#x22; href=&#x22;&#x3C;?=$this-&#x3E;getIcon()?&#x3E;&#x22;&#x3E;
&#x9;&#x3C;!-- END Icons --&#x3E;

&#x9;&#x3C;meta name=&#x22;msapplication-TileColor&#x22; content=&#x22;#353769&#x22;&#x3E;
&#x9;&#x3C;meta name=&#x22;theme-color&#x22; content=&#x22;#353769&#x22;&#x3E;
&#x9;&#x3C;?php $this-&#x3E;getAdditionalBefore()?&#x3E;
&#x9;&#x3C;?php $this-&#x3E;getAdditional()?&#x3E;
&#x9;&#x3C;?php $this-&#x3E;getAdditionalAfter()?&#x3E;
&#x3C;/head&#x3E;
            </pre>
            <p>Fifth, we have to create main content view. Open files located at <code>app/view/front/home/home.php</code>.</p>
            <p>If the file doesnt exists, create one.</p>
            <p>And then, put this code on it.</p>
            <pre>
&#x3C;div class=&#x22;container&#x22;&#x3E;
  &#x3C;div class=&#x22;row&#x22;&#x3E;
    &#x3C;div class=&#x22;col m12 s12&#x22;&#x3E;
      &#x3C;div class=&#x22;card rounded preload-any&#x22;&#x3E;
        &#x3C;div class=&#x22;card-content &#x22;&#x3E;
          &#x3C;span class=&#x22;card-title&#x22;&#x3E;&#x3C;?=$hello?&#x3E; passed to view&#x3C;/span&#x3E;
          &#x3C;p&#x3E;This is from view only&#x3C;/p&#x3E;
          &#x3C;br&#x3E;
          &#x3C;div class=&#x22;btn-group&#x22;&#x3E;
            &#x26;nbsp;
          &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
            </pre>

            <p>
              Sixth, we have to create JavaScript for view specific. Open files located at <code>app/view/front/home/home_bottom.php</code>.
            </p>
            <p>If the file doesnt exists, create one.</p>
            <p>And then, put this code on it.</p>
            <pre>
alert(&#x27;This is Hello World from app/view/home/home_bottom.php&#x27;);
</pre>

            <p>
              Last, open and edit the <code>app/controller/home.php</code> again.
            </p>
            <p>
              Put theme loader on constructor, load the view, set the layout and render it.
            </p>
            <pre>
&#x3C;?php
class Home extends SENE_Controller
{
  public function __construct()
  {
    parent::__construct();
    $this-&#x3E;setTheme(&#x27;front&#x27;);
    $this-&#x3E;load(&#x22;hello_model&#x22;, &#x22;h&#x22;);
  }
  public function index()
  {
    $data = array();
    $this-&#x3E;setTitle(&#x27;Hello World!&#x27;);
    $this-&#x3E;setDescription(&#x22;Congratulation, you have done well.&#x22;);
    $this-&#x3E;setKeyword(&#x27;Seme Framework&#x27;);
    $this-&#x3E;setAuthor(&#x27;Seme Framework&#x27;);

    $data[&#x27;hello&#x27;] = $this-&#x3E;h-&#x3E;get();

    $this-&#x3E;putThemeContent(&#x22;home/home&#x22;,$data); //pass data to view
    $this-&#x3E;putJsContent(&#x22;home/home_bottom&#x22;,$data); //pass data to view

    $this-&#x3E;loadLayout(&#x22;col-1&#x22;,$data);
    $this-&#x3E;render();
  }
}
            </pre>
            <p>And then open <code>http://localhost/seme_framework</code>.</p>
            <p>It should show an alert, view with loaded CSS, and show H1 with content Hello World from view and using theme.</p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/tutorial/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Tutorial
          </b-button>
        </div>
        <div class="column is-2">&nbsp;</div>
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/tutorial/get-data/" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Get Data
          </b-button>
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
      title: 'Tutorial: Introduction - Seme Framework v4.0.0'
    }
  },
  head() {
    return {
      title: this.title,
    }
  }
}
</script>
