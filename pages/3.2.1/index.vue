<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class="unavailable">3.2.x</li>
        </ul>
      </nav>

      <div class="columns">
        <div class="column">
          <div class="content">
            <h1>Seme Framework version 3.2.5</h1>
            <p>This is official documentation for Seme Framework, the PHP MVC Framework for creating small and medium app that needed for fast delivery. At first version of Seme Framework used for building API (Middle Ware) for another Application such as android, iOS, etc. And now as increasing of requirement, Seme Framework has expand the limit for creating Small and Medium App.</p>
            <h2>Key Feature</h2>
            <p>This framework suitable for Programmer that only know about <code>Manual</code> way of code. Not like this time, everything build up automatically through console. Seme Framework has taken different way of code, <i>If you want build small app, why we need lots of library</i>. Here is the key feature of Seme Framework:</p>
            <hr>
            <div class="columns">
              <div class="column"><i>Small but not Tiny</i>. Seme Framework growth on SME Industries with many requirement but can suppress the hosting price.</div>
              <div class="column"><i>Not Too serious</i>. You can played with Seme Framework at your own logic. Its free and almost has no restriction to developing your solution.</div>
              <div class="column"><i>Admin Friendly</i>. Seme Framework has re-routing feature for admin page, without refactoring the MVC.</div>
              <div class="column"><i>Theme Engine</i>. Seme Framework has feature who can <i>PUSH</i> the content inside the layout view. Also support theming engine, if you want change the Style, you just clone the original one and modified safely.</div>
            </div>
            <h2>License</h2>
            <p>Seme Framework licensed under MIT</p>
            <h2>Question and Answer</h2>
            <p>Feel free to ask me on my <a href="https://instagram.com/drosanda/" target="_blank">instagram</a>, <a href="https://facebook.com/drs11/" target="_blank">facebook</a>, or open an issue on <a href="https://github.com/drosanda/semedocs/issues" target="_blank">github</a>.</p>
            <hr>
            <h2>Change Log</h2>
            <ol class="1">
              <li>Add Join Composite for multiple primary key join</li>
              <li>Enhance json output for utf-8</li>
              <li>Remove required flag for <code>SENE_Model::select_as</code></li>
            </ol>
            <hr>
            <h2>Downloads</h2>
            <p>
              Download <a href="https://github.com/drosanda/seme-framework-v3/archive/refs/heads/master.zip">Seme Framework 3.2.5 via github</a>
            </p>
          </div>
        </div>
      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/3.1.0/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Version: 3.1.0
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/3.3.0/" class="btn">
            Version: 3.3.x
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    layout: 'v3.2',
    data (){
      return {
        name: 'Seme Framework v3.2.5',
        suffix: '',
        title: 'Seme Framework version 3.2.5 Documentation',
        description: 'Learn more about Seme Framework version 3.2.5 through this documentation.',
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2.1',
            text: '3.2.x',
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
          "dateCreated": "2021-08-08T13:37:52+07:00",
          "datePublished": "2021-08-08T13:37:52+07:00",
          "dateModified": "2021-08-08T13:37:52+07:00",
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
