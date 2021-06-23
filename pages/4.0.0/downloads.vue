<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class="unavailable">Downloads</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1 class="">Downloads</h1>
            <p>You can find any download resources related to Seme Framework. You can get Seme Framework by downloading it through github:</p>
            <ul>
              <li><a href="https://github.com/drosanda/seme-framework" target="_blank">Seme Framework on Github <i class="fa fa-external-link"></i></a></li>
            </ul>

            <h2 class="">Install</h2>
            <p>Clone the repository with git or download the ZIP archive and then extract to your desired directory.</p>
            <h3>Install from archive to XAMPP (Examples)</h3>
            <p>After download the archive and then extract to:</p>
            <ul>
              <li><code>/Application/XAMPP/htdocs/seme_framework</code> on Mac, or</li>
              <li><code>/opt/lampp/htdocs/seme_framework</code> on Linux, or</li>
              <li><code>D:\xampp\htdocs\seme_framework</code> on Windows</li>
            </ul>
            <p>
              And then running the XAMPP and open the <code>http://locahost/seme_framework/</code>.
              If there does not show any error, then you can proceed to configuration page.
            </p>

            <h3>Install using GIT CLONE on Windows</h3>
            <p>We assumed you have install XAMPP on drive D.</p>
            <p>Open your <code>cmd</code> or <code>cmder</code> and then execute the following commands:</p>
            <ul>
              <li>Goto drive D with command <code>d:</code>.</li>
              <li>Change dir to htdocs <code>cd xampp/htdocs</code>.</li>
              <li>List content of directory <code>ls</code> or <code>dir</code> check if directory is existed.</li>
              <li>If directory existed delete with command <code>rm -fr seme_framework</code> or move the directory with <code>mv seme_framework sf_old</code>.</li>
              <li>clone from repo and put on seme_framework directory.
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
                      git clone https://github.com/drosanda/seme-framework.git seme_framework
                    </highlight-code>
                  </div>
                </div>
              </li>
            </ul>
            <p>
              And then running the XAMPP and open the <code>http://locahost/seme_framework/</code>.
              If there does not show any error, then you can proceed to configuration page.
            </p>

            <h3>Install using Mac with XAMPP</h3>
            <p>Open your <code>cmd</code> or <code>terminal</code> and then execute the following commands:</p>
            <ul>
              <li>Change dir to htdocs <code>cd /Applications/XAMPP/htdocs</code>.</li>
              <li>List content of directory <code>ls</code> check if directory is existed.</li>
              <li>If directory existed delete with command <code>rm -fr seme_framework</code> or move the directory with <code>mv seme_framework sf_old</code>.</li>
              <li>clone from repo and put on seme_framework<code>git clone https://github.com/drosanda/seme-framework.git seme_framework</code>.</li>
            </ul>
            <h2>Run the framework</h2>
            <p>
              After running the XAMPP, you can open <code>http://locahost/seme_framework/</code> in your browser.
              If there does not show any error, then you can proceed to configuration page.
            </p>
            <amp-img layout="responsive" width="660px" height="284px" :src="fr" alt="first run"></amp-img>

            <h2>Working Examples</h2>
            <p>Here is the list of working examples using Seme Framework. You can clone or download by clicking the following links:</p>
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
          <nuxt-link to="/4.0.0/requirements/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Requirements
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0.0/configuration/" class="btn">
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
    layout: 'v4.0.0',
    data() {
      return {
        name: 'Seme Framework v4.0.0',
        suffix: ' - Seme Framework 4',
        title: 'Download and Install',
        description: 'Learn more about how to download and install Seme Framework version 4.0.0',
        fr: require('~/assets/img/first-run.png'),
        breadcrumbs: [
          {
            url: process.env.BASE_URL || 'http://localhost:3001',
            text: 'Seme Framework',
          },
          {
            url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0.0/',
            text: '4.0.0',
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
