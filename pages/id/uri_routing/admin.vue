<template>
  <div class="section">
    <div class="row container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/uri-routing">URI Routing</NuxtLink></li>
          <li class="unavailable">Admin URI Routing</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Perutean URI (<em>URI Routing</em>) untuk admin</h1>
            <p>Seme Framework has default feature to overide all routes below <b>app/controller/admin</b>. This feature comes when user need some extra security for securing admin pages. Not only re-routes, Seme Framework has another base_url function for compatibilty routing between admin page. The function is <b>base_url_admin()</b>.</p>
            <h2>Condition</h2>
            <p>For using this feature, Seme Framework has some condition to meet such as:</p>
            <ol>
              <li><code>$site_url</code> have to fill correclty on each file configurations, e.g. <code>app/config/development.php</code>.</li>
              <li><code>$admin_secret_url</code> on admin routing section in each file configuration is set. Default value <b>admin</b>.</li>
              <li>Only work on controller below <code>app/controller/admin</code> folder.</li>
              <li>If there is a controller folder match with <code>$admin_secret_url</code> value, the controller under matched will be ignored.</li>
              <li>Use <code>base_url_admin</code> respectively instead of <code>base_url()</code>.</li>
            </ol>
          </div>
        </div>

      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/uri_routing/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Uri Routing
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/uri_routing/constants/" class="btn">
            Konstanta
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
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
      name: 'Seme Framework v4.0.0',
      suffix: ' - Seme Framework Bahasa Indonesia',
      title: 'Perutean URI untuk Admin',
      description: 'Pelajari selengkapnya tentang the URI Routing of melalui dokumentasi Seme Framework versi 4.0.0.',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/uri_routing/',
          text: 'Perutean URI',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/uri_routing/admin/',
          text: 'Admin',
        }
      ]
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'id'
      },
      title: this.title+' - '+this.name,
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
