<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">Bahasa Indonesia</NuxtLink></li>
          <li class=""><NuxtLink to="/id/view">View</NuxtLink></li>
          <li class="unavailable">Theme</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Theme</h1>


          </div>
        </div>

      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/view/" type="is-link" icon-pack="fa" icon-left="chevron-left">
              View
            </b-button>
            <b-button tag="router-link" to="/id/view/layout/" type="is-link" icon-pack="fa" icon-right="chevron-right">
              Layout
            </b-button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'id',
  data() {
    return {
      name: 'Seme Framework v4.0.0',
      suffix: ' - Dokumentasi Seme Framework v4.0.0',
      title: 'Theme View from SENE_Controller',
      description: 'Pelajari selengkapnya tentang Theme View from SENE_Controller on Seme Framework versi 4.0.0'
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
