<!--
Jenis Dokumen: Dokumentasi Teknis
Tujuan: Dokumentasi Seme Framework
Penulis: Daeng Rosanda
Tanggal Dibuat: 2024-11-26
Terakhir Diperbarui: 2024-11-26
-->

[Seme Framework](../../seme_framework.md) > [id](../index.md) > [model](index.md) > select

# select()
Method select digunakan untuk memilih kolom dari sebuah tabel. Method ini adalah bagian dari kelas SENE_Model dan dapat dikombinasikan dengan method Query Builder lainnya untuk membangun query yang kompleks.

##### Sintaks
```php
$this->db->select(string $column_name="*"): $this->db
```

##### Parameter
- `$column_name` (string, wajib): Nama kolom yang dipilih dari tabel
  - Dapat berupa satu nama kolom
  - Dapat menggunakan wildcard `*` untuk memilih semua kolom

##### Nilai Kembalian
Mengembalikan instance objek database untuk method chaining.

##### Contoh

###### Contoh 1: Memilih Semua Kolom dengan Wildcard
```php
class D_Blog_Model extends \SENE_Model {
    public $table = 'd_blog';
    public $table_alias = 'b';

    public function getList() {
        $this->db->select("*");
        $this->db->from($this->table, $this->table_alias);
        return $this->db->get();
    }
}
```
SQL yang dihasilkan:
```sql
SELECT * FROM `d_blog` AS `b`;
```

###### Contoh 2: Memilih Kolom Tertentu
```php
public function getById($id) {
    $this->db->select("id");
    $this->db->select("title");
    $this->db->select("content");
    $this->db->from($this->table, $this->table_alias);
    $this->db->where_as("id", $id);
    return $this->db->get_first();
}
```
SQL yang dihasilkan:
```sql
SELECT `id`, `title`, `content` FROM `d_blog` AS `b` WHERE `id` = 53;
```

##### Catatan
- Dapat dipanggil beberapa kali untuk memilih kolom yang berbeda
- Harus digunakan bersama method `from()` untuk menentukan tabel
- Umumnya digunakan bersama method query builder lain seperti `where()`, `limit()`, dll.
