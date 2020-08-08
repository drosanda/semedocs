<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><nuxt-link to="/">Home</nuxt-link></li>
          <li class="unavailable">Configuration</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Configuration</h1>
            <p>The configuration of Seme Framework separated on 6 files. The location in <b>app/config/</b>:</p>
            <p>
              <ul>
                <li><Nuxt-Link to="configuration/config">Config</Nuxt-Link></li>
                <li><Nuxt-Link to="configuration/controller">Controller</Nuxt-Link></li>
                <li><Nuxt-Link to="configuration/core">Core</Nuxt-Link></li>
                <li><Nuxt-Link to="configuration/database">Database</Nuxt-Link></li>
                <li><Nuxt-Link to="configuration/session">Session</Nuxt-Link></li>
                <li><Nuxt-Link to="configuration/timezone">Timezone</Nuxt-Link></li>
              </ul>
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
