<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs" style="display: none;">
        <ul class="breadcrumbs">
          <li class="unavailable">Home</li>
        </ul>
      </nav>

      <div class="">
        <div class="column">
          <div class="content">
            <h1 class="is-size-1">Welcome to <span>Seme Framework</span></h1>
            <h2 class="tagline">The Lightweight PHP MVC Framework</h2>
            <amp-img
              alt="Seme Framework code example"
              :src="homeGroup"
              layout="responsive"
              height="1480"
              width="1308"
            >
            </amp-img>

            <div class="buttons is-centered">
              <nuxt-link to="/4.0.0/downloads/" class="btn">
                Download
              </nuxt-link>
              <nuxt-link to="/4.0.0/tutorial/" class="btn">
                Getting Started
              </nuxt-link>
              <nuxt-link to="/error/" class="btn">
                Troubleshoot
              </nuxt-link>
              <nuxt-link to="/id/" class="btn">
                Bahasa Indonesia
              </nuxt-link>
            </div>
            <p>This is official documentation for Seme Framework, the PHP MVC Framework for creating small and medium app that needed for fast delivery. At first version of Seme Framework used for building API (Middle Ware) for another Application such as android, iOS, etc. And now as increasing of requirement, Seme Framework has expand the limit for creating Small and Medium App.</p>

            <h2>Key Feature</h2>
            <p>This framework suitable for Programmer that only know about <code>Manual</code> way of code. Not like this time, everything build up automatically through console. Seme Framework has taken different way of code, <i>If you want build small app, why we need lots of library</i>. Here is the key feature of Seme Framework:</p>
            <hr>
            <div class="columns">
              <div class="column"><i>Small but not Tiny</i>. Seme Framework growth on SME Industries with many requirement but can suppress the hosting price.</div>
              <div class="column"><i>Not Too serious</i>. You can played with Seme Framework at your own logic. Its free and almost has no restriction to developing your solution.</div>
              <div class="column"><i>Admin Friendly</i>. Seme Framework has re-routing feature for admin page, without refactoring the MVC.</div>
              <div class="column"><i>Theme Engine</i>. Seme Framework has feature who can <i>PUSH</i> the content inside the layout view. Also support theming engine, if you want change the Style, you just clone the original one and modified safely.</div>
            </div>
            <hr>
            <h2>Status</h2>
            <p>Here is the badges of project status:</p>
            <div class="badges">
              <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/version-4.0.0-ed6f75' alt="version"></amp-img>
              <amp-img layout="fixed" width="90px" height="20px" src='https://travis-ci.org/drosanda/seme-framework.svg?branch=master' alt="build status"></amp-img>
              <amp-img layout="fixed" width="56px" height="20px" src='https://img.shields.io/badge/lang-en-e9bd2e' alt="version"></amp-img>
              <amp-img layout="fixed" width="113px" height="20px" src="https://codecov.io/gh/drosanda/seme-framework/branch/master/graph/badge.svg?token=3WRW0SNO41" alt="Code coverage"></amp-img>
              <amp-img layout="fixed" width="78px" height="20px" src="https://sonarcloud.io/api/project_badges/measure?project=drosanda_seme-framework&metric=bugs" alt="Bugs"></amp-img>
              <amp-img layout="fixed" width="138px" height="20px" src="https://sonarcloud.io/api/project_badges/measure?project=drosanda_seme-framework&metric=ncloc" alt="Lines of codes"></amp-img>
              <amp-img layout="fixed" width="133px" height="20px" src="https://sonarcloud.io/api/project_badges/measure?project=drosanda_seme-framework&metric=sqale_rating" alt="Maintainability rating"></amp-img>
              <amp-img layout="fixed" width="102" height="20px" src="https://sonarcloud.io/api/project_badges/measure?project=drosanda_seme-framework&metric=reliability_rating" alt="Reliability rating"></amp-img>
              <amp-img layout="fixed" width="94px" height="20px" src="https://sonarcloud.io/api/project_badges/measure?project=drosanda_seme-framework&metric=security_rating" alt="Security rating"></amp-img>
              <amp-img layout="fixed" width="127px" height="20px" src="https://sonarcloud.io/api/project_badges/measure?project=drosanda_seme-framework&metric=vulnerabilities" alt="Vulnerabilities rating"></amp-img>
            </div>
            <br>
            <p>
              Status badges credit:
              <ul>
                <li>Continous integration (CI) by TravisCI,</li>
                <li>Code coverage measurements by codecov.io, and</li>
                <li>The rest measurements by sonarcloud.io.</li>
              </ul>
            </p>
            <hr>
            <h2>License</h2>
            <p>Seme Framework licensed under MIT version 2.0.</p>
            <h2>Question and Answer</h2>
            <p>Feel free to ask me on my <a href="https://instagram.com/drosanda/" target="_blank">instagram</a>, <a href="https://facebook.com/drs11/" target="_blank">facebook</a>, or open an issue on <a href="https://github.com/drosanda/semedocs/issues" target="_blank">github</a>.</p>
          </div>
        </div>
      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-right">
          <nuxt-link to="/credits/" class="btn">
            Credits
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    layout: 'default',
    data (){
      return {
        title: 'Welcome to Seme Framework Documentation',
        suffix: ' - The Lightweight and Deployable PHP MVC Framework',
        description: 'Seme Framework is lightweight and deployable PHP MVC Framework that you can learn more through this documentation.',
        homeGroup: require('~/static/carbon.png'),
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
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
