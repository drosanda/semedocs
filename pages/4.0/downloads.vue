<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class="unavailable">Downloads</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1 class="">Download &amp; Install</h1>
            <p>
              There is two way for downloading Seme Fraemwork, download the <code>zip</code> file or using <code>git clone</code> via Github.
            </p>

            <h2>Using Github Github</h2>
            <p>
              At first, open <a href="https://github.com/drosanda/seme-framework" target="_blank">Seme Framework <i class="fa fa-external-link"></i></a> on github page.
              After that, click the <b>green</b> button labelled <code>code</code>.
            </p>
            <amp-img layout="responsive" width="2398" height="1584" :src="sfgp" alt="Halaman Seme Framework di Gitub"></amp-img>


            <h3 id="1">1. Download dan Install dengan File Zip</h3>
            <p>
              After clicking the <b>green</b> button, menu options will appear. Click the <code>Download ZIP</code> menu to download the ZIP file.
            </p>
            <amp-img layout="responsive" width="2556" height="1140" :src="sfgd" alt="pilihan download Seme Framework di Github"></amp-img>

            <br>
            <h4 id="1_1">1.1. Extract</h4>
            <p>
              Once downloaded, usually the file name is <code>seme-framework-master.zip</code>.
               Find the downloaded file, then right click, select <code>extract</code> or <code>extract</code> to extract the contents of the file in the zip file.
            </p>

            <h5 id="1_1_a">1.1.a. Install on Windows using XAMPP</h5>
            <p>
              According to the requirements page, in this example we will use XAMPP.
               Assume XAMPP is installed in drive <code>D:</code>.
               So, for <code>extract</code> purposes the zip file is:
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
                  # Windows
                  D:\xampp\htdocs\seme_framework
                </highlight-code>
              </div>
            </div>
            <p>
              If there is no <code>seme_framework</code> folder, create it first. After that, extract the downloaded zip file into it.
            </p>

            <h5 id="1_1_b">1.1.b. Install on Mac using XAMPP</h5>
            <p>
              According to the requirements page, in this example we will use XAMPP.
               Assume XAMPP is already installed, for the purpose of <code>extract</code> the zip file is:
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
                  # Mac
                  /Applications/XAMPP/htdocs/seme_framework
                </highlight-code>
              </div>
            </div>
            <p>
              If there is no <code>seme_framework</code> directory, create it first, then extract the downloaded zip file into it.
            </p>

            <h5 id="1_1_c">1.1.c. Install on Linux using XAMPP</h5>
            <p>
              According to the requirements page, in this example we will use XAMPP.
               Assume XAMPP is already installed, for the purpose of <code>extract</code> the zip file is:
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
                  # Linux
                  /opt/lampp/htdocs/seme_framework
                </highlight-code>
              </div>
            </div>
            <p>
              If there is no <code>seme_framework</code> directory, create it first, then extract the downloaded zip file into it.
            </p>

            <h3 id="2">2. Download and Install with Git</h3>
            <p>
              After the github page appears and click the green button, a URL will appear (<code><u><b><em>git@git..</em></b></u></code>).
               Click on the icon next to the URL to do the <code>copy</code> process, so that later it can be <code>pasted</code> when executing the <code>git clone</code> command.
            </p>
            <amp-img layout="responsive" width="2556" height="1140" :src="sfgd" alt="pilihan download Seme Framework di Github"></amp-img>

            <br>

            <h4 id="2_1">2.1. for Windows</h4>
            <p>
              According to the requirements page, make sure <b>XAMPP</b> and <b>git</b> are installed on windows.
               Assume XAMPP is installed in drive <code>D:</code>.
               First of all open <code>CMD</code> or <code>CMDER</code> or another terminal application like <code>PowerShell</code>.
               After that type the following command:
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
                  # Change drive
                  D:

                  # change directory
                  cd /xampp/htdocs

                  # check seme_framework folder
                  dir /p

                  # if already exist, delete the folder using
                  # rmdir command
                  rmdir seme_framework

                  # start download from github using git clone
                  git clone git@github.com:drosanda/seme-framework.git seme_framework
                </highlight-code>
              </div>
            </div>

            <h5 id="2_2">2.2. for Mac</h5>
            <p>
              According to the requirements page, make sure <b>XAMPP</b> and <b>git</b> are installed on the Mac.
               First open <code>terminal</code>, then after that type the following command:
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
                  # change to htdocs directory
                  cd /Applications/XAMPP/htdocs

                  # check seme_framework folder
                  ls

                  # if already exist, delete the folder
                  rm -fr seme_framework

                  # download from github using git clone
                  git clone git@github.com:drosanda/seme-framework.git seme_framework
                </highlight-code>
              </div>
            </div>

            <h5 id="2_3">2.3 for Linux</h5>
            <p>
              According to the requirements page, make sure <b>XAMPP</b> and <b>git</b> are installed on Linux.
               First open <code>terminal</code>, then after that type the following command:
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
                  # change to htdocs directory
                  cd /opt/lampp/htdocs

                  # check seme_framework folder
                  ls

                  # if already exist, delete the folder
                  rm -fr seme_framework

                  # download from github using git clone
                  git clone git@github.com:drosanda/seme-framework.git seme_framework
                </highlight-code>
              </div>
            </div>

            <h2>Running Test</h2>
            <p>
              To run the Seme Framework, please make sure Apache on XAMPP is running.
               After that, open a web browser application such as Google Chrome or Firefox or Microsoft Edge.
               Then fill in <code>localhost/seme_framework</code> in the address box of the web browser application.
               If the results are the same as in the screenshot below, it means that the Seme Framework installation process has been completed.
            </p>

            <amp-img layout="responsive" width="660" height="294" :src="fr" alt="using Seme Framework on Localhost with XAMPP"></amp-img>


            <h2>Another Running Examples</h2>
            <p>
              Here is a list of working examples using the Seme Framework.
              You can clone or download by clicking on the following link:
            </p>
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
          <nuxt-link to="/4.0/requirements/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Requirements
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0/directory_structure/" class="btn">
            Directory Structure
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
    data() {
      return {
        fr: require('~/assets/img/first-run.png'),
        sfgd: require('~/assets/img/downloads/seme-framework-github-download.png'),
        sfgp: require('~/assets/img/downloads/seme-framework-github-page.png'),
        name: 'Seme Framework 4',
        suffix: ' - Seme Framework 4',
        title: 'Download and Install',
        description: 'Learn more about how to download and install Seme Framework 4',
        fr: require('~/assets/img/first-run.png'),
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
          "dateCreated": "2021-08-20T22:43:00+07:00",
          "datePublished": "2021-08-20T22:43:00+07:00",
          "dateModified": "2025-07-02T22:43:00+07:00",
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
