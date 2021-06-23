<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial/">Tutorial</NuxtLink></li>
          <li class="unavailable">Hello From Model</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h3>Model</h3>
            <p>On this tutorial we will learn, how to interacted with model from controller.</p>
            <p>First, open files located at <code>app/model/hello_model.php</code>.</p>
            <p>If the file doesnt exists, create one.</p>
            <p>And then, put this code on it.</p>

            <pre>
              &#x3C;?php
              class Hello_Model extends SENE_Model
              {
                public function __construct()
                {
                  parent::__construct();
                }
                public function get()
                {
                  return &#x27;Hello World, from model&#x27;;
                }
              }
            </pre>
            <p>And then, open and edit the <code>app/controller/home.php</code> again.</p>
            <p>Put model loader on constructor.</p>
            <pre>
              &#x3C;?php
              class Home extends SENE_Controller
              {
                public function __construct()
                {
                  parent::__construct();
                  $this-&#x3E;load(&#x22;hello_model&#x22;, &#x22;h&#x22;);
                }
                public function index()
                {
                  echo $this-&#x3E;h-&#x3E;get();
                }
              }
            </pre>
            <p>And then open <code>http://localhost/seme_framework</code>, it should show Hello World from model.</p>
            <figure>
              <img src="~/assets/img/hello-world-from-model.png" >
            </figure>


            <div class="columns">
              <div class="column">
                <div class="buttons">
                  <b-button tag="router-link" to="/id/tutorial/" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
                    Tutorials
                  </b-button>
                  <b-button tag="router-link" to="/id/tutorial/get-data/" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
                    Tutorial: Get Data
                  </b-button>
                </div>
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
  layout: 'id',
  data (){
    return {
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4 Bahasa Indonesia',
      title: 'Tutorial: Hello from Model',
      description: 'Pelajari selengkapnya tentang basic usage of Seme Framework model version 4.0.0 through this documentation.',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/tutorial/',
          text: 'Tutorial',
        }
      ]
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
