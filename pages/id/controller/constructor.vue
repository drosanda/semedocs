<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
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

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/controller/" icon-pack="fa" icon-left="chevron-left" class="">
              Controller
            </b-button>
            <b-button tag="router-link" to="/id/controller/load" icon-pack="fa" icon-right="chevron-right" class="">
              Load Method
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
        title: '__construct Method from SENE_Controller',
        description: 'Pelajari selengkapnya tentang __construct Method from SENE_Controller on Seme Framework versi 4.0.0'
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
