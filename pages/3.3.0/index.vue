<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class="unavailable">3.3.0</li>
        </ul>
      </nav>

      <div class="columns">
        <div class="column">
          <div class="content">
            <h1>Seme Framework version 3.3.0</h1>
            <p>The main goals on version 3.3.0 is applying namespace for Seme Framework. For now, documentation is not completed yet.</p>
            <hr>
            <h2>Question and Answer</h2>
            <p>Feel free to ask me on my <a href="https://instagram.com/drosanda/" target="_blank">instagram</a>, <a href="https://facebook.com/drs11/" target="_blank">facebook</a>, or open an issue on <a href="https://github.com/drosanda/semedocs/issues" target="_blank">github</a>.</p>
            <hr>
            <h2>Change Log</h2>
            <ol class="1">
              <li>Add namespace for model, view, and controller classes</li>
              <li>Enhance index.php from version 4.0.0</li>
            </ol>
          </div>
        </div>
      </div>


      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/3.2.1" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Version: 3.2.1
            </b-button>
            <b-button tag="router-link" to="/4.0.0" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Version: 4.0.0
            </b-button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'v3.3.0',
  data (){
    return {
      name: 'Seme Framework v3.3.0',
      suffix: ' - Documentation',
      title: 'Seme Framework v3.3.0 Documentation',
      description: 'Learn more about Seme Framework version 3.3.0 through this documentation.'
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
