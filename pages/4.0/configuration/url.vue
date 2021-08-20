<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.2</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/configuration">Configuration</NuxtLink></li>
          <li class="unavailable">URL</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">URL Configuration</h1>
            <p>Seme Framework has some configuration for Uniform Resource Locator (URL).</p>
            <h2>Base URL</h2>
            <p>
              Base URL is required for avoiding mismatch target to a page, image, etc.
            </p>
            <p>
              The base url configuration existed on <code>$site</code> variable.
            </p>
            <p>
              Same as version 3.x.x the value of <b>must</b> be ended by trailing slash.
            </p>
            <p>
              Example:
            </p>
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
                  $site = &#x22;http://localhost/seme-framework/&#x22;;
                  $site = &#x22;https://www.example.com/&#x22;;
                  $site = &#x22;http://localhost:8080/&#x22;;
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Base URL with custom port</b></p>
                <p>if using <code>$_SERVER[&#x27;HTTP_HOST&#x27;]</code> there is no necessary to add suffix port after it.</p>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Accessing base URL (<code>$site</code>) value</b></p>
                <p>The <NuxtLink to="/4.0/globals/functions/">base_url()</NuxtLink> global function is for returning value of <code>$site</code>.</p>
              </div>
            </div>

            <h2>Admin Secret URL</h2>
            <p>The special base url configuration for admin that point to  <code>app/controller/admin/*</code>.</p>
            <p>The default value is <code>$admin_secret_url = &#x27;admin&#x27;;</code>.</p>
            <p>This is will relative to <code>$site</code> value.</p>
            <p>
              Example:
            </p>
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
                  $admin_secret_url = &#x22;admin&#x22;;
                  $admin_secret_url = &#x22;boss&#x22;;
                  $admin_secret_url = &#x22;manajer&#x22;;
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Accessing the secret admin URL (<code>$admin_secret_url</code>) value</b></p>
                <p>The <NuxtLink to="/4.0/globals/functions/">base_url_admin()</NuxtLink> global function is for returning value of <code>$site.$admin_secret_url</code>.</p>
              </div>
            </div>

            <h2>URL Routing Method</h2>
            <p>
              The url routing method existed on <code>$method</code>, same as version 3.x.x the value consists of <code>REQUEST_URI</code>,<code>PATH_INFO</code>, and <code>ORIG_PATH_INFO</code>.
            </p>

            <h3>REQUEST_URI</h3>
            <p>
              The REQUEST_URI value suitable for NGINX, Apache on deployment server, LiteSpeed, etc.
            </p>

            <h3>PATH_INFO</h3>
            <p>
              The PATH_INFO value suitable for XAMPP development environtment.
            </p>

            <h3>ORIG_PATH_INFO</h3>
            <p>
              The ORIG_PATH_INFO value is for another server configuration.
            </p>

            <h2>CDN URL</h2>
            <p>The special base url for Content Delivery Network url.</p>
            <p>The default value is <code>$cdn_url = &#x27;&#x27;;</code></p>
            <p>
              Example:
            </p>
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
                  $cdn_url = &#x22;http://cdn.cenah.co.id/seme-framework/&#x22;;
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Accessing the CDN URL (<code>$cdn_url</code>) value</b></p>
                <p>The <NuxtLink to="/4.0/globals/functions/">$this->cdn_url()</NuxtLink> method form <NuxtLink to="/4.0/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink> class is for returning value of <code>$cdn_url</code> value.</p>
              </div>
            </div>

            <hr>


          </div>

        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0/configuration/session/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Session
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0/tutorial/" class="btn">
            Tutorial
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
      title: 'URL Configuration',
      description: 'Learn more about Uniform Resource Locator (URL) Configuration on Seme Framework 4.',
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
        "dateCreated": "2021-07-23T10:12:00+07:00",
        "datePublished": "2021-07-23T10:12:00+07:00",
        "dateModified": "2021-07-23T19:27:17+07:00",
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
