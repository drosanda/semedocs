<!--
Jenis Dokumen: Dokumentasi Teknis
Tujuan: Dokumentasi Seme Framework
Penulis: Daeng Rosanda
Tanggal Dibuat: 2024-12-08
Terakhir Diperbarui: 2024-12-08
-->
[Seme Framework](../../seme_framework.md) > [id](../index.md) > [tutorial](tutorial.md) > [perkenalan](introduction.md)

# Perkenalan
Sebelum memulai tutorial, Anda harus melakukan apa yang dijelaskan pada halaman persyaratan  terlebih dahulu. Tujuan dari tutorial ini adalah, bagaimana berinteraksi dengan View dan Controller. Interaksi model akan dibahas pada tutorial berikutnya.

## Hello World!
Hello World sering digunakan untuk menggambarkan sintaks dasar dari suatu bahasa pemrograman. Tetapi pada Seme Framework, Hello World Hello World digunakan untuk memeriksa tujuan dasar MVC.

Asumsikan Seme Framework telah di instal sesuai dengan halaman Download & Install . Setelah itu, jalankan XAMPP dan buka `http://localhost/seme_framework` melalui google chrome atau firefox.

## Controller
Seme framework memiliki default controller yang bernama home.php dengan nama kelas yang sama yaitu Home. Pertama, buka file yang terletak di `app/controller/home.php`. Apabila tidak ada file atau direktori tersebut, buatlah terlebih dahulu.

```php
<?php
class Home extends \SENE_Controller
{
  public function __construct()
  {
    parent::__construct();
  }
  public function index()
  {
    echo 'Hello World!';
  }
}
```

Kemudian untuk memeriksa bahwa kode sudah dapat dijalankan melalui Seme Framework controller cukup buka alamat `http://localhost/seme_framework`, itu seharusnya sudah memunculkan Hello World! langsung dari kelas home.php controller.

