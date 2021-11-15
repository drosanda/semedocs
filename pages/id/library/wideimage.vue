<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3</NuxtLink></li>
          <li class=""><NuxtLink to="/id/library/">Library</NuxtLink></li>
          <li class="unavailable">WideImage</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Library WideImage</h1>
            <p>
              WideImage dengan Seme Framework berjalan dengan baik, baca selengkapnya tentang <a href="http://wideimage.sourceforge.net/" target="_blank">WideImage <i class="fa fa-external-link"></i></a>.
            </p>

            <h2>Cara Install</h2>
            <p>
              Download library WideImage, buka direktori <code>app/kero/lib</code>, kemudian buat direktori baru bernama <code>wideimage</code>, setelah itu <em>copy paste</em> isi library-nya ke direktori tersebut.
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
                  kero
                  └── lib
                    └── wideimage
                      └── ...

                </highlight-code>
              </div>
            </div>

            <h2>Memanggil Library</h2>
            <p>
              Untuk memanggil library, gunakan metode <NuxtLink to="/id/controller/lib/">lib <i class="fa fa-window-restore"></i></NuxtLink> di kelas controller.
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
                  public function __construct(){
                    parent:: __construct();
                    ...
                    $this-&#x3E;lib(&#x22;wideimage&#x22;, 'inc');
                    ...
                  }
                  ..
                </highlight-code>
              </div>
            </div>

            <h2>Contoh Pengguaan</h2>
            <p>
              Berikut ini adalah contoh metode private yang menggunakan <code>WideImage</code> untuk merubah ukuran gambar yang telah selesai diupload.
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

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/id/library/seme_log/" class="btn">
                <i class="fa fa-chevron-left"></i>
                  Seme_Log
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/id/cli/" class="btn">
                  CLI
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
    layout: 'id',
    data() {
      return {
        name: 'Seme Framework 4',
        suffix: ' - Seme Framework 4',
        title: 'Library WideImage',
        description: 'Pelajari penggunaan library WideImage dengan Seme Framework 4.',
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/id',
            text: 'ID',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/library',
            text: 'Library',
          }
        ]
      }
    },
    head() {
      return {
        htmlAttrs: {
          lang: 'id'
        },
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
          "dateCreated": "2021-08-03T18:19:20+07:00",
          "datePublished": "2021-08-03T18:19:20+07:00",
          "dateModified": "2021-08-03T18:19:20+07:00",
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
