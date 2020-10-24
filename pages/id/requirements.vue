<template>
  <div class="section ">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">Bahasa Indonesia</NuxtLink></li>
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

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Bahasa Indonesia
            </b-button>
            <b-button tag="router-link" to="/id/downloads/" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Download dan Instal
            </b-button>
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
        name: 'Seme Framework v4.0.0',
        suffix: ' - Dokumentasi Seme Framework v4.0.0',
        title: 'Persyarataan',
        description: 'Pelajari selengkapnya tentang Persyarataan penggunaan Seme Framework untuk versi 4.0.0',
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
    }
  }
</script>
