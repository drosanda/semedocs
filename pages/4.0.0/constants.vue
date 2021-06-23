<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
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

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0.0/uri_routing/admin/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Uri Routing: Admin
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0.0/globals/" class="btn">
            Globals
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
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
      suffix: ' - Seme Framework 4',
      title: 'Constants',
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
