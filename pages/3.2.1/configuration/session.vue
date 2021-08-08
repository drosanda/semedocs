<template>
  <div class="section">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul class="breadcrumbs">
        <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
        <li class=""><NuxtLink to="/3.2.1">3.2.x</NuxtLink></li>
        <li class=""><NuxtLink to="/3.2.1/configuration">Configuration</NuxtLink></li>
        <li class="unavailable">Session</li>
      </ul>
    </nav>
    <div class="columns">
      <div class="column">
        <div class="content">
          <h1 class="">Configuration: session.php</h1>
          <p>
            Session configuration define the <code>$_SESSION[$key]</code> used by framework.
            If you installed 2 framework on same server with same login method and same session key, the app will be share same session.
            If you want to separated it, simply fill the session key value uniquely.
            The session configuration located at <code>app/config/session.php</code>.
          </p>
          <h2>Example</h2>
          <div class="macwindow">
            <div class="titlebar">
              <div class="buttons">
                <div class="close">
                  <a class="closebutton" href="#"><span><strong>x</strong></span></a>
                  <!-- close button link -->
                </div>
                <div class="minimize">
                  <a class="minimizebutton" href="#"><span><strong>&ndash;</strong></span></a>
                  <!-- minimize button link -->
                </div>
                <div class="zoom">
                  <a class="zoombutton" href="#"><span><strong>+</strong></span></a>
                  <!-- zoom button link -->
                </div>
              </div>
            </div>
            <div class="maccontent">
              <highlight-code lang="php">
                &#x3C;?php
                ...
                $saltkey = 's3M3Fr321$';
                ...
              </highlight-code>
            </div>
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
      suffix: ' - Seme Framework v3.2.5',
      title: 'Configuration: session.php',
      description: 'File session.php for Seme Framework version 3.2.x session setting',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2.1',
          text: '3.2.x'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2.1/configuration',
          text: 'Configuration'
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
