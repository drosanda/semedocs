<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/view">View</NuxtLink></li>
          <li class="unavailable">Theme Layout</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Theme Layout</h1>


          </div>
        </div>

      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/4.0.0/view/theme" icon-pack="fa" icon-left="chevron-left">
              Theme
            </b-button>
            <b-button tag="router-link" to="/4.0.0/view/theme-content" icon-pack="fa" icon-right="chevron-right">
              Theme Content
            </b-button>
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
      name: 'Seme Framework v4.0.0',
      suffix: ' - Seme Framework v4.0.0 Documentation',
      title: 'Theme Layout View from SENE_Controller',
      description: 'Learn more about Theme Layout View from SENE_Controller on Seme Framework version 4.0.0'
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
