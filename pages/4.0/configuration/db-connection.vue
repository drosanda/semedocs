<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/configuration">Configuration</NuxtLink></li>
          <li class="unavailable">Database Connection</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Database Connection Configuration</h1>
            <p>
              Seme Framework has the ability to open direct connections to database applications such as MySQL or Maria DB through the MySQLi extension. 
              Database connection settings are in app/config/development.php in the $db array, which consists of 7 setting keys.
            </p>

            <h2>$db['host']</h2>
            <p>
              The hostname or IP Address value of database server connection.
            </p>

            <h2>$db['user']</h2>
            <p>
              The user value of database server connection.
            </p>

            <h2>$db['pass']</h2>
            <p>
              The password value of database server connection.
            </p>

            <h2>$db['name']</h2>
            <p>
              The name of database using by database server connection.
            </p>

            <h2>$db['port']</h2>
            <p>
              The connection port used by database server connection. Default value is <code>$db[&#x27;port&#x27;] = &#x27;3306&#x27;;</code>.
            </p>

            <h2>$db['charset']</h2>
            <p>
              The character set or encoding used for database connections. This setting is very important, especially for multibyte data storage, such as storing Arabic or Japanese script. The contents of this key array can be <code>latin1</code> or <code>utf8mb4</code> according to the needs of the character settings.
            </p>

            <h2>$db['engine']</h2>
            <p>
              The framework database engine. In version 4 only <code>MySQLi</code> is available, so the default value is <code>$db[&#x27;engine&#x27;] = &#x27;mysqli&#x27;;</code>.
            </p>

            <hr>


          </div>

        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0/configuration/" class="btn">
            <i class="fa fa-chevron-left"></i>
            URL Configuration
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0/configuration/url/" class="btn">
            URL Configuration
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
      title: 'Database Connection',
      description: 'Learn more about Database Connection Configuration of Seme Framework 4 through this documentation.',
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
        "dateCreated": "2021-08-11T19:52:38+07:00",
        "datePublished": "2021-08-11T19:52:38+07:00",
        "dateModified": "2021-06-23T19:27:17+07:00",
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
