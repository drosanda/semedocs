<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/configuration/">Configuration</NuxtLink></li>
          <li class="unavailable">Environment</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Configuration Environment</h1>
            <p>
              Seme Framework has supported configuration file by environments.
            </p>

            <h2 class="">Prioritize</h2>
            <p>
              Seme Framework will read the configuration with this order:
            </p>
            <ol>
              <li><code>production.php</code></li>
              <li><code>staging.php</code></li>
              <li><code>development.php</code></li>
            </ol>

            <h2 class="">Production Phase</h2>
            <p>
              On <code>production.php</code> file, you can put your configuration for <code>production environment</code>.
              Like database connection, base url, etc. Also, you can put any additional config values of <code>production phase</code> only.
            </p>
            <p>
              You have to exclude the <code>app/config/production.php</code> from git by adding it on <code>.gitignore</code>.
              So, you can pull at any time in production server.
              But, be careful wrong <code>.gitignore</code> configuration can deleted some files or directories.
            </p>

            <h2 class="">Staging Phase</h2>
            <p>
              On <code>staging.php</code> file, you can put your configuration for <code>staging environment</code>.
              Like database connection, base url, etc. Also, you can put any additional config values of <code>staging phase</code>  only.
            </p>
            <p>
              You have to exclude the <code>app/config/staging.php</code> from git by adding it on <code>.gitignore</code>.
              So, you can pull at any time in staging server.
              But, be careful wrong <code>git</code> configuration can deleted some files or directories.
            </p>

            <h2 class="">Development Phase</h2>
            <p>
              This is default configuration phase. On development file, you can put your configuration for development environment.
              Like database connection, base url, etc. Also, you can put any additional config values of development phase only.
            </p>

            <h3>Example, Base URL with custom port on Development Phase</h3>
            <p>Seme Framework can be running with overriden default http port e.g. <code>8080</code></p>
            <p>Todo so, you have to edit the <code>$site</code> value on <code>app/config/development.php</code> file.</p>

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
                  $site = &#x22;http://localhost:8080/seme-framework/&#x22;;
                </highlight-code>
              </div>
            </div>

            <p>But if using <code>$_SERVER[&#x27;HTTP_HOST&#x27;]</code> there is no necessary to add suffix port after it.</p>
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
                  $site = &#x22;http://&#x22;.$_SERVER[&#x27;HTTP_HOST&#x27;].&#x22;/seme-framework/&#x22;;
                </highlight-code>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0/configuration/routes/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Routes Configuration
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0/configuration/development/" class="btn">
            Development Environment Configuration
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
        title: 'Configuration Environments',
        description: 'Learn more about how to configuring Seme Framework 4 splitted by environment type',
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
          "dateCreated": "2020-06-11T12:12:00+07:00",
          "datePublished": "2020-06-11T12:12:00+07:00",
          "dateModified": "2021-06-23T12:17:17+07:00",
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
