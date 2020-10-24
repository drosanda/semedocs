<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">Bahasa Indonesia</NuxtLink></li>
          <li class="unavailable">Constants</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1>Constants</h1>
            <p>Seme Framework contains some constant that can help during coding phase.</p>
            <p>Here is the list of constant:</p>
            <table>
              <thead>
                <tr>
                  <th>Constant</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SEMEROOT</td>
                  <td>Point to Seme Framework root directory</td>
                </tr>
                <tr>
                  <td>SEMELIB</td>
                  <td>Point to <code>kero/lib</code> directory</td>
                </tr>
                <tr>
                  <td>SEME_VERSION</td>
                  <td>Current version value of Seme Framework</td>
                </tr>
                <tr>
                  <td>SEME_START</td>
                  <td>Return the microtime value of first (initial) script.</td>
                </tr>
                <tr>
                  <td>DS</td>
                  <td>Return the current (system) directory separator.</td>
                </tr>
              </tbody>
            </table>


          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/uri_routing/admin" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Uri Routing: Admin
            </b-button>
            <b-button tag="router-link" to="/id/globals" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
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
      suffix: ' - Dokumentasi Seme Framework v4.0.0',
      title: 'Constants',
      description: 'Pelajari selengkapnya tentang Global Variables / Constants and Methods used by melalui dokumentasi Seme Framework versi 4.0.0.'
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
