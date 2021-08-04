<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink>
          </td>
        </tr>
        <li class=""><NuxtLink to="/4.0.0/">4.0.2</NuxtLink>
        </td>
      </tr>
      <li class="unavailable">Core Class</li>
    </ul>
  </nav>
  <div class="columns">
    <div class="column">
      <div class="content">
        <h1 class="">Core Class</h1>
        <p>
          Seme Framework has ability for extending default class model or controller using Core Class.
          This core class does not refer to Seme Framework main core codes, but this is only a name for a class that extending from default one.
        </p>

        <h2>When do I use this?</h2>
        <p>
          Use this feature when you need globally available methods for each class, e.g. controller class.
        </p>

        <h2>Enable the Core Class</h2>
        <p>
          For enabling the core class, simply edit the Seme Framework Configuration files and then put the class controller file(s) inside <code>app/core</code>.
        </p>

        <h3>Editing the Configuration</h3>
        <p>
          Lets say, the prefix of core class is <code>ji_</code> and then the core controller class is <code>controller</code> and the model class is <code>model</code>.
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
              $core_controller = &#x27;controller&#x27;;
              $core_model = &#x27;model&#x27;;

              ...
            </highlight-code>
          </div>
        </div>

        <h3>The <code>JI_Controller.php</code> file</h3>
        <p>
          On this example, we will add <code>__json_out</code> method to <code>JI_Controller</code> class.
          Do not forget to add <code>__construct</code> method and <code>index</code> method, because they are required from <NuxtLink to="/4.0.0/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink> abstract class.
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
              /**
               * Main controller: contains about methods and protperties that automtically included after extending in a class
               */
              class JI_Controller extends SENE_Controller
              {
                // required function for triggering parent class
                public function __construct()
                {
                  parent::__construct();
                }

                /**
                 * Output the json formatted string
                 * @param  mixed $dt input object or array
                 * @return string     sting json formatted with its header
                 */
                public function __json_out($dt)
                {
                  $this-&#x3E;lib(&#x27;sene_json_engine&#x27;, &#x27;sene_json&#x27;);
                  $data = array();
                  if (isset($_SERVER[&#x27;SEME_MEMORY_VERBOSE&#x27;])) {
                      $data[&#x22;memory&#x22;] = round(memory_get_usage()/1024/1024, 5).&#x22; MBytes&#x22;;
                  }
                  $data[&#x22;status&#x22;]  = (int) $this-&#x3E;status;
                  $data[&#x22;message&#x22;] = $this-&#x3E;message;
                  $data[&#x22;data&#x22;]  = $dt;
                  $this-&#x3E;sene_json-&#x3E;out($data);
                  die();
                }

                //required function from abstract class
                public function index(){ }
              }
            </highlight-code>
          </div>
        </div>

        <h3>The <code>JI_Model.php</code> file</h3>
        <p>
          And then the source codes of <code>JI_Model.php</code> file.
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
                  public function __encrypt($val)
                  {
                      return &#x27;AES_ENCRYPT(&#x27;.$this-&#x3E;db-&#x3E;esc($val).&#x27;,&#x22;&#x27;.$this-&#x3E;db-&#x3E;enckey.&#x27;&#x22;)&#x27;;
                  }

                  /**
                   * Generates decryption command
                   * @param  [type] $key [description]
                   * @return [type]      [description]
                   */
                  public function __decrypt($key)
                  {
                      return &#x27;AES_DECRYPT(&#x27;.$key.&#x27;,&#x22;&#x27;.$this-&#x3E;db-&#x3E;enckey.&#x27;&#x22;)&#x27;;
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
      <NuxtLink to="/4.0.0/cli/" class="btn">
        <i class="fa fa-chevron-left"></i>
        CLI
      </NuxtLink>
    </div>
    <div class="nav-bottom-right">
      <NuxtLink to="/4.0.0/core/controller/" class="btn">
        Core: Controller
        <i class="fa fa-chevron-right"></i>
      </NuxtLink>
    </div>
  </div>

</div>
</div>
</template>
<script>
export default {
  layout: 'v4.0.0',
  data (){
    return {
      name: 'Seme Framework v4.0.0',
      suffix: ' - Seme Framework 4',
      title: 'Core Class',
      description: 'Learn more about using Core Class in Seme Framework 4.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0',
          text: '4.0.2',
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
        "dateCreated": "2021-07-24T19:03:01+07:00",
        "datePublished": "2021-07-24T19:03:02+07:00",
        "dateModified": "2021-07-24T19:58:32+07:00",
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
