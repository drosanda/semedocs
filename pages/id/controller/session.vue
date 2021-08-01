<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">Menggunakan Session</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Menggunakan Session</h1>
  					<p>Seme Framework comes with builtin session manager which stored to <code>$_SESSION</code> array with randomize string that define through <NuxtLink to="/4.0.0/configuration/session/">configuration</NuxtLink>. Method <code>setKey()</code> from Sene_controller allowed you to pass array of object or objects to save in session. And Method <code>getKey()</code> allowed to get any stored value to session. Here is the example</p>
  					<pre>
  class Home extends SENE_Controller{
  &#x9;public function __construct(){
  &#x9;&#x9;parent::__construct();
  &#x9;}
  &#x9;private funtion __init(){
  &#x9;&#x9;$data = array();
  &#x9;&#x9;$sess = $this-&#x3E;getKey();
  &#x9;&#x9;if(!isset($sess-&#x3E;user_login)) $sess-&#x3E;user_login = 0;
  &#x9;&#x9;if(!isset($sess-&#x3E;user)) $sess-&#x3E;user = new stdClass();
  &#x9;&#x9;if(isset($sess-&#x3E;user-&#x3E;id)) $sess-&#x3E;user_login = 1;
  &#x9;&#x9;$this-&#x3E;setKey($sess);
  &#x9;&#x9;$data[&#x27;sess&#x27;] = $sess;
  &#x9;&#x9;return $data;
  &#x9;}
  &#x9;public function index(){
  &#x9;&#x9;$data = $this-&#x3E;__init();
  &#x9;}
  &#x9;public function set_logged_in(){
  &#x9;&#x9;$sess = $this-&#x3E;getKey();
  &#x9;&#x9;if(!isset($sess-&#x3E;user_login)) $sess-&#x3E;user_login = 1;
  &#x9;&#x9;if(!isset($sess-&#x3E;user)) $sess-&#x3E;user = new stdClass();
  &#x9;&#x9;if(!isset($sess-&#x3E;user-&#x3E;id)) $sess-&#x3E;user-&#x3E;id = 1000;
  &#x9;&#x9;$this-&#x3E;setKey($sess);
  &#x9;}
  &#x9;public function set_logged_out(){
  &#x9;&#x9;$sess = $this-&#x3E;getKey();
  &#x9;&#x9;if(!isset($sess-&#x3E;user_login)) $sess-&#x3E;user_login = 0;
  &#x9;&#x9;if(!isset($sess-&#x3E;user)) $sess-&#x3E;user = new stdClass();
  &#x9;&#x9;if(!isset($sess-&#x3E;user-&#x3E;id)) $sess-&#x3E;user-&#x3E;id = 1000;
  &#x9;&#x9;unset($sess-&#x3E;user-&#x3E;id);
  &#x9;&#x9;$this-&#x3E;setKey($sess);
  &#x9;}
  }
  					</pre>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/controller/load" icon-pack="fa" icon-left="chevron-left" class="">
              Load Method
            </b-button>
            <b-button tag="router-link" to="/id/controller/input" icon-pack="fa" icon-right="chevron-right" class="">
              Input Method
            </b-button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'id',
  data() {
    return {
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'Menggunakan Session',
      description: 'Pelajari selengkapnya tentang Using Session from SENE_Controller on Seme Framework versi 4.0.0',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/',
          text: 'ID',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/controller/',
          text: 'Controller',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/controller/session/',
          text: 'Session',
        }
      ],
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'id'
      },
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
        "dateCreated": "2020-06-11T10:12:00+07:00",
        "datePublished": "2020-06-11T10:12:00+07:00",
        "dateModified": "2021-06-11T01:04:00+07:00",
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
