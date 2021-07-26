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
            <h1 class="">Dasar-dasar Perutean</h1>
            <p>
              Dalam Seme Framework ada yang disebut dengan perutean (<em>Routing</em>).
              Rute ini akan mengarahkan suatu alamat terhadap kelas Controller yang sudah dibuat.
              Jadi singkat ceritanya, rute ini akan digunakan untuk berpindah halaman.
            </p>

            <p>
              Dalam tutorial ini, tidak ada praktek ngoding.
              Hanya ada pembahasan teori bagaimana cara pembuatan halaman di Seme Framework supaya tidak bertanya-tanya bagaimana hubungan antara URL dengan kelas Controller di Seme Framework.
              Dan juga, dalam tutorial ini akan dibahas bagaimana halaman dapat menerima <b>suatu Nilai</b> dari parameter yang di lewatkan melalui alamat rute.
            </p>

            <p>
              Setelah berhasil <NuxtLink to="/id/downloads/" target="_blank">mendownload dan menginstall Seme Framework <i class="fa fa-window-restore"></i></NuxtLink> sehingga dapat dibuka melalui browser dengan alamat <code>http://localhost/seme_framework/</code>.
              Maka, sudah saatnya kita akan mempelajari kelas apa saja yang dieksekusi oleh Seme Framework ketika browser membuka alamat tersebut.
            </p>
            <amp-img layout="responsive" width="660" height="294" :src="fr" alt="Seme Framework di Localhost menggunakan XAMPP"></amp-img>

            <h2>Perutean Standar</h2>
            <p>
              Dalam Seme Framework ada perutean standar yaitu kelas Controller <code>Home</code> dan mengeksekusi metode <code>index()</code>.
              Kelas <code>Home</code> lokasi filenya harus ada di <code>app/controller/home.php</code>.
            </p>
            <p>
              Apabila nama filenya bukan <code>home.php</code>, atau letak filenya tidak berada di dalam direktori <code>app/controller</code> atau nama kelasnya bukan <code>Home</code>, atau tidak ada metode <code>index()</code> di dalam kelas tersebut.
              Sudah dipastikan Seme Framework akan <span class="text-danger">ERROR</span>. Entah itu menimbulkan <code>Error 404 Notfound</code> ataupun Error lainnya.
            </p>
            <p>
              Intinya, rute Seme Framework adalah rute yang dibangun berdasarkan isi dari alamat yang ada di dalam browser.
            </p>

            <h2>Pemetaan Rute</h2>
            <p>
              Supaya tidak bingung, Seme Framework mempermudah pemetaan rute dengan cara setiap alamat akan dipisahkan dalam beberapa segmen.
              Pemisahan ini dibatasi dengan penggunaan garis miring (/) yang ada pada alamat browser.
            </p>
            <p>
              Namun, harus hati-hati juga, segmentasi rute ini hanya berpengaruh terhadap alamat yang tertulis setelah <code>base_url</code>.
              Lihat <NuxtLink to="/id/configuration/" target="_blank">pengaturan base_url di halaman pengaturan <i class="fa fa-window-restore"></i></NuxtLink>.
            </p>
            <h3>Segmentasi Alamat Rute</h3>
            <p>
              Diasumsikan nilai dari pengaturan <code>base_url</code> adalah <code>localhost/sf/</code>.
              Maka, alamat setelah <code>localhost/sf/</code> akan menjadi dipisah menjadi beberapa segmen.
              Mari kita lihat contoh.
            </p>
            <p>
              Contoh: <code>localhost/sf/produk/detail/rolcis-keju-gulung</code>
            </p>
            <p>
              Dari contoh tersebut akan dapat ditemukan 3 segmen yaitu:
              <ol>
                <li><b>produk</b>.</li>
                <li><b>detail</b>.</li>
                <li><b>rolciz</b>.</li>
              </ol>
            </p>
            <h4>Pemetaan Segmen Alamat terhadap kelas controller</h4>
            <p>
              Dari hasil penelaahan alamat segmen, dalam Seme Framework dapat dipetakan menjadi dua alternatif yaitu:
              <ol>
                <li>
                  <p>
                    Segmen pertama <b>produk</b> akan mengarah kepada kelas <code>Produk</code> yang lokasi filenya berada di <code>app/controller/produk.php</code>.
                  </p>
                  <p>
                    Kemudian segmen kedua <b>detail</b> akan mengarah kepada metode <b>detail()</b> yang ada di dalam kelas <code>produk</code>.
                  </p>
                  <p>
                    Dan segmen ketiga <b>rolciz</b> akan mengarah kepada isi dari parameter metode <b>detail()</b> yang ada di dalam kelas <code>produk</code>.
                  </p>
                  <p>&nbsp;</p>
                </li>
                <li>
                  <p>
                    Segmen pertama <b>produk</b> akan mengarah kepada folder atau direktori <code>app/controller/produk</code>.
                  </p>
                  <p>
                    Kemudian segmen kedua <b>detail</b> akan mengarah kepada kelas <b>detail</b> yang berlokasi di <code>app/controller/produk/detail.php</code>.
                  </p>
                  <p>
                    Dan segmen ketiga <b>rolciz</b> akan mengarah kepada metode <b>rolciz()</b> dari kelas <code>detail</code>.
                  </p>
                </li>
              </ol>
            </p>
            <p>
              Baik dari alternatif ke-1 ataupun ke-2, tidak ada yang salah. Seme Framework secara <b>otomatis</b> akan memilih pemetaan yang ada direktorinya terlebih dahulu (alternatif ke-2).
              Apabila tidak ada direktori <b>produk</b> di dalam <code>app/controller</code>, maka Seme Framework akan menggunakan pemetaan alternatif ke-1.
            </p>
            <p>
              Jadi dalam istilah bahasa pemrogramannya, Seme Framework akan menggunakan <b>Alternatif ke-2</b> kemudian <b>Alternatif ke-1</b> akan digunakan sebagai <code>fallback</code>.
            </p>

            <h2>Mengenal nama lain dari Alamat Rute</h2>
            <p>
              Alamat rute di pada ruang lingkup aplikasi berbasis web seringkali diistilahkan dengan <code>URL</code> atau <code>URI</code>.
              URL atau URI ini merupakan penyebutan nama lain dari Alamat Rute yang digunakan oleh Browser.
              Tetapi, antara URI dan URL ada bedanya. Berikut ini adalah perbedaanya.
            </p>
            <h3>Apa itu URL?</h3>
            <p>
              URL atau <em>Uniform Resource Locator</em> adalah alamat yang digunakan oleh browser untuk mengidentifikasi sumber daya yang ada di internet yang dituliskan dalam satu baris teks.
            </p>
            <p>
              URL merupakan bagian dari URI.
            </p>
            <p>
              URL menunjuk ke suatu halaman web yang menggunakan <code>scheme</code> tanpa menggunakan code fragment.
            </p>
            <p>
              Contoh: <a href="https://seme.framework.web.id/id/globals" target="_blank">https://seme.framework.web.id/id/globals</a>.
            </p>

            <h3>Apa itu URI?</h3>
            <p>
              URI atau <em>Uniform Resurce Identifier</em> digunakan browser untuk mengidentifikasi dokumen tunggal dan dituliskan dalam satu baris teks.
            </p>
            <p>
              URI digunakan untuk mengidentifikasi suatu <em>resource</em> dengan lokasi atau nama, ataupun keduanya.
            </p>
            <p>
              URL menunjuk ke suatu halaman web yang menggunakan <code>scheme</code> tanpa menggunakan code fragment.
            </p>
            <p>
              Contoh: <a href="https://seme.framework.web.id/id/globals/#fungsi_base_url" target="_blank">https://seme.framework.web.id/id/globals/#fungsi_base_url</a>.
            </p>
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
          <nuxt-link to="/id/tutorial/basic-static/" class="btn">
            Basic Static Page
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
      title: 'Perutean (Routing)',
      description: 'Mari kita pahami dan pelajari bagaimana cara Perutean (Routing) dengan Seme Framework',
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
        "dateCreated": "2020-06-25T00:51:01+07:00",
        "datePublished": "2020-06-25T00:51:42+07:00",
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
