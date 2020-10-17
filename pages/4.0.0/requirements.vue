<template>
  <div class="section ">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class="unavailable">Requirements</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1 class="">Requirements</h1>
            <p>This framework runs fine at PHP 5.6, but PHP 7.4.x is recommended regarding to its security performance.</p>
            <p>Also, Seme Framework requires some PHP extension including:</p>
            <ul>
              <li>MySQLi</li>
              <li>JSON</li>
              <li>Session</li>
            </ul>
            <h2>Supported Database Engine</h2>
            <p>A database is required for most web application programming. Currently supported databases are:</p>
            <ul>
              <li>MySQL 5.1+ via the MySQLi drivers</li>
              <li>MariaDB version 5.5.x via the MySQLi drivers</li>
              <li>MariaDB version 10.x.x via the MySQLi drivers</li>
            </ul>
            <p>Since the framework requires the working connection to a MySQL database, it wont work unless you setup the database connection.</p>

            <h2>IDE or Text Editor</h2>
            <p>An IDE or Text Editor are required for implementing codes into Seme Framework. You can choose any IDE but Seme Framework was built by using:</p>
            <ul>
              <li><a href="https://notepad-plus-plus.org/downloads/">Notepad++</a> Simple Text editor but with better features</li>
              <li><a href="https://atom.io/">Atom</a> Hackable Text editor</li>
              <li><a href="https://code.visualstudio.com/download">VSCode</a> Lighter if compare to atom</li>
            </ul>

            <h2>Environments</h2>
            <p>Seme Framework running well by using this kind of environments:</p>
            <ul>
              <li><a href="https://www.apachefriends.org/download">XAMPP</a> for Mac, Linux, and Windows</li>
              <li><a href="https://hub.docker.com/r/drosanda/seme_webstack">Seme WebStack Docker Container</a></li>
              <li>Nginx with PHP-FPM 7.4.x running on Centos 7</li>
            </ul>

            <h2>Optional Requirements</h2>
            <p>Seme Framework more powerful and flexible if also installing: </p>
            <ul>
              <li><a href="https://git-scm.com/downloads">GIT</a> for Mac, Linux, and Windows</li>
              <li><a href="https://cmder.net/">CMDER</a> Console / terminal emulator for Windows Only</li>
              <li><a href="https://ohmyz.sh/">Oh My ZSH</a> Console / terminal for Mac and Linux</li>
            </ul>

          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/4.0.0/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Version 4.0.0
            </b-button>
            <b-button tag="router-link" to="/4.0.0/downloads/" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Download and Installation
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
        title: 'Requirements',
        description: 'Learn more about Requirement of Seme Framework Documentation for version 4.0.0',
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
