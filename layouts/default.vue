<template>
  <div>
    <div class="main-content columns is-fullheight">
      <aside class="column is-3 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <ul class="menu-list">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/credits">Credits</nuxt-link></li>
          <li>
            <a href="#">Version</a>
            <ul>
              <li><nuxt-link to="/4.0.0/">4.0.0</nuxt-link></li>
              <li><nuxt-link to="/3.3.0/">3.3.0</nuxt-link></li>
              <li><nuxt-link to="/3.2.1/">3.2.1</nuxt-link></li>
              <li><nuxt-link to="/3.1.0/">3.1.x</nuxt-link></li>
              <li><nuxt-link to="/3.0.0/">3.0.x</nuxt-link></li>
            </ul>
          </li>
        </ul>
      </aside>
      <div class="container column is-9">
        <nuxt />
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p class="">Copyright &copy; 2014-2020. Made with Love in Bandung, Indonesia by Daeng Rosanda, S.Kom.</p>
          <p><small>Last updated on 09 Agustus 2020</small></p>
        </div>
      </div>
    </footer>
  </div>

</template>
<script>
  export default {
    layout: 'blog'
    // page component definitions
  }
</script>
