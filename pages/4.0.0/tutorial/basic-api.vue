<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.2</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/tutorial">Tutorial</NuxtLink></li>
          <li class="unavailable">Basic API</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Basic API</h1>
            <p>Application Programming Interface (API) usually built by developer for bridging frontend and backend.</p>
            <p>Seme Framework has functionality that can support for building API.</p>
            <p>In this tutorial you will learn about how to:</p>
            <ul>
              <li>Setup the json output using library.</li>
              <li>Create core controller for reusable function.</li>
              <li>Collect and input from form data and URI request.</li>
              <li>Do the Create, Retrieve, Update and Delete (CRUD) process to database.</li>
              <li>Test the API.</li>
            </ul>

            <h2>Prerequisites</h2>
            <p>For best result of this tutorial, you have to setup or installed the followings item:</p>
            <ul>
              <li>Running Apache and MySQL</li>
              <li>An IDE or Text Editor</li>
              <li>A Browser</li>
              <li><NuxtLink to="/4.0.0/tutorial/introduction">Completed the first tutorial</NuxtLink></li>
              <li><NuxtLink to="/4.0.0/tutorial/get-data">Completed the Get Data tutorial</NuxtLink></li>
            </ul>
            <p>Okay, lets get started!</p>

            <h2>The Structure</h2>
            <p>Before we proceed to coding phase, we have to learn about the directory and api result structure that we used to building the API.</p>
            <h3>Directory Structure</h3>
            <p>Here is the structure that we have to use.</p>

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
                  - app
                  -- controller
                  --- api
                  ---- home.php
                  ---- apikey.php
                  -- model
                  --- api
                  ---- a_apikey_model.php
                </highlight-code>
              </div>
            </div>
            <p>We have to separated controller and the model too for avoiding mistake by add new directory to model and controller.</p>
            <h3>API response structure</h3>
            <p>There is many standard format for API response structure, but we use the most basic API structure on this tutorial.</p>

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
                  {
                    &#x22;status&#x22;: 200,
                    &#x22;message&#x22;: &#x22;Success&#x22;,
                    &#x22;data&#x22;: []
                  }
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p>While creating API, we doesn&#x27;t need the view, because API result will be rendered on controller.</p>
              </div>
            </div>

            <h2>Coding Phase</h2>
            <p>After understranding the structure, its time to implement the codes.</p>

            <h3>Create the default API</h3>
            <p>First thing first we have to create default API response for test basic functionality and basic api result structure.</p>
            <p>Create new directory under <code>app/controller/</code> named <code>api</code> and then create a file named <code>home.php</code>.</p>

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
                      $this-&#x3E;lib(&#x22;sene_json_engine&#x22;, &#x22;json&#x22;);
                    }
                    public function index(){
                      $data = array();
                      $data[&#x27;status&#x27;] = 404;
                      $data[&#x27;message&#x27;] = &#x27;Not found&#x27;;
                      $data[&#x27;data&#x27;] = array();
                      $this-&#x3E;json-&#x3E;out($data);
                    }
                  }
                </highlight-code>
              </div>
            </div>


            <p>To test the functionality, just open <code>http://localhost/seme_framework/api/</code>.</p>

            <h3>Create the model</h3>
            <p>We have to create the model for communicating between PHP Server and Database server.</p>
            <p>Create new directory under <code>model</code> named <code>api</code>, and then create a file named <code>a_apikey_model.php</code>.</p>
            <p>In the model we have to add some method such as insert, update, delete, get by id, get all data.</p>


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
                  class A_ApiKey_Model extends SENE_Model
                  {
                    public $tbl = &#x27;a_apikey&#x27;;
                    public $tbl_as = &#x27;ak&#x27;;

                    public function __construct()
                    {
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl, $this-&#x3E;tbl_as);
                    }

                    /**
                    * Start transaction
                    * @return boolean      1 success, false failed
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
                    * Commit transaction
                    * @return boolean      1 success, false failed
                    */
                    public function trans_commit()
                    {
                      return $this-&#x3E;db-&#x3E;commit();
                    }

                    /**
                    * Rollback transaction
                    * @return boolean      1 success, false failed
                    */
                    public function trans_rollback()
                    {
                      return $this-&#x3E;db-&#x3E;rollback();
                    }

                    /**
                    * Close / End transaction
                    * @return boolean      1 success, false failed
                    */
                    public function trans_end()
                    {
                      return $this-&#x3E;db-&#x3E;autocommit(1);
                    }

                    /**
                    * get last ID before insert
                    * @param  int $nation_code    Nation Code or Country Code
                    * @return int                 last id, 0 failed
                    */
                    public function getLastId($nation_code)
                    {
                      $this-&#x3E;db-&#x3E;select_as(&#x22;COALESCE(MAX($this-&#x3E;tbl_as.id),0)+1&#x22;, &#x22;last_id&#x22;, 0);
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl, $this-&#x3E;tbl_as);
                      $this-&#x3E;db-&#x3E;where(&#x22;nation_code&#x22;, $nation_code);
                      $d = $this-&#x3E;db-&#x3E;get_first(&#x27;&#x27;, 0);
                      if (isset($d-&#x3E;last_id)) {
                        return $d-&#x3E;last_id;
                      }
                      return 0;
                    }

                    /**
                    * Insert data to a table row
                    * @param  array   $di    key value pair for inserting data to a table
                    * @return boolean        1 success, false failed
                    */
                    public function set($di)
                    {
                      return $this-&#x3E;db-&#x3E;insert($this-&#x3E;tbl, $di);
                    }

                    /**
                    * Update data in a table row
                    * @param  array   $nation_code     Nation Code or Country Code
                    * @param  array   $id              ID from a table
                    * @return boolean                  1 success, false failed
                    */
                    public function update($nation_code, $id, $du)
                    {
                      $this-&#x3E;db-&#x3E;where(&#x27;nation_code&#x27;, $nation_code);
                      $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;, $id);
                      return $this-&#x3E;db-&#x3E;update($this-&#x3E;tbl, $du);
                    }

                    /**
                    * Delete data in a table row
                    * @param  array   $nation_code     Nation Code or Country Code
                    * @param  array   $id              ID from a table
                    * @return boolean                  1 success, false failed
                    */
                    public function del($nation_code, $id)
                    {
                      $this-&#x3E;db-&#x3E;where(&#x27;nation_code&#x27;, $nation_code);
                      $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;, $id);
                      return $this-&#x3E;db-&#x3E;delete($this-&#x3E;tbl);
                    }

                    /**
                    * Retrieve all rows
                    * @return array        Array of object
                    */
                    public function get()
                    {
                      return $this-&#x3E;db-&#x3E;get();
                    }

                    /**
                    * [getById description]
                    * @param  int    $nation_code Nation Code or Country Code
                    * @param  int    $id          ID from a table
                    * @return object              Success if return Single row data object, otherwise return empty object
                    */
                    public function getById($nation_code,$id)
                    {
                      $this-&#x3E;db-&#x3E;where(&#x27;nation_code&#x27;, $nation_code);
                      $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;, $id);
                      return $this-&#x3E;db-&#x3E;get_first();
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Create the controller for apikey</h3>
            <p>After create model, now we have to create controller for CRUD.</p>


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
                  class ApiKey extends SENE_Controller
                  {
                    public function __construct()
                    {
                      parent::__construct();
                      $this-&#x3E;load(&#x22;a_apikey_model&#x22;, &#x22;aakm&#x22;);
                      $this-&#x3E;lib(&#x22;sene_json_engine&#x22;, &#x22;json&#x22;);
                    }
                    public function index(){
                      $data = array();
                      $data[&#x27;status&#x27;] = 200;
                      $data[&#x27;message&#x27;] = &#x27;Success&#x27;;
                      $data[&#x27;data&#x27;] = $this-&#x3E;aakm-&#x3E;get();
                      $this-&#x3E;json-&#x3E;out($data);
                    }

                    public function detail($id){
                      $data = array();
                      $id = (int) $id;
                      if($id&#x3C;=0){
                        $data[&#x27;status&#x27;] = 800;
                        $data[&#x27;message&#x27;] = &#x27;invalid ID&#x27;;
                        $this-&#x3E;json-&#x3E;out($data);
                      }

                      $aakm = $this-&#x3E;aakm-&#x3E;getById($id);
                      if(!isset($aakm-&#x3E;id)){
                        $data[&#x27;status&#x27;] = 804;
                        $data[&#x27;message&#x27;] = &#x27;Data with supplied ID not found&#x27;;
                        $this-&#x3E;json-&#x3E;out($data);
                      }else{
                        $data[&#x27;status&#x27;] = 200;
                        $data[&#x27;message&#x27;] = &#x27;Success&#x27;;
                        $data[&#x27;data&#x27;] = $aakm;
                        $this-&#x3E;json-&#x3E;out($data);
                      }
                    }

                    public function create(){
                      $data = array();
                      $data[&#x27;status&#x27;] = 549;
                      $data[&#x27;message&#x27;] = &#x27;one or more parameter are required&#x27;;
                      $data[&#x27;data&#x27;] = array();

                      //collect input
                      $nation_code = $this-&#x3E;input-&#x3E;post(&#x27;nation_code&#x27;);
                      $code = $this-&#x3E;input-&#x3E;post(&#x27;code&#x27;);
                      $name = $this-&#x3E;input-&#x3E;post(&#x27;name&#x27;);
                      $is_active = (int) $this-&#x3E;input-&#x3E;post(&#x27;is_active&#x27;);

                      //validation
                      if(strlen($nation_code)==0){
                        $data[&#x27;status&#x27;] = 801;
                        $data[&#x27;message&#x27;] = &#x27;invalid nation_code&#x27;;
                        $this-&#x3E;json-&#x3E;out($data);
                      }
                      if(strlen($code)==0){
                        $data[&#x27;status&#x27;] = 801;
                        $data[&#x27;message&#x27;] = &#x27;invalid code&#x27;;
                        $this-&#x3E;json-&#x3E;out($data);
                      }
                      if(strlen($name)==0){
                        $data[&#x27;status&#x27;] = 802;
                        $data[&#x27;message&#x27;] = &#x27;invalid name&#x27;;
                        $this-&#x3E;json-&#x3E;out($data);
                      }
                      if($is_active&#x3C;0){
                        $data[&#x27;status&#x27;] = 803;
                        $data[&#x27;message&#x27;] = &#x27;invalid is_active&#x27;;
                        $this-&#x3E;json-&#x3E;out($data);
                      }

                      //transaction open
                      $this-&#x3E;aakm-&#x3E;trans_start();

                      //data input
                      $di = array();
                      $di[&#x27;nation_code&#x27;] = $nation_code;
                      $di[&#x27;id&#x27;] = $this-&#x3E;aakm-&#x3E;getLastId($nation_code);
                      $di[&#x27;code&#x27;] = $code;
                      $di[&#x27;name&#x27;] = $name;
                      $di[&#x27;cdate&#x27;] = &#x27;NOW()&#x27;;
                      $di[&#x27;ldate&#x27;] = &#x27;NOW()&#x27;;
                      $di[&#x27;is_active&#x27;] = $is_active;

                      $res = $this-&#x3E;aakm-&#x3E;set($di);
                      if($res){
                        $data[&#x27;status&#x27;] = 200;
                        $data[&#x27;message&#x27;] = &#x27;success&#x27;;
                        $data[&#x27;data&#x27;] = $this-&#x3E;aakm-&#x3E;get();
                        $this-&#x3E;aakm-&#x3E;trans_commit();
                      }else{
                        $data[&#x27;status&#x27;] = 900;
                        $data[&#x27;message&#x27;] = &#x27;insert data failed&#x27;;
                        $this-&#x3E;aakm-&#x3E;trans_rollback();
                      }

                      //transaction closed
                      $this-&#x3E;aakm-&#x3E;trans_end();

                      //render response
                      $this-&#x3E;json-&#x3E;out($data);
                    }

                    public function edit($nation_code,$id){
                      $data = array();
                      $data[&#x27;status&#x27;] = 549;
                      $data[&#x27;message&#x27;] = &#x27;one or more parameter are required&#x27;;
                      $data[&#x27;data&#x27;] = array();

                      $nation_code = $this-&#x3E;input-&#x3E;post(&#x27;nation_code&#x27;);
                      if(strlen($nation_code)==0){
                        $data[&#x27;status&#x27;] = 801;
                        $data[&#x27;message&#x27;] = &#x27;invalid nation_code&#x27;;
                        $this-&#x3E;json-&#x3E;out($data);
                      }

                      $id = (int) $id;
                      if($id&#x3C;=0){
                        $data[&#x27;status&#x27;] = 800;
                        $data[&#x27;message&#x27;] = &#x27;invalid ID&#x27;;
                        $this-&#x3E;json-&#x3E;out($data);
                      }

                      $aakm = $this-&#x3E;aakm-&#x3E;getById($nation_code,$id);
                      if(!isset($aakm-&#x3E;id)){
                        $data[&#x27;status&#x27;] = 804;
                        $data[&#x27;message&#x27;] = &#x27;Data with supplied ID not found&#x27;;
                        $this-&#x3E;json-&#x3E;out($data);
                      }

                      //collect input
                      $code = $this-&#x3E;input-&#x3E;post(&#x27;code&#x27;);
                      $name = $this-&#x3E;input-&#x3E;post(&#x27;name&#x27;);
                      $is_active = (int) $this-&#x3E;input-&#x3E;post(&#x27;is_active&#x27;);

                      //validation
                      if(strlen($code)==0){
                        $data[&#x27;status&#x27;] = 801;
                        $data[&#x27;message&#x27;] = &#x27;invalid code&#x27;;
                        $this-&#x3E;json-&#x3E;out($data);
                      }
                      if(strlen($name)==0){
                        $data[&#x27;status&#x27;] = 802;
                        $data[&#x27;message&#x27;] = &#x27;invalid name&#x27;;
                        $this-&#x3E;json-&#x3E;out($data);
                      }
                      if($is_active&#x3C;0){
                        $data[&#x27;status&#x27;] = 803;
                        $data[&#x27;message&#x27;] = &#x27;invalid is_active&#x27;;
                        $this-&#x3E;json-&#x3E;out($data);
                      }

                      //data update
                      $du = array();
                      $du[&#x27;nation_code&#x27;] = $nation_code;
                      $du[&#x27;code&#x27;] = $code;
                      $du[&#x27;name&#x27;] = $name;
                      $du[&#x27;ldate&#x27;] = &#x27;NOW()&#x27;;
                      $du[&#x27;is_active&#x27;] = $is_active;

                      $res = $this-&#x3E;aakm-&#x3E;update($nation_code,$id,$du);
                      if($res){
                        $data[&#x27;status&#x27;] = 200;
                        $data[&#x27;message&#x27;] = &#x27;success&#x27;;
                        $data[&#x27;data&#x27;] = $this-&#x3E;aakm-&#x3E;get();
                      }else{
                        $data[&#x27;status&#x27;] = 900;
                        $data[&#x27;message&#x27;] = &#x27;update data failed&#x27;;
                      }
                      $this-&#x3E;json-&#x3E;out($data);
                    }

                    public function delete($nation_code,$id){
                      $data = array();
                      $data[&#x27;status&#x27;] = 549;
                      $data[&#x27;message&#x27;] = &#x27;one or more parameter are required&#x27;;
                      $data[&#x27;data&#x27;] = array();

                      $nation_code = $this-&#x3E;input-&#x3E;post(&#x27;nation_code&#x27;);
                      if(strlen($nation_code)==0){
                        $data[&#x27;status&#x27;] = 801;
                        $data[&#x27;message&#x27;] = &#x27;invalid nation_code&#x27;;
                        $this-&#x3E;json-&#x3E;out($data);
                      }

                      $id = (int) $id;
                      if($id&#x3C;=0){
                        $data[&#x27;status&#x27;] = 800;
                        $data[&#x27;message&#x27;] = &#x27;invalid ID&#x27;;
                        $this-&#x3E;json-&#x3E;out($data);
                      }

                      $aakm = $this-&#x3E;aakm-&#x3E;getById($nation_code,$id);
                      if(!isset($aakm-&#x3E;id)){
                        $data[&#x27;status&#x27;] = 804;
                        $data[&#x27;message&#x27;] = &#x27;Data with supplied ID not found&#x27;;
                        $this-&#x3E;json-&#x3E;out($data);
                      }

                      $res = $this-&#x3E;aakm-&#x3E;del($nation_code,$id);
                      if($res){
                        $data[&#x27;status&#x27;] = 200;
                        $data[&#x27;message&#x27;] = &#x27;success&#x27;;
                        $data[&#x27;data&#x27;] = $this-&#x3E;aakm-&#x3E;get();
                      }else{
                        $data[&#x27;status&#x27;] = 900;
                        $data[&#x27;message&#x27;] = &#x27;delete data failed&#x27;;
                      }
                      $this-&#x3E;json-&#x3E;out($data);
                    }
                  }
                </highlight-code>
              </div>
            </div>

            <h2>Test the API</h2>
            <p>After Completed the code, we can test the code by using <a href="https://www.postman.com/downloads/" target="_blank">Postman</a> or create own test runner.</p>

            <div class="message is-info">
              <div class="message-body">
                <p>Seme Framework has supported for creating own test runner for testing the API.</p>
              </div>
            </div>

            <h3>Test apikey List</h3>
            <p>To test apikey list, you can open url directly in your browser to <code>http://localhost/seme_framework/api/apikey/</code>.</p>
            <p>But, for another another function you have to tested it by using runner.</p>
            <p>Here is some example for testing API through Postman.</p>

            <h4>Create</h4>
            <p>The test result for create data</p>
            <amp-img layout="responsive" width="1336px" height="1106px" alt="postman create" :src="pbwt"></amp-img>

            <h4>Edit</h4>
            <p>The test result for edit data</p>
            <amp-img layout="responsive" width="1336px" height="1106px" alt="postman edit" :src="pedit"></amp-img>

            <h4>Delete</h4>
            <p>The test result for delete data</p>
            <amp-img layout="responsive" width="1336px" height="1106px" alt="postman delete" :src="pdel"></amp-img>

            <p>Well done, if you facing any problem do not hestitate to open the <a href="https://github.com/drosanda/seme-framework/issues/new" target="_blank">issue</a> on our github page.</p>
            <hr>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0.0/tutorial/get-data/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Tutorial: Get Data
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0.0/uri_routing/" class="btn">
            Uri Routing
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
      suffix: ' - Seme Framework 4',
      title: 'Tutorial: Create basic API',
      pbwt: require('~~/assets/img/tutorial/basic-api/postman-create.png'),
      pedit: require('~~/assets/img/tutorial/basic-api/postman-edit.png'),
      pdel: require('~~/assets/img/tutorial/basic-api/postman-delete.png'),
      description: 'Learn more about creating API by using Seme Framework version 4.0.0 through this documentation.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0',
          text: '4.0.2',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0/tutorial',
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
        "dateCreated": "2020-06-11T10:12:00+07:00",
        "datePublished": "2020-06-11T10:12:00+07:00",
        "dateModified": "2021-06-11T19:48:32+07:00",
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
