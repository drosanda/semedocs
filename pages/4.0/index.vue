<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class="unavailable">4.0.2</li>
        </ul>
      </nav>

      <div class="">
        <div class="column">
          <div class="content">
            <h1 class="is-size-1">Seme Framework <span>4</span></h1>
            <div class="badges">
              <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/version-4.0.0-ed6f75' alt="version"></amp-img>
              <amp-img layout="fixed" width="90px" height="20px" src='https://travis-ci.com/drosanda/seme-framework.svg?branch=master' alt="build status"></amp-img>
              <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/lang-en-e9bd2e' alt="version"></amp-img>
              <amp-img layout="fixed" width="90px" height="20px" src="https://codecov.io/gh/drosanda/seme-framework/branch/master/graph/badge.svg?token=3WRW0SNO41" alt="code coverage"></amp-img>
            </div>
            <p>
              In version 4.0.2 Seme Framework has main target is using JSON object for template configuration.
              The first thing on this version is modified the configuration files to single files only.
              And then we have to optimizing the codes and the memory used by using XDebug and qcachegrind for viewing memory used.
            </p>
            <h2>Key Features</h2>
            <p>This framework still using Mode View Controller life cycle:</p>
            <hr>
            <div class="columns">
              <div class="column"><i>Deployable</i>. Single file configuration for development, staging and production. So you can deploy apps into server git support.</div>
              <div class="column"><i>Libraries</i>. Dont worry with libraries, as long as you can use Composer. You can put any composer project into kero/lib directory.</div>
              <div class="column"><i>Admin Friendly</i>. Seme Framework has specaial re-routing feature for admin page, without refactoring the MVC. And re-routing for any purpose.</div>
              <div class="column"><i>Optimized</i>. With combination of XDebug and qcachegrind Seme Framework has optimized little by little.</div>
            </div>
            <hr>
            <h2>Whats New</h2>
            <ol class="1">
              <li>Merged Configuration files into single files. Split configuration by development, staging, and production for fast deploying.</li>
              <li>Add bin directory into kero.</li>
              <li>Split function into functions.php files.</li>
              <li>Optimized MySQLi library.</li>
              <li>Optimized Controller library.</li>
              <li>Replacing str_replace to strtr if possible.</li>
            </ol>
            <hr>
            <h2>License</h2>
            <p>Seme Framework licensed under MIT.</p>
            <h2>Question and Answer</h2>
            <p>Feel free to ask me on my <a href="https://instagram.com/drosanda/" target="_blank">instagram</a>, <a href="https://facebook.com/drs11/" target="_blank">facebook</a>, or open an issue on <a href="https://github.com/drosanda/seme-framework/issues" target="_blank">github</a>.</p>

            <hr>
          </div>
        </div>
      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/version/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Versions
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0/requirements/" class="btn">
            Requirements
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    layout: 'v4.0',
    data (){
      return {
        name: 'Seme Framework 4',
        suffix: '',
        title: 'Seme Framework 4 Documentation',
        description: 'Learn more about Seme Framework 4 through this documentation.',
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0',
            text: '4.0'
          }
        ]
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
    },
    jsonld() {
      const items = this.breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          "@type": "WebPage",
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
            "@id": (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path.replace(/\/+$/, '') + '/'
          },
          "headline": (this.headline || this.title),
          "image": [
            (process.env.CDN_URL || 'http://localhost:3001')+'/logo.png'
          ],
          "dateCreated": "2021-08-11T19:52:38+07:00",
          "datePublished": "2021-08-11T19:52:38+07:00",
          "dateModified": "2021-06-25T16:40:12+07:00",
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
