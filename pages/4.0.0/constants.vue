<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class="unavailable">Constants</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1>Constants</h1>
            <p>Seme Framework contains some constant that can help during development progress.</p>
            <p>Here is the list of constant:</p>
            <ul type="1">
              <li>SEMEROOT: points to root directory</li>
              <li>SEMELIB: points to root kero/lib directory</li>
              <li>SEMEVERSION: contains about the version of framework</li>
            </ul>
            <p>And for view scope, Seme Framework has variable that can be passed initialize data to another view (unantended).</p>
            <p><code>$__forward</code> are globally reserved for re-passing the data in view to another view.</p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/uri_routing/admin" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Uri Routing: Admin
          </b-button>
        </div>
        <div class="column is-2">&nbsp;</div>
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/globals" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Globals
          </b-button>
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
      suffix: ' - Seme Framework v4.0.0 Documentation',
      title: 'Global Variables and Constants',
      description: 'Learn more about Global Variables / Constants and Methods used by Seme Framework version 4.0.0 through this documentation.'
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
