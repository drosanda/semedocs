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
SET SQL_MODE = &#x22;NO_AUTO_VALUE_ON_ZERO&#x22;;
SET time_zone = &#x22;+00:00&#x22;;

DROP TABLE IF EXISTS &#x60;a_pengguna&#x60;;
CREATE TABLE &#x60;a_pengguna&#x60; (
  &#x60;id&#x60; int(10) unsigned NOT NULL AUTO_INCREMENT,
  &#x60;username&#x60; varchar(64) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  &#x60;password&#x60; varchar(255) DEFAULT NULL,
  &#x60;created_at&#x60; datetime DEFAULT NULL,
  &#x60;updated_at&#x60; timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (&#x60;id&#x60;),
  UNIQUE KEY &#x60;a_pengguna_un&#x60; (&#x60;username&#x60;)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
SET FOREIGN_KEY_CHECKS=1
                  </pre>
                </code>
                <p>
                  After we created the structure we need to insert a sample data for administrator user. Here is the SQL.
                </p>
                <code language="sql">
                  <pre>
insert into &#x60;a_pengguna&#x60;( id, username, password, created_at, updated_at)
values( null, &#x27;mimind&#x27;, md5(&#x27;admin123*&#x27;), NOW(), null);
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
│   │   ├── admin
│   │   │   ├── login.php
│   │   │   └── home.php
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
│           ├── dashboard
│           │   ├── home.php
│           │   ├── home_modal.php
│           │   └── home_bottom.php
│           ├── login
│           │   ├── home.php
│           │   ├── home_modal.php
│           │   └── home_bottom.php
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
                  <p>
                    Default class name is home.php and the default method is index.
                    So, if the controller_class is not specify on url, it will call the default class.
                    Also, if the controller_class is specify on url, but the method is not specify on url, it will call the default method.
                  </p>
                  
                  <h3>Model</h3>
                  <p>
                    The Seme Framework model is a file that will contains query builder or SQL that related to a table.
                    The model will have name same as the table name with <code>_model.php</code> suffix.
                    Here is the filename pattern for model class.
                  </p>
                  <pre>
table_name_model.php
                  </pre>
                  <p>
                    Let's say for this example, the table that we have created before is a_pengguna.
                    So, the model will be a_pengguna_model.php as well as the class name will be A_Pengguna_Model.
                  </p>
                  
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
                  On this section, we will create a special theme and layout for administrator page that based on Bootstrap 3 Framework.
                  And will do copy paste from each files that we have created on this document.
                </p>

                <section>
                  <h3>Seme Framework Theme Requirements</h3>
                  <p>
                    First we need to create a folder called admin under <strong>app/view</strong>.
                    After that we need to create css loader and javascript loader.
                  </p>
                  <section>
                    <h4>CSS Loader</h4>
                    <p>
                      Please create a file called theme.json under <strong>app/view/admin</strong>.
                      And then copy paste this code.
                    </p>
                    <pre language="json">
{
    &#x22;link&#x22;: [
        {
            &#x22;rel&#x22;: &#x22;stylesheet&#x22;,
            &#x22;href&#x22;: &#x22;https://skin-cenah.b-cdn.net/css/bootstrap.min.css&#x22;
        },
        {
            &#x22;rel&#x22;: &#x22;stylesheet&#x22;,
            &#x22;href&#x22;: &#x22;https://skin-cenah.b-cdn.net/css/plugins.css&#x22;
        },
        {
            &#x22;rel&#x22;: &#x22;stylesheet&#x22;,
            &#x22;href&#x22;: &#x22;https://skin-cenah.b-cdn.net/css/main.css&#x22;
        },
        {
            &#x22;rel&#x22;: &#x22;stylesheet&#x22;,
            &#x22;href&#x22;: &#x22;https://skin-cenah.b-cdn.net/css/themes.css&#x22;
        },
        {
            &#x22;rel&#x22;: &#x22;stylesheet&#x22;,
            &#x22;href&#x22;: &#x22;https://skin-cenah.b-cdn.net/css/themes/erplite.css&#x22;
        }
    ]
}
                    </pre>

                    <h4>Javascript Loader</h4>
                    <p>
                      Please create a file called script.json under <strong>app/view/admin</strong>.
                      And then copy paste this code.
                    </p>
                    <pre language="json">
{
  &#x22;script&#x22;: [
    {
      &#x22;src&#x22;: &#x22;https://skin-cenah.b-cdn.net/js/vendor/jquery.min.js&#x22;
    },
    {
      &#x22;src&#x22;: &#x22;https://skin-cenah.b-cdn.net/js/vendor/bootstrap.min.js&#x22;
    },
    {
      &#x22;src&#x22;: &#x22;https://skin-cenah.b-cdn.net/js/plugins.js?v=0.0.2&#x22;
    },
    {
      &#x22;src&#x22;: &#x22;https://skin-cenah.b-cdn.net/js/app.js&#x22;
    }
  ]
}
                    </pre>
                  </section>
                  
                  <h3>Create the HTML Layout or HTML outer wrapper</h3>
                  <p>
                    The HTML outer wrapper will be used as a template for all the pages.
                    So we can focused on the html content in the future.
                  </p>

                  <section>
                    <h4>Single Column Layout</h4>
                    <p>
                      Single column layout will be demonstrated as a html template layout for login page.
                      To do so, please create a new file in app/view/admin/page/col-1.php and put this code.
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

                    <h4>Dual Column Layout with Menu on Side Left</h4>
                    <p>
                      Then we will create the second layout for the admin that can hold main view after login.
                      In the after login page, the menu will be on the side left of web page.
                      To do so, please create a new file in app/view/admin/page/col-2-left.php and put this code.
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

                    <h4>HTML Component inside Head Tags</h4>
                    <p>
                      As you can see in the previous example, we have added some Javascript code inside the head tag.
                      but, we not defined the html component for that one.
                      To do so, we will create a new file again under <strong>app/view/admin/page/html/</strong> called head.php.
                      Copy paste code below to that file.
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
    &#x3C;script src=&#x22;https://skin.cenah.co.id/js/vendor/modernizr.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
&#x3C;/head&#x3E;
                    </pre>

                  </section>

                  <h3>HTML View Components</h3>
                  <p>
                    After we completed the basic HTML Layout.
                    Now, we will add more components to HTML that visible to user via web page.
                  </p>

                  <section>
                    <h4>Create Top Bar HTML Component</h4>
                    <p>
                      Now we will create html component for hold the top bar.
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

                    <h4>Create Global Message HTML Component</h4>
                    <p>
                      Now we will create html component for hold the top bar.
                      To do so, please create a new file in views folder named <strong>app/view/admin/page/html/header.php</strong>.
                    </p>

                    <pre>                  
