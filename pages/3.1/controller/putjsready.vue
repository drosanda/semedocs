<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.1">3.1.x</NuxtLink></li>
          <li class=""><NuxtLink to="/3.1/controller">Controller</NuxtLink></li>
          <li class="unavailable">putJsReady</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">putJsReady Method</h1>
            <p>
              The <code>putJsReady</code> method will put (injected) javascript code into <a href="https://stackoverflow.com/questions/3698200/window-onload-vs-document-ready#answer-3698214" target="_blank">document ready <i class="fa fa-external-link"></i></a> block of javascript.
              This method can be called in controller or in a view as well.
              This method only work if <NuxtLink to="/3.1/controller/getjsready" target="_blank">getJsReady <i class="fa fa-window-restore"></i></NuxtLink> method called inside document ready block in a <NuxtLink to="/3.1/view/#view_layout_example" target="_blank">View Layout</NuxtLink>.
            </p>

            <h2>Basic Usage</h2>
            <p>
              Here is the basic usage for <code>putJsReady</code> method from <NuxtLink to="/3.1/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink> class.
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
                  $this-&#x3E;putJsReady(string $content_location[, array $data]): $this
                </highlight-code>
              </div>
            </div>

            <h3>Parameters</h3>
            <p>
              This method has 1 required parameter and 1 optional parameter.
            </p>

            <h4>$content_location</h4>
            <p>
              The <code>$content_location</code> value will be referred to a file name under <code>app/view/THEME/</code>.
              This value also can contain path prefix of subdirectory before the filename.
              Learn more about <NuxtLink to="/3.1/view/theme#specific_js">javascript specific view component <i class="fa fa-window-restore"></i></NuxtLink>.
            </p>

            <h4>$data</h4>
            <p>
              The <code>$data</code> value is an array that contained one or more array key value(s).
            </p>

            <h2>Example Usage</h2>
            <p>Here is the basic example for <code>putJsReady</code> method.</p>
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
                  class Home extends SENE_Controller
                  {
                    public function __construct()
                    {
                      parent::__construct();
                      $this-&#x3E;setTheme(&#x27;front&#x27;);
                    }
                    public function index()
                    {
                      ...
                      $this-&#x3E;putJsReady(&#x27;home/home_bottom&#x27;,$data);
                      ...
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>So, the <code>front</code> theme and <code>home_bottom.php</code> layout should be existed on the directory structure.</p>
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
                  app/
                    └── view/
                      └── front/
                        ├── home/
                        └── home_bottom.php
                </highlight-code>
              </div>
            </div>

            <h3>Full Example with $data usage</h3>
            <p>Here is the full example for <code>putJsReady</code> method using $data and its content.</p>
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
                  app/
                  └── controller/
                  | └── home.php
                  └── view/
                   └── front/
                    ├── home/
                    | ├── home.php
                    | └── home_bottom.php
                    └── page/
                      └── col-1.php
                </highlight-code>
              </div>
            </div>

            <p>
              Here is the content of <code>home.php</code> controller file.
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
                  class Home extends SENE_Controller
                  {
                    public function __construct()
                    {
                      parent::__construct();
                      $this-&#x3E;setTheme(&#x27;front&#x27;);
                    }
                    public function index()
                    {
                      $data = array();
                      $data['admin_name'] = 'Daeng';
                      $this-&#x3E;putJsReady(&#x27;home/home_bottom&#x27;,$data);
                      ...
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <p>
              Here is the content of <code>col-1.php</code> layout file.
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
                <highlight-code lang="html">
                  &#x3C;!DOCTYPE html&#x3E;
                  &#x3C;html&#x3E;
                  &#x3C;head&#x3E;
                    &#x3C;title&#x3E;Test&#x3C;/title&#x3E;
                  &#x3C;/head&#x3E;
                  &#x3C;body&#x3E;
                    &#x3C;script&#x3E;
                    $(document).ready(function(e){
                      &#x3C;?php $this-&#x3E;getJsReady(); ?&#x3E;
                    });
                    &#x3C;/script&#x3E;
                  &#x3C;/body&#x3E;
                  &#x3C;/html&#x3E;
                </highlight-code>
              </div>
            </div>

            <p>
              Here is the content of <code>home_bottom.php</code> embedded javascript file.
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
                <highlight-code lang="javascript">
                  alert(&#x27;&#x3C;?php echo $admin_name?&#x3E;&#x27;);
                </highlight-code>
              </div>
            </div>
            <p>
              The <code>$data</code> variable that passed into <code>putJsContent</code> method, has been extracted into native variable depending on key name of array.
            </p>
            <p>
              In this case, the <code>$data[&#x27;admin_name&#x27;]</code> converted into <code>$admin_name</code> if called inside <code>home_bottom.php</code> file.
            </p>

            <div class="message is-info">
              <div class="message-body">
                <p>
                  The <code>putThemeContent</code>, <code>putJsContent</code>, and <code>render</code> method(s) has ability for buffered the html view.
                </p>
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
  layout: 'v3.1',
  data() {
    return {
      name: 'Seme Framework 3.1',
      suffix: ' - Seme Framework 3.1.x',
      title: 'putJsReady Method',
      description: 'Learn more about putJsReady Method from SENE_Controller on Seme Framework 3.1.x',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.1',
          text: '3.1.x'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.1/controller',
          text: 'Controller'
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
        "dateCreated": "2021-11-18T06:17:00+07:00",
        "datePublished": "2021-11-18T06:17:00+07:00",
        "dateModified": "2021-11-18T06:17:00+07:00",
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
