<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class="unavailable">Home</li>
        </ul>
      </nav>

      <div class="columns">
        <div class="column">
          <h1 class="is-size-1">Welcome to Seme Framework</h1>
          <p>This is official documentation for Seme Framework, the PHP MVC Framework for creating small and medium app that needed for fast delivery. At first version of Seme Framework used for building API (Middle Ware) for another Application such as android, iOS, etc. And now as increasing of requirement, Seme Framework has expand the limit for creating Small and Medium App.</p>
          <h2 class="is-size-2">Key Feature</h2>
          <p>This framework suitable for Programmer that only know about <code>Manual</code> way of code. Not like this time, everything build up automatically through console. Seme Framework has taken different way of code, <i>If you want build small app, why we need lots of library</i>. Here is the key feature of Seme Framework:</p>
          <hr>
          <div class="columns">
            <div class="column"><i>Small but not Tiny</i>. Seme Framework growth on SME Industries with many requirement but can suppress the hosting price.</div>
            <div class="column"><i>Not Too serious</i>. You can played with Seme Framework at your own logic. Its free and almost has no restriction to developing your solution.</div>
            <div class="column"><i>Admin Friendly</i>. Seme Framework has re-routing feature for admin page, without refactoring the MVC.</div>
            <div class="column"><i>Theme Engine</i>. Seme Framework has feature who can <i>PUSH</i> the content inside the layout view. Also support theming engine, if you want change the Style, you just clone the original one and modified safely.</div>
          </div>
          <h3 class="is-size-3">Table of contents</h3>
          <ul class="menu-list">
            <li><nuxt-link to="credits">Credits</nuxt-link></li>
            <li><nuxt-link to="requirements">Requirements</nuxt-link></li>
            <li><nuxt-link to="download">Download</nuxt-link></li>
            <li><nuxt-link to="install">Install</nuxt-link></li>
            <li>
              <nuxt-link to="tutorial">Tutorial</nuxt-link>
              <ul>
                <li><nuxt-link to="tutorial-introduction">Introduction</nuxt-link></li>
              </ul>
            </li>
            <li>
              <nuxt-link to="uri-routing">URI Routing</nuxt-link>
              <ul>
                <li><nuxt-link to="uri-routing-admin">Admin Routing</nuxt-link></li>
              </ul>
            </li>
            <li>
              <nuxt-link to="config">Configuration</nuxt-link>
              <ul>
                <li><nuxt-link to="config-config">Config</nuxt-link></li>
                <li><nuxt-link to="config-controller">Controller</nuxt-link></li>
                <li><nuxt-link to="config-core">Core</nuxt-link></li>
                <li><nuxt-link to="config-database">Database</nuxt-link></li>
                <li><nuxt-link to="config-session">Session</nuxt-link></li>
                <li><nuxt-link to="config-timezone">Timezone</nuxt-link></li>
              </ul>
            </li>
            <li><nuxt-link to="constants">Constants</nuxt-link></li>
            <li><nuxt-link to="model">Model</nuxt-link>
              <ul>
                <li><nuxt-link to="model-select">Model::select</nuxt-link></li>
                <li><nuxt-link to="model-select_as">Model::select_as</nuxt-link></li>
                <li><nuxt-link to="model-from">Model::from</nuxt-link></li>
                <li><nuxt-link to="model-join">Model::join</nuxt-link></li>
                <li><nuxt-link to="model-join_composite">Model::join_composite</nuxt-link></li>
                <li><nuxt-link to="model-composite_create">Model::composite_create</nuxt-link></li>
                <li><nuxt-link to="model-where">Model::where</nuxt-link></li>
                <li><nuxt-link to="model-where_as">Model::where_as</nuxt-link></li>
                <li><nuxt-link to="model-between">Model::between</nuxt-link></li>
                <li><nuxt-link to="model-group_by">Model::group_by</nuxt-link></li>
                <li><nuxt-link to="model-order_by">Model::order_by</nuxt-link></li>
                <li><nuxt-link to="model-limit">Model::limit</nuxt-link></li>
                <li><nuxt-link to="model-get">Model::get</nuxt-link></li>
                <li><nuxt-link to="model-get_first">Model::get_first</nuxt-link></li>
                <li><nuxt-link to="model-insert">Model::insert</nuxt-link></li>
                <li><nuxt-link to="model-insert_multi">Model::insert_multi</nuxt-link></li>
                <li><nuxt-link to="model-insert_batch">Model::insert_batch</nuxt-link></li>
                <li><nuxt-link to="model-update">Model::update</nuxt-link></li>
                <li><nuxt-link to="model-delete">Model::delete</nuxt-link></li>
                <li><nuxt-link to="model-exec">Model::exec</nuxt-link></li>
                <li><nuxt-link to="model-query">Model::query</nuxt-link></li>
                <li><nuxt-link to="model-last_id">Model::last_id</nuxt-link></li>
              </ul>
            </li>
            <li><nuxt-link to="view">View</nuxt-link></li>
            <li>
              <nuxt-link to="controller">Controller</nuxt-link>
              <ul>
                <li><nuxt-link to="controller-session">Using Session</nuxt-link></li>
                <li><nuxt-link to="controller-input">Handling Input Form</nuxt-link></li>
              </ul>
            </li>
            <li>
              <nuxt-link to="database">Database</nuxt-link>
              <ul>
                <li><nuxt-link to="database-quick-start">Quick Start</nuxt-link></li>
                <li><nuxt-link to="database-query-builder">Query Builder</nuxt-link></li>
              </ul>
            </li>
            <li>
              <nuxt-link to="library">Library</nuxt-link>
            </li>
            <li>
              <nuxt-link to="global">Globals</nuxt-link>
            </li>
            <li>
              <nuxt-link to="cli">CLI (command line interface)</nuxt-link>
            </li>
          </ul>
          <h2 class="is-size-2">Question and Answer</h2>
          <p>Feel free to ask me on my <nuxt-link to="https://instagram.com/drosanda/" target="_blank">instagram</nuxt-link>, <nuxt-link to="https://facebook.com/drs11/" target="_blank">facebook</nuxt-link>, or open an issue on <nuxt-link to="https://github.com/drosanda/" target="_blank">github</nuxt-link>.</p>
        </div>
      </div>
    </div>
  </div>
</template>
