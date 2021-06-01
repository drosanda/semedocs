<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class="unavailable">Credits</li>
        </ul>
      </nav>
      <div class="">
        <div class="column">
          <div class="content">
            <h1>Credits</h1>
            <p>Seme Framework was originally developed by Daeng Rosanda, at first was written for achieving Undergraduate Thesis. Time after time Seme Framework used by another project on startup and company as Mini Web or main Web Application. And now Seme Framework contribute to Open Source project.</p>
            <p>And many thanks to:</p>
            <ul type="1">
              <li>Allah SWT</li>
              <li>Adam Mukharil Bachtiar, S.Kom, M.T.</li>
              <li>Ray Rizaldy, S.T.</li>
              <li>Andi Insanudin, S.Kom</li>
              <li>Yugie Nugraha, S.Kom</li>
              <li>Mohamad Iqbal, S.Kom</li>
              <li>The Cloud Alert Team</li>
              <li>Reza Maulana Handinata, S.Kom</li>
              <li>Rezza Muhammad Iqbal</li>
            </ul>
            <p>Also another person that help Seme Framework better.</p>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/" class="btn">
            <i class="fa fa-chevron-left"></i>
            Home
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/4.0.0/" class="btn">
            version 4.0.0
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data (){
    return {
      name: 'Seme Framework',
      title: 'Credits',
      suffix: ' - Seme Framework',
      description: 'Introducing the people behind of Seme Framework.'
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
