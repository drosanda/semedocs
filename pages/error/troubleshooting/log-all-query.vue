<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/troubleshooting/">Troubleshooting</NuxtLink></li>
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

            <pre>
&lt;?php
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
            </pre>
            <h2>Override the Class Model</h2>
            <p>Open <code>kero/sine/SENE_MySQLi_Engine.php</code> and then add the following codes.</p>

            <h3>After <code>exec</code> method</h3>
            <p>Find method exec on <code>kero/sine/SENE_MySQLi_Engine.php</code>, and then add this code.</p>
            <pre>.
public function exec($sql){
.</pre>
            <pre>
if(!class_exists(&#039;Seme_Log2&#039;)) require_once(SENEROOT.&#039;kero/lib/seme_log2.php&#039;);
$sl = new Seme_Log2();
$sl-&gt;changeFilename(&#039;sql.log&#039;);
$sl-&gt;write(&#039;SENE_MySQLi::exec -- &#039;.$sql);
            </pre>

            <h3>After <code>query</code> method</h3>
            <p>Find method exec on <code>kero/sine/SENE_MySQLi_Engine.php</code>, and then add this code.</p>
            <pre>
.
.
public function query($sql,$cache_enabled=0,$flushcache=0,$type=&quot;object&quot;){
            </pre>
            <pre>
if(!class_exists(&#039;Seme_Log2&#039;)) require_once(SENEROOT.&#039;kero/lib/seme_log2.php&#039;);
$sl = new Seme_Log2();
$sl-&gt;changeFilename(&#039;sql.log&#039;);
$sl-&gt;write(&#039;SENE_MySQLi::exec -- &#039;.$sql);
            </pre>

            <h2>Conclusion</h2>
            <p>After modified the core library, we can view the query log through <code>sql.log</code>.</p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button tag="router-link" to="/error/troubleshooting/" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
              Troubleshooting
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
      name: 'Advanced Debuging',
      suffix: ' - Troubleshooting',
      title: 'How to log all query',
      description: 'Learn more about how to log all query executed by Seme Framework.'
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
