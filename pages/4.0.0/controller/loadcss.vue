<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (English)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">LoadCss</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">loadCss method</h1>
            <p>SENE_Controller::loadCSs is method for loading css from an URL in a controller.</p>

            <h2>Parameters</h2>
            <p>loadCSS has 2 parameters, there are $src dan $utype.</p>
            <code v-highlight class="php">$this-&#x3E;loadCss(string $src[, string $utype]): object SENE_Controller</code>

            <h3>$src</h3>
            <p>Value for $src can be an relative url by using <code>base_url()</code> or using CDN url by using <code>SENE_Controller::cdn_url</code> or a plain external URL.</p>
            <p>So, if want to used external css resource, simply use <code>$this-&#x3E;loadCss(&#x27;https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css&#x27;,&#x27;before&#x27;)</code></p>
            <p>Or with relative css URL by using base_url, simply use this <code>$this-&#x3E;loadCss(base_url(&#x27;assets/css/font-awesome.min.css&#x27;,&#x27;before&#x27;));</code>.</p>

            <h3>$utype</h3>
            <p>The value of $utype can be <code>'before'</code> or <code>'after'</code> or <code>''</code> (empty string).</p>
            <p>If value equal to <b>before</b>, its mean css will be loaded before <code>app/view/THEME_NAME/theme.json</code> list.</p>
            <p>Or if value equal to <b>after</b>, its mean css will be loaded after <code>app/view/THEME_NAME/theme.json</code> list.</p>

            <h3>Full Example</h3>
            <p>Here is the full example for loadCss method:</p>
            <pre><code v-highlight class="php">&#x3C;?php
class Blog extends SENE_Controller {
  public function __construct(){
    parent::__construct();
  }
  public function index(){
    //external
    $this-&#x3E;loadCss(&#x27;https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css&#x27;,&#x27;before&#x27;);
    //relatives
    $this-&#x3E;loadCss(base_url(&#x27;assets/css/font-awesome.min.css&#x27;,&#x27;before&#x27;));

    //theme content and layout rendering
    $this-&#x3E;putJSReady(&#x27;home/home_bottom&#x27;,$data);
    $this-&#x3E;putThemeContent(&#x27;home/home&#x27;,$data);
    $this-&#x3E;loadLayout(&#x27;col-1&#x27;,$data);
    $this-&#x3E;render();
  }
}</code></pre>

            <b-message type="is-warning">
              <p><b>Caution</b></p>
              <p>Please make sure this method has been loaded from header template:</p>
              <ul>
                <li>&#x3C;?php $this-&#x3E;getAdditionalBefore()?&#x3E;</li>
                <li>&#x9;&#x3C;?php $this-&#x3E;getAdditional()?&#x3E;</li>
                <li>&#x9;&#x3C;?php $this-&#x3E;getAdditionalAfter()?&#x3E;</li>
              </ul>
            </b-message>

          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/4.0.0/controller/session" type="is-link" icon-pack="fa" icon-left="chevron-left" class="">
              Using Session
            </b-button>
            <b-button tag="router-link" to="/4.0.0/database" type="is-link" icon-pack="fa" icon-right="chevron-right" class="">
              Database
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
        title: 'loadCss Method from SENE_Controller',
        description: 'Learn more about loadCss method from SENE_Controller on Seme Framework version 4.0.0'
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
