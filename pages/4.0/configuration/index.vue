<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class="unavailable">Configuration</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Configuration</h1>
            <p>
              On version 4.x.x, the configuration has merged into single files for easy deployment.
              The basic configuration not significanlty differents with 3.x.x version, like database, controller, base url, etc.
              And then additional configurations has been added too, for keeping deployment specific configuration.
            </p>
            <h2 class="">Location</h2>
            <p>
              The location in <code>app/config/</code>. By default only <code>development.php</code> existed in repository.
            </p>
            <h3 class="">Configuration by Environments</h3>
            <p>
              Seme Framework will read the configuration with this order:
            </p>
            <ol>
              <li><code>production.php</code></li>
              <li><code>staging.php</code></li>
              <li><code>development.php</code></li>
            </ol>
            <p>
              The content of each files can be differents each others depends on your requirements.
              Learn more about <NuxtLink to="/4.0/configuration/environment/">Environment Configuration</NuxtLink>.
            </p>
            <div class="message is-info">
              <div class="message-body">
                <p>
                  By default Seme Framework only includes <code>development.php</code> for the development stage. 
                  You can create a new file named <code>staging.php</code> or even <code>production.php</code> on the production server.
                </p>
              </div>
            </div>
            <hr>

            <h2>Basic configuration</h2>
            <p>
              By default Seme Framework only include <code>development.php</code> for development phase.
              You can created new files named <code>staging.php</code> or even <code>production.php</code> later on each server.
            </p>
            <p>
              And then the further information about basic configuration:
            </p>
            <ul>
              <li><NuxtLink to="/4.0/configuration/url/">URL Configuration</NuxtLink></li>
              <li><NuxtLink to="/4.0/configuration/db-connection/">Database Connection</NuxtLink></li>
            </ul>

            <h3>Session</h3>
            <p>
              The session key configuration requires for dividing the session used by another apps.
              This value is mandatory, the filling value can be random or the desired value as long as has unique value.
              Example <code>$saltkey = &#x27;s3mEFr4&#x27;;</code>. Learn more about <NuxtLink to="/4.0/configuration/session/">session configuration</NuxtLink>.
            </p>

            <h3>Timezone</h3>
            <p>
              The timezone value required by some apps that requiring timezone precisions.
              The default value is <code>$timezone = &#x27;Asia/Jakarta&#x27;;</code>.
              For the values, please refer to <a href="https://www.php.net/manual/en/timezones.php" target="_blank">List of Supported Timezones <i class="fa fa-external-link"></i></a> on PHP Manual website.
            </p>

            <h3>Routes</h3>
            <p>
              Seme Framework has ability for remapping URI Request to Controller by changing the routes behavior.
              Read more about <NuxtLink to="/4.0/configuration/routes/">Routes Configuration</NuxtLink>.
            </p>

            <h3>Additional Configuration</h3>
            <p>
              Seme Framework are now support for additional configuration values that can be implemented per configuration.
              The Additional configurations existed on <code>$semevar</code> array.
              You can add the name value pair on this array.
              The value can be <code>string</code>, <code>array</code>, <code>object</code>, and <code>number</code> depends on your requirements.
            </p>

            <hr>
            <h2>Source Codes</h2>
            <p>Here is the default content for development.php file.</p>

            <ExamplesConfiguration/>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Config Property</b></p>
                <p>You can read more about config property on <NuxtLink to="/4.0/controller/config" title="Config Property on controller page">Controller/Config</NuxtLink> page.</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0/downloads/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Download and Installation
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0/configuration/db-connection" class="btn">
            DB Connection
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
        title: 'Configuration',
        description: 'Learn more about Configuration of Seme Framework 4 through this documentation.',
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
          "dateModified": "2022-01-10T19:37:21+07:00",
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
