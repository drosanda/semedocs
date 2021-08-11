<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/">4.0.x</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/library/">Library</NuxtLink></li>
          <li class="unavailable">SENE_JSON_Engine</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">SENE_JSON_Engine Library</h1>
            <p>
              <code>SENE_JSON_Engine</code> is one of the default libraries of the Seme Framework to simplify the process of converting NATIVE PHP data into JSON.
            </p>

            <h2>Library Sinopsis</h2>
            <p>
              The following is a synopsis for the <code>SENE_JSON_Engine</code> library.
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
class SENE_JSON_Engine
{
  private function safe_json_encode($value){ .. }
  private function utf8ize($mixed){ .. }
  private function latin1_to_utf8($dat){ .. }
  private function log($str){ .. }
  public function out($data, $allowed="*"){ .. }
}
                </highlight-code>
              </div>
            </div>

            <h2>External References</h2>
            <p>
              The following are external references used in this document:
              <ul>
                <li>
                  <a href="https://www.w3schools.com/js/js_json_intro.asp" target="_blank">JSON <i class="fa fa-external-link"></i></a>
                </li>
                <li>
                  <a href="https://www.php.net/manual/en/function.json-encode.php" target="_blank">PHP json_encode <i class="fa fa-external-link"></i></a>
                </li>
              </ul>
            </p>

          </div>
        </div>

        <div class="nav-bottom">
          <div class="nav-bottom-left">
            <nuxt-link to="/4.0/seme_log/" class="btn">
              <i class="fa fa-chevron-left"></i>
              SEME_Log
            </nuxt-link>
          </div>
          <div class="nav-bottom-right">
            <nuxt-link to="/4.0/model/" class="btn">
              Model
              <i class="fa fa-chevron-right"></i>
            </nuxt-link>
          </div>
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
      title: 'SENE_JSON_Engine',
      description: 'Learn more about SENE_JSON_Engine Library on Seme Framework 4.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0',
          text: '4.0.2',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0/library',
          text: 'Library',
        }
      ],
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
        '@type': "WebPage",
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
        "dateCreated": "2021-07-28T12:22:00+07:00",
        "datePublished": "2021-07-28T12:22:00+07:00",
        "dateModified": "2021-07-28T12:22:00+07:00",
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
