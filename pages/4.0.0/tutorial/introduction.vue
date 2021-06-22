<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/tutorial">Tutorial</NuxtLink></li>
          <li class="unavailable">Introduction</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1 class="">Introduction</h1>
            <p>Before starting the tutorial, you have to do which is described on the <NuxtLink to="/4.0.0/requirements">requirements</NuxtLink> first.</p>
            <p>The goals for this tutorial is, how to interacted with View and Controller. Model interaction will be explored at next tutorial.</p>
            <p>Ok, lets get started!.</p>

            <h2>Hello World!</h2>
            <p>Hello World is often used to illustrate the basic syntax of a programming language.</p>
            <p>But on Seme Framework, Hello World used to checked the basic MVC purpose.</p>

            <h3>Configuration adjustment</h3>
            <p>We assumed that you put Seme Framework which is described In the <NuxtLink to="/4.0.0/downloads">Download &amp; Install</NuxtLink> page.</p>
            <p>After that, start the XAMPP and open <code>http://localhost/seme_framework</code>.</p>

            <h3>Controller</h3>
            <p>On Seme Framework, the default controller named <code>home.php</code> with its class name name <code>Home</code> too.</p>
            <p>
              First, open files located at <code>app/controller/home.php</code>.
              If the file doesnt exists, create one.
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
                <highlight-code lang="php">&#x3C;?php
class Home extends SENE_Controller
{
    public function __construct()
    {
        parent::__construct();
    }
    public function index()
    {
        echo 'Hello World!';
    }
}
                </highlight-code>
              </div>
            </div>

            <p>And then open <code>http://localhost/seme_framework</code>, it should show Hello World!.</p>
            <amp-img layout="responsive" width="774px" height="262px" :src="hlWorld" alt="hello world result"></amp-img>

            <hr>

            <h3>View</h3>
            <p>On this tutorial we will learn how to render the view with theme and passing the data from controller to view passed by controller.</p>

            <div class="message is-success">
              <div class="message-body">
                <p>This tutorial using <a href="https://materializecss.com/" target="_blank">materializeCSS</a> as the CSS Library.</p>
              </div>
            </div>

            <h4>Create Theme: <u>front</u>.</h4>
            <p>Before start, we have to understand the theme directory structure.</p>

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
                <highlight-code lang="plaintext">-| app/
---| view/
-----| front/
-------| theme.json
-------| script.json
-------| page/
---------| col-1.php
-----------| html/
-------------| head.php
              </highlight-code>
              </div>
            </div>
            <p>Check the <code>app/view/front/</code> directory, create directory if does not exists.</p>
            <p>Check the <code>app/view/front/page/</code> directory, create directory if does not exists.</p>
            <p>Check the <code>app/view/front/page/html/</code> directory, create directory if does not exists.</p>

            <h5>File theme.json</h5>
            <p>File theme.json purpose is to define the css that are required for creating the Theme.</p>
            <p>Open files located at <code>app/view/front/theme.json</code>.</p>
            <p>If the file does not exists, create one. And then, put this code on it.</p>


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
[
  &#x22;&#x3C;link rel=\&#x22;stylesheet\&#x22; href=\&#x22;https://fonts.googleapis.com/icon?family=Material+Icons\&#x22; \/&#x3E;&#x22;,
  &#x22;&#x3C;link rel=\&#x22;stylesheet\&#x22; href=\&#x22;https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\&#x22; \/&#x3E;&#x22;
]
                </highlight-code>
              </div>
            </div>

            <h5>File script.json</h5>
            <p>File script.json purpose is to define the javascript that are required for creating the Theme.</p>
            <p>We will define the which scripts to load. Open files located at <code>app/view/front/script.json</code>.</p>
            <p>If the file does not exists, create one. And then, put this code on it.</p>

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
[
  &#x22;&#x3C;script src=\&#x22;https://code.jquery.com/jquery-3.5.1.min.js\&#x22;&#x3E;&#x3C;\/script&#x3E;&#x22;,
  &#x22;&#x3C;script src=\&#x22;https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\&#x22;&#x3E;&#x3C;\/script&#x3E;&#x22;
]
                </highlight-code>
              </div>
            </div>

            <h5>Create HTML Main layout</h5>
            <p>Seme Framework support HTML main layout for rendering html, javascript, and content.</p>
            <p>Open files located at <code>app/view/front/page/col-1.php</code>.</p>
            <p>If the file does not exists, create one. And then, put this code on it.</p>

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
  &#x3C;?php $this-&#x3E;getThemeElement(&#x27;page/html/head&#x27;, $__forward) ?&#x3E;
  &#x3C;body&#x3E;
    &#x3C;?php $this-&#x3E;getThemeContent() ?&#x3E;

  &#x9;&#x3C;!-- jQuery, Bootstrap.js, jQuery plugins and Custom JS code --&#x3E;
  &#x9;&#x3C;?php $this-&#x3E;getJsFooter(); ?&#x3E;

  &#x9;&#x3C;!-- Load and execute javascript code used only in this page --&#x3E;
    &#x3C;script&#x3E;
  &#x9;&#x9;$(document).ready(function(e){
  &#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getJsReady(); ?&#x3E;
  &#x9;&#x9;});
  &#x9;&#x9;&#x3C;?php $this-&#x3E;getJsContent(); ?&#x3E;
  &#x9;&#x3C;/script&#x3E;
  &#x3C;/body&#x3E;
