<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class="unavailable">Home</li>
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
    </div>
  </div>
</template>
<script>
  export default {
    layout: 'v3.1.0',
    data() {
      return {
        title: 'Seme Framework v3.1.0 Documentation'
      }
    },
    head() {
      return {
        title: this.title,
      }
    }
  }
</script>
