<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/controller">Controller</NuxtLink></li>
          <li class="unavailable">Input Method</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Input Method</h1>
            <p>Seme Framework comes with builtin input manager which can handled <code>$_POST</code>, <code>$_GET</code>, and <code>$_REQUEST</code>.</p>
            <p>Here is the example:</p>
            <pre>
class Home extends Sene_Controller{
  public function __construct(){
    parent::__construct();
  }
  public function index(){
    $input_get = $this-&#x3E;input-&#x3E;get(&#x27;id&#x27;); //localhost/seme/?id=100
    $input_post = $this-&#x3E;input-&#x3E;post(&#x27;email&#x27;); //handling by form-data post
    $input_request = $this-&#x3E;input-&#x3E;request(&#x27;token&#x27;); //handling get or post form-data.
  }

}
            </pre>
            <p>If the parameter not sent, the default value will return <code>(int) 0</code>.</p>
            <h2>Handling $_FILES</h2>
            <p>For handling <code>$_FILES</code> you have to created it <b>manually</b> regarding to your application requirements.</p>
            <p>Here is the full example for file image upload:</p>
            <h3>Create private method for upload image</h3>
            <p>This is full example for upload image and then create thumbnail using <code>WideImage</code> for image resizer.</p>
            <pre>
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
            </pre>
            <h3>Requirements</h3>
            <p>This private method are requires:</p>
            <ul>
              <li>Library Seme_Log</li>
              <li>Library WideImage</li>
              <li>Directory <code>media/upload/</code> with write access permission.</li>
            </ul>
            <pre>
public function __construct(){
  parent:: __construct();
  $this-&#x3E;lib(&#x22;seme_log&#x22;);
}
            </pre>

            <h3>Implementation</h3>
            <p>Here is the implementation:</p>

            <pre>
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
            </pre>
          </div>
        </div>

      </div>
      
      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0.0/controller/lib/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Lib Method
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0.0/controller/setTheme/" class="btn">
            setTheme Method
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
    data() {
      return {
        name: 'Seme Framework v4.0.0',
        suffix: ' - Seme Framework 4',
        title: 'Input Method from SENE_Controller',
        description: 'Learn more about Input Method like $_GET, $_POST, $_REQUEST from SENE_Controller on Seme Framework version 4.0.0'
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
