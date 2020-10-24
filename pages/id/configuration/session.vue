<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">Bahasa Indonesia</NuxtLink></li>
          <li class=""><NuxtLink to="/id/configuration">Pengaturan</NuxtLink></li>
          <li class="unavailable">Session Configuration</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Session Configuration</h1>
            <p>
              The session key configuration requires for isolating the session used by another apps.
              This value is mandatory, the filling value can be random or the desired value as long as has unique value.
              Example <code>$saltkey = &#x27;s3mEFr4&#x27;;</code>.
            </p>
            <p>This session key will be aded to <code>$_SESSION</code> automatically.</p>
            <p>For further information how to use session using Seme Framework, please read <NuxtLink to="/id/controller/session/">how to use Session on Controller</NuxtLink>.</p>
            <hr>


          </div>

        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/downloads/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Download and Installation
            </b-button>
            <b-button tag="router-link" to="/id/configuration/development/" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Development Phase
            </b-button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    layout: 'id',
    data (){
      return {
        name: 'Seme Framework v4.0.0',
        suffix: ' - Dokumentasi Seme Framework v4.0.0',
        title: 'Session Configuration',
        description: 'Pelajari selengkapnya tentang Session Configuration of melalui dokumentasi Seme Framework versi 4.0.0.'
      }
    },
    head() {
      return {
        title: this.title+this.suffix,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.description
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: this.name+': '+this.title
          },
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
