<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class="unavailable">Controller</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Controller Class</h1>
            <p>
              Controller is a class that inherited from <NuxtLink to="/4.0/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink> and <NuxtLink to="/4.0/core/controller/">its derivatives*</NuxtLink>.
              Also, controller has another requirements before it can used by Seme Framework.
            </p>
            <p>Before going further, we have to find out the condition for Seme Framework to meet its controller requirements.</p>

            <h2>Requirements</h2>
            <p>The following are the conditions when you want to use the Controller class correctly so that it can run properly:</p>

            <h3>Location</h3>
            <p>
              All Controller classes are stored in the <code>app/controller</code> directory.
            </p>

            <h3>Class Inheritance</h3>
            <p>
              The controller class must be <code>extends</code> from <NuxtLink to="/4.0/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink>.
              But, If using <code>* core controller</code>  as parent class, the core controller class must be <code>extends</code> from <NuxtLink to="/4.0/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink>.
            </p>

            <h3>Naming Rules</h3>
            <p>
              The naming of the controller file name and controller class name can only be started by a letter, then followed by letters and or numbers, and/or an underscore.
              The class name and file name must be identical but may not be uppercase or lowercase (not case sensitive)
            </p>
            <h4>Filename Extension</h4>
            <p>
              The controller class file name must be in lower case and the filename suffix is <code>.php</code>.
            </p>

            <h3>Defaults</h3>
            <p>
              The default name of class controller is <code>Home</code>.
              And then, the default method name of class controller is <code>index</code>.
              This default will be used as <em>fallback</em> if URI Request was empty.
            </p>

            <h2>How It Work</h2>
            <p>
              Seme Framework will be loaded a controller by URI request. Typically there is a one-to-one relationship between an URL string and its corresponding controller class/method. The segments in an URI normally follow this pattern:
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
                  example.com/class/method/parameter1/parameter2/.../parameterN
                </highlight-code>
              </div>
            </div>
            <p>
              Or if using directory:
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
                  example.com/directory/class/method/parameter1/parameter2/.../parameterN
                </highlight-code>
              </div>
            </div>
            <p>
              Seme Framework will only load controller with filename and its class name are matched.
              But, Seme Framework has support for <NuxtLink to="/4.0/configuration/routes/">URI Controller Remapping</NuxtLink>.
            </p>

            <h3>The Notfound</h3>
            <p>
              Error 404 or Notfound is a special controller which serves as fallback if the controller has notfound while the controller requirements is not met.
            </p>

            <h2>Error 5xx</h2>
            <p>
              The error 500 or another 5xx codes, ussualy caused by mismatched class name with filename.
              However, this condition can also be caused by an error on source code.
            </p>

            <h2>Code Example</h2>
            <p>
              Lets say, you have extracted Seme Framework on <code>D:\XAMPP\htdocs\seme_framework</code>
            </p>
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
                    └── controller/
                      ├── blog.php
                      └── product/
                        ├── home.php
                        └── detail.php
                </highlight-code>
              </div>
            </div>
            <p>
              Inside controller directory, can contain a directory (folder) or file. But, the directory tree level only support 2 level. So, be wise using the directory structure.
            </p>

            <h3>Another Example</h3>
            <p>
              How if we accessing <code>http://localhost/seme_framework/blog</code> ?
              The answer is, Seme Framework will load controller blog.php as long as the controller requirements is fulfilled.
            </p>

            <h2 id="SENE_Controller">SENE_Controller</h2>
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
                  class Home extends SENE_Controller{
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
            <p>Here is the default source code for notfound controller.</p>

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
                  class Notfound extends SENE_Controller{
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

            <div class="message is-danger">
              <div class="message-body">
                <p><b>Caution</b></p>
                <p>There is necessary to add header information on notfound class, because Seme Framework do not provided Error 404 automatically.</p>
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
                  class Home extends SENE_Controller{
                    public $public_var = &#x27;Yi-Ha!&#x27;;
                    public $__underWear = &#x27;My Private Things&#x27;;
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
                  <th class="has-text-centered">
                    <i>&#x3C;&#x3C;abstract&#x3E;&#x3E;</i>
                    SENE_Controller
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/config/">+# $config: object</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/input/">+# $input: SENE_Input</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <th>
                    <NuxtLink to="/4.0/controller/cdn_url/">+ __construct(): void</NuxtLink>
                  </th>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/cdn_url/">+# cdn_url(): string</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/getadditional/">+# getAdditional(): void</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/getadditionalbefore/">+# getAdditionalBefore(): </NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/getadditionalafter/">+# getAdditionalAfter(): </NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/getauthor/">+# getAuthor(): string</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/getcanonical/">+# getCanonical(): string</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/getcontentlanguage/">+# getContentLanguage(): string</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/getdescription/">+# getDescription(): string</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/geticon/">+# getIcon(): string</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/getjscontent/">+# getJsContent(): void</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/getjsfooter/">+# getJsFooter(): </NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/getjsready/">+# getJsReady(): </NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/getkey/">+# getKey(): mixed</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/getkeyword/">+# getKeyword(): string</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/getlang/">+# getLang(): string</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/getrobots/">+# getRobots(): string</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/getshortcuticon/">+# getShortcutIcon(): string</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/getthemeelement/">+# getThemeElement(): </NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/gettitle/">+# getTitle(): </NuxtLink>
                  </td>
                </tr>

                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/lib/">+# lib(): </NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/load/">+# load(): </NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/loadcss/">+# loadCss(): $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/loadlayout/">+# loadLayout(): $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/putthemecontent/">+# putThemeContent(): $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/putjscontent/">+# putJsContent(): $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/putjsfooter/">+# putJsFooter(): $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/putjsready/">+# putJsReady(): $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/putthemecontent/">+# putThemeContent(): $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/render/">+# render(): void</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/resetthemecontent/">+# resetThemeContent(): $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/session/">+# $session</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/setauthor/">+# setAuthor(): $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/setcanonical/">+# setCanonical(): $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/setcontentlanguage/">+# setContentLanguage():  $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/setdescription/">+# setDescription(): $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/seticon/">+# setIcon():  $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/setkey/">+# setKey():  $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/setkeyword/">+# setKeyword():  $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/setlang/">+# setLang():  $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/setshortcuticon/">+# setShortcutIcon():  $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/settheme/">+# setTheme():  $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/settitle/">+# setTitle():  $this</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NuxtLink to="/4.0/controller/index_method/">+# index():  void</NuxtLink>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <NuxtLink to="/4.0/view/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Download and Installation
          </NuxtLink>
        </div>
        <div class="nav-bottom-right">
          <NuxtLink to="/4.0/controller/cdn_url/" class="btn">
            CDN URL Method
            <i class="fa fa-chevron-right"></i>
          </NuxtLink>
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
      title: 'Controller',
      description: 'Learn more about controller class of Seme Framework version 4 through this documentation.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0',
          text: '4.0'
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
        "dateModified": "2021-07-23T21:58:32+07:00",
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
