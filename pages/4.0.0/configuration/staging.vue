<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/configuration">Configuration</NuxtLink></li>
          <li class="unavailable">Staging</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Staging</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div class="columns">
              <div class="column">
                <b-button tag="router-link" to="/4.0.0/configuration/development/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
                  Development
                </b-button>
              </div>
              <div class="column">
                &nbsp;
              </div>
              <div class="column">
                &nbsp;
              </div>
              <div class="column">
                <b-button tag="router-link" to="/4.0.0/configuration/production" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
                  Production
                </b-button>
              </div>
            </div>

          </div>
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
        title: 'Development Phase Configuration - Seme Framework v3.2.1'
      }
    },
    head() {
      return {
        title: this.title,
      }
    }
  }
</script>
