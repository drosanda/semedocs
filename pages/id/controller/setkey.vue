<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/controller">Controller</NuxtLink></li>
          <li class="unavailable">setKey</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Metode setKey</h1>
            <p>
              Metode <code>setKey</code> digunakan untuk menyimpan nilai di dalam variabel global $_SESSION, sehingga dapat tersedia dimana saja didalam semua kelas controller.
              Metode biasanya ini digunakan untuk menyimpan data setelah proses login berhasil.
            </p>

            <h2>Bentuk Umum</h2>
            <p>
              Berikut ini bentuk umum penggunaan metode <code>setKey</code> dari kelas <NuxtLink to="/id/controller/#SENE_Controller">SENE_Controller <i class="fa fa-window-restore"></i></NuxtLink>.
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
                  $this-&#x3E;setKey(mixed $values): $this
                </highlight-code>
              </div>
            </div>
            <h3>Parameter</h3>
            <p>Metode ini membutuhkan 1 parameter wajib.</p>
            <h4>$values</h4>
            <p>
              Nilai dari <code>$values</code> bisa berupa <code>array</code> atau <code>object</code> tergantung kebutuhan.
            </p>

            <h2>Pengaturan</h2>
            <p>
              Kunci untuk menyimpan sesi supaya tidak bentrok dengan aplikasi lain dalam 1 server yang sama, pengaturannya disimpan didalam file pengaturan.
              Berikut ini adalah contoh file pengaturan <code>development.php</code>.
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
                  $saltkey = &#x27;semeframework21;;
                  ...
                </highlight-code>
              </div>
            </div>

            <h2>Contoh</h2>
            <p>Berikut ini adalah contoh penggunaannya untuk API dalam proses otentifikasi pengguna (login) pada kelas controller.</p>
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
                  class Login extends SENE_Controller {
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;setTheme(&#x27;front&#x27;);
                      $this-&#x3E;load(&#x27;front/b_user_model&#x27;,&#x27;bum&#x27;);
                    }
                    .
                    .
                    .
                    public function proses(){
                      // ambil input yang dibutuhkan untuk login
                      // biasanya email dan password
                      $email = $this-&#x3E;input-&#x3E;post(&#x22;email&#x22;);
                      $password = $this-&#x3E;input-&#x3E;post(&#x22;password&#x22;);

                      // validasi email
                      // ambil data user berdasarkan email
                      // dari database melalui model bum
                      // untuk melihat model bum ini di bagian metode constructor
                      $user = $this-&#x3E;bum-&#x3E;getByEmail($email);
                      if(isset($user-&#x3E;id)){
                        //validasi password
                        if(!password_verify($password, $user-&#x3E;password)){
                          $this-&#x3E;status = 1707;
                          $this-&#x3E;message = &#x27;Invalid email or password&#x27;;
                          $this-&#x3E;__json_out($data);
                          return false;
                        }
                        // kalau password cocok dengan yang ada di DB
                        // maka user dianggap sudah berhasil login
                        // karena sudah melewati 2 tahap ini

                        // sekarang tinggal simpan data user ke session
                        // dengan metode setKey();

                        //buat variabel $sess dulu, berisikan standar kelas kosong
                        $sess = new stdClass();

                        // buat object user,
                        // kemudian isi object tersebut dengan data user
                        // yang telah diambil sebelumnya
                        // dari database
                        $sess-&#x3E;user = $user;

                        // barulah setelah itu
                        // masukan variabel $sess
                        // kedalam parameter metode setKey()
                        $this-&#x3E;setKey($sess);
                      }else{
                        $this-&#x3E;status = 1707;
                        $this-&#x3E;message = &#x27;Invalid email or password&#x27;;
                        $this-&#x3E;__json_out($data);
                        return false;
                      }
                    }
                    .
                    .
                    .
                  }
                </highlight-code>
              </div>
            </div>

            <div class="message is-info">
              <div class="message-body">
                <p><b>Tips</b></p>
                <p>Baik <code>setKey()</code> maupun <code>getKey()</code> membutuhkan pengaturan <code>$saltkey</code> untuk berfungsi dengan baik.</p>
                <p>Pelajari tentang pengaturan <code>$saltkey</code> di halaman <NuxtLink to="/id/configuration/session/">Pengaturan Session <i class="fa fa-window-restore"></i></NuxtLink>.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/controller/session/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Session
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/controller/settheme/" class="btn">
            setTheme
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
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
      title: 'Metode setKey dari SENE_Controller',
      description: 'Metode setKey dari kelas SENE_Controller dalam SEME Framework versi 4.0.0 digunakan untuk memanggil variabel yang tersimpan didalam $_SESSION.',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/controller',
          text: 'Controller',
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
        "dateCreated": "2020-06-11T10:12:00+07:00",
        "datePublished": "2020-06-11T10:12:00+07:00",
        "dateModified": "2021-06-25T08:29:40+07:00",
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
