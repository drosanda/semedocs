<template>
  <div class="section">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul class="breadcrumbs">
            <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
<li class=""><NuxtLink to="/4.0.0/">4.0.0</NuxtLink></li>
                <li class=""><NuxtLink to="/4.0.0/database">Database</NuxtLink></li>
            <li class="unavailable">Quick Start</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Database Quick Start</h1>
          <p>The following page contains example code showing how the database class is used. For complete details please read the individual pages describing each function.</p>

          <h2>Initializing the Database Class</h2>
					<p>The following code loads and initializes the database class based on your <a href="config-database">configuration</a> settings. Here the steps:</p>
					<ol>
						<li>Edit and change your database connection in <b>app/config/database.php</b>.</li>
						<li>Extend the SENE_Model class in your model.</li>
						<li>Execute the parent constructor in your model constructor.</li>
					</ol>
					<p>Example:</p>
					<pre>class Name_Table_Model extends SENE_Model{
	var $tbl = 'name_tabel';
	var $tbl_as = 'nt';
	public function __construct(){
		parent::__construct();
		$this->db->from($this->tbl,$this->tbl_as);
	}
	//execute your method below
}</pre>
					<hr>
          <h2>Get Table Result</h2>
					<p>To obtain data from table, you can simply use manual query or query builder. Here is the example</p>
					<pre>class Name_Table_Model extends SENE_Model{
	var $tbl = 'name_tabel';
	var $tbl_as = 'nt';
	public function __construct(){
		parent::__construct();
		$this->db->from($this->tbl,$this->tbl_as);
	}
	//execute your method below
	public function get(){
		//because from and select automatically executed on constructor
		return $this->db->get();
	}
	public function getRawSQL(){
		$sql = 'SELECT * FROM table_name WHERE 1';
		return $this->db->query($sql);
	}

}</pre>
					<p>The get method will return the array of object from table_name using query builder style. But getRawSQL get the array of object through raw SQL query.</p>
					<hr>

          <h2>Insert Data to Table</h2>
					<p>Adding data to table simply using query builder style or raw query style</p>
					<pre>class Name_Table_Model extends SENE_Model{
	var $tbl = 'name_tabel';
	var $tbl_as = 'nt';
	public function __construct(){
		parent::__construct();
		$this->db->from($this->tbl,$this->tbl_as);
	}
	//execute your method below
	public function set($data){
		//data is array key value pair
		//which is key the fieldname of table
		//which is value the value of field
		$res=$this->db->insert($this->tbl,$data);
		if($res){
			return $this->db->lastId();
		}else{
			return 0;
		}
	}
	public function setRawSQL($name,$birth_date){
		$sql = 'INSERT INTO table_name(id,name,birth_date)
		VALUES(NULL,'.$this->db->esc($name).','.$this->db->esc($birth_date).')';
		$res = $this->db->exec($sql);
		if($res){
			return $this->db->lastId();
		}else{
			return 0;
		}
	}
}</pre>
					<p>All method will return integer more than 0 if executed properly and will return 0 or FALSE if failed. This method also return the last inserted ID to column. So you can expand your implementation future.</p>
					<hr>

          <h2>Update Data on Table</h2>
					<p>To change data on table simply using query builder style or raw query style</p>
					<pre>class Name_Table_Model extends SENE_Model{
	var $tbl = 'name_tabel';
	var $tbl_as = 'nt';
	public function __construct(){
		parent::__construct();
		$this->db->from($this->tbl,$this->tbl_as);
	}
	//execute your method below
	public function update($id,$data){
		//data is array key value pair
		//which is key the fieldname of table
		//which is value the value of field
		$this->db->where('id',$id);
		return $this->db->update($this->tbl,$data);
	}
	public function updateRawSQL($id,$name,$birth_date){
		$sql = 'UPDATE table_name SET
			name = '.$this->db->esc($name).',
			birth_date = '.$this->db->esc($birth_date).'
			WHERE id = '.$this->db->esc($id);
		return $this->db->exec($sql);
	}
}</pre>
					<p>All method will return integer more than 0 if executed properly and will return 0 or FALSE if failed.</p>
					<hr>

          <h2>Delete Data on Table</h2>
					<p>To delete data on table simply using query builder style or raw query style</p>
					<pre>class Name_Table_Model extends SENE_Model{
	var $tbl = 'name_tabel';
	var $tbl_as = 'nt';
	public function __construct(){
		parent::__construct();
		$this->db->from($this->tbl,$this->tbl_as);
	}
	//execute your method below
	public function update($id){
		//data is array key value pair
		//which is key the fieldname of table
		//which is value the value of field
		$this->db->where('id',$id);
		return $this->db->delete($this->tbl);
	}
	public function updateRawSQL($id){
		$sql = 'DELETE table_name WHERE id = '.$this->db->esc($id);
		return $this->db->exec($sql);
	}
}</pre>
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
    layout: 'v4.0.0'
    // page component definitions
  }
</script>

