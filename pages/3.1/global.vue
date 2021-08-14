<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2">3.2.x</NuxtLink></li>
          <li class="unavailable">Global Variabel and Constant</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Global Variable and Constant</h1>
            <p>Like the other framework, Seme Framework has several global variable and Constant that you can use for your web app.</p>
            <h2>SENEROOT</h2>
            <p>This global variable returned full path of your framework directory. Example:</p>
            <ul>
              <li>If you put working directory on <u>D:/xampp/htdocs/seme_framework</u><br />so the SENEROOT will returned path<br /><u>D:/xampp/htdocs/seme_framework</u>.</li>
              <li>If you put working directory on <u>/opt/lampp/htdocs/example_store</u><br />so the SENEROOT will returned path<br /><u>/opt/lampp/htdocs/example_store</u>.</li>
            </ul>
            <h2>SENECACHE</h2>
            <p>This global variable returned full path of your framework cache directory. Example:</p>
            <ul>
              <li>If you put working directory on <u>D:/xampp/htdocs/seme_framework</u><br />so the SENECACHE will returned path will be<br /><u>D:/xampp/htdocs/seme_framework/app/cache</u>.</li>
              <li>If you put working directory on <u>/opt/lampp/htdocs/example_store</u><br />so the SENECACHE will returned path<br /><u>/opt/lampp/htdocs/example_store/app/cache</u>.</li>
            </ul>
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
      name: 'Seme Framework v3.1',
      suffix: ' - Seme Framework 3.1.5',
      title: 'Global Variables and Functions',
      description: 'Learn more about Global Variables and Functions of Seme Framework 3.1.5.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.1',
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
        "dateCreated": "2021-08-07T21:51:32+07:00",
        "datePublished": "2021-08-07T21:51:32+07:00",
        "dateModified": "2021-08-07T21:51:32+07:00",
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