&#x3C;/html&#x3E;
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p>There is only one variable can pass through the view from controller.</p>
                <p>So, we have to put any variable that will pass into view in single array.</p>
                <p>In this example we use <code>$data</code> variable in controller.</p>
              </div>
            </div>

            <h5>Separated HTML head</h5>
            <p>Seme Framework support separated layout element for maximizing reusable components.</p>
            <p>To do so open files located at <code>app/view/front/page/html/head.php</code>.</p>
            <p>If the file does not exists, create one. And then, put this code on it.</p>

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
                  &#x3C;head&#x3E;
&#x9;&#x3C;meta charset=&#x22;utf-8&#x22;&#x3E;
&#x9;&#x3C;meta name=&#x22;viewport&#x22; content=&#x22;width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no&#x22;&#x3E;

&#x9;&#x3C;title&#x3E;&#x3C;?=$this-&#x3E;getTitle()?&#x3E;&#x3C;/title&#x3E;

&#x9;&#x3C;meta name=&#x22;description&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getDescription()?&#x3E;&#x22;&#x3E;
&#x9;&#x3C;meta name=&#x22;keyword&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getKeyword()?&#x3E;&#x22;/&#x3E;
&#x9;&#x3C;meta name=&#x22;author&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getAuthor()?&#x3E;&#x22;&#x3E;
&#x9;&#x3C;meta name=&#x22;robots&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getRobots()?&#x3E;&#x22; /&#x3E;

&#x9;&#x3C;!-- Icons --&#x3E;
&#x9;&#x3C;!-- The following icons can be replaced with your own, they are used by desktop and mobile browsers --&#x3E;
&#x9;&#x3C;link rel=&#x22;shortcut icon&#x22; href=&#x22;&#x3C;?=$this-&#x3E;getIcon()?&#x3E;&#x22;&#x3E;
&#x9;&#x3C;!-- END Icons --&#x3E;

&#x9;&#x3C;meta name=&#x22;msapplication-TileColor&#x22; content=&#x22;#353769&#x22;&#x3E;
&#x9;&#x3C;meta name=&#x22;theme-color&#x22; content=&#x22;#353769&#x22;&#x3E;
&#x9;&#x3C;?php $this-&#x3E;getAdditionalBefore()?&#x3E;
&#x9;&#x3C;?php $this-&#x3E;getAdditional()?&#x3E;
&#x9;&#x3C;?php $this-&#x3E;getAdditionalAfter()?&#x3E;
&#x3C;/head&#x3E;
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
<div class="message-body">
              <p>Seme Framework theme engine required these files to work properly:</p>
              <ol>
                <li><code>theme.json</code>,</li>
                <li><code>script.json</code>,</li>
                <li>and a layout <code>page/col-1.php</code> </li>
              </ol>
              <p>So, we have to put any variable that will pass into view in single array.</p>
            </div></div>

            <div class="message is-info">
