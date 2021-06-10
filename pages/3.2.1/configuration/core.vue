<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2.1/">3.2.1</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2.1/configuration">Configuration</NuxtLink></li>
          <li class="unavailable">core.php</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Configuration: core.php</h1>
            <p>Core configuration purpose for registering your core component on Seme Framework. Core controller allowed you to extend the default class to your default core. Like SENE_Controller to JI_Controller for example. This configuration applies to core controller and core model.</p>
            <pre><code v-highlight class="php">&#x3C;?php
//register your core
//core folder app/core/
//all value in lower case
$core_prefix = &#x27;ji_&#x27;;
$core_controller = &#x27;controller&#x27;;
$core_model = &#x27;&#x27;;</code></pre>
          </div>
        </div>

      </div>


      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/3.2.1/configuration/controller/" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Configuration: controller.php
            </b-button>
            <b-button tag="router-link" to="/3.2.1/configuration/database/" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Configuration: database.php
            </b-button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    layout: 'v3.2.1',
    data (){
      return {
        name: 'Seme Framework v3.2.1',
        suffix: ' - Seme Framework v3.2.1 Documentation',
        title: 'Configuration: Core Class Helper',
        description: 'Learn more about Configuration Core Class Helper of Seme Framework version 3.x through this documentation.'
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
