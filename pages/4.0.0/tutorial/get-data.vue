<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/tutorial">Tutorial</NuxtLink></li>
          <li class="unavailable">Get data</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Get Data</h1>
            <p>Get Data is most basic example to illustrate how framework getting data from database.</p>
            <p>Get data is part of CRUD method, called Retrieve. CRUD is shortname of Create Retrieve Update and Delete.</p>
            <p>In this tutorial you will learn about how to:</p>
            <ul type="1">
              <li>Setup the database by creating the database and importing the SQL file.</li>
              <li>Check connection and configuration from framework.</li>
              <li>Create a model.</li>
              <li>Modify controller and view.</li>
            </ul>

            <h2>Prerequisited</h2>
            <p>For best result of this tutorial, you have to setup or installed the followings item:</p>
            <ul>
              <li>Running Apache and MySQL</li>
              <li>An IDE or Text Editor</li>
              <li>A Browser</li>
              <li><NuxtLink to="/4.0.0/tutorial/introduction">Completed the first tutorial</NuxtLink></li>
            </ul>
            <p>Okay, lets get started!</p>

            <h2>Setup the database</h2>
            <p>Before we proceed to code with Seme Framework, we have to setup the database for working connection between Seme Framework and Database.</p>
            <h3>Create the database using PhpMyAdmin</h3>
            <p>PhpMyAdmin is web based database management interface.</p>
            <p>This tool allowed you to do almost anything to your MySQL or MariaDB powered database.</p>
            <p>If you have run the XAMPP, then you can open <code>http://localhost/phpmyadmin/</code>.</p>
            <p>You have to create a database, named <code>seme_framework</code>.</p>
            <figure>
              <img src="~/assets/img/tutorial/phpmyadmin-db-create.png">
            </figure>

            <h3>Import the example database</h3>
            <p>After create a database, you have to import the database.</p>
            <p>We have already save some sql files in your <code>sql</code> directory.</p>
            <p>Before continuing the export process you have to select the database <code>seme_framework</code> which is you have created it before.</p>
            <p>Navigate to <code>export</code> and choose <code>seme_framework.sql</code> file in <code>sql</code> directory.</p>
            <figure>
              <img src="~/assets/img/tutorial/phpmyadmin-db-import.png">
            </figure>
            <p>After importing SQL, you can see new tables already added to database.</p>
            <figure>
              <img src="~/assets/img/tutorial/phpmyadmin-db-tables.png">
            </figure>

            <h2>The Codes</h2>
            <p>After setup the database, its time for coding. First thing we have to recheck the configuration file located at <code>app/config/development.php</code>. Please make sure the database connection configuration is working.</p>

            <h3>Create Model</h3>
            <p>The model on MVC framework used for bridging framework and database table. And then if we have separated the model, the rates of reusability increased because a model can be used repeatedly multiple times on many controllers.</p>

            <p>Lets created new file named <code>a_apikey_model.php</code> for <b>table a_apikey</b> under <code>app/model/</code>, and then put this codes to your file.</p>
            <pre>
&#x3C;?php
class A_ApiKey_Model extends SENE_Model
{
    public $tbl = &#x27;a_apikey&#x27;;
    public $tbl_as = &#x27;ak&#x27;;

