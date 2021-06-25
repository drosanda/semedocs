<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class="">Perutean URI (URI Routing)</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Perutean URI (<em>URI Routing</em>)</h1>
            <p>Biasanya ada hubungan satu-ke-satu antara string URL dan kelas/metode pengontrol yang sesuai. Segmen dalam URI biasanya mengikuti pola ini:</p>
            <ul>
              <li><code>example.com/class/method/id/</code></li>
            </ul>
            <p>Namun, dalam beberapa kasus, Anda mungkin ingin memetakan kembali hubungan ini sehingga kelas/fungsi yang berbeda dapat dipanggil alih-alih yang terkait dengan URL.</p>

            <p>Misalnya, katakanlah Anda ingin URL Anda memiliki prototipe ini:</p>
            <ul>
              <li>example.com/product/1/</li>
              <li>example.com/product/2/</li>
              <li>example.com/product/3/</li>
              <li>example.com/product/4/</li>
            </ul>

            <p>Biasanya segmen kedua dari URL dicadangkan untuk nama fungsi, tetapi dalam contoh di atas, ia memiliki ID produk. Untuk mengatasinya, Seme Framework memungkinkan Anda untuk memetakan ulang pengendali URI.</p>
            <hr>

            <h2>Setting custom URI Routing</h2>
            <p>Aturan perutean ditentukan di <code>app/config/</code> Anda. Anda dapat menyetel perutean ini untuk diterapkan ke dalam produksi, staging, atau pengembangan bergantung pada kebutuhan Anda.</p>
            <p>Pada setiap file konfigurasi, Seme Framework telah membuat bagian komentar untuk menulis ulang URI di bagian perutean.</p>
            <p>Dan kemudian jika Anda membuka file konfigurasi, Anda akan melihat larik bernama <code>$routes</code> yang memungkinkan Anda menentukan kriteria perutean Anda sendiri. Rute dapat ditentukan menggunakan wildcard </p>
            <hr>

            <h2>Wildcards</h2>
            <p>Rute wildcard tipikal mungkin terlihat seperti ini:</p>
            <code class="language-php">
              $routes['product/:num'] = "catalog/product_lookup";
            </code>

            <p>Dalam sebuah rute, kunci larik berisi URI yang akan dicocokkan, sedangkan nilai larik berisi tujuan yang harus dirutekan ulang. Dalam contoh di atas, jika kata literal "produk" ditemukan di segmen pertama URL, dan nomor ditemukan di segmen kedua, kelas "katalog" dan metode "pencarian_produk" akan digunakan.</p>

            <p>Anda dapat mencocokkan nilai literal atau Anda dapat menggunakan dua jenis wildcard:</p>
            <ul>
              <li><code>(:num)</code> akan cocok dengan segmen yang hanya berisi angka.</li>
              <li><code>(:any)</code> akan cocok dengan segmen yang berisi karakter apa pun.</li>
            </ul>

            <p>Catatan: Rute akan berjalan sesuai urutan yang ditentukan. Rute dibaca dari yang paling awal dalam kode menuju paling akhir. Urutan rute paling akhir, akan menimpa urutan yang ada sebelumnya apabila memiliki kunci (<em>key</em>) yang sama.</p>

            <h3>Contoh</h3>
            <p>Berikut adalah beberapa contoh perutean:</p>
            <code>
              $routes['produk'] = "products";
            </code>
            <p>URL yang berisi kata "produk" di segmen pertama akan dipetakan ulang ke kelas "produk".</p>

            <code>$routes['produk/ojan'] = "products/detail/15";</code>

            <p>URL yang berisi segmen produk/ojan akan dipetakan kembali ke kelas "produk" dan metode "detail". ID akan disetel ke "15".</p>

            <code>
              $routes['product/(:any)'] = "catalog/product_lookup";
            </code>
            <p>URL dengan "produk" sebagai segmen pertama, dan apa pun di segmen kedua akan dipetakan ulang ke kelas "katalog" dan metode "pencarian_produk". </p>
            <code>
              $routes['product/(:num)'] = "catalog/product_lookup_by_id/$1";
            </code>
            <p>URL dengan "produk" sebagai segmen pertama, dan nomor di segmen kedua akan dipetakan ulang ke kelas "katalog" dan metode "product_lookup_by_id" meneruskan kecocokan sebagai variabel ke fungsi.</p>


            <div class="message is-info">
              <div class="message-body">
                <p>
                  Penting: jangan tambahkan garis miring (/) pada awalan atau akhiran .
                </p>
              </div>
            </div>

            <hr>
            <h3>Reserved Routes (Rute Tercadang)</h3>
            <p>Ada dua rute yang Rute Tercadang didalam seme Framework, yaitu:</p>
            <code>
              $routes['home'] = 'home';
            </code>
            <br>
            <p>Rute ini menunjukkan kelas pengontrol mana yang harus dimuat jika URI tidak berisi data, yang akan terjadi ketika orang memuat URL root Anda. Dalam contoh di atas, kelas "selamat datang" akan dimuat. Anda dianjurkan untuk selalu memiliki rute default jika tidak, halaman 404 akan muncul secara default.</p>
            <code>
              $routes['notfound'] = 'notfound';
            </code>
            <br>
            <p>Rute ini menunjukkan kelas pengontrol mana yang harus dimuat jika pengontrol yang diminta tidak ditemukan. Secara default akan dijalankan <code>app/controller/notfound.php</code>. Anda dapat mengubahnya jika perlu.</p>

            <div class="message is-info">
              <div class="message-body">
                <p>
                  Penting: Rute cadangan harus berada pada posisi paling awal sebelum rute global (<em>WildCards</em>).
                </p>
              </div>
            </div>

            <p>Rute cadangan lainnya adalah rute rahasia admin. Silakan merujuk ke <NuxtLink to="/id/uri_routing/admin/">dokumen ini</NuxtLink> untuk menggunakan perutean rahasia admin.</p>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/tutorial/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Tutorial
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/uri_routing/admin/" class="btn">
            Uri Routing: Admin
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
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4 Bahasa Indonesia',
      title: 'Perutean URI',
      description: 'Pelajari selengkapnya tentang the Perutean URI (URI Routing) of melalui dokumentasi Seme Framework versi 4.0.0.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/',
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
        "dateModified": "2021-06-25T08:06:17+07:00",
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
