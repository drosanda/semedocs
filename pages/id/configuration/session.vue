<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
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
            <b-button tag="router-link" to="/id/downloads/" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Download and Installation
            </b-button>
            <b-button tag="router-link" to="/id/configuration/development/" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
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
        name: 'Seme Framework 4',
        suffix: ' - Seme Framework 4 Bahasa Indonesia',
        title: 'Pengaturan Sesi',
        description: 'Pelajari selengkapnya tentang Pengaturan Sesi (Session Configuration) di Seme Framework versi 4.0.0.',
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/',
            text: 'ID',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/configuration/',
            text: 'Pengaturan',
          }
        ]
      }
    },
    head() {
      return {
        htmlAttrs: {
          lang: 'id'
        },
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
          "dateCreated": "2020-06-11T10:12:00+07:00",
          "datePublished": "2020-06-11T10:12:00+07:00",
          "dateModified": "2021-06-23T01:04:00+07:00",
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
