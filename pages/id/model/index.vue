            <li class=""><NuxtLink to="/id/">4.0.0 (Bahasa)</NuxtLink></li>
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
              </highlight-code>
            </div>
          </div>
          
					<p>Seme Framework memiliki fitur atau penanda (flag) untuk melakukan debug terhadap query yang dilakukan. Cukup menambahkan penanda 1 pada akhir parameter dari setiap metode yang digunakan.</p>
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
