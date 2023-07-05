<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/library">Library</NuxtLink></li>
          <li class="unavailable">Seme Email</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Seme Email</h1>
            <p>Seme Email adalah library untuk mengirim email dari Seme Framework. Seme Email memiliki template email HTML untuk konten dinamis html.</p>

            <h2>Struktur Class</h2>
            <p>Berikut ini adalah struktur kelas untuk Seme Email.</p>
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
                  Class Seme_Email {
                    public $log;

                    public function __construct() {}

                    public function from($from_email_address[, $name='']): Seme_Email {}

                    public function to($to_email_address[, $name='']): Seme_Email {}

                    public function subject($title_or_subject_email): Seme_Email {}

                    public function text($ascii_text): Seme_Email {}

                    public function html($html_content): Seme_Email {}

                    public function send(): Seme_Email {}

                    public function template($file_template_php): Seme_Email {}

                    public function replacer($array_of_string): Seme_Email {}

                    public function attachment_add($filepath[, $filename='']): Seme_Email {}

                    public function attachment_clear(): Seme_Email {}

                    public function getLog(): string {}

                    public function preview(): void {}
                  }
                </highlight-code>
              </div>
            </div>

            <hr>
            <h2>Cara menggunakan</h2>
            <p>Pertama kita harus memuat pustaka dengan menggunakan pustaka yang dimuat:</p>
            <p><code>$this-&#x3E;lib('seme_email');</code></p>
            <p>Anda dapat menempatkan pemuat perpustakaan di konstruktor pengontrol atau pada setiap metode di pengontrol Anda.</p>
            
            <h2>Penggunaan Dasar</h2>
            <p>
              Untuk pengunaan library Seme Email ini dapat dilakukan menambahkan beberapa baris kode pada sebuah controller di Seme Framework.
              Berikut ini adalah contoh dasar penerapan kode Seme Email pada sebuah Controller.
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
                Class EmailRegister extends \SENE_Controller{
                  public function __construct(){
                    $this-&#x3E;lib('seme_email');
                  }
                  public function index(){
                    $this-&#x3E;seme_email-&#x3E;flush();
                    $this-&#x3E;seme_email-&#x3E;replyto('Support Example Website', 'support@cenah.co.id');
                    $this-&#x3E;seme_email-&#x3E;from('noreply@example.com', 'Adry from Example Website');
                    $this-&#x3E;seme_email-&#x3E;subject('Registration Successful');
                    $this-&#x3E;seme_email-&#x3E;to('agus.setiawan@example.com', 'Agus Setiawan');
                    $this-&#x3E;seme_email-&#x3E;text('Thank you for registering on Example website.');
                    $this-&#x3E;seme_email-&#x3E;send();

                    // opsinal untuk melihat log dari proses kirim email ini
                    dd($this-&#x3E;seme_email-&#x3E;getLog());
                  }
                }
              </highlight-code>
            </div>
          </div>
          <p>
            Untuk menjalankan proses kirim email, anda cukup memanggil class ini melalui browser. Contoh: <code>http://localhost/seme_framework/emailregister</code>.
          </p>

          <h2>Metode Kelas (Class Methods)</h2>
          <p>Seme Email memiliki beberapa metode dan properti yang dapat digunakan untuk mengirim email dengan baik.</p>
          <table class="table table-bordered">
            <tr>
              <th>No</th>
              <th>Metode</th>
              <th>Keterangan</th>
            </tr>
            <tr>
              <td>1</td>
              <td><highlight-code lang="php">Seme_Email::from($from_email_address[, $name='']): Seme_Email</highlight-code></td>
              <td>Wajib</td>
            </tr>
            <tr>
              <td>2</td>
              <td><highlight-code lang="php">Seme_Email::to($to_email_address[, $name='']): Seme_Email</highlight-code></td>
              <td>Wajib</td>
            </tr>
            <tr>
              <td>3</td>
              <td><highlight-code lang="php">Seme_Email::subject($title_or_subject_email): Seme_Email</highlight-code></td>
              <td>Wajib</td>
            </tr>
            <tr>
              <td>4</td>
              <td><highlight-code lang="php">Seme_Email::text($ascii_text): Seme_Email</highlight-code></td>
              <td>Wajib</td>
            </tr>
            <tr>
              <td>5</td>
              <td><highlight-code lang="php">Seme_Email::html($html_content): Seme_Email</highlight-code></td>
              <td>Opsional</td>
            </tr>
            <tr>
              <td>6</td>
              <td><highlight-code lang="php">Seme_Email::send(): Seme_Email</highlight-code></td>
              <td>Wajib</td>
            </tr>
          </table>
          <h3>From Method</h3>
          <p>Metode ini wajib untuk menyatakan asal email. Diperlukan dua parameter, parameter pertama adalah email dan parameter kedua adalah nama pengirim.</p>
          <h3>Subject Method</h3>
          <p>Metode ini wajib untuk menyatakan judul email.</p>

          <h3>To Method</h3>
          <p>Metode ini wajib untuk mendeklarasikan tujuan alamat email. Diperlukan dua parameter, parameter pertama adalah email dan parameter kedua adalah nama pengirim. Dapat dipanggil lebih dari satu kali untuk mengirim beberapa alamat email.</p>
          
          <h3>Template Method</h3>
          <p>
            Dengan template method, kita bisa membuat template email dengan HTML. Untuk melakukannya masuk ke directory <code>kero/lib/seme_email</code>.
            Kemudian setelah itu masuk ke directory <code>template</code>, jika belum ada buatlah terlebih dahulu. Setelah itu buat file baru bernama <code>account_register.php</code>.
            Kemudian isikan kode HTML dibawah ini kedalam file tersebut.
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
                &#x3C;html&#x3E;
                &#x3C;body&#x3E;
                &#x3C;p&#x3E;Hi {{full_name}},&#x3C;/p&#x3E;
                &#x3C;p&#x3E;Thank you for using registering at {{site_name}}.&#x3C;/p&#x3E;
                &#x3C;p&#x3E;You can clicking on this link {{dashboard_link}} to go to your dashboard.&#x3C;/p&#x3E;
                &#x3C;/body&#x3E;
                &#x3C;/html&#x3E;
              </highlight-code>
            </div>
          </div>
          <p>Pada script HTML di atas, kita dapat melihat kode <b>{{full_name}}</b>. Anda dapat mengganti string ini dengan nama asli melalui skrip PHP dengan menggunakan replacer Method.</p>

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
                &#x3C;?php
                Class EmailRegister extends \SENE_Controller{
                  public function __construct(){
                    $this-&#x3E;lib('seme_email');
                  }
                  public function index(){
                    $replacer = array();
                    $replacer['site_name'] = 'Example Website';
                    $replacer['full_name'] = 'Agus Setiawan';
                    $replacer['dashboard_link'] = base_url('dashboard/');

                    $this-&#x3E;seme_email-&#x3E;flush();
                    $this-&#x3E;seme_email-&#x3E;replyto('Support Example Website', 'support@cenah.co.id');
                    $this-&#x3E;seme_email-&#x3E;from('noreply@example.com', 'Adry from Example Website');
                    $this-&#x3E;seme_email-&#x3E;subject('Registration Successful');
                    $this-&#x3E;seme_email-&#x3E;to('agus.setiawan@example.com', 'Agus Setiawan');
                    $this-&#x3E;seme_email-&#x3E;template('account_register');
                    $this-&#x3E;seme_email-&#x3E;replacer($replacer);
                    $this-&#x3E;seme_email-&#x3E;send();

                    // opsinal untuk melihat log dari proses kirim email ini
                    dd($this-&#x3E;seme_email-&#x3E;getLog());
                  }
                }
              </highlight-code>
            </div>
          </div>
          <p>Jika contoh ini digabungkan dengan template email di atas, Anda dapat mengirim email dengan <b>{{full_name}}</b> diganti dengan <b>Agus Setiawan</b>.</p>
          <h3>Flush Metode</h3>
          <p>Gunakan metode ini untuk menghapus nilai dan properti yang telah ditetapkan yang digunakan sebelumnya.</p>
          <h3>Preview Metode</h3>
          <p>Gunakan metode ini untuk menampilkan ke layar email template yang telah di proses oleh library Seme Email.</p>
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
              <nuxt-link to="/id/seme_log/" class="btn">
                Seme_Log
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
      full_name: '{{full_name}}',
      site_name: '{{site_name}}',
      dashboard_link: '{{dashboard_link}}',
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'Perpustakaan Seme Email',
      description: 'Pelajari selengkapnya tentang Perpustakaan (library) Seme_Email di Seme Framework versi 4.0.0',
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
        "dateCreated": "2021-08-11T19:52:38+07:00",
        "datePublished": "2021-08-11T19:52:38+07:00",
        "dateModified": "2023-07-04T23:13:04+07:00",
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
