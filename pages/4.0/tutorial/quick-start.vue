<template>
    <div class="section">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul class="breadcrumbs">
            <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
            <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
            <li class=""><NuxtLink to="/4.0/tutorial">Tutorial</NuxtLink></li>
            <li class="unavailable">Quick Start</li>
          </ul>
        </nav>
        <div class="">
          <div class="column">
            <div class="content">
              <h1 class="">Quick Start Guide</h1>
              <p>
                On this quick start guide we will guide you how to use Seme Framework. Start by installing XAMPP, git, and others.
                After that, we will create a new database on phpmyadmin, then create a new table on there.
                Then, we will code how to create a administrator page for that one with its menu.
                Also, we will integrate UI Theme and Implement Datatable with its form to create or update the data as well.
              </p>

              <h2>Prepare your environment</h2>
              <p>
                First thing first is you need to make sure you have Powershell on windows or Terminal on MacOS or Linux.
                secondly, you need to download install  <a href="https://www.apachefriends.org/download.html" target="_blank">XAMPP</a>, you can skip this part if you already have XAMPP installed.
                Then you need <a href="https://git-scm.com/downloads" target="_blank">Git</a> installed on your computer to download Seme Framework.
                Also you need text editor like <a href="https://code.visualstudio.com/download" target="_blank">VSCode</a>.
                After all of that, we can proceed to next step.
              </p>
              <section>

                <h3>Run the XAMPP</h3>
                <p>
                  You can find the XAMPP Control Panel on start menu (Windows) or from launchpad (Linux / Mac).
                  Click on <code>start</code> button for <code>Apache</code> and <code>MySQL</code>.
                </p>

                <h3>Download The Seme Framework</h3>
                <p>
                  After git and XAMPP was installed, now we can download the Seme Framework through powershell.
                  Please open powershell (Windows), then type:
                </p>
                <pre language="shell">
C:
cd \xampp\htdocs
git clone git@github.com:drosanda/seme-framework.git seme_framework
                </pre>

                <p>
                  Now, the Seme Framework was installed inside htdocs folder <code>seme_framework</code>.
                </p>

                <h3>Check The Seme Framework is Run or Not</h3>
                <p>
                  Open browser like Google Chrome or Firefox, and then fill the address bar with http://localhost/seme_framework.
                  It should be show a line of text like this: "Thank you for using Seme Framework".
                </p>

                <h3>The PhpMyAdmin</h3>
                <p>
                  PhpMyAdmin is a free open source software tool used to manage SQL databases that already installed when you using XAMPP.
                  You can open the PhpMyAdmin by opening http://localhost/phpmyadmin in your browser.
                </p>

              </section>

              <h2>Developing The Database</h2>
              <p>
                After we started service for Apache and MySQL, we will create the tables using phpmyadmin, since we will save all data on there.
                On Seme Framework, we don't have feature to create table on the fly (like using table migration or command line interface).
                So, we need to create or develop our own database and tables manually through phpmyadmin.
                But, before that we need to know about the table naming convention. 
              </p>

              <section>
                <h3>Create a database called <code>seme_framework</code></h3>
                <p>
                  Open Google Chrome or Firefox, fill the address bar with <code>localhost/phpmyadmin</code> it should open the phpmyadmin page.
                  Then, create a new database on there and name it <code>seme_framework</code>. After that, select on <code>seme_framework</code> database.
                  Likewise with the data rows in the tables, we can create, modify or delete them using SQL.
                  You can change the name of database later to represent your application.
                </p>
    
                <h3>Table naming convention on Seme Framework</h3>
                <p>
                  All tables on Seme Framework should be created with prefix starts from <code>a_</code> to <code>z_</code>.
                  The <code>a_</code> prefix will indicates the table are on top of hierarchy.
                  it's mean, the table values will be used on another table or in another term that table is working independently.
                  The <code>b_</code> through <code>x_</code> will indicates the table are on middle of hierarchy.
                  The <code>z_</code> prefix will indicates the table are on bottom of hierarchy.
                </p>

                <h4>Table a_pengguna</h4>
                <p>
                  Table a_modules will be hold data for list of administrator users. On that table we will store email, password, and etc.
                  Here is the SQL, you can copy and paste on phpmyadmin sql
                </p>
                <code language="sql">
                  <pre>
SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

DROP TABLE IF EXISTS `a_pengguna`;
CREATE TABLE `a_pengguna` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(64) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `a_pengguna_un` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
SET FOREIGN_KEY_CHECKS=1
                  </pre>
                </code>
                <p>
                  After we created the structure we need to insert a sample data for administrator user. Here is the SQL.
                </p>
                <code language="sql">
                  <pre>
insert into `a_pengguna`( id, username, password, created_at, updated_at)
values( null, 'mimind', md5('admin123*'), NOW(), null);
                    </pre>
                  </code>

                  <h3>How Seme Framework interact with MySQL?</h3>
                  <p>
                    Seme Framework and MySQL will interacted each other using SQL.
                    SQL is structured query language. It is a standard language used by many database management systems.
                    We can use SQL code to create table, modify table or delete table.
                  </p>
                </section>
                
    
                <h2>Understanding of Seme Framework File Structure</h2>
                <p>
                  Seme Framework is a MVC based framework. It has 3 main components. Controller, Model and View.
                  Controller is a place where we put our business logic. Model is a place where we put our database related code.
                  and View is a place where we put our view that contains HTML, CSS, and JavaScript.
                  Also Seme Framework has dedicated file configuration that we can adjusted for our requirement later.
                  Beside of that, Seme Framework can be integrated with external library via composer.
                </p>

                <section>
                  <h3>The Seme Framework File Structure</h3>
                  <p>
                    Here is the Seme Framework file Structure.
                  </p>
                  <pre>
├── app
│   ├── config
│   │   └── development.php
│   ├── core
│   │   ├── ji_controller.php
│   │   └── ji_model.php
│   ├── controller
│   │   └── home.php
│   ├── model
│   │   └── a_pengguna_model.php
│   └── view
│       ├── front
│       │   ├── page
│       │   │   ├── html
│       │   │   │   ├── head.php
│       │   │   │   └── header.php
│       │   │   └── col-1.php
│       │   ├── script.json
│       │   └── theme.json
│       └── admin
│           ├── page
│           │   ├── html
│           │   │   ├── head.php
│           │   │   └── header.php
│           │   └── col-1.php
│           ├── script.json
│           └── theme.json
├── media
├── skin
│   └── front
├── kero
│   ├── lib
│   ├── bin
│   └── sine
└── index.php
                  </pre>
                  
                  <h3>Configuration</h3>
                  <p>
                    The Seme Framework configuration file is located at app/config/development.php. It contains the configuration for database, base_url and other.
                  </p>
                  
                  <h3>Controller</h3>
                  <p>
                    The Seme Framework contoller file is located at app/controller. It contains the logic that will be executed.
                    The execution of controller will be determined by the URL. The controller will be called based on the URL.
                    Here is the pattern of URL.
                  </p>
                  <pre>
http://localhost/seme_framework/controller_class/method/parameter1/parameter2/.../parameterN
                  </pre>
                  
                  <h3>Model</h3>
                  <p>
                    The Seme Framework model is a file that will contains query builder or SQL that related to a table.
                    The model will have name same as the table name with <code>_model.php</code> suffix.
                    Let's say for this example, the table that we have created before is a_pengguna.
                    So, the model will be a_pengguna_model.php.
                    Here is the filename pattern.
                  </p>
                  <pre>
table_name_model.php
                  </pre>
                  
                  <h3>View</h3>
                  <p>
                    The view is contains many html files and 2 json files that will be used to display the application.
                    The pattern of view we split is by point of view. Lets say, in our application there will be general user and administrator user.
                    So, for the view we will splitted it by point of view.
                    Here is the example of directory structure.
                  </p>
                  <pre>
app/view/admin
app/view/front
                  </pre>
                </section>
                
    
                <h2>Create the Administrator Page Layout and Theme</h2>
                <p>
                  On first view we will create from administrator user.
                  On this section, we will create a special theme and layout for administrator page.
                  And will do some codes for this one.
                </p>

                <section>
                  <h3>Create the HTML Layout</h3>
                  <p>
                    First, we will create a main layout of html. This layout will be demonstrated as a template for login page.
                    Todo so, please create a new file in app/view/admin/page/col-1.php and put this code.
                  </p>
                  <pre>
