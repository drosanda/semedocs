<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class="unavailable">Tutorial</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Tutorial</h1>
            <p>This tutorial is intended to introduce you to the Seme Framework and the basic principles of MVC architecture. It will show you how a basic Seme Framework application is constructed in step-by-step.</p>
            <p>
              The objectives of this tutorial is how to use the framework with real life examples.
              So, developer can implemented all features that existed on Seme Framework such as:
            </p>
            <ul>
              <li>Model-View-Controller basics</li>
              <li>Routing basics</li>
              <li>Form validation</li>
              <li>Performing basic database queries using Query Builder</li>
              <li>Theming</li>
              <li>Admin</li>
              <li>Libraries</li>
              <li>and APIs</li>
            </ul>
            <p>The entire tutorial is split up over several pages. Each explaining a small part of the functionality of the Seme Framework. You’ll go through the following pages:</p>
            <ul>
              <li><NuxtLink to="/4.0.0/tutorial/introduction/">Introduction</NuxtLink>, which gives you an overview of what to expect.</li>
              <li><NuxtLink to="/4.0.0/tutorial/get-data/">Theme and layout</NuxtLink>, which will teach you the basics of creating view using Seme Framework.</li>
              <li><NuxtLink to="/4.0.0/tutorial/basic-api/">Building API</NuxtLink>, this will introduce more about database, controller, and model.</li>
            </ul>
            <p>Enjoy your exploration of the Seme Framework.</p>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/3.1.0/configuration/production/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Configuration: production
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/3.1.0/tutorial/introduction/" class="btn">
            Tutorial: Introduction
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
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
        suffix: ' - Seme Framework 3.1.0',
        title: 'Tutorial',
        description: 'Learn more about some real world tutorial of Seme Framework version 3.1.0 through this documentation.',
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.1.0/',
            text: '3.1.x',
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
    jsonld() { this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
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
          "dateModified": "2021-06-11T14:48:32+07:00",
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