<div class="message-body">
              <p><code>$data[&#x27;hello&#x27;]</code> from controller, will be auto extracted into <code>$hello</code> variable in view.</p>
              <p>As well as with the other array keys, will be auto extracted.</p>
            </div></div>

            <h5>Create the Content</h5>
            <p>Seme Framework support separated theme content. This content will be rendered on inner main layout.</p>
            <p>To do so, open files located at <code>app/view/front/home/home.php</code>.</p>
            <p>If the file does not exists, create one.</p>
            <p>And then, put this code on it.</p>

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
                  &#x3C;div class=&#x22;container&#x22;&#x3E;
  &#x3C;div class=&#x22;row&#x22;&#x3E;
    &#x3C;div class=&#x22;col m12 s12&#x22;&#x3E;
      &#x3C;div class=&#x22;card rounded preload-any&#x22;&#x3E;
        &#x3C;div class=&#x22;card-content &#x22;&#x3E;
          &#x3C;span class=&#x22;card-title&#x22;&#x3E;&#x3C;?=$hello?&#x3E; passed to view&#x3C;/span&#x3E;
          &#x3C;p&#x3E;This is from view only&#x3C;/p&#x3E;
          &#x3C;br&#x3E;
          &#x3C;div class=&#x22;btn-group&#x22;&#x3E;
            &#x26;nbsp;
          &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                </highlight-code>
              </div>
            </div>

            <h5>Implement on the Controller</h5>
            <p>After creating a theme with its content, now we have to integrating it from controller.</p>
            <p>To do so, open <code>app/controller/home.php</code> and then change the source code with this code:</p>

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
    $this-&#x3E;setTitle(&#x27;Seme Framework Introduction!&#x27;);
    $this-&#x3E;setDescription(&#x22;Congratulation, you have done well.&#x22;);
    $this-&#x3E;setKeyword(&#x27;Seme Framework&#x27;);
    $this-&#x3E;setAuthor(&#x27;Seme Framework&#x27;);

    $data[&#x27;hello&#x27;] = &#x22;this is from controller&#x22;;

    $this-&#x3E;putThemeContent(&#x22;home/home&#x22;,$data); //pass data to view

    $this-&#x3E;loadLayout(&#x22;col-1&#x22;,$data);
    $this-&#x3E;render();
  }
}
                </highlight-code>
              </div>
            </div>
            <h5>Test the Result</h5>
            <p>For testing the result, open <code>http://localhost/seme_framework</code> from browser and then lets we see what we got.</p>
            <amp-img layout="responsive" width="2248px" height="618px" :src="intro6a"></amp-img>

            <hr>

            <h4>Bonus Mission</h4>
            <p>With the main layout that we have created before, we can include and render javascript using Seme Framework.</p>
            <p>For achieving this, first create the file <code>app/view/front/home/home_bottom.php</code>.</p>
            <p>And then, put this code on it.</p>
            <pre><code v-highlight class="javascript">alert(&#x27;This is Hello World from app/view/home/home_bottom.php&#x27;);</code></pre>
            <p>After that, we have to load the home bottom from <code>app/controller/home.php</code>.</p>

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
    $this-&#x3E;setTitle(&#x27;Seme Framework Introduction!&#x27;);
    $this-&#x3E;setDescription(&#x22;Congratulation, you have done well.&#x22;);
    $this-&#x3E;setKeyword(&#x27;Seme Framework&#x27;);
    $this-&#x3E;setAuthor(&#x27;Seme Framework&#x27;);

    $data[&#x27;hello&#x27;] = &#x22;this is from controller&#x22;;

    $this-&#x3E;putThemeContent(&#x22;home/home&#x22;,$data); //pass data to view
    $this-&#x3E;putJsContent(&#x22;home/home_bottom&#x22;,$data); //pass data to view

    $this-&#x3E;loadLayout(&#x22;col-1&#x22;,$data);
    $this-&#x3E;render();
  }
}
                </highlight-code>
              </div>
            </div>

            <p>To test it, open <code>http://localhost/seme_framework</code> using browser.</p>
            <p>It should show an alert, view with loaded CSS, and show H1 with content Hello World from view and using theme.</p>

            <amp-img layout="responsive" width="2178px" height="598px" :src="intro7" alt="screenshot result from bonus task"></amp-img>
            <hr>

          </div>
        </div>
      </div>


      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0.0/tutorial/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Tutorials
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0.0/tutorial/get-data/" class="btn">
            Tutorial: Get Data
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
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
      suffix: ' - Seme Framework v4.0.0 Documentation',
      title: 'Tutorial: Introduction',
      description: 'Learn more about introduction tutorial of Seme Framework version 4.0.0 through this documentation.',
      hlWorld: require('~/assets/img/hello-world.png'),
      intro6a: require('~/assets/img/tutorial/introduction/6a.png'),
      intro7: require('~/assets/img/tutorial/introduction/7.png'),
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/tutorial/',
          text: 'Tutorial',
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
