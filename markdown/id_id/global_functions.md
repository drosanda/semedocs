<!--
Jenis Dokumen: Dokumentasi Teknis
Tujuan: Dokumentasi Seme Framework
Penulis: Daeng Rosanda
Tanggal Dibuat: 2024-11-26
Terakhir Diperbarui: 2024-11-26
-->

# Variabel dan Fungsi Global

## Fungsi

### base_url()
Mengembalikan URL lengkap aplikasi Anda. Pastikan `$base_url` sudah dikonfigurasi dengan benar pada pengaturan konfigurasi.

### base_url_admin()
Mengembalikan URL lengkap untuk URL rahasia admin. Pastikan `$base_url_admin` sudah dikonfigurasi dengan benar pada pengaturan konfigurasi.

### Controller::debug()
Fungsi debugging yang menampilkan teks yang sudah diformat (pre-formatted) untuk keperluan debugging.

### dd()
Fungsi debugging alternatif yang menampilkan teks yang sudah diformat, mirip dengan `Controller::debug()`.

## Variabel

### $__forward
Variabel global yang digunakan untuk meneruskan variabel antar view.

#### Contoh Penggunaan:
Perhatikan struktur view berikut:
```
app/
└── view/
    └── front/
        ├── page/
        │   └── html/
        │       ├── header.php
        │       ├── navbar.php
        │       └── footer.php
        └── col-1.php
```

Untuk meneruskan variabel dari header.php ke navbar.php, gunakan variabel `$__forward`:

```php
<?php
$this->getThemeElement('page/html/navbar', $__forward);
?>
```
