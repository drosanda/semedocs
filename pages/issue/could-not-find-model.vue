<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/issue">Issue</NuxtLink></li>
          <li class="unavailable">[1024] could not find model</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1>[1024] could not find model</h1>
            <p>Could not find model [model_name] it was occured when model file cannot be loaded from controller.</p>

            <p>Example error message</p>
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
File: /Applications/XAMPP/xamppfiles/htdocs/seme-framework/kero/sine/SENE_Controller.php

Line: 156

Error: [1024] could not find model hello_model on /Applications/XAMPP/xamppfiles/htdocs/seme-framework/app/model/hello_model.php
</highlight-code>
</div>
</div>

            <h2>Solution</h2>
            <p>Here is some options that can be done for solving this error.</p>
            <h3>Check the file name</h3>
            <p>Please make sure:</p>
            <ol>
              <li>The file name are correct,</li>
              <li>Filename are in lower case,</li>
              <li>There is no spaces between dot and extension name, and</li>
              <li>There is only alphanumeric and underscore allowed.</li>
            </ol>

            <h3>Check the class name</h3>
            <p>Please make sure:</p>
            <ol>
              <li>The file name are equal with class name but the case is ignored,</li>
              <li>Classname can be camel case or in mixed case with the first letter of each internal word capitalized</li>
              <li>There is only alphanumeric and underscore allowed, </li>
              <li>There is no space or special char on class name.</li>
            </ol>

            <h3>Check the class loader on Controller</h3>
            <p>Model are loaded in Controller through <NuxtLink to="/4.0/controller/load/"><code>load</code></NuxtLink> method. Please make sure:</p>
            <ol>
              <li>The location of file and file name is correct,</li>
              <li>The alias are correct.</li>
            </ol>

          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/issue" class="btn">
          <i class="fa fa-chevron-left"></i>
            Issue
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'issue',
  data (){
    return {
      name: 'Seme Framework Issue',
      suffix: ' - Seme Framework Issue',
      title: 'Error: [1024] Could not find model',
      description: 'Learn more about Error: [1024] Could not find model on Seme Framework and how to solved it.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/issue',
          text: 'Issue',
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
        "dateCreated": "2021-08-11T19:12:00+07:00",
        "datePublished": "2021-08-11T19:12:00+07:00",
        "dateModified": "2021-08-11T19:12:00+07:00",
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
    ]
  }
}
</script>
