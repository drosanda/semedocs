<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2">3.2.x</NuxtLink></li>
          <li class=""><NuxtLink to="/3.2/database">Database</NuxtLink></li>
          <li class="unavailable">Quick Start</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Database Quick Start</h1>
            <p>The following page contains example code showing how the database class is used. For complete details please read the individual pages describing each function.</p>

            <h2>Initializing the Database Class</h2>
            <p>The following code loads and initializes the database class based on your <NuxtLink to="/3.2/config/database">configuration</NuxtLink> settings. Here the steps:</p>
            <ol>
              <li>Edit and change your database connection in <b>app/config/database.php</b>.</li>
              <li>Extend the SENE_Model class in your model.</li>
              <li>Execute the parent constructor in your model constructor.</li>
            </ol>
            <p>Example:</p>
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
                  class Name_Table_Model extends SENE_Model{
                    var $tbl = &#x27;name_tabel&#x27;;
                    var $tbl_as = &#x27;nt&#x27;;
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                    }
                    //execute your method below
                  }
                </highlight-code>
              </div>
            </div>
            <hr>
            <h2>Get Table Result</h2>
            <p>To obtain data from table, you can simply use manual query or query builder. Here is the example</p>
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
                  class Name_Table_Model extends SENE_Model{
                    var $tbl = &#x27;name_tabel&#x27;;
                    var $tbl_as = &#x27;nt&#x27;;
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                    }
                    //execute your method below
                    public function get(){
                      //because from and select automatically executed on constructor
                      return $this-&#x3E;db-&#x3E;get();
                    }
                    public function getRawSQL(){
                      $sql = &#x27;SELECT * FROM table_name WHERE 1&#x27;;
                      return $this-&#x3E;db-&#x3E;query($sql);
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>The get method will return the array of object from table_name using query builder style. But getRawSQL get the array of object through raw SQL query.</p>
            <hr>

            <h2>Insert Data to Table</h2>
            <p>Adding data to table simply using query builder style or raw query style</p>
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
                  class Name_Table_Model extends SENE_Model{
                    var $tbl = &#x27;name_tabel&#x27;;
                    var $tbl_as = &#x27;nt&#x27;;
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                    }
                    //execute your method below
                    public function set($data){
                      //data is array key value pair
                      //which is key the fieldname of table
                      //which is value the value of field
                      $res=$this-&#x3E;db-&#x3E;insert($this-&#x3E;tbl,$data);
                      if($res){
                        return $this-&#x3E;db-&#x3E;lastId();
                      }else{
                        return 0;
                      }
                    }
                    public function setRawSQL($name,$birth_date){
                      $sql = &#x27;INSERT INTO table_name(id,name,birth_date)
                      VALUES(NULL,&#x27;.$this-&#x3E;db-&#x3E;esc($name).&#x27;,&#x27;.$this-&#x3E;db-&#x3E;esc($birth_date).&#x27;)&#x27;;
                      $res = $this-&#x3E;db-&#x3E;exec($sql);
                      if($res){
                        return $this-&#x3E;db-&#x3E;lastId();
                      }else{
                        return 0;
                      }
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>All method will return integer more than 0 if executed properly and will return 0 or FALSE if failed. This method also return the last inserted ID to column. So you can expand your implementation future.</p>
            <hr>

            <h2>Update Data on Table</h2>
            <p>To change data on table simply using query builder style or raw query style</p>
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
                  class Name_Table_Model extends SENE_Model{
                    var $tbl = &#x27;name_tabel&#x27;;
                    var $tbl_as = &#x27;nt&#x27;;
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                    }
                    //execute your method below
                    public function update($id,$data){
                      //data is array key value pair
                      //which is key the fieldname of table
                      //which is value the value of field
                      $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;,$id);
                      return $this-&#x3E;db-&#x3E;update($this-&#x3E;tbl,$data);
                    }
                    public function updateRawSQL($id,$name,$birth_date){
                      $sql = &#x27;UPDATE table_name SET
                      name = &#x27;.$this-&#x3E;db-&#x3E;esc($name).&#x27;,
                      birth_date = &#x27;.$this-&#x3E;db-&#x3E;esc($birth_date).&#x27;
                      WHERE id = &#x27;.$this-&#x3E;db-&#x3E;esc($id);
                      return $this-&#x3E;db-&#x3E;exec($sql);
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>All method will return integer more than 0 if executed properly and will return 0 or FALSE if failed.</p>
            <hr>

            <h2>Delete Data on Table</h2>
            <p>To delete data on table simply using query builder style or raw query style</p>
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
                  class Name_Table_Model extends SENE_Model{
                    var $tbl = &#x27;name_tabel&#x27;;
                    var $tbl_as = &#x27;nt&#x27;;
                    public function __construct(){
                      parent::__construct();
                      $this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
                    }
                    //execute your method below
                    public function update($id){
                      //data is array key value pair
                      //which is key the fieldname of table
                      //which is value the value of field
                      $this-&#x3E;db-&#x3E;where(&#x27;id&#x27;,$id);
                      return $this-&#x3E;db-&#x3E;delete($this-&#x3E;tbl);
                    }
                    public function updateRawSQL($id){
                      $sql = &#x27;DELETE table_name WHERE id = &#x27;.$this-&#x3E;db-&#x3E;esc($id);
                      return $this-&#x3E;db-&#x3E;exec($sql);
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>All method will return integer more than 0 if executed properly and will return 0 or FALSE if failed.</p>
            <hr>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'v3.2',
  data (){
    return {
      name: 'Seme Framework v3.2.5',
      suffix: ' - Seme Framework 3.2.5',
      title: 'Quick Start',
      description: 'Learn more about quick start database Reference on Seme Framework 3.2.5.',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2',
          text: '3.2.x'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/3.2/database',
          text: 'Database'
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
        "dateCreated": "2021-08-04T22:03:01+07:00",
        "datePublished": "2021-08-04T22:03:02+07:00",
        "dateModified": "2021-08-04T21:58:32+07:00",
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
