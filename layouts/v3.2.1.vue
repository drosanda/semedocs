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
            <nuxt-link to="/3.2.1/">Version 3.2.1</nuxt-link>
            <ul>
              <li><nuxt-link to="/3.2.1/requirements">Requirements</nuxt-link></li>
              <li><nuxt-link to="/3.2.1/download">Download</nuxt-link></li>
              <li><nuxt-link to="/3.2.1/install">Install</nuxt-link></li>
              <li>
                <nuxt-link to="/3.2.1/tutorial">Tutorial</nuxt-link>
                <ul>
                  <li><nuxt-link to="/3.2.1/tutorial/introduction">Introduction</nuxt-link></li>
                </ul>
              </li>
              <li>
                <nuxt-link to="/3.2.1/uri-routing">URI Routing</nuxt-link>
                <ul>
                  <li><nuxt-link to="/3.2.1/uri-routing/admin">Admin Routing</nuxt-link></li>
                </ul>
              </li>
              <li>
                <nuxt-link to="/3.2.1/configuration">Configuration</nuxt-link>
                <ul>
                  <li><nuxt-link to="/3.2.1/configuration/config">Config</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/configuration/controller">Controller</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/configuration/core">Core</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/configuration/database">Database</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/configuration/session">Session</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/configuration/timezone">Timezone</nuxt-link></li>
                </ul>
              </li>
              <li><nuxt-link to="/3.2.1/constants">Constants</nuxt-link></li>
              <li><nuxt-link to="/3.2.1/model">Model</nuxt-link>
                <ul>
                  <li><nuxt-link to="/3.2.1/model/select">Model::select</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/select_as">Model::select_as</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/from">Model::from</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/join">Model::join</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/join_composite">Model::join_composite</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/composite_create">Model::composite_create</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/where">Model::where</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/where_as">Model::where_as</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/between">Model::between</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/group_by">Model::group_by</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/order_by">Model::order_by</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/limit">Model::limit</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/get">Model::get</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/get_first">Model::get_first</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/insert">Model::insert</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/insert_multi">Model::insert_multi</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/insert_batch">Model::insert_batch</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/update">Model::update</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/delete">Model::delete</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/exec">Model::exec</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/query">Model::query</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/model/last_id">Model::last_id</nuxt-link></li>
                </ul>
              </li>
              <li><nuxt-link to="/3.2.1/view">View</nuxt-link></li>
              <li>
                <nuxt-link to="/3.2.1/controller">Controller</nuxt-link>
                <ul>
                  <li><nuxt-link to="/3.2.1/controller/session">Using Session</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/controller/input">Handling Input Form</nuxt-link></li>
                </ul>
              </li>
              <li>
                <nuxt-link to="/3.2.1/database">Database</nuxt-link>
                <ul>
                  <li><nuxt-link to="/3.2.1/database/quick-start">Quick Start</nuxt-link></li>
                  <li><nuxt-link to="/3.2.1/database/query-builder">Query Builder</nuxt-link></li>
                </ul>
              </li>
              <li>
                <nuxt-link to="/3.2.1/library">Library</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/3.2.1/global">Globals</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/3.2.1/cli">CLI (command line interface)</nuxt-link>
              </li>
            </ul>
          </li>
          <li><nuxt-link to="/error/">Error &amp; Troubleshooting</nuxt-link></li>
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
      title: 'Seme Framework Documentation v3.2.1',
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
