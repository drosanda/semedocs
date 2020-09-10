<template>
  <div>
    <div class="main-content columns is-fullheight">
      <aside class="column is-3 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <figure>
          <img src="~/static/logo.png">
        </figure>
        <ul class="menu-list">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/credits">Credits</nuxt-link></li>
          <li>
            <nuxt-link to="/3.1.0/">Version 3.1.0</nuxt-link>
          <ul>
          <li><nuxt-link to="/3.1.0/requirements">Requirements</nuxt-link></li>
          <li><nuxt-link to="/3.1.0/download">Download</nuxt-link></li>
          <li><nuxt-link to="/3.1.0/install">Install</nuxt-link></li>
          <li>
            <nuxt-link to="/3.1.0/tutorial">Tutorial</nuxt-link>
            <ul>
              <li><nuxt-link to="/3.1.0/tutorial/introduction">Introduction</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/3.1.0/uri-routing">URI Routing</nuxt-link>
            <ul>
              <li><nuxt-link to="/3.1.0/uri-routing/admin">Admin Routing</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/3.1.0/configuration">Configuration</nuxt-link>
            <ul>
              <li><nuxt-link to="/3.1.0/configuration/config">Config</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/configuration/controller">Controller</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/configuration/core">Core</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/configuration/database">Database</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/configuration/session">Session</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/configuration/timezone">Timezone</nuxt-link></li>
            </ul>
          </li>
          <li><nuxt-link to="/3.1.0/constants">Constants</nuxt-link></li>
          <li><nuxt-link to="/3.1.0/model">Model</nuxt-link>
            <ul>
              <li><nuxt-link to="/3.1.0/model/select">Model::select</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/select_as">Model::select_as</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/from">Model::from</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/join">Model::join</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/join_composite">Model::join_composite</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/composite_create">Model::composite_create</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/where">Model::where</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/where_as">Model::where_as</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/between">Model::between</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/group_by">Model::group_by</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/order_by">Model::order_by</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/limit">Model::limit</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/get">Model::get</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/get_first">Model::get_first</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/insert">Model::insert</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/insert_multi">Model::insert_multi</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/insert_batch">Model::insert_batch</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/update">Model::update</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/delete">Model::delete</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/exec">Model::exec</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/query">Model::query</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/model/last_id">Model::last_id</nuxt-link></li>
            </ul>
          </li>
          <li><nuxt-link to="/3.1.0/view">View</nuxt-link></li>
          <li>
            <nuxt-link to="/3.1.0/controller">Controller</nuxt-link>
            <ul>
              <li><nuxt-link to="/3.1.0/controller/session">Using Session</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/controller/input">Handling Input Form</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/3.1.0/database">Database</nuxt-link>
            <ul>
              <li><nuxt-link to="/3.1.0/database/quick-start">Quick Start</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/database/query-builder">Query Builder</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/3.1.0/library">Library</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/3.1.0/global">Globals</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/3.1.0/cli">CLI (command line interface)</nuxt-link>
          </li>
        </ul>
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
            <p class="">Copyright &copy; 2014-2020. Made with Love in Bandung, Indonesia by Daeng Rosanda, S.Kom.</p>
            <p><small>Last updated on 08 Agustus 2020</small></p>
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
        name: 'SemeDocs',
        title: 'Seme Framework Documentation v3.1.0',
        description: 'Deployable and lightweight PHP MVC framework that suitable for small and medium web app'
      }
    },
    head() {
      return {
        title: this.title,
        description: this.description,
        link: [
          {
            rel: 'canonical',
            href: 'https://seme.nyingspot.com' + this.$route.path.replace(/\/+$/, '') + '/'
          }
        ],
        meta: [
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
