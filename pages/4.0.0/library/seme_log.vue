<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
<li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
              <li class=""><NuxtLink to="/4.0.0/library">Library</NuxtLink></li>
            <li class="unavailable">Seme Log</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Seme Log</h1>
					<p>Seme Log is library for logging some text or result into file log. Seme log will create and put new file seme.log in root project or in app/cache/seme.log depending directory access on your script.</p>
					<hr>
					<h2>How to use</h2>
					<p>First we have to loaded library by using library loaded:</p>
					<pre>$this->lib('seme_log');</pre>
					<p>You can put libary loader in constructor of controller or on each method in your controller.</p>
          <h2>Basic Usage</h2>
          <p>Seme Log only have one method called <b>write</b> for writting log into file log. Here is the example:</p>
          <pre>Class Product extends SEME_Controller{
  public function __construct(){
    $this->lib('seme_log');
  }
  public function index(){
    $this->seme_log->write("Produk::index called");
  }
}</pre>
          <p>And then this is the result if we open file seme.log</p>
          <pre>2019-08-06 10:22:22 - Produk::index called
2019-08-06 10:22:25 - Produk::index called
</pre>
          <h3>Advanced Result</h3>
          <p>If you used *nix Operating System, you can tail -f seme.log for realtime view log.</p>
				</div>
      </div>

        </div>
      </div>
    </div>
  </template>
  <script>
    export default {
      layout: 'v4.0.0',
      data() {
        return {
          name: 'Seme Framework v4.0.0',
          suffix: ' - Seme Framework 4',
          title: 'Seme_Log',
          description: 'Learn more about Seme_Log Library on Seme Framework version 4.0.0',
          breadcrumbs: [
            {
              url: process.env.BASE_URL || 'http://localhost:3001',
              text: 'Seme Framework',
            },
            {
              url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0/',
              text: '4.0.0',
            },
            {
              url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0/library/',
              text: 'Library',
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
      jsonld() { this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
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
