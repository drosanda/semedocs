<template>
  <amp-body>
    <div class="main-content columns is-fullheight">
      <amp-sidebar id="sidebar1" layout="nodisplay" side="left" on="sidebarOpen:focusOnMe.focus">
        <amp-img :src="logo" width="240" height="40" layout="responsive" alt="Seme Framework Logo"></amp-img>
        <ul>
          <li><nuxt-link to="/">Seme Framework</nuxt-link></li>
          <li><nuxt-link to="/credits/">Credits</nuxt-link></li>
          <li>
            <a href="#">Version</a>
            <ul>
              <li><nuxt-link to="/4.0">4.0.3 (English)</nuxt-link></li>
              <li><nuxt-link to="/id">4.0.3 (Bahasa)</nuxt-link></li>
              <li><nuxt-link to="/3.3">3.3.x</nuxt-link></li>
              <li><nuxt-link to="/3.2">3.2.1</nuxt-link></li>
              <li><nuxt-link to="/3.1">3.1.x</nuxt-link></li>
              <li><nuxt-link to="/3.0">3.0.x</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/issue">Issue</nuxt-link>
            <ul>
              <li>
                <nuxt-link to="/issue/notice">Error Notice</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/issue/troubleshooting">Troubleshooting</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
        <br>
        <br>
        <br>
      </amp-sidebar>
      <button class="hamburger" on='tap:sidebar1.toggle' aria-label="Click to open sidebar" >
        <div class="hamburger"></div>
      </button>
      <div class="container column is-9">
        <amp-auto-ads type="adsense" data-ad-client="ca-pub-5281151685218961">
        </amp-auto-ads>
        <nuxt />
        <amp-auto-ads type="adsense" data-ad-client="ca-pub-5281151685218961">
        </amp-auto-ads>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p class="">Copyright &copy; 2014-2021. Made with Love in Bandung, Indonesia by Daeng Rosanda, S.Kom.</p>
          <p><small>Last updated on June 10, 2021 | <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink> | <NuxtLink to="/term-condition">Term &amp; Condition</NuxtLink></small></p>
        </div>
      </div>
    </footer>
    <amp-analytics type="googleanalytics" id="analytics1" :config="ga">
    </amp-analytics>
  </amp-body>
</template>

<script>
export default {
  data() {
    return {
      name: 'Seme Framework',
      version: 'v4.0.0',
      prefix: ' - ',
      title: 'Seme Framework Troubleshooting',
      description: 'Learn more about Seme Framework Troubleshooting trough this documentation',
      logo: require('~/static/logo.png'),
      ga: (process.env.ORIGIN_URL || 'http://localhost:3001/')+'ga.json',
    }
  },
  head() {
    return {
      title: this.title+this.prefix+' '+this.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path.replace(/\/+$/, '') + '/'
        }
      ]
    }
  }
}
</script>
