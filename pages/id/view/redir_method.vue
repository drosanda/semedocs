<template>
    <div class="section">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul class="breadcrumbs">
            <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
            <li class=""><NuxtLink to="/id/">4.0.3 (Bahasa)</NuxtLink></li>
            <li class=""><NuxtLink to="/id/view/">View</NuxtLink></li>
            <li class="unavailable">redir</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
            <div class="content">
              <h1 class="">Metode <code>{{redir}}</code> (Redirect)</h1>
              <p>
                Metode <code>{{redir}}</code> digunakan untuk mengalihkan halaman web pada suatu halaman yang sama atau halaman lain.
                Pada metode ini terdiri dari 3 parameter yaitu:
                <ul>
                    <li><code>target_url</code> *wajib diisi, dimana berisi alamat url lengkap.</li>
                    <li><code>waiting_time</code> default: 0, berisi waktu tunggu dalam satuan detik.</li>
                    <li><code>redirect_method</code> default: 0, jenis atau metode untuk melakukan proses redirect. Jika nilainya 0 maka akan menggunakan redirect header PHP selain itu akan menggunakan redirect meta http.</li>
                </ul>
              </p>
  
              <h2 class="">Contoh</h2>
              <p>
                Berikut ini adalah contoh penggunaan dari metode redir
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
                    redir(base_url('login'));
                    ...
                    ...
                    redir(base_url('login'), 5, 1);
                    ...
                  </highlight-code>
                </div>
              </div>
  
            </div>
          </div>
  
        </div>
  
        <div class="nav-bottom">
          <div class="nav-bottom-left">
            <nuxt-link to="/id/view/cdn_url" class="btn">
              <i class="fa fa-chevron-left"></i>
              cdn_url
            </nuxt-link>
          </div>
          <div class="nav-bottom-right">
            <nuxt-link to="/id/view/" class="btn">
              View
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
        redir: 'redir',
        base_url: '{{base_url}}',
        cdn_url: '{{cdn_url}}',
        name: 'Seme Framework 4',
        suffix: ' - Seme Framework 4',
        title: 'Metode Redir',
        description: 'Pelajari selengkapnya tentang penggunaan kode Metode Redir pada Seme Framework 4.',
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework'
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/id',
            text: 'ID'
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/view',
            text: 'View'
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
          "dateCreated": "2024-06-11T14:27:00+07:00",
          "datePublished": "2024-067-11T14:27:00+07:00",
          "dateModified": "2024-06-11T14:38:27+07:00",
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
  