<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Kelas Core</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Kelas Core</h1>
            <p>
              Seme Framework memiliki kemampuan untuk memperluas model atau kelas controller dari pada kelas bawaan dengan konsep pengembangan kelas core ini.
              Arti dari <code>core</code> disini bukan inti kode Seme Framework, melainkan merujuk pada konsep pengembangan kelas dari inti kelas Seme Framework.
            </p>

            <h2>Kapan saya harus menggunakan kelas Core?</h2>
            <p>
              Gunakan fitur ini hanya ketika anda membutuhkan metode atau properti yang diperluas dan digunakan secara menyeluruh.
            </p>

            <h2>Mengaktifkan Kelas Core</h2>
            <p>
              Kelas core pada bawaan framework dalam kondisi tidak aktif.
              Sekarang kita akan mempelajari cara mengaktfikannya.
            </p>

            <h3>Merubah Pengaturan</h3>
            <p>
              Asumsikan, nilai dari prefix kelas core adalah <code>ji_</code> dan nama kelas core untuk controllernya adalah <code>controller</code> serta nama kelas core modelnya adalah <code>model</code>.
              Maka, pada pengaturan corenya cukup diisi sesuai dengan nama filenya, tanpa akhiran <code>.php</code>.
              Untuk lebih jelasnya, lihat contoh kode pengaturan dibawah ini.
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

                  /********************************/
                  /* == Core Configuration == */
                  /* register your core class, and put it on: */
                  /*   - app/core/ */
                  /* all var $core_* value in lower case string*/
                  /* @var string */
                  /****************************/
                  $core_prefix = &#x27;ji_&#x27;;
                  $core_controller = &#x27;controller&#x27;;
                  $core_model = &#x27;model&#x27;;

                  ...
                </highlight-code>
              </div>
            </div>

            <h3>Struktur file dan direktori</h3>
            <p>
              Setelah pengaturannya dibuat, kita akan membuat file core berdasarkan struktur file dan direktori seperti ini.
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
                  app/
                  └── core/
                   |── ji_controller.php
                   └── ji_model.php
                </highlight-code>
              </div>
            </div>

            <h3>File <code>JI_Controller.php</code></h3>
            <p>
              Pada contoh ini, kita akan menambahkan metode baru buatan sendiri yaitu metode <code>__json_out</code> kedalam kelas <code>JI_Controller</code>.
              Kemudian, jangan lupa juga untuk menambahkan metode <code>__construct</code> dan method <code>index</code>, karena diperlukan dari abstract class <NuxtLink to="/id/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink>.
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
                  &#x3C;?php
                  /**
                   * Main controller: contains about methods and protperties that automtically included after extending in a class
                   */
                  class JI_Controller extends SENE_Controller
                  {
                    // required function for triggering parent class
                    public function __construct()
                    {
                      parent::__construct();
                    }

                    /**
                     * Output the json formatted string
                     * @param  mixed $dt input object or array
                     * @return string     sting json formatted with its header
                     */
                    public function __json_out($dt)
                    {
                      $this-&#x3E;lib(&#x27;sene_json_engine&#x27;, &#x27;sene_json&#x27;);
                      $data = array();
                      if (isset($_SERVER[&#x27;SEME_MEMORY_VERBOSE&#x27;])) {
                          $data[&#x22;memory&#x22;] = round(memory_get_usage()/1024/1024, 5).&#x22; MBytes&#x22;;
                      }
                      $data[&#x22;status&#x22;]  = (int) $this-&#x3E;status;
                      $data[&#x22;message&#x22;] = $this-&#x3E;message;
                      $data[&#x22;data&#x22;]  = $dt;
                      $this-&#x3E;sene_json-&#x3E;out($data);
                      die();
                    }

                    //required function from abstract class
                    public function index(){ }
                  }
                </highlight-code>
              </div>
            </div>

            <h3>File <code>JI_Model.php</code></h3>
            <p>
              Sementara, contoh kode sumber untuk file <code>JI_Model.php</code> kita akan mencoba menambahkan 2 metode baru kedalam kelas <code>JI_Model</code> yaitu <code>__encrypt</code> dan <code>__decrypt</code>.
              Metode <code>__encrypt</code> digunakan untuk mengenkripsi data dengan AES_ENCRYPT.
              Sementara, metode <code>__decrypt</code> digunakan untuk mengenkripsi data dengan AES_DECRYPT.
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
                  &#x3C;?php
                  class JI_Model extends SENE_Model
                  {
                      public function __construct()
                      {
                          parent::__construct();
                      }

                      /**
                       * Generates encryption command
                       * @param  [type] $val [description]
                       * @return [type]      [description]
                       */
                      public function __encrypt($val)
                      {
                          return &#x27;AES_ENCRYPT(&#x27;.$this-&#x3E;db-&#x3E;esc($val).&#x27;,&#x22;&#x27;.$this-&#x3E;db-&#x3E;enckey.&#x27;&#x22;)&#x27;;
                      }

                      /**
                       * Generates decryption command
                       * @param  [type] $key [description]
                       * @return [type]      [description]
                       */
                      public function __decrypt($key)
                      {
                          return &#x27;AES_DECRYPT(&#x27;.$key.&#x27;,&#x22;&#x27;.$this-&#x3E;db-&#x3E;enckey.&#x27;&#x22;)&#x27;;
                      }
                  }
                </highlight-code>
              </div>
            </div>

            <h2>Referensi Luar</h2>
            <p>
              Berikut ini adalah referensi luar yang digunakan dalam dokumen ini:
              <ul>
                <li>
                  <NuxtLink to="/id/library/sene_json_engine/" target="_blank">SENE_JSON_Engine <i class="fa fa-window-restore"></i></NuxtLink>
                </li>
                <li>
                  <a href="https://www.w3schools.com/js/js_json_intro.asp" target="_blank">JSON <i class="fa fa-external-link"></i></a>
                </li>
                <li>
                  <a href="https://www.geeksforgeeks.org/mysql-aes_encrypt-function/" target="_blank">MySQL AES_ENCRYPT <i class="fa fa-external-link"></i></a>
                </li>
                <li>
                  <a href="https://www.geeksforgeeks.org/mysql-aes_decrypt-function/" target="_blank">MySQL AES_DECRYPT <i class="fa fa-external-link"></i></a>
                </li>
              </ul>
            </p>

          </div>
        </div>

        <div class="nav-bottom">
          <div class="nav-bottom-left">
            <nuxt-link to="/id/cli/" class="btn">
            <i class="fa fa-chevron-left"></i>
              CLI
            </nuxt-link>
          </div>
          <div class="nav-bottom-right">
            <nuxt-link to="/id/core/controller/" class="btn">
              Core: Controller
              <i class="fa fa-chevron-right"></i>
            </nuxt-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'id',
  data (){
    return {
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'Kelas Core',
      description: 'Pelajari tentang konsep dan cara mengaktifkan kelas core untuk Seme Framework 4.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/',
          text: 'ID',
        }
      ],
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
        "dateCreated": "2021-07-28T11:22:00+07:00",
        "datePublished": "2021-07-28T11:22:00+07:00",
        "dateModified": "2021-07-28T11:22:00+07:00",
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
