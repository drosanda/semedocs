<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">setTheme Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">setTheme Method</h1>
            <p>This method will be loaded theme and overrides the current theme value using the new one.</p>
            <p>The <code>$theme_name</code> value will be reffered to a directory name under <code>app/view/</code>.</p>

            <h2>Theme Requirements</h2>
            <p>The valid themes should contain these files with this directory structure.</p>
            <pre>
|--- theme.json
|--- script.json
|--- page
|----- col-1.php
            </pre>
            <h2>Basic Usage:</h2>
            <p>Here is the basic usage of <code>Controller::setTheme</code>.</p>
            <pre>
Controller::setTheme(string $theme_name): ControllerObject
            </pre>

            <h2>Example</h2>
            <p>Here is the example for <code>setTheme</code> method:</p>
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
    ...
  }
}
            </pre>
            <p>So, the directory <code>homepage</code> should be existed on the directory structure.</p>
            <pre>
- app
|-- view
|--- front
|--- homepage
            </pre>
          </div>
        </div>

      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/controller/input" icon-pack="fa" icon-left="chevron-left">
              Input Method
            </b-button>
            <b-button tag="router-link" to="/id/controller/loadLayout" icon-pack="fa" icon-right="chevron-right">
              loadLayout Method
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
      title: 'setTheme Method from SENE_Controller',
      description: 'Pelajari selengkapnya tentang setTheme Method from SENE_Controller on Seme Framework versi 4.0.0'
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
