<template>
  <div class="section">
    <div class="content">

      <h1>Term and Condition</h1>
      <p>In these terms of use, will be explained about the parties involved in the use of electronic services in the form of Cipta Esensi Merenah network sites. Cipta Esensi Merenah is an official website owned by Cipta Esensi Merenah that provides official company information. In the terms and conditions of using this application service is divided into two parties, namely the first party, second party and third party.</p>

      <h2>First Party Provisions</h2>
      <p>Cipta Esensi Merenah is an electronic service in the form of a website managed by Cipta Esensi Merenah yang bertempat di Kp. Tegalkembang No 15, RT.1/RW.8, Bandung, Jawa Barat 40951 hrough one or more so-called administrators.</p>

      <h2>Second Party Provisions</h2>
      <p>The second party is the buyer or consumer or customer or service user either registered and filled out the registration form or registered and agreed on all terms and conditions of the first party. The second party engages in the normal use of first party services. If it is indicated that it misused the first party services and or acts that violated the law, it will be reported to the authorities.</p>

      <h2>Membership Status</h2>
      <p>The second party has a membership status and membership validity period determined by the first party.</p>

      <h2>Third party Provisions</h2>
      <p>Third parties are services used by the first party to support the operation of this web service. Third parties have the right to take, use and store data without the knowledge of the first party or the second party. Third parties already have their own terms and conditions. The third parties used by the first party include:</p>
      <ul>
        <li>Google Webmaster</li>
        <li>Google Analitycs</li>
        <li>Google Place</li>
        <li>Facebook Analitycs</li>
        <li>Bing Analitycs</li>
        <li>Etc</li>
      </ul>
      <h2>Change of Rules</h2>
      <p>The first party has the right to change these rules without prior notice.</p>
    </div>
  </div>
</template>


<script>
export default {
  layout: 'default',
  data (){
    return {
      name: 'Cenah.co.id',
      suffix: ' - Cenah.co.id',
      title: 'Term and Condition',
      description: 'Learn more about Cipta Esensi Merenah term and condition by using this website.'
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
