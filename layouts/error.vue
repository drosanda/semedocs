<template>
  <div class="section">
    <div class="container">

      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 v-if="error.statusCode === 404" class="is-size-1">Not Found (404)</h1>
            <h1 v-else class="is-size-1">Error ({{error.statusCode}})</h1>
            <p>The page that you are requested maybe not found or underconstruction.</p>
            <p>Feel free to ask me on my <a href="https://instagram.com/drosanda/" target="_blank">instagram</a>, <a href="https://facebook.com/drs11/" target="_blank">facebook</a>, or open an issue on <a href="https://github.com/drosanda/semedocs/issues" target="_blank">github</a>.</p>
          </div>
        </div>
      </div>


      <div class="columns">
        <div clas="column">
          <div clas="buttons">
            <b-button tag="router-link" to="/" type="is-link" icon-pack="fa" icon-left="home" class="">
              Back to main page
            </b-button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  head() {
    return {
      title: 'Error 404 Not Found - SemeDocs',
      description: 'The page you are looking for is not found or underconstruction.',
      link: [
        {
          rel: 'canonical',
          href: 'https://www.cenah.co.id/' + this.$route.path.replace(/\/+$/, '') + '/'
        }
      ]
    }
  }
}
</script>
