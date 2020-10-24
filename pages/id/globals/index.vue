<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">Bahasa Indonesia</NuxtLink></li>
          <li class="unavailable">Global Variables and Functions</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Global Variables and Functions</h1>
            <p>Like the other framework, Seme Framework has several global Variables and Functions that you can use for your web app.</p>

            <h2>base_url()</h2>
            <p>This global function return full path url. Please make sure your <code>$base_url</code> are set properly for each <NuxtLink to="/id/configuration/">configurations</NuxtLink>.</p>

            <h2>base_url_admin()</h2>
            <p>This global function return full path url for admin secret url. Please make sure your <code>$base_url_admin</code> are set properly for each <NuxtLink to="/id/configuration/">configurations</NuxtLink>.</p>

            <h2>Controller::debug()</h2>
            <p>This global function will echo pre formatted text for debugging purpose.</p>

            <h2>dd()</h2>
            <p>Same as <code>Controller::debug()</code> this global function will echo pre formatted text for debugging purpose.</p>


            <h2>$__forward</h2>
            <p>This global variable used by view for forwarding variable between <NuxtLink to="/id/view">view</NuxtLink>.</p>

          </div>
        </div>

      </div>


      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/constants" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Constants
            </b-button>
            <b-button tag="router-link" to="/id/model" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Class Model
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
      suffix: ' - Dokumentasi Seme Framework v4.0.0',
      title: 'Global Variables and Functions',
      description: 'Pelajari selengkapnya tentang Global Variables and Functions of melalui dokumentasi Seme Framework versi 4.0.0.'
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
