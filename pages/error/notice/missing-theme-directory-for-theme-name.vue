<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/error/">Error &amp; Troubleshooting</NuxtLink></li>
          <li class=""><NuxtLink to="/error/notice">Notice</NuxtLink></li>
          <li class="unavailable">Missing theme directory</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1>Missing theme directory for THEME_NAME</h1>
            <p>Seme framework has theme directory under <code>app/view</code>, so you have to checked it for supplied theme name existed or not.</p>
            <p>Example error message</p>
            <pre>
Missing theme directory for front
Missing theme directory for admin
Missing theme directory for frontend
            </pre>
            <h2>Solution</h2>
            <p>Create manually the directory same as theme name name under<code>app/view/</code>.</p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/error/notice/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Error Notice List
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
      name: 'Seme Framework Error &amp; Troubleshooting',
      suffix: ' - Seme Framework Error Notice',
      title: 'Missing theme directory for THEME_NAME',
      description: 'Learn more about Seme Framework Error Missing theme directory for THEME_NAME and how to solved it.'
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