&#x3C;!DOCTYPE html&#x3E;
&#x3C;html class=&#x22;no-js&#x22; lang=&#x22;en&#x22;&#x3E;
&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/html/head&#x22;,$__forward); ?&#x3E;
&#x9;&#x3C;body&#x3E;
&#x9;&#x9;&#x3C;!-- Main Container --&#x3E;
&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeContent(); ?&#x3E;
&#x9;&#x9;&#x3C;!-- Main Container End --&#x3E;
&#x9;&#x9;&#x3C;!-- jQuery, Bootstrap.js, jQuery plugins and Custom JS code --&#x3E;
&#x9;&#x9;&#x3C;?php $this-&#x3E;getJsFooter(); ?&#x3E;
&#x9;&#x9;&#x3C;!-- Load and execute javascript code used only in this page --&#x3E;
&#x9;&#x9;&#x3C;script&#x3E;
&#x9;&#x9;var base_url = &#x27;&#x3C;?=base_url_admin()?&#x3E;&#x27;;
&#x9;&#x9;var Login = function(){
&#x9;&#x9;&#x9;return {
&#x9;&#x9;&#x9;&#x9;init: function(){
&#x9;&#x9;&#x9;&#x9;}
&#x9;&#x9;&#x9;}
&#x9;&#x9;}();
&#x9;&#x9;&#x9;$(document).ready(function(e){
&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getJsReady(); ?&#x3E;
&#x9;&#x9;&#x9;});
&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getJsContent(); ?&#x3E;
&#x9;&#x9;&#x3C;/script&#x3E;
&#x9;&#x3C;/body&#x3E;
&#x3C;/html&#x3E;
                  </pre>

                  <h3>Create the HTML Second Layout</h3>
                  <p>
                    Then we will create the second layout for the admin that can hold main view after login.
                    Todo so, please create a new file in app/view/admin/page/col-2-left.php and put this code.
                  </p>
                  <pre>
