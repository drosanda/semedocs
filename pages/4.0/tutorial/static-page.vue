<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/tutorial">Tutorial</NuxtLink></li>
          <li class="unavailable">Static Page</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Create Static Page in Seme Framework</h1>
            <p><em>Note: This tutorial assumes you&rsquo;ve downloaded and installed the Seme Framework in your development environment with correct configuration.</em></p>
            <h2>Prepare your environment</h2>
            <p>Development environment is the first step before we can run Seme Framework on your computer. Depends on what operating system (OS) that you have like Windows, Mac, or Linux this will have different action that we need to do. But, on this tutorial guide I will assume using Windows as operating system. Then, you need to download install XAMPP, you can skip this part if you already have XAMPP installed. After that, we need Git to be installed on your computer to download Seme Framework, you can skip this if you already have. Also you need text editor like VSCode. After all of that, we can proceed to next step.</p>
            <h3>Run the XAMPP</h3>
            <p>We use XAMPP because it was available to Windows, Linux, and then Mac as a software bundle that we can download and install manually and its free. After we download the XAMPP, then we installed it then the new menu will be shown in Start Menu called XAMPP Control Panel on start menu (Windows) or from launchpad (Linux / Mac). Click on start button for Apache and MySQL.</p>
            <h3>Download the Seme Framework</h3>
            <p>After git and XAMPP was installed, now we can download the Seme Framework through powershell. Please open powershell (Windows) or we , then type:</p>
            
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
                <highlight-code lang="php">C: #can be skipped on non Windows operating system

cd \xampp\htdocs
git clone git@github.com:drosanda/seme-framework.git seme_framework
                </highlight-code>
              </div>
            </div>
            <p>Now, the Seme Framework was installed inside htdocs folder called seme_framework.</p>
            
            <h3>Check The Seme Framework is Run or Not</h3>
            <p>Open browser like Google Chrome or Firefox, and then fill the address bar with http://localhost/seme_framework. It should be show a line of text like this: "Thank you for using Seme Framework".</p>
            
            <h2>Create a Controller for Static Page</h2>
            <p>After we finished setup the Seme Framework, now we are ready to do some code by creating new controller to handle static page. A controller is simply a class that helps delegate work. It is the glue of your web application.</p>

            <p>For example, when a call is made to:</p>
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
                <highlight-code lang="php">http://example.com/blog/detail/10
                </highlight-code>
              </div>
            </div>

            <p>We might imagine that there is a controller named "blog". The method being called on blog would be "detail". The blog method’s job could be to get the blog with article id 10, and render them on the page. Very often in MVC, you’ll see URL patterns that match:</p>
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
                <highlight-code lang="php">http://example.com/[controller-class]/[controller-method]/[arguments]
                </highlight-code>
              </div>
            </div>
            <p>As URL schemes become more complex, this may change. But for now, this is all we will need to know.</p>
            <p>Create a file at `app/controller/blog.php` with the following code.</p>
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
                <highlight-code lang="php">&lt;?php
