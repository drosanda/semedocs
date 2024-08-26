<template>
  <div class="section ">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class="unavailable">Requirements</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1 class="">Requirements</h1>
            <p>
              Seme Framework can run on PHP version from 5.4 to 8.2. But, not working on Php version 8.0. Also Seme Framework rely on MySQLi extension for database connection. So, Seme Framework will support all databases that supported by MySQLi extension.
            /p>
            <h2>Additional Requirements</h2>
            <p>
              For quick development, we recommend you to use <a href="https://www.apachefriends.org/download.html" target="_blank">XAMPP</a> for local server. And then [Visual Studio Code](https://code.visualstudio.com/download) as your IDE. and then [CMDER](https://cmder.app/) for command line emulator on Windows.
              And last <a href="https://git-scm.com/downloads" target="_blank">git</a> as repository manager.
            </p>
            <ul>
              <li>MySQLi</li>
              <li>JSON</li>
              <li>Session</li>
            </ul>
            <h2>Supported Database Engine</h2>
            <p>A database is required for most web application programming. Currently supported databases are:</p>
            <ul>
              <li>MySQL 5.1+ via the MySQLi drivers</li>
              <li>MariaDB version 5.5.x via the MySQLi drivers</li>
              <li>MariaDB version 10.x.x via the MySQLi drivers</li>
            </ul>
            <p>Since the framework requires the working connection to a MySQL database, it wont work unless you setup the database connection.</p>

            <h2>IDE or Text Editor</h2>
            <p>An IDE or Text Editor are required for implementing codes into Seme Framework. You can choose any IDE but Seme Framework was built by using:</p>
            <ul>
              <li><a href="https://notepad-plus-plus.org/downloads/">Notepad++</a> Simple Text editor but with better features</li>
              <li><a href="https://atom.io/">Atom</a> Hackable Text editor</li>
              <li><a href="https://code.visualstudio.com/download">VSCode</a> Lighter if compare to atom</li>
            </ul>

            <h2>Environments</h2>
            <p>Seme Framework running well by using this kind of environments:</p>
            <ul>
              <li><a href="https://www.apachefriends.org/download">XAMPP</a> for Mac, Linux, and Windows</li>
              <li><a href="https://hub.docker.com/r/drosanda/seme_webstack">Seme WebStack Docker Container</a></li>
              <li>Nginx with PHP-FPM 7.4.x running on Centos 7</li>
            </ul>

            <h2>Optional Requirements</h2>
            <p>Seme Framework more powerful and flexible if also installing: </p>
            <ul>
              <li><a href="https://git-scm.com/downloads">GIT</a> for Mac, Linux, and Windows</li>
              <li><a href="https://cmder.net/">CMDER</a> Console / terminal emulator for Windows Only</li>
              <li><a href="https://ohmyz.sh/">Oh My ZSH</a> Console / terminal for Mac and Linux</li>
            </ul>

          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0/credits/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Credits
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0/downloads/" class="btn">
            Download and Installation
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
    data() {
      return {
        name: 'Seme Framework 4',
        suffix: ' - Seme Framework 4',
        title: 'Requirements',
        description: 'Learn more about Requirements of Seme Framework 4 Documentation',
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0',
            text: '4.0'
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
          "dateModified": "2021-06-11T14:21:32+07:00",
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
