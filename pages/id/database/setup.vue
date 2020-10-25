<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/id/database">Database</NuxtLink></li>
          <li class="unavailable">Setup</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1>Setup the database connection</h1>
            <p>On this database we will learn about importing database and configuring database connection for Seme Framework.</p>

            <h2>Create the database using PhpMyAdmin</h2>
            <p>PhpMyAdmin is web based database management interface.</p>
            <p>This tool allowed you to do almost anything to your MySQL or MariaDB powered database.</p>
            <p>If you have run the XAMPP, then you can open <code>http://localhost/phpmyadmin/</code>.</p>
            <p>You have to create a database, named <code>seme_framework</code>.</p>
            <figure>
              <img src="~/assets/img/tutorial/phpmyadmin-db-create.png">
            </figure>

            <h2>Import the example database</h2>
            <p>After create a database, you have to import the database.</p>
            <p>We have already save some sql files in your <code>sql</code> directory.</p>
            <p>Before continuing the export process you have to select the database <code>seme_framework</code> which is you have created it before.</p>
            <p>Navigate to <code>export</code> and choose <code>seme_framework.sql</code> file in <code>sql</code> directory.</p>
            <figure>
              <img src="~/assets/img/tutorial/phpmyadmin-db-import.png">
            </figure>
            <p>After importing SQL, you can see new tables already added to database.</p>
            <figure>
              <img src="~/assets/img/tutorial/phpmyadmin-db-tables.png">
            </figure>

            <h2>Database Connection</h2>
            <p>After importing the dabase, we have to edit the configuration file.</p>
            <p>Open <code>app/config/development.php</code> wit atom or another text editor.</p>
            <p>And then change the value of each configration fit with you system requirements.</p>
            <b-message class="is-info">
              <p>On this configuration we will use:</p>
              <ul>
                <li>database host <b>localhost</b></li>
                <li>username <b>root</b></li>
                <li>password <b>empty string</b> </li>
                <li>database name <b>seme_framework</b></li>
              </ul>
            </b-message>
            <pre>
...
/********************************/
/* == Database Configuration == */
/* Database connection information */
/* @var array of string */
/********************************/
$db[&#x27;host&#x27;]  = &#x27;localhost&#x27;;
$db[&#x27;user&#x27;]  = &#x27;root&#x27;;
$db[&#x27;pass&#x27;]  = &#x27;&#x27;;
$db[&#x27;name&#x27;]  = &#x27;seme_framework&#x27;;
$db[&#x27;port&#x27;] = &#x27;3306&#x27;;
$db[&#x27;charset&#x27;] = &#x27;latin1&#x27;;
$db[&#x27;engine&#x27;] = &#x27;mysqli&#x27;;
...
            </pre>
            <b-message class="is-warning">
              <p>You may override this value to fit your system requirements.</p>
            </b-message>

          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/id/database/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Database
            </b-button>
            <b-button tag="router-link" to="/id/database/quick-start/" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Quick Start
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
  data (){
    return {
      name: 'Seme Framework v4.0.0',
      suffix: ' - Dokumentasi Seme Framework v4.0.0',
      title: 'Database: Setup',
      description: 'Pelajari selengkapnya tentang setup database connection using Seme Framework version 4.0.0.'
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
