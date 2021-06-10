<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">putThemeContent Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">putThemeContent Method</h1>
            <p>This method will be loaded a theme content from a file.</p>
            <p>The <code>$content_location</code> value will be reffered to a file name under <code>app/view/THEME/</code>.</p>
            <p>This value also can contain path prefix of subdirectory before the filename.</p>

            <h2>Content Location Requirements</h2>
            <p>The valid content should only put inside in a directory beneath current selected theme directory.</p>
            <pre>
|- app
|-- view
|--- front
|---- home
|----- home.php
|----- home_bottom.php
            </pre>

            <h2>Basic Usage:</h2>
            <p>Here is the basic usage of <code>Controller::putThemeContent</code>.</p>
            <pre>
Controller::putThemeContent(string $content_location[, array $data]): ControllerObject
            </pre>

            <h2>Example</h2>
            <p>Here is the example for <code>putThemeContent</code> method:</p>
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
    $data = array();
    $this-&#x3E;putThemeContent(&#x27;home/slider&#x27;,$data);
    $this-&#x3E;putThemeContent(&#x27;home/three_values&#x27;,$data);
    $this-&#x3E;loadLayout(&#x27;col-1&#x27;,$data);
  }
}
            </pre>
            <p>So, the <code>homepage</code> theme and <code>col-1</code> layout should be existed on the directory structure.</p>
            <pre>
- app
|-- view
|--- homepage
|---- home
|----- slider.php
|----- three_values.php
|---- page
|----- col-1.php

            </pre>
          </div>
        </div>

      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/controller/loadLayout" icon-pack="fa" icon-left="chevron-left">
              loadLayout Method
            </b-button>
            <b-button tag="router-link" to="/id/controller/putJsContent" icon-pack="fa" icon-right="chevron-right">
              putJsContent Method
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
  data() {
    return {
      name: 'Seme Framework v4.0.0',
      suffix: ' - Dokumentasi Seme Framework v4.0.0',
      title: 'putThemeContent Method from SENE_Controller',
      description: 'Pelajari selengkapnya tentang putThemeContent Method from SENE_Controller on Seme Framework versi 4.0.0'
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
