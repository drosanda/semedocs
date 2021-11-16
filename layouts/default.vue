<template>
  <amp-body>
    <div class="main-content columns is-fullheight">
      <amp-sidebar id="sidebar1" layout="nodisplay" side="left" on="sidebarOpen:focusOnMe.focus">
        <amp-img layout="responsive" width="240" height="40" alt="Seme Framework Logo" :src="logo"></amp-img>
        <div class="badges">
          <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/version-4.0.3-ed6f75' alt="version"></amp-img>
          <amp-img layout="fixed" width="90px" height="20px" src='https://travis-ci.com/drosanda/seme-framework.svg?branch=master' alt="build status"></amp-img>
          <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/lang-en-e9bd2e' alt="version"></amp-img>
        </div>
        <div class="search-box">
          <form method="GET" class="search-form" action="https://www.google.com/cse" target="_top">
            <div class="search-form-inner">
              <input name="cx" type="hidden" value="d6d5426aa8bd01883" />
              <input name="ie" type="hidden" value="UTF-8" />
              <input type="search" placeholder="Search..." name="q" class="form-control" required>
              <button type="submit" class="search-button"><i class="fa fa-search"></i></button>
            </div>
          </form>
        </div>
        <ul>
          <li><nuxt-link to="/">Seme Framework</nuxt-link></li>
          <li><nuxt-link to="/credits">Credits</nuxt-link></li>
          <li>
            <nuxt-link to="/version">Versions</nuxt-link>
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
                <nuxt-link to="/issue/notice">Notice</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/issue/troubleshooting">Troubleshooting</nuxt-link>
              </li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/deployment">Deployment</nuxt-link>
            <ul>
              <li>
                <nuxt-link to="/deployment/hosting-cpanel">Hosting with CPANEL</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
        <br>
        <br>
        <br>
        <br>
      </amp-sidebar>
      <button
        class="hamburger"
        on='tap:sidebar1.toggle'
        aria-label="Click to open sidebar"
        >
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
          <p><small>Last updated on August 2, 2021 | <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink> | <NuxtLink to="/term-condition">Term &amp; Condition</NuxtLink></small></p>
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
