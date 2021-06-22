<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class="unavailable">3.1.0</li>
        </ul>
      </nav>

      <div class="columns">
        <div class="column">
        <div class="content">
          <h1>Seme Framework version 3.1.0</h1>
          <p>This is official documentation for Seme Framework, the PHP MVC Framework for creating small and medium app that needed for fast delivery. At first version of Seme Framework used for building API (Middle Ware) for another Application such as android, iOS, etc. And now as increasing of requirement, Seme Framework has expand the limit for creating Small and Medium App.</p>
          <hr>
          <h2>Change Log</h2>
          <ol class="1">
            <li>Add method loadCSS for loading CSS</li>
            <li>Improved some codes</li>
          </ol>
        </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/3.0.0/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Version: 3.0.0
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/3.2.1/" class="btn">
            Version: 3.2.1
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    layout: 'v3.1.0',
    data (){
      return {
        name: 'Seme Framework v3.1.0',
        suffix: ' - Documentation',
        title: 'Seme Framework v3.1.0 Documentation',
        description: 'Learn more about Seme Framework version 3.1.0 through this documentation.'
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
