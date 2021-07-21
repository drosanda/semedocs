<template>
  <div class="section ">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.2 (Bahasa)</NuxtLink></li>
          <li class="unavailable">Persyaratan</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1 class="">Persyaratan</h1>
            <p>Seme Framework berjalan dengan baik di PHP 5.6, tetapi PHP 7.4.x direkomendasikan terkait dengan kinerja keamanannya.</p>
            <p>Adapun extensi PHP yang dibutuhkan yaitu:</p>
            <ul>
              <li>MySQLi</li>
              <li>JSON</li>
              <li>Session</li>
            </ul>
            <h2>Dukungan Sistem Database</h2>
            <p>Database diperlukan untuk sebagian besar pemrograman aplikasi web. Database yang didukung saat ini adalah:</p>
            <ul>
              <li>MySQL 5.1+ melalui driver MySQLi</li>
              <li>MariaDB version 5.5.x melalui driver MySQLi</li>
              <li>MariaDB version 10.x.x melalui driver MySQLi</li>
            </ul>
            <p>Koneksi ke database tidak akan berjalan dengan lancar sebelum pengaturan database dilakukan dengan baik baik dan benar.</p>

            <h2>IDE atau Text Editor</h2>
            <p>IDE atau Editor Teks diperlukan untuk mengimplementasikan kode ke dalam Seme Framework. Anda dapat memilih IDE apa pun tetapi Seme Framework dibangun dengan menggunakan:</p>
            <ul>
              <li><a href="https://notepad-plus-plus.org/downloads/">Notepad++</a> Editor Teks Sederhana tetapi dengan fitur yang lebih baik</li>
              <li><a href="https://atom.io/">Atom</a> Hackable Text editor</li>
              <li><a href="https://code.visualstudio.com/download">VSCode</a> Lebih ringan dari pada atom</li>
            </ul>

            <h2>Lingkungan</h2>
            <p>Seme Framework berjalan dengan baik dengan menggunakan jenis lingkungan ini:</p>
            <ul>
              <li><a href="https://www.apachefriends.org/download">XAMPP</a> untuk Mac, Linux, dan Windows</li>
              <li><a href="https://hub.docker.com/r/drosanda/seme_webstack">Seme WebStack Docker Container</a></li>
              <li>Nginx dengan PHP-FPM 7.4.x berjalan di CentOS 7</li>
            </ul>

            <h2>Persyaratan tambahan</h2>
            <p>Seme Framework lebih kuat dan fleksibel apabila didukung dengan aplikasi ini:</p>
            <ul>
              <li><a href="https://git-scm.com/downloads">GIT</a> untuk Mac, Linux, dan Windows</li>
              <li><a href="https://cmder.net/">CMDER</a> Console / terminal emulator untuk Windows saja</li>
              <li><a href="https://ohmyz.sh/">Oh My ZSH</a> Console / terminal for Mac dan Linux saja</li>
            </ul>

          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Bahasa Indonesia
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/downloads/" class="btn">
            Download &amp; Instal
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
        title: 'Persyaratan',
        description: 'Pelajari selengkapnya tentang Persyaratan penggunaan Seme Framework untuk versi 4.0.0',
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
      ];
    }
  }
</script>
