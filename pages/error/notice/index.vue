<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/error/">Error &amp; Troubleshooting</NuxtLink></li>
          <li class="unavailable">Error Notice</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1>Error Notice List</h1>
            <p>Here is the list of known error that ussually occured in Seme Framework</p>
            <ul>
              <li><NuxtLink to="/error/notice/missing-app-cache">Notice: Missing app/cache</NuxtLink></li>
              <li><NuxtLink to="/error/notice/missing-kero-bin">Notice: Missing kero/bin</NuxtLink></li>
              <li><NuxtLink to="/error/notice/could-not-find-model">Error: Could not find model</NuxtLink></li>
              <li><NuxtLink to="/error/notice/missing-theme-directory-for-theme-name">Error: Missing theme directory for THEME NAME</NuxtLink></li>
              <li><NuxtLink to="/error/notice/could-not-find-library">Could not find library LIBRARY NAME</NuxtLink></li>
              <li><NuxtLink to="/error/notice/unable-to-load-library-on">Unable to load library on LIBRARY NAME</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/error/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Error &amp; Troubleshooting
            </b-button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'troubleshoot',
  data (){
    return {
      name: 'Seme Framework Error Notice',
      suffix: ' - Seme Framework Documentation',
      title: 'Error Notice',
      description: 'Learn more about any Error Notice occured while using Seme Framework and how to solved it.'
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
