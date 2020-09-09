<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Home</NuxtLink></li>
          <li class="unavailable">4.0.0</li>
        </ul>
      </nav>

      <div class="columns">
        <div class="column">
          <div class="content">
            <h1>Seme Framework version 4.0.0</h1>
            <p>
              In version 4.0.0 Seme Framework has main target for providing deployable apps.
              The first thing on this version is modified the configuration files to single files only.
              And then we have to optimizing the codes and the memory used by using XDebug and qcachegrind for viewing memory used.
            </p>
            <h2>Key Features</h2>
            <p>This framework still using Mode View Controller life cycle:</p>
            <hr>
            <div class="columns">
              <div class="column"><i>Deployable</i>. Single file configuration for development, staging and production. So you can deploy apps into server git support.</div>
              <div class="column"><i>Libraries</i>. Dont worry with libraries, as long as you can use Composer. You can put any composer project into kero/lib directory.</div>
              <div class="column"><i>Admin Friendly</i>. Seme Framework has specaial re-routing feature for admin page, without refactoring the MVC. And re-routing for any purpose.</div>
              <div class="column"><i>Optimized</i>. With combination of XDebug and qcachegrind Seme Framework has optimized little by little.</div>
            </div>
            <hr>
            <h2>Whats New</h2>
            <ol class="1">
              <li>Merged Configuration files into single files. Split configuration by development, staging, and production for fast deploying.</li>
              <li>Add bin directory into kero.</li>
              <li>Split function into functions.php files.</li>
              <li>Optimized MySQLi library.</li>
              <li>Optimized Controller library.</li>
              <li>Replacing str_replace to strtr if possible.</li>
            </ol>
            <hr>
            <h2>License</h2>
            <p>Seme Framework licensed under MIT.</p>
            <hr>
            <h2>Question and Answer</h2>
            <p>Feel free to ask me on my <a href="https://instagram.com/drosanda/" target="_blank">instagram</a>, <a href="https://facebook.com/drs11/" target="_blank">facebook</a>, or open an issue on <a href="https://github.com/drosanda/seme-framework/issues" target="_blank">github</a>.</p>

          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/credits" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Credits
            </b-button>
            <b-button tag="router-link" to="/4.0.0/requirements/" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
              Requirements
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
    data (){
      return {
        name: 'Seme Framework v4.0.0',
        suffix: ' - Documentation',
        title: 'Seme Framework v4.0.0 Documentation',
        description: 'Learn more about Seme Framework version 4.0.0 through this documentation.'
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
