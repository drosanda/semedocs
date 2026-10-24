<template>
  <div>
    <div class="section">
      <div class="column">
        <div class="content">
          <h1 v-if="error.statusCode === 404" class="is-size-1">Not Found (404)</h1>
          <h1 v-else class="is-size-1">Error ({{error.statusCode}})</h1>
          <p>The page that you are requested maybe not found or underconstruction.</p>
          <p>
            Feel free to ask me on my <a href="https://instagram.com/drosanda/" target="_blank">instagram</a>,
            <a href="https://facebook.com/drs11/" target="_blank">facebook</a>,
            or open an issue about <a href="https://github.com/drosanda/semedocs/issues" target="_blank">this docs on github</a>,
            or open an issue about <a href="https://github.com/drosanda/seme-framework" target="_blank">Seme Framework</a>.
          </p>

          <div class="nav-bottom">
            <div class="nav-bottom-left">
              <nuxt-link to="/" class="btn">
                <i class="fa fa-chevron-left"></i>
                Back to Home
              </nuxt-link>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: { type: Object, required: true }
})

useHead({
  title: 'Error 404 Not Found - SemeDocs',
  meta: [{ name: 'description', content: 'The page you are looking for is not found or underconstruction.' }]
})
</script>
