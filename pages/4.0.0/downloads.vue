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
              <li><a href="https://github.com/drosanda/seme-framework" target="_blank">Seme Framework on Github</a></li>
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
                <pre><code v-highlight class="shell"># git clone https://github.com/drosanda/seme-framework.git seme_framework</code></pre>
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
            <figure>
              <img src="~/assets/img/first-run.png">
            </figure>

            <h2>Working Examples</h2>
            <p>Here is the list of working examples using Seme Framework. You can clone or download by clicking the following links:</p>
            <ul>
              <li><a href="https://github.com/drosanda/seme_adminhtml" target="_blank">Admin HTML template</a></li>
              <li><a href="https://github.com/drosanda/seme-indonesian-address-provider-api" target="_blank">API Address Provider (ID)</a></li>
              <li><a href="https://github.com/drosanda/seme_landing" target="_blank">Landing Page</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/4.0.0/requirements/" type="is-link" icon-pack="fa" icon-left="chevron-left">
                Requirements
            </b-button>
            <b-button tag="router-link" to="/4.0.0/configuration/" type="is-link" icon-pack="fa" icon-right="chevron-right">
                Configuration
            </b-button>
          </div>
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
        suffix: ' - Seme Framework v4.0.0 Documentation',
        title: 'Download and Install',
        description: 'Learn more about how to download and install Seme Framework version 4.0.0'
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
