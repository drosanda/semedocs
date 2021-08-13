<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2">3.2.x</NuxtLink></li>
          <li class="unavailable">Install</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Install</h1>
            <p>Clone the repository to your directory, or Download framework on github as ZIP and then extract from archive.</p>
            <hr>
            <h2>Configuring</h2>
            <p>Go to <code>app/config/config.php</code> and edit the file to suitable your choice.</p>
            <h3>File: config.php</h3>
            <p>There is default example for config.php in Seme Framework.</p>
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
                  $site = &#x22;http://&#x22;.$_SERVER[&#x27;HTTP_HOST&#x27;].&#x22;/&#x22;;
                  $sene_method = &#x22;PATH_INFO&#x22;;//REQUEST_URI,PATH_INFO,ORIG_PATH_INFO
                </highlight-code>
              </div>
            </div>
            <h3>$site</h3>
            <p>Change content of site variabel and then add slash on the last</p>
            <p>Default value is <code>&#x22;http://&#x22;.$_SERVER[&#x27;HTTP_HOST&#x27;].&#x22;/&#x22;</code>.</p>
            <h3>$sene_method</h3>
            <p>If under default XAMPP config PATH_INFO is your best choice. But if in your production server, usually use REQUEST_URI.</p>
            <p>This configuration will depend on .htaccess file.</p>
            <hr>
            <h2>Htaccess configuration</h2>
            <p>If you using apache web server, the apache configuration is the most important to working with this framework. Default configuration:</p>
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
                  RewriteEngine on
                  RewriteCond $1 !^(index\.php|resources|robots\.txt)
                  RewriteCond %{REQUEST_FILENAME} !-f
                  RewriteCond %{REQUEST_FILENAME} !-d
                  RewriteRule ^(.*)$ index.php/$1 [L,QSA]
                </highlight-code>
              </div>
            </div>
          </div>
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
      suffix: ' - Seme Framework v3.2.5',
      title: 'Install',
      description: 'Learn how to install Seme Framework 3.2.5.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2',
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
        "dateCreated": "2021-08-14T01:10:12+07:00",
        "datePublished": "2021-08-14T01:10:12+07:00",
        "dateModified": "2021-08-14T01:10:12+07:00",
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
