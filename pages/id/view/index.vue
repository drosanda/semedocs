<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
          <li class="unavailable">View</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">View</h1>
            <p>View atau tampilan digunakan oleh Seme Framework untuk menampilkan sebuah tampilan.
            <p>Biasanya tampilan disimpan di dalam direktori <code>app/view/front</code> sebagai tema bawaan (default).</p>
  					<p>Disamping View, Seme Framework juga mendukung untuk pembuatan tema. Tema merupakan sekumpulan view dengan struktur tertentu.</p>
            <p>Biasany suatu tema disimpan pada sebuah folder di dalam direktori view, contoh tema <b>front</b> ada di<code>app/view/front</code>.</p>

  					<h2>Memanggil view secara manual</h2>
  					<p>View dapat dipanggil secara otomatis melalui tema, atau dapat juga di panggil secara manual. Berikut ini adalah cara pemanggilan menu secara manual (tanpa tema):</p>
            <p>Seperti biasa, diasumsikan Seme Framework telah diinstal di dalam <code>D:\XAMPP\htodcs\seme_framework</code> dan ketika di buka melalui alamat URL <code>http://localhost/seme_framework</code> sudah mengarah ke Seme Framework yang berjalan dengan baik dan tidak error.</p>


  					<h3>Membuat file view</h3>
            <p>Pertama-tama buat file view didalam direktori <code>app/view/template.php</code>. Kemudian tambahkan <i>source code</i> seperti ini:</p>
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
                <highlight-code lang="html">
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Seme Framework Template&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Yi-ha this is your first view!&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
                </highlight-code>
              </div>
            </div>

            <p>Setelah itu edit controller Home yang ada di <code>app/controller/home.php</code> dan ubah seperti <i>source code</i> ini:</p>
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
&lt;?php
class Home extends SENE_Controller{
&#x9;public function __construct(){
&#x9;&#x9;parent::__construct();
&#x9;}
&#x9;public function index(){
&#x9;&#x9;$this-&#x3E;view(&#x27;template&#x27;); //means loaded app/view/template.php file
&#x9;&#x9;$this-&#x3E;render(); //this function allow to show view to browser
&#x9;}
}
                </highlight-code>
              </div>
            </div>
  					<p>Jika telah selesai, cobalah buka alamat <code>http://localhost/seme_framework/</code> apakah akan muncul seperti HTML yang sudah disetel sebelumnya?</p>

            <hr>
  					<h2>Mengirim data dari Controller ke View</h2>
            <p>Seme Framework memiliki kemampuan untuk mengirim data yang telah dipanggil atau dibuat di controller kedalam view.</p>
  					<p>Tapi, hanya mengizinkan <b>satu variabel</b> saja yang dapat dimasukan kedalam view. Oleh karena itu, kita harus membuat variabel tersebut <b>bertipe data array</b> supaya dapat menampung banyak variabel didalamnya.</p>

  					<h3>Modify the View File</h3>
  					<p>First modify the view file that we create before in <code>app/view/template.php</code> and fill it with this example code. We can change the title on html page by using this example code.</p>

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
                <highlight-code lang="html">
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;&lt;?php echo $title; ?&gt;&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;&lt;?php echo $content; ?&gt;&lt;/h1&gt;
&lt;ul&gt;
&lt;?php foreach($members as $m){ ?&gt;
&lt;li&gt;&lt;?php echo $m; ?&gt;&lt;/li&gt;
&lt;?php } ?&gt;
&lt;/ul&gt;
&lt;/body&gt;
&lt;/html&gt;
                </highlight-code>
              </div>
            </div>
  					<p>After that, edit the home controller in <code>app/controller/home.php</code> change to this example. We declare the <code>$data</code> variable as array, and then put all values you want to pass to <code>$data</code> variable with this array key.</p>
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
class Home extends Sene_Controller{
&#x9;public function __construct(){
&#x9;&#x9;parent::__construct();
&#x9;}
&#x9;private function __getMembers(){
&#x9;&#x9;$members = array();
&#x9;&#x9;$members[] = &#x27;Daeng&#x27;;
&#x9;&#x9;$members[] = &#x27;Andi&#x27;;
&#x9;&#x9;$members[] = &#x27;Reza&#x27;;
&#x9;&#x9;return $members;
&#x9;}
&#x9;public function index(){
&#x9;&#x9;$data = array();
&#x9;&#x9;$data[&#x27;title&#x27;] = &#x27;EyeShield21 Yi Ha!&#x27;;
&#x9;&#x9;$data[&#x27;content&#x27;] = &#x27;This content are from controller, our member is:&#x27;;
&#x9;&#x9;$data[&#x27;members&#x27;] = $this-&#x3E;__getMembers(); //obtained data from private function
&#x9;&#x9;$this-&#x3E;view(&#x27;template&#x27;,$data); //pass $data to view
&#x9;&#x9;$this-&#x3E;render(); //this function allow to show view to browser
&#x9;}
}
</highlight-code>
</div>
</div>
					<p>In controller, array key of <code>$data</code> variable will be plain variable when in view mode. For example <code>$data['content']</code> will be <code>$content</code> if we want to echoing in view. Visit the web page by opened through browser and see what happened.</p>

					<h3>What if we pass the array values</h3>
					<p>We can pass any type of values such as array, array of object, integer, string, etc. But we must provide the way how to view of any type exactly is.</p>

          <h2>Theme and Layout</h2>
					<p>The theme is a directory that related between <code>app/view/[skin_name]</code> with <code>skin/[skin_name]</code>. In app/view/[skin_name] is the view that can be loaded by controller. But if you want put your CSS and JS related to skin, you can put in /skin/[skin_name]. The layout is a complete html file which is wrap the header code, content, and js.</p>

          <h3>Create Theme</h3>
          <p>Navigate to app/view create one folder name it <i>front</i>. And then create new file <code>themes.json</code> and <code>script.json</code>. themes.json contain array of string in JSON format will be loaded in head tag on layout. Same as themes.json, script.json contain about html script tag that loaded just before close body tag in layout. Leave it empty, because the framework only detect a folder in view which is contain script.json and theme.json. Here is the structure of Seme Framework Themes.</p>
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
              <highlight-code lang="html">
