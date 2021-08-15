<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.2</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/controller">Controller</NuxtLink></li>
          <li class="unavailable">Input</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Input Property</h1>
            <p>
              The <code>$input</code> property from <NuxtLink to="/4.0/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink> is an object from <code>SENE_Input</code> class.
            </p>

            <h2 id="SENE_Input">SENE_Input</h2>
            <p>
              The <code>SENE_Input</code> class purpose is for handling <code>$_POST</code>, <code>$_GET</code>, and <code>$_REQUEST</code> input.
            </p>
            <h3>Class Synopsis</h3>
            <p>
              Here is the class synopsis of <code>SENE_Input</code>.
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
                  class SENE_Input {
                    ...
                    public function post(string $k, $d = 0){ ... }
                    public function get(string $k, $d = 0){ ... }
                    public function request(string $k, $d = 0){ ... }
                    ...
                  }
                </highlight-code>
              </div>
            </div>

            <h2 id="get">Get method</h2>
            <p>
              The <code>get</code> method purpose is to get value from <code>$_GET</code> array using its keyname.
              If the keyname value will return 0 as default value.
              Start from Seme Framework 4, the default value can be override in the second parameter.
            </p>
            <h3>Basic Usage</h3>
            <p>
              This is the basic usage <code>get</code> method from <NuxtLink to="/4.0/controller/input/#SENE_Input">$input <i class="fa fa-window-maximize"></i></NuxtLink> property on <NuxtLink to="/4.0/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink>.
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
                  $this-&#x3E;input-&#x3E;get($keyname [, $default_value=0]) : mixed
                </highlight-code>
              </div>
            </div>

            <h4>Parameters</h4>
            <p>
              This method has 2 parameter, there is <code>$keyname</code> and <code>$default_value</code>.
            </p>

            <h5>$keyname</h5>
            <p>
              This value must match with same key that represented in <code>$_GET[$keyname]</code> global variable.
            </p>

            <h5>$default_value</h5>
            <p>
              The default return value if the <code>$keyname</code> is not found. This parameter added from Seme Framework 4.
            </p>

            <h4 id="get_example">Example</h4>
            <p>Here is the example <code>get</code> method in a controller class.</p>
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
                  class Product extends SENE_Controller{
                    public function __construct(){
                      parent::__construct();
                    }
                    ...
                    public function detail(){
                      ...
                      //example URL Request, localhost/seme_framework/product/detail/?id=100
                      $product_id = $this-&#x3E;input-&#x3E;get(&#x27;id&#x27;);
                      ....
                    }
                    ...
                  }
                </highlight-code>
              </div>
            </div>

            <h2 id="post">Post Method</h2>
            <p>
              The <code>post</code> method purpose is to get value from <code>$_POST</code> array using its keyname.
              If the keyname value will return 0 as default value.
              Start from Seme Framework 4, the default value can be override in the second parameter.
            </p>

            <h3>Basic Usage</h3>
            <p>
              This is the basic usage <code>post</code> method from <NuxtLink to="/4.0/controller/input/#SENE_Input">$input <i class="fa fa-window-maximize"></i></NuxtLink> property on <NuxtLink to="/4.0/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink>.
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
                  $this-&#x3E;input-&#x3E;post($keyname [, $default_value=0]) : mixed
                </highlight-code>
              </div>
            </div>

            <h4>Parameters</h4>
            <p>
              This method has 2 parameter, there is <code>$keyname</code> and <code>$default_value</code>.
            </p>

            <h5>$keyname</h5>
            <p>
              This value must match with same key that represented in <code>$_POST[$keyname]</code> global variable.
            </p>

            <h5>$default_value</h5>
            <p>
              The default return value if the <code>$keyname</code> is not found. This parameter added from Seme Framework 4.
            </p>

            <h4 id="post_example">Example</h4>
            <p>Here is the example <code>post</code> method in a controller class.</p>
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
                  class Product extends SENE_Controller{
                    public function __construct(){
                      parent::__construct();
                    }
                    ...
                    public function submit(){
                      ...
                      //example URL Request, localhost/seme_framework/product/submi
                      //get form html example below
                      $name = $this-&#x3E;input-&#x3E;post(&#x27;name&#x27;);
                      $is_available = $this-&#x3E;input-&#x3E;post(&#x27;is_available&#x27;);
                      ....
                    }
                    ...
                  }
                </highlight-code>
              </div>
            </div>

            <h5>HTML Form Example</h5>
            <p>
              here is the HTML form example for testing with controller example.
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
                  ...
                  &#x3C;form action=&#x22;&#x3C;?=base_url(&#x27;product/submit&#x27;)?&#x3E;&#x22; method=&#x22;post&#x22; enctype=&#x22;multipart/form-data&#x22;&#x3E;
                    &#x3C;input type=&#x22;text&#x22; name=&#x22;name&#x22; /&#x3E;
                    &#x3C;select name=&#x22;is_available&#x22;&#x3E;
                      &#x3C;option value=&#x22;1&#x22;&#x3E;in stock&#x3C;/option&#x3E;
                      &#x3C;option value=&#x22;0&#x22;&#x3E;out of stock&#x3C;/option&#x3E;
                    &#x3C;/select&#x3E;
                  &#x3C;/form&#x3E;
                  ...
                </highlight-code>
              </div>
            </div>

            <h2>Request method</h2>
            <p>
              The <code>request</code> method purpose is to get value from <code>$_REQUEST</code> array using its keyname.
              If the keyname value will return 0 as default value.
              Start from Seme Framework 4, the default value can be override in the second parameter.
            </p>

            <h3>Basic Usage</h3>
            <p>
              This is the basic usage <code>request</code> method from <NuxtLink to="/4.0/controller/input/#SENE_Input">$input <i class="fa fa-window-maximize"></i></NuxtLink> property on <NuxtLink to="/4.0/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink>.
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
                  $this-&#x3E;input-&#x3E;request($keyname [, $default_value=0]) : mixed
                </highlight-code>
              </div>
            </div>

            <h4>Parameters</h4>
            <p>
              The request method has 2 parameter, there is <code>$keyname</code> and <code>$default_value</code>.
            </p>

            <h5>$keyname</h5>
            <p>
              This value must match with same key that represented in <code>$_REQUEST[$keyname]</code> global variable.
            </p>

            <h5>$default_value</h5>
            <p>
              The default return value if the <code>$keyname</code> is not found. This parameter added from Seme Framework 4.
            </p>

            <h4>Request Method Example</h4>
            <p>Here is the example <code>request</code> method in a controller class.</p>
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
                  class Review extends SENE_Controller{
                    public function __construct(){
                      parent::__construct();
                    }
                    ..
                    public function submit(){
                      ...
                      $product_id = $this-&#x3E;input-&#x3E;request(&#x27;product_id&#x27;);
                      ...
                    }
                    ...
                  }
                </highlight-code>
              </div>
            </div>

            <h2>Handling File Upload</h2>
            <p>
              For handling <code>$_FILES</code> file upload you have to created it <b>manually</b> regarding to your application requirements.
            </p>

            <h3>Prerequisited</h3>
            <p>Before implementing the example, here is the list of prerequisited library:</p>
            <ul>
              <li>Library <NuxtLink to="/4.0/library/seme_log/">SEME_Log</NuxtLink>,</li>
              <li>Library <NuxtLink to="/4.0/library/wideimage/">WideImage</NuxtLink>,</li>
              <li>Directory <code>media/upload/</code> with write access permission.</li>
            </ul>
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
                  ...
                  public function __construct(){
                    parent:: __construct();
                    //loading the required libraries
                    $this-&#x3E;lib(&#x22;seme_log&#x22;);
                    $this-&#x3E;lib(&#x22;wideimage&#x22;, 'inc');
                  }
                  ..
                </highlight-code>
              </div>
            </div>

            <h3>Create private method for upload image</h3>
            <p>This is full example for upload image and then create thumbnail using <code>WideImage</code> for image resizer.</p>
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
                  /**
                  * Method for handling file upload
                  * Only allowed .png, .jpeg, .jpg, .gif extension
                  * Max file size 2000000 bytes
                  * Unsupported WebP encoding image
                  * @param       string $keyname           the $_FILES key that send from html
                  * @param       string $id                the id of user, product, or uniqid
                  * @param       string $ke                sequencer
                  * @constructor
                  * @return      object                    result with object, contain status, message, image, and thumb.
                  */
                  private function __uploadImagex($keyname, $id, $ke=&#x22;&#x22;)
                  {
                    $sc = new stdClass();
                    $sc-&#x3E;status = 500;
                    $sc-&#x3E;message = &#x27;Error&#x27;;
                    $sc-&#x3E;image = &#x27;&#x27;;
                    $sc-&#x3E;thumb = &#x27;&#x27;;
                    if (isset($_FILES[$keyname][&#x27;name&#x27;])) {
                      if ($_FILES[$keyname][&#x27;size&#x27;]&#x3E;2000000) {
                        $sc-&#x3E;status = 301;
                        $sc-&#x3E;message = &#x27;Ukuran gambar terlalu besar. Silakan pilih dengan ukuran kurang dari 2 MB&#x27;;
                        $this-&#x3E;seme_log-&#x3E;write(&#x27;User::__uploadImagex -- forceClose &#x27;.$sc-&#x3E;status.&#x27; &#x27;.$sc-&#x3E;message);
                        return $sc;
                      }
                      $filenames = pathinfo($_FILES[$keyname][&#x27;name&#x27;]);
                      if (isset($filenames[&#x27;extension&#x27;])) {
                        $fileext = strtolower($filenames[&#x27;extension&#x27;]);
                      } else {
                        $fileext = &#x27;jpg&#x27;;
                      }

                      if (!in_array($fileext, array(&#x22;jpg&#x22;,&#x22;png&#x22;,&#x22;jpeg&#x22;,&#x22;gif&#x22;))) {
                        $sc-&#x3E;status = 303;
                        $sc-&#x3E;message = &#x27;Invalid file extension, please try other image file.&#x27;;
                        $this-&#x3E;seme_log-&#x3E;write(&#x27;User::__uploadImagex -- forceClose &#x27;.$sc-&#x3E;status.&#x27; &#x27;.$sc-&#x3E;message);
                        return $sc;
                      }
                      $filename = &#x22;$id-$ke&#x22;;
                      $filethumb = $filename.&#x27;-thumb&#x27;;

                      $targetdir = 'media/upload/';
                      $targetdircheck = realpath(SEMEROOT.$targetdir);
                      if (empty($targetdircheck)) {
                        if (PHP_OS == &#x22;WINNT&#x22;) {
                          if (!is_dir(SEMEROOT.$targetdir)) {
                            mkdir(SEMEROOT.$targetdir);
                          }
                        } else {
                          if (!is_dir(SEMEROOT.$targetdir)) {
                            mkdir(SEMEROOT.$targetdir, 0775);
                          }
                        }
                      }

                      $tahun = date(&#x22;Y&#x22;);
                      $targetdir = $targetdir.DIRECTORY_SEPARATOR.$tahun;
                      $targetdircheck = realpath(SEMEROOT.$targetdir);
                      if (empty($targetdircheck)) {
                        if (PHP_OS == &#x22;WINNT&#x22;) {
                          if (!is_dir(SEMEROOT.$targetdir)) {
                            mkdir(SEMEROOT.$targetdir);
                          }
                        } else {
                          if (!is_dir(SEMEROOT.$targetdir)) {
                            mkdir(SEMEROOT.$targetdir, 0775);
                          }
                        }
                      }

                      $bulan = date(&#x22;m&#x22;);
                      $targetdir = $targetdir.DIRECTORY_SEPARATOR.$bulan;
                      $targetdircheck = realpath(SEMEROOT.$targetdir);
                      if (empty($targetdircheck)) {
                        if (PHP_OS == &#x22;WINNT&#x22;) {
                          if (!is_dir(SEMEROOT.$targetdir)) {
                            mkdir(SEMEROOT.$targetdir);
                          }
                        } else {
                          if (!is_dir(SEMEROOT.$targetdir)) {
                            mkdir(SEMEROOT.$targetdir, 0775);
                          }
                        }
                      }

                      $sc-&#x3E;status = 998;
                      $sc-&#x3E;message = &#x27;Invalid file extension uploaded&#x27;;
                      if (in_array($fileext, array(&#x22;gif&#x22;, &#x22;jpg&#x22;, &#x22;png&#x22;,&#x22;jpeg&#x22;))) {
                        $filecheck = SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filename.&#x27;.&#x27;.$fileext;
                        if (file_exists($filecheck)) {
                          unlink($filecheck);
                          $rand = rand(0, 999);
                          $filename = &#x22;$id-$ke-&#x22;.$rand;
                          $filecheck = SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filename.&#x27;.&#x27;.$fileext;
                          if (file_exists($filecheck)) {
                            unlink($filecheck);
                            $rand = rand(1000, 99999);
                            $filename = &#x22;$id-$ke-&#x22;.$rand;
                          }
                        }
                        $filethumb = $filename.&#x22;-thumb.&#x22;.$fileext;
                        $filename = $filename.&#x22;.&#x22;.$fileext;

                        move_uploaded_file($_FILES[$keyname][&#x27;tmp_name&#x27;], SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filename);
                        if (is_file(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filename) &#x26;&#x26; file_exists(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filename)) {
                          if (@mime_content_type(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filename) == &#x27;image/webp&#x27;) {
                            $sc-&#x3E;status = 302;
                            $sc-&#x3E;message = &#x27;WebP image format currently unsupported&#x27;;
                            $this-&#x3E;seme_log-&#x3E;write(&#x27;User::__uploadImagex -- forceClose &#x27;.$sc-&#x3E;status.&#x27; &#x27;.$sc-&#x3E;message);
                            return $sc;
                          }

                          $this-&#x3E;lib(&#x22;wideimage/WideImage&#x22;, &#x27;wideimage&#x27;, &#x22;inc&#x22;);
                          if (file_exists(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filethumb) &#x26;&#x26; is_file(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filethumb)) {
                            unlink(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filethumb);
                          }
                          if (file_exists(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filename) &#x26;&#x26; is_file(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filename)) {
                            WideImage::load(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filename)-&#x3E;reSize(370)-&#x3E;saveToFile(SEMEROOT.$targetdir.DIRECTORY_SEPARATOR.$filethumb);
                            $sc-&#x3E;status = 200;
                            $sc-&#x3E;message = &#x27;Successful&#x27;;
                            $sc-&#x3E;thumb = str_replace(&#x22;//&#x22;, &#x22;/&#x22;, $targetdir.&#x27;/&#x27;.$filethumb);
                            $sc-&#x3E;image = str_replace(&#x22;&#x27;\&#x27;&#x22;, &#x22;/&#x22;, $targetdir.&#x27;/&#x27;.$filename);
                            $sc-&#x3E;image = str_replace(&#x22;//&#x22;, &#x22;/&#x22;, $targetdir.&#x27;/&#x27;.$filename);
                          } else {
                            $sc-&#x3E;status = 997;
                            $sc-&#x3E;message = &#x27;Failed: file image not exists&#x27;;
                            $this-&#x3E;seme_log-&#x3E;write(&#x27;User::__uploadImagex -- forceClose &#x27;.$sc-&#x3E;status.&#x27; &#x27;.$sc-&#x3E;message);
                          }
                        } else {
                          $sc-&#x3E;status = 999;
                          $sc-&#x3E;message = &#x27;Upload file failed&#x27;;
                          $this-&#x3E;seme_log-&#x3E;write(&#x27;User::__uploadImagex -- forceClose &#x27;.$sc-&#x3E;status.&#x27; &#x27;.$sc-&#x3E;message);
                        }
                      } else {
                        $sc-&#x3E;status = 998;
                        $sc-&#x3E;message = &#x27;Invalid file extension uploaded&#x27;;
                        $this-&#x3E;seme_log-&#x3E;write(&#x27;User::__uploadImagex -- forceClose &#x27;.$sc-&#x3E;status.&#x27; &#x27;.$sc-&#x3E;message);
                      }
                    } else {
                      $sc-&#x3E;status = 988;
                      $sc-&#x3E;message = &#x27;Keyname file does not exists&#x27;;
                      $this-&#x3E;seme_log-&#x3E;write(&#x27;User::__uploadImagex -- forceClose &#x27;.$sc-&#x3E;status.&#x27; &#x27;.$sc-&#x3E;message);
                    }
                    return $sc;
                  }
                </highlight-code>
              </div>
            </div>

            <h3>Example Implementation</h3>
            <p>
              Here is the example implementation of file upload using the private method.
              On this example, the <code>$keyname</code> value is <code>foto</code> also this $keyname value should be send by multipart/form-data on HTML form or API Request like <code>curl</code>.
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
                  ...
                  $sc = $this-&#x3E;__uploadImagex(&#x22;foto&#x22;,$id,&#x22;1&#x22;);
                  if(!is_object($sc)) $sc = new stdClass();
                  if(!isset($sc-&#x3E;status)) $sc-&#x3E;status=0;
                  if(!isset($sc-&#x3E;message)) $sc-&#x3E;message=&#x27;no response from upload processor&#x27;;
                  if($sc-&#x3E;status == 200){
                    //success
                    ....

                  }else{
                    //failed
                    ....
                  }
                  ...
                </highlight-code>
              </div>
            </div>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/4.0/controller/index_method/" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  index Method
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/4.0/controller/lib/" class="btn">
                  Lib Method
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
  data() {
    return {
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'Input Property',
      description: 'Learn input property (SENE_Input) from SENE_Controller class on Seme Framework version 4',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0',
          text: '4.0.2'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0/controller',
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
        "dateCreated": "2021-07-12T22:03:01+07:00",
        "datePublished": "2021-07-12T22:03:02+07:00",
        "dateModified": "2021-07-12T22:04:00+07:00",
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
