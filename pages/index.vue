<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs" style="display: none;">
        <ul class="breadcrumbs">
          <li class="unavailable">Home</li>
        </ul>
      </nav>

      <div class="">
        <div class="column">
          <div class="content">
            <h1 class="is-size-1"><span> Seme Framework </span></h1>
            <h2 class="tagline">Web Framework for Veteran PHP Programmer</h2>

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
                  class Product extends \SENE_Controller
                  {
                    public $user_login=0;

                    public function __construct()
                    {
                      parent::__construct();
                      $session = $this-&#x3E;getKey();
                      if(isset($session-&#x3E;user-&#x3E;id)) $this-&#x3E;user_login = 1;

                      $this-&#x3E;load(&#x27;front/c_product_model&#x27;,&#x27;cpm&#x27;);
                    }

                    public function index()
                    {
                      $data = array();
                      $page = (int) $this-&#x3E;input-&#x3E;post(&#x27;page&#x27;);
                      $pagesize = (int) $this-&#x3E;input-&#x3E;post(&#x27;pagesize&#x27;);
                      $data[&#x27;cpm&#x27;] = $this-&#x3E;cpm-&#x3E;get($page,$pagesize);

                      $this-&#x3E;loadCss($this-&#x3E;cdn_url(&#x27;skin/front/css/datatables.min.css&#x27;));
                      $this-&#x3E;putJsFooter($this-&#x3E;cdn_url(&#x27;skin/front/js/datatables.min.js&#x27;));

                      $this-&#x3E;setTitle(&#x27;Catalog Product&#x27;.$this-&#x3E;config-&#x3E;semevar-&#x3E;site_suffix);

                      $this-&#x3E;putThemeContent(&#x27;produk/home&#x27;,$data);
                      $this-&#x3E;putThemeContent(&#x27;produk/home_modal&#x27;,$data);
                      $this-&#x3E;putJsReady(&#x27;produk/home_bottom&#x27;,$data);
                      $this-&#x3E;loadLayout(&#x27;col&#x27;,$data);
                      $this-&#x3E;render();
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p id="abstract">
             Seme Framework are bunch of codes that made from PHP, suitable for creating up to medium scale web based applications without started from scratch.
             This framework is <code>lightweight</code> just from <code>development phase</code> until the applications are in <code>production phase</code>.
             Seme Framework still retains the traditional method (<code>manual way of code</code>), which is suitable for both newbie programmers and <code>veteran programmers</code>.
           </p>

           <h2>Table of Contents</h2>
            <ul>
              <li>
                <NuxtLink to="#">Seme Framework</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#abstract">Abstract</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#ql">Quick Links</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#kf">Key Feature</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#how_work">How the Seme Framework Works</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#indicators">Indicators</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#license">License</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#qna">Questions &amp; Answer</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#ln">Latest News</NuxtLink>
              </li>
            </ul>

            <h2 id="ql">Quick Links</h2>
            <p>
              Here is some quick links:
            </p>
             <div class="buttons is-centered">
               <nuxt-link to="/4.0/downloads" class="btn">
                 Download &amp; Install 4.0
               </nuxt-link>
               <nuxt-link to="/4.0/tutorial" class="btn">
                 Getting Started 4.0
               </nuxt-link>
               <nuxt-link to="/issue" class="btn">
                 Issue
               </nuxt-link>
               <nuxt-link to="/id" class="btn">
                 Bahasa version
               </nuxt-link>
             </div>

             <h2 id="kf">Key Feature</h2>
             <p>
               Here are some reasons why you should use the Seme Framework:
             </p>
             <ol>
               <li>
                 Seme Framework is made with the PHP programming language, does not need to initialize data types, and is still in the same family as the <b>C programming language</b>. Read more about <NuxtLink to="/en/tutorial/basic-php">PHP basics <i class="fa fa-window-restore"></i></NuxtLink>.
               </li>
               <li>
                 The Seme Framework is very lightweight because it only builds the basic code for its abstract classes and is tested each development with <code>CacheGrind</code> from the XDEBUG extension in PHP.
               </li>
               <li>
                 Seme Framework uses the <b>Model View Controller (MVC)</b> concept, so that code generation can be more structured. Read more about <NuxtLink to="/en/tutorial/basic-mvc">MVC <i class="fa fa-window-restore"></i></NuxtLink>.
               </li>
               <li>
                 The Seme Framework has <b>automatic routing</b>, so page creation can be quickly generated directly with the URL route. Read more about <NuxtLink to="/en/uri_routing">URI routing <i class="fa fa-window-restore"></i></NuxtLink>.
               </li>
               <li>
                 The Seme Framework supports creating <b>display themes</b> where the same views can be reused without having to re-code them. Read more about <NuxtLink to="/en/view/theme">Display Themes <i class="fa fa-window-restore"></i></NuxtLink>.
               </li>
               <li>
                 Seme Framework has a <b>database query builder</b> class for SQL preparation, so you don't have to worry about SQL code incorrectly when interacting with the database. Read more about <NuxtLink to="/id/model">Model Class <i class="fa fa-window-restore"></i></NuxtLink>.
               </li>
               <li>
                 Seme Framework can also be <b>integrated</b> / linked with additional modules or <code>libraries</code> that both use the PHP programming language. Read more about <NuxtLink to="/en/library">Library <i class="fa fa-window-restore"></i></NuxtLink>.
               </li>
               <li>
                 The Seme Framework has several tutorial guides and documentation for its use. Read more about <NuxtLink to="/en/tutorial">Tutorial <i class="fa fa-window-restore"></i></NuxtLink>.
               </li>
             </ol>

            <h2 id="how_work">How Seme Framework Work?</h2>
            <p>
              Seme Framework serves as a Web Application Framework for your source code that bridges between the Web Browser and the Database System.
              Seme Framework has provided ready-to-use functions and methods for creating web-based applications.
              Database System with Seme Framework communicate using <code>Structured Query Language (SQL)</code>, but with <b>query builder</b> for simple <code>SQL</code> has been handle by it.
              So, the programmer simply to continue by extending code from Seme Framework. And then can focused to their logic implementation and solution result through web browser.
            </p>
            <amp-img
            alt="How seme framework work?"
            :src="hsfwork"
            layout="responsive"
            height="826"
            width="1222"
            >
          </amp-img>

          <h2 id="indicators">Indicator</h2>
          <p>Here is the badges (indicator) of project status:</p>
          <div class="badges">
            <amp-img layout="fixed" width="90px" height="20px" src='https://img.shields.io/badge/version-4.0.3-ed6f75' alt="version"></amp-img>
            <amp-img layout="fixed" width="90px" height="20px" src='https://travis-ci.com/drosanda/seme-framework.svg?branch=master' alt="build status"></amp-img>
            <amp-img layout="fixed" width="56px" height="20px" src='https://img.shields.io/badge/lang-en-e9bd2e' alt="version"></amp-img>
            <amp-img layout="fixed" width="113px" height="20px" src="https://codecov.io/gh/drosanda/seme-framework/branch/master/graph/badge.svg?token=3WRW0SNO41" alt="Code coverage"></amp-img>
            <amp-img layout="fixed" width="78px" height="20px" src="https://sonarcloud.io/api/project_badges/measure?project=drosanda_seme-framework&metric=bugs" alt="Bugs"></amp-img>
            <amp-img layout="fixed" width="138px" height="20px" src="https://sonarcloud.io/api/project_badges/measure?project=drosanda_seme-framework&metric=ncloc" alt="Lines of codes"></amp-img>
            <amp-img layout="fixed" width="133px" height="20px" src="https://sonarcloud.io/api/project_badges/measure?project=drosanda_seme-framework&metric=sqale_rating" alt="Maintainability rating"></amp-img>
            <amp-img layout="fixed" width="102" height="20px" src="https://sonarcloud.io/api/project_badges/measure?project=drosanda_seme-framework&metric=reliability_rating" alt="Reliability rating"></amp-img>
            <amp-img layout="fixed" width="94px" height="20px" src="https://sonarcloud.io/api/project_badges/measure?project=drosanda_seme-framework&metric=security_rating" alt="Security rating"></amp-img>
            <amp-img layout="fixed" width="127px" height="20px" src="https://sonarcloud.io/api/project_badges/measure?project=drosanda_seme-framework&metric=vulnerabilities" alt="Vulnerabilities rating"></amp-img>
          </div>
          <br>
          <p>
            Status badges credit:
            <ul>
              <li>Continous integration (CI) by TravisCI,</li>
              <li>Code coverage measurements by codecov.io, and</li>
              <li>The rest measurements by sonarcloud.io.</li>
            </ul>
          </p>
          <hr>
          <h2 id="license">License</h2>
          <p>Seme Framework licensed under MIT version 2.0.</p>

          <h2 id="qna">Question and Answer</h2>
          <p>Feel free to ask me on my <a href="https://instagram.com/drosanda/" target="_blank">instagram</a>, <a href="https://facebook.com/drs11/" target="_blank">facebook</a>, or open an issue on <a href="https://github.com/drosanda/semedocs/issues" target="_blank">github</a>.</p>

          <hr>
          <h2 id="ln">Latest News</h2>
          <p>
            Here is the latest news and updates from Seme Framework creator.
          </p>
          <amp-twitter width="300" height="472" layout="responsive" data-tweetid="1460255506719670273"></amp-twitter>
          <amp-twitter width="300" height="472" layout="responsive" data-tweetid="1416587477251362820"></amp-twitter>
          <amp-twitter width="300" height="472" layout="responsive" data-tweetid="1416582145070362626"></amp-twitter>
          <amp-twitter width="300" height="472" layout="responsive" data-tweetid="1410378130942947329"></amp-twitter>
          <amp-twitter width="300" height="472" layout="responsive" data-tweetid="1407162066142593025"></amp-twitter>
          <amp-twitter width="300" height="472" layout="responsive" data-tweetid="1399759168454549504"></amp-twitter>
          <amp-twitter width="300" height="472" layout="responsive" data-tweetid="1398762793164177408"></amp-twitter>
          <amp-twitter width="300" height="472" layout="responsive" data-tweetid="1394521914538745857"></amp-twitter>
          <amp-twitter width="300" height="472" layout="responsive" data-tweetid="1392853048930619397"></amp-twitter>
        </div>
      </div>
    </div>


    <div class="nav-bottom">
      <div class="nav-bottom-right">
        <nuxt-link to="/credits" class="btn">
          Credits
          <i class="fa fa-chevron-right"></i>
        </nuxt-link>
      </div>
    </div>

  </div>
</div>
</template>
<script>
export default {
  layout: 'default',
  data (){
    return {
      title: 'Seme Framework: PHP Web Framework for Veteran',
      suffix: '',
      description: 'Seme Framework is Web Framework using PHP for building small and medium website, suitable for veteran PHP programmer that know manual way of codes.',
      hsfwork: require('~/static/how-seme-framework-work.png'),
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        }
      ]
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
        "dateCreated": "2021-08-20T22:20:00+07:00",
        "datePublished": "2021-08-20T22:20:00+07:00",
        "dateModified": "2022-03-08T21:19:00+07:00",
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
