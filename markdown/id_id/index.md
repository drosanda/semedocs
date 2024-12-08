<!--
Jenis Dokumen: Dokumentasi Teknis
Tujuan: Dokumentasi Seme Framework
Penulis: Daeng Rosanda
Tanggal Dibuat: 2024-11-26
Terakhir Diperbarui: 2024-11-26
-->
[Seme Framework](../index.md) > [en](#)

# Nama Proyek: Seme Framework

## Daftar Isi
1. [Ikhtisar](#overview)
2. [Pengaturan Lingkungan](#environment-setup)
3. [Panduan Instalasi](#installation-guide)
4. [Dokumentasi Kode](#code-documentation)
5. [Dokumentasi API](#api-documentation)
6. [Panduan Pengguna](#user-manual)
7. [Dokumentasi Basis Data](#database-documentation)
8. [Pemecahan Masalah dan Pertanyaan yang sering ditanyakan](#troubleshooting-and-faqs)
9. [Change Log](#change-log)
10. [Best Practices and Coding Standards](#best-practices-and-coding-standards)

## Gambaran Umum
### Tujuan
Seme Framework adalah framework berbasis PHP yang dirancang untuk membangun aplikasi web skala kecil hingga menengah secara efisien tanpa harus memulai dari awal. Framework ringan ini mempertahankan kinerja optimal dari pengembangan hingga produksi. Framework ini menggunakan pendekatan pengkodean tradisional, sehingga dapat diakses oleh programmer pemula dan berpengalaman.

Sebagai Web Application Framework, Seme Framework menjembatani kesenjangan antara Peramban Web dan Sistem Basis Data dengan menyediakan fungsi dan metode siap pakai untuk membuat aplikasi berbasis web. Framework ini menyederhanakan operasi basis data melalui pembangun kueri SQL bawaan sambil mempertahankan kompatibilitas SQL langsung. Hal ini memungkinkan pengembang untuk fokus pada penerapan logika bisnis mereka dan memberikan solusi melalui peramban web, daripada berurusan dengan pengaturan infrastruktur dasar.

#### Fitur Utama
Mengapa memilih Seme Framework:

##### 1. Pengembangan Berbasis PHP
- Dibangun dengan PHP, menawarkan sintaksis yang familier dan kompatibilitas dengan bahasa keluarga C
- Tidak diperlukan deklarasi tipe data eksplisit
##### 2. Arsitektur Ringan
- Struktur inti minimalis dengan kelas abstrak yang dioptimalkan
- Diuji kinerjanya menggunakan ekstensi CacheGrind dan XDEBUG
##### 3. Arsitektur MVC
- Menerapkan pola Model-View-Controller
- Mempromosikan struktur kode yang terorganisasi dan dapat dipelihara
##### 4. Perutean Otomatis
- Sistem perutean berbasis URL
- Pembuatan halaman cepat melalui pemetaan rute langsung
##### 5. Sistem Tema
- Mendukung tema tampilan yang dapat digunakan kembali
- Manajemen komponen tampilan yang efisien
##### 6. Pembuat Kueri Basis Data
- Pembuat kueri SQL bawaan
- Interaksi basis data yang aman dan disederhanakan
##### 7. Ekstensibilitas
- Integrasi yang mulus dengan modul dan pustaka PHP
- Arsitektur fleksibel untuk menambahkan fungsionalitas
##### 8. Dokumentasi & Dukungan
- Tutorial dan dokumentasi yang komprehensif
- Sumber belajar yang mudah dipahami oleh pemula

### Arsitektur

#### Arsitektur Model View Controller (MVC)
Seme Framework menerapkan pola arsitektur Model-View-Controller (MVC), yang memisahkan logika aplikasi menjadi beberapa komponen berdasarkan fungsi spesifiknya. Struktur kode dalam Seme Framework disusun menggunakan kelas, properti, dan metode, mengikuti prinsip Pemrograman Berorientasi Objek.

> Catatan: Meskipun implementasi ini mungkin tidak sepenuhnya mematuhi semua teori Pemrograman Berorientasi Objek formal, implementasi ini menyediakan pendekatan praktis untuk menggunakan konsep kelas dan objek Seme Framework.

Pemisahan MVC ini memberikan beberapa keuntungan:

- Organisasi kode yang lebih jelas
- Pengembangan aplikasi yang disederhanakan
- Pemeliharaan yang lebih mudah
- Manajemen alur proses yang lebih baik
- Penggunaan kembali kode yang ditingkatkan
- Pemisahan yang jelas antara operasi basis data dan logika bisnis
- Penanganan respons yang fleksibel (HTML atau JSON)
- Arsitektur MVC dalam Seme Framework memastikan bahwa aplikasi tetap dapat dipelihara dan diskalakan sambil menjaga basis kode tetap teratur dan efisien.

##### Model
Komponen Model diimplementasikan sebagai kelas yang secara khusus menangani komunikasi basis data. Mengelola:

- Pengambilan data
- Penyimpanan data
- Penghapusan data
- Interaksi basis data
- Operasi khusus tabel
Setiap kelas Model biasanya sesuai dengan tabel basis data tertentu atau grup tabel terkait.

##### View
Komponen View bertanggung jawab atas logika presentasi, biasanya berisi:

- Markup HTML
- Kode JavaScript
- Gaya CSS
- Kode PHP minimal (terutama untuk keluaran data)

View adalah file templat yang dimuat dan dirender oleh Controller.

##### Controller
Komponen Controller bertanggung jawab untuk menangani permintaan pengguna, biasanya berisi:

- Berisi logika aplikasi utama
- Membuat instance dan mengelola kelas Model
- Memuat dan merender file View
- Memproses permintaan HTTP
- Menghasilkan respons yang sesuai (halaman HTML atau output JSON)
- Menangani aliran data antara Model dan View

#### Cara Kerja Seme Framework

1. Permintaan HTTP mencapai Controller
2. Controller memuat kelas Model yang diperlukan
3. Controller memproses logika bisnis
4. Controller mengambil data melalui kelas Model
5. Controller memuat file View yang sesuai
6. Controller merender respons akhir (halaman web atau JSON)

## Panduan Instalasi
### Persyaratan
Kerangka Seme kompatibel dengan persyaratan berikut:
- PHP versi 7.4 atau lebih tinggi (kecuali 8.0)
- Basis data MySQL (versi 5.6 atau lebih tinggi)
- Server web dengan dukungan penulisan ulang URL (Apache, Nginx, IIS)

### Unduh Kerangka Seme
Ada dua metode untuk mengunduh Kerangka Seme:

#### Metode 1: File ZIP
1. Kunjungi [Seme Framework GitHub](https://github.com/drosanda/seme-framework)
2. Klik tombol hijau "Kode"
3. Pilih "Unduh ZIP"
4. Ekstrak file yang diunduh (seme-framework-master.zip) ke direktori server web Anda:
- Windows: D:\xampp\htdocs\seme_framework
- Mac: /Applications/XAMPP/htdocs/seme_framework
- Linux: /opt/lampp/htdocs/seme_framework

#### Metode 2: Berkas ZIP
Buka terminal/command prompt Anda dan navigasikan ke direktori server web Anda:
```shell
# Untuk Windows
D:
cd /xampp/htdocs
git clone git@github.com:drosanda/seme-framework.git seme_framework

# Untuk Mac
cd /Applications/XAMPP/htdocs
git clone git@github.com:drosanda/seme-framework.git seme_framework

# Untuk Linux
cd /opt/lampp/htdocs
git clone git@github.com:drosanda/seme-framework.git seme_framework
```

### Struktur Direktori

Kerangka Seme mengikuti organisasi berkas dan direktori yang terstruktur. Berikut ini adalah tata letak direktori lengkap dengan penjelasan setiap komponen:

```
seme-framework/
├── app/                    # Application directory
│   ├── cache/             # Cache storage
│   ├── config/            # Configuration files
│   │   └── development.php
│   ├── controller/        # Controller files
│   │   ├── home.php      # Default home controller
│   │   └── notfound.php  # 404 handler
│   ├── core/             # Core application files
│   ├── model/            # Model files
│   └── view/             # View files
├── kero/                  # Framework core directory
│   ├── bin/              # Command line tools
│   │   ├── docs.sh       # Documentation generator
│   │   ├── scan.sh       # Code scanner
│   │   └── test.sh       # Testing utility
│   ├── lib/              # Library files
│   │   ├── conumtext.php
│   │   ├── seme_dateindo.php
│   │   ├── seme_email.php
│   │   ├── seme_fpdf.php
│   │   ├── seme_log.php
│   │   ├── seme_page_fpdf.php
│   │   ├── seme_purifier.php
│   │   └── sene_json_engine.php
│   ├── sine/             # Core framework components
│   │   ├── SENE_Controller.php
│   │   ├── SENE_Engine.php
│   │   ├── SENE_Input.php
│   │   ├── SENE_Model.php
│   │   ├── SENE_MySQLi_Engine.php
│   │   └── SENE_Runner.php
│   └── Functions.php      # Global helper functions
└── index.php             # Application entry point

```

#### Direktori Utama
##### /app
Berisi kode khusus aplikasi Anda termasuk pengontrol, model, tampilan, dan berkas konfigurasi.

##### /kero
Menampung fungsionalitas inti, pustaka, dan utilitas kerangka kerja.

##### /kero/sine
Berisi komponen kerangka kerja utama yang menangani operasi MVC, koneksi basis data, dan pemrosesan permintaan.

##### /kero/lib
Menyediakan pustaka dan utilitas tambahan untuk tugas-tugas umum seperti penanganan tanggal, email, pembuatan PDF, dan banyak lagi.