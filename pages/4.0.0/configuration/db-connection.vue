<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/configuration">Configuration</NuxtLink></li>
          <li class="unavailable">Database Connection</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Database Connection Configuration</h1>
            <p>
              Seme Framework has ability for open connection to database.
            </p>
            <p>
              Database connection configuration existed on <code>$db</code> array values, separated by 7 keys.
            </p>

            <h2>$db['host']</h2>
            <p>
              The hostname or IP Address value of database server connection.
            </p>

            <h2>$db['user']</h2>
            <p>
              The user value of database server connection.
            </p>

            <h2>$db['pass']</h2>
            <p>
              The password value of database server connection.
            </p>

            <h2>$db['name']</h2>
            <p>
              The name of database using by database server connection.
            </p>

            <h2>$db['port']</h2>
            <p>
              The connection port used by database server connection. Default value is <code>$db[&#x27;port&#x27;] = &#x27;3306&#x27;;</code>.
            </p>

            <h2>$db['charset']</h2>
            <p>
              The character set used by database server connection. The value can be <code>latin1</code> or <code>utf8</code>.
            </p>

            <h2>$db['engine']</h2>
            <p>
              The framework database engine. In version 4 only <code>MySQLi</code> is available, so the default value is <code>$db[&#x27;engine&#x27;] = &#x27;mysqli&#x27;;</code>.
            </p>

            <hr>


          </div>

        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/4.0.0/configuration/" class="btn">
          <i class="fa fa-chevron-left"></i>
            URL Configuration
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0.0/configuration/session/" class="btn">
            Session Configuration
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
    data (){
      return {
        name: 'Seme Framework v4.0.0',
        suffix: ' - Seme Framework 4',
        title: 'Database Connection',
        description: 'Learn more about Database Connection Configuration of Seme Framework version 4.0.0 through this documentation.'
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
