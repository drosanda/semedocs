<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/core/">Core</NuxtLink></li>
          <li class="unavailable">sene_model Class</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">sene_model Class</h1>
            <p>
              The <code>sene_model</code> is an abstract class serves as a foundation for creating database models in the Seme Framework. It provides a basic structure for interacting with databases, including loading the database engine configuration and providing methods for encrypting and decrypting strings.
            </p>

            <h2>Class Synopsis</h2>
            
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
                <highlight-code lang="php">abstract class SENE_Model
{
    // properties
    public $db;
    protected $directories;
    protected $config;
    public $field = array();

    //methods
    public function __construct();
    private function loadEngine(object $db = null);
    public function __encrypt(string $val): string;
    public function __decrypt(string $key): string;
}
                </highlight-code>
              </div>
            </div>

            <h2>Constructor</h2>
            <p>
              The <code>sene_model::__construct()</code> initializes the object by setting the directories and config variables to the global $SEMEDIR and $SEMECFG arrays, respectively. It then calls the <code>loadEngine()</code> method to load the database engine configuration.
            </p>
            <p>
              <ul>
                <li>Parameters: None</li>
                <li>Returns: The SENE_Model instance itself ($this)</li>
              </ul>
            </p>

            <h2>$db</h2>
            <p>
              The <code>$db</code> property is an instance of a database driver class, which is used to interact with the database. It is set by the <code>loadEngine()</code> method and can be accessed using the <code>$this->db syntax</code>. By default this will load the <code>SEMECFG['DB']['ENGINE']</code> setting from the configuration file. For now, the only supported engine is MySQLi (<code>sene_mysqli_engine</code> class).
            </p>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/4.0/core/model/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  Core: Model
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/4.0/core/sene_mysqli_engine-class/" class="btn">
                  sene_mysqli_engine class
                  <i class="fa fa-chevron-right"></i>
                </nuxt-link>
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
  layout: 'v4.0',
  data (){
    return {
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'SENE_Model Class',
      description: 'Learn more about the properties and method of SENE_Model class on Seme Framework 4.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0',
          text: '4.0'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0/core',
          text: 'core'
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
        "dateCreated": "2024-08-26T00:57:00+07:00",
        "datePublished": "2024-08-26T00:57:00+07:00",
        "dateModified": "2024-08-26T00:57:00+07:00",
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
