<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class="unavailable">Directory Structure</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Directory Structure</h1>
            <p>
              Here is the files and directories structure on Seme Framework 4.
            </p>
            <MacWindowCodeSnippet lang="php">
              seme-framework/
&#x251C;&#x2500;&#x2500; app/                    # Application directory
&#x2502;   &#x251C;&#x2500;&#x2500; cache/             # Cache storage
&#x2502;   &#x251C;&#x2500;&#x2500; config/            # Configuration files
&#x2502;   &#x2502;   &#x2514;&#x2500;&#x2500; development.php
&#x2502;   &#x251C;&#x2500;&#x2500; controller/        # Controller files
&#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; home.php      # Default home controller
&#x2502;   &#x2502;   &#x2514;&#x2500;&#x2500; notfound.php  # 404 handler
&#x2502;   &#x251C;&#x2500;&#x2500; core/             # Core application files
&#x2502;   &#x251C;&#x2500;&#x2500; model/            # Model files
&#x2502;   &#x2514;&#x2500;&#x2500; view/             # View files
&#x251C;&#x2500;&#x2500; kero/                  # Framework core directory
&#x2502;   &#x251C;&#x2500;&#x2500; bin/              # Command line tools
&#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; docs.sh       # Documentation generator
&#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; scan.sh       # Code scanner
&#x2502;   &#x2502;   &#x2514;&#x2500;&#x2500; test.sh       # Testing utility
&#x2502;   &#x251C;&#x2500;&#x2500; lib/              # Library files
&#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; conumtext.php
&#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; seme_dateindo.php
&#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; seme_email.php
&#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; seme_fpdf.php
&#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; seme_log.php
&#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; seme_page_fpdf.php
&#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; seme_purifier.php
&#x2502;   &#x2502;   &#x2514;&#x2500;&#x2500; sene_json_engine.php
&#x2502;   &#x251C;&#x2500;&#x2500; sine/             # Core framework components
&#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; SENE_Controller.php
&#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; SENE_Engine.php
&#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; SENE_Input.php
&#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; SENE_Model.php
&#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; SENE_MySQLi_Engine.php
&#x2502;   &#x2502;   &#x2514;&#x2500;&#x2500; SENE_Runner.php
&#x2502;   &#x2514;&#x2500;&#x2500; Functions.php      # Global helper functions
&#x2514;&#x2500;&#x2500; index.php             # Application entry point
            </MacWindowCodeSnippet>

          </div>

        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0/downloads/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Download and Installation
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0/configuration/" class="btn">
            Configuration
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    layout: 'v4.0',
    data (){
      return {
        name: 'Seme Framework 4',
        suffix: ' - Seme Framework 4',
        title: 'Directory Structure',
        description: 'Learn more about file and directory structure of Seme Framework 4 through this documentation.',
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0',
            text: '4.0'
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
          "dateCreated": "2025-07-02T13:28:33+07:00",
          "datePublished": "2025-07-02T13:28:33+07:00",
          "dateModified": "2025-07-02T13:28:33+07:00",
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
