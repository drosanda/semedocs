<template>
  <amp-body>
    <div class="main-content columns is-fullheight">
      <amp-sidebar id="sidebar1" layout="nodisplay" side="left" on="sidebarOpen:focusOnMe.focus">
        <amp-img layout="responsive" width="240" height="40" alt="Seme Framework Logo" :src="logo"></amp-img>
        <div class="badges">
          <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/version-4.0.0-ed6f75' alt="version"></amp-img>
          <amp-img layout="fixed" width="90px" height="20px" src='https://travis-ci.org/drosanda/seme-framework.svg?branch=master' alt="build status"></amp-img>
          <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/lang-en-e9bd2e' alt="version"></amp-img>
        </div>
        <ul>
          <li><nuxt-link to="/">Seme Framework</nuxt-link></li>
          <li><nuxt-link to="/credits/">Credits</nuxt-link></li>
          <li>
            <nuxt-link to="/version/">Versions</nuxt-link>
            <ul>
              <li><nuxt-link to="/4.0.0/">4.0.0 (English)</nuxt-link></li>
              <li><nuxt-link to="/id/">4.0.0 (Bahasa)</nuxt-link></li>
              <li><nuxt-link to="/3.3.0/">3.3.0</nuxt-link></li>
              <li><nuxt-link to="/3.2.1/">3.2.1</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/">3.1.x</nuxt-link></li>
              <li><nuxt-link to="/3.0.0/">3.0.x</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/error/">Notice, Error &amp; Troubleshooting</nuxt-link>
            <ul>
              <li>
                <nuxt-link to="/error/notice/">Notice</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/error/troubleshooting/">Troubleshooting</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </amp-sidebar>
      <button
        class="hamburger"
        on='tap:sidebar1.toggle'
        aria-label="Click to open sidebar"
        >
        <div class="hamburger"></div>
      </button>
      <div class="container column is-9">
        <nuxt />
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p class="">Copyright &copy; 2014-2021. Made with Love in Bandung, Indonesia by Daeng Rosanda, S.Kom.</p>
          <p><small>Last updated on May 30, 2021</small></p>
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
      name: 'Seme Docs',
      title: 'Seme Framework Documentation',
      description: 'Deployable and lightweight PHP MVC framework that suitable for small and medium web app',
      logo: require('~/static/logo.png'),
      ga: (process.env.ORIGIN_URL || 'http://localhost:3001/')+'ga.json',
      breadcrumbs: [
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/',
          text: 'home',
        }
      ],
    }
  },
  head() {
    return {
      title: this.title,
      description: this.description,
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
