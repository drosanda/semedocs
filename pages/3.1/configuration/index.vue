<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.1/">3.1.x</NuxtLink></li>
          <li class="unavailable">Configuration</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Configuration</h1>
            <p>The configuration of Seme Framework version 3.1.x separated on 6 files. The location in <b>app/config/</b>:</p>
            <p>
              <ul>
                <li><NuxtLink to="/3.1/configuration/config/">Basic configuration / config.php</NuxtLink></li>
                <li><NuxtLink to="/3.1/configuration/controller/">Controller configuration / controller.php</NuxtLink></li>
                <li><NuxtLink to="/3.1/configuration/core/">Core Class Loader / core.php</NuxtLink></li>
                <li><NuxtLink to="/3.1/configuration/database/">Database connection / database.php</NuxtLink></li>
                <li><NuxtLink to="/3.1/configuration/session/">Session configration / session.php</NuxtLink></li>
                <li><NuxtLink to="/3.1/configuration/timezone/">Timezone configration / timezone.php</NuxtLink></li>
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
    layout: '3.1',
    data() {
      return {
        name: 'Seme Framework v3.1.5',
        suffix: ' - Seme Framework 3.1.5',
        title: 'Configuration',
        description: 'Basic configuration for Seme Framework version 3.1.x',
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.1/',
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
    jsonld() {
      this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
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
          "dateModified": "2021-07-15T18:37:17+07:00",
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
