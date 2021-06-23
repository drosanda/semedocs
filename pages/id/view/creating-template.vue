<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/view">View</NuxtLink></li>
          <li class="unavailable">Creating Template</li>
        </ul>
      </nav>

      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Creating Template</h1>
            <p>For creating template we have to create directories structure of template with its file.</p>
            <p>The structures will be like:</p>
            <ul>
              <li>
                app
                <ul>
                  <li>
                    view
                    <ul>
                      <li>
                        <code>TEMPLATE_NAME</code>
                        <ul>
                          <li>
                            page
                            <ul>
                              <li>
                                html
                                <ul>
                                  <li>header.php</li>
                                  <li>topbar.php</li>
                                  <li>sidebar.php</li>
                                  <li>footer.php</li>
                                </ul>
                              </li>
                              <li>notfound.php</li>
                              <li>col-1.php</li>
                            </ul>
                          </li>
                          <li>theme.json</li>
                          <li>script.json</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h2>TEMPLATE_NAME</h2>
            <p>TEMPLATE_NAME is a directory have no special character except underscore. This directory name will be used as template if we loaded at controller using <NuxtLink to="/id/controller/setTheme">setTheme</NuxtLink>.</p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/id/view" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            View
          </b-button>
        </div>
        <div class="column is-2">&nbsp;</div>
        <div class="column">
          <b-button tag="router-link" to="/id/view/setup-header" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Setup header
          </b-button>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'id',
  data() {
    return {
      name: 'Seme Framework v4.0.0',
      suffix: ' - Seme Framework Bahasa Indonesia',
      title: 'Membuat template',
      description: 'Pelajari selengkapnya tentang membuat view template di Seme Framework versi 4.0.0',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/view/',
          text: 'View',
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
