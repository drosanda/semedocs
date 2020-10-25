<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2.1/">3.2.1</NuxtLink></li>
          <li class="unavailable">Tutorial</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Tutorial</h1>
            <p>This tutorial is intended to introduce you to the Seme Framework and the basic principles of MVC architecture. It will show you how a basic Seme Framework application is constructed in step-by-step.</p>
            <p>
              The objectives of this tutorial is how to use the framework with real life examples.
              So, developer can implemented all features that existed on Seme Framework such as:
            </p>
            <ul>
              <li>Model-View-Controller basics</li>
              <li>Routing basics</li>
              <li>Form validation</li>
              <li>Performing basic database queries using Query Builder</li>
              <li>Theming</li>
              <li>Admin</li>
              <li>Libraries</li>
              <li>and APIs</li>
            </ul>
            <p>The entire tutorial is split up over several pages. Each explaining a small part of the functionality of the Seme Framework. You’ll go through the following pages:</p>
            <ul>
              <li><NuxtLink to="tutorial/introduction">Introduction</NuxtLink>, which gives you an overview of what to expect.</li>
              <li><NuxtLink to="tutorial/view.html">Theme and layout</NuxtLink>, which will teach you the basics of creating view using Seme Framework.</li>
              <li>Building API, this will introduce more about database, controller, and model.</li>
            </ul>
            <p>Enjoy your exploration of the Seme Framework.</p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/3.2.1/configuration/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Configuration: production
          </b-button>
        </div>
        <div class="column is-2">&nbsp;</div>
        <div class="column">
          <b-button tag="router-link" to="/3.2.1/tutorial/introduction" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Tutorial: Introduction
          </b-button>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'v3.2.1',
  data() {
    return {
      title: 'Tutorial - Seme Framework v3.2.1'
    }
  },
  head() {
    return {
      title: this.title,
    }
  }
}
</script>
