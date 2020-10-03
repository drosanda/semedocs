<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/error/">Error &amp; Troubleshooting</NuxtLink></li>
          <li class="unavailable">[1024] could not find model</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1>[1024] could not find model</h1>
            <p>Could not find model [model_name] it was occured when model file cannot be loaded from controller.</p>
            <p>Example error message</p>
            <pre>
File: /Applications/XAMPP/xamppfiles/htdocs/seme-framework/kero/sine/SENE_Controller.php

Line: 156

Error: [1024] could not find model hello_model on /Applications/XAMPP/xamppfiles/htdocs/seme-framework/app/model/hello_model.php
            </pre>
            <h2>Solution</h2>
            <p>Here is some options that can be done for solving this error.</p>
            <h3>Check the file name</h3>
            <p>Please make sure:</p>
            <ol>
              <li>The file name are correct,</li>
              <li>Filename are in lower case,</li>
              <li>There is no spaces between dot and extension name, and</li>
              <li>There is only alphanumeric and underscore allowed.</li>
            </ol>

            <h3>Check the class name</h3>
            <p>Please make sure:</p>
            <ol>
              <li>The file name are equal with class name but the case is ignored,</li>
              <li>Classname can be camel case or in mixed case with the first letter of each internal word capitalized</li>
              <li>There is only alphanumeric and underscore allowed, </li>
              <li>There is no space or special char on class name.</li>
            </ol>

            <h3>Check the class loader on Controller</h3>
            <p>Model are loaded in Controller through <NuxtLink to="/4.0.0/controller/load/"><code>load</code></NuxtLink> method. Please make sure:</p>
            <ol>
              <li>The location of file and file name is correct,</li>
              <li>The alias are correct.</li>
            </ol>

          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/error/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="">
              Error List
            </b-button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'troubleshoot',
  data (){
    return {
      name: 'Seme Framework Error &amp; Troubleshooting',
      suffix: ' - Seme Framework Error Notice',
      title: 'Error: [1024] Could not find model',
      description: 'Learn more about Seme Framework Error: [1024] Could not find model and how to solved it.'
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