&#x3C;div id=&#x22;global_message_danger&#x22; class=&#x22;alert alert-danger&#x22; role=&#x22;alert&#x22; style=&#x22;display:none;&#x22;&#x3E;
    &#x3C;span class=&#x22;glyphicon glyphicon-exclamation-sign&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
    &#x3C;span class=&#x22;sr-only&#x22;&#x3E;Error:&#x3C;/span&#x3E;
    &#x3C;span id=&#x22;global_message_danger_text&#x22;&#x3E;Enter a valid email address&#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div id=&#x22;global_message_info&#x22; class=&#x22;alert alert-info&#x22; role=&#x22;alert&#x22; style=&#x22;display:none;&#x22;&#x3E;
    &#x3C;span class=&#x22;glyphicon glyphicon-exclamation-sign&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
    &#x3C;span class=&#x22;sr-only&#x22;&#x3E;Info:&#x3C;/span&#x3E;
    &#x3C;span id=&#x22;global_message_info_text&#x22;&#x3E;Enter a valid email address&#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div id=&#x22;global_message_success&#x22; class=&#x22;alert alert-success&#x22; role=&#x22;alert&#x22; style=&#x22;display:none;&#x22;&#x3E;
    &#x3C;span class=&#x22;glyphicon glyphicon-exclamation-sign&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
    &#x3C;span class=&#x22;sr-only&#x22;&#x3E;Success:&#x3C;/span&#x3E;
    &#x3C;span id=&#x22;global_message_success_text&#x22;&#x3E;Enter a valid email address&#x3C;/span&#x3E;
&#x3C;/div&#x3E;
                    </pre>

                    <h4>Create Navigation Bar HTML Component</h4>
                    <p>
                      Now we will create html component for navigation bar. The navigation bar will be put as set top of side menu bar.
                      To do so, please create a new file in views folder named <strong>app/view/admin/page/html/header.php</strong>.
                    </p>

                    <pre>                  
&#x3C;nav class=&#x22;navbar navbar-default&#x22;&#x3E;
  &#x3C;div class=&#x22;container-fluid&#x22;&#x3E;
    &#x3C;!-- Brand and toggle get grouped for better mobile display --&#x3E;
    &#x3C;div class=&#x22;navbar-header&#x22;&#x3E;
      &#x3C;button type=&#x22;button&#x22; class=&#x22;navbar-toggle&#x22; data-toggle=&#x22;collapse&#x22; data-target=&#x22;#navbar&#x22; aria-expanded=&#x22;true&#x22; aria-controls=&#x22;navbar&#x22;&#x3E;
        &#x3C;span class=&#x22;sr-only&#x22;&#x3E;Toggle navigation&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;icon-bar&#x22;&#x3E;&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;icon-bar&#x22;&#x3E;&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;icon-bar&#x22;&#x3E;&#x3C;/span&#x3E;
      &#x3C;/button&#x3E;
    &#x3C;/div&#x3E;
    
    &#x3C;!-- Collect the nav links, forms, and other content for toggling --&#x3E;
    &#x3C;div id=&#x22;navbar&#x22; class=&#x22;collapse navbar-collapse&#x22; &#x3E;
      &#x3C;ul class=&#x22;nav navbar-nav&#x22;&#x3E;
        &#x3C;li class=&#x22;active&#x22;&#x3E;
          &#x3C;a href=&#x22;#&#x22; class=&#x22;btn-sidebar-toggle&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-list&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
      &#x3C;/ul&#x3E;
      &#x3C;form id=&#x22;form_module_search&#x22; action=&#x22;&#x3C;?=base_url_admin(&#x22;modules&#x22;)?&#x3E;&#x22; method=&#x22;get&#x22; class=&#x22;navbar-form navbar-left&#x22;&#x3E;
        &#x3C;div class=&#x22;form-group&#x22;&#x3E;
          &#x3C;input id=&#x22;fmsfilter&#x22; name=&#x22;filter&#x22; type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Cari Modul&#x22; minlength=&#x22;0&#x22; /&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;button type=&#x22;submit&#x22; class=&#x22;btn btn-default&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-search&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/button&#x3E;
      &#x3C;/form&#x3E;
      &#x3C;ul class=&#x22;nav navbar-nav navbar-right&#x22;&#x3E;
        &#x3C;li&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-bell-o&#x22;&#x3E;&#x3C;/i&#x3E; Notification &#x3C;label class=&#x22;label label-info&#x22;&#x3E;0&#x3C;/label&#x3E;&#x3C;/a&#x3E;&#x3C;/li&#x3E;
        &#x3C;li class=&#x22;dropdown&#x22;&#x3E;
          &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-toggle&#x22; data-toggle=&#x22;dropdown&#x22; role=&#x22;button&#x22; aria-haspopup=&#x22;true&#x22; aria-expanded=&#x22;false&#x22;&#x3E;&#x3C;?=$sess-&#x3E;admin-&#x3E;nama?&#x3E;  &#x3C;span class=&#x22;caret&#x22;&#x3E;&#x3C;/span&#x3E;&#x3C;/a&#x3E;
          &#x3C;ul class=&#x22;dropdown-menu&#x22;&#x3E;
            &#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x22;profil&#x22;)?&#x3E;&#x22; title=&#x22;View my profile&#x22;&#x3E;Profil&#x3C;/a&#x3E;&#x3C;/li&#x3E;
            &#x3C;li role=&#x22;separator&#x22; class=&#x22;divider&#x22;&#x3E;&#x3C;/li&#x3E;
            &#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x22;logout&#x22;)?&#x3E;&#x22; title=&#x22;Logout &#x3C;?=$this-&#x3E;site_name_admin?&#x3E;&#x22;&#x3E;Logout&#x3C;/a&#x3E;&#x3C;/li&#x3E;
          &#x3C;/ul&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;&#x3C;a id=&#x22;btn-header-show&#x22; href=&#x22;#&#x22; &#x3E;&#x3C;i class=&#x22;fa fa-ravelry&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;/ul&#x3E;
    &#x3C;/div&#x3E;&#x3C;!-- /.navbar-collapse --&#x3E;
  &#x3C;/div&#x3E;&#x3C;!-- /.container-fluid --&#x3E;
&#x3C;/nav&#x3E;
                    </pre>

                    <h4>Create Side Menu HTML Component</h4>
                    <p>
                      Now we will create html component for side menu bar. The purpose of this menu is for listing all modules that existed in our application.
                      To do so, please create a new file in views folder named <strong>app/view/admin/page/html/sidebar.php</strong>.
                    </p>

                    <pre>                  
