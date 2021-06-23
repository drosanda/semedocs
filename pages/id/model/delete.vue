<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
<li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
              <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
            <li class="unavailable">Delete Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Delete Method</h1>
					<p>Delete method for deleting data in the table.</p>
					<pre>$this->db->delete(string $table_name [, int $is_debug=0]): boolean</pre>
          <h2>Parameters</h2>
          <p>Where method has 2 parameters that is <b>table name</b> and <b>debug flag</b>.</p>
          <h3>$table_name</h3>
          <p><b>Table Name</b> can be string contain table name.</p>
					<h2>Example usage</h2>
					<p>Here is the examples using <b>delete method</b>. See the first of this page for full example.</p>
          <h3>Basic Usage</h3>
          <p>For example we assumed want to delete data in blog table. First, in the model:</p>
<pre>class Blog_Model extends SENE_Model{
	var $tbl = 'd_order';
	var $tbl_as = 'dor';
	public function __construct(){
		parent::__construct();
		$this->db->from($this->tbl,$this->tbl_as);
	}
	public function delete($id){
    $this->db->where("id",$id);
		return $this->db->delete($this->tbl);
	}
}
					</pre>

        </div>
      </div>
        </div>

        <div class="columns">
          <div class="column">
            <b-button tag="router-link" to="/id/model/update" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Model::update
            </b-button>
          </div>
          <div class="column is-2">&nbsp;</div>
          <div class="column">
            <b-button tag="router-link" to="/id/model/exec" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Model::exec
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
      suffix: ' - Seme Framework 4 Bahasa Indonesia',
      title: 'Model::delete method',
      description: 'Pelajari selengkapnya tentang delete method on SENE_Model class from Seme Framework.',
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
          text: 'Select',
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
