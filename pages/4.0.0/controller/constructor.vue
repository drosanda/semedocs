<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/controller">Controller</NuxtLink></li>
          <li class="unavailable">Constructor method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Constructor method</h1>
            <p>The Constructor method will loaded all parent class that required for a controller.</p>
            <p>This is method is very important for Seme Framework Controller.</p>
            <div class="message is-info">
  <div class="message-body">
              <p>If the constructor method is missed, you maybe get unexpected result.</p>
            </div></div>
            <p>Ussually the parent constructor are executed after class constructor</p>
            <h2>Basic Usage</h2>
            <p>The basic usage for this method is:</p>
            <pre>
parent::__construct();
            </pre>

            <p>Here is the full example:</p>
            <pre>
&#x3C;?php
  class Blog extends SENE_Controller {
    public function __construct(){
    parent::__construct();
  }
  public function index(){
    echo 'Hi, I run properly!';
  }
}
            </pre>

          </div>
        </div>
      </div>

      
      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0.0/controller/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Controller
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0.0/controller/load/" class="btn">
            Load Method
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
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
        suffix: ' - Seme Framework 4',
        title: '__construct Method from SENE_Controller',
        description: 'Learn more about __construct Method from SENE_Controller on Seme Framework version 4.0.0'
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
