<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class="unavailable">Versions</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1>Versions</h1>
            <p>Here is the list version of Seme Framework and its documentation support.</p>

            <table class="striped">
              <thead>
                <tr>
                  <th>Version</th>
                  <th>Documentation Language</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>4.0.0</td>
                  <td>
                    <NuxtLink to="/4.0.0/">English</NuxtLink> <NuxtLink to="/id/">Bahasa</NuxtLink>
                  </td>
                  <td>
                    <amp-img layout="responsive" width="90px" height="20px" src='https://img.shields.io/badge/langID-22%25-d6cfcf' alt="documentation coverage Bahasa"></amp-img>
                    <amp-img layout="responsive" width="90px" height="20px" src='https://img.shields.io/badge/langEN-60%25-ffc107' alt="documentation coverage English"></amp-img>
                  </td>
                </tr>
                <tr>
                  <td>3.3.0</td>
                  <td>
                    <NuxtLink to="/3.3.0/">English</NuxtLink>
                  </td>
                  <td>
                    <amp-img layout="responsive" width="90px" height="20px" src='https://img.shields.io/badge/langID-0%25-f1f1f1' alt="documentation coverage for Bahasa"></amp-img>
                    <amp-img layout="responsive" width="90px" height="20px" src='https://img.shields.io/badge/langEN-1%25-eaeaea' alt="documentation coverage for English"></amp-img>
                  </td>
                </tr>
                <tr>
                  <td>3.2.1</td>
                  <td><NuxtLink to="/3.2.1/">English</NuxtLink></td>
                  <td>
                    <amp-img layout="responsive" width="90px" height="20px" src='https://img.shields.io/badge/langID-0%25-f1f1f1' alt="documentation coverage for Bahasa"></amp-img>
                    <amp-img layout="responsive" width="90px" height="20px" src='https://img.shields.io/badge/langEN-27%25-efe4ae' alt="documentation coverage for English"></amp-img>
                  </td>
                </tr>
                <tr>
                  <td>3.1.0</td>
                  <td><NuxtLink to="/3.1.0/">English</NuxtLink></td>
                  <td>
                    <amp-img layout="responsive" width="90px" height="20px" src='https://img.shields.io/badge/langID-0%25-f1f1f1' alt="documentation coverage for Bahasa"></amp-img>
                    <amp-img layout="responsive" width="90px" height="20px" src='https://img.shields.io/badge/langEN-12%25-eaeaea' alt="documentation coverage for English"></amp-img>
                  </td>
                </tr>
                <tr>
                  <td>3.0.0</td>
                  <td><NuxtLink to="/3.0.0/">English</NuxtLink></td>
                  <td>
                    <amp-img layout="responsive" width="90px" height="20px" src='https://img.shields.io/badge/langID-0%25-f1f1f1' alt="documentation coverage for Bahasa"></amp-img>
                    <amp-img layout="responsive" width="90px" height="20px" src='https://img.shields.io/badge/langEN-8%25-eaeaea' alt="documentation coverage for English"></amp-img>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>You can contributing by Pull Request this <a href="https://github.com/drosanda/semedocs" target="_blank">document repository from Github</a>.</p>
            <hr>
          </div>
        </div>
      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/credits/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Credits
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0.0/" class="btn">
            Version 4.0.0
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
      name: 'Seme Framework',
      title: 'Versions',
      suffix: ' - Seme Framework',
      description: 'Here is the Seme Framework version list with its documentation status and support.',
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
