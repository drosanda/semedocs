<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/error/">Error &amp; Troubleshooting</NuxtLink></li>
          <li class=""><NuxtLink to="/error/notice">Notice</NuxtLink></li>
          <li class="unavailable">Unable to load library</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1>Unable to load library LIBRARY_NAME</h1>
            <p>Seme framework has supported library directory under <code>kero/lib</code>, so you have to checked it for supplied library name or path with its library name are exist.</p>
            <p>Example error message</p>
            <pre>
could not find model b_user_model on D:/XAMPP/htdocs/seme_framework/app/model/b_user_model.php
could not find model api/b_user_model on D:/XAMPP/htdocs/seme_framework/app/model/api/b_user_model.php
could not find model admin/b_user_model on D:/XAMPP/htdocs/seme_framework/app/model/admin/b_user_model.php
            </pre>

            <h2>Solution</h2>
            <p>Check the library are existed on <code>kero/lib/</code>.</p>
            <p>Please make sure the filename and with its extension are not contain symbol and whitespace(s).</p>

            <h3>Example PHPOffice/Spreadsheet library loader</h3>
            <p>Some library cannot be loaded by Seme Framework library loader, you have to included it manually using its namespace.</p>
            <pre><code v-highlight class="php">&#x3C;?php
//loading library
$vendorDirPath = (SEMEROOT.&#x27;kero/lib/phpoffice/vendor/&#x27;);
$vendorDirPath = realpath($vendorDirPath);
require_once $vendorDirPath.&#x27;/autoload.php&#x27;;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class Home extends SENE_Controller
{
  public function __construct()
  {
    parent::__construct();
  ....
  }
  public function download_xls($){
    $objPHPExcel = new Spreadsheet();
    $objWorkSheet = $objPHPExcel-&#x3E;setActiveSheetIndex(0);
    $objWorkSheet-&#x3E;setTitle(&#x22;Example&#x22;);
    $objWorkSheet-&#x3E;setCellValue(&#x27;A1&#x27;, &#x27;Example&#x27;)-&#x3E;mergeCells(&#x27;A1:G1&#x27;);
    $filename = &#x27;example.xlsx&#x27;;
    $objWriter = new Xlsx($objPHPExcel);
    $objWriter-&#x3E;save(filename);

    //force download
    header(&#x27;Content-Description: File Transfer&#x27;);
    header(&#x27;Content-Type: application/octet-stream&#x27;);
    header(&#x27;Content-Disposition: attachment; filename=&#x27;.basename($filename));
    header(&#x27;Content-Transfer-Encoding: binary&#x27;);
    header(&#x27;Expires: 0&#x27;);
    header(&#x27;Cache-Control: must-revalidate&#x27;);
    header(&#x27;Pragma: public&#x27;);
    header(&#x27;Content-Length: &#x27; . filesize($filename));
    ob_clean();
    flush();
    readfile($pathFile);
    exit;
  }
}</code></pre>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/error/notice/" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Error Notice List
            </b-button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'troubleshoot',
  data (){
    return {
      name: 'Seme Framework Error &amp; Troubleshooting',
      suffix: ' - Seme Framework Error Notice',
      title: 'Unable to load library',
      description: 'Learn more about Seme Framework Error Unable to load library and how to solved it.'
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
