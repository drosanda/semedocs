<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.1">3.1.x</NuxtLink></li>
          <li class=""><NuxtLink to="/3.1/view/">View</NuxtLink></li>
          <li class="unavailable">Layout</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Layout</h1>
            <p>
              Seme Framework support theme layout for providing reusable view component.
              The layout contains about HTML general form by loading its required components, such as css loader method, javascript loader, view component, and plain html content.
            </p>

            <h2>Layout Requirements</h2>
            <p>
              Seme Framework only loaded layout with this condition.
            </p>
            <ol>
              <li>
                The layout file location is under <code>page</code> directory inside a theme directory.
              </li>
              <li>
                The layout filename only contain <b>alpha numeric</b> with <b>lowercase</b>, only <b>undescore</b>, then with <code>.php</code> suffix.
              </li>
              <li>
                Layout file only loaded by <NuxtLink to="/3.1/controller/loadlayout/">loadLayout method</NuxtLink> in Controller.
              </li>
            </ol>

          </div>
        </div>

      </div>



    </div>
  </div>
</template>
<script>
export default {
  layout: 'v3.1',
  data (){
    return {
      base_url: '{{base_url}}',
      cdn_url: '{{cdn_url}}',
      name: 'Seme Framework 3.1',
      suffix: ' - Seme Framework 3.1',
      title: 'Theme Layout',
      description: 'Learn more about theme layout on Seme Framework 3.1.x',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.1',
          text: '3.1'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.1/view',
          text: 'View'
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
        "dateCreated": "2021-11-18T06:24:00+07:00",
        "datePublished": "2021-11-18T06:24:00+07:00",
        "dateModified": "2021-11-18T06:24:00+07:00",
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