class Blog extends \SENE_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this-&gt;setTheme(&apos;front&apos;);
    }
    public function index()
    {
        $data = array();
        $this-&gt;setTitle(&quot;List of Blog Articles&quot;);
        $this-&gt;putThemeContent(&quot;blog/home&quot;, $data);
        $this-&gt;loadLayout(&apos;single_column&apos;, $data);
        $this-&gt;render();
    }
    public function detail($id=&quot;&quot;)
    {
        $data = array();
        $data[&apos;id&apos;] = (int) $id;
        $this-&gt;setTitle(&quot;A Blog Detail with specified ID&quot;);
        $this-&gt;putThemeContent(&quot;blog/detail&quot;, $data);
        $this-&gt;loadLayout(&apos;single_column&apos;, $data);
        $this-&gt;render();
    }
}
                </highlight-code>
              </div>
            </div>
            
            <p>You have created a class named Blog, with a index method and detail method that accepts one argument named $id. The Blog class is extending the SENE_Controller class. This means that the new pages class can access the methods and variables defined in the SENE_Controller class (kero/sine/SENE_Controller.php).</p>
            <p>The controller is what will become the center of every request to your web application. In very technical Seme Framework discussions, it may be referred to as the super object. Like any php class, you refer to it within your controllers as $this. Referring to $this is how you will load model, views, library and generally command the Seme Framework.</p>
            <p>Now you have created your first controller contains 2 methods, it is time to make some basic page template. </p>
            <h2>Web Page Template for View Component</h2>
            <p>We will be creating a web page template called "front". To make the page template is working in Seme Framework, we need to create several files.</p>
            
            <p>Create the a file to load all required css files at app/view/front/theme.json and add the following code:</p>

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
                <highlight-code lang="php">{
    &quot;link&quot;:
    [
      {&quot;rel&quot;: &quot;stylesheet&quot;, &quot;href&quot;: &quot;https://skin-cenah.b-cdn.net/css/bootstrap.min.css&quot;},
      {&quot;rel&quot;: &quot;stylesheet&quot;, &quot;href&quot;: &quot;https://skin-cenah.b-cdn.net/css/plugins.css&quot;},
      {&quot;rel&quot;: &quot;stylesheet&quot;, &quot;href&quot;: &quot;https://skin-cenah.b-cdn.net/css/main.css&quot;},
      {&quot;rel&quot;: &quot;stylesheet&quot;, &quot;href&quot;: &quot;https://skin-cenah.b-cdn.net/css/themes.css&quot;},
      {&quot;rel&quot;: &quot;stylesheet&quot;, &quot;href&quot;: &quot;https://skin-cenah.b-cdn.net/css/themes/erplite.css&quot;}
    ]
}
                </highlight-code>
              </div>
            </div>

            <p>Then, we create create a file to load all required javascript files at app/view/front/script.json and add the following code:</p>
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
                <highlight-code lang="php">{
    &quot;script&quot;:
    [
      {&quot;src&quot;: &quot;https://skin-cenah.b-cdn.net/js/vendor/jquery.min.js&quot;},
      {&quot;src&quot;: &quot;https://skin-cenah.b-cdn.net/js/vendor/bootstrap.min.js&quot;},
      {&quot;src&quot;: &quot;https://skin-cenah.b-cdn.net/js/plugins.js&quot;},
      {&quot;src&quot;: &quot;https://skin-cenah.b-cdn.net/js/app.js&quot;}
    ]
}
                </highlight-code>
              </div>
            </div>

            <p>After we load all javascript and css files, now we need to create a layout file at app/view/front/page/single_column.php and add the following code:</p>
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
                <highlight-code lang="html">&lt;!DOCTYPE html&gt;
&lt;html class=&quot;no-js&quot; lang=&quot;en&quot;&gt;
&#x9;&lt;?php $this-&gt;getThemeElement(&quot;page/html/head&quot;,$__forward); ?&gt;
&#x9;&lt;body&gt;
&#x9;&#x9;&lt;div id=&quot;page-wrapper&quot; class=&quot;page-loading&quot;&gt;
&#x9;&#x9;&#x9;&lt;div class=&quot;preloader themed-background&quot;&gt;
&#x9;&#x9;&#x9;&#x9;&lt;h1 class=&quot;push-top-bottom text-light text-center&quot; &gt;
                    &lt;strong&gt;Seme Framework&lt;/strong&gt;
                    &lt;br&gt;
                    &lt;small&gt;Loading...&lt;/small&gt;
                &lt;/h1&gt;
&#x9;&#x9;&#x9;&#x9;&lt;div class=&quot;inner&quot;&gt;
&#x9;&#x9;&#x9;&#x9;&#x9;&lt;h3 class=&quot;text-light visible-lt-ie10&quot;&gt;&lt;strong&gt;Loading..&lt;/strong&gt;&lt;/h3&gt;
&#x9;&#x9;&#x9;&#x9;&#x9;&lt;div class=&quot;preloader-spinner hidden-lt-ie10&quot;&gt;&lt;/div&gt;
&#x9;&#x9;&#x9;&#x9;&lt;/div&gt;
&#x9;&#x9;&#x9;&lt;/div&gt;
&#x9;&#x9;&#x9;
            &lt;div id=&quot;page-container&quot; class=&quot;sidebar-mini sidebar-visible-lg-mini&quot;&gt;
&#x9;&#x9;&#x9;&#x9;&lt;div id=&quot;main-container&quot;&gt;
&#x9;&#x9;&#x9;&#x9;&#x9;&lt;?php $this-&gt;getThemeContent(); ?&gt;
&#x9;&#x9;&#x9;&#x9;&#x9;&lt;?php $this-&gt;getThemeElement(&quot;page/html/footer&quot;,$__forward); ?&gt;
&#x9;&#x9;&#x9;&#x9;&lt;/div&gt;
&#x9;&#x9;&#x9;&lt;/div&gt;
&#x9;&#x9;&lt;/div&gt;
&#x9;&#x9;&lt;div id=&quot;modal-preloader&quot; class=&quot;modal fade&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-hidden=&quot;true&quot;&gt;
&#x9;&#x9;&#x9;&lt;div class=&quot;modal-dialog slideInDown animated&quot;&gt;
&#x9;&#x9;&#x9;&#x9;&lt;div class=&quot;modal-content&quot; style=&quot;background-color: #000;color: #fff;&quot;&gt;
&#x9;&#x9;&#x9;&#x9;&#x9;&lt;div class=&quot;modal-header text-center&quot; style=&quot;border: none;&quot;&gt;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&lt;h2 class=&quot;modal-title&quot;&gt;&lt;i class=&quot;fa fa-spin fa-refresh&quot;&gt;&lt;/i&gt; Loading...&lt;/h2&gt;
&#x9;&#x9;&#x9;&#x9;&#x9;&lt;/div&gt;
&#x9;&#x9;&#x9;&#x9;&lt;/div&gt;
&#x9;&#x9;&#x9;&lt;/div&gt;
&#x9;&#x9;&lt;/div&gt;
&#x9;&#x9;&lt;?php $this-&gt;getJsFooter(); ?&gt;
&#x9;&#x9;&lt;script&gt;
&#x9;&#x9;&#x9;$(document).ready(function(e){
&#x9;&#x9;&#x9;&#x9;&lt;?php $this-&gt;getJsReady(); ?&gt;
&#x9;&#x9;&#x9;});
&#x9;&#x9;&#x9;&lt;?php $this-&gt;getJsContent(); ?&gt;
&#x9;&#x9;&lt;/script&gt;
&#x9;&lt;/body&gt;
&lt;/html&gt;
                </highlight-code>
              </div>
            </div>

            <p>Now, we are ready to add another html template at app/view/front/page/html/head.php and add the following code:</p>
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
                <highlight-code lang="html">&lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no&quot;&gt;
    &lt;title&gt;&lt;?=$this-&gt;getTitle()?&gt;&lt;/title&gt;
    &lt;meta name=&quot;description&quot; content=&quot;&lt;?=$this-&gt;getDescription()?&gt;&quot;&gt;
    &lt;meta name=&quot;keyword&quot; content=&quot;&lt;?=$this-&gt;getKeyword()?&gt;&quot;/&gt;
    &lt;meta name=&quot;author&quot; content=&quot;&lt;?=$this-&gt;getAuthor()?&gt;&quot;&gt;
    &lt;meta name=&quot;robots&quot; content=&quot;&lt;?=$this-&gt;getRobots()?&gt;&quot; /&gt;
    &lt;link rel=&quot;shortcut icon&quot; href=&quot;&lt;?=$this-&gt;getIcon()?&gt;&quot; /&gt;
    &lt;?php $this-&gt;getAdditionalBefore()?&gt;
    &lt;?php $this-&gt;getAdditional()?&gt;
    &lt;?php $this-&gt;getAdditionalAfter()?&gt;
    &lt;script src=&quot;&lt;?=$this-&gt;cdn_url(&quot;skin/admin/&quot;)?&gt;js/vendor/modernizr.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
                </highlight-code>
              </div>
            </div>

            <p>The head.php file will wrap all html codes under <head></head> tag. This file will be also loaded in single_column.php layout using this code `<?php $this->getThemeElement("page/html/head",$__forward); ?>`. Then, the other file that we will create at app/view/front/page/footer.php and add the following code:</p>
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
                <highlight-code lang="html">&lt;footer class=&quot;clearfix&quot;&gt;
&#x9;&lt;div class=&quot;pull-right&quot;&gt;
&#x9;&#x9;Made with &lt;i class=&quot;fa fa-heart text-danger&quot;&gt;&lt;/i&gt; by &lt;a href=&quot;https://cenah.co.id&quot; target=&quot;_blank&quot;&gt;cenah.co.id&lt;/a&gt;. 
&#x9;&lt;/div&gt;
&#x9;&lt;div class=&quot;pull-left&quot;&gt;
&#x9;&#x9;Seme Framework - version 4 &amp;copy; &lt;?=date(&quot;Y&quot;)?&gt;
&#x9;&lt;/div&gt;
&lt;/footer&gt;
                </highlight-code>
              </div>
            </div>

            <h3>Static page example for Blog controller</h3>
            <p>Earlier you set up a controller for blog with 2 methods inside of that. Now, we are going to create a view for the blog main page first at app/view/front/blog/home.php and add the following code:</p>
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
                <highlight-code lang="html">&lt;div id=&quot;page-content&quot;&gt;
&#x9;&lt;div class=&quot;content-header&quot;&gt;
&#x9;&#x9;&lt;div class=&quot;header-section&quot;&gt;
&#x9;&#x9;&#x9;&lt;h1&gt;
&#x9;&#x9;&#x9;&#x9;&lt;i class=&quot;gi gi-show_big_thumbnails&quot;&gt;&lt;/i&gt; Static Content Example
                &lt;br&gt;
                &lt;small&gt;This is the default content in app/view/front/blog/home.php&lt;/small&gt;
&#x9;&#x9;&#x9;&lt;/h1&gt;
&#x9;&#x9;&lt;/div&gt;
&#x9;&lt;/div&gt;
&#x9;&lt;ul class=&quot;breadcrumb breadcrumb-top&quot;&gt;
&#x9;&#x9;&lt;li&gt;&lt;a href=&quot;&lt;?=base_url()?&gt;&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
&#x9;&#x9;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Blog&lt;/a&gt;&lt;/li&gt;
&#x9;&lt;/ul&gt;
&#x9;&lt;div class=&quot;block full block-alt-noborder&quot;&gt;
&#x9;&#x9;&lt;h3 class=&quot;sub-header text-center&quot;&gt;
            &lt;strong&gt;Static Content Example&lt;/strong&gt; for layout demostration
        &lt;/h3&gt;
&#x9;&#x9;&lt;div class=&quot;row&quot;&gt;
&#x9;&#x9;&#x9;&lt;div class=&quot;col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2&quot;&gt;
&#x9;&#x9;&#x9;&#x9;&lt;article&gt;
&#x9;&#x9;&#x9;&#x9;&#x9;&lt;h1&gt;&lt;a href=&quot;&lt;?=base_url(&apos;blog/detail/&apos;)?&gt;&quot;&gt;First Article&lt;/a&gt;&lt;/h1&gt;
                    &lt;p&gt;First article description&gt;
&#x9;&#x9;&#x9;&#x9;&lt;/article&gt;
                &lt;article&gt;
&#x9;&#x9;&#x9;&#x9;&#x9;&lt;h1&gt;&lt;a href=&quot;&lt;?=base_url(&apos;blog/detail/&apos;)?&gt;&quot;&gt;Second Article&lt;/a&gt;&lt;/h1&gt;
                    &lt;p&gt;Second article description&gt;
&#x9;&#x9;&#x9;&#x9;&lt;/article&gt;
&#x9;&#x9;&#x9;&lt;/div&gt;
&#x9;&#x9;&lt;/div&gt;
&#x9;&lt;/div&gt;
&lt;/div&gt;
                </highlight-code>
              </div>
            </div>

            <p>Then we will create another file at app/view/front/blog/detail.php and add the following code:</p>
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
                <highlight-code lang="html">&lt;div id=&quot;page-content&quot;&gt;
&#x9;&lt;div class=&quot;content-header&quot;&gt;
&#x9;&#x9;&lt;div class=&quot;header-section&quot;&gt;
&#x9;&#x9;&#x9;&lt;h1&gt;
&#x9;&#x9;&#x9;&#x9;&lt;i class=&quot;gi gi-show_big_thumbnails&quot;&gt;&lt;/i&gt; Static Content Example
                &lt;br&gt;
                &lt;small&gt;This is the default content in app/view/front/blog/detail.php&lt;/small&gt;
&#x9;&#x9;&#x9;&lt;/h1&gt;
&#x9;&#x9;&lt;/div&gt;
&#x9;&lt;/div&gt;
&#x9;&lt;ul class=&quot;breadcrumb breadcrumb-top&quot;&gt;
&#x9;&#x9;&lt;li&gt;&lt;a href=&quot;&lt;?=base_url()?&gt;&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
&#x9;&#x9;&lt;li&gt;&lt;a href=&quot;&lt;?=base_url(&apos;blog&apos;)?&gt;&quot;&gt;Blog&lt;/a&gt;&lt;/li&gt;
&#x9;&#x9;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Detail&lt;/a&gt;&lt;/li&gt;
&#x9;&lt;/ul&gt;
&#x9;&lt;div class=&quot;block full block-alt-noborder&quot;&gt;
&#x9;&#x9;&lt;h3 class=&quot;sub-header text-center&quot;&gt;
            &lt;strong&gt;Static Content Example&lt;/strong&gt; for layout demostration
        &lt;/h3&gt;
&#x9;&#x9;&lt;div class=&quot;row&quot;&gt;
&#x9;&#x9;&#x9;&lt;div class=&quot;col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2&quot;&gt;
&#x9;&#x9;&#x9;&#x9;&lt;article&gt;
&#x9;&#x9;&#x9;&#x9;&#x9;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in purus.&lt;/p&gt;
&#x9;&#x9;&#x9;&#x9;&lt;/article&gt;
&#x9;&#x9;&#x9;&lt;/div&gt;
&#x9;&#x9;&lt;/div&gt;
&#x9;&lt;/div&gt;
&lt;/div&gt;
                </highlight-code>
              </div>
            </div>

            <h2>Trying our Code</h2>
            <p>Assuming the Seme Framework was running using XAMPP and installed at c:\xampp\htdocs\seme_framework. So, your URL will be http://localhost/seme_framework. Now, Try to open http://localhost/seme_framework/blog in the web browser. If you see the web page like what we create before, then you have completely finished this tutorial.</p>

            <h2>Troubleshooting</h2>
            <p>Question: I see not found page, what should I do?</p>
            <p>Answer: Please check you base_url configuration at app/config/development.php. Make sure, the base url are exactly same with the installed directory and the development environment. For example, on this case we using XAMPP as development environment then Seme Framework is installed at c:\xampp\htdocs\seme_framework. So, the base_url should be `http://localhost/seme_framework`.</p>


            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/4.0/tutorial/quick-start/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  Tutorial: Get Data
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/4.0/introduction/" class="btn">
                  Uri Routing
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
      title: 'Tutorial: Create Static Page',
      description: 'Learn more how to creating a static page using Seme Framework 4.',
      pcrt: require('~/assets/img/tutorial/basic-api/postman-create.png'),
      pedit: require('~/assets/img/tutorial/basic-api/postman-edit.png'),
      pdel: require('~/assets/img/tutorial/basic-api/postman-delete.png'),
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0',
          text: '4.0'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0/tutorial',
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
    this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
    const items = this.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': "WebPage",
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
        "dateCreated": "2021-07-14T10:12:00+07:00",
        "datePublished": "2021-07-14T10:12:00+07:00",
        "dateModified": "2025-05-12T13:46:00+07:00",
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
