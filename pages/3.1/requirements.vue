<template>
  <div class="section ">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul class="breadcrumbs">
            <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
            <li class=""><NuxtLink to="/3.2.1/">3.2.1</NuxtLink></li>
            <li class="unavailable">Requirements</li>
          </ul>
        </nav>
        <div class="content">
          <h1 class="">Requirements</h1>
          <p>PHP version 5.6 or newer is recommended.</p>
          <p>It should work on 5.3.7 as well, but we strongly advise you NOT to run such old versions of PHP, because of potential security and performance issues, as well as missing features.</p>
          <p>A database is required for most web application programming. Currently supported databases are:</p>
          <ul>
						<li>MySQL (5.1+) via the mysqli drivers</li>
          </ul>
					<p>Since the framework requires the working connection to a MySQL database, it wont work unless you setup the database connection.</p>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    layout: 'v3.1',
    data (){
      return {
        name: 'Seme Framework v3.1',
        suffix: ' - Seme Framework v3.1',
        title: 'Requirements',
        description: 'Learn more about Requirements of Seme Framework version 4.0.0 through this documentation.'
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
