<!--
Jenis Dokumen: Dokumentasi Teknis
Tujuan: Dokumentasi Seme Framework
Penulis: Daeng Rosanda
Tanggal Dibuat: 2024-11-26
Terakhir Diperbarui: 2024-11-26
-->

# Perutean URI pada Seme Framework 4

## Konsep Dasar
Perutean URI menghubungkan pola URL dengan fungsi pada controller. Umumnya URL mengikuti pola seperti `example.com/class/method/id`, namun Seme Framework memungkinkan perutean kustom agar struktur URL lebih fleksibel.

## Konfigurasi Rute
Rute didefinisikan pada berkas konfigurasi di `app/config/` dan dapat diterapkan pada:
- Lingkungan produksi (production)
- Lingkungan staging
- Lingkungan pengembangan (development)

## Jenis Wildcard
Tersedia dua jenis wildcard:
- `(:num)` - Hanya cocok dengan segmen numerik
- `(:any)` - Cocok dengan karakter apa pun dalam segmen

## Contoh Definisi Rute

### Pengalihan Dasar
```php
$routes['produk'] = "products";
```
Mengalihkan `/produk` ke controller products

### Rute Statis dengan Parameter
```php
$routes['produk/ojan'] = "products/detail/15";
```
Memetakan `/produk/ojan` ke method detail pada controller products dengan ID 15

### Rute Dinamis
```php
$routes['product/(:any)'] = "catalog/product_lookup";
```
Memetakan URL apa pun seperti `/product/something` ke method product_lookup

### Parameter Numerik
```php
$routes['product/(:num)'] = "catalog/product_lookup_by_id/$1";
```
Memetakan URL seperti `/product/123` ke method product_lookup_by_id dengan 123 sebagai parameter

## Rute Khusus (Reserved)

### Rute Home
```php
$routes['home'] = 'home';
```
Menangani permintaan ke URL root (/)

### Rute 404
```php
$routes['notfound'] = 'notfound';
```
Menangani permintaan ke halaman yang tidak ada

## Aturan Penting
1. Rute dijalankan sesuai urutan definisi - rute yang lebih atas diprioritaskan
2. Jangan menggunakan garis miring (/) di awal atau akhir pada definisi rute
3. Rute khusus harus didefinisikan sebelum rute wildcard
4. Perutean admin memerlukan konfigurasi terpisah

## Contoh Pola URL
```
example.com/product/1/
example.com/product/2/
example.com/product/3/
example.com/product/4/
```
URL tersebut dapat dipetakan ke method controller tertentu menggunakan sistem perutean.

## Praktik Terbaik
1. Selalu definisikan rute default untuk menghindari error 404
2. Susun rute dari yang paling spesifik hingga yang paling umum
3. Gunakan wildcard yang sesuai dengan input yang diharapkan
4. Pertimbangkan keterbacaan URL saat merancang rute
