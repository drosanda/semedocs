<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
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
              <li><NuxtLink to="/4.0.0/tutorial/introduction/">Introduction</NuxtLink>, which gives you an overview of what to expect.</li>
              <li><NuxtLink to="/4.0.0/tutorial/get-data/">Theme and layout</NuxtLink>, which will teach you the basics of creating view using Seme Framework.</li>
              <li><NuxtLink to="/4.0.0/tutorial/basic-api/">Building API</NuxtLink>, this will introduce more about database, controller, and model.</li>
            </ul>
            <p>Enjoy your exploration of the Seme Framework.</p>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0.0/configuration/production/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Configuration: production
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0.0/tutorial/introduction/" class="btn">
            Tutorial: Introduction
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
  data (){
    return {
      name: 'Seme Framework v4.0.0',
      suffix: ' - Seme Framework 4',
      title: 'Tutorials',
      description: 'Learn more about some real world tutorial of Seme Framework version 4.0.0 through this documentation.'
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