    public function __construct()
    {
        parent::__construct();
        $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl, $this-&#x3E;tbl_as);
    }
    public function set($di)
    {
        return $this-&#x3E;db-&#x3E;insert($this-&#x3E;tbl,$di);
    }
    public function update($id,$du)
    {
        $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;,$id);
        return $this-&#x3E;db-&#x3E;update($this-&#x3E;tbl,$du);
    }
    public function del($id,$du)
    {
        $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;,$id);
        return $this-&#x3E;db-&#x3E;delete($this-&#x3E;tbl);
    }
    public function get()
    {
        return $this-&#x3E;db-&#x3E;get();
    }
    public function getById($id)
    {
        $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;,$id);
        return $this-&#x3E;db-&#x3E;get_first();
    }
}
            </pre>

            <h3>Edit Controller</h3>
            <p>From the first tutorial, we have created a controller located at <code>app/controller/home.php</code>. For achieving this tutorial, we have to modified the codes.</p>
            <p>First, we have to load new file that we created before <code>a_apikey_model</code>. After that, we have to get the data and put into a variable named <code>$data[&#x27;aakm&#x27;]</code>.</p>
            <pre>
&#x3C;?php
class Home extends SENE_Controller
{
  public function __construct()
  {
    parent::__construct();
    $this-&#x3E;setTheme(&#x27;front&#x27;);
    $this-&#x3E;load(&#x22;a_apikey_model&#x22;, &#x22;aakm&#x22;);
  }
  public function index()
  {
    $data = array();
    $this-&#x3E;setTitle(&#x27;Get The Data!&#x27;);
    $this-&#x3E;setDescription(&#x22;Here is the example for getting the data.&#x22;);
    $this-&#x3E;setKeyword(&#x27;Seme Framework&#x27;);
    $this-&#x3E;setAuthor(&#x27;Seme Framework&#x27;);

    $data[&#x27;aakm&#x27;] = $this-&#x3E;aakm-&#x3E;get();

    $this-&#x3E;putThemeContent(&#x22;home/home&#x22;,$data); //pass data to view
    $this-&#x3E;putJsContent(&#x22;home/home_bottom&#x22;,$data); //pass data to view

    $this-&#x3E;loadLayout(&#x22;col-1&#x22;,$data);
    $this-&#x3E;render();
  }
}
            </pre>

            <h3>Edit View</h3>
            <p>From the first tutorial, we have created view located at <code>app/view/front/home/home.php</code>. For achieving this tutorial, we have to modified the codes for vieweing the data properly.</p>
            <p>First, we have to iterating the array of <code>$aakm</code> and put result on card type html.</p>
            <pre>
&#x3C;div class=&#x22;container&#x22;&#x3E;
  &#x3C;div class=&#x22;row&#x22;&#x3E;
    &#x3C;?php foreach($aakm as $aak) { ?&#x3E;
    &#x3C;div class=&#x22;col m12 s12&#x22;&#x3E;
      &#x3C;div class=&#x22;card rounded preload-any&#x22;&#x3E;
        &#x3C;div class=&#x22;card-content &#x22;&#x3E;
          &#x3C;span class=&#x22;card-title&#x22;&#x3E;[&#x3C;?=$aak-&#x3E;code?&#x3E;] &#x3C;?=$aak-&#x3E;name?&#x3E;&#x3C;/span&#x3E;
          &#x3C;p&#x3E;&#x3C;small&#x3E;&#x3C;?=$aak-&#x3E;cdate?&#x3E;&#x3C;/small&#x3E;&#x3C;/p&#x3E;
          &#x3C;p&#x3E;&#x3C;?=$aak-&#x3E;name.&#x27; ID: &#x27;.$aak-&#x3E;id?&#x3E;&#x3C;/p&#x3E;
          &#x3C;br&#x3E;
          &#x3C;div class=&#x22;btn-group&#x22;&#x3E;
            &#x26;nbsp;
          &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;?php } ?&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

            </pre>

            <h2>Result</h2>
            <p>If you open the <code>http://localhost/seme_framework</code> and view same as screenshot before, so you are achieved this tutorial successfully.</p>
            <figure>
              <img src="~/assets/img/tutorial/chrome-crud-result.png">
            </figure>

          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/4.0.0/tutorial/" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Tutorial: Introduction
            </b-button>
            <b-button tag="router-link" to="/4.0.0/tutorial/basic-api/" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Tutorial: Basic API
            </b-button>
          </div>
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
      title: 'Tutorial: Get Data',
      description: 'Learn more about obtaining data from model tutorial by Seme Framework version 4.0.0 through this documentation.'
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
  }
}
</script>
