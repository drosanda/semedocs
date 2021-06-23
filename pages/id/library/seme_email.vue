<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/library">Library</NuxtLink></li>
          <li class="unavailable">Seme Email</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Seme Email</h1>
            <p>Seme Email adalah library untuk mengirim email dari Seme Framework. Seme Email memiliki template email HTML untuk konten dinamis html.</p>
            <hr>
            <h2>Cara menggunakan</h2>
            <p>Pertama kita harus memuat pustaka dengan menggunakan pustaka yang dimuat:</p>
            <p><code>$this->lib('seme_email');</code></p>
            <p>Anda dapat menempatkan pemuat perpustakaan di konstruktor pengontrol atau pada setiap metode di pengontrol Anda.</p>
            <h2>Penggunaan Dasar</h2>
            <p>Seme Email memiliki beberapa metode, berikut adalah daftar metode umum:</p>

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
                  Class Product extends SEME_Controller{
                  public function __construct(){
                    $this->lib('seme_log');
                  }
                  public function index(){
                    $replacer = array();
                    $replacer['site_name'] = $this->site_name;
                    $replacer['nama'] = $nama;
                    $replacer['activation_link'] = $link;
                    $this->seme_email->flush(); //optional
                    $this->seme_email->replyto($this->site_name,$this->site_replyto);
                    $this->seme_email->from($this->site_email,$this->site_name);
                    $this->seme_email->subject('Registration Successful');
                    $this->seme_email->to($email,$nama);
                    $this->seme_email->template('account_register');
                    $this->seme_email->replacer($replacer);
                    $this->seme_email->send();
                  }
                }
              </highlight-code>
            </div>
          </div>
          <h2>Metode Kelas (Class Methods)</h2>
          <p>Seme Email memiliki beberapa metode yang dapat digunakan untuk mengirim email dengan baik.</p>
          <h3>From Method</h3>
          <p>Metode ini wajib untuk menyatakan asal email. Diperlukan dua parameter, parameter pertama adalah email dan parameter kedua adalah nama pengirim.</p>
          <h3>Subject Method</h3>
          <p>Metode ini wajib untuk menyatakan judul email.</p>

          <h3>To Method</h3>
          <p>Metode ini wajib untuk mendeklarasikan tujuan alamat email. Diperlukan dua parameter, parameter pertama adalah email dan parameter kedua adalah nama pengirim. Dapat dipanggil lebih dari satu kali untuk mengirim beberapa alamat email.</p><h3>Template Method</h3>

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
                &#x3C;html&#x3E;
                &#x3C;body&#x3E;
                &#x3C;p&#x3E;Hi {{first_name}},&#x3C;/p&#x3E;
                &#x3C;p&#x3E;Thank you for using seme framework&#x3C;/p&#x3E;
                &#x3C;/body&#x3E;
                &#x3C;/html&#x3E;
              </highlight-code>
            </div>
          </div>
          <p>Pada script HTML di atas, kita dapat melihat kode <b>{{first_name}}</b>. Anda dapat mengganti string ini dengan nama asli melalui skrip.</p>

          <h3>Replacer Method</h3>
          <p>Metode ini memungkinkan penggantian string pada template email dengan pengkodean. Berikut adalah contohnya:</p>

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
                $replacer = array();
                $replacer['first_name'] = 'Agus Setiawan';
                $this->seme_email->replacer($replacer);
              </highlight-code>
            </div>
          </div>
          <p>Jika contoh ini digabungkan dengan template email di atas, Anda dapat mengirim email dengan <b>{{first_name}}</b> diganti dengan <b>Agus Setiawan</b>.</p>
          <h3>Flush Metode</h3>
          <p>Gunakan metode ini untuk menghapus properti yang ditetapkan yang digunakan sebelumnya.</p>
          <hr>
          <h2>Catatan Khusus</h2>
          <p>Mohon lebih diperhatikan jika ingin mengirim email dengan mengikuti panduan komunitas untuk penggunaan email. Jika email Anda selalu dikirim ke spam, Anda harus menggunakan domain asli dan email yang benar-benar berfungsi.</p>
          <p>Google telah menyelesaikan panduan untuk penggunaan email. Berikut penjelasan singkatnya:</p>
          <ul>
            <li>Selalu cantumkan Subjek di email.</li>
            <li>Body atau konten utama email terdiri dari salam, konten utama, dan footer.</li>
            <li>Hindari lampiran.</li>
            <li>Untuk tujuan default, selalu gunakan noreply@example.com, sesuaikan example.com dengan domain Anda.</li>
            <li>Untuk konten email terkait uang, gunakan finance@example.com dan pastikan email aktif.</li>
            <li>Untuk tujuan pemasaran harap gunakan nama asli pemasaran seperti adry@example.com dan pastikan email aktif dapat dibalas.</li>
          </ul>

          <div class="nav-bottom">
            <div class="nav-bottom-left">
              <nuxt-link to="/id/library/" class="btn">
              <i class="fa fa-chevron-left"></i>
                Library
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
      suffix: ' - Seme Framework 4 Bahasa Indonesia',
      title: 'Perpustakaan Seme Email',
      description: 'Pelajari selengkapnya tentang Perpustakaan (library) Seme_Email di Seme Framework versi 4.0.0',
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
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/library/',
          text: 'Library',
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
        "dateModified": "2021-06-23T01:04:00+07:00",
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
