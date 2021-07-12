<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
<li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
              <li class=""><NuxtLink to="/id/model">Model</NuxtLink></li>
            <li class="unavailable">Where AS Method</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Where AS Method</h1>
					<p>Where method is part of database class builder for filtering data compatible with WHERE Clause on SQL. This method support chained, and has flow from top to bottom while bracket are used. The <b>difference</b> is this method does not automatically escaped</p>

					<pre>class Blog_Model extends SENE_Model{
	var $tbl = 'd_order';
	var $tbl_as = 'dor';
	var $tbl2 = 'b_user';
	var $tbl2_as = 'bu';
	public function __construct(){
		parent::__construct();
		$this->db->from($this->tbl,$this->tbl_as);
	}
	public function getNow($id){
		$this->db->select("$this->tbl2_as.fname",'fname',0);
		$this->db->select("$this->tbl_as.date_order",'date_order',0);
		$this->db->join($this->tbl2,$this->tbl2_as,'id',$this->tbl_as,'b_user_id','');
		$this->db->where_as("DATE($this->tbl_as.date_order)","CURRENT_DATE()","AND","=",0,0);
		return $this->db->get();
	}
	public function getYesterday($b_user_id){
		$this->db->select("$this->tbl_as.*, $this-tbl_as.status_text",'status_text',0);
		$this->db->select("$this->tbl2_as.fname",'fname',0);
		$this->db->select("$this->tbl2_as.email",'email',0);
		$this->db->where_as("$this->tbl_as.status_text",$this->db->esc("order_invoice"),"AND","=",0,0);
		$this->db->where_as("DATE(date_order)","DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)","AND","=",0,0);
		return $this->db->get();
	}
}
					</pre>
					<h2>Parameters</h2>
					<p>Where method has 2 required parameters that is <b>column name</b> and <b>value</b>, another parameters are optional. Here is the completed parameters can be used by where methods</p>
					<pre>$this->db->where(
	COLUMN_NAME,
	VALUE,
	" AND | OR ",
	"= | != | <= | >= | < | > | <> |
	like | like% | %like | %like% |
	notlike | notlike% |%notlike | %notlike%
	",
	OPENBRACKET,
	CLOSEBRACKET
);</pre>
					<h3>COLUMN_NAME</h3>
					<p>Column name required for filtering data from table. The columname should exist on selected table. This method has unescaped value.</p>
					<h3>VALUE</h3>
					<p>Value required for matched with data on table. This method has unescaped value.</p>
					<h3>Combining Method</h3>
					<p>Default value is AND, this parameter useful for filtering data for multiple condition. Available value <b>AND</b> or <b>OR</b>. Value of this parameter is not case sensitive.</p>
					<h3>Relational Operator</h3>
					<p>Value required for matched COLUMN_NAME with value. Available value:</p>
					<ul>
					<li>=</li>
					<li>&lt;</li>
					<li>&gt;</li>
					<li>&lt;=</li>
					<li>&gt;=</li>
					<li>&lt;&gt;</li>
					<li>like</li>
					<li>like%</li>
					<li>%like</li>
					<li>%like%</li>
					<li>notlike</li>
					<li>notlike%</li>
					<li>%notlike</li>
					<li>%notlike%</li>
					</ul>
					<p>Value of this parameter is not case sensitive.</p>
					<h3>OPEN BRACKET</h3>
					<p>Required for adding bracket for prioritize condition filtering, default value 0. Available value <b>1</b> and <b>0</b>.</p>
					<h3>CLOSE BRACKET</h3>
					<p>Required for adding bracket for prioritize condition filtering, default value 0. Available value <b>1</b> and <b>0</b>.</p>
					<h2>Escaping Value</h2>
					<p>Escaping value is required for string matching. Here is the example</p>
					<pre>$this->db->where_as("$this->tbl_as.status_text",$this->db->esc("order_completed"));</pre>
					<h2>Basic Where Condition</h2>
					<p>For basic usage, Seme Framework has basic where method called <NuxtLink to="/id/model/where/">where_as method</NuxtLink>.</p>
        </div>
      </div>

        </div>

        <div class="columns">
          <div class="column">
            <b-button tag="router-link" to="/id/model/where" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Model::where
            </b-button>
          </div>
          <div class="column is-2">&nbsp;</div>
          <div class="column">
            <b-button tag="router-link" to="/id/model/between" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Model::between
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
      title: 'Model::where_as method',
      description: 'Pelajari selengkapnya tentang where_as method on SENE_Model class from Seme Framework.',
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
          text: 'Where As',
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
