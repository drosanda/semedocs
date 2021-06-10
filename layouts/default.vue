<template>
  <amp-body>
    <div class="main-content columns is-fullheight">
      <amp-sidebar id="sidebar1" layout="nodisplay" side="left" on="sidebarOpen:focusOnMe.focus">
        <amp-img layout="responsive" width="240" height="40" alt="Seme Framework Logo" :src="logo"></amp-img>
        <div class="badges">
          <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/version-4.0.0-ed6f75' alt="version"></amp-img>
          <amp-img layout="fixed" width="90px" height="20px" src='https://travis-ci.org/drosanda/seme-framework.svg?branch=master' alt="build status"></amp-img>
          <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/lang-en-e9bd2e' alt="version"></amp-img>
        </div>
        <ul>
          <li><nuxt-link to="/">Seme Framework</nuxt-link></li>
          <li><nuxt-link to="/credits/">Credits</nuxt-link></li>
          <li>
            <nuxt-link to="/version/">Versions</nuxt-link>
            <ul>
              <li><nuxt-link to="/4.0.0/">4.0.0 (English)</nuxt-link></li>
              <li><nuxt-link to="/id/">4.0.0 (Bahasa)</nuxt-link></li>
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
          <p><small>Last updated on May 30, 2021</small></p>
        </div>
      </div>
    </footer>
  </amp-body>

</template>
<script>
  export default {
    data() {
      return {
        name: 'Seme Docs',
        title: 'Seme Framework Documentation',
        description: 'Deployable and lightweight PHP MVC framework that suitable for small and medium web app',
        logo: require('~/static/logo.png'),
        breadcrumbs: [
          {
            url: (process.env.ORIGIN_URL || 'http://localhost:3001')+'/',
            text: 'home',
          }
        ],
      }
    },
    head() {
      return {
        title: this.title,
        description: this.description,
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
    },
    jsonld() {
      const items = this.breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@id': item.url,
          name: item.text,
        },
      }));
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items,
        },
        {
          "@type": "NewsArticle",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": (process.env.ORIGIN_URL || 'http://localhost:3001')+ '/'+this.$route.path.replace(/\/+$/, '') + '/'
          },
          "headline": (this.headline || this.title),
          "image": [
            this.logo
          ],
          "dateCreated": "2020-06-11T10:12:00+07:00",
          "datePublished": "2020-06-11T10:12:00+07:00",
          "dateModified": "2021-06-11T01:04:00+07:00",
          "author": {
            "@type": "Person",
            "gender": "Male",
            "name": "Daeng Rosanda, S.Kom",
            "alternateName": "Daeng Rosanda",
            "jobTitle": "Founder",
            "worksFor": {
              "@type": "Organization",
              "name": "Cipta Esensi Merenah",
              "email": "hi@cenah.co.id"
            }
          },
          "publisher": {
            "@type": "Organization",
            "name": "Cipta Esensi Merenah",
            "description": "Cipta Esensi Merenah (Cenah) is software house company focused on developing web-based application from Bandung, Indonesia.",
            "logo": {
              "@type": "ImageObject",
              "name": "logo Cipta Esensi Merenah",
              "url": "https://cdn.cenah.co.id/_nuxt/img/logo-wide.5420183.png",
              "width": "256px",
              "height": "62px"
            }
          },
          "description": this.description
        }
      ];
    }
  }
</script>
