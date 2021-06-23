<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">putThemeContent Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">putThemeContent Method</h1>
            <p>This method will be loaded a theme content from a file.</p>
            <p>The <code>$content_location</code> value will be reffered to a file name under <code>app/view/THEME/</code>.</p>
            <p>This value also can contain path prefix of subdirectory before the filename.</p>

            <h2>Content Location Requirements</h2>
            <p>The valid content should only put inside in a directory beneath current selected theme directory.</p>
            <pre>
|- app
|-- view
|--- front
|---- home
|----- home.php
|----- home_bottom.php
            </pre>

            <h2>Basic Usage:</h2>
            <p>Here is the basic usage of <code>Controller::putThemeContent</code>.</p>
            <pre>
Controller::putThemeContent(string $content_location[, array $data]): ControllerObject
            </pre>

            <h2>Example</h2>
            <p>Here is the example for <code>putThemeContent</code> method:</p>
            <pre>
class Home extends SENE_Controller
{
  public function __construct()
  {
    parent::__construct();
    $this-&#x3E;setTheme(&#x27;homepage&#x27;);
  }
  public function index()
  {
    $data = array();
    $this-&#x3E;putThemeContent(&#x27;home/slider&#x27;,$data);
    $this-&#x3E;putThemeContent(&#x27;home/three_values&#x27;,$data);
    $this-&#x3E;loadLayout(&#x27;col-1&#x27;,$data);
  }
}
            </pre>
            <p>So, the <code>homepage</code> theme and <code>col-1</code> layout should be existed on the directory structure.</p>
            <pre>
- app
|-- view
|--- homepage
|---- home
|----- slider.php
|----- three_values.php
|---- page
|----- col-1.php

            </pre>
          </div>
        </div>

      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/controller/loadLayout" icon-pack="fa" icon-left="chevron-left">
              loadLayout Method
            </b-button>
            <b-button tag="router-link" to="/id/controller/putJsContent" icon-pack="fa" icon-right="chevron-right">
              putJsContent Method
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
      suffix: ' - Seme Framework 4 Bahasa Indonesia',
      title: 'putThemeContent Method from SENE_Controller',
      description: 'Pelajari selengkapnya tentang putThemeContent Method from SENE_Controller on Seme Framework versi 4.0.0',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/controller/putthemecontent/',
          text: 'putThemeContent',
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
