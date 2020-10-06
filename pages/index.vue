<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class="unavailable">Home</li>
        </ul>
      </nav>

      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="is-size-1">Welcome to Seme Framework</h1>
            <p>This is official documentation for Seme Framework, the PHP MVC Framework for creating small and medium app that needed for fast delivery. At first version of Seme Framework used for building API (Middle Ware) for another Application such as android, iOS, etc. And now as increasing of requirement, Seme Framework has expand the limit for creating Small and Medium App.</p>

            <figure class="image">
              <img src="~/static/carbon.png" />
            </figure>

            <div class="buttons">
              <b-button tag="router-link" to="/4.0.0/downloads/" type="is-link">
                Download
              </b-button>
              <b-button tag="router-link" to="/4.0.0/tutorial/" type="is-link">
                Getting Started
              </b-button>
              <b-button tag="router-link" to="/error/" type="is-link">
                Troubleshoot
              </b-button>
            </div>

            <h2>Key Feature</h2>
            <p>This framework suitable for Programmer that only know about <code>Manual</code> way of code. Not like this time, everything build up automatically through console. Seme Framework has taken different way of code, <i>If you want build small app, why we need lots of library</i>. Here is the key feature of Seme Framework:</p>
            <hr>
            <div class="columns">
              <div class="column"><i>Small but not Tiny</i>. Seme Framework growth on SME Industries with many requirement but can suppress the hosting price.</div>
              <div class="column"><i>Not Too serious</i>. You can played with Seme Framework at your own logic. Its free and almost has no restriction to developing your solution.</div>
              <div class="column"><i>Admin Friendly</i>. Seme Framework has re-routing feature for admin page, without refactoring the MVC.</div>
              <div class="column"><i>Theme Engine</i>. Seme Framework has feature who can <i>PUSH</i> the content inside the layout view. Also support theming engine, if you want change the Style, you just clone the original one and modified safely.</div>
            </div>
            <hr>
            <h2>License</h2>
            <p>Seme Framework licensed under MIT version 2.0.</p>
            <h2>Question and Answer</h2>
            <p>Feel free to ask me on my <a href="https://instagram.com/drosanda/" target="_blank">instagram</a>, <a href="https://facebook.com/drs11/" target="_blank">facebook</a>, or open an issue on <a href="https://github.com/drosanda/semedocs/issues" target="_blank">github</a>.</p>
          </div>
        </div>
      </div>


      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/credits/" type="is-link" icon-pack="fa" icon-right="chevron-right">
              Credits
            </b-button>
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
        title: 'Welcome to Seme Framework Documentation',
        suffix: ' - The Lightweight and Deployable PHP MVC Framework',
        description: 'Seme Framework is lightweight and deployable PHP MVC Framework that you can learn more through this documentation.'
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
            content: this.title
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
