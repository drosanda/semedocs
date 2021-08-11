<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/error/troubleshooting/">Troubleshooting</NuxtLink></li>
          <li class="unavailable">How To Log All Query</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1>How To Log All Query</h1>
            <p>Seme Framework still has missing feature for capturing all query statement that running by framework.</p>
            <p>But, it is still possible for you to capture the query. Here is how to achieved that.</p>

            <h2>Create the log writer Class</h2>
            <p>First thing first we have to create a class that can write log into a file. Lets say we created the Seme_Log2 class on <code>kero/lib/seme_log2.php</code>, and the here is the source code.</p>

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
                <highlight-code lang="php">&lt;?php
class Seme_Log2 {
  var $directory = &#039;&#039;;
  var $filename = &#039;seme.log&#039;;
  var $path = &#039;&#039;;

  public function __construct(){
    $this-&gt;directory = SENEROOT;
    $this-&gt;path = $this-&gt;directory.DIRECTORY_SEPARATOR.$this-&gt;filename;
    if(!file_exists($this-&gt;path)) touch($this-&gt;path);
    if(!is_writable($this-&gt;path)){
      $this-&gt;directory = SENECACHE;
      $this-&gt;path = $this-&gt;directory.DIRECTORY_SEPARATOR.$this-&gt;filename;
      if(is_writable($this-&gt;path)) touch($this-&gt;path);
    }
  }
  public function changeFilename($filename){
    $this-&gt;filename = $filename;
    $this-&gt;directory = SENEROOT;
    $this-&gt;path = $this-&gt;directory.DIRECTORY_SEPARATOR.$this-&gt;filename;
    if(!file_exists($this-&gt;path)) touch($this-&gt;path);
    if(!is_writable($this-&gt;path)){
      $this-&gt;directory = SENECACHE;
      $this-&gt;path = $this-&gt;directory.DIRECTORY_SEPARATOR.$this-&gt;filename;
      if(is_writable($this-&gt;path)) touch($this-&gt;path);
    }
  }

  public function write($str){
    $f = fopen($this-&gt;path,&#039;a+&#039;);
    fwrite($f,date(&quot;Y-m-d H:i:s&quot;).&#039; - &#039;);
    fwrite($f,$str.PHP_EOL);
    fclose($f);
  }
  public function getPath(){
    return $this-&gt;path;
  }
}

</highlight-code>
</div>
</div>

            <h2>Override the Class Model</h2>
            <p>Open <code>kero/sine/SENE_MySQLi_Engine.php</code> and then add the following codes.</p>

            <h3>After <code>exec</code> method</h3>
            <p>Find method exec on <code>kero/sine/SENE_MySQLi_Engine.php</code>, and then add this code.</p>
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
public function exec($sql){
.
.
.
</highlight-code>
</div>
</div>

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
if(!class_exists(&#039;Seme_Log2&#039;)) require_once(SENEROOT.&#039;kero/lib/seme_log2.php&#039;);
$sl = new Seme_Log2();
$sl-&gt;changeFilename(&#039;sql.log&#039;);
$sl-&gt;write(&#039;SENE_MySQLi::exec -- &#039;.$sql);

</highlight-code>
</div>
</div>

            <h3>After <code>query</code> method</h3>
            <p>Find method exec on <code>kero/sine/SENE_MySQLi_Engine.php</code>, and then add this code.</p>
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
.
.
.
public function query($sql,$cache_enabled=0,$flushcache=0,$type=&quot;object&quot;){

  </highlight-code>
  </div>
  </div>

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
if(!class_exists(&#039;Seme_Log2&#039;)) require_once(SENEROOT.&#039;kero/lib/seme_log2.php&#039;);
$sl = new Seme_Log2();
$sl-&gt;changeFilename(&#039;sql.log&#039;);
$sl-&gt;write(&#039;SENE_MySQLi::exec -- &#039;.$sql);

</highlight-code>
</div>
</div>

            <h2>Conclusion</h2>
            <p>After modified the core library, we can view the query log through <code>sql.log</code>.</p>
          </div>
        </div>
      </div>

      <div class="nav-bottom">
        <div class="nav-bottom-left">
          <nuxt-link to="/error/troubleshooting/" class="btn">
          <i class="fa fa-chevron-left"></i>
            Troubleshooting
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
      name: 'Advanced Debuging',
      suffix: ' - Troubleshooting',
      title: 'How to log all query',
      description: 'Learn more about how to log all query executed by Seme Framework.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/ertroror/',
          text: 'Error',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/error/troubleshooting/',
          text: 'Troubleshooting',
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
  jsonld() { this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
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
        "dateModified": "2021-06-11T01:04:00+07:00",
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
