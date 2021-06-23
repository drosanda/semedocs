<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/database">Database</NuxtLink></li>
          <li class="unavailable">Debug Query</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Debug Query</h1>
            <p>On this page you will learn how to debug query from query builder.</p>


          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/database/" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Database
            </b-button>
            <b-button tag="router-link" to="/id/globals/" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Globals
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
  data (){
    return {
      name: 'Seme Framework v4.0.0',
      suffix: ' - Seme Framework Bahasa Indonesia',
      title: 'Debug Query Database',
      description: 'Pelajari selengkapnya tentang how to debug query from query builder using melalui dokumentasi Seme Framework versi 4.0.0.'
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
