<template>
  <amp-body>
    <div class="main-content columns is-fullheight">
      <amp-sidebar id="sidebar1" layout="nodisplay" side="left" on="sidebarOpen:focusOnMe.focus">
        <amp-img :src="logo" width="240" height="40" layout="responsive" alt="Seme Framework Logo"></amp-img>
        <div class="badges">
          <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/version-4.0.0-ed6f75' alt="version"></amp-img>
          <amp-img layout="fixed" width="90px" height="20px" src='https://travis-ci.com/drosanda/seme-framework.svg?branch=master' alt="build status"></amp-img>
          <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/lang-id-e9bd2e' alt="language"></amp-img>
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
          <li><nuxt-link to="/id">versi 4.0.3 (ID)</nuxt-link></li>
          <li><nuxt-link to="/id/requirements">Persyaratan</nuxt-link></li>
          <li><nuxt-link to="/id/downloads">Download &amp; Install</nuxt-link></li>
          <li>
            <nuxt-link to="/id/configuration">Pengaturan</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/configuration/url">URL</nuxt-link></li>
              <li><nuxt-link to="/id/configuration/db-connection">Koneksi DB</nuxt-link></li>
              <li><nuxt-link to="/id/configuration/environment">Environment</nuxt-link></li>
              <li><nuxt-link to="/id/configuration/development">Development</nuxt-link></li>
              <li><nuxt-link to="/id/configuration/staging">Staging</nuxt-link></li>
              <li><nuxt-link to="/id/configuration/production">Production</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/id/tutorial">Tutorial</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/tutorial/introduction">Perkenalan</nuxt-link></li>
              <li><nuxt-link to="/id/tutorial/get-data">Get data</nuxt-link></li>
              <li><nuxt-link to="/id/tutorial/basic-api">Pembuatan API</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/id/uri_routing">Perutean URI</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/uri_routing/admin">Perutean URI Admin</nuxt-link></li>
            </ul>
          </li>
          <li><nuxt-link to="/id/constants">Konstanta</nuxt-link></li>
          <li>
            <nuxt-link to="/id/globals">Variabel Global</nuxt-link>
          </li>

          <li><nuxt-link to="/id/model">Model</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/model/between">between</nuxt-link></li>
              <li><nuxt-link to="/id/model/composite_create">composite_create</nuxt-link></li>
              <li><nuxt-link to="/id/model/delete">delete</nuxt-link></li>
              <li><nuxt-link to="/id/model/esc">esc</nuxt-link></li>
              <li><nuxt-link to="/id/model/exec">exec</nuxt-link></li>
              <li><nuxt-link to="/id/model/from">from</nuxt-link></li>
              <li><nuxt-link to="/id/model/get_first">get_first</nuxt-link></li>
              <li><nuxt-link to="/id/model/get">get</nuxt-link></li>
              <li><nuxt-link to="/id/model/join">join</nuxt-link></li>
              <li><nuxt-link to="/id/model/group_by">group_by</nuxt-link></li>
              <li><nuxt-link to="/id/model/insert_batch">insert_batch</nuxt-link></li>
              <li><nuxt-link to="/id/model/insert_multi">insert_multi</nuxt-link></li>
              <li><nuxt-link to="/id/model/insert">insert</nuxt-link></li>
              <li><nuxt-link to="/id/model/join_composite">join_composite</nuxt-link></li>
              <li><nuxt-link to="/id/model/last_id">last_id</nuxt-link></li>
              <li><nuxt-link to="/id/model/limit">limit</nuxt-link></li>
              <li><nuxt-link to="/id/model/order_by">order_by</nuxt-link></li>
              <li><nuxt-link to="/id/model/page">page</nuxt-link></li>
              <li><nuxt-link to="/id/model/query">query</nuxt-link></li>
              <li><nuxt-link to="/id/model/select">select</nuxt-link></li>
              <li><nuxt-link to="/id/model/select_as">select_as</nuxt-link></li>
              <li><nuxt-link to="/id/model/union_create">union_create</nuxt-link></li>
              <li><nuxt-link to="/id/model/union_flush">union_flush</nuxt-link></li>
              <li><nuxt-link to="/id/model/union_get">union_get</nuxt-link></li>
              <li><nuxt-link to="/id/model/union_order_by">union_order_by</nuxt-link></li>
              <li><nuxt-link to="/id/model/union_select">union_select</nuxt-link></li>
              <li><nuxt-link to="/id/model/update_as">update_as</nuxt-link></li>
              <li><nuxt-link to="/id/model/update">update</nuxt-link></li>
              <li><nuxt-link to="/id/model/where_as">where_as</nuxt-link></li>
              <li><nuxt-link to="/id/model/where_in">where_in</nuxt-link></li>
              <li><nuxt-link to="/id/model/where">where</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/id/view">View</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/view/variable">Variabel</nuxt-link></li>
              <li><nuxt-link to="/id/view/theme_json">theme_json</nuxt-link></li>
              <li><nuxt-link to="/id/view/script_json">script_json</nuxt-link></li>
              <li><nuxt-link to="/id/view/theme">Membuat Tema</nuxt-link></li>
              <li><nuxt-link to="/id/view/layout">Tata letak (layout)</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/id/controller">Controller</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/controller/cdn_url">cdn_url</nuxt-link></li>
              <li><nuxt-link to="/id/controller/config">config</nuxt-link></li>
              <li><nuxt-link to="/id/controller/constructor">constructor</nuxt-link></li>
              <li><nuxt-link to="/id/controller/getadditional">getAdditional</nuxt-link></li>
              <li><nuxt-link to="/id/controller/getadditionalbefore">getAdditionalBefore</nuxt-link></li>
              <li><nuxt-link to="/id/controller/getadditionalafter">getAdditionalAfter</nuxt-link></li>
              <li><nuxt-link to="/id/controller/getauthor">getAuthor</nuxt-link></li>
              <li><nuxt-link to="/id/controller/getjscontent">getJsContent</nuxt-link></li>
              <li><nuxt-link to="/id/controller/getjsfooter">getJsFooter</nuxt-link></li>
              <li><nuxt-link to="/id/controller/getjsready">getJsReady</nuxt-link></li>
              <li><nuxt-link to="/id/controller/getkey">getKey</nuxt-link></li>
              <li><nuxt-link to="/id/controller/gettitle">getTitle</nuxt-link></li>
              <li><nuxt-link to="/id/controller/input">input</nuxt-link></li>
              <li><nuxt-link to="/id/controller/lib">lib</nuxt-link></li>
              <li><nuxt-link to="/id/controller/load">load</nuxt-link></li>
              <li><nuxt-link to="/id/controller/loadcss">loadCss</nuxt-link></li>
              <li><nuxt-link to="/id/controller/loadlayout">loadLayout</nuxt-link></li>
              <li><nuxt-link to="/id/controller/render">render</nuxt-link></li>
              <li><nuxt-link to="/id/controller/putjscontent">putJsContent</nuxt-link></li>
              <li><nuxt-link to="/id/controller/putjscontent">putJsFooter</nuxt-link></li>
              <li><nuxt-link to="/id/controller/putjscontent">putJsReady</nuxt-link></li>
              <li><nuxt-link to="/id/controller/putthemecontent">putThemeContent</nuxt-link></li>
              <li><nuxt-link to="/id/controller/render">render</nuxt-link></li>
              <li><nuxt-link to="/id/controller/session">session</nuxt-link></li>
              <li><nuxt-link to="/id/controller/setkey">setKey</nuxt-link></li>
              <li><nuxt-link to="/id/controller/settheme">setTheme</nuxt-link></li>
              <li><nuxt-link to="/id/controller/settitle">setTitle</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/id/library">Library</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/id/cli">CLI (command line interface)</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/id/core">Core</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/core/controller">Controller</nuxt-link></li>
              <li><nuxt-link to="/id/core/model">Model</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/id/abac">ABAC</nuxt-link>
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
          <p class="">Copyright &copy; 2014-2024. Dibuat sepenuh cinta di Bandung, Indonesia oleh Daeng Rosanda, S.Kom.</p>
          <p><small>Terakhir Diperbarui 12 Juni 2024 | <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink> | <NuxtLink to="/term-condition">Term &amp; Condition</NuxtLink></small></p>
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
      version: 'v4.0',
      prefix: ' - ',
      title: 'Seme Framework 4 Bahasa Indonesia',
      description: 'Dokumentasi Seme Framework 4 Bahasa Indonesia',
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
