<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/configuration">Configuration</NuxtLink></li>
          <li class="unavailable">Session Configuration</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Session Configuration</h1>
            <p>
              The session key configuration requires for isolating the session used by another apps on same server.
              This value is mandatory, the filling value can be random or the desired value as long as has unique value.
              This session key will be aded to <code>$_SESSION</code> automatically.
            </p>
            <p>Example <code>$saltkey = &#x27;s3mEFr4&#x27;;</code>.</p>
            <p>The  <code>$saltkey</code> value setting is in each settings file. See the sample settings code snippet below.</p>
            <p>Learn more about the <code>$_SESSION</code> at <a href="https://www.php.net/manual/en/reserved.variables.session" target="_blank">php.net SESSION <i class="fa fa-external-link"></i></a>.</p>

            <p>For further information how to use session using Seme Framework, please read <NuxtLink to="/4.0/controller/session/">how to use Session on Controller</NuxtLink>.</p>
            <hr>
            <div class="message is-info">
              <div class="message-body">
                <p><b>Caution</b></p>
                <p>Please make sure the <code>$saltkey</code> value has been changed and has unique key with the other project.</p>
              </div>
            </div>

            <div class="message is-success">
              <div class="message-body">
                <p><b>Tips</b></p>
                <p>If you can't decide to fill <code>$saltkey</code> value, you can add your project name with year number as suffix.</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0/configuration/url/" class="btn">
          <i class="fa fa-chevron-left"></i>
            URL Configuration
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0/configuration/routes/" class="btn">
            Routes Configuration
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    layout: 'v4.0',
    data (){
      return {
        name: 'Seme Framework 4',
        suffix: ' - Seme Framework 4',
        title: 'Session Configuration',
        description: 'Learn more about Session Configuration of Seme Framework 4 through this documentation.',
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0',
            text: '4.0'
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0/configuration',
            text: 'Configuration',
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
    jsonld() { this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
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
          "dateCreated": "2021-08-11T19:52:38+07:00",
          "datePublished": "2021-08-11T19:52:38+07:00",
          "dateModified": "2021-06-23T19:39:17+07:00",
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
