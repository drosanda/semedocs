<template>
  <div class="section">
    <div class="container">

      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 v-if="error.statusCode === 404" class="is-size-1">Not Found (404)</h1>
            <p>The page that you are requested maybe not found or underconstruction.</p>
            <p>Feel free to ask me on my <a href="https://instagram.com/drosanda/" target="_blank">instagram</a>, <a href="https://facebook.com/drs11/" target="_blank">facebook</a>, or open an issue on <a href="https://github.com/drosanda/semedocs/issues" target="_blank">github</a>.</p>
          </div>
        </div>
      </div>


      <div class="columns">
        <div class="column">
          &nbsp;
        </div>
        <div class="column is-2">&nbsp;</div>
        <div class="column">
          <b-button tag="router-link" to="/credits/" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Credits
          </b-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: ['error']
  }
</script>
