<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/view">View</NuxtLink></li>
          <li class="unavailable">Creating Template</li>
        </ul>
      </nav>

      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Creating Template</h1>
            <p>For creating template we have to create directories structure of template with its file.</p>
            <p>The structures will be like:</p>
            <ul>
              <li>
                app
                <ul>
                  <li>
                    view
                    <ul>
                      <li>
                        <code>TEMPLATE_NAME</code>
                        <ul>
                          <li>
                            page
                            <ul>
                              <li>
                                html
                                <ul>
                                  <li>header.php</li>
                                  <li>topbar.php</li>
                                  <li>sidebar.php</li>
                                  <li>footer.php</li>
                                </ul>
                              </li>
                              <li>notfound.php</li>
                              <li>col-1.php</li>
                            </ul>
                          </li>
                          <li>theme.json</li>
                          <li>script.json</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h2>TEMPLATE_NAME</h2>
            <p>TEMPLATE_NAME is a directory have no special character except underscore. This directory name will be used as template if we loaded at controller using <NuxtLink to="/4.0.0/controller/setTheme">setTheme</NuxtLink>.</p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/view" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            View
          </b-button>
        </div>
        <div class="column is-2">&nbsp;</div>
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/view/setup-header" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Setup header
          </b-button>
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
      title: 'View: Creating Template - Seme Framework v4.0.0',
      description: 'creating view template using Seme Framework version 4.0.0'
    }
  },
  head() {
    return {
      title: this.title,
      description: this.description
    }
  }
}
</script>
