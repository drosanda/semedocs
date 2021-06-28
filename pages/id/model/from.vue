<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
          <li class="unavailable">From Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">From Method</h1>
            <p><b>From</b> method is part of database class builder for selecting table with its alias.</p>
            <h2>Parameters</h2>
            <p>Update method has 2 required parameters that is <b>table name</b> and <b>table alias</b>. Table alias are required for using <b>join</b> and <b>join_method</b></p>
            <pre>$this->db->from(string $table_name, string $table_alias): object</pre>
            <h3>$table_name</h3>
            <p><b>Table Name</b> refer to table name.</p>
            <h3>$alias</h3>
            <p><b>Alias</b> Aliased name of <b>$table_name</b>. required if you have call <b>join</b> method</p>
            <h2>Example usage</h2>
            <p>Here is the examples using select method. See the first of this page for full example.</p>
            <h3>Basic Usage</h3>
            <p>For example we assumed want to add new data in blog table. First, in the model:</p>
            <pre>
class Blog_Model extends SENE_Model{
  var $tbl = &#x27;blog&#x27;;
  var $tbl_as = &#x27;b&#x27;;
  public function __construct(){
    parent::__construct();
  }
  public function countList(){
    $this-&#x3E;db-&#x3E;select_as(&#x22;COUNT(*)&#x22;,&#x22;total&#x22;,0);
    $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
    return $this-&#x3E;db-&#x3E;get_first();
  }
}
            </pre>

          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/id/model/select_as/" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Model::select_as
          </b-button>
        </div>
        <div class="column is-2">&nbsp;</div>
        <div class="column">
          <b-button tag="router-link" to="/id/model/join" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Model::join
          </b-button>
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
        suffix: ' - Seme Framework 4',
        title: 'Model::from method',
        description: 'Pelajari selengkapnya tentang from method on SENE_Model class from Seme Framework.',
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
            text: 'Model',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/tutorial/introduction/',
            text: 'From',
          },
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
