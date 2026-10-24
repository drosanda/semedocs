<!--
Jenis Dokumen: Dokumentasi Teknis
Tujuan: Dokumentasi Seme Framework
Penulis: Daeng Rosanda
Tanggal Dibuat: 2024-11-26
Terakhir Diperbarui: 2024-11-26
-->

[Seme Framework](../../seme_framework.md) > [id](../index.md) > [model](index.md) > from

# from()
Method from digunakan untuk menentukan tabel yang menjadi sumber data pada query database. Method ini adalah bagian dari kelas SENE_Model dan dapat dikombinasikan dengan method Query Builder lainnya untuk membangun query yang kompleks.

##### Sintaks
```php
$this->db->from(string $table_name[, string $table_alias=""]): $this->db
```

##### Parameter
- `$table_name` (string, wajib): Nama tabel database
- `$table_alias` (string, opsional): Alias untuk nama tabel, wajib ketika menggunakan method JOIN

##### Nilai Kembalian
Mengembalikan instance objek database untuk method chaining.

##### Contoh

###### Contoh 1: Penggunaan Dasar
```php
class Blog_Model extends \SENE_Model {
    public $table = 'blog';
    public $table_alias = 'b';

    public function getList() {
        $this->db->from($this->table, $this->table_alias);
        return $this->db->get();
    }
}
```
SQL yang dihasilkan:
```sql
SELECT * FROM `blog` AS `b`;
```

###### Contoh 2: Tanpa Alias
```php
public function getAll() {
    $this->db->from('blog');
    return $this->db->get();
}
```
SQL yang dihasilkan:
```sql
SELECT * FROM `blog`;
```

##### Catatan
- Gunakan setelah method `select()` jika kolom tertentu diperlukan
- Alias tabel wajib digunakan pada operasi JOIN
- Dapat dirangkai (chaining) dengan method query builder lainnya
- Biasanya dipasangkan dengan `get()` atau `get_first()` untuk menjalankan query
