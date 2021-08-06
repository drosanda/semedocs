<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class="unavailable">Credits</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1>Credits</h1>
            <p>Seme Framework was originally developed by Daeng Rosanda, at first was written for achieving Undergraduate Thesis. Time after time Seme Framework used by another project on startup and company as Mini Web or main Web Application. And now Seme Framework contribute to Open Source project.</p>
            <p>And many thanks to:</p>
            <ul>
              <li>Allah SWT</li>
              <li>Adam Mukharil Bachtiar, S.Kom, M.T.</li>
              <li>Ray Rizaldy, S.T.</li>
              <li>Andi Insanudin, S.Kom</li>
              <li>Yugie Nugraha, S.Kom</li>
              <li>Mohamad Iqbal, S.Kom</li>
              <li>The Cloud Alert Team</li>
              <li>Reza Maulana Handinata, S.Kom</li>
              <li>Rezza Muhammad Iqbal</li>
            </ul>
            <p>Also another person that help Seme Framework better.</p>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Home
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/version/" class="btn">
            Versions
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
      suffix: ' - Seme Framework',
      title: 'Credits',
      description: 'Curious about the people behind the Seme Framework?',
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
        "dateCreated": "2021-08-06T14:08:12+07:00",
        "datePublished": "2021-08-06T14:08:12+07:00",
        "dateModified": "2021-08-06T14:08:12+07:00",
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
