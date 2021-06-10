<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/controller">Controller</NuxtLink></li>
          <li class="unavailable">loadLayout Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">loadLayout Method</h1>
            <p>This method will be loaded a layout from a theme.</p>
            <p>The <code>$layout</code> value will be reffered to a file name under <code>app/view/THEME/page/</code>.</p>

            <h2>Layout Requirements</h2>
            <p>The valid layout should only put inside <code>page</code> directory.</p>
            <pre>

|-- page
|---- col-1.php
            </pre>
            <h2>Basic Usage:</h2>
            <p>Here is the basic usage of <code>Controller::loadLayout</code>.</p>
            <pre>
Controller::loadLayout(string $layout): ControllerObject
            </pre>

            <h2>Example</h2>
            <p>Here is the example for <code>loadLayout</code> method:</p>
            <pre>
class Home extends SENE_Controller
{
  public function __construct()
  {
    parent::__construct();
    $this-&#x3E;setTheme(&#x27;homepage&#x27;);
  }
  public function index()
  {
    $this-&#x3E;loadLayout(&#x27;col-1&#x27;);
  }
}
            </pre>
            <p>So, the <code>homepage</code> theme and <code>col-1</code> layout should be existed on the directory structure.</p>
            <pre>
- app
|-- view
|--- homepage
|---- page
|----- col-1.php

            </pre>
          </div>
        </div>

      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/4.0.0/controller/setTheme" icon-pack="fa" icon-left="chevron-left">
              setTheme Method
            </b-button>
            <b-button tag="router-link" to="/4.0.0/controller/putThemeContent" icon-pack="fa" icon-right="chevron-right">
              putThemeContent Method
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
      title: 'loadLayout Method from SENE_Controller',
      description: 'Learn more about loadLayout Method from SENE_Controller on Seme Framework version 4.0.0'
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
