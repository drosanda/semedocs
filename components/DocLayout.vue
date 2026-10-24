<template>
  <amp-body>
    <div class="main-content columns is-fullheight">
      <amp-sidebar id="sidebar1" layout="nodisplay" side="left" on="sidebarOpen:focusOnMe.focus">
        <amp-img :src="logo" width="240" height="40" layout="responsive" alt="Seme Framework Logo"></amp-img>
        <div v-if="config.badge" class="badges">
          <amp-img layout="fixed" width="90px" height="20px" :src="'https://img.shields.io/badge/version-' + config.badge.version + '-ed6f75'" alt="version"></amp-img>
          <amp-img layout="fixed" width="90px" height="20px" src='https://travis-ci.com/drosanda/seme-framework.svg?branch=master' alt="build status"></amp-img>
          <amp-img layout="fixed" width="90px" height="20px" :src="'https://img.shields.io/badge/lang-' + config.badge.lang + '-e9bd2e'" alt="language"></amp-img>
        </div>
        <div v-if="config.search" class="search-box">
          <form method="GET" class="search-form" action="https://www.google.com/cse" target="_top">
            <div class="search-form-inner">
              <input name="cx" type="hidden" value="d6d5426aa8bd01883" />
              <input name="ie" type="hidden" value="UTF-8" />
              <input type="search" placeholder="Search..." name="q" class="form-control" required>
              <button type="submit" class="search-button"><i class="fa fa-search"></i></button>
            </div>
          </form>
        </div>
        <DocNav :items="config.nav" />
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
          <p class="">{{ config.footer.copyright }}</p>
          <p v-if="config.footer.links"><small>{{ config.footer.updated }} | <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink> | <NuxtLink to="/term-condition">Term &amp; Condition</NuxtLink></small></p>
          <p v-else><small>{{ config.footer.updated }}</small></p>
        </div>
      </div>
    </footer>
    <amp-analytics v-if="config.analytics" type="googleanalytics" id="analytics1" :config="ga">
    </amp-analytics>
  </amp-body>
</template>

<script>
import layouts from '~/data/layouts'

// Shared shell for every documentation layout. Layout files in /layouts only
// pick which entry of data/layouts.js to use.
export default {
  props: {
    name: { type: String, required: true }
  },
  data() {
    return {
      logo: require('~/static/logo.png'),
      ga: (process.env.ORIGIN_URL || 'http://localhost:3001/') + 'ga.json'
    }
  },
  computed: {
    config() {
      return layouts[this.name]
    }
  },
  head() {
    const c = this.config
    return {
      title: c.suffix ? c.title + ' - ' + c.suffix : c.title,
      meta: [
        { hid: 'description', name: 'description', content: c.description },
        { hid: 'og:title', name: 'og:title', content: c.title },
        { hid: 'og:description', name: 'og:description', content: c.description },
        {
          hid: 'og:url',
          name: 'og:url',
          content: (process.env.BASE_URL || 'http://localhost:3001') + this.$route.path.replace(/\/+$/, '') + '/'
        }
      ]
    }
  }
}
</script>
