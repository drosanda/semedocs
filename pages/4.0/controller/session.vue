<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/">4.0.x</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/controller/">Controller</NuxtLink></li>
          <li class="unavailable">Session</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Using Session</h1>
            <p>
              Seme Framework comes with builtin session manager which stored to <code>$_SESSION</code> array with randomize string that define through <NuxtLink to="/4.0/configuration/session/">configuration</NuxtLink>.
            </p>

            <h2>Method <code>setKey()</code></h2>
            <p>
              Method <code>setKey()</code> from Sene_controller allowed you to pass array of object or objects to save in session.
            </p>

            <h2>Method <code>getKey()</code></h2>
            <p>
              Method <code>getKey()</code> allowed to get any stored value to session.
            </p>

            <h2>Example</h2>
            <p>
              Here is the example usage for <code>getKey()</code> method and <code>setKey()</code> method.
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
                  class Home extends SENE_Controller{
                    public function __construct(){
                      parent::__construct();
                    }
                    private funtion __init(){
                      &#x9;$data = array();
                      &#x9;$sess = $this-&#x3E;getKey();
                      &#x9;if(!isset($sess-&#x3E;user_login)) $sess-&#x3E;user_login = 0;
                      &#x9;if(!isset($sess-&#x3E;user)) $sess-&#x3E;user = new stdClass();
                      &#x9;if(isset($sess-&#x3E;user-&#x3E;id)) $sess-&#x3E;user_login = 1;
                      &#x9;$this-&#x3E;setKey($sess);
                      &#x9;$data[&#x27;sess&#x27;] = $sess;
                      &#x9;return $data;
                    }
                    public function index(){
                      &#x9;$data = $this-&#x3E;__init();
                    }
                    public function set_logged_in(){
                      &#x9;$sess = $this-&#x3E;getKey();
                      &#x9;if(!isset($sess-&#x3E;user_login)) $sess-&#x3E;user_login = 1;
                      &#x9;if(!isset($sess-&#x3E;user)) $sess-&#x3E;user = new stdClass();
                      &#x9;if(!isset($sess-&#x3E;user-&#x3E;id)) $sess-&#x3E;user-&#x3E;id = 1000;
                      &#x9;$this-&#x3E;setKey($sess);
                    }
                    public function set_logged_out(){
                      &#x9;$sess = $this-&#x3E;getKey();
                      &#x9;if(!isset($sess-&#x3E;user_login)) $sess-&#x3E;user_login = 0;
                      &#x9;if(!isset($sess-&#x3E;user)) $sess-&#x3E;user = new stdClass();
                      &#x9;if(!isset($sess-&#x3E;user-&#x3E;id)) $sess-&#x3E;user-&#x3E;id = 1000;
                      &#x9;unset($sess-&#x3E;user-&#x3E;id);
                      &#x9;$this-&#x3E;setKey($sess);
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/4.0/controller/resetthemecontent/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  resetThemeContent
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/4.0/controller/setauthor/" class="btn">
                  setAuthor
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
  data() {
    return {
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'Using Session',
      description: 'Learn more about Using Session from SENE_Controller on Seme Framework version 4.0.0',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0',
          text: '4.0.2'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0/controller',
          text: 'Controller'
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
        "dateCreated": "2021-07-13T13:34:00+07:00",
        "datePublished": "2021-07-13T13:34:00+07:00",
        "dateModified": "2021-07-13T13:36:00+07:00",
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
