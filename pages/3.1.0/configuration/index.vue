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
            <p>The configuration of Seme Framework version 3.x separated on 6 files. The location in <b>app/config/</b>:</p>
            <p>
              <ul>
                <li><NuxtLink to="/3.1.0/configuration/config">Basic configuration / config.php</NuxtLink></li>
                <li><NuxtLink to="/3.1.0/configuration/controller">Controller configuration / controller.php</NuxtLink></li>
                <li><NuxtLink to="/3.1.0/configuration/core">Core Class Loader / core.php</NuxtLink></li>
                <li><NuxtLink to="/3.1.0/configuration/database">Database connection / database.php</NuxtLink></li>
                <li><NuxtLink to="/3.1.0/configuration/session">Session configration / session.php</NuxtLink></li>
                <li><NuxtLink to="/3.1.0/configuration/timezone">Timezone configration / timezone.php</NuxtLink></li>
              </ul>
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    layout: 'v3.1.0',
    data() {
      return {
        name: 'Seme Framework v3.1.0',
        suffix: ' - Seme Framework v3.1.0 Documentation',
        title: 'Configuration',
        description: 'Learn more about configration for Seme Framework version 3.x'
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