app/
-view/
--front/
---themes.json
---script.json
---page/
----col-1.php
----col-2-left.php
----html/
-----head.php
-----header.php
-----topbar.php
-----footer.php
-----sidemenu.php
skin/
-front
--css
--js
--img
              </highlight-code>
            </div>
          </div>

          <p>
            Create new folder <i>page</i> under <code>app/view/front</code> and then create layout file with php extension, name it <code>col-1.php</code>.
            Then use this code.
          </p>
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
              <highlight-code lang="html">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
 &lt;head&gt;
  &lt;?php $this-&gt;getThemeElement("page/html/head",$__forward); ?&gt;
 &lt;/head&gt;
 &lt;body&gt;
  &lt;?php $this-&gt;getThemeElement('page/html/topbar',$__forward); ?&gt;
  &lt;div class="container"&gt;
   &lt;div class="row"&gt;
    &lt;div class="col-md-12"&gt;
     &lt;?php $this-&gt;getThemeContent(); ?&gt;
      &lt;/div&gt;
     &lt;/div&gt;
    &lt;/div&gt;
    &lt;?php $this-&gt;getThemeElement('page/html/footer',$__forward); ?&gt;

    &lt;?php $this-&gt;getJsFooter(); ?&gt;
    &lt;script&gt;
     &lt;?php $this-&gt;getJsContent(); ?&gt;
      $(document).ready(function(e){
       &lt;?php $this-&gt;getJsReady(); ?&gt;
      });
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
            </highlight-code>
          </div>
        </div>

        <h3>Memanggil layout</h3>
        <p>
          Setelah tema di setel, sekarang saatnya untuk memanggil tema dari controller.
        </p>

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
&#x3C;?php
class Home extends SENE_Controller{
&#x9;public function __construct(){
&#x9;&#x9;parent::__construct();
&#x9;&#x9;$this-&#x3E;setTheme(&#x27;front&#x27;); //means load default for view app/view/front
&#x9;}
&#x9;private function __getMembers(){
&#x9;&#x9;$members = array();
&#x9;&#x9;$members[] = &#x27;Daeng&#x27;;
&#x9;&#x9;$members[] = &#x27;Andi&#x27;;
&#x9;&#x9;$members[] = &#x27;Reza&#x27;;
&#x9;&#x9;return $members;
&#x9;}
&#x9;public function index(){
&#x9;&#x9;$data = array();
&#x9;&#x9;$data[&#x27;title&#x27;] = &#x27;EyeShield21 Yi Ha!&#x27;;
&#x9;&#x9;$data[&#x27;content&#x27;] = &#x27;This content are from controller, our member is:&#x27;;
&#x9;&#x9;$data[&#x27;members&#x27;] = $this-&#x3E;__getMembers(); //obtained data from private function
&#x9;&#x9;$this-&#x3E;putThemeContent(&#x27;home/home&#x27;,$data); //pass $data to view
&#x9;&#x9;$this-&#x3E;loadLayout(&#x27;col-1&#x27;,$data); //must executed before render
&#x9;&#x9;$this-&#x3E;render(); //this function allow to show view to browser
&#x9;}
}
                </highlight-code>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/id/model/last_id/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Model::last_id
          </nuxt-link>
        </div>
        <div class="nav-bottom-right">
          <nuxt-link to="/id/configuration/theme/" class="btn">
            Membuat Tema
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
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
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'View',
      description: 'Pelajari selengkapnya penggunaan konsep View di Seme Framework versi 4.0.0.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/id/',
          text: 'ID',
        }
      ]
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'id'
      },
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
        "dateCreated": "2020-06-11T10:12:00+07:00",
        "datePublished": "2020-06-11T10:12:00+07:00",
        "dateModified": "2021-06-25T17:11:31+07:00",
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
    ];
  }
}
</script>
