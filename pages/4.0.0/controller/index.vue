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
      <li class="unavailable">Controller Class</li>
    </ul>
  </nav>
  <div class="columns">
    <div class="column">
      <div class="content">
        <h1 class="">Controller Class</h1>
        <p>Controller is the main actor in Seme Framework life cycle.</p>
        <p>A Controller is simply a class that have file name and class name same as with the requested URI.</p>
        <p>If nothing related to class name, Seme Framework will automatically load filename <code>home.php</code> calling class named <code>Home</code> and its <code>index()</code> method.</p>
        <p>Or just simply, load the <code>notfound</code> class in controller by default.</p>
        <p>Before going further, we have to find out the condition for Seme Framework to meet its controller requirements.</p>
        <h2>Conditions</h2>
        <p>The following are the conditions when you want to use the Controller class correctly so that it can run properly:</p>
        <ul>
          <li>All Controller classes are stored in the <code>app/controller</code> directory,</li>
          <li>The controller class must be <code>extends</code> from <code>SENE_Controller</code> OR</li>
          <li>If using core controller, the core controller class must be <code>extends</code> from <code>SENE_Controller</code>,</li>
          <li>The naming of the controller file name and controller class name can only be started by a letter, then followed by letters and or numbers, and an underscore.</li>
          <li>The controller class file name must be in lower case and file extension is <code>.php</code>.</li>
          <li>The class name and file name must be identical but may not be uppercase or lowercase (not case sensitive)</li>
        </ul>
        <h2>Example</h2>
        <p>Lets say, you have extracted Seme Framework on <code>D:\XAMPP\htdocs\seme_framework</code></p>
        <p>So, if you accessing the <code>http://localhost/seme_framework</code> the Seme Framework will load <code>home.php</code> controller inside <code>app/controller</code>.</p>
        <div class="message is-info">
          <div class="message-body">
            <p>Class <b>home</b> on (<b>app/controller/home.php</b>) file is the default access controller from each URI even in the sub directory.</p>
          </div>
        </div>
        <p>Here is the basic example for a controller structure.</p>
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
              |- controller/
              |-- blog.php
              |-- product/
              |--- home.php
              |--- detail.php
            </highlight-code>
          </div>
        </div>
        <p>
          Inside controller directory, can contain a directory (folder) or file. But, the directory tree level only support 2 level. So, be wise using the directory structure.
        </p>

        <p>How if, we accessing <code>http://localhost/seme_framework/blog</code>?</p>
        <p>The answer is, Seme Framework will load controller blog.php</p>
        <p>Seme Framework will only load controller with filename and its class name are matched.</p>

        <h2>SENE_Controller</h2>
        <p>The SENE_Controller class is basic class for creating controller which contain properties and methods that are required for using Seme Framework properly.</p>

        <h3>Basic Usage</h3>
        <p>Here is some basic usage for creating controller</p>

        <h4>Default Controller</h4>
        <p>Here is the default source code of controller.</p>

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
              class Home extends Sene_Controller{
                public function __construct(){
                  parent::__construct();
                }
                public function index(){
                  echo &#x27;Thankyou for using Seme Framewrok&#x27;;
                }
              }
            </highlight-code>
          </div>
        </div>

        <h4>Notfound Controller</h4>
        <p>Here is the default source code of notfound controller.</p>

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
              class Notfound extends Sene_Controller{
                public function __construct(){
                  parent::__construct();
                }
                public function index(){
                  header(&#x22;HTTP/1.0 404 Not Found&#x22;);
                  echo &#x27;404 Notfound&#x27;;
                }
              }
            </highlight-code>
          </div>
        </div>

        <div class="message is-info">
          <div class="message-body">
            <p>Please make sure your class name are match with filename.</p>
          </div>
        </div>
        <div class="message is-info">
          <div class="message-body">
            <p>Undefined file name will be throw 404 error.</p>
          </div>
        </div>
        <div class="message is-danger">
          <div class="message-body">
            <p><b>Caution</b></p>
            <p>Mismatched classname with filename will be throw 500 error.</p>
          </div>
        </div>

        <h2>Access Methods</h2>
        <p>Seme Framework supported access method for public and private declaration.</p>
        <h3>Private Properties and Methods</h3>
        <p>Seme Framework allow your method in Private or in Protected mode. The Private or Protected mode cant be executed through URI request. Or you can use double underscore (__) means as Private properties or methods.</p>

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
              class Home extends Sene_Controller{
                var $public_var = &#x27;Yi-Ha!&#x27;;
                var $__underWear = &#x27;My Private Things&#x27;;
                public function __construct(){
                  parent::__construct();
                }
                private function __processFile(){
                  return true;
                }
                public function index(){
                  echo &#x27;404 Notfound&#x27;;
                }
              }
            </highlight-code>
          </div>
        </div>
        <div class="message is-info">
          <div class="message-body">
            <p>The private method or private properties on Seme Framework are always prefixed with double underscore.</p>
          </div>
        </div>
        <div class="message is-success">
          <div class="message-body">
            <p>The private method is inaccessible from URI request.</p>
          </div>
        </div>

        <h2>SENE_Controller Class Diagram</h2>
        <p>Here is the technical specification of SENE_Controller class ilustrated by a class diagram.</p>

        <table class="table-bordered">
          <thead>
            <tr>
              <th class="has-text-centered">SENE_Controller</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/config/">+# $config: object</NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/input/">+# $input: SENE_Input</NuxtLink>
              </td>
            </tr>
            <tr>
              <th>
                <NuxtLink to="/4.0.0/controller/cdn_url/">+ __construct(): this</NuxtLink>
              </th>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/cdn_url/">+# cdn_url(): string</NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/getadditional/">+# getAdditional(): void</NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/getadditionalbefore/">+# getAdditionalBefore(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/getadditionalafter/">+# getAdditionalAfter(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/getauthor/">+# getAuthor(): string</NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/getcanonical/">+# getCanonical(): string</NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/getcontentlanguage/">+# getContentLanguage(): string</NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/getdescription/">+# getDescription(): string</NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/geticon/">+# getIcon(): string</NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/getjsfooter/">+# getJsFooter(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/getjsready/">+# getJsReady(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/getkey/">+# getKey(): mixed</NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/getkeyword/">+# getKeyword(): string</NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/getlang/">+# getLang(): string</NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/getrobots/">+# getRobots(): string</NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/getshortcuticon/">+# getShortcutIcon(): string</NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/getthemeelement/">+# getThemeElement(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/gettitle/">+# getTitle(): </NuxtLink>
              </td>
            </tr>

            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/lib/">+# lib(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/load/">+# load(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/loadcss/">+# loadCss(): $this</NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/loadlayout/">+# loadLayout(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/putthemecontent/">+# putThemeContent(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/putjscontent/">+# putJsContent(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/putjsfooter/">+# putJsFooter(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/putjsready/">+# putJsReady(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/putthemecontent/">+# putThemeContent(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/render/">+# render(): void</NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/resetthemecontent/">+# resetThemeContent(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/session/">+# session(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/setauthor/">+# setAuthor(): $this</NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/setcanonical/">+# setCanonical(): $this</NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/setcontentlanguage/">+# setContentLanguage(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/setdescription/">+# setDescription(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/seticon/">+# setIcon(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/setkey/">+# setKey(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/setkeyword/">+# setKeyword(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/setlang/">+# setLang(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/setshortcuticon/">+# setShortcutIcon(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/settheme/">+# setTheme(): </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/4.0.0/controller/settitle/">+# setTitle(): </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>

  </div>

  <div class="nav-bottom">
    <div class="nav-bottom-left">
      <NuxtLink to="/4.0.0/view/" class="btn">
        <i class="fa fa-chevron-left"></i>
        Download and Installation
      </NuxtLink>
    </div>
    <div class="nav-bottom-right">
      <NuxtLink to="/4.0.0/controller/constructor/" class="btn">
        Controller: __construct
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
      title: 'Controller',
      description: 'Learn more about controller class of Seme Framework version 4.0.0 through this documentation.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0/',
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
        "dateCreated": "2021-07-12T22:03:01+07:00",
        "datePublished": "2021-07-12T22:03:02+07:00",
        "dateModified": "2021-07-22T19:04:32+07:00",
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
