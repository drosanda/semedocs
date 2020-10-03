<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/error/">Error &amp; Troubleshooting</NuxtLink></li>
          <li class=""><NuxtLink to="/error/notice">Notice</NuxtLink></li>
          <li class="unavailable">Missing kero/bin</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1>Missing kero/bin</h1>
            <p>Seme framework has special place for putting your batch or binary in <code>kero/bin/</code> directory.</p>
            <p>But, this directory for now is not auto generated so you have to created manually the <code>bin</code> directory.</p>
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
      title: 'Seme Framework Error Notice: Missing kero/bin',
      description: 'Learn more about Seme Framework Error Notice: Missing app/cache and how to solved it.'
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
