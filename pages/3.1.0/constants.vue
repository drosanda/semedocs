<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.1.0/">3.1.0</NuxtLink></li>
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
                  <td>SENEROOT</td>
                  <td>Point to Seme Framework root directory</td>
                </tr>
                <tr>
                  <td>SENELIB</td>
                  <td>Point to <code>kero/lib</code> directory</td>
                </tr>
                <tr>
                  <td>SENE_VERSION</td>
                  <td>Current version value of Seme Framework</td>
                </tr>
              </tbody>
            </table>


          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/3.1.0/uri_routing/admin" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Uri Routing: Admin
            </b-button>
            <b-button tag="router-link" to="/3.1.0/globals" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
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
  layout: 'v3.1',
  data (){
    return {
      name: 'Seme Framework v3.1.0',
      suffix: ' - Seme Framework v3.1.0 Documentation',
      title: 'Constants',
      description: 'Learn more about Global Variables / Constants and Methods used by Seme Framework version 3.1.0 through this documentation.'
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
