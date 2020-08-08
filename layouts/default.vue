<template>
  <div>
    <div class="columns">
      <aside class="column is-one-fifth">
        <ul class="menu-list">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/credits">Credits</nuxt-link></li>
          <li><nuxt-link to="/requirements">Requirements</nuxt-link></li>
          <li><nuxt-link to="/download">Download</nuxt-link></li>
          <li><nuxt-link to="/install">Install</nuxt-link></li>
          <li>
            <nuxt-link to="/tutorial">Tutorial</nuxt-link>
            <ul>
              <li><nuxt-link to="/tutorial/introduction">Introduction</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/uri-routing">URI Routing</nuxt-link>
            <ul>
              <li><nuxt-link to="/uri-routing/admin">Admin Routing</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/configuration">Configuration</nuxt-link>
            <ul>
              <li><nuxt-link to="/configuration/config">Config</nuxt-link></li>
              <li><nuxt-link to="/configuration/controller">Controller</nuxt-link></li>
              <li><nuxt-link to="/configuration/core">Core</nuxt-link></li>
              <li><nuxt-link to="/configuration/database">Database</nuxt-link></li>
              <li><nuxt-link to="/configuration/session">Session</nuxt-link></li>
              <li><nuxt-link to="/configuration/timezone">Timezone</nuxt-link></li>
            </ul>
          </li>
          <li><nuxt-link to="/constants">Constants</nuxt-link></li>
          <li><nuxt-link to="/model">Model</nuxt-link>
            <ul>
              <li><nuxt-link to="/model/select">Model::select</nuxt-link></li>
              <li><nuxt-link to="/model/select_as">Model::select_as</nuxt-link></li>
              <li><nuxt-link to="/model/from">Model::from</nuxt-link></li>
              <li><nuxt-link to="/model/join">Model::join</nuxt-link></li>
              <li><nuxt-link to="/model/join_composite">Model::join_composite</nuxt-link></li>
              <li><nuxt-link to="/model/composite_create">Model::composite_create</nuxt-link></li>
              <li><nuxt-link to="/model/where">Model::where</nuxt-link></li>
              <li><nuxt-link to="/model/where_as">Model::where_as</nuxt-link></li>
              <li><nuxt-link to="/model/between">Model::between</nuxt-link></li>
              <li><nuxt-link to="/model/group_by">Model::group_by</nuxt-link></li>
              <li><nuxt-link to="/model/order_by">Model::order_by</nuxt-link></li>
              <li><nuxt-link to="/model/limit">Model::limit</nuxt-link></li>
              <li><nuxt-link to="/model/get">Model::get</nuxt-link></li>
              <li><nuxt-link to="/model/get_first">Model::get_first</nuxt-link></li>
              <li><nuxt-link to="/model/insert">Model::insert</nuxt-link></li>
              <li><nuxt-link to="/model/insert_multi">Model::insert_multi</nuxt-link></li>
              <li><nuxt-link to="/model/insert_batch">Model::insert_batch</nuxt-link></li>
              <li><nuxt-link to="/model/update">Model::update</nuxt-link></li>
              <li><nuxt-link to="/model/delete">Model::delete</nuxt-link></li>
              <li><nuxt-link to="/model/exec">Model::exec</nuxt-link></li>
              <li><nuxt-link to="/model/query">Model::query</nuxt-link></li>
              <li><nuxt-link to="/model/last_id">Model::last_id</nuxt-link></li>
            </ul>
          </li>
          <li><nuxt-link to="/view">View</nuxt-link></li>
          <li>
            <nuxt-link to="/controller">Controller</nuxt-link>
            <ul>
              <li><nuxt-link to="/controller/session">Using Session</nuxt-link></li>
              <li><nuxt-link to="/controller/input">Handling Input Form</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/database">Database</nuxt-link>
            <ul>
              <li><nuxt-link to="/database/quick-start">Quick Start</nuxt-link></li>
              <li><nuxt-link to="/database/query-builder">Query Builder</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/library">Library</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/global">Globals</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/cli">CLI (command line interface)</nuxt-link>
          </li>
        </ul>
      </aside>
      <div class="column">
        <nuxt />
      </div>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p class="">Copyright &copy; 2014-2020, Daeng Rosanda, S.Kom. Last updated on 08 Agustus 2020.</p>
      </div>
    </footer>
  </div>

</template>
