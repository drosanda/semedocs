<template>
<div class="section">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul class="breadcrumbs">
            <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
            <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
            <li class="unavailable">Model</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Model</h1>
					<p>
            Model merupakan sebuah kelas yang berisi kode untuk berkomunikasi antara PHP dengan Database.
            Dari kelas ini dapat digunakan untuk mengambil data, menghapus data, dan merubah data terhadap tabel tertentu yang ada didalam database.
            Denga dipisahnya antara kode logika dengan logika khusus pada database, diharapkan proses pengkodean dapat rapih.
            Kelas ini hanya dapat dipanggil dari kelas Controller.
            Kelas model ini secara <em>default</em> berada ada didalam direktori <code>app/model</code>.
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
              <highlight-code lang="php">&#x3C;?php
class Blog_Model extends SENE_Model{
&#x9;var $tbl = &#x27;blog&#x27;;
&#x9;var $tbl_as = &#x27;b&#x27;;
&#x9;public function __construct(){
&#x9;&#x9;parent::__construct();
&#x9;&#x9;$this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
&#x9;}
}
              </highlight-code>
            </div>
          </div>

					<h2>Kompisisi Kode Kelas Model</h2>
					<p>
            Kelas model biasanya memiliki nama kelas yang sama dengan nama tabel yang akan dibuat modelnya untuk menghindari nama yang ambigu.
            Contoh kelas model untuk tabel <code>b_user</code>, maka nama kelas modelnya <code>B_User_Model</code>, sementara untuk nama filenya <code>b_user_model.php</code> yang disimpan didalam direktori <code>app/model/</code>.
          </p>

          <h3>Standar Penamaan</h3>
					<p>
            Seme Framework sebetulnya tidak membutuhkan nama khusus untuk pembuatan model, namun kami menyarankan penamaan model sama dengan nama tabel yang akan dibuatkan modelnya yang diikuti dengan akhiran <code>_model</code>.
            Kemudian untuk membuat aplikasi yang cukup besar, model juga bisa dipishkan berdasarkan sudut pandang aplikasi, contoh <code>app/model/api/</code>, <code>app/model/front/</code> dan sebagainya.
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
app/model/
-front/
--user_model.php
--blog_model.php
-admin/
--user_model.php
--blog_model.php
              </highlight-code>
            </div>
          </div>

					<h2>Menggunakan Query Builder</h2>

          <p>
            Kelas model di Seme Framework telah memiliki query builder atau penyusun query dengan kode PHP sehingga tidak perlu menghafal struktur SQL untuk mengambil data atau menghapus, atau mengedit data ke database.
            Dengan adanya query builder ini diharapkan dapat mempercepat dan mempermudah proses pembuatan kelas model di Seme Framework.
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
              <highlight-code lang="php">&#x3C;?php
class Blog_Model extends SENE_Model{
&#x9;var $tbl = &#x27;blog&#x27;;
&#x9;var $tbl_as = &#x27;b&#x27;;
&#x9;public function __construct(){
&#x9;&#x9;parent::__construct();
&#x9;}
&#x9;public function getAll(){
&#x9;&#x9;$this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
&#x9;&#x9;return $this-&#x3E;db-&#x3E;get();
&#x9;}
&#x9;public function countAll(){
&#x9;&#x9;$this-&#x3E;db-&#x3E;select_as(&#x27;COUNT(*)&#x27;,&#x27;total&#x27;,0);
&#x9;&#x9;$this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
&#x9;&#x9;$d = $this-&#x3E;db-&#x3E;get_first();
&#x9;&#x9;if(isset($d-&#x3E;total)) return $d-&#x3E;total;
&#x9;&#x9;return 0;
&#x9;}
&#x9;public function getById($id){
&#x9;&#x9;$this-&#x3E;db-&#x3E;where(&#x27;id&#x27;,$id);
&#x9;&#x9;$this-&#x3E;db-&#x3E;from($this-&#x3E;tbl,$this-&#x3E;tbl_as);
&#x9;&#x9;return $this-&#x3E;db-&#x3E;get_first();
&#x9;}
&#x9;public function set($di=array()){
&#x9;&#x9;$this-&#x3E;db-&#x3E;insert($this-&#x3E;tbl,$di);
&#x9;&#x9;return $this-&#x3E;db-&#x3E;last_id;
&#x9;}
&#x9;public function update($id,$du=array()){
&#x9;&#x9;$this-&#x3E;db-&#x3E;where(&#x27;id&#x27;,$id);
&#x9;&#x9;return $this-&#x3E;db-&#x3E;update($this-&#x3E;tbl,$du);
&#x9;}
&#x9;public function del($id){
&#x9;&#x9;$this-&#x3E;db-&#x3E;where(&#x22;id&#x22;,$id);
&#x9;&#x9;return $this-&#x3E;db-&#x3E;delete($this-&#x3E;tbl);
&#x9;}
}
              </highlight-code>
            </div>
          </div>
          
					<h3>Debug Query</h3>
					<p>Seme Framework memiliki fitur atau penanda (flag) untuk melakukan debug terhadap query yang dilakukan. Cukup menambahkan penanda 1 pada akhir parameter dari setiap metode yang digunakan.</p>
					<ul>
						<li>$this-&#x3E;db-&#x3E;get(&#x27;object&#x27;,<code>1</code>)</li>
						<li>$this-&#x3E;db-&#x3E;get_first(&#x27;object&#x27;,<code>1</code>)</li>
						<li>$this-&#x3E;db-&#x3E;insert($this-&#x3E;tbl,$di,0,<code>1</code>)</li>
						<li>$this-&#x3E;db-&#x3E;update($this-&#x3E;tbl,<code>1</code>);</li>
						<li>$this-&#x3E;db-&#x3E;delete($this-&#x3E;tbl,<code>1</code>);</li>
					</ul>
        </div>
      </div>

    </div>

    <div class="nav-bottom">
      <div class="nav-bottom-left">
        <nuxt-link to="/id/globals/" class="btn">
        <i class="fa fa-chevron-left"></i>
          Variabel Global
        </nuxt-link>
      </div>
      <div class="nav-bottom-right">
        <nuxt-link to="/id/model/select/" class="btn">
          Model::select
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
      name: 'Seme Framework v4.0.0',
      suffix: ' - Dokumentasi Seme Framework v4.0.0',
      title: 'Class Model',
      description: 'Pelajari selengkapnya tentang Class Model of melalui dokumentasi Seme Framework versi 4.0.0.'
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