&#x3C;?php
&#x9;$admin_name = $sess-&#x3E;admin-&#x3E;username ?? &#x27;&#x27;;
&#x9;if(isset($sess-&#x3E;admin-&#x3E;nama)) if(strlen($sess-&#x3E;admin-&#x3E;nama)&#x3E;1) $admin_name = $sess-&#x3E;admin-&#x3E;nama;
&#x9;if(!isset($this-&#x3E;current_page)) $this-&#x3E;current_page = &#x22;&#x22;;
&#x9;if(!isset($this-&#x3E;current_parent)) $this-&#x3E;current_parent = &#x22;&#x22;;
&#x9;$current_page = $this-&#x3E;current_page;
&#x9;$current_parent = $this-&#x3E;current_parent;
&#x9;$parent = array();
&#x9;foreach(($sess-&#x3E;admin-&#x3E;menus-&#x3E;left ?? []) as $key=&#x3E;$v){
&#x9;&#x9;$parent[$v-&#x3E;identifier] = 0;
&#x9;&#x9;if(count($v-&#x3E;childs)&#x3E;0){
&#x9;&#x9;&#x9;foreach($v-&#x3E;childs as $f){
&#x9;&#x9;&#x9;&#x9;if($current_page==$f-&#x3E;identifier){
&#x9;&#x9;&#x9;&#x9;&#x9;$current_page = $v-&#x3E;identifier;
&#x9;&#x9;&#x9;&#x9;&#x9;$parent[$v-&#x3E;identifier] = 1;
&#x9;&#x9;&#x9;&#x9;}
&#x9;&#x9;&#x9;}
&#x9;&#x9;}
&#x9;}
&#x9;$admin_foto = &#x27;&#x27;;
&#x9;if(isset($sess-&#x3E;admin-&#x3E;foto))$admin_foto = $sess-&#x3E;admin-&#x3E;foto;
&#x9;if(empty($admin_foto)) $admin_foto = &#x27;media/user-default.png&#x27;;
&#x9;$admin_foto = $this-&#x3E;cdn_url($admin_foto);
    $admin_logo_url = &#x27;&#x27;;
    if (isset($this-&#x3E;config-&#x3E;semevar-&#x3E;admin_logo) &#x26;&#x26; strlen($this-&#x3E;config-&#x3E;semevar-&#x3E;admin_logo) &#x3E; 4) {
        $admin_logo_url = $this-&#x3E;cdn_url($this-&#x3E;config-&#x3E;semevar-&#x3E;admin_logo);
    }
?&#x3E;
&#x3C;div id=&#x22;sidebar&#x22;&#x3E;
&#x9;&#x3C;!-- Wrapper for scrolling functionality --&#x3E;
&#x9;&#x3C;div id=&#x22;sidebar-scroll&#x22;&#x3E;
&#x9;&#x9;&#x3C;!-- Sidebar Content --&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;sidebar-content&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- Brand --&#x3E;
&#x9;&#x9;&#x9;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(); ?&#x3E;&#x22; class=&#x22;sidebar-brand&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;img src=&#x22;&#x3C;?=$admin_logo_url?&#x3E;&#x22; onerror=&#x22;this.onerror=null;this.src=&#x27;&#x27;;&#x22; style=&#x22;width: 90%;&#x22; /&#x3E;
&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- END Brand --&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- User Info --&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;sidebar-section sidebar-user clearfix sidebar-nav-mini-hide&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;sidebar-user-avatar&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x27;profil&#x27;); ?&#x3E;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;img src=&#x22;&#x3C;?=$admin_foto?&#x3E;&#x22; alt=&#x22;avatar&#x22; onerror=&#x22;this.onerror=null;this.src=&#x27;https://seme-framework-storage.b-cdn.net/images/user-default.png&#x27;;&#x22; /&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;sidebar-user-name&#x22;&#x3E;&#x3C;?=$admin_name; ?&#x3E;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;sidebar-user-links&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x27;profil&#x27;); ?&#x3E;&#x22; data-toggle=&#x22;tooltip&#x22; data-placement=&#x22;bottom&#x22; title=&#x22;Profile&#x22;&#x3E;&#x3C;i class=&#x22;gi gi-user&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x22;logout&#x22;); ?&#x3E;&#x22; data-toggle=&#x22;tooltip&#x22; data-placement=&#x22;bottom&#x22; title=&#x22;Logout&#x22;&#x3E;&#x3C;i class=&#x22;gi gi-exit&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- END User Info --&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- Sidebar Navigation --&#x3E;
&#x9;&#x9;&#x9;&#x3C;ul class=&#x22;sidebar-nav&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li class=&#x22;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x27;&#x27;)?&#x3E;&#x22; class=&#x22; &#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22; sidebar-nav-mini-hide&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22;fa fa-home sidebar-nav-icon&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;span class=&#x22;sidebar-nav-mini-hide&#x22;&#x3E;Dashboard&#x3C;/span&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;li class=&#x22;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;#&#x22; class=&#x22;sidebar-nav-menu &#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22;fa fa-angle-left sidebar-nav-indicator sidebar-nav-mini-hide&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22;fa fa-cog fa-spin sidebar-nav-icon&#x22;&#x3E;&#x3C;/i&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;span class=&#x22;sidebar-nav-mini-hide&#x22;&#x3E;Perusahaan&#x3C;/span&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;ul class=&#x22;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;a href=&#x22;&#x3C;?=base_url_admin(&#x27;perusahaan/master/&#x27;)?&#x3E;&#x22; class=&#x22;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;Data Master Perusahaan
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/ul&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x9;&#x3C;/ul&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- END Sidebar Navigation --&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;!-- END Sidebar Content --&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;!-- END Wrapper for scrolling functionality --&#x3E;
&#x3C;/div&#x3E;
                    </pre>

                    <h4>Create Additional Side Bar</h4>
                    <p>
                      This component was optional, but for now we will create empty html skeleton for future usage.
                      To do so, please create a new file under <strong>app/view/admin/page/html/sidebar_alt.php</strong>
                    </p>

                    <pre>                  
&#x3C;div id=&#x22;sidebar-alt&#x22;&#x3E;
&#x9;&#x3C;!-- Wrapper for scrolling functionality --&#x3E;
&#x9;&#x3C;div id=&#x22;sidebar-alt-scroll&#x22;&#x3E;
&#x9;&#x9;&#x3C;!-- Sidebar Content --&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;sidebar-content&#x22;&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;!-- END Sidebar Content --&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;!-- END Wrapper for scrolling functionality --&#x3E;
&#x3C;/div&#x3E;
                    </pre>

                    <h4>Create Footer HTML Component</h4>
                    <p>
                      This component will show footer that represent a bar on bottom of application.
                      To do so, please create a new file under <strong>app/view/admin/page/html/footer.php</strong>
                    </p>

                    <pre>
&#x3C;footer class=&#x22;clearfix&#x22;&#x3E;
&#x9;&#x3C;div class=&#x22;rainbow pull-right&#x22;&#x3E;
&#x9;&#x9;Made with &#x3C;i class=&#x22;fa fa-heart text-danger&#x22;&#x3E;&#x3C;/i&#x3E; by &#x3C;a href=&#x22;https://cenah.co.id&#x22; target=&#x22;_blank&#x22;&#x3E;cenah.co.id&#x3C;/a&#x3E;. 
&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;div class=&#x22;pull-left&#x22;&#x3E;
&#x9;&#x9;Seme Framework version 4 - Admin &#x26;copy; &#x3C;?=date(&#x22;Y&#x22;)?&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x3C;/footer&#x3E;

                    </pre>

                    <h4>Create Bottom HTML Component</h4>
                    <p>
                      On this component we will put scroll to top button and then the example modal
                      To do so, please create a new file under <strong>app/view/admin/page/html/foot.php</strong>
                    </p>

                    <pre>
&#x3C;!-- Scroll to top link, initialized in js/app.js - scrollToTop() --&#x3E;
&#x3C;a href=&#x22;#&#x22; id=&#x22;to-top&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-angle-double-up&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/a&#x3E;
&#x3C;!-- User Settings, modal which opens from Settings link (found in top right user menu) and the Cog link (found in sidebar user info) --&#x3E;
&#x3C;div id=&#x22;modal-user-settings&#x22; class=&#x22;modal fade&#x22; tabindex=&#x22;-1&#x22; role=&#x22;dialog&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
&#x9;&#x3C;div class=&#x22;modal-dialog&#x22;&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;modal-content&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- Modal Header --&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;modal-header text-center&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;h2 class=&#x22;modal-title&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-pencil&#x22;&#x3E;&#x3C;/i&#x3E; Settings&#x3C;/h2&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- END Modal Header --&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- Modal Body --&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;modal-body&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;form action=&#x22;index.html&#x22; method=&#x22;post&#x22; enctype=&#x22;multipart/form-data&#x22; class=&#x22;form-horizontal form-bordered&#x22; onsubmit=&#x22;return false;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;fieldset&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;legend&#x3E;Vital Info&#x3C;/legend&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label class=&#x22;col-md-4 control-label&#x22;&#x3E;Username&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-8&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p class=&#x22;form-control-static&#x22;&#x3E;Admin&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label class=&#x22;col-md-4 control-label&#x22; for=&#x22;user-settings-email&#x22;&#x3E;Email&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-8&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;email&#x22; id=&#x22;user-settings-email&#x22; name=&#x22;user-settings-email&#x22; class=&#x22;form-control&#x22; value=&#x22;admin@example.com&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label class=&#x22;col-md-4 control-label&#x22; for=&#x22;user-settings-notifications&#x22;&#x3E;Email Notifications&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-8&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label class=&#x22;switch switch-primary&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;checkbox&#x22; id=&#x22;user-settings-notifications&#x22; name=&#x22;user-settings-notifications&#x22; value=&#x22;1&#x22; checked&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;span&#x3E;&#x3C;/span&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/fieldset&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;fieldset&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;legend&#x3E;Password Update&#x3C;/legend&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label class=&#x22;col-md-4 control-label&#x22; for=&#x22;user-settings-password&#x22;&#x3E;New Password&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-8&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;password&#x22; id=&#x22;user-settings-password&#x22; name=&#x22;user-settings-password&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Please choose a complex one..&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;label class=&#x22;col-md-4 control-label&#x22; for=&#x22;user-settings-repassword&#x22;&#x3E;Confirm New Password&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-8&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;password&#x22; id=&#x22;user-settings-repassword&#x22; name=&#x22;user-settings-repassword&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;..and confirm it!&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/fieldset&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;form-group form-actions&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-xs-12 text-right&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-sm btn-default&#x22; data-dismiss=&#x22;modal&#x22;&#x3E;Close&#x3C;/button&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;button type=&#x22;submit&#x22; class=&#x22;btn btn-sm btn-primary&#x22;&#x3E;Save Changes&#x3C;/button&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/form&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;!-- END Modal Body --&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;!-- END User Settings --&#x3E;
                    </pre>

                  </section>

                </section>

                <h2>Login Administrator Implementation</h2>
                <p>
                  Now we will implementation login for administrator point of view.
                  On this section we will adjusting the configuration, creating core classes for controller and model. After that we will continue to creating model, view and controller.
                </p>

                <section>
                  <h3>The Core Classes</h3>
                  <p>
                    The Core classes is intended for put all reusable method or properties. We will create 2 classes. One for Controller and one for Model.
                    And then after that, we will adjust the configuration to load the core classes.
                  </p>
                  <section>
                    <h3>Core Class for Controller</h3>
                    <p>
                      At first step we will create the core class for controller. 
                      This class will extends from SENE_Controller class which is the default controller class from Seme Framework.
                      To do so, we will create new file under <strong>application/core/</strong> folder and name it <strong>JI_Controller.php</strong>.
                    </p>

                    <pre language="php">
&#x3C;?php
/**
 * Core class for all controller
 *   contains general purpose methods that nice to have in all controllers
 *
 * @version 1.0.0
 *
 * @package Core\Controller
 * @since 1.0.0
 */
class JI_Controller extends \SENE_Controller
{
    protected $user_login = false;
    protected $admin_login = false;
    private $session_current = null;
    
    public function __construct()
    {
        parent::__construct();
        $this-&#x3E;session_current_check();
    }

    public function session_current_check()
    {
        $session = $this-&#x3E;session_current;
        if (!is_null($session) &#x26;&#x26; isset($session-&#x3E;user-&#x3E;id) &#x26;&#x26; isset($session-&#x3E;admin-&#x3E;id)) {
            return  $session;
        }

        $session = $this-&#x3E;getKey();
        if (!is_object($session)) {
            $session = new stdClass();
            $session-&#x3E;user = new stdClass();
            $session-&#x3E;admin = new stdClass();
        }
        if (!isset($session-&#x3E;user)) {
            $session-&#x3E;user = new stdClass();
        }
        if (isset($session-&#x3E;user-&#x3E;id)) {
            $this-&#x3E;user_login = true;
        }

        if (!isset($session-&#x3E;admin)) {
            $this-&#x3E;sessions-&#x3E;admin = new stdClass();
        }
        if (isset($session-&#x3E;admin-&#x3E;id)) {
            $this-&#x3E;admin_login = true;
        }
        $this-&#x3E;session_current = $session;

        return $this;
    }

    protected function config_semevar($key, $default=&#x27;&#x27;)
    {
        if (isset($this-&#x3E;config-&#x3E;semevar-&#x3E;{$key})) {
            return $this-&#x3E;config-&#x3E;semevar-&#x3E;{$key};
        } else {
            return $default;
        }
    }

    public function __init()
    {
        $data = array();
        $data[&#x27;sess&#x27;] = $this-&#x3E;session_current;

        return $data;
    }

    public function index() { }
}
                    </pre>

                    <h3>Core Class for Model</h3>
                    <p>
                      At first step we will create the core class for model. 
                      This class will extends from SENE_Model class which is the default model class from Seme Framework.
                      To do so, we will create new file under <strong>application/core/</strong> folder and name it <strong>JI_Model.php</strong>.
                    </p>

                    <pre language="php">
&#x3C;?php
/**
* Define all general method for all tables
*   For class models
*
* @package Core\Model
* @since 1.0
*/
class JI_Model extends \SENE_Model
{
    /** @var string  */
    public $tbl;

    /** @var string  */
    public $tbl_as;

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Insert a row data
     *
     * @param  array   $d   Contain associative array that represent the pair of column and value
     * @return int          Return last ID if succeed, otherwise will return 0
     */
    public function set($d)
    {
        $this-&#x3E;db-&#x3E;insert($this-&#x3E;tbl, $d, 0, 0);
        return $this-&#x3E;db-&#x3E;last_id;
    }

    /**
     * Update a row data by supplied ID
     *
     * @param  int      $id    Positive integer
     * @return boolean         True if succeed, otherwise false
     */
    public function update($id, $d)
    {
        $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;, $id);
        return $this-&#x3E;db-&#x3E;update($this-&#x3E;tbl, $d, 0);
    }

    /**
     * Delete row data by ID
     *
     * @param  int      $id    Positive integer
     * @return boolean         True if succeed, otherwise false
     */
    public function del($id)
    {
        $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;, $id);
        return $this-&#x3E;db-&#x3E;delete($this-&#x3E;tbl);
    }

    /**
     * Get single row data by ID
     *
     * @param  int      $id     Positive integer
     * @return stdClass         Will return single row object, otherwise will return empty object
     */
    public function id($id)
    {
        $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;, $id);
        return $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl, $this-&#x3E;tbl_as)-&#x3E;get_first(&#x27;&#x27;, 0);
    }

    /**
     * Open the database transaction session
     * @return boolean True if succeed, otherwise false
     */
    public function trans_start()
    {
        $r = $this-&#x3E;db-&#x3E;autocommit(0);
        if ($r) {
            return $this-&#x3E;db-&#x3E;begin();
        }
        return false;
    }

    /**
     * Execute &#x60;commit&#x60; SQL command
     * @return boolean True if succeed, otherwise false
     */
    public function trans_commit()
    {
        return $this-&#x3E;db-&#x3E;commit();
    }

    /**
     * Rollback the database transaction session
     * @return boolean True if succeed, otherwise false
     */
    public function trans_rollback()
    {
        return $this-&#x3E;db-&#x3E;rollback();
    }

    /**
     * Finalize the database transaction session
     * @return boolean True if succeed, otherwise false
     */
    public function trans_end()
    {
        return $this-&#x3E;db-&#x3E;autocommit(1);
    }
}
                    </pre>

                    <h3>Load the Core Classes</h3>
                    <p>
                      Now, we will load the core classes by adjusting the configuration on <strong>app/config/development.php</strong>.
                      Please search this text below, and adjust the values.
                    </p>

                    <pre language="php">
$core_prefix = &#x27;ji_&#x27;;
$core_controller = &#x27;controller&#x27;;
$core_model = &#x27;model&#x27;;
                    </pre>

                  </section>

                  <h3>Model and Concern Class</h3>
                  <p>
                    The Concern class is likely with JI_Model class but it specific for current table.
                    So, let's say we want to create a global method only for a_pengguna table then the method will be existed on a_pengguna_concern.php.
                    Why we split up the Concern class? Because we want to make it easier to extend and maintain the method grouped by a table.
                  </p>

                  <section>
                    
                    <h4>Create Concern Class</h4>
                    <p>
                      Now, we will create the concern class for table a_pengguna under <strong>app/model</strong> and save it with <em>a_pengguna_concern.php</em> filename.
                    </p>
                    <pre language="php">
&#x3C;?php
namespace Model;

register_namespace(__NAMESPACE__);
/**
 * Define all general method(s) and constant(s) for a_pengguna table,
 *   can be inherited a Concern class also can be reffered as class constants
 *
 * @version 1.0.0
 *
 * @package Model\Concern
 * @since 1.0.0
 */
class A_Pengguna_Concern extends \JI_Model
{
    public $tbl = &#x27;a_pengguna&#x27;;
    public $tbl_as = &#x27;ap&#x27;;

    public function __construct()
    {
        parent::__construct();
        $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl, $this-&#x3E;tbl_as);
    }

    public function username($username)
    {
        return $this-&#x3E;db
            -&#x3E;from($this-&#x3E;tbl, $this-&#x3E;tbl_as)
            -&#x3E;where(&#x22;$this-&#x3E;tbl_as.username&#x22;, $username, &#x27;AND&#x27;, &#x27;LIKE&#x27;)
            -&#x3E;get_first(&#x27;object&#x27;, 0);
    }
}
                    </pre>

                    <h4>Create Model Class</h4>
                    <p>Now we will create a model inside the <strong>app/model/admin</strong> folder called a_pengguna_model.php.</p>
                    <pre language="php">
&#x3C;?php
namespace Model\Admin;

register_namespace(__NAMESPACE__);
/**
 * Scoped &#x60;admin&#x60; model for &#x60;a_pengguna&#x60; table
 *
 * @version 1.0.0
 *
 * @package Model\Admin
 * @since 1.0.0
 */
class A_Pengguna_Model extends \Model\A_Pengguna_Concern
{

    public function __construct()
    {
        parent::__construct();
    }
}
                    </pre>

                    <h4>Create a new Table</h4>
                    <p>Now we will create a new table called a_pengguna by executing the following SQL command in PhpMyAdmin.</p>
                    <pre language="sql">
SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = &#x22;NO_AUTO_VALUE_ON_ZERO&#x22;;
SET time_zone = &#x22;+00:00&#x22;;

DROP TABLE IF EXISTS &#x60;a_pengguna&#x60;;
CREATE TABLE &#x60;a_pengguna&#x60; (
  &#x60;id&#x60; int(10) unsigned NOT NULL AUTO_INCREMENT,
  &#x60;username&#x60; varchar(64) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  &#x60;password&#x60; varchar(255) DEFAULT NULL,
  &#x60;created_at&#x60; datetime DEFAULT NULL,
  &#x60;updated_at&#x60; timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (&#x60;id&#x60;),
  UNIQUE KEY &#x60;a_pengguna_un&#x60; (&#x60;username&#x60;)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
SET FOREIGN_KEY_CHECKS=1;
                    </pre>

                  </section>
                  
                  <h3>Create View</h3>
                  <p>
                    After creating the model, we will create a view to show the login form and an empty dashboard page after login was success.
                  </p>
                  <section>
                    <h4>Create new layout for login page</h4>
                    <p>
                      Now we will create a new file under <strong>app/view/admin/page/login.php</strong>
                    </p>
                    <pre language="php">
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

                    <h4>Login Form</h4>
                    <p>
                      Now, we will create a login form html. this file will be loaded through the controller and injected into login layout.
                      To create this file, please create new file under <strong>app/view/admin/login/login/home.php</strong>.
                    </p>

                    <pre language="php">
&#x3C;!-- Login Full Background --&#x3E;
&#x3C;!-- For best results use an image with a resolution of 1280x1280 pixels (prefer a blurred image for smaller file size) --&#x3E;
&#x3C;img src=&#x22;https://seme-framework-storage.b-cdn.net/images/background-login-3.jpg&#x22; alt=&#x22;Login Full Background&#x22; class=&#x22;full-bg animation-pulseSlow&#x22;&#x3E;
&#x3C;!-- END Login Full Background --&#x3E;

&#x3C;!-- Login Container --&#x3E;
&#x3C;div id=&#x22;login-container&#x22; class=&#x22;animation-fadeIn&#x22;&#x3E;
    &#x3C;!-- Login Title --&#x3E;
    &#x3C;div class=&#x22;login-title text-center&#x22;&#x3E;
        &#x3C;img src=&#x22;https://seme-framework-storage.b-cdn.net/images/seme-framework-logo.png&#x22; class=&#x22;img-responsive&#x22; /&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;!-- END Login Title --&#x3E;

    &#x3C;!-- Login Block --&#x3E;
    &#x3C;div class=&#x22;block push-bit&#x22;&#x3E;
        &#x3C;div id=&#x22;flogin_info&#x22; class=&#x22;alert alert-info&#x22; role=&#x22;alert&#x22; style=&#x22;&#x3C;?php if(!isset($login_message)) echo &#x27;display:none&#x27;; ?&#x3E;&#x22;&#x3E;&#x3C;?php if(isset($login_message)) echo $login_message; ?&#x3E;&#x3C;/div&#x3E;
        &#x3C;!-- Login Form --&#x3E;
        &#x3C;form action=&#x22;&#x3C;?=base_url_admin(&#x22;login/authentication/&#x22;); ?&#x3E;&#x22; method=&#x22;post&#x22; id=&#x22;form-login&#x22; class=&#x22;form-horizontal form-bordered form-control-borderless&#x22;&#x3E;
            &#x3C;div class=&#x22;form-group&#x22;&#x3E;
                &#x3C;div class=&#x22;col-xs-12&#x22;&#x3E;
                    &#x3C;div class=&#x22;input-group&#x22;&#x3E;
                        &#x3C;span class=&#x22;input-group-addon&#x22;&#x3E;&#x3C;i class=&#x22;gi gi-user&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
                        &#x3C;input type=&#x22;text&#x22; id=&#x22;iusername&#x22; name=&#x22;username&#x22; class=&#x22;form-control input-lg&#x22; placeholder=&#x22;Username&#x22; /&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-group&#x22;&#x3E;
                &#x3C;div class=&#x22;col-xs-12&#x22;&#x3E;
                    &#x3C;div class=&#x22;input-group&#x22;&#x3E;
                        &#x3C;span class=&#x22;input-group-addon&#x22;&#x3E;&#x3C;i class=&#x22;gi gi-asterisk&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
                        &#x3C;input type=&#x22;password&#x22; id=&#x22;ipassword&#x22; name=&#x22;password&#x22; class=&#x22;form-control input-lg&#x22; placeholder=&#x22;Password&#x22;&#x3E;
                        &#x3C;input type=&#x22;hidden&#x22; id=&#x22;ireff&#x22; name=&#x22;reff&#x22; value=&#x22;&#x3C;?=$reff ?? &#x27;&#x27;?&#x3E;&#x22; /&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-group form-actions&#x22;&#x3E;
                &#x3C;div class=&#x22;col-xs-6&#x22;&#x3E;
                    &#x3C;?=$this-&#x3E;config_semevar(&#x27;admin_site_title&#x27;)?&#x3E; &#x3C;label class=&#x22;&#x22; style=&#x22;color: grey; font-weight: lighter; font-size: smaller;&#x22;&#x3E;version &#x3C;?=$this-&#x3E;config_semevar(&#x27;site_version&#x27;)?&#x3E;&#x3C;/label&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;col-xs-6 text-right&#x22;&#x3E;
                    &#x3C;button type=&#x22;submit&#x22; class=&#x22;btn btn-sm btn-primary btn-submit&#x22;&#x3E;Login &#x3C;i id=&#x22;icon-submit&#x22; class=&#x22;fa fa-angle-right&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/button&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/form&#x3E;
        &#x3C;!-- END Login Form --&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;!-- END Login Block --&#x3E;
&#x3C;/div&#x3E;
&#x3C;!-- END Login Container --&#x3E;
                    </pre>

                    <h4>javascript for Login Form</h4>
                    <p>
                      For javascript logic, on Seme Framework need to be put on <strong>_bottom.php</strong> prefix.
                      So, for this case we will create a new file under <strong>app/view/admin/login/home_bottom.php</strong>.
                    </p>

                    <pre language="javascript">
var login_try = 0;
$(function(){ Login.init(); });

function gritter(pesan,judul=&#x22;info&#x22;){
&#x9;$.bootstrapGrowl(pesan, {
&#x9;&#x9;type: judul,
&#x9;&#x9;delay: 3456,
&#x9;&#x9;allow_dismiss: true
&#x9;});
}

$(&#x22;#form-login&#x22;).on(&#x22;submit&#x22;,function(evt){
&#x9;evt.preventDefault();
&#x9;console.log(&#x27;login&#x27;)
&#x9;login_try++;
&#x9;var url = &#x27;&#x3C;?=base_url_admin(&#x27;login/auth&#x27;); ?&#x3E;&#x27;;
&#x9;var fd = {};
&#x9;fd.username = $(&#x22;#iusername&#x22;).val();
&#x9;fd.password = $(&#x22;#ipassword&#x22;).val();
&#x9;if(fd.username.length&#x3C;=3){
&#x9;&#x9;$(&#x22;#iusername&#x22;).focus();
&#x9;&#x9;gritter(&#x22;&#x3C;h4&#x3E;Info&#x3C;/h4&#x3E;&#x3C;p&#x3E;Email belum diisi atau terlalu pendek&#x3C;/p&#x3E;&#x22;,&#x27;info&#x27;);
&#x9;&#x9;return false;
&#x9;}
&#x9;if(fd.password.length&#x3C;=4){
&#x9;&#x9;$(&#x22;#ipassword&#x22;).focus();
&#x9;&#x9;gritter(&#x22;&#x3C;h4&#x3E;Info&#x3C;/h4&#x3E;&#x3C;p&#x3E;Kata sandi terlalu pendek&#x3C;/p&#x3E;&#x22;,&#x27;info&#x27;);
&#x9;&#x9;return false;
&#x9;}
&#x9;NProgress.start();
&#x9;$(&#x22;#iusername&#x22;).prop(&#x22;disabled&#x22;,true);
&#x9;$(&#x22;#ipassword&#x22;).prop(&#x22;disabled&#x22;,true);
&#x9;$(&#x22;.btn-submit&#x22;).prop(&#x22;disabled&#x22;,true);
&#x9;$(&#x22;#icon-submit&#x22;).removeClass(&#x22;fa-chevron-right&#x22;);
&#x9;$(&#x22;#icon-submit&#x22;).addClass(&#x22;fa-circle-o-notch&#x22;);
&#x9;$(&#x22;#icon-submit&#x22;).addClass(&#x22;fa-spin&#x22;);
&#x9;$.post(url,fd).done(function(dt){
&#x9;&#x9;NProgress.set(0.6);
&#x9;&#x9;if(dt.status == 200){
&#x9;&#x9;&#x9;gritter(&#x22;&#x3C;h4&#x3E;Sukses&#x3C;/h4&#x3E;&#x3C;p&#x3E;Harap tunggu sementara mengarahkan ke dasbor&#x3C;/p&#x3E;&#x22;,&#x27;success&#x27;);
&#x9;&#x9;&#x9;setTimeout(function(){
&#x9;&#x9;&#x9;&#x9;NProgress.set(0.7)
&#x9;&#x9;&#x9;},2000);
&#x9;&#x9;&#x9;setTimeout(function(){
&#x9;&#x9;&#x9;&#x9;NProgress.done();
&#x9;&#x9;&#x9;&#x9;window.location =  &#x27;&#x3C;?=base_url_admin(&#x27;&#x27;)?&#x3E;&#x27;;
&#x9;&#x9;&#x9;},3000);
&#x9;&#x9;}else{
&#x9;&#x9;&#x9;$(&#x22;#iusername&#x22;).prop(&#x22;disabled&#x22;,false);
&#x9;&#x9;&#x9;$(&#x22;#ipassword&#x22;).prop(&#x22;disabled&#x22;,false);
&#x9;&#x9;&#x9;$(&#x22;.btn-submit&#x22;).prop(&#x22;disabled&#x22;,false);
&#x9;&#x9;&#x9;$(&#x22;#icon-submit&#x22;).addClass(&#x22;fa-chevron-right&#x22;);
&#x9;&#x9;&#x9;$(&#x22;#icon-submit&#x22;).removeClass(&#x22;fa-circle-o-notch&#x22;);
&#x9;&#x9;&#x9;$(&#x22;#icon-submit&#x22;).removeClass(&#x22;fa-spin&#x22;);
&#x9;&#x9;&#x9;NProgress.done();
&#x9;&#x9;&#x9;gritter(&#x22;&#x3C;h4&#x3E;Gagal&#x3C;/h4&#x3E;&#x3C;p&#x3E;&#x22;+dt.message+&#x22;&#x3C;/p&#x3E;&#x22;,&#x27;danger&#x27;);
&#x9;&#x9;&#x9;setTimeout(function(){
&#x9;&#x9;&#x9;&#x9;$(&#x22;#bsubmit&#x22;).removeClass(&#x22;fa-spin&#x22;);
&#x9;&#x9;&#x9;&#x9;if(login_try&#x3E;2){
&#x9;&#x9;&#x9;&#x9;&#x9;window.location = &#x27;&#x3C;?=base_url_admin(&#x27;login&#x27;)?&#x3E;&#x27;;
&#x9;&#x9;&#x9;&#x9;}
&#x9;&#x9;&#x9;},3000);
&#x9;&#x9;}
&#x9;}).error(function(){
&#x9;&#x9;$(&#x22;#iusername&#x22;).prop(&#x22;disabled&#x22;,false);
&#x9;&#x9;$(&#x22;#ipassword&#x22;).prop(&#x22;disabled&#x22;,false);
&#x9;&#x9;$(&#x22;.btn-submit&#x22;).prop(&#x22;disabled&#x22;,false);
&#x9;&#x9;$(&#x22;#icon-submit&#x22;).addClass(&#x22;fa-chevron-right&#x22;);
&#x9;&#x9;$(&#x22;#icon-submit&#x22;).removeClass(&#x22;fa-circle-o-notch&#x22;);
&#x9;&#x9;$(&#x22;#icon-submit&#x22;).removeClass(&#x22;fa-spin&#x22;);
&#x9;&#x9;gritter(&#x22;&#x3C;h4&#x3E;Error&#x3C;/h4&#x3E;&#x3C;p&#x3E;tidak dapat login sekarang, silahkan coba lagi nanti&#x3C;/p&#x3E;&#x22;,&#x27;warning&#x27;);
&#x9;&#x9;NProgress.done();
&#x9;});
});

                    </pre>

                    <h4>Empty Dashboard Page</h4>
                    <p>
                      After that, we will create an empty dashboard page for future use. This view, will hold the first page after login was success.
                      Please create new file inside <strong>app/view/admin/home/home.php</strong>
                    </p>
                    <pre language="php">
&#x3C;div id=&#x22;page-content&#x22;&#x3E;
&#x9;&#x3C;!-- Static Layout Header --&#x3E;
&#x9;&#x3C;div class=&#x22;content-header&#x22;&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;header-section&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;h1&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;i class=&#x22;gi gi-show_big_thumbnails&#x22;&#x3E;&#x3C;/i&#x3E;Static Layout&#x3C;br&#x3E;&#x3C;small&#x3E;This is the default layout&#x3C;/small&#x3E;
&#x9;&#x9;&#x9;&#x3C;/h1&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;ul class=&#x22;breadcrumb breadcrumb-top&#x22;&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;Admin&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url_admin()?&#x3E;&#x22;&#x3E;Home&#x3C;/a&#x3E;&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;&#x3C;a href=&#x22;&#x3C;?=base_url_admin()?&#x3E;&#x22;&#x3E;Example&#x3C;/a&#x3E;&#x3C;/li&#x3E;
&#x9;&#x3C;/ul&#x3E;
&#x9;&#x3C;!-- END Static Layout Header --&#x3E;
&#x9;
&#x9;&#x3C;!-- Dummy Content --&#x3E;
&#x9;&#x3C;div class=&#x22;block full block-alt-noborder&#x22;&#x3E;
&#x9;&#x9;&#x3C;h3 class=&#x22;sub-header text-center&#x22;&#x3E;&#x3C;strong&#x3E;Dummy Content&#x3C;/strong&#x3E; for layout demostration&#x3C;/h3&#x3E;
&#x9;&#x9;&#x3C;div class=&#x22;row&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;article&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in purus. Mauris tincidunt tincidunt turpis in porta. Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum leo mi nec lectus. Nam commodo turpis id lectus scelerisque vulputate. Integer sed dolor erat. Fusce erat ipsum, varius vel euismod sed, tristique et lectus? Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque?&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Proin rhoncus dui at ligula vestibulum ut facilisis ante sodales! Suspendisse potenti. Aliquam tincidunt sollicitudin sem nec ultrices. Sed at mi velit. Ut egestas tempor est, in cursus enim venenatis eget! Nulla quis ligula ipsum. Donec vitae ultrices dolor? Donec lacinia venenatis metus at bibendum? In hac habitasse platea dictumst. Proin ac nibh rutrum lectus rhoncus eleifend. Sed porttitor pretium venenatis. Suspendisse potenti. Aliquam quis ligula elit. Aliquam at orci ac neque semper dictum. Sed tincidunt scelerisque ligula, et facilisis nulla hendrerit non. Suspendisse potenti. Pellentesque non accumsan orci. Praesent at lacinia dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in purus. Mauris tincidunt tincidunt turpis in porta. Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum leo mi nec lectus. Nam commodo turpis id lectus scelerisque vulputate. Integer sed dolor erat. Fusce erat ipsum, varius vel euismod sed, tristique et lectus? Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque?&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Proin rhoncus dui at ligula vestibulum ut facilisis ante sodales! Suspendisse potenti. Aliquam tincidunt sollicitudin sem nec ultrices. Sed at mi velit. Ut egestas tempor est, in cursus enim venenatis eget! Nulla quis ligula ipsum. Donec vitae ultrices dolor? Donec lacinia venenatis metus at bibendum? In hac habitasse platea dictumst. Proin ac nibh rutrum lectus rhoncus eleifend. Sed porttitor pretium venenatis. Suspendisse potenti. Aliquam quis ligula elit. Aliquam at orci ac neque semper dictum. Sed tincidunt scelerisque ligula, et facilisis nulla hendrerit non. Suspendisse potenti. Pellentesque non accumsan orci. Praesent at lacinia dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in purus.&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/article&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;/div&#x3E;
&#x9;&#x3C;!-- END Dummy Content --&#x3E;
&#x3C;/div&#x3E;
                    </pre>
                  </section>
                  
                  
                  <h3>Controller Class</h3>
                  <p>
                    The Controller class will be taking part as main logic for all activity in our application.
                    We will create several controller classes that represent the login form, authentication method, logout and dashboard page.
                  </p>
                  
                  <section>
                    <h4>Main controller for Administrator Point of View</h4>
                    <p>
                      First we will create a main controller for administrator point of view.
                      Please create a new file under <strong>app/controller/admin/home.php</strong>, and copy paste the  code below.
                    </p>

                    <pre language="php">
&#x3C;?php
/**
* Main Controller Class
*   for Admin
* Mostly for this controller will resulting HTTP Body Content in HTML format
*
* @version 1.0.0
*
* @package Controller\Admin
* @since 1.0.0
*/
class Home extends \JI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this-&#x3E;setTheme(&#x27;admin&#x27;);
    }
    public function index()
    {
        $data = $this-&#x3E;__init();
        if (!$this-&#x3E;admin_login) {
            redir(base_url_admin(&#x27;login&#x27;));

            return false;
        }
        
        $this-&#x3E;setTitle(&#x22;Home Admin&#x22;);
        
        $this-&#x3E;putJsContent(&#x22;home/home_bottom&#x22;, $data);
        $this-&#x3E;putThemeContent(&#x22;home/home&#x22;, $data);

        $this-&#x3E;loadLayout(&#x27;col-2-left&#x27;, $data);
        $this-&#x3E;render();
    }
}
                    </pre>

                    <h4>Login controller for Administrator Point of View</h4>
                    <p>
                      Then we will create a login controller for administrator point of view.
                      Please create a new file under <strong>app/controller/admin/login.php</strong>, and copy paste the code below.
                    </p>

                    <pre language="php">
&#x3C;?php

class Login extends \JI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this-&#x3E;setTheme(&#x27;admin&#x27;);
        $this-&#x3E;load(&#x27;a_pengguna_concern&#x27;);
        $this-&#x3E;load(&#x27;admin/a_pengguna_model&#x27;, &#x27;apm&#x27;);
    }

    private function validate_input($key, $min_length = 3)
    {
        $value = $this-&#x3E;input-&#x3E;request($key, &#x27;&#x27;);
        if (strlen($value) &#x3C;= $min_length) {
            $value = false;
        }

        return $value;
    }

    private function validate_admin_session()
    {
        if (isset($this-&#x3E;admin_login) &#x26;&#x26; $this-&#x3E;admin_login == true) {
            return true;
        }

        return false;
    }

    private function validate_username()
    {
        return $this-&#x3E;validate_input(&#x27;username&#x27;);
    }

    private function validate_password()
    {
        return $this-&#x3E;validate_input(&#x27;password&#x27;);
    }

    private function validate_password_md5($apm, $password)
    {
        if (md5($password) == $apm-&#x3E;password) {
            return true;
        } else {
            return false;
        }
    }

    private function session_current_update($data_initial, $apm)
    {
        $session_current = new stdClass();
        if (!isset($data_initial[&#x27;sess&#x27;]-&#x3E;admin)) {
            $this-&#x3E;session_current_check();
        }

        $data_initial[&#x27;sess&#x27;]-&#x3E;admin = $apm;
        $this-&#x3E;setKey($data_initial[&#x27;sess&#x27;]);

        return $data_initial;
    }

    public function index()
    {
        $data = $this-&#x3E;__init();
        if ($this-&#x3E;validate_admin_session()) {
            redir(base_url_admin(&#x27;login/authorization/&#x27;));

            return true;
        }

        $this-&#x3E;setTitle(&#x27;Login &#x27; . $this-&#x3E;config_semevar(&#x27;admin_site_title_suffix&#x27;));

        $failed_flag = intval($this-&#x3E;input-&#x3E;request(&#x27;failed&#x27;, 0));
        if ($failed_flag &#x3E; 0) {
            $data[&#x27;login_message&#x27;] = &#x27;Invalid username or password&#x27;;
        }

        $this-&#x3E;putThemeContent(&#x22;login/home&#x22;, $data);
        $this-&#x3E;putJsContent(&#x27;login/home_bottom&#x27;, $data);
        $this-&#x3E;loadLayout(&#x27;login&#x27;, $data);
        $this-&#x3E;render();
    }

    public function authentication()
    {
        //init
        $data = array();
        $initial_data = $this-&#x3E;__init();
        if ($this-&#x3E;validate_admin_session() == true) {
            redir(base_url_admin(&#x27;login/authorization/&#x27;));

            return false;
        }

        $username = $this-&#x3E;validate_username();
        if (!$username) {
            redir(base_url_admin(&#x27;login/?failed=1&#x27;));
            return false;
        }

        $password = $this-&#x3E;validate_password();
        if (!$password) {
            redir(base_url_admin(&#x27;login/?failed=2&#x27;));
            return false;
        }

        $apm = $this-&#x3E;apm-&#x3E;username($username);
        if (!isset($apm-&#x3E;id)) {
            redir(base_url_admin(&#x27;login/?failed=3&#x27;));
            return false;
        }

        if (!$this-&#x3E;validate_password_md5($apm, $password)) {
            redir(base_url_admin(&#x27;login/?failed=4&#x27;));
            return false;
        }

        $this-&#x3E;session_current_update($initial_data, $apm);

        redir(base_url_admin(&#x27;login/authorization/&#x27;));
        return true;
    }

    public function authorization()
    {
        $data = $this-&#x3E;__init();
        if ($this-&#x3E;validate_admin_session()) {
            redir(base_url_admin());

            return true;
        } else {
            redir(base_url_admin(&#x27;login&#x27;));

            return false;
        }
    }
}
                    </pre>

                    <h4>Logout Controller for Administrator Point of View</h4>
                    <p>
                      Then we will create a new controller for logout to clear current session.
                      Please create a new file under <strong>app/controller/admin/logout.php</strong>, and copy paste the  code below.
                    </p>

                    <pre language="php">
&#x3C;?php
/**
* Controller Class
*   for Admin
* Main objective of this class is to clear session for admin
*
* @version 1.0.0
*
* @package Controller\Admin
* @since 1.0.0
*/
class Logout extends \JI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this-&#x3E;setTheme(&#x27;admin&#x27;);
    }

    public function index()
    {
        $initial_data = $this-&#x3E;__init();
        if (!isset($initial_data[&#x27;sess&#x27;]-&#x3E;user-&#x3E;admin)) {
            $this-&#x3E;session_current_check();
            $initial_data = $this-&#x3E;__init();
        }
        $initial_data[&#x27;sess&#x27;]-&#x3E;admin = new stdClass();
        $this-&#x3E;login_admin = false;
        $this-&#x3E;setKey($initial_data[&#x27;sess&#x27;]);

        flush();
        redir(base_url_admin(&#x22;login&#x22;), 0, 1);
    }
}
                    </pre>


                  </section>
                  
                  
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
  