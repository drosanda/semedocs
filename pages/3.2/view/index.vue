<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2/">3.2.x</NuxtLink></li>
          <li class="unavailable">View</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">View</h1>
            <p>By Default, Seme Framework loaded <code>app/view/front</code> directory as the default theme view.</p>
            <p>Seme Framework has supported creation of theme for creating structured view and layout.</p>
            <p>This theme also suitable for building small apps that need many themes in one framework.</p>
            <p>Although load view manually is still possible.</p>

            <h2>Loading the View Manually</h2>
            <p>For loading the view, you have to create a view file first and then load it into controller.</p>
            <p>Here is the example:</p>

            <h3>Create the View File</h3>
            <p>First create view file in <code>app/view/template.php</code> and fill it with this example html code.</p>
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
                  &#x3C;html&#x3E;
                  &#x3C;head&#x3E;
                    &#x3C;title&#x3E;Seme Framework Template&#x3C;/title&#x3E;
                  &#x3C;/head&#x3E;
                  &#x3C;body&#x3E;
                    &#x3C;h1&#x3E;Yi-ha this is your first view!&#x3C;/h1&#x3E;
                  &#x3C;/body&#x3E;
                  &#x3C;/html&#x3E;
                </highlight-code>
              </div>
            </div>

            <p>After that, edit the home controller in <code>app/controller/home.php</code> change to this example.</p>
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
                      $this-&#x3E;view(&#x27;template&#x27;); //means loaded app/view/template.php file
                      $this-&#x3E;render(); //this function allow to show view to browser
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Load the view file and render the web page by opened the controller file through uri browser.
              Assuming the <code>base_url</code> value is <code>localhost/seme_framework/</code>.
              So, we have to open the address from browser.
              And then open <code>localhost/seme_framework/</code> and see the view.
            </p>

            <h2>Passing values to View</h2>
            <p>
              Seme Framework has supported passing variable from controller to view. Since the framework only allowed 1 parameter data to pass, so we can use array for populating values.
            </p>

            <h3>Modify the View File</h3>
            <p>First modify the view file that we create before in <code>app/view/template.php</code> and fill it with this example code. We can change the title on html page by using this example code.</p>
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
                  &#x3C;html&#x3E;
                  &#x3C;head&#x3E;
                    &#x3C;title&#x3E;&#x3C;?php echo $title; ?&#x3E;&#x3C;/title&#x3E;
                  &#x3C;/head&#x3E;
                  &#x3C;body&#x3E;
                    &#x3C;h1&#x3E;&#x3C;?php echo $content; ?&#x3E;&#x3C;/h1&#x3E;
                    &#x3C;ul&#x3E;
                      &#x3C;?php foreach($members as $m){ ?&#x3E;
                        &#x3C;li&#x3E;&#x3C;?php echo $m; ?&#x3E;&#x3C;/li&#x3E;
                      &#x3C;?php } ?&#x3E;
                    &#x3C;/ul&#x3E;
                  &#x3C;/body&#x3E;
                  &#x3C;/html&#x3E;
                </highlight-code>
              </div>
            </div>

            <p>
              After that, edit the home controller in <code>app/controller/home.php</code> change to this example. We declare the <code>$data</code> variable as array, and then put all values you want to pass to <code>$data</code> variable with this array key.
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
                  class Home extends SENE_Controller{
                    public function __construct(){
                      parent::__construct();
                    }
                    public function index(){
                      $this-&#x3E;view(&#x27;template&#x27;); //means loaded app/view/template.php file
                      $this-&#x3E;render(); //this function allow to show view to browser
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>In controller, array key of <code>$data</code> variable will be plain variable when in view mode. For example <code>$data['content']</code> will be <code>$content</code> if we want to echoing in view. Visit the web page by opened through browser and see what happened.</p>

            <h3>What if we pass the array values</h3>
            <p>We can pass any type of values such as array, array of object, integer, string, etc. But we must provide the way how to view of any type exactly is.</p>

            <h2>Theme and Layout</h2>
            <p>The theme is a directory that related between <code>app/view/[skin_name]</code> with <code>skin/[skin_name]</code>. In app/view/[skin_name] is the view that can be loaded by controller. But if you want put your CSS and JS related to skin, you can put in /skin/[skin_name]. The layout is a complete html file which is wrap the header code, content, and js.</p>

            <h3>Create Theme</h3>
            <p>Navigate to app/view create one folder name it <i>front</i>. And then create new file <code>themes.json</code> and <code>script.json</code>. themes.json contain array of string in JSON format will be loaded in head tag on layout. Same as themes.json, script.json contain about html script tag that loaded just before close body tag in layout. Leave it empty, because the framework only detect a folder in view which is contain script.json and theme.json. Here is the structure of Seme Framework Themes.</p>
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
                  -view/
                  --front/
                  ---themes.json
                  ---script.json
                  ---page/
                  ----col-1.php
                  ----col-2-left.php
                  ----html/
                  -----head.php
                  -----header.php
                  -----topbar.php
                  -----footer.php
                  -----sidemenu.php
                  skin/
                  -front/
                  --css
                  --js
                  --img
                </highlight-code>
              </div>
            </div>

            <p>
              Create new folder <i>page</i> under <code>app/view/front</code> and then create layout file with php extension, name it <code>col-1.php</code>.
              Then use this code.
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
                  &#x3C;html lang=&#x22;en&#x22;&#x3E;
                  &#x3C;head&#x3E;
                    &#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/html/head&#x22;,$__forward); ?&#x3E;
                  &#x3C;/head&#x3E;
                  &#x3C;body&#x3E;
                    &#x3C;?php $this-&#x3E;getThemeElement(&#x27;page/html/topbar&#x27;,$__forward); ?&#x3E;
                    &#x3C;div class=&#x22;container&#x22;&#x3E;
                      &#x3C;div class=&#x22;row&#x22;&#x3E;
                        &#x3C;div class=&#x22;col-md-12&#x22;&#x3E;
                          &#x3C;?php $this-&#x3E;getThemeContent(); ?&#x3E;
                        &#x3C;/div&#x3E;
                      &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;?php $this-&#x3E;getThemeElement(&#x27;page/html/footer&#x27;,$__forward); ?&#x3E;

                    &#x3C;?php $this-&#x3E;getJsFooter(); ?&#x3E;
                    &#x3C;script&#x3E;
                      &#x3C;?php $this-&#x3E;getJsContent(); ?&#x3E;
                      $(document).ready(function(e){
                      &#x3C;?php $this-&#x3E;getJsReady(); ?&#x3E;
                      });
                    &#x3C;/script&#x3E;
                  &#x3C;/body&#x3E;
                  &#x3C;/html&#x3E;
                </highlight-code>
              </div>
            </div>
            <h3>Loading Layout</h3>
            <p>
              After theme is set, now start load themes in our controller.
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
                  class Home extends SENE_Controller{
                    public function __construct(){
                    parent::__construct();
                      $this-&#x3E;setTheme(&#x27;front&#x27;); //means load default for view app/view/front
                    }
                    private function __getMembers(){
                      $members = array();
                      $members[] = &#x27;Daeng&#x27;;
                      $members[] = &#x27;Andi&#x27;;
                      $members[] = &#x27;Reza&#x27;;
                      return $members;
                    }
                    public function index(){
                      $data = array();
                      $data[&#x27;title&#x27;] = &#x27;EyeShield21 Yi Ha!&#x27;;
                      $data[&#x27;content&#x27;] = &#x27;This content are from controller, our member is:&#x27;;
                      $data[&#x27;members&#x27;] = $this-&#x3E;__getMembers(); //obtained data from private function
                      $this-&#x3E;putThemeContent(&#x27;home/home&#x27;,$data); //pass $data to view
                      $this-&#x3E;loadLayout(&#x27;col-1&#x27;,$data); //must executed before render
                      $this-&#x3E;render(); //this function allow to show view to browser
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Thats it.
            </p>
          </div>
        </div>

      </div>
      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/3.2/mode/where/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Model where
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/3.2/view/base_url/" class="btn">
            base_url
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'v3.2',
  data() {
    return {
      name: 'Seme Framework v3.2.5',
      suffix: ' - Seme Framework 3.2.5',
      title: 'View',
      description: 'Learn more about using View concept from Seme Framework version 4.0.0',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2',
          text: '3.2.x',
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
        "dateCreated": "2020-06-11T10:12:00+07:00",
        "datePublished": "2020-06-11T10:12:00+07:00",
        "dateModified": "2021-07-18T12:57:17+07:00",
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
