<template>
  <amp-body>
    <div class="main-content columns is-fullheight">
      <amp-sidebar id="sidebar1" layout="nodisplay" side="left" on="sidebarOpen:focusOnMe.focus">
        <amp-img
          alt="Seme Framework Logo"
          :src="logo"
          layout="responsive"
          width="240"
          height="40"
        >
        </amp-img>
        <ul class="menu-list">
          <li><nuxt-link to="/">Seme Framework</nuxt-link></li>
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
          <li>
            <nuxt-link to="/error/">Notice, Error &amp; Troubleshooting</nuxt-link>
            <ul>
              <li>
                <nuxt-link to="/error/notice/">Notice</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/error/troubleshooting/">Troubleshooting</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
      </amp-sidebar>
      <button
        class="hamburger"
        on='tap:sidebar1.toggle'
        aria-label="Click to open sidebar"
        >
        <div class="hamburger"></div>
      </button>
      <div class="container column is-9">
        <nuxt />
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p class="">Copyright &copy; 2014-2021. Made with Love in Bandung, Indonesia by Daeng Rosanda, S.Kom.</p>
          <p><small>Last updated on June 10, 2021</small></p>
        </div>
      </div>
    </footer>
  </amp-body>
</template>

<script>
export default {
  data() {
    return {
      name: 'Seme Framework',
      version: 'v4.0.0',
      prefix: ' - ',
      title: 'Seme Framework v4.0.0 Documentation',
      description: 'Learn more about Seme Framework version 4.0.0 trough this documentation',
      logo: require('~/static/logo.png')
    }
  },
  head() {
    return {
      title: this.title+this.prefix+' '+this.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
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
