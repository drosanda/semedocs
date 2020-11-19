<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/">4.0.0 (bahasa)</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0.0/model">Model</NuxtLink></li>
        <li class="unavailable">update_as</li>
      </ul>
    </nav>
    <div class="columns">
      <div class="column">
        <div class="content">
          <h1 class="">Metode Update AS</h1>
					<p>Metode update_as dari kelas SENE_MySQLi_Model merupakan metode yang sama dengan metode Update, namun nilai updatenya tidak <b><i>auto escaped</i></b>. Metode ini cocok untuk melakukan update nilai dari kolom ke kolom didalam tabel yang sama.</p>
          <p>This method is available from SEME Framework version 4.0.2.</p>

          <b-message class="is-warning">
            <p><b>Perhatian</b></p>
            <p>
              Pastikan untuk memeriksa dan menggunakan fungsi <i>escape</i> (<code>$this->db->esc('NILAI')</code>) pada pasangan kunci dan nilai untuk mencegah <b>SQL injection</b>.
            </p>
          </b-message>

					<h2>Parameter</h2>
					<p>Update AS memiliki 3 parameter yaitu <b>nama tabel</b> dan <b>pasangan kunci dan nilai</b> untuk bahan updatenya.</p>
					<code v-highlight class="php">$this->db->update_as(string $table_name, array $data_update, [bool $is_debug=0]): bool</code>

          <h3>$table_name</h3>
          <p>Diisi dengan nama tabel yang akan diupdate.</p>
          <h3>$data_update</h3>
          <p>Berisikan <b>array</b> 1 dimensi yang didalamnya terdiri dari atas kunci dan nilainya. Kunci untuk nama kolom, sementara nilai berisikan nilai baru yang akan diedit.</p>
          <h3>$is_debug</h3>
          <p>Flag untuk mengaktifkan mode debug.</p>

          <h2>Contoh Penggunaan</h2>
					<p>Berikut ini adalah contoh pengunaannya</p>

          <pre><code v-highlight class="php">&#x3C;?php
class Blog_Model extends SENE_Model{
  var $tbl = &#x27;blog&#x27;;
  var $tbl_as = &#x27;b&#x27;;
  public function __construct(){
&#x9; parent::__construct();
  }
  public function update(){
    $du = array();
    $du[&#x27;counter&#x27;] = &#x27;&#x60;counter&#x60;+1&#x27;;
    $this-&#x3E;db-&#x3E;where(&#x22;id&#x22;,1);
    $this-&#x3E;db-&#x3E;update_as($ths-&#x3E;tbl,$du);
  }
}</code></pre>



          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/model/select" type="is-link" icon-pack="fa" icon-left="chevron-left" class="is-pulled-left">
            Model::select
          </b-button>
        </div>
        <div class="column is-2">&nbsp;</div>
        <div class="column">
          <b-button tag="router-link" to="/4.0.0/model/update" type="is-link" icon-pack="fa" icon-right="chevron-right" class="is-pulled-right">
            Model::update
          </b-button>
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
      name: 'Seme Framework v4.0.x',
      suffix: ' - Dokumentasi Seme Framework v4.0.x ',
      title: 'Model::update_as method',
      description: 'Pelajari selengkapnya tentang method update_as di Seme Framework versi 4.0.0'
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
