<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><nuxt-link to="/">Home</nuxt-link></li>
          <li class="unavailable">Constants</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="is-size-1">Constants</h1>
            <p>Seme Framework contains some constant that can help during development progress.</p>
            <p>Here is the list of constant:</p>
            <ul type="1">
              <li>SENEROOT: points to root directory</li>
              <li>SENECORE: points to root app/core directory</li>
              <li>SENECORE: points to root kero/lib directory</li>
              <li>SENEVERSION: contains about the version of framework</li>
            </ul>
            <p>And for view scope, Seme Framework has variable that can be passed initialize data to another view (unantended).</p>
            <p><code>$__forward</code> are globally reserved for re-passing the data in view to another view.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
