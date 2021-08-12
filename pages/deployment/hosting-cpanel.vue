<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/deployment">Deployment</NuxtLink></li>
          <li class="unavailable">Hosting Cpanel</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1>Hosting Cpanel</h1>
            <p>
              Deploying Seme Framework into hosting with Cpanel are the most manual task to do but easy to understand.
              This process will be splited into 3 steps there is:
            </p>
            <ul>
              <li>
                <NuxtLink to="/deployment/hosting-cpanel#compress">
                  Gettings Ready
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/deployment/hosting-cpanel#upload">
                  Upload to Cpanel and extract
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/deployment/hosting-cpanel#importsql">
                  Import database using Cpanel PhpMyAdmin
                </NuxtLink>
              </li>
            </ul>

            <h2>Gettings Ready</h2>
            <p>
              On this step will explained about preparing your development files and directory using Seme Framework by compressing it into a single file archive.
              This step will be differents according to OS that you used it for.
              The main goals of this step is, compressing the files and directories inside your project into a single file archive like <code>.zip</code> or <code>.tar</code>.
              Because, Cpanel can only extract <code>.zip</code> or <code>.tar</code> and for compacting file upload process.
            </p>

            <h3>Compress File on Windows using 7-Zip</h3>
            <p>
              According to this <a href="https://superuser.com/questions/201371/create-zip-folder-from-the-command-line-windows/#answer-1241315" target="_blank">issue <i class="fa fa-external-link"></i></a>, You will have to install <a href="https://www.7-zip.org/a/7z1900.exe" target="_blank">7-Zip <i class="fa fa-external-link"></i></a> before you can achieve this step.
              Or you can skip, if you have already know how to compress the file and directory using 7-zip or other tools.
              Here is the example for compress file and directory using CMD and 7-Zip.
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
                  # on this example
                  #  the Seme Framework located at
                  #    D:\XAMPP\htdocs\seme_framework
                  #  And, the 7-zip located at
                  #    C:\Program Files (x86)\7-Zip\7z.exe

                  # first change drive letter where is your Seme Framework are installed
                  D:

                  # then change directory to your Seme Framework working directory
                  cd \XAMPP\htdocs\seme_framework

                  # now compressing the Seme Framework files and directories
                  "C:\Program Files (x86)\7-Zip\7z.exe" v4.zip *

                  # this command will produce zip file at
                  #   D:\XAMPP\htdocs\seme_framework\v4.zip
                </highlight-code>
              </div>
            </div>

            <h3>Compress File on Mac or Linux</h3>
            <p>
              Here is the example for compress file and directory using terminal.
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
                  # on this example
                  #  the Seme Framework located at
                  #    /Applications/XAMPP/htdocs/seme_framework

                  # first change directory to your Seme Framework working directory
                  cd /Applications/XAMPP/htdocs/seme_framework

                  # now compressing the Seme Framework files and directories
                  zip -r9 --exclude="*.git" --exclude="v4.zip" --exclude="*node_modules*" v4.zip .
                  # at the end of command contain dot (.) dont missed it
                  #   will produce zip file on
                  #     /Applications/XAMPP/htdocs/seme_framework/v4.zip
                </highlight-code>
              </div>
            </div>

            <h2 id="upload">Uploading to Cpanel</h2>
            <p>
              The second step it is uploading the compressed file to your hosting by using cpanel
            </p>
            <h3>Login into cpanel</h3>
            <p>
              Open your browser like chrome, firefox, safari or edge and then open your cpanel URL.
              The URL usually is the <b>domain name</b> with port <b>2083</b>, example: <code>https://example.com:2083</code>.
              If you do not know the Cpanel URL please contact your hosting provider.
            </p>

            <amp-img layout="responsive" width="2064" height="1544" alt="Cpanel Login" :src="cplogin"></amp-img>

            <h3>Select Menu File Manager</h3>
            <p>
              After logged into Cpanel, the main page will show up. Find the <code>File Manager</code> menu and then click on it.
            </p>

            <amp-img layout="responsive" width="2064" height="1544" alt="Cpanel Main Page" :src="cpmp"></amp-img>

            <h3>Select Public HTML Directory on File Manager</h3>
            <p>
              The <code>public_html</code> directory usually readable from web server.
              This configuration also may vary between hosting provider.
              And then click on <code>public_html</code>.
            </p>

            <amp-img layout="responsive" width="2064" height="1544" alt="Cpanel File Manager" :src="cpfm"></amp-img>

            <p>
              After inside on <code>public_html</code> directory, click on <code><i class="fa fa-upload"></i> Upload</code> menu, located at middle top page.
            </p>

            <amp-img layout="responsive" width="2064" height="1544" alt="Cpanel File Manager inside public html upload" :src="cpfu1"></amp-img>

            <h3>Upload the file</h3>
            <p>
              Click on <code>select file</code> button to browse your file that generated form step 1.
              Or just drag and drop the file onto this browser.
              The uploading process may take a times, you have to wait until it is done.
            </p>

            <amp-img layout="responsive" width="2064" height="1544" alt="Cpanel File Manager inside public html upload" :src="cpfu2"></amp-img>

            <h3>Extract From Context Menu</h3>
            <p>
              After upload process finished, close the File Upload window and then back to <code>file manager</code> and refresh the browser.
              You will see a new file that we uploaded before, right click on it and then the contextual menu will show up.
              Choose <code>extract</code> from the menu for extracting the file archive.
            </p>

            <amp-img layout="responsive" width="2064" height="1544" alt="Cpanel File Manager context menu extract" :src="cpfu3"></amp-img>

            <h3>Extract Target Location</h3>
            <p>
              Please input the target location for extracting this archive.
              Usually the target location is <code>public_html</code>.
            </p>

            <amp-img layout="responsive" width="2064" height="1544" alt="Cpanel File Manager extract location" :src="cpfu4"></amp-img>

            <h3>Extracted</h3>
            <p>
              After extracted the file archive, you will see the new list of files and directories. Also this indicated this step has been done.
            </p>

            <amp-img layout="responsive" width="2064" height="1544" alt="Cpanel File Manager extract location" :src="cpfu5"></amp-img>

            <h2>Importing The Database</h2>
            <p>
              For importing the database, you have to export the development database first.
              If you do not know how to backup database into SQL file, you can google it first :).
            </p>

            <h3>Cpanel Database Wizard</h3>
            <p>
              For new Cpanel account, you have to follow the <code>database wizard</code> for database creation with database user also its privileges.
              And the after that, import the SQL by using <code>PhpMyAdmin</code> from Cpanel.
            </p>
            <amp-img layout="responsive" width="2064" height="1544" alt="Cpanel File Manager extract location" :src="cpdb"></amp-img>

            <div class="nav-bottom">
              <div class="nav-bottom-left">
                <nuxt-link to="/deployment" class="btn">
                  <i class="fa fa-chevron-left"></i>
                  Deployment
                </nuxt-link>
              </div>
              <div class="nav-bottom-right">
                <nuxt-link to="/" class="btn">
                  Seme Framework Main Page
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
  layout: 'default',
  data (){
    return {
      cplogin: require('~/assets/img/deploy/cpanel-login.png'),
      cpmp: require('~/assets/img/deploy/cpanel-mainpage.png'),
      cpfm: require('~/assets/img/deploy/cpanel-file-manager.png'),
      cpfu1: require('~/assets/img/deploy/cpanel-file-upload-1.png'),
      cpfu2: require('~/assets/img/deploy/cpanel-file-upload-2.png'),
      cpfu3: require('~/assets/img/deploy/cpanel-file-upload-3.png'),
      cpfu4: require('~/assets/img/deploy/cpanel-file-upload-4.png'),
      cpfu5: require('~/assets/img/deploy/cpanel-file-upload-5.png'),
      cpdb: require('~/assets/img/deploy/cpanel-database-wizard.png'),
      name: 'Seme Framework Deploy',
      suffix: ' - Seme Framework Deploy',
      title: 'Hosting Cpanel',
      description: 'Learn more how to deploy (upload) Seme Framework into Hosting with CPANEL',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/deployment',
          text: 'Deployment',
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
        "dateCreated": "2021-08-12T10:24:12+07:00",
        "datePublished": "2021-08-12T10:24:12+07:00",
        "dateModified": "2021-08-12T10:24:12+07:00",
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
