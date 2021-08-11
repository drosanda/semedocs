<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.2</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/core/">Core</NuxtLink></li>
          <li class="unavailable">model</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Core Model</h1>
            <p>
              Core Model class is the feature of Seme Framework that allowed <code>SENE_Model</code> to be extended or customized like add some methods or some properties.
            </p>

            <h2>When do I use this?</h2>
            <p>
              Use this feature when you need globally available methods for each class, e.g. model class.
            </p>

            <h2>Enable the Core Model</h2>
            <p>
              For enabling the core class, simply edit the Seme Framework Configuration files and then put the class model file inside <code>app/core</code>.
            </p>

            <h3>Editing the Configuration</h3>
            <p>
              Lets say, the prefix of core class is <code>ji_</code> and then the core controller class is <code>model</code>.
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
                  ...

                  /********************************/
                  /* == Core Configuration == */
                  /* register your core class, and put it on: */
                  /*   - app/core/ */
                  /* all var $core_* value in lower case string*/
                  /* @var string */
                  /****************************/
                  $core_prefix = &#x27;ji_&#x27;;
                  $core_controller = &#x27;&#x27;;
                  $core_model = &#x27;model&#x27;;
                  ...
                </highlight-code>
              </div>
            </div>

            <h3>The <code>JI_Model.php</code> file</h3>
            <p>
              On this example, we will add protected <code>__encrypt</code> method to <code>JI_Model</code> class for achieving database column encryption.
              Also we have to add protected <code>__decrypt</code> method to <code>JI_Model</code> class for data decryption.
              Do not forget to add <code>__construct</code> method, because they are required from <code>SENE_Model</code> abstract class.
              Save the file under <code>app/core/ji_model.php</code>.
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
                  &#x3C;?php
                  class JI_Model extends SENE_Model
                  {
                      public function __construct()
                      {
                          parent::__construct();
                      }

                      /**
                       * Generates encryption command
                       * @param  [type] $val [description]
                       * @return [type]      [description]
                       */
                      protected function __encrypt($val)
                      {
                          return &#x27;AES_ENCRYPT(&#x27;.$this-&#x3E;db-&#x3E;esc($val).&#x27;,&#x22;&#x27;.$this-&#x3E;db-&#x3E;enckey.&#x27;&#x22;)&#x27;;
                      }

                      /**
                       * Generates decryption command
                       * @param  [type] $key [description]
                       * @return [type]      [description]
                       */
                      protected function __decrypt($key)
                      {
                          return &#x27;AES_DECRYPT(&#x27;.$key.&#x27;,&#x22;&#x27;.$this-&#x3E;db-&#x3E;enckey.&#x27;&#x22;)&#x27;;
                      }
                  }
                </highlight-code>
              </div>
            </div>

            <h3>How to use</h3>
            <p>
              While creating model class, extends the model class from <code>JI_Model</code> class, not with <code>SENE_Model</code> class.
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
                  &#x3C;?php
                  class A_ApiKey_Model extends JI_Model{
                    var $tbl = &#x27;a_apikey&#x27;;
                    var $tbl_as = &#x27;aak&#x27;;
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                    }
                    ...
                    public function get(){
                      $this-&#x3E;db-&#x3E;select(&#x27;nation_code&#x27;)
                        -&#x3E;select(&#x27;id&#x27;)
                        -&#x3E;select_as($this-&#x3E;__decrypt(&#x22;$this-&#x3E;tbl_as.str&#x22;), &#x22;str&#x22;, 0)
                        -&#x3E;select(&#x27;is_active&#x27;);
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                      $this-&#x3E;db-&#x3E;where(&#x22;is_active&#x22;,1);
                      return $this-&#x3E;db-&#x3E;get(&#x27;&#x27;,0);
                    }
                    ...
                  }
                </highlight-code>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/4.0/core/controller/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  Core: Controller
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/4.0/core/" class="btn">
                  Core
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
  data (){
    return {
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'Core Model',
      description: 'Learn more about core model that extends from SENE_Model class on Seme Framework 4.',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0/core',
          text: 'core'
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
        "dateCreated": "2021-07-24T19:41:00+07:00",
        "datePublished": "2021-07-24T19:42:00+07:00",
        "dateModified": "2021-07-24T20:44:00+07:00",
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
