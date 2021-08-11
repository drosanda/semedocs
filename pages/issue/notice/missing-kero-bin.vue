<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/issue">Issue</NuxtLink></li>
          <li class=""><NuxtLink to="/issue/notice">Error Notice</NuxtLink></li>
          <li class="unavailable">Missing kero/bin</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1>Missing kero/bin</h1>
            <p>Seme framework has special place for putting your batch or binary in <code>kero/bin/</code> directory.</p>
            <p>But, this directory for now is not auto generated so you have to created manually the <code>bin</code> directory.</p>

            <div class="message is-info">
              <div class="message-body">
                <p>This only occured on Seme Framework version 4.x.x.</p>
              </div>
            </div>

            <p>Example error message</p>
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
Notice: Missing kero/bin in /Application/xampp/htdocs/seme-frmamework
Notice: Missing kero/bin in D:\xampp\htdocs\seme-framework
Notice: Missing kero/bin in /opt/lampp/htdocs/seme-framework
</highlight-code>
</div>
</div>
            <h2>Solution</h2>
            <p>Create manually the directory <code>kero/bin</code>.</p>
          </div>


        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/issue/notice" class="btn">
            <i class="fa fa-chevron-left"></i>
            Error Notice
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
      name: 'Seme Framework Error Notice',
      suffix: ' - Seme Framework Error Notice',
      title: 'Missing kero/bin',
      description: 'Learn more about Error Notice: Missing kero/bin on Seme Framework and how to solved it.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/issue',
          text: 'Issue'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/issue/notice',
          text: 'Error Notice'
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
