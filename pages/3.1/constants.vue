<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.1/">3.1.x</NuxtLink></li>
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

    </div>
  </div>
</template>
<script>
export default {
  layout: 'v3.1',
  data (){
    return {
      name: 'Seme Framework v3.1.5',
      suffix: ' - Seme Framework v3.1.5 Documentation',
      title: 'Constants',
      description: 'Learn more about Global Variables / Constants and Methods used by Seme Framework version 3.1.x through this documentation.'
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
