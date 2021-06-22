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
could not find model b_user_model on D:/XAMPP/htdocs/seme_framework/app/model/b_user_model.php
could not find model api/b_user_model on D:/XAMPP/htdocs/seme_framework/app/model/api/b_user_model.php
could not find model admin/b_user_model on D:/XAMPP/htdocs/seme_framework/app/model/admin/b_user_model.php
</highlight-code>
</div>
</div>

            <h2>Solution</h2>
            <p>Check the library are existed on <code>kero/lib/</code>.</p>
            <p>Please make sure the filename and with its extension are not contain symbol and whitespace(s).</p>

            <h3>Example PHPOffice/Spreadsheet library loader</h3>
            <p>Some library cannot be loaded by Seme Framework library loader, you have to included it manually using its namespace.</p>

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
}

</highlight-code>
</div>
</div>

          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/error/notice/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Notice
          </nuxt-link>
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
      description: 'Learn more about Seme Framework Error Unable to load library and how to solved it.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/error/',
          text: 'Error',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/error/notice/',
          text: 'Notice',
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
    ]
  }
}
</script>
