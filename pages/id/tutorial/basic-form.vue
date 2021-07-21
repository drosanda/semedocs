<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/tutorial/">Tutorial</NuxtLink></li>
          <li class="unavailable">Dasar-dasar Perutean</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Penggunaan Form HTML dan Prosesnya</h1>
            <p>
              Untuk memproses inputan pada Seme Framework sudah tidak perlu lagi menggunakan <code>$_POST</code>.
              Seme Framework telah menyediakan kelas khusus untuk mengelola proses inputan ini.
            </p>

            <h2>Proses Manualnya (tanpa Seme Framework)</h2>
            <p>
              Untuk proses manual, PHP telah menyediakan variabel SUPER GLOBAL untuk menangani pengiriman FORM ini.
              Seperti <code>$_POST</code>, <code>$_GET</code>, <code>$_FILES</code>, dan <code>$_REQUEST</code>.
            </p>
            <p>
              Dalam contoh ini akan dibuat 2 file pada direktori yang sama yaitu file <code>index.php</code> dan <code>proses.php</code>.
              Untuk contoh, simpan kedua file ini didalam <code>D:/XAMPP/htdocs/cobaform</code>.
              Untuk lebih jelasnya lihat contoh kode berikut ini.
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
                File index.php
              </div>
              <div class="maccontent">
                <highlight-code lang="html">
                  &#x3C;form method=&#x22;post&#x22; action=&#x22;proses.php&#x22;&#x3E;
                    &#x3C;input type=&#x22;text&#x22; name=&#x22;nama&#x22; /&#x3E;
                    &#x3C;br&#x3E;
                    &#x3C;input type=&#x22;text&#x22; name=&#x22;alamat&#x22; /&#x3E;
                    &#x3C;br&#x3E;
                    &#x3C;select name=&#x22;gender&#x22;&#x3E;
                      &#x3C;option value=&#x22;1&#x22;&#x3E;Pria&#x3C;/option&#x3E;
                      &#x3C;option value=&#x22;0&#x22;&#x3E;Wanita&#x3C;/option&#x3E;
                    &#x3C;/select&#x3E;
                    &#x3C;br&#x3E;
                    &#x3C;button type=&#x22;submit&#x22;&#x3E;Simpan&#x3C;/button&#x3E;
                  &#x3C;/form&#x3E;
                </highlight-code>
              </div>
            </div>

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
                File proses.php
              </div>
              <div class="maccontent">
                <highlight-code lang="php">
                  &#x3C;?php
                  $nama = $_POST[&#x27;nama&#x27;];
                  $alamat = $_POST[&#x27;alamat&#x27;];
                  $gender = $_POST[&#x27;gender&#x27;];

                  echo &#x27;Nama: &#x27;.$nama.&#x27; beralamat di: &#x27;.$alamat.&#x27; berjenis kelamin: &#x27;;
                  if($gender == 1){
                    echo &#x27;pria&#x27;;
                  }else{
                    echo &#x27;wanita&#x27;;
                  }
                </highlight-code>
              </div>
            </div>
            <p>
              Ketika kita akan buka contoh kode tersebut melalui halaman <code>localhost/cobaform/index.php</code> kemudian isi dan klik tombol simpan.
              Proses akan berjalan dengan baik.
              Namun, ketika anda coba buka langsung file <code>localhost/cobaform/proses.php</code>, itu akan menyebabkan error karena tidak ada nilai di <code>$_POST</code> yang terikirim.
            </p>

            <h3>Perubahan kode manual</h3>
            <p>
              Supaya tidak menimbulkan error ketika membuka langsung <code>localhost/cobaform/proses.php</code>, kita harus menambahkan validasi untuk error tersebut.
              Untuk selengkapnya, mari kita lihat contoh.
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
                File proses.php
              </div>
              <div class="maccontent">
                <highlight-code lang="php">
                  &#x3C;?php
                  $nama = '-';
                  if(isset($_POST[&#x27;nama&#x27;])){
                    $nama = $_POST[&#x27;nama&#x27;];
                  }
                  $alamat = '-';
                  if(isset($_POST[&#x27;alamat&#x27;])){
                    $alamat = $_POST[&#x27;alamat&#x27;];
                  }
                  $gender = '-';
                  if(isset($_POST[&#x27;gender&#x27;])){
                    $gender = $_POST[&#x27;gender&#x27;];
                  }

                  echo &#x27;Nama: &#x27;.$nama.&#x27; beralamat di: &#x27;.$alamat.&#x27; berjenis kelamin: &#x27;;
                  if($gender == 1){
                    echo &#x27;pria&#x27;;
                  }else{
                    echo &#x27;wanita&#x27;;
                  }
                </highlight-code>
              </div>
            </div>
            <h2>Kesimpulan</h2>
            <p>
              Penggunaan variabel global bawaan PHP, harus divalidasi terlebih dahulu sebelum digunakan.
              Ketika akan menggunakan Seme Framework untuk pengelolaan input ini, bisa dipelajari di halaman <NuxtLink to="/id/controller/input/">Controller::input</NuxtLink>.
            </p>

          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/tutorial/basic-static/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Basic Static
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/tutorial/" class="btn">
            Tutorial
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
  data (){
    return {
      fr: require('~/assets/img/first-run.png'),
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'Pembuatan Halaman Statis',
      description: 'Mari kita pahami dan pelajari bagaimana cara Pembuatan Halaman Statis dan perpindahan halamanya dengan Seme Framework',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/',
          text: 'ID',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/tutorial/',
          text: 'Tutorial',
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
        "dateCreated": "2020-06-25T12:23:01+07:00",
        "datePublished": "2020-06-25T13:33:42+07:00",
        "dateModified": "2021-06-25T13:34:39+07:00",
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
