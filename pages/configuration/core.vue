<template>
<div class="section">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul class="breadcrumbs">
            <li class=""><nuxt-link to="/">Home</nuxt-link></li>
            <li class=""><nuxt-link to="/configuration">Configuration</nuxt-link></li>
            <li class="unavailable">Core</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Configuration: Core</h1>
          <p>Core configuration purpose for registering your core component on Seme Framework. Core controller allowed you to extend the default class to your default core. Like SENE_Controller to JI_Controller for example. This configuration applies to core controller and core model.</p>
          <pre>
//register your core
//core folder app/core/
//all value in lower case
$core_prefix = 'ji_';
$core_controller = 'controller';
$core_model = '';
</pre>
        </div>
      </div>

        </div>
      </div>
    </div>
</template>
