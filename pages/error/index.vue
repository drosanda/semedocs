<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class="unavailable">Error &amp; Troubleshooting</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1>Error &amp; Troubleshooting</h1>
            <p>Like other framework, Seme Framework has builtin error message.</p>
            <p>Here is the list of known error that ussually occured in Seme Framework</p>
            <ul>
              <li>
                <NuxtLink to="/error/notice/">Notice</NuxtLink>
                <ul>
                  <li><NuxtLink to="/error/notice/missing-app-cache">Notice: Missing app/cache</NuxtLink></li>
                  <li><NuxtLink to="/error/notice/missing-kero-bin">Notice: Missing kero/bin</NuxtLink></li>
                </ul>
              </li>
            </ul>
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
      name: 'Seme Framework Error & Troubleshooting',
      suffix: ' - Seme Framework Documentation',
      title: 'Error & Troubleshooting',
      description: 'Learn more about Seme Framework Error & Troubleshooting nad how to solved it.'
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
