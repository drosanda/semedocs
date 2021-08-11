<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/issue">Issue</NuxtLink></li>
          <li class="unavailable">Error Notice</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1>Error Notice List</h1>
            <p>Here is the list of known notice message that ussually occured in Seme Framework</p>
            <ul>
              <li><NuxtLink to="/issue/notice/missing-app-cache">Notice: Missing app/cache</NuxtLink></li>
              <li><NuxtLink to="/issue/notice/missing-kero-bin">Notice: Missing kero/bin</NuxtLink></li>
              <li><NuxtLink to="/issue/notice/could-not-find-model">Error: Could not find model</NuxtLink></li>
              <li><NuxtLink to="/issue/notice/missing-theme-directory">Error: Missing theme directory for THEME NAME</NuxtLink></li>
              <li><NuxtLink to="/issue/notice/could-not-find-library">Could not find library LIBRARY NAME</NuxtLink></li>
              <li><NuxtLink to="/issue/notice/unable-to-load-library">Unable to load library on LIBRARY NAME</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/issue" class="btn">
          <i class="fa fa-chevron-left"></i>
            Issue
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/issue/troubleshooting" class="btn">
            Troubleshooting
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'issue',
  data (){
    return {
      name: 'Seme Framework Issue',
      suffix: ' - Seme Framework Issue',
      title: 'Error Notice',
      description: 'Here is the list of Error Notice that commonly occured while using Seme Framework.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/issue',
          text: 'Issue',
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
        "dateCreated": "2021-08-11T19:12:00+07:00",
        "datePublished": "2021-08-11T19:12:00+07:00",
        "dateModified": "2021-08-11T19:12:00+07:00",
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
    ]
  }
}
</script>