&#x3C;!DOCTYPE html&#x3E;
&#x3C;html class=&#x22;no-js&#x22; lang=&#x22;en&#x22;&#x3E;
&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/html/head&#x22;,$__forward); ?&#x3E;
&#x9;&#x3C;body&#x3E;
&#x9;&#x9;&#x3C;!-- Page Wrapper --&#x3E;
&#x9;&#x9;&#x3C;div id=&#x22;page-wrapper&#x22; class=&#x22;page-loading&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- Preloader --&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;preloader themed-background&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;h1 class=&#x22;push-top-bottom text-light text-center&#x22; &#x3E;&#x3C;strong&#x3E;&#x3C;?=$this-&#x3E;config-&#x3E;semevar-&#x3E;app_name;?&#x3E;&#x3C;/strong&#x3E;&#x3C;br&#x3E;&#x3C;small&#x3E;Loading...&#x3C;/small&#x3E;&#x3C;/h1&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;inner&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h3 class=&#x22;text-light visible-lt-ie10&#x22;&#x3E;&#x3C;strong&#x3E;Loading..&#x3C;/strong&#x3E;&#x3C;/h3&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;preloader-spinner hidden-lt-ie10&#x22;&#x3E;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- END Preloader --&#x3E;
&#x9;&#x9;&#x9;&#x3C;div id=&#x22;page-container&#x22; class=&#x22;sidebar-mini sidebar-visible-lg-mini&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Alternative Sidebar --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/html/sidebar_alt&#x22;,$__forward); ?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;!-- END Alternative Sidebar --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Main Sidebar --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/html/sidebar&#x22;,$__forward); ?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;!-- END Main Sidebar --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Main Container --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div id=&#x22;main-container&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Header --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/html/header&#x22;,$__forward); ?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- END Header --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Main Container --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Global Message --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/html/global_message&#x22;,$__forward); ?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Global Message --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeContent(); ?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Main Container End --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Footer --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/html/footer&#x22;,$__forward); ?&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- End Footer --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;!-- End Main Container --&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- End Page Container --&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;!-- End Page Wrapper --&#x3E;
&#x9;&#x9;&#x3C;!-- Foot --&#x3E;
&#x9;&#x9;&#x3C;?php $this-&#x3E;getThemeElement(&#x22;page/html/foot&#x22;,$__forward); ?&#x3E;
&#x9;&#x9;&#x3C;!-- End Foot --&#x3E;
&#x9;&#x9;&#x3C;div id=&#x22;modal-preloader&#x22; class=&#x22;modal fade&#x22; tabindex=&#x22;-1&#x22; role=&#x22;dialog&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;modal-dialog slideInDown animated&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;modal-content&#x22; style=&#x22;background-color: #000;color: #fff;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- Modal Header --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;modal-header text-center&#x22; style=&#x22;border: none;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h2 class=&#x22;modal-title&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-spin fa-refresh&#x22;&#x3E;&#x3C;/i&#x3E; Loading...&#x3C;/h2&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;!-- END Modal Header --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;!-- jQuery, Bootstrap.js, jQuery plugins and Custom JS code --&#x3E;
&#x9;&#x9;&#x3C;?php $this-&#x3E;getJsFooter(); ?&#x3E;
&#x9;&#x9;&#x3C;!-- Load and execute javascript code used only in this page --&#x3E;
&#x9;&#x9;&#x3C;script&#x3E;
&#x9;&#x9;&#x9;var from_user_id = &#x27;&#x27;;
&#x9;&#x9;&#x9;var from_user_nama = &#x27;&#x27;;
&#x9;&#x9;&#x9;var to_user_id = &#x27;&#x27;;
&#x9;&#x9;&#x9;var to_user_nama = &#x27;&#x27;;
&#x9;&#x9;&#x9;var chat_active = 1;
&#x9;&#x9;&#x9;var last_pesan_id = 0;
&#x9;&#x9;&#x9;var iterator = 1;
&#x9;&#x9;&#x9;var base_url = &#x27;&#x3C;?=base_url_admin()?&#x3E;&#x27;;
&#x9;&#x9;&#x9;$(document).ready(function(e){
&#x9;&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getJsReady(); ?&#x3E;
&#x9;&#x9;&#x9;});
&#x9;&#x9;&#x9;&#x3C;?php $this-&#x3E;getJsContent(); ?&#x3E;
&#x9;&#x9;&#x3C;/script&#x3E;
&#x9;&#x3C;/body&#x3E;
&#x3C;/html&#x3E;
                  </pre>

                  <h3>Create the HTML head part</h3>
                  <p>
                    Now we will create html component for hold the head part of html.
                    To do so, please create a new file in views folder named <strong>app/view/admin/page/html/head.php</strong>.
                  </p>

                  <pre>
&#x3C;head&#x3E;
    &#x3C;meta charset=&#x22;utf-8&#x22;&#x3E;
    &#x3C;meta name=&#x22;viewport&#x22; content=&#x22;width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no&#x22;&#x3E;
    &#x3C;title&#x3E;&#x3C;?=$this-&#x3E;getTitle()?&#x3E;&#x3C;/title&#x3E;
    &#x3C;meta name=&#x22;description&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getDescription()?&#x3E;&#x22;&#x3E;
    &#x3C;meta name=&#x22;keyword&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getKeyword()?&#x3E;&#x22;/&#x3E;
    &#x3C;meta name=&#x22;author&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getAuthor()?&#x3E;&#x22;&#x3E;
    &#x3C;meta name=&#x22;robots&#x22; content=&#x22;&#x3C;?=$this-&#x3E;getRobots()?&#x3E;&#x22; /&#x3E;
    &#x3C;!-- Icons --&#x3E;
    &#x3C;!-- The following icons can be replaced with your own, they are used by desktop and mobile browsers --&#x3E;
    &#x3C;link rel=&#x22;shortcut icon&#x22; href=&#x22;&#x3C;?=$this-&#x3E;getIcon()?&#x3E;&#x22; /&#x3E;
    &#x3C;!-- END Icons --&#x3E;
    &#x3C;!-- Stylesheets --&#x3E;
    &#x3C;!-- END Stylesheets --&#x3E;
    &#x3C;?php $this-&#x3E;getAdditionalBefore()?&#x3E;
    &#x3C;?php $this-&#x3E;getAdditional()?&#x3E;
    &#x3C;?php $this-&#x3E;getAdditionalAfter()?&#x3E;
    &#x3C;!-- Modernizr (browser feature detection library) --&#x3E;
    &#x3C;script src=&#x22;&#x3C;?=$this-&#x3E;cdn_url(&#x22;skin/admin/&#x22;)?&#x3E;js/vendor/modernizr.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
