<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.1/">3.1</NuxtLink></li>
          <li class="unavailable">Library</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Library</h1>
            <p>Library is a file of collection of file that you can use inside Seme Framework. You can found our library on <code>kero/lib/</code>. Seme Framework has 3 method for loading library.</p>
            <ol>
              <li>instantiate library object automatically,</li>
              <li>instantiate object of library by using different name</li>
              <li>include only library file, so you can instantiate by using its class name.</li>
            </ol>
            <hr>
            <h2>Loading A Library</h2>
            <p>You can load library from controller by using method lib. Method lib has 3 parameter required:</p>
            <ul>
              <li>Location of library file relative to kero/lib/.</li>
              <li>Object name, default name is class name with in lower case format.</li>
              <li>The include method. you can use inc value if you just require_once only your lib. Otherwise library will instantiate automatically.</li>
            </ul>
            <p>Example loading json library in home controller:</p>

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
                  Class Home extends SENE_Controller {
                    $this->lib('sene_json_engine','sene_json');
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      $data = array();
                      $data["status"]  = 200;
                      $data["message"] = 'Hello we just use json right here, Yi-Ha!';
                      $data["result"]  = array();
                      $this->sene_json->out($data);
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>After that you can open your base_url on browser and see what you get.</p>

            <h2>List of Library</h2>
            <p>Here is the list of library currently exist on seme framework:</p>
            <ul>
              <li><NuxtLink to="/4.0/library/seme_log">Seme Log - Logger (Docs on version 4)</NuxtLink></li>
              <li><NuxtLink to="/4.0/library/seme_email">Seme Email - Email Sender (Docs on version 4)</NuxtLink></li>

            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'v3.1',
  data() {
    return {
      name: 'Seme Framework 3.1',
      suffix: ' - Seme Framework 3.1',
      title: 'Library',
      description: 'Learn more about Library on Seme Framework version 3.1',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.1',
          text: '3.1'
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
        "dateCreated": "2021-11-15T19:52:38+07:00",
        "datePublished": "2021-11-15T19:52:38+07:00",
        "dateModified": "2021-11-15T19:52:38+07:00",
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
