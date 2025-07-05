<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Download</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1 class="">Download &amp; Install</h1>
            <p>
              Anda dapat mendownload Seme Framework dalam bentuk file <code>zip</code> atau <code>git clone</code> melalui Github.
            </p>

            <h2>Buka Github</h2>
            <p>
              Pertama-tama, buka halaman github <a href="https://github.com/drosanda/seme-framework" target="_blank">Seme Framework <i class="fa fa-external-link"></i></a>.
              Setelah muncul tampilan halaman github, klik tombol <code>code</code> yang warna <b>hijau</b>.
            </p>
            <amp-img layout="responsive" width="2398" height="1584" :src="sfgp" alt="Halaman Seme Framework di Gitub"></amp-img>


            <h3 id="1">1. Download dan Install dengan File Zip</h3>
            <p>
              Setelah tampil halaman github dan klik tombol hijau, nanti akan muncul tampilan pilihan untuk download file zip.
              Klik pilihan <b>download ZIP</b> untuk mendownload file ZIP.
            </p>
            <amp-img layout="responsive" width="2556" height="1140" :src="sfgd" alt="pilihan download Seme Framework di Github"></amp-img>

            <br>
            <h4 id="1_1">1.1. Extrak File Zip</h4>
            <p>
              Setelah di download, biasanya nama filenya bernama <code>seme-framework-master.zip</code>.
              Cari file hasil download tersebut, kemudian klik kanan, pilih <code>extract</code> atau <code>ekstrak</code> untuk mengeluarkan isi file didalam file zip.
            </p>

            <h5 id="1_1_a">1.1.a. Install di Windows menggunakan XAMPP</h5>
            <p>
              Sesuai dari halaman persyaratan, dalam contoh kali ini kita akan menggunakan XAMPP.
              Asumsikan XAMPP terinstall didalam drive <code>D:</code>.
              Maka, untuk tujuan <code>extract</code> file zipnya adalah:
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
                  # Contoh di windows
                  D:\xampp\htdocs\seme_framework
                </highlight-code>
              </div>
            </div>
            <p>
              Apabila belum ada folder <code>seme_framework</code>, buatlah terlebih dahulu. Setelah itu barulahekstrak file zip hasil download tadi kedalamnya.
            </p>

            <h5 id="1_1_b">1.1.b. Install di Mac menggunakan XAMPP</h5>
            <p>
              Sesuai dari halaman persyaratan, dalam contoh kali ini kita akan menggunakan XAMPP.
              Asumsikan XAMPP sudah terinstall, untuk tujuan <code>extract</code> file zipnya adalah:
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
                  # Contoh di Mac
                  /Applications/XAMPP/htdocs/seme_framework
                </highlight-code>
              </div>
            </div>
            <p>
              Apabila belum ada direktori <code>seme_framework</code>, buatlah terlebih dahulu, setelah itu barulah ekstrak file zip hasil download tadi kedalamnya.
            </p>

            <h5 id="1_1_c">1.1.c. Install di Linux menggunakan XAMPP</h5>
            <p>
              Sesuai dari halaman persyaratan, dalam contoh kali ini kita akan menggunakan XAMPP.
              Asumsikan XAMPP sudah terinstall, untuk tujuan <code>extract</code> file zipnya adalah:
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
                  # Contoh di Linux
                  /opt/lampp/htdocs/seme_framework
                </highlight-code>
              </div>
            </div>
            <p>
              Apabila belum ada direktori <code>seme_framework</code>, buatlah terlebih dahulu, setelah itu barulah ekstrak file zip hasil download tadi kedalamnya.
            </p>

            <h3 id="2">2. Download dan Install dengan Git</h3>
            <p>
              Setelah tampil halaman github dan klik tombol hijau, nanti akan muncul tampilan URL (<code><u><b><em>git@git..</em></b></u></code>) link repositori Github-nya.
              Klik pada ikon sebelah URL untuk melakukan proses <code>copy</code>, sehingga nanti bisa di <code>paste</code> pada saat melakukan perintah <code>git clone</code>.
            </p>
            <amp-img layout="responsive" width="2556" height="1140" :src="sfgd" alt="pilihan download Seme Framework di Github"></amp-img>

            <br>

            <h4 id="2_1">2.1. untuk Windows</h4>
            <p>
              Sesuai dari halaman persyaratan, pastikan <b>XAMPP</b> dan <b>git</b> sudah terinstall di windows.
              Asumsikan XAMPP terinstall didalam drive <code>D:</code>.
              Pertama-tama buka <code>CMD</code> atau <code>CMDER</code> atau aplikasi teminal lain seperti <code>PowerShell</code>.
              Setelah itu ketikan perintah berikut ini:
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
                  # pindah ke direktori D
                  D:

                  # pindah ke folder XAMPP/htdocs
                  cd /xampp/htdocs

                  # cek folder seme_framework sudah ada atau belum
                  dir /p

                  # apbila belum ada, bisa dilewat perintah ini
                  # apabila sudah ada, hapus folder seme_framework
                  rmdir seme_framework

                  # download dari github melalui git
                  git clone git@github.com:drosanda/seme-framework.git seme_framework
                </highlight-code>
              </div>
            </div>

            <h5 id="2_2">2.2. untuk Mac</h5>
            <p>
              Sesuai dari halaman persyaratan, pastikan <b>XAMPP</b> dan <b>git</b> sudah terinstall di Mac.
              Pertama-tama buka <code>terminal</code>, kemudian setelah itu ketikan perintah berikut ini:
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
                  # pindah ke folder XAMPP/htdocs
                  cd /Applications/XAMPP/htdocs

                  # cek folder seme_framework sudah ada atau belum
                  ls

                  # apbila belum ada, bisa dilewat perintah ini
                  # apabila sudah ada, hapus direktori seme_framework
                  rm -fr seme_framework

                  # download dari github melalui git
                  git clone git@github.com:drosanda/seme-framework.git seme_framework
                </highlight-code>
              </div>
            </div>

            <h5 id="2_3">2.3 untuk Linux</h5>
            <p>
              Sesuai dari halaman persyaratan, pastikan <b>XAMPP</b> dan <b>git</b> sudah terinstall di Linux.
              Pertama-tama buka <code>terminal</code>, kemudian setelah itu ketikan perintah berikut ini:
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
                  # pindah ke folder htdocs
                  cd /opt/lampp/htdocs

                  # cek folder seme_framework sudah ada atau belum
                  ls

                  # apbila belum ada, bisa dilewat perintah ini
                  # apabila sudah ada, hapus direktori seme_framework
                  rm -fr seme_framework

                  # download dari github melalui git
                  git clone git@github.com:drosanda/seme-framework.git seme_framework
                </highlight-code>
              </div>
            </div>

            <h2>Percobaan</h2>
            <p>
              Untuk mencoba hasil install-nya, pastikan Apache pada XAMPP telah dijalankan.
              Setelah itu, buka aplikasi web browser seperti Google Chrome atau Firefox atau Micorsoft Edge.
              Kemudian isikan <code>localhost/seme_framework</code> pada kotak alamat aplikasi web browser.
              Apabila hasilnya sama seperti pada screenshot dibawah ini, berarti proses instalasi Seme Framework telah selesai.
            </p>

            <amp-img layout="responsive" width="660" height="294" :src="fr" alt="Seme Framework di Localhost menggunakan XAMPP"></amp-img>
            <p>
              Apabila ada error atau kesulitan dalam proses instalasi, silakan buka <a href="https://github.com/drosanda/seme-framework/issues/new?assignees=&labels=documentation&template=documentation.md&title=Documentation+Issue+%2F+Request+%2F+Fix" target="_blank">isu baru <i class="fa fa-external-link"></i></a> di github.
            </p>

            <h2>Mencoba Contoh yang telah berjalan</h2>
            <p>Berikut adalah daftar contoh kerja yang menggunakan Kerangka Seme. Anda dapat mengkloning atau mengunduh dengan mengklik tautan berikut:</p>
            <ul>
              <li><a href="https://github.com/drosanda/seme_adminhtml" target="_blank">Admin HTML template</a></li>
              <li><a href="https://github.com/drosanda/address-id-api" target="_blank">API Address Provider (ID)</a></li>
              <li><a href="https://github.com/drosanda/bank-id-api" target="_blank">API Address Provider (ID)</a></li>
              <li><a href="https://github.com/drosanda/seme_landing" target="_blank">Landing Page</a></li>
              <li><a href="https://github.com/drosanda/semesid" target="_blank">Sistem Informasi Desa</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/requirements" class="btn">
          <i class="fa fa-chevron-left"></i>
            Persyaratan
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/directory_structure" class="btn">
            Struktur File dan Direktory
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
        fr: require('~/assets/img/first-run.png'),
        sfgd: require('~/assets/img/downloads/seme-framework-github-download.png'),
        sfgp: require('~/assets/img/downloads/seme-framework-github-page.png'),
        name: 'Seme Framework 4',
        suffix: ' - Seme Framework 4',
        title: 'Download dan Instal',
        description: 'Pelajari selengkapnya tentang cara download dan instal Seme Framework 4',
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/id',
            text: 'ID',
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
          "dateCreated": "2021-08-07T12:13:43+07:00",
          "datePublished": "2021-08-07T12:13:43+07:00",
          "dateModified": "2025-07-06T01:45:43+07:00",
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
