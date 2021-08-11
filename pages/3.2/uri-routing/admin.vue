<template>
  <div class="section">
    <div class="row container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2">3.2.x</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2/uri-routing">URI Routing</NuxtLink></li>
          <li class="unavailable">Admin URI Routing</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">URI Routing for Admin Pages</h1>
            <p>Seme Framework has default feature to overide all routes below <code>app/controller/admin</code>. This feature comes when user need some extra security for securing admin pages. Not only re-routes, Seme Framework has another base_url function for compatibilty routing between admin page. The function is <code>base_url_admin()</code>.</p>
            <h2>Condition</h2>
            <p>For using this feature, Seme Framework has some condition to meet such as:</p>
            <ol>
              <li><code>$site_url</code> in app/config/config.php is set.</li>
              <li><code>$admin_secret_url</code> in index.php is set. Default value <i>admin</i>.</li>
              <li>Only work on controller below <code>app/controller/admin</code> folder.</li>
              <li>If there is a controller folder match with <code>$admin_secret_url</code> value, the controller under matched will be ignored.</li>
              <li>Use <code>base_url_admin</code> respectively instead of <code>base_url()</code>.</li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'v3.2',
  data() {
    return {
      name: 'Seme Framework v3.2.5',
      suffix: ' - Seme Framework 3.2.5',
      title: 'URI Routing Admin',
      description: 'Learn more about URI Routing for Admin page on Seme Framework version 3.2.5',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2',
          text: '3.2.x'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2/uri-routing',
          text: 'URI Routing'
        }
      ],
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
        "dateCreated": "2021-07-13T13:34:00+07:00",
        "datePublished": "2021-07-13T13:34:00+07:00",
        "dateModified": "2021-07-13T13:36:00+07:00",
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
