<template>
  <amp-body>
    <div class="main-content columns is-fullheight">
      <amp-sidebar id="sidebar1" layout="nodisplay" side="left" on="sidebarOpen:focusOnMe.focus">
      <amp-img :src="logo" width="240" height="40" layout="responsive" alt="Seme Framework Logo"></amp-img>
      <div class="badges">
        <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/version-3.2.1-ed6f75' alt="version"></amp-img>
        <amp-img layout="fixed" width="90px" height="20px" src='https://travis-ci.com/drosanda/seme-framework.svg?branch=master' alt="build status"></amp-img>
        <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/lang-en-e9bd2e' alt="language"></amp-img>
      </div>
      <ul>
        <li><nuxt-link to="/">Seme Framework</nuxt-link></li>
        <li><nuxt-link to="/credits">Credits</nuxt-link></li>
        <li>
          <nuxt-link to="/3.2">Version 3.2.X</nuxt-link>
          <ul>
            <li><nuxt-link to="/3.2/requirements">Requirements</nuxt-link></li>
            <li><nuxt-link to="/3.2/download">Download</nuxt-link></li>
            <li><nuxt-link to="/3.2/install">Install</nuxt-link></li>
            <li>
              <nuxt-link to="/3.2/tutorial">Tutorial</nuxt-link>
              <ul>
                <li><nuxt-link to="/3.2/tutorial/introduction">Introduction</nuxt-link></li>
              </ul>
            </li>
            <li>
              <nuxt-link to="/3.2/uri-routing">URI Routing</nuxt-link>
              <ul>
                <li><nuxt-link to="/3.2/uri-routing/admin">Admin Routing</nuxt-link></li>
              </ul>
            </li>
            <li>
              <nuxt-link to="/3.2/configuration">Configuration</nuxt-link>
              <ul>
                <li><nuxt-link to="/3.2/configuration/config">Config</nuxt-link></li>
                <li><nuxt-link to="/3.2/configuration/controller">Controller</nuxt-link></li>
                <li><nuxt-link to="/3.2/configuration/core">Core</nuxt-link></li>
                <li><nuxt-link to="/3.2/configuration/database">Database</nuxt-link></li>
                <li><nuxt-link to="/3.2/configuration/session">Session</nuxt-link></li>
                <li><nuxt-link to="/3.2/configuration/timezone">Timezone</nuxt-link></li>
              </ul>
            </li>
            <li><nuxt-link to="/3.2/constants">Constants</nuxt-link></li>
            <li><nuxt-link to="/3.2/model">Model</nuxt-link>
              <ul>
                <li><nuxt-link to="/3.2/model/select">select</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/select_as">select_as</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/from">from</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/join">join</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/join_composite">join_composite</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/composite_create">composite_create</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/where">where</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/where_as">where_as</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/between">between</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/group_by">group_by</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/order_by">order_by</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/limit">limit</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/get">get</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/get_first">get_first</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/insert">insert</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/insert_multi">insert_multi</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/insert_batch">insert_batch</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/update_as">update_as</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/update">update</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/delete">delete</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/exec">exec</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/query">query</nuxt-link></li>
                <li><nuxt-link to="/3.2/model/last_id">last_id</nuxt-link></li>
              </ul>
            </li>
            <li><nuxt-link to="/3.2/view">View</nuxt-link></li>
            <li>
              <nuxt-link to="/3.2/controller">Controller</nuxt-link>
              <ul>
                <li><nuxt-link to="/3.2/controller/session">Using Session</nuxt-link></li>
                <li><nuxt-link to="/3.2/controller/input">Handling Input Form</nuxt-link></li>
                <li><nuxt-link to="/3.2/controller/getadditional">getAdditional</nuxt-link></li>
                <li><nuxt-link to="/3.2/controller/getadditionalbefore">getAdditionalBefore</nuxt-link></li>
                <li><nuxt-link to="/3.2/controller/getadditionalafter">getAdditionalAfter</nuxt-link></li>
                <li><nuxt-link to="/3.2/controller/getauthor">getAuthor</nuxt-link></li>
              </ul>
            </li>
            <li>
              <nuxt-link to="/3.2/database">Database</nuxt-link>
              <ul>
                <li><nuxt-link to="/3.2/database/quick-start">Quick Start</nuxt-link></li>
                <li><nuxt-link to="/3.2/database/query-builder">Query Builder</nuxt-link></li>
              </ul>
            </li>
            <li>
              <nuxt-link to="/3.2/library">Library</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/3.2/global">Globals</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/3.2/cli">CLI (command line interface)</nuxt-link>
            </li>
          </ul>
        </li>
        <li><nuxt-link to="/issue">Issue</nuxt-link></li>
        <li>
          <nuxt-link to="/deployment">Deployment</nuxt-link>
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
          <p class="">Seme Framework v3.2.5 &copy; 2014-2022. Made with Love in Bandung, Indonesia by Daeng Rosanda, S.Kom.</p>
          <p><small>Last updated on March 8, 2022</small></p>
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
      name: 'SemeDocs',
      title: 'Seme Framework Documentation v3.2.5',
      description: 'Deployable and lightweight PHP MVC framework that suitable for small and medium web app',
      keyword: '',
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
