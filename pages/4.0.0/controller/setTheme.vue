<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/controller">Controller</NuxtLink></li>
          <li class="unavailable">Set Theme</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Controller::setTheme</h1>
            <p>This method will be loaded theme and overrides the current theme value using the new one.</p>
            <h2>Basic Usage:</h2>
            <p>Here is the basic usage of <code>Controller::setTheme</code>.</p>
            <pre>
Controller::setTheme(string $theme_name): ControllerObject
            </pre>
            <p>The <code>$theme_name</code> value will be reffered to directory name under <code>app/view/</code>.</p>
          </div>
        </div>

      </div>

      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/controller" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Controller
          </b-button>
        </div>
        <div class="column is-2">&nbsp;</div>
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/controller/setLayout" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Controller:setLayout
          </b-button>
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
      title: 'Controller::setTheme - Seme Framework v4.0.0',
      description: 'Controller::setTheme reference on Seme Framework version 4.0.0'
    }
  },
  head() {
    return {
      title: this.title,
      description: this.description
    }
  }
}
</script>