&#x3C;/head&#x3E;
                  </pre>

                  <h3>Create the HTML top header component</h3>
                  <p>
                    Now we will create html component for hold the top header component of html layout.
                    To do so, please create a new file in views folder named <strong>app/view/admin/page/html/header.php</strong>.
                  </p>

                  <pre>
&#x3C;?php
&#x9;$admin_foto = &#x27;&#x27;;
&#x9;if(isset($sess-&#x3E;admin-&#x3E;foto))$admin_foto = $sess-&#x3E;admin-&#x3E;foto;
&#x9;if(empty($admin_foto)) $admin_foto = &#x27;media/user-default.png&#x27;;
&#x9;$admin_foto = $this-&#x3E;cdn_url($admin_foto);
?&#x3E;
&#x3C;header class=&#x22;navbar navbar-default&#x22;&#x3E;
&#x9;&#x3C;!-- Left Header Navigation --&#x3E;
&#x9;&#x3C;ul class=&#x22;nav navbar-nav-custom&#x22;&#x3E;
&#x9;&#x9;&#x3C;!-- Main Sidebar Toggle Button --&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x3C;a href=&#x22;javascript:void(0)&#x22; onclick=&#x22;App.sidebar(&#x27;toggle-sidebar&#x27;);this.blur();&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22;fa fa-bars fa-fw&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;!-- END Main Sidebar Toggle Button --&#x3E;
&#x9;&#x9;&#x3C;!-- Template Options --&#x3E;
&#x9;&#x9;&#x3C;!-- Change Options functionality can be found in js/app.js - templateOptions() --&#x3E;
&#x9;&#x9;&#x3C;li class=&#x22;dropdown&#x22; style=&#x22;display:none;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;a href=&#x22;javascript:void(0)&#x22; class=&#x22;dropdown-toggle&#x22; data-toggle=&#x22;dropdown&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22;gi gi-settings&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x3C;ul class=&#x22;dropdown-menu dropdown-custom dropdown-options&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li class=&#x22;dropdown-header text-center&#x22;&#x3E;Header Style&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;btn-group btn-group-justified btn-group-sm&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;javascript:void(0)&#x22; class=&#x22;btn btn-primary&#x22; id=&#x22;options-header-default&#x22;&#x3E;Light&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;javascript:void(0)&#x22; class=&#x22;btn btn-primary&#x22; id=&#x22;options-header-inverse&#x22;&#x3E;Dark&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li class=&#x22;dropdown-header text-center&#x22;&#x3E;Page Style&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;btn-group btn-group-justified btn-group-sm&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;javascript:void(0)&#x22; class=&#x22;btn btn-primary&#x22; id=&#x22;options-main-style&#x22;&#x3E;Default&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;javascript:void(0)&#x22; class=&#x22;btn btn-primary&#x22; id=&#x22;options-main-style-alt&#x22;&#x3E;Alternative&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x3C;/ul&#x3E;
&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;!-- END Template Options --&#x3E;
&#x9;&#x3C;/ul&#x3E;
&#x9;&#x3C;!-- END Left Header Navigation --&#x3E;
&#x9;&#x3C;!-- Search Form --&#x3E;
&#x9;&#x3C;form id=&#x22;fmenu_cari&#x22; action=&#x22;&#x3C;?=base_url_admin(&#x27;cari/&#x27;); ?&#x3E;&#x22; method=&#x22;post&#x22; class=&#x22;navbar-form-custom&#x22; onsubmit=&#x22;return false;&#x22;&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;form-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;input id=&#x22;top-search&#x22; type=&#x22;text&#x22; name=&#x22;keyword&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Cari menu/modul..&#x22;&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;/form&#x3E;
&#x9;&#x3C;!-- END Search Form --&#x3E;
&#x9;&#x3C;!-- Right Header Navigation --&#x3E;
&#x9;&#x3C;ul class=&#x22;nav navbar-nav-custom pull-right&#x22;&#x3E;
&#x9;&#x9;&#x3C;!-- Alternative Sidebar Toggle Button --&#x3E;
&#x9;&#x9;&#x3C;!-- chat toggle --&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- If you do not want the main sidebar to open when the alternative sidebar is closed, just remove the second parameter: App.sidebar(&#x27;toggle-sidebar-alt&#x27;); --&#x3E;
&#x9;&#x9;&#x9;&#x3C;a href=&#x22;javascript:void(0)&#x22; onclick=&#x22;App.sidebar(&#x27;toggle-sidebar-alt&#x27;, &#x27;toggle-other&#x27;);this.blur();&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22;fa fa-comments&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;span id=&#x22;chat-online-count&#x22; class=&#x22;label label-primary label-indicator animation-floating&#x22;&#x3E;0&#x3C;/span&#x3E;
&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;!-- end chat toggle --&#x3E;
&#x9;&#x9;&#x3C;!-- User Dropdown --&#x3E;
&#x9;&#x9;&#x3C;li class=&#x22;dropdown&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;a href=&#x22;javascript:void(0)&#x22; class=&#x22;dropdown-toggle&#x22; data-toggle=&#x22;dropdown&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;img src=&#x22;&#x3C;?=$admin_foto?&#x3E;&#x22; alt=&#x22;avatar&#x22; onerror=&#x22;this.onerror=null;this.src=&#x27;https://seme-framework-storage.b-cdn.net/images/user-default.png&#x27;;&#x22;&#x3E; &#x3C;i class=&#x22;fa fa-angle-down&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x3C;ul class=&#x22;dropdown-menu dropdown-custom dropdown-menu-right&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li class=&#x22;dropdown-header text-center&#x22;&#x3E;Account&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x27;profil&#x27;)?&#x3E;&#x22; title=&#x22;Profil&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22;fa fa-user fa-fw pull-right&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;Profil
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li class=&#x22;divider&#x22;&#x3E;&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x27;logout&#x27;); ?&#x3E;&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-ban fa-fw pull-right&#x22;&#x3E;&#x3C;/i&#x3E; Logout&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x3C;/ul&#x3E;
&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;!-- END User Dropdown --&#x3E;
&#x9;&#x3C;/ul&#x3E;
&#x9;&#x3C;!-- END Right Header Navigation --&#x3E;
&#x3C;/header&#x3E;
                  </pre>

                </section>

              
              </div>
            </div>
          </div>
  
  
          <div class="nav-bottom">
            <div class="nav-bottom-left">
              <nuxt-link to="/4.0/tutorial/" class="btn">
                <i class="fa fa-chevron-left"></i>
                Tutorials
              </nuxt-link>
            </div>
            <div class="nav-bottom-right">
              <nuxt-link to="/4.0/tutorial/get-data/" class="btn">
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
      layout: 'v4.0',
      data (){
        return {
          name: 'Seme Framework 4',
          suffix: ' - Seme Framework 4',
          title: 'Tutorial: Introduction',
          description: 'Learn more about introduction tutorial of Seme Framework 4 through this documentation.',
          hlWorld: require('~/assets/img/hello-world.png'),
          intro6a: require('~/assets/img/tutorial/introduction/6a.png'),
          intro7: require('~/assets/img/tutorial/introduction/7.png'),
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
              url: (process.env.BASE_URL || 'http://localhost:3001')+'/tutorial',
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
          "dateCreated": "2021-08-11T19:52:38+07:00",
          "datePublished": "2021-08-11T19:52:38+07:00",
          "dateModified": "2021-07-25T12:04:00+07:00",
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
  