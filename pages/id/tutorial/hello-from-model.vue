<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial/">Tutorial</NuxtLink></li>
          <li class="unavailable">Hello From Model</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
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
            <figure>
              <img src="~/assets/img/hello-world-from-model.png" >
            </figure>


            <div class="columns">
              <div class="column">
                <div class="buttons">
                  <b-button tag="router-link" to="/id/tutorial/" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
                    Tutorials
                  </b-button>
                  <b-button tag="router-link" to="/id/tutorial/get-data/" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
                    Tutorial: Get Data
                  </b-button>
                </div>
              </div>
            </div>

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
      suffix: ' - Dokumentasi Seme Framework v4.0.0',
      title: 'Tutorial: Hello from Model',
      description: 'Pelajari selengkapnya tentang basic usage of Seme Framework model version 4.0.0 through this documentation.'
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
