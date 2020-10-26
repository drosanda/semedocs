<template>
  <div>
    <div class="main-content columns is-fullheight">
      <aside class="column is-3 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <figure>
          <img src="~/static/logo.png">
        </figure>
        <div class="badges">
          <img src='https://img.shields.io/badge/version-4.0.0-ed6f75' alt="version">
          <img src='https://travis-ci.org/drosanda/seme-framework.svg?branch=master' alt="build status">
          <img src='https://img.shields.io/badge/lang-id-e9bd2e' alt="version">
        </div>
        <ul class="menu-list">
          <li><nuxt-link to="/">Seme Framework</nuxt-link></li>
          <li><nuxt-link to="/id/requirements">Persyaratan</nuxt-link></li>
          <li><nuxt-link to="/id/downloads">Download &amp; Install</nuxt-link></li>
          <li>
            <nuxt-link to="/id/configuration">Pengaturan</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/configuration/url">URL</nuxt-link></li>
              <li><nuxt-link to="/id/configuration/db-connection">Koneksi DB</nuxt-link></li>
              <li><nuxt-link to="/id/configuration/development">Development</nuxt-link></li>
              <li><nuxt-link to="/id/configuration/staging">Staging</nuxt-link></li>
              <li><nuxt-link to="/id/configuration/production">Production</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/id/tutorial">Tutorial</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/tutorial/introduction">Perkenalan</nuxt-link></li>
              <li><nuxt-link to="/id/tutorial/get-data">Menarik data</nuxt-link></li>
              <li><nuxt-link to="/id/tutorial/basic-api">dasar-dasar API</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/id/uri_routing">URI Routing</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/uri_routing/admin">Admin Routing</nuxt-link></li>
            </ul>
          </li>
          <li><nuxt-link to="/id/constants">Konstanta</nuxt-link></li>
          <li>
            <nuxt-link to="/id/globals">Variabel Global</nuxt-link>
          </li>

          <li><nuxt-link to="/id/model">Model</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/model/select">Model::select</nuxt-link></li>
              <li><nuxt-link to="/id/model/select_as">Model::select_as</nuxt-link></li>
              <li><nuxt-link to="/id/model/from">Model::from</nuxt-link></li>
              <li><nuxt-link to="/id/model/join">Model::join</nuxt-link></li>
              <li><nuxt-link to="/id/model/join_composite">Model::join_composite</nuxt-link></li>
              <li><nuxt-link to="/id/model/composite_create">Model::composite_create</nuxt-link></li>
              <li><nuxt-link to="/id/model/where">Model::where</nuxt-link></li>
              <li><nuxt-link to="/id/model/where_as">Model::where_as</nuxt-link></li>
              <li><nuxt-link to="/id/model/between">Model::between</nuxt-link></li>
              <li><nuxt-link to="/id/model/group_by">Model::group_by</nuxt-link></li>
              <li><nuxt-link to="/id/model/order_by">Model::order_by</nuxt-link></li>
              <li><nuxt-link to="/id/model/limit">Model::limit</nuxt-link></li>
              <li><nuxt-link to="/id/model/get">Model::get</nuxt-link></li>
              <li><nuxt-link to="/id/model/get_first">Model::get_first</nuxt-link></li>
              <li><nuxt-link to="/id/model/insert">Model::insert</nuxt-link></li>
              <li><nuxt-link to="/id/model/insert_multi">Model::insert_multi</nuxt-link></li>
              <li><nuxt-link to="/id/model/insert_batch">Model::insert_batch</nuxt-link></li>
              <li><nuxt-link to="/id/model/update">Model::update</nuxt-link></li>
              <li><nuxt-link to="/id/model/delete">Model::delete</nuxt-link></li>
              <li><nuxt-link to="/id/model/exec">Model::exec</nuxt-link></li>
              <li><nuxt-link to="/id/model/query">Model::query</nuxt-link></li>
              <li><nuxt-link to="/id/model/last_id">Model::last_id</nuxt-link></li>
              <li><nuxt-link to="/4.0.0/model/page">Model::page</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/id/view">View</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/view/theme">Membuat Tema</nuxt-link></li>
              <li><nuxt-link to="/id/view/layout">Tata letak (layout)</nuxt-link></li>
              <li>
                <nuxt-link to="/id/view/theme-content">Isi</nuxt-link>
                <ul>
                  <li><nuxt-link to="/id/view/theme-content/js">Javascript</nuxt-link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/id/controller">Controller</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/controller/constructor">Constructor</nuxt-link></li>
              <li><nuxt-link to="/id/controller/load">Load</nuxt-link></li>
              <li><nuxt-link to="/id/controller/lib">Lib</nuxt-link></li>
              <li><nuxt-link to="/id/controller/input">Handling Input Form</nuxt-link></li>
              <li><nuxt-link to="/id/controller/setTheme">Set Theme</nuxt-link></li>
              <li><nuxt-link to="/id/controller/loadLayout">Load Theme Layout</nuxt-link></li>
              <li><nuxt-link to="/id/controller/putThemeContent">Load Theme Content</nuxt-link></li>
              <li><nuxt-link to="/id/controller/putJSContent">Load Javascript Theme Content</nuxt-link></li>
              <li><nuxt-link to="/id/controller/session">Using Session</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/id/database">Database</nuxt-link>
            <ul>
              <li><nuxt-link to="/id/database/setup">Setup</nuxt-link></li>
              <li><nuxt-link to="/id/database/quick-start">Memulai</nuxt-link></li>
              <li><nuxt-link to="/id/database/query-builder">Query Builder</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/id/library">Library</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/id/cli">CLI (command line interface)</nuxt-link>
          </li>
        </ul>
      </aside>
      <div class="container column is-9">
        <nuxt />
      </div>
    </div>
    <footer class="footer">
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            <p class="">Copyright &copy; 2014-2020. Dibuat sepenuh cinta di Bandung, Indonesia oleh Daeng Rosanda, S.Kom.</p>
            <p><small>Last updated on 24 Oktober 2020</small></p>
          </div>
        </div>
      </footer>
    </footer>
  </div>

</template>

<script>
export default {
  data() {
    return {
      name: 'Seme Framework',
      version: 'v4.0.0',
      prefix: ' - ',
      title: 'Dokumentasi Seme Framework versi 4.0.0',
      description: 'Pelajari Seme Framework versi 4.0.0 bahasa indonesia'
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'id'
      },
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
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://seme.framework.web.id' + this.$route.path.replace(/\/+$/, '') + '/'
        }
      ]
    }
  }
}
</script>
