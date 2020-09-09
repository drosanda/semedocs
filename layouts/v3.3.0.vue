<template>
  <div>
    <div class="main-content columns is-fullheight">
      <aside class="column is-3 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <ul class="menu-list">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/credits">Credits</nuxt-link></li>
          <li><nuxt-link to="/3.3.0/">Version 3.3.0</nuxt-link></li>
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
            <p><small>Last updated on 09 Agustus 2020</small></p>
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
        title: 'Seme Framework Documentation v3.3.0',
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
