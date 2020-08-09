<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class="unavailable">3.3.0</li>
        </ul>
      </nav>

      <div class="columns">
        <div class="column">
          <div class="content">
            <h1>Seme Framework version 3.3.0</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..
            </p>

          </div>
        </div>
      </div>


      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/credits" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Credits
          </b-button>
        </div>
        <div class="column">
          &nbsp;
        </div>
        <div class="column">
          &nbsp;
        </div>
        <div class="column">
          &nbsp;
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    layout: 'v3.0.0',
    data() {
      return {
        title: 'Seme Framework v4.0.0 Documentation'
      }
    },
    head() {
      return {
        title: this.title,
      }
    }
  }
</script>
