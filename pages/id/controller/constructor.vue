<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">Constructor method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Constructor method</h1>
            <p>The Constructor method will loaded all parent class that required for a controller.</p>
            <p>This is method is very important for Seme Framework Controller.</p>
            <div class="message is-info">
  <div class="message-body">
              <p>If the constructor method is missed, you maybe get unexpected result.</p>
            </div></div>
            <p>Ussually the parent constructor are executed after class constructor</p>
            <h2>Basic Usage</h2>
            <p>The basic usage for this method is:</p>
            <pre>
parent::__construct();
            </pre>

            <p>Here is the full example:</p>
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
&#x3C;?php
  class Blog extends SENE_Controller {
    public function __construct(){
    parent::__construct();
  }
  public function index(){
    echo 'Hi, I am run properly!';
  }
}
                </highlight-code>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/controller/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Controller
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/controller/load/" class="btn">
            Controller: Load Method
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
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
        name: 'Seme Framework v4.0.0',
        suffix: ' - Dokumentasi Seme Framework v4.0.0',
        title: 'Construtor Kelas Controller',
        description: 'Pelajari selengkapnya tentang __construct Method from SENE_Controller on Seme Framework versi 4.0.0',
        breadcrumbs: [
          {
            url: process.env.ORIGIN_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.ORIGIN_URL || 'http://localhost:3001')+'/id/',
            text: 'ID',
          },
          {
            url: (process.env.ORIGIN_URL || 'http://localhost:3001')+'/id/controller/',
            text: 'Controller',
          },
          {
            url: (process.env.ORIGIN_URL || 'http://localhost:3001')+'/id/controller/constructor/',
            text: 'Construtor',
          }
        ],
      }
    },
    head() {
      return {
        htmlAttrs: {
          lang: 'id'
        },
        title: this.title+' - '+this.name,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.description
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: this.title
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
            (process.env.CDN_URL || 'http://localhost:3001').'/logo.png'
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
