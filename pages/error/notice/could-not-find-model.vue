<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/error/">Error &amp; Troubleshooting</NuxtLink></li>
          <li class=""><NuxtLink to="/error/notice">Notice</NuxtLink></li>
          <li class="unavailable">Could not find model</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1>Could not find model PATH_MODEL_NAME</h1>
            <p>Seme framework has theme directory under <code>app/model</code>, so you have to checked it for supplied model name or path with its model name are exist.</p>
            <p>Example error message</p>
            <pre>
could not find model b_user_model on D:/XAMPP/htdocs/seme_framework/app/model/b_user_model.php
could not find model api/b_user_model on D:/XAMPP/htdocs/seme_framework/app/model/api/b_user_model.php
could not find model admin/b_user_model on D:/XAMPP/htdocs/seme_framework/app/model/admin/b_user_model.php
            </pre>
            <h2>Solution</h2>
            <p>Create manually the model file same as model name name under<code>app/model/</code>.</p>
            <p>If the model loader has path, you have to checked the directory are existed or not.</p>
            <p>If the directory is missing, you have to created it manually.</p>
            <p>Please make sure the filename and with its extension are not contain symbol and whitespace(s).</p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/error/notice/" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Error Notice List
            </b-button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'troubleshoot',
  data (){
    return {
      name: 'Seme Framework Error &amp; Troubleshooting',
      suffix: ' - Seme Framework Error Notice',
      title: 'Could not find model PATH_MODEL_NAME',
      description: 'Learn more about Seme Framework Error Could not find model PATH_MODEL_NAME and how to solved it.'
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
