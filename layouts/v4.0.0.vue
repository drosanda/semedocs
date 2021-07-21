<template>
  <amp-body>
    <div class="main-content columns is-fullheight">
      <amp-sidebar id="sidebar1" layout="nodisplay" side="left" on="sidebarOpen:focusOnMe.focus">
        <amp-img :src="logo" width="240" height="40" layout="responsive" alt="Seme Framework Logo"></amp-img>
        <div class="badges">
          <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/version-4.0.0-ed6f75' alt="version"></amp-img>
          <amp-img layout="fixed" width="90px" height="20px" src='https://travis-ci.org/drosanda/seme-framework.svg?branch=master' alt="build status"></amp-img>
          <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/lang-en-e9bd2e' alt="language"></amp-img>
        </div>
        <ul>
          <li><nuxt-link to="/4.0.0/">Seme Framework</nuxt-link></li>
          <li><nuxt-link to="/4.0.0/requirements/">Requirements</nuxt-link></li>
          <li><nuxt-link to="/4.0.0/downloads/">Download &amp; Install</nuxt-link></li>
          <li>
            <nuxt-link to="/4.0.0/configuration/">Configuration</nuxt-link>
            <ul>
              <li><nuxt-link to="/4.0.0/configuration/db-connection/">Database Connection</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/configuration/url/">URL Routing</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/configuration/session/">Session</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/configuration/development/">Development</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/configuration/staging/">Staging</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/configuration/production/">Production</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/4.0.0/tutorial/">Tutorials</nuxt-link>
            <ul>
              <li><nuxt-link to="/4.0.0/tutorial/introduction/">Introduction</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/tutorial/get-data/">Getting Data</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/tutorial/basic-api/">Basic API</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/4.0.0/uri_routing/">URI Routing</nuxt-link>
            <ul>
              <li><nuxt-link to="/4.0.0/uri_routing/admin/">Admin Routing</nuxt-link></li>
            </ul>
          </li>
          <li><nuxt-link to="/4.0.0/constants/">Constants</nuxt-link></li>
          <li>
            <nuxt-link to="/4.0.0/globals/">Global Variables</nuxt-link>
          </li>

          <li><nuxt-link to="/4.0.0/model/">Model</nuxt-link>
            <ul>
              <li><nuxt-link to="/4.0.0/model/between/">between</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/composite_create/">composite_create</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/delete/">delete</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/exec/">exec</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/from/">from</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/get_first/">get_first</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/get/">get</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/group_by/">group_by</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/insert_batch/">insert_batch</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/insert_multi/">insert_multi</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/insert/">insert</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/join_composite/">join_composite</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/join/">join</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/last_id/">last_id</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/limit/">limit</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/order_by/">order_by</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/page/">page</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/query/">query</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/select_as/">select_as</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/select/">select</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/update_as/">update_as</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/update/">update</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/where/">where</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/where_as/">where_as</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/4.0.0/view/">View</nuxt-link>
            <ul>
              <li><nuxt-link to="/4.0.0/view/theme/">Themes</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/view/layout/">Layout</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/view/base_url/">base_url</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/view/cdn_url/">cdn_url</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/view/theme_json/">theme_json</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/view/script_json/">script_json</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/4.0.0/controller/">Controller</nuxt-link>
            <ul>
              <li><nuxt-link to="/4.0.0/controller/constructor/">constructor</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/getadditional/">getAdditional</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/getadditionalbefore/">getAdditionalBefore</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/getadditionalafter/">getAdditionalAfter</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/getauthor/">getAuthor</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/getcanonical/">getCanonical</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/getcontentlanguage/">getContentLanguage</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/getdescription/">getDescription</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/geticon/">getIcon</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/getjsfooter/">getJsFooter</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/getjsready/">getJsReady</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/getkey/">getKey</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/getkeyword/">getKeyword</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/getlang/">getLang</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/getrobots/">getRobots</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/getshortcuticon/">getShortcutIcon</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/getthemeelement/">getThemeElement</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/gettitle/">getTitle</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/input/">input</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/lib/">lib</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/load/">load</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/loadcss/">loadCss</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/loadlayout/">loadLayout</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/putthemecontent/">putThemeContent</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/putjscontent/">putJsContent</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/putjsfooter/">putJsFooter</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/putjsready/">putJsReady</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/putthemecontent/">putThemeContent</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/render/">render</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/resetthemecontent/">resetThemeContent</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/session/">session</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/setauthor/">setAuthor</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/setcanonical/">setCanonical</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/setcontentlanguage/">setContentLanguage</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/setdescription/">setDescription</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/seticon/">setIcon</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/setkey/">setKey</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/setkeyword/">setKeyword</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/setlang/">setLang</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/setshortcuticon/">setShortcutIcon</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/settheme/">setTheme</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/controller/settitle/">setTitle</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/4.0.0/library/">Library</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/4.0.0/cli/">CLI (command line interface)</nuxt-link>
          </li>
        </ul>
      </amp-sidebar>
      <button class="hamburger" on='tap:sidebar1.toggle' aria-label="Click to open sidebar" >
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
      name: 'Seme Framework',
      version: 'v4.0.0',
      prefix: ' - ',
      title: 'Seme Framework v4.0.0 Documentation',
      description: 'Learn more about Seme Framework version 4.0.0 trough this documentation',
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
